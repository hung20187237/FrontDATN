import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {
    BoxContent,
    ButtonSubmit,
    DivFooter, IconWarning,
    ModalCustom, TitleWarning,
} from "../../../../pages/searchRestaurant/Component/Post/styles";
import {Col, message, Row} from "antd";
import {ReportContainer} from "../../../../components/post/styled";
import warningIcon from "../../../../images/icon/review/warning.svg";

const InfoCommentModal = ({title, visible, onCancel, onsubmit, commentId}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [comments, setComments] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await axios.get("http://localhost:8800/api/comment/" + commentId);
            setComments(res.data);
        };
        if (commentId) {
            fetchComments();
        }
    }, [commentId]);

    const handleCommentDelete = async () => {
        try {
            await axios.delete("http://localhost:8800/api/comment/adminRole/" + commentId);
        } catch (err) {
            console.log(err);
        }
    };

    const handleReportDelete = async () => {
        try {
            await axios.delete("http://localhost:8800/api/report/byCommentId/" + commentId);
        } catch (err) {
            console.log(err);
        }
    };


    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Xóa bài viết thành công',
        });
    };

    return (
        <>
            {contextHolder}
            <ModalCustom
                width={'800px'}
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
                        Nội dung Comment
                    </h3>
                    <Row>
                        <Col span={4}>
                            UserId:
                        </Col>
                        <Col span={20}>
                            {comments.userId}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            PostId:
                        </Col>
                        <Col span={20}>
                            {comments.postId}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Content:
                        </Col>
                        <Col span={20}>
                            {comments.desc}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}>
                            Reply:
                        </Col>
                        <Col span={20}>
                            {comments.reply && comments.reply.map(item => (
                                <>
                                    <Col span={4}>
                                        {item.userreplyId}:
                                    </Col>
                                    <Col span={20}>
                                        {item.descreply}
                                    </Col>
                                </>
                            ))}
                        </Col>
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
                                    handleCommentDelete().then(r => {
                                        setShowAlert(false);
                                        success();
                                        onsubmit();
                                        onCancel();
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
                        <TitleWarning>Bạn có chắc chắn muốn xóa Comment này chứ ?</TitleWarning>
                    </BoxContent>
                </ModalCustom>
            </ModalCustom>
        </>
    );
};

export default InfoCommentModal;
