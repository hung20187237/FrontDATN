import React, {useContext, useRef, useState} from 'react';
import {Modal, Upload } from "antd";
import {BodyModal, RatingContainer, ReviewInputContainer} from "../../styles";
import {ButtonSubmit, DivFooter, ItemVote, TextItemVote} from "../Post/styles";
import BasicRating from "../../../../components/star/star";
import {Editor} from "@tinymce/tinymce-react";
import {Context} from "../../../../context/Context";
import {PlusOutlined} from "@ant-design/icons";

const ModalReview = ({title, visible, onSubmit, onCancel}) => {
    const {user} = useContext(Context);

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);

    const desc = useRef();
    const rating = useRef({
        place: 4,
        space: 4,
        food: 4,
        serve: 4,
        price: 4,
    });

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({fileList: newFileList}) => setFileList(newFileList);
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined/>
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    console.log('fileList',fileList)

    return (
        <Modal
            width={800}
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
                    <ButtonSubmit
                        onClick={() =>  onSubmit({
                            userId: user._id,
                            rating: rating.current,
                            desc: desc.current.getContent(),
                            fileList: fileList,
                        })}
                    >
                        Gửi đánh giá
                    </ButtonSubmit>
                </DivFooter>
            }
        >
            <BodyModal>
                <RatingContainer>
                    <h3>Xếp hạng của bạn</h3>
                    <div style={{width: '420px'}}>
                        <ItemVote>
                            <TextItemVote style={{fontSize: '20px'}}>Vị trí</TextItemVote>
                            <BasicRating ref={rating.current} type={'place'}/>
                        </ItemVote>
                        <ItemVote>
                            <TextItemVote style={{fontSize: '20px'}}>Không gian</TextItemVote>
                            <BasicRating ref={rating.current} type={'space'}/>
                        </ItemVote>
                        <ItemVote>
                            <TextItemVote style={{fontSize: '20px'}}>Đồ ăn</TextItemVote>
                            <BasicRating ref={rating.current} type={'food'}/>
                        </ItemVote>
                        <ItemVote>
                            <TextItemVote style={{fontSize: '20px'}}>Phục vụ</TextItemVote>
                            <BasicRating ref={rating.current} type={'serve'}/>
                        </ItemVote>
                        <ItemVote>
                            <TextItemVote style={{fontSize: '20px'}}>Giá cả</TextItemVote>
                            <BasicRating ref={rating.current} type={'price'}/>
                        </ItemVote>
                    </div>
                </RatingContainer>
                <ReviewInputContainer>
                    <h3>Đánh giá của bạn</h3>
                    <div>
                        <Editor
                            apiKey='2annu51m1l3p8h815234aps59gbyfkt1nzuckp6rrotynkpu'
                            onInit={(evt, editor) => (desc.current = editor)}
                            initialValue={"What's in your mind " + user.username + "?"}
                            init={{
                                height: 400,
                                width: "100%",
                                menubar: false,
                                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            }}
                        />
                    </div>
                </ReviewInputContainer>
                <div>
                    <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-card"
                        multiple
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img
                            alt="example"
                            style={{
                                width: '100%',
                            }}
                            src={previewImage}
                        />
                    </Modal>
                </div>
            </BodyModal>
        </Modal>
    );
};

export default ModalReview;