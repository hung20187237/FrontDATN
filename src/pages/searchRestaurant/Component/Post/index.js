import React, {useEffect, useState} from 'react';
import {PostItem, PostItemLeft} from "../../styles";
import axios from "axios";
import {Link} from "react-router-dom";
import {
    ItemVote,
    PostItemBody,
    PostItemRight,
    PostItemRightContent,
    PostItemText,
    PostItemTitle,
    PostUserName,
    PostUserVote, ReactImageGridCustom, SeeMore, TextItemVote
} from "./styles";
import {format} from "timeago.js";
import {Popover, Rate} from "antd";

const PostRes = ({post}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const listUrl = post.img.map((img) => PF + img);
    const [user, setUser] = useState({});
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(
                `http://localhost:8800/api/user?userId=${post.userId}`
            );
            setUser(res.data);
        };
        fetchUser();
    }, []);

    const calculateAverage = obj => {
        let sum = 0;
        let count = 0;

        for (let key in obj) {
            sum += obj[key];
            count++;
        }
        return count === 0 ? 0 : sum / count;
    };



    const content = (
        <div>
            <ItemVote>
                <TextItemVote>Vị trí</TextItemVote>
                <Rate disabled defaultValue={4} />
            </ItemVote>
            <ItemVote>
                <TextItemVote>Không gian</TextItemVote>
                <Rate disabled defaultValue={5} />
            </ItemVote>
            <ItemVote>
                <TextItemVote>Đồ ăn</TextItemVote>
                <Rate disabled defaultValue={4} />
            </ItemVote>
            <ItemVote>
                <TextItemVote>Phục vụ</TextItemVote>
                <Rate disabled defaultValue={3} />
            </ItemVote>
            <ItemVote>
                <TextItemVote>Giá cả</TextItemVote>
                <Rate disabled defaultValue={4} />
            </ItemVote>
        </div>
    );

    return (
        <PostItem>
            <PostItemLeft>
                <Link to={`/profile/${user.username}`}>
                    <img
                        className="postProfileImg"
                        src={
                            user.avatar ? PF + user.avatar : PF + "person/noAvatar.png"
                        }
                        alt=""
                    />
                </Link>
            </PostItemLeft>
            <PostItemRight>
                <PostItemRightContent>
                    <PostItemTitle>
                        <PostUserName>
                            <a href={`/profile/${user.username}`}>
                                {user.username}
                            </a>
                            <span className="postDate">{format(post.createdAt)}</span>
                        </PostUserName>
                        <PostUserVote>
                            <Popover content={content} title="Đánh giá" placement="topRight" arrow={true}>
                                <span>
                                    <b>{calculateAverage(post.rating)}</b>
                                </span>
                            </Popover>
                        </PostUserVote>
                    </PostItemTitle>
                    <PostItemBody>
                        <PostItemText
                            className="postText"
                            dangerouslySetInnerHTML={{ __html: post.desc }}
                            show={showMore}
                        />
                        <SeeMore onClick={() => setShowMore(!showMore)}>{showMore ? 'Rút gọn' : 'Xem thêm'}</SeeMore>
                        <div className="postcenterimg">
                            {post.img && <ReactImageGridCustom images={listUrl} />}
                        </div>
                    </PostItemBody>
                </PostItemRightContent>
            </PostItemRight>
        </PostItem>
    );
};

export default PostRes;