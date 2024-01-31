import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import {
    ButtonSubmit,
    DivFooter,
    ModalCustom,
    TitleWarning
} from "../../../../pages/searchRestaurant/Component/Post/styles";
import {ReportContainer, TextAreaCustom} from "../../styled";
import {Radio, Space} from "antd";

const ReportModal = ({ title, visible, onCancel, onsubmit, userId, postId, commentId }) => {
    const [valueRadio, setValueRadio] = useState(1);
    const [valueCommit, setValueCommit] = useState('');
    const newReport = {
        userId: userId,
        postReportId: postId,
        commentReportId: commentId,
        ReportProblemId: valueRadio,
        desc: valueCommit,
    };

    const onChange = (e) => {
        setValueRadio(e.target.value);
    }

    return (
        <ModalCustom
            title={title}
            open={visible}
            onCancel={onCancel}
            footer={
                <DivFooter>
                    <ButtonSubmit
                        disabled={valueRadio === 4 && valueCommit === ''}
                        onClick={() => {
                            onsubmit(newReport);
                            onCancel();
                        }}
                    >
                        Gửi
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
                    Vấn đề cần báo cáo
                </h3>
                <Radio.Group onChange={onChange} value={valueRadio}>
                    <Space direction="vertical">
                        <Radio value={1}>Nội dung sai lệch/ Tin giả</Radio>
                        <Radio value={2}>Từ ngữ đồi trụy, kích động</Radio>
                        <Radio value={3}>Từ ngữ xúc phạm, công kích</Radio>
                        <Radio value={4}>
                            Khác...
                        </Radio>
                    </Space>
                </Radio.Group>
                <h3>
                    {valueRadio === 4 ? 'Vui lòng điền lý do ( Bắt buộc )' : 'Vui lòng điền lý do ( Không bắt buộc )'}
                </h3>
                <TextAreaCustom value={valueCommit} onChange={(e) => setValueCommit(e.target.value)} rows={4} placeholder="Nhập ý kiến của bạn"/>
            </ReportContainer>
        </ModalCustom>
    );
};

export default ReportModal;
