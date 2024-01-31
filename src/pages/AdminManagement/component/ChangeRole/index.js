import {
    BoxContent,
    ButtonSubmit,
    DivFooter,
    IconWarning,
    ModalCustom, TitleWarning
} from "../../../searchRestaurant/Component/Post/styles";
import {Radio, Space} from 'antd';
import warningIcon from "../../../../images/icon/review/warning.svg";
import React, {useState} from "react";

const ModalChangeRole = ({ title, visible, onCancel, onsubmit, role }) => {
    const [selectRole, setSelectRole] = useState(role);

    return (
        <ModalCustom
            width={'800px'}
            title={title}
            open={visible}
            onCancel={onCancel}
            footer={
                <DivFooter>
                    <ButtonSubmit
                        onClick={() =>  onsubmit(selectRole)}
                    >
                        Đồng ý
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
                <TitleWarning>Chọn nhóm quyền cho người dùng</TitleWarning>
                <Radio.Group onChange={(e) => setSelectRole(e.target.value)} value={selectRole}>
                    <Space direction="vertical">
                        <Radio value={'user'}>User</Radio>
                        <Radio value={'manager'}>Manager</Radio>
                    </Space>
                </Radio.Group>
            </BoxContent>
        </ModalCustom>
    );
};

export default ModalChangeRole;