import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import {
    BoxContent,
    ButtonSubmit,
    DivFooter, IconWarning,
    ModalCustom, TitleWarning,
} from "../../../../pages/searchRestaurant/Component/Post/styles";
import {Col, Row, Space} from "antd";
import {ReportContainer} from "../../../../components/post/styled";
import warningIcon from "../../../../images/icon/review/warning.svg";

const ModalAlert = ({ title, visible, onCancel, onsubmit, content }) => {

    return (
        <ModalCustom
            width={'800px'}
            title={title}
            open={visible}
            onCancel={onCancel}
            footer={
                <DivFooter>
                    <ButtonSubmit
                        onClick={() =>  onsubmit()}
                    >
                        Đồng ý xóa
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
            <BoxContent>
                <IconWarning src={warningIcon}/>
                <TitleWarning>{content}</TitleWarning>
            </BoxContent>
        </ModalCustom>
    );
};

export default ModalAlert;
