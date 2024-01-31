import "./Review.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CancelIcon from "@mui/icons-material/Cancel";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Context} from "../../context/Context";
import {Form, Select} from "antd";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Topbar from "../../components/topbar/Topbar";
import BasicRating from "../../components/star/star";
import warningIcon from "../../images/icon/review/warning.svg";
import {Editor} from "@tinymce/tinymce-react";
import ReactImageGrid from "@cordelia273/react-image-grid";
import SelectFloat from "../../components/FloatingLabel/SelectFloat";
import {SliderSlickData} from "../../components/slider2/SliderSlickData";
import {SliderData} from "../../components/slider1/SliderData";
import {CatologyData} from "../../components/catology/CatologyData";
import Floating from "../../components/FloatingLabel/Input/index";
import {FormCustom} from "./styles";
import {
    BoxContent,
    ButtonSubmit,
    ContentWarning,
    DivFooter,
    IconWarning,
    ItemVote,
    ModalCustom,
    TextItemVote,
    TitleWarning
} from "../searchRestaurant/Component/Post/styles";
import {mildKeywords, moderateKeywords, severeKeywords} from "./contant";
import axios from 'axios';
import MyMapComponent from "./Component/GoogleMap";
import {LoadScript} from "@react-google-maps/api";


export default function Review({socket}) {
    const {user} = useContext(Context);
    const [form] = Form.useForm();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const rating = useRef({
        place: 4,
        space: 4,
        food: 4,
        serve: 4,
        price: 4,
    });
    const place = useRef();
    const [mutifile, setMutifile] = useState("");
    const [mutiupload, setMutiupload] = useState(null);
    const [valuePlace, setValuePlace] = useState('');
    const [filterValue, setFilterValue] = useState({kv: [], tc: [], dm: []});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalTextOpen, setIsModalTextOpen] = useState(false);


    useEffect(() => {
        if (valuePlace) {
            form.setFieldsValue({place: valuePlace})
        }
    }, [valuePlace]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const value = await form.validateFields();
        const post = desc.current.getContent()
        const resultDesc = await handleContentUpload(post).then(r => {
            console.log(r)
            console.log(checkKeywordLevel(post, severeKeywords))
            console.log(checkKeywordLevel(post, moderateKeywords))
            console.log(checkKeywordLevel(post, mildKeywords))
            if (r) {
                if (checkKeywordLevel(post, severeKeywords)) {
                    console.log('a')
                    return "Bài viết chứa từ khóa lạm dụng nghiêm trọng.";
                } else if (checkKeywordLevel(post, moderateKeywords)) {
                    console.log('b')
                    return "Bài viết chứa từ khóa lạm dụng mức độ vừa.";
                } else if (checkKeywordLevel(post, mildKeywords)) {
                    console.log('c')
                    return "Bài viết chứa từ khóa lạm dụng nhẹ.";
                } else {
                    console.log('d')
                    return 0;
                }
            } else {
                return "Bài viết vi phạm tiêu chuẩn cộng đồng.";
            }
        })
        if (resultDesc === 0) {
            const newPost = {
                userId: user._id,
                desc: resultDesc === 0 ? desc.current.getContent() : '',
                title: value.name.trim(),
                rating: rating.current,
                place: value.place,
                tagkv: filterValue.kv,
                tagtc: filterValue.tc,
                tagdm: filterValue.dm,
            };
            if (mutifile) {
                const data = new FormData();
                let fileName = [];
                [...mutifile].map((file) => data.append("images", file));
                try {
                    await axios
                        .post("http://localhost:8800/api/mutiupload", data)
                        .then((res) => res.data)
                        .then((data) =>
                            data.file.map((file) => fileName.push(file.filename))
                        );
                    newPost.img = Object.values(fileName);
                } catch (err) {
                }
            }
            const newRes = {
                name: newPost.title,
                places: newPost.place,
            };
            try {
                console.log(newRes)
                await axios.post("http://localhost:8800/api/post", newPost);
                await axios.post("http://localhost:8800/api/restaurant", newRes);
                window.location.reload();
            } catch (err) {
            }
        } else {
            setIsModalTextOpen(true)
        }
    };

    const checkAllActionsAccept = (array) => {
        return array.every(item => item.summary.action === 'accept');
    };

    const handleImageUploadBack = async (imageFile) => {
        if (imageFile) {
            const formData = new FormData();
            [...imageFile].map((file) => formData.append("media", file));
            try {
                const response = await axios.post("http://localhost:8800/api/check-image", formData)
                console.log(response)
                if (response.data.data) {
                    const allActionsAccept = checkAllActionsAccept(response.data.data);
                    setIsModalOpen(!allActionsAccept)
                } else {
                    setIsModalOpen(response.data.summary.action === "reject")
                }

            } catch (err) {
                console.error(err.message);
            }
        }
    }

    const handleContentUpload = async (content) => {
        if (content) {
            try {
                const response = await axios.post("http://localhost:8800/api/check-content", {content})
                console.log(Object.values(response.data.moderation_classes).some(value => typeof value === 'number' && value < 0.5))
                return Object.values(response.data.moderation_classes).some(value => typeof value === 'number' && value < 0.5)
            } catch (err) {
                console.error(err.message);
            }
        }
    }


    const MutipleFileChange = (files) => {
        const listImg = Object.values(files);
        const listUrl = listImg.map((img) => URL.createObjectURL(img));
        handleImageUploadBack(listImg)
        setMutifile(listImg);
        setMutiupload(listUrl);
    };

    function checkKeywordLevel(content, keywords) {
        return keywords.some(keyword => content.includes(keyword));
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleCancelText = () => {
        setIsModalTextOpen(false);
    };


    return (
        <div className="review">
            <Topbar socket={socket}/>
            <div className="reviewWrapper">
                <div className="headerReview">
                    <span className="textContent">Viết Review</span>
                    <hr className="reviewHr"/>
                </div>
                <div className="bodyReview">
                    <div className="reviewLeft" style={{gap: '40px'}}>
                        <div className="starRating">
                            <h2>Xếp hạng của bạn :</h2>
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
                        </div>
                        <ModalCustom
                            title={<TitleWarning>Vi Phạm Cộng Đồng</TitleWarning>}
                            visible={isModalOpen}
                            onCancel={handleCancel}
                            footer={
                                <DivFooter>
                                    <ButtonSubmit
                                        onClick={() => {
                                            handleCancel();
                                        }}
                                    >
                                        Đóng
                                    </ButtonSubmit>
                                </DivFooter>
                            }
                        >
                            <BoxContent>
                                <IconWarning src={warningIcon}/>
                                <TitleWarning>Hình ảnh của Bạn đã vi phạm tiêu chuẩn cộng đồng</TitleWarning>
                                <ContentWarning>Vui lòng kiểm tra lại các hình ảnh trước khi đăng tải mo thắc mắc
                                    vui lòng gửi vè cho quản trị viên</ContentWarning>
                            </BoxContent>
                        </ModalCustom>
                        <ModalCustom
                            title={<TitleWarning>Vi Phạm Cộng Đồng</TitleWarning>}
                            visible={isModalTextOpen}
                            onCancel={handleCancelText}
                            footer={
                                <DivFooter>
                                    <ButtonSubmit
                                        onClick={() => {
                                            handleCancelText();
                                        }}
                                    >
                                        Đóng
                                    </ButtonSubmit>
                                </DivFooter>
                            }
                        >
                            <BoxContent>
                                <IconWarning src={warningIcon}/>
                                <TitleWarning>Bài viết của Bạn đã vi phạm tiêu chuẩn cộng đồng</TitleWarning>
                                <ContentWarning>Vui lòng kiểm tra lại các văn bản trước khi đăng tải mọi thắc mắc
                                    vui lòng gửi vè cho quản trị viên</ContentWarning>
                            </BoxContent>
                        </ModalCustom>

                        <div className="reviewTop">
                            <h2>Đánh Giá của bạn :</h2>
                            <div className="reviewcomment">
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
                        </div>
                        <form className="reviewBottom" onSubmit={submitHandler}>
                            <div className="reviewOptions">
                                <label htmlFor="file" className="reviewOption">
                                    <PermMediaIcon htmlColor="tomato" className="reviewIcon"/>
                                    <span className="reviewOptionText">Photo or Video</span>
                                    <input
                                        style={{display: "none"}}
                                        type="file"
                                        id="file"
                                        name="imglist"
                                        multiple
                                        accept=".png,.jpeg,.jpg"
                                        onChange={(e) => {
                                            MutipleFileChange(e.target.files);
                                        }}
                                    />
                                </label>
                                <div className="reviewOption">
                                    <LocalOfferIcon htmlColor="blue" className="reviewIcon"/>
                                    <span className="reviewOptionText">Tag</span>
                                </div>
                                <div className="reviewOption">
                                    <RoomIcon htmlColor="green" className="reviewIcon"/>
                                    <span className="reviewOptionText">Location</span>
                                </div>
                                <div className="reviewOption">
                                    <EmojiEmotionsIcon
                                        htmlColor="goldenrod"
                                        className="reviewIcon"
                                    />
                                    <span className="reviewOptionText">Feelings</span>
                                </div>
                            </div>
                            <button
                                // onClick={() => submitHandler()}
                                className="reviewButton"
                                type="submit"
                                style={{width: "150px"}}
                            >
                                Share
                            </button>
                        </form>
                    </div>
                    <div className="reviewRight">
                        <FormCustom form={form} validateTrigger={["onBlur", "onChange"]}>
                            <h2 style={{width: "80%", paddingBottom: "24px", margin: 'auto'}}>
                                Thông tin địa điểm :
                            </h2>

                            <Form.Item
                                style={{
                                    width: "80%",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}
                                name={"name"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Xin vui lòng nhập tên quán ăn.",
                                    },
                                ]}
                            >
                                <Floating label={"Tên"} isRequired/>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    width: "80%",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}
                                name={"place"}
                                rules={[
                                    {
                                        required: true,
                                        message: "Xin vui lòng nhập địa điểm.",
                                    },
                                    () => ({
                                        validator(_, value) {
                                            if (value) {
                                                setValuePlace(value)
                                            }
                                            return Promise.resolve();
                                        },
                                    }),
                                ]}
                            >
                                <Floating label={"Địa điểm"} isRequired/>
                            </Form.Item>
                            <div className="reviewInput">
                                <SelectFloat
                                    dataSelect={SliderSlickData}
                                    label={"Khu vực"}
                                    valueSelect={filterValue.kv}
                                    onChangeSelect={(value) => {
                                        setFilterValue({...filterValue, kv: value});
                                    }}
                                />
                            </div>
                            <div className="reviewInput">
                                <SelectFloat
                                    dataSelect={SliderData}
                                    label={"Tiêu chí"}
                                    valueSelect={filterValue.tc}
                                    onChangeSelect={(value) => {
                                        setFilterValue({...filterValue, tc: value});
                                    }}
                                />
                            </div>
                            <div className="reviewInput">
                                <SelectFloat
                                    dataSelect={CatologyData}
                                    label={"Danh mục"}
                                    valueSelect={filterValue.dm}
                                    onChangeSelect={(value) => {
                                        setFilterValue({...filterValue, dm: value});
                                    }}
                                />
                            </div>
                            <div style={{
                                width: '80%',
                                margin: '0 auto 24px auto'
                            }}>
                                <MyMapComponent defaultAddress={valuePlace} setValuePlace={setValuePlace}/>
                            </div>
                        </FormCustom>
                        {mutiupload && (
                            <div className="reviewImgContainer">
                                {<ReactImageGrid images={mutiupload} countFrom={5}/>}
                                <CancelIcon
                                    className="reviewCancelImg"
                                    onClick={() => setMutiupload(null)}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
