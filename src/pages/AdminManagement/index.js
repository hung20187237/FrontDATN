import React, {useContext, useEffect, useState} from 'react';
import {Layout, Menu, message, Space, Table, Tag, theme} from 'antd';
import searchIcon from "../../images/icon/adminManagement/search.svg";
import filterIcon from "../../images/icon/adminManagement/Filter.svg";
import {BoxFilter, BoxIcon, BoxSearch, ContainerHeader, InputCustom, SearchBar, SearchContainer} from "./styles";
import {Link} from "react-router-dom";
import {Context} from "../../context/Context";
import axios from "axios";
import moment from "moment";
import InfoModal from "./component/InforReportPopup";
import {
    BoxContent,
    ButtonSubmit,
    DivFooter, IconWarning,
    ModalCustom,
    TitleWarning
} from "../searchRestaurant/Component/Post/styles";
import InfoPostModal from "./component/InfoPostPopup";
import InfoCommentModal from "./component/InfoCommentPopup";
import ModalAlert from "./component/ModalAlert";
import InfoUserModal from "./component/InforUserPopup";
import ModalChangeRole from "./component/ChangeRole";

const {Header, Content, Footer, Sider} = Layout;

export default function AdminManagement() {
    const {user, dispatch} = useContext(Context);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [messageApi, contextHolder] = message.useMessage();
    const [listUsers, setListUsers] = useState([]);
    const [listPosts, setListPosts] = useState([]);
    const [listComments, setListComments] = useState([]);
    const [listReports, setListReports] = useState([]);
    const [showModalReport, setShowModalReport] = useState(false);
    const [showModalPost, setShowModalPost] = useState(false);
    const [showModalComment, setShowModalComment] = useState(false);
    const [showModalUser, setShowModalUser] = useState(false);
    const [showModalChangeRole, setShowModalChangeRole] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertPosts, setShowAlertPosts] = useState(false);
    const [showAlertComment, setShowAlertComment] = useState(false);
    const [dataReport, setSetDataReport] = useState({});
    const [selectMenu, setSelectMenu] = useState('1');
    const [userId, setUserId] = useState('');
    const [postId, setPostId] = useState('');
    const [reportId, setReportId] = useState('');
    const [commentId, setCommentId] = useState('');
    const [userRole, setUserRole] = useState('user');

    const success = (content) => {
        messageApi.open({
            type: 'success',
            content: content,
        });
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width: '4%',
            render: (text, record, index) => <div>{index + 1}</div>
        },
        {
            title: 'Name',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <div>{text}</div>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => <div>{moment(text).format('MMMM Do YYYY, h:mm:ss a')}</div>,
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: (text) => <div>{text === '1' ? 'Kích hoạt' : 'Vô hiệu hóa'}</div>,
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
            render: (text) =>
                <Tag color="#108ee9" key={text}>
                    {text}
                </Tag>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a
                        onClick={() => {
                            setShowModalUser(true);
                            setUserId(record._id)
                        }}
                    >Info</a>
                    {record.role !== 'admin' &&
                        <>
                            <a
                                onClick={() => {
                                    handleChangeStatus(record._id, record.status === '1' ? '0' : '1').then(r => fetchUsers())
                                }}
                            >{record.status === '1' ? 'Inactive' : 'Active'}</a>
                            <a
                                onClick={() => {
                                    setUserId(record._id)
                                    setShowModalChangeRole(true);
                                    setUserRole(record.role)
                                }}
                            >Change Role</a>
                        </>
                    }
                </Space>
            ),
        },
    ];


    const columnsReport = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width: '4%',
            render: (text, record, index) => <div>{index + 1}</div>
        },
        {
            title: 'UserId',
            dataIndex: 'userId',
            key: 'userId',
            render: (text) => <div>{text}</div>,
        },
        {
            title: 'PostReportId',
            dataIndex: 'postReportId',
            key: 'postReportId',
            render: (text) => <div>{text}</div>,
        },
        {
            title: 'CommentReportId',
            dataIndex: 'commentReportId',
            key: 'commentReportId',
            render: (text) => <div>{text}</div>,
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => <div>{moment(text).format('MMMM Do YYYY, h:mm:ss a')}</div>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => {
                        setShowModalReport(true);
                        setSetDataReport(record)
                    }}
                    >Handle</a>
                    <a
                        onClick={() => {
                            setShowAlert(true);
                            setReportId(record._id);
                        }}
                    >Delete</a>
                </Space>
            ),
        },
    ];

    const columnsComment = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width: '4%',
            render: (text, record, index) => <div>{index + 1}</div>
        },
        {
            title: 'UserId',
            dataIndex: 'userId',
            key: 'userId',
            render: (text) => <div>{text}</div>,
        },
        {
            title: 'PostId',
            dataIndex: 'postId',
            key: 'postId',
            render: (text) => <div>{text}</div>,
        },
        {
            title: 'Desc',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => <div>{moment(text).format('MMMM Do YYYY, h:mm:ss a')}</div>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a
                        onClick={() => {
                            setShowModalComment(true);
                            setCommentId(record._id)
                        }}
                    >Check</a>
                    <a
                        onClick={() => {
                            setShowAlertComment(true);
                            setCommentId(record._id)
                        }}
                    >Delete</a>
                </Space>
            ),
        },
    ];

    const columnsPost = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width: '4%',
            render: (text, record, index) => <div>{index + 1}</div>
        },
        {
            title: 'UserId',
            dataIndex: 'userId',
            key: 'userId',
            render: (text) => <div>{text}</div>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Address',
            dataIndex: 'place',
            key: 'place',
            width: '250px',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => <div>{moment(text).format('MMMM Do YYYY, h:mm:ss a')}</div>,
        },
        {
            title: 'Rating',
            key: 'status',
            dataIndex: 'status',
            render: (text) => <div>{text ? 'Kích hoạt' : 'Vô hiệu hóa'}</div>,
        },
        {
            title: 'Tags',
            key: 'tagkv',
            dataIndex: 'tagkv',
            width: '350px',
            render: (text, record) =>
                <>
                    <Tag color={"#1677FF"} key={text}>
                        {text}
                    </Tag>
                    <Tag color={"#1677FF"} key={record.tagtc}>
                        {record.tagtc}
                    </Tag>
                    <Tag color={"#1677FF"} key={record.tagdm}>
                        {record.tagdm}
                    </Tag>
                </>
        },
        {
            title: 'Action',
            key: 'action',
            width: '130px',
            render: (_, record) => (
                <Space size="middle">
                    <a
                        onClick={() => {
                            setShowModalPost(true);
                            setPostId(record._id)
                        }}
                    >Check</a>
                    <a
                        onClick={() => {
                            setShowAlertPosts(true);
                            setPostId(record._id)
                        }}
                    >Delete</a>
                </Space>
            ),
        },
    ];

    const fetchUsers = async () => {
        const res = await axios.get("http://localhost:8800/api/user/all/all/all/");
        setListUsers(res.data);
    };

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:8800/api/post/allPosts/" + user._id);
        setListPosts(res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
    };
    const fetchComments = async () => {
        const res = await axios.get("http://localhost:8800/api/comment/all/all/");
        setListComments(res.data);
    };
    const fetchReports = async () => {
        const res = await axios.get("http://localhost:8800/api/report/all/");
        setListReports(res.data);
    };

    useEffect(() => {
        fetchUsers();
        fetchComments();
        fetchPosts();
        fetchReports();
    }, [selectMenu]);


    const handleReportDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/api/report/" + id);
        } catch (err) {
            console.log(err);
        }
    };

    const handlePostDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/api/post/deleteAdmin/" + id);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCommentDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/api/comment/adminRole/" + id);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChangeStatus = async (id, status) => {
        try {
            await axios.put("http://localhost:8800/api/user/status/" + id,
                {
                    status: status,
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleChangeRole = async (id, role) => {
        try {
            await axios.put("http://localhost:8800/api/user/role/" + id,
                {
                    role: role,
                }
            );
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <Layout hasSider>
            {contextHolder}
            <Sider
                style={{
                    background: '#050F33',
                    overflow: 'auto',
                    padding: '24px',
                }}
                width={256}
            >
                <div
                    style={{
                        width: 130,
                        height: 130,
                        margin: 'auto',
                        marginBottom: 32
                    }}
                >
                    <img
                        src={user.avatar ? PF + user.avatar : PF + "person/noAvatar.png"}
                        alt=""
                        style={{
                            width: 130,
                            height: 130,
                        }}
                    />
                </div>
                <Menu
                    theme="dark"
                    selectedKeys={selectMenu}
                    onSelect={(e) => setSelectMenu(e.key)}
                    style={{
                        background: '#050F33',
                        color: 'white',
                        height: 'calc(100vh - (55px + 130px + 16px + 32px)'
                    }}
                >
                    {user.role === 'admin' &&
                        <Menu.Item key="1">Quản lý User</Menu.Item>
                    }
                    <Menu.Item key="2">Quản lý Posts</Menu.Item>
                    <Menu.Item key="3">Quản lý Comment</Menu.Item>
                    <Menu.Item key="4">Quản lý Report</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <ContainerHeader>
                        <SearchBar>
                            <SearchContainer>
                                <BoxSearch>
                                    <InputCustom
                                        placeholder="Nhập từ khóa"
                                        allowClear
                                        bordered={false}
                                    />
                                    <BoxIcon src={searchIcon}/>
                                </BoxSearch>
                            </SearchContainer>
                            <BoxFilter>
                                <BoxIcon src={filterIcon}/>
                            </BoxFilter>
                        </SearchBar>
                        <div style={{display: 'flex', gap: '20px'}}>
                            <Link to={"/"}>
                                <div>
                                    Trang chủ
                                </div>
                            </Link>
                            <Link to={"/profile/" + user.username}>
                                <img
                                    src={user.avatar ? PF + user.avatar : PF + "person/noAvatar.png"}
                                    alt=""
                                    className="topbarImg"
                                />
                            </Link>
                        </div>

                    </ContainerHeader>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                        marginLeft: 50,
                        marginRight: 50,
                    }}
                >
                    <div>
                        {selectMenu === '1' && <Table columns={columns} dataSource={listUsers}/>}
                        {selectMenu === '2' && <Table columns={columnsPost} dataSource={listPosts}/>}
                        {selectMenu === '3' && <Table columns={columnsComment} dataSource={listComments}/>}
                        {selectMenu === '4' && <Table columns={columnsReport} dataSource={listReports}/>}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
            <InfoModal
                title={<TitleWarning>Thông tin Report</TitleWarning>}
                visible={showModalReport}
                onCancel={() => setShowModalReport(false)}
                data={dataReport}
                onsubmit={(value) => {
                    setSelectMenu(value);
                    if (dataReport.postReportId) {
                        setPostId(dataReport.postReportId);
                        setShowModalPost(true);
                    } else {
                        setCommentId(dataReport.commentReportId);
                        setShowModalComment(true);
                    }

                }}
            />
            <InfoPostModal
                title={<TitleWarning>Thông tin Bài viết</TitleWarning>}
                visible={showModalPost}
                onCancel={() => setShowModalPost(false)}
                postId={postId}
                onsubmit={(value) => fetchPosts(value)}
            />
            <InfoCommentModal
                title={<TitleWarning>Thông tin Comment</TitleWarning>}
                visible={showModalComment}
                onCancel={() => setShowModalComment(false)}
                commentId={commentId}
                onsubmit={(value) => fetchComments(value)}
            />
            <InfoUserModal
                title={<TitleWarning>Thông tin User</TitleWarning>}
                visible={showModalUser}
                onCancel={() => setShowModalUser(false)}
                userId={userId}
            />
            <ModalChangeRole
                title={<TitleWarning>Phân quyền người dùng</TitleWarning>}
                visible={showModalChangeRole}
                onCancel={() => setShowModalChangeRole(false)}
                onsubmit={(role) => {
                    handleChangeRole(userId, role).then(r => {
                        setShowModalChangeRole(false);
                        success('phân quyền User thành công');
                        fetchUsers();
                    });
                }}
                role={userRole}
            />
            <ModalAlert
                title={<TitleWarning>Cảnh báo</TitleWarning>}
                visible={showAlertPosts}
                onCancel={() => setShowAlertPosts(false)}
                onsubmit={() => {
                    handlePostDelete(postId).then(r => {
                        setShowAlertPosts(false);
                        success('Xóa bài viết thành công');
                        fetchPosts();
                    });
                }}
                content={'Bạn có chắc chắn muốn xóa bài viết này chứ ?'}

            />
            <ModalAlert
                title={<TitleWarning>Cảnh báo</TitleWarning>}
                visible={showAlertComment}
                onCancel={() => setShowAlertComment(false)}
                onsubmit={() => {
                    handleCommentDelete(commentId).then(r => {
                        setShowAlertComment(false);
                        success('Xóa comment thành công');
                        fetchComments();
                    });
                }}
                content={'Bạn có chắc chắn muốn xóa Comment này chứ ?'}

            />
            <ModalAlert
                title={<TitleWarning>Cảnh báo</TitleWarning>}
                visible={showAlert}
                onCancel={() => setShowAlert(false)}
                onsubmit={() => {
                    handleReportDelete(reportId).then(r => {
                        setShowAlert(false);
                        success('Xóa report thành công');
                        fetchReports();
                    });
                }}
                content={'Bạn có chắc chắn muốn xóa Report này chứ ?'}

            />
        </Layout>
    );
};