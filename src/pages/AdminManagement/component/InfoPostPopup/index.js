import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {
    BoxContent,
    ButtonSubmit, ContentWarning,
    DivFooter, IconWarning,
    ModalCustom, TitleWarning,
} from "../../../../pages/searchRestaurant/Component/Post/styles";
import {Col, Row, Tag, message, Table, Space} from "antd";
import {ReportContainer} from "../../../../components/post/styled";
import ReactImageGrid from "@cordelia273/react-image-grid";
import warningIcon from "../../../../images/icon/review/warning.svg";
import moment from "moment/moment";

const InfoPostModal = ({title, visible, onCancel, onsubmit, postId}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [messageApi, contextHolder] = message.useMessage();
    const [posts, setPosts] = useState({});
    const [listComments, setListComments] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const listUrl = posts.img && posts.img.map((img) => PF + img);

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
    ];

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:8800/api/post/" + postId);
            setPosts(res.data);
        };
        const fetchComments = async () => {
            const res = await axios.get("http://localhost:8800/api/comment/postManagement/" + postId);
            setListComments(res.data);
        };
        if (postId) {
            fetchPosts();
            fetchComments();
        }
    }, [postId]);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Xóa bài viết thành công',
        });
    };
    const handlePostDelete = async () => {
        try {
            await axios.delete("http://localhost:8800/api/post/deleteAdmin/" + postId);
        } catch (err) {
            console.log(err);
        }
    };
    const handleReportDelete = async () => {
        try {
            await axios.delete("http://localhost:8800/api/report/byPostId/" + postId);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            {contextHolder}
            <ModalCustom
                width={'1248px'}
                title={title}
                open={visible}
                onCancel={onCancel}
                footer={
                    <DivFooter>
                        <ButtonSubmit
                            onClick={() => {
                                handleReportDelete().then(r => onCancel());
                            }}
                        >
                            Duyệt
                        </ButtonSubmit>
                        <ButtonSubmit
                            onClick={() => setShowAlert(true)}
                        >
                            Xóa
                        </ButtonSubmit>
                        <ButtonSubmit
                            onClick={() => {
                                onCancel();
                            }}
                        >
                            Đóng
                        </ButtonSubmit>
                    </DivFooter>
                }
            >
                <ReportContainer>
                    <h3>
                        Nội dung bài viết
                    </h3>
                    <Row>
                        <Col span={4}>
                            UserId:
                        </Col>
                        <Col span={20}>
                            {posts.userId}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Tên Quán:
                        </Col>
                        <Col span={20}>
                            {posts.title}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Địa Chỉ:
                        </Col>
                        <Col span={20}>
                            {posts.place}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Tag:
                        </Col>
                        <Col span={20}>
                            <>
                                <Tag color={"#1677FF"} key={posts.tagkv}>
                                    {posts.tagkv}
                                </Tag>
                                <Tag color={"#1677FF"} key={posts.tagtc}>
                                    {posts.tagtc}
                                </Tag>
                                <Tag color={"#1677FF"} key={posts.tagdm}>
                                    {posts.tagdm}
                                </Tag>
                            </>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Content:
                        </Col>
                        <Col span={20}>
                            <div
                                className="postText"
                                dangerouslySetInnerHTML={{__html: posts.desc}}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Hình ảnh:
                        </Col>
                        <Col span={20}>
                            {posts.img && <ReactImageGrid images={listUrl} countFrom={4}/>}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Danh sách Comment:
                        </Col>
                        <Col span={20}/>
                    </Row>
                    <Row>
                        <Table
                            style={{
                                width: '100%'
                            }}
                            columns={columnsComment}
                            dataSource={listComments}
                        />
                    </Row>
                </ReportContainer>
                <ModalCustom
                    title={<TitleWarning>Cảnh báo</TitleWarning>}
                    visible={showAlert}
                    onCancel={() => setShowAlert(false)}
                    footer={
                        <DivFooter>
                            <ButtonSubmit
                                onClick={() => {
                                    handlePostDelete().then(r => {
                                        setShowAlert(false);
                                        success();
                                        onsubmit()
                                        onCancel()
                                    });
                                }}
                            >
                                Đồng ý xóa
                            </ButtonSubmit>
                            <ButtonSubmit
                                onClick={() => {
                                    setShowAlert(false);
                                }}
                            >
                                Đóng
                            </ButtonSubmit>
                        </DivFooter>
                    }
                >
                    <BoxContent>
                        <IconWarning src={warningIcon}/>
                        <TitleWarning>Bạn có chắc chắn muốn xóa bài viết này chứ ?</TitleWarning>
                    </BoxContent>
                </ModalCustom>
            </ModalCustom>
        </>

    );
};

export default InfoPostModal;
