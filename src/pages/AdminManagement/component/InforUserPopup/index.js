import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {
    BoxContent,
    ButtonSubmit,
    DivFooter, IconWarning,
    ModalCustom, TitleWarning,
} from "../../../../pages/searchRestaurant/Component/Post/styles";
import {Col, message, Row, Space, Table, Tag} from "antd";
import {ReportContainer} from "../../../../components/post/styled";
import moment from "moment/moment";

const InfoUserModal = ({title, visible, onCancel, userId}) => {
    const [user, setUser] = useState({});
    const [listPosts, setListPosts] = useState([]);

    const columnsPost = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            width: '4%',
            render: (text, record, index) => <div>{index + 1}</div>
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
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get("http://localhost:8800/api/user/adminRole/" + userId);
            setUser(res.data);
        };
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:8800/api/post/byUserId/" + userId);
            setListPosts(res.data);
        };
        if (userId) {
            fetchUsers();
            fetchPosts()
        }
    }, [userId]);

    console.log('user', user)

    return (
        <>
            <ModalCustom
                width={'1248px'}
                title={title}
                open={visible}
                onCancel={onCancel}
                footer={
                    <DivFooter>
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
                        Nội dung User
                    </h3>
                    <Row>
                        <Col span={4}>
                            UserId:
                        </Col>
                        <Col span={20}>
                            {user._id}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            PostId:
                        </Col>
                        <Col span={20}>
                            {user.username}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Email:
                        </Col>
                        <Col span={20}>
                            {user.email}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Ngày tạo:
                        </Col>
                        <Col span={20}>
                            {moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Phân quyền:
                        </Col>
                        <Col span={20}>
                            {user.role}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Danh sách bài viết:
                        </Col>
                        <Col span={20}/>
                    </Row>
                    <Row>
                        <Table columns={columnsPost} dataSource={listPosts}/>
                    </Row>
                </ReportContainer>
            </ModalCustom>
        </>
    );
};

export default InfoUserModal;
