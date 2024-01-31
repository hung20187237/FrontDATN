import "./Topbar.css";
import {useNavigate} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import {Link} from "react-router-dom";
import React, {useContext, useRef, useState, useEffect} from "react";
import {Context} from "../../context/Context";
import axios from "axios";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CreateIcon from "@mui/icons-material/Create";
import {AutoComplete, Button, Input, Modal} from "antd";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import {format} from "timeago.js";


export default function Topbar({socket}) {
    const {user, dispatch} = useContext(Context);
    const [notificationAlert, setNotificationAlert] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [countNewNotifications, setCountNewNotifications] = useState(-1);
    const [newNotification, setNewNotification] = useState();
    const [
        deletedfriendRequestNotification,
        setDeletedFriendRequestNotification,
    ] = useState();
    const [textSearch, setTextSearch] = useState("");
    const [postId, setPostId] = useState("");
    const [listSearchUser, setListSearchUser] = useState([]);
    const [optionUser, setOptionUser] = useState([]);
    const scrollRef = useRef();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    let navigate = useNavigate();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    }, [notifications]);

    useEffect(() => {
        const getNotifications = async () => {
            try {
                const res = await axios.get(
                    "https://aplus-review-food.onrender.com/api/notification/" + user._id
                );
                setNotifications(
                    res.data.sort((p1, p2) => {
                        return new Date(p2.createdAt) - new Date(p1.createdAt);
                    })
                );
            } catch (err) {
                console.log(err);
            }
        };
        getNotifications();
    }, [newNotification]);


    useEffect(() => {
        socket.current?.on("getNotification", (data) => {
            console.log(data);
            setNewNotification({
                sendUserId: data.sendUserId,
                sendUserName: data.sendUserName,
                receiveUserId: data.receiveUserId,
                type: data.type,
                post: data.post,
                createdAt: data.timestamp,
            });
        });
    }, [socket.current]);

    useEffect(() => {
        if (textSearch !== "") {
            const keyTextSearch = async (e) => {
                try {
                    const res = await axios.get(
                        `https://aplus-review-food.onrender.com/api/user/textSearch?searchText=${textSearch}`
                    );
                    setListSearchUser(res.data);
                } catch (err) {
                    console.log("err");
                }
            };
            keyTextSearch();
        }
    }, [textSearch]);

    useEffect(() => {
        const username = listSearchUser.filter((user) => user.username);
        const titles = listSearchUser.filter((user) => user.title);
        const restaurants = listSearchUser.filter((res) => res.name);
        setOptionUser([
            {
                label: renderTitle("Người dùng"),
                options: username.map((item) =>
                    renderItem(item, item.username, item._id)
                ),
            },
            {
                label: renderTitle("Địa chỉ"),
                options: titles.map((item) => renderItem(item, item.place, item._id)),
            },
            {
                label: renderTitle("Quán Ăn"),
                options: restaurants.map((item) =>
                    renderItem(item, item.name, item._id)
                ),
            },
        ]);
    }, [listSearchUser]);

    useEffect(() => {
        newNotification && setNotifications((prev) => [...prev, newNotification]);
        setCountNewNotifications(countNewNotifications + 1);
    }, [newNotification]);

    useEffect(() => {
        deletedfriendRequestNotification &&
        setNotifications(
            notifications.filter((notification) => {
                let deletedValue = {...deletedfriendRequestNotification, type: 4};

                return (
                    notification.sendUserName !== deletedValue.sendUserName &&
                    notification.type !== deletedValue.type &&
                    notification !== deletedfriendRequestNotification
                );
            })
        );
    }, [deletedfriendRequestNotification]);

    const renderItem = (item, title, key) => ({
        value: key || item._id,
        label: (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {title}
            </div>
        ),
        categoryid: (item.username && 1) || (item.place && 2) || (item.name && 3),
    });
    const renderTitle = (title) => <span>{title}</span>;
    const handleClickAcceptAddFriend = async (
        deletefriendRequestNotification
    ) => {
        try {
            await axios.put(
                `https://aplus-review-food.onrender.com/api/user/` + user._id + "/addfriend",
                {userId: deletefriendRequestNotification.sendUserId}
            );
            await axios.delete(`https://aplus-review-food.onrender.com/api/notification`, {
                data: {
                    sendUserId: deletefriendRequestNotification.sendUserId,
                    receiveUserId: user._id,
                    type: 4,
                },
            });
            await axios.post(`https://aplus-review-food.onrender.com/api/conversation/`, {
                firstUserId: deletefriendRequestNotification.sendUserId,
                secondUserId: user._id,
            });
            dispatch({
                type: "ADDFRIEND",
                payload: deletefriendRequestNotification.sendUserId,
            });
            setNotifications(
                notifications.filter((notification) => {
                    return notification != deletefriendRequestNotification;
                })
            );

            socket.current?.emit("sendNotification", {
                sendUserName: user.username,
                sendUserId: deletefriendRequestNotification.receiveUserId,
                receiveUserId: deletefriendRequestNotification.sendUserId,
                type: 5,
            });
        } catch (err) {
        }
    };

    const handleClickRejectAddFriend = async (
        deletefriendRequestNotification
    ) => {
        try {
            await axios.delete(`https://aplus-review-food.onrender.com/api/notification`, {
                data: {
                    sendUserId: deletefriendRequestNotification.sendUserId,
                    receiveUserId: user._id,
                    type: 4,
                },
            });
            setNotifications(
                notifications.filter((notification) => {
                    return notification != deletefriendRequestNotification;
                })
            );
            socket.current?.emit("sendNotification", {
                sendUserName: user.username,
                sendUserId: deletefriendRequestNotification.receiveUserId,
                receiveUserId: deletefriendRequestNotification.sendUserId,
                type: 6,
            });
        } catch (err) {
        }
    };

    const handleClickNotificationAlert = () => {
        setNotificationAlert(!notificationAlert);
        setCountNewNotifications(0)
    };

    const handleClickLogout = (e) => {
        dispatch({type: "LOG_OUT"});
        navigate("/");
    };
    const handleClickAdmin = (e) => {
        navigate("/adminManagement");
    };

    const handleClickSearch = async (value, option) => {
        console.log("keysearch", value, option);
        if (option.categoryid === 1) {
            navigate(`/profile/${value}`);
        } else if (option.categoryid === 2) {
            navigate(`/searchPost/${value}`);
        } else {
            navigate(`/searchRestaurant/${value}`);
        }
    };

    const NotificationAlertContainer = () => {
        return (
            <div className="notificationAlert">
                {notifications.map((notification) => {
                    let action;

                    if (notification.type === 1) {
                        action = "liked";
                        return (
                            <div className="notificationAlertItem" ref={scrollRef}>
                                <span
                                    className="notificationAlertItemDesc"
                                    dangerouslySetInnerHTML={{
                                        __html: `${notification.sendUserName} ${action} your post:  "${notification.post.substring(0, 50)}..."`,
                                    }}
                                />
                                <div className="notificationDate">
                                    {format(notification.createdAt)}
                                </div>
                            </div>
                        );
                    }
                    if (notification.type === 2) {
                        action = "commented";
                        return (
                            <div className="notificationAlertItem" ref={scrollRef}>
                                <span className="notificationAlertItemDesc">{`${notification.sendUserName} ${action} your post:  "${notification.post.substring(0, 50)}..."`}
                                </span>
                                <div className="notificationDate">
                                    {format(notification.createdAt)}
                                </div>
                            </div>
                        );
                    }
                    if (notification.type === 3) {
                        setDeletedFriendRequestNotification(notification);
                    }
                    if (notification.type === 4) {
                        return (
                            <div className="notificationAlertItem" ref={scrollRef}>
                                <span
                                    className="notificationAlertItemDesc">{` You have a friend request from ${notification.sendUserName}`}</span>
                                <div className="notificationDate">
                                    {format(notification.createdAt)}
                                </div>
                                <div className="friendRequestAlertItemButtons">
                                    <button
                                        className="friendRequestAlertItemButton"
                                        onClick={() => {
                                            handleClickAcceptAddFriend(notification);
                                        }}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="friendRequestAlertItemButton"
                                        onClick={() => {
                                            handleClickRejectAddFriend(notification);
                                        }}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        );
                    }
                    if (notification.type === 5) {
                        action = "Replycommented";
                        return (
                            <div className="notificationAlertItem" ref={scrollRef}>
                                <span className="notificationAlertItemDesc">{`${notification.sendUserName} ${action} your comment:  "${notification.post.substring(0, 50)}..."`}</span>
                                <div className="notificationDate">
                                    {format(notification.createdAt)}
                                </div>
                            </div>
                        );
                    }
                    if (notification.type === 8) {
                        return (
                            <div className="notificationAlertItem" ref={scrollRef}>
                                <span className="notificationAlertItemDesc">{`${notification.sendUserName} send you a message:  "${notification.post.substring(0, 50)}..."`}</span>
                                <div className="notificationDate">
                                    {format(notification.createdAt)}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    };

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">AplusReviewFood</span>
                </Link>
                <div className="khampha">
                    <Link
                        to="/newfeed"
                        style={{textDecoration: "none", color: "white"}}
                    >
                        <FindInPageIcon/>
                        <span className="textReview"> Khám Phá</span>
                    </Link>
                </div>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon" onClick={handleClickSearch}/>
                    <AutoComplete
                        popupClassName="certain-category-search-dropdown"
                        style={{width: "90%"}}
                        options={optionUser}
                        className="searchbar"
                        onSelect={handleClickSearch}
                    >
                        <input
                            style={{width: "100%", height: "30px"}}
                            placeholder="Search for friends"
                            className="searchInput"
                            onChange={(e) => {
                                setTextSearch(e.target.value);
                            }}
                            value={textSearch}
                        />
                    </AutoComplete>
                </div>
            </div>
            <div className="topbarRight">
                <div className="writeReview">
                    <Link to="/review" style={{textDecoration: "none", color: "white"}}>
                        <CreateIcon/>
                        <span className="textReview"> Viết Review</span>
                    </Link>
                </div>
                <div
                    className="topbarRightNotificationAlert"
                    onClick={handleClickNotificationAlert}
                >
                    <NotificationsIcon/>
                    <span className="topbarRightNotificationAlertIconBadge">
            {countNewNotifications}
          </span>
                    {notificationAlert ? <NotificationAlertContainer/> : null}
                </div>
                <Link to={"/profile/" + user.username}>
                    <img
                        src={user.avatar ? PF + user.avatar : PF + "person/noAvatar.png"}
                        alt=""
                        className="topbarImg"
                    />
                </Link>
                {user.role !== 'user' &&
                    <span className="topbarRightLogout" onClick={handleClickAdmin}>
                Admin
            </span>
                }
                <span className="topbarRightLogout" onClick={handleClickLogout}>
          Log out
        </span>
            </div>
        </div>
    );
}
