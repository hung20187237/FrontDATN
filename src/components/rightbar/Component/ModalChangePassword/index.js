import React, {useContext, useRef, useState} from 'react';
import {Form, Modal} from "antd";
import {Context} from "../../../../context/Context";
import Floating from "../../../FloatingLabel/Input";
import {DivFooter} from "../../../ModalHandle/styled";
import {ButtonSubmit} from "../../../../pages/searchRestaurant/Component/Post/styles";
import {ModalCustom} from "./styled";

const ModalChangePassword = ({title, visible, onSubmit, onCancel}) => {
    const {user} = useContext(Context);
    const [form] = Form.useForm();


    return (
        <ModalCustom
            width={500}
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
                        Hủy
                    </ButtonSubmit>
                    <ButtonSubmit
                        onClick={() => {
                            form.validateFields().then(value => {
                                onSubmit({
                                    oldPassword: value.oldPassword,
                                    newPassword: value.newPassword
                                })
                            });
                        }}
                    >
                        Cập nhật
                    </ButtonSubmit>
                </DivFooter>
            }
        >
            <Form
                form={form}
                validateTrigger={["onBlur"]}
            >
                <Form.Item
                    name="oldPassword"
                    rules={[
                        {
                            required: true,
                            message: "Xin vui lòng nhập mật khẩu hiện tại.",
                        },
                    ]}
                >
                    <Floating label={"Mật khẩu hiện tại"} isRequired autoFocus/>
                </Form.Item>
                <Form.Item
                    name="newPassword"
                    rules={[
                        {
                            required: true,
                            message: "Xin vui lòng nhập mật khẩu mới.",
                        },
                    ]}
                >
                    <Floating label={"Mật khẩu mới"} isRequired isPass/>
                </Form.Item>
                <Form.Item
                    name="repeatNewPassword"
                    rules={[
                        {
                            required: true,
                            message: "Xin vui lòng nhập lại mật khẩu mới.",
                        },
                    ]}
                >
                    <Floating label={"Nhập lại mật khẩu mới"} isRequired isPass/>
                </Form.Item>
            </Form>
        </ModalCustom>
    );
};

export default ModalChangePassword;