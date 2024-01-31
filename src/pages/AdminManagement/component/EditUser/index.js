import React, { useEffect, useState } from 'react';
import { Form, Tooltip, Row, Col, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { REGEX_PHONE_NUMBER, RESPONSE_MESSAGE } from '../../../../../../utils/constants';
import { FormCustomHS, RadioGroup, RadioCustom, DivPlus, CustomTreeSelect, Icon } from '../AddUser/styles';
import imageLogo from '../../../../../../images/defaultAvatar.svg';
import FloatingLabel from '../../../../../../res/components/FloatingLabel/Input';
import * as actions from '../../actionsUser';
import * as selector from '../../selectorsUser';
import ButtonCircle from '../../../../../../res/components/ButtonCircle';
import ModalHandle from '../../../../../../res/components/ModalHandle';
import { CustomItem, CustomLabel, Label } from './styled';
import { RedStar } from '../../../../../../res/components/FloatingLabel/styled';
import LoadingOverlay from '../../../../../../res/components/LoadingOverlay';
import DeleteUserIndex from '../DeleteUser/DeleteUserIndex';
import { TextBold } from '../../../../../DashBoard/styledDashBoard';
import { validateEmailNotRequire } from '../../../../../../res/commonFunction';
import ResponseMessage from '../../../../../../res/components/ResponseMessage';
import iconAlert from '../../../../../../images/icon/iconAlert.svg';
import { DivFooter, ModalAlertCustom } from '../../../../../../res/components/ResponseMessage/style';
import { ButtonSave } from '../../../../../../res/components/CustomModalSmall/styled';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 18,
  },
};

function getItem(key, title, value, children) {
  return { key, title, value, children };
}

const EditUser = ({ refresh, data, onClose, visible, onCloseAll }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector(selector.selectLoading());
  const [float, setFloat] = useState(false);
  const [showCB1, setShowCB1] = useState(false);
  const [mesCB1, setMesCB1] = useState(false);

  useEffect(() => {
    if (form.getFieldValue('roleGroupID')) {
      setFloat(true);
    } else {
      setFloat(false);
    }
  }, [form.getFieldValue('roleGroupID')]);
  const [listRoleGroup, setListRoleGroup] = useState([]);
  const [listDepartment, setListDepartment] = useState([]);
  const [listPosition, setLisPosition] = useState([]);
  const listDept = useSelector(selector.selectListDepartment());
  const listPost = useSelector(selector.selectListPosition());
  const listRole = useSelector(selector.selectListRoleGroupAcitve());
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  useEffect(() => {
    setLisPosition(listPost);
    setListDepartment(listDept);
    form.setFieldsValue({
      ...data,
      roleGroupID: data.roleGroupID === 0 ? null : data.roleGroupID,
      isActive: data.isActive !== null ? data.isActive : true,
    });

    const listRoleGroupTemp = [];
    // eslint-disable-next-line array-callback-return
    Object.values(listRole).map(item => {
      const body = {};
      body.value = item.roleGroupID;
      body.label = item.roleGroupName;
      listRoleGroupTemp.push(body);
    });
    setListRoleGroup(listRoleGroupTemp);
  }, [data, visible]);

  // Load data vào cây
  const treeData = list => {
    // eslint-disable-next-line no-shadow
    const data = [];
    if (list && list.length > 0) {
      list.forEach(item => {
        if (item.parentID === '00000000-0000-0000-0000-000000000000') {
          data.push(getItem(item.id, item.name, item.id, recursiveItem(item.id, list)));
        }
      });
    }
    return data;
  };
  const recursiveItem = (id, list) => {
    // eslint-disable-next-line no-shadow
    const data = [];
    list.forEach(item1 => {
      if (id === item1.parentID) {
        data.push(getItem(item1.id, item1.name, item1.id, recursiveItem(item1.id, list)));
      }
    });
    return data;
  };

  // todo Lấy tên Phòng ban từ danh sách
  const getName = (_id, list) => {
    let res = '';
    list.map(item => {
      if (item.id === _id) {
        res = item.name;
        return item.name;
      }
    });
    return res;
  };

  // todo kiểm tra xem có phòng ban trùng nhau hay không
  const checkDuplicateDepartment = _value => {
    const temp = [];
    _value.map(item => {
      temp.push(item.departmentID);
    });

    const visited = [];
    const res = [];
    temp.map(item => {
      if (!visited.includes(item)) {
        const array = temp.filter(value => value == item);
        visited.push(item);
        if (array.length > 1) {
          res.push({ name: getName(item, listDepartment), number: array.length });
        }
      }
    });

    if (res.length > 0) {
      setMesCB1(res);
      setShowCB1(true);
      return false;
    }
    return true;
  };

  const getNamePosition = (id, list) => {
    let res = '';
    // eslint-disable-next-line array-callback-return
    list.map(item => {
      if (item.id === id) {
        res = item.name.toString();
      }
    });
    return res;
  };
  const [isMessageResponse, setIsMessageResponse] = useState(null);
  const messageResponse = (visibleMessage, status, titleClose, titleMessage, contentMessage, titleSubmit, onSubmit) => {
    setIsMessageResponse(
      <ResponseMessage
        visible={visibleMessage}
        status={status}
        onClose={() => {
          setIsMessageResponse(null);
        }}
        titleClose={titleClose}
        titleMessage={titleMessage}
        contentMessage={contentMessage}
        titleSubmit={titleSubmit}
        onSubmit={onSubmit}
      />,
    );
  };

  // Xử lý sự kiện khi ấn ghi nhận
  const onSubmit = () => {
    form.validateFields().then(value => {
      // tao 1 arr moi
      const lst = value.lstAccountUserDept;
      // eslint-disable-next-line array-callback-return
      value.lstAccountUserDept.map(item => {
        // eslint-disable-next-line no-param-reassign
        item.positionName = getNamePosition(item.positionID, listPosition);
        // eslint-disable-next-line no-param-reassign
        item.departmentName = getNamePosition(item.departmentID, listDepartment);
      });
      const body = {
        ...value,
        name: value.fullName,
        phone: value.mobile,
        id: data.userID,
        identifyCode: value.identifyCode,
      };

      const newData = {
        ...data,
        userID: body.id,
        fullName: body.name,
        email: body.email,
        mobile: body.mobile,
        identifyCode: body.identifyCode,
        roleGroupID: body.roleGroupID,
        lstAccountUserDept: body.lstAccountUserDept,
        isActive: body.isActive,
      };

      if (!myFuct(newData, data)) {
        if (checkDuplicateDepartment(newData.lstAccountUserDept)) {
          dispatch(
            actions.addUser(body, res => {
              if (res.data.status === RESPONSE_MESSAGE.IM_SUCCESS || res.data.status === RESPONSE_MESSAGE.IM_ERROR) {
                messageResponse(
                  true,
                  res.data.status,
                  `${t('common.Close')}`,
                  '',
                  res.data.status === RESPONSE_MESSAGE.IM_SUCCESS
                    ? `${t('userManagement.editUserSuccess', { userName: value.userName })}`
                    : res.data.object,
                );
                refresh();
                onClose();
                onCloseAll();
              } else {
                messageResponse(
                  true,
                  res.data.status,
                  `${t('common.Close')}`,
                  '',
                  res.data.object,
                  t('common.saveModal'),
                  () => {},
                );
              }
            }),
          );
        }
      } else {
        onClose();
      }
    });
  };

  // // ham sort theo key.
  const ordered = unordered =>
    Object.keys(unordered)
      .sort()
      .reduce((obj, key) => {
        // eslint-disable-next-line no-param-reassign
        obj[key] = unordered[key];
        return obj;
      }, {});

  const myFuct = (obj1, obj2) => JSON.stringify(ordered(obj1)) === JSON.stringify(ordered(obj2));

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.ctrlKey && e.keyCode === 83 && visible) {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        onSubmit();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible]);

  const onClickDelete = () => {
    setShowConfirmDelete(true);
  };

  return (
    <>
      <ModalHandle
        title={t('userManagement.tooltipEdit')}
        width={1100}
        onClickCancel={() => {
          onClose();
        }}
        isSaveIsReset={false}
        onSave={() => {
          onSubmit();
        }}
        visible={visible}
        levelModal={1}
        maskStyle="block"
        isLeftButton
        isDelete
        nameLeftButton={t('common.delete')}
        onClickLeftButton={() => {
          onClickDelete();
        }}
        test
        disableLeftBtn={visible && data.showButton.crud}
      >
        <div className="account">
          <FormCustomHS {...layout} form={form} style={{ marginTop: '0px' }}>
            <br />
            <Row gutter={20} style={{ marginBottom: '5px' }}>
              <Col span={12}>
                <center>
                  <img src={imageLogo} height={130} alt="imgLogo" />
                </center>
              </Col>
              <Col span={12}>
                <Row style={{ height: '64px' }}>
                  <Col span={24} style={{ marginBottom: '5px' }}>
                    <Form.Item
                      name="userName"
                      rules={[
                        () => ({
                          validator(_, value) {
                            if (value) {
                              if (value.trim().length < 1 || value.trim().length > 30) {
                                return Promise.reject(new Error(`${t('userManagement.userNameLengthError')}`));
                              }
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error(`${t('userManagement.userNameError')}`));
                          },
                        }),
                      ]}
                    >
                      <FloatingLabel disabled label={t('userManagement.account')} autoComplete="off" isRequired autoFocus />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="fullName"
                  rules={[
                    () => ({
                      validator(_, value) {
                        if (value) {
                          if (value.trim().length < 3 || value.trim().length > 50) {
                            return Promise.reject(new Error(`${t('userManagement.fullNameLengthError')}`));
                          }
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error(`${t('userManagement.fullNameError')}`));
                      },
                    }),
                  ]}
                >
                  <FloatingLabel label={t('userManagement.fullName')} autoComplete="off" isRequired notShow />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20} style={{ marginBottom: '5px', height: '64px' }}>
              <Col span={12}>
                <Form.Item
                  name="email"
                  rules={[
                    () => ({
                      validator(_, value) {
                        const errMessage = validateEmailNotRequire(value);
                        if (errMessage !== '') {
                          return Promise.reject(new Error(errMessage));
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <FloatingLabel label={t('userManagement.typeEmail')} autoComplete="off" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="mobile"
                  rules={[
                    {
                      required: false,
                      message: t('partner.inValidatePhoneNumber'),
                    },
                    () => ({
                      validator(_, value) {
                        if (!value || REGEX_PHONE_NUMBER.test(value.trim())) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error(t('partner.phoneNumberIsIllegal')));
                      },
                    }),
                  ]}
                >
                  <FloatingLabel label={t('common.phone')} name="" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20} style={{ height: '64px' }}>
              <Col span={12}>
                <Form.Item
                  name="identifyCode"
                  rules={[
                    () => ({
                      validator(_, value) {
                        if (!value || /^([0-9]{9}|[0-9]{12})$/g.test(value.trim())) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error(t('userManagement.messageInvalididentifyCode')));
                      },
                    }),
                  ]}
                >
                  <FloatingLabel label={t('common.citizenIdentification')} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <div>
                  {float ? (
                    <CustomLabel>
                      {t('userManagement.role')}
                      <RedStar> *</RedStar>
                    </CustomLabel>
                  ) : (
                    <Label>
                      {t('userManagement.role')}
                      <RedStar> *</RedStar>
                    </Label>
                  )}

                  <CustomItem name="roleGroupID" rules={[{ required: true, message: t('userManagement.requireRole') }]}>
                    <Select
                      label={t('userManagement.role')}
                      options={listRoleGroup}
                      autoComplete="false"
                      isRequired
                      showSearch
                      onSelect={() => {
                        setFloat(true);
                      }}
                      // valueSelect={form.getFieldValue.roleGroupID}
                      // onChangeSelect={value => {
                      //   form.setFieldsValue({ ...form.getFieldValue, roleGroupID: value });
                      // }}
                    />
                  </CustomItem>
                </div>
              </Col>
            </Row>
            <Form.List name="lstAccountUserDept">
              {(fields, { add, remove }) => (
                <Row gutter={8}>
                  <Col span={4} style={{ margin: 'auto' }}>
                    <TextBold style={{ fontSize: '14px', marginTop: '10px' }}>
                      {t('userManagement.DepartmentAndPosition')}
                    </TextBold>
                  </Col>
                  <Col span={20}>
                    {fields.length < 5 ? (
                      <Tooltip title={t('userManagement.tooltipAdd')}>
                        <DivPlus
                          onClick={() => {
                            add();
                          }}
                          style={{ float: 'right' }}
                        >
                          <PlusOutlined />
                        </DivPlus>
                      </Tooltip>
                    ) : (
                      <DivPlus disable style={{ float: 'right' }}>
                        <Tooltip title={t('userManagement.maxNumber')}>
                          <PlusOutlined />
                        </Tooltip>
                      </DivPlus>
                    )}
                  </Col>
                  <Col span={24} style={{ marginTop: '8px' }}>
                    <div style={{ height: '190px', borderRadius: '12px', border: '1px solid #C5CED9' }}>
                      <>
                        <Row
                          style={{
                            backgroundColor: '#E3F7FF',
                            height: '40px',
                            color: '#222D4B',
                            borderTopLeftRadius: '12px',
                            borderTopRightRadius: '12px',
                            borderBottom: '1px solid #C5CED9',
                          }}
                        >
                          <div
                            style={{
                              width: '412px',
                              marginRight: '50px',
                              marginLeft: '20px',
                              fontWeight: 400,
                              marginTop: 'auto',
                              marginBottom: 'auto',
                            }}
                          >
                            {t('system.titleTHDepartment')}
                          </div>
                          <div style={{ width: '430px', marginTop: 'auto', marginBottom: 'auto' }}>
                            {t('system.titleTHManagement')}
                          </div>
                          <div
                            style={{
                              width: '100px',
                              textAlign: 'center',
                              marginLeft: '18px',
                              marginTop: 'auto',
                              marginBottom: 'auto',
                            }}
                          >
                            {t('system.titleTHCustom')}
                          </div>
                        </Row>
                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'scroll', height: '140px' }}>
                          {fields
                            .slice()
                            .reverse()
                            .map((field, index) => (
                              <div
                                style={{
                                  height: '65px',
                                  marginTop: index === 0 ? '20px' : '0px',
                                  width: '100%',
                                  display: 'flex',
                                  // justifyContent: 'center',
                                  flexDirection: 'row',
                                }}
                              >
                                <div style={{ width: '430px', marginRight: '50px', marginLeft: '20px' }}>
                                  <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    name={[field.name, 'departmentID']}
                                    rules={[{ required: true, message: t('userManagement.departmentNotNull') }]}
                                  >
                                    <CustomTreeSelect
                                      showSearch
                                      value
                                      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                      placeholder="Chọn phòng ban"
                                      allowClear
                                      treeDefaultExpandAll
                                      treeData={treeData(listDepartment)}
                                    />
                                  </Form.Item>
                                </div>
                                <div style={{ width: '430px' }}>
                                  <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    name={[field.name, 'positionID']}
                                    rules={[{ required: true, message: t('userManagement.positionNotNull') }]}
                                  >
                                    <CustomTreeSelect
                                      showSearch
                                      value
                                      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                      placeholder="Chọn chức vụ"
                                      allowClear
                                      treeDefaultExpandAll
                                      treeData={treeData(listPosition)}
                                    />
                                  </Form.Item>
                                </div>
                                <div style={{ width: 0 }}>
                                  <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    name={[field.name, 'userID']}
                                    initialValue="00000000-0000-0000-0000-000000000000"
                                    rules={[{ required: false, message: t('userManagement.departmentNotNull') }]}
                                  />

                                  <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    name={[field.name, 'id']}
                                    initialValue="00000000-0000-0000-0000-000000000000"
                                    rules={[{ required: false, message: t('userManagement.departmentNotNull') }]}
                                  />
                                </div>
                                <div style={{ width: '165px', display: 'flex', justifyContent: 'center' }}>
                                  {fields.length > 1 ? (
                                    <ButtonCircle
                                      iconName="delete"
                                      onClick={() => remove(field.name)}
                                      enable
                                      title={t('userManagement.DelDepartmentPosition')}
                                      placement="top"
                                    />
                                  ) : null}
                                </div>
                              </div>
                            ))}
                        </div>
                      </>
                    </div>
                  </Col>
                </Row>
              )}
            </Form.List>

            <Row gutter={20} style={{ marginTop: '15px' }}>
              <Col span={24} style={{ height: '40px' }}>
                <Form.Item
                  name="isActive"
                  label={`${t('userManagement.status')} `}
                  rules={[{ required: false, message: t('userManagement.requireRole') }]}
                >
                  <RadioGroup>
                    <RadioCustom value>{t('common.active')}</RadioCustom>
                    <RadioCustom value={false}>{t('common.inActive')}</RadioCustom>
                  </RadioGroup>
                </Form.Item>
              </Col>
            </Row>
          </FormCustomHS>
        </div>
        <ModalAlertCustom
          visible={showCB1}
          centered
          footer={null}
          closable={false}
          width={700}
          onCancel={() => {
            setShowCB1(false);
          }}
          onClose={() => {
            setShowCB1(false);
          }}
        >
          {
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ paddingTop: 35, flexDirection: 'column' }}
            >
              <Icon src={iconAlert} style={{ width: '100px', height: '100px' }} />
              <>
                <div style={{marginTop: '20px'}}>
                  {mesCB1 &&
                    mesCB1.map(item => (
                      <div
                        style={{ padding: '0px 15px' }}
                        dangerouslySetInnerHTML={{
                          __html: t('system.CB1Message', { nameDepartment: item.name, number: item.number }),
                        }}
                      />
                    ))}
                </div>
                <div dangerouslySetInnerHTML={{ __html: t('system.CB1Detail') }} style={{ marginTop: '10px' }} />
              </>
              <DivFooter>
                <ButtonSave onClick={() => setShowCB1(false)}>{t('common.Close')}</ButtonSave>
              </DivFooter>
            </div>
          }
        </ModalAlertCustom>
        {isMessageResponse}
      </ModalHandle>
      {/* // cho phep xoa */}
      {data && (
        <DeleteUserIndex
          isOpen={showConfirmDelete && (visible && data.showButton.crud)}
          onClose={() => {
            setShowConfirmDelete(false);
            refresh();
            onClose();
          }}
          data={data}
          onCloseWhenCancel={() => {
            setShowConfirmDelete(false);
          }}
        />
      )}

      {/* Khong cho xoa */}
      {data && (
        <DeleteUserIndex
          isOpen={showConfirmDelete && (visible && !data.showButton.crud)}
          onClose={() => {
            setShowConfirmDelete(false);
            onClose();
          }}
          data={data}
          noAcept
        />
      )}
      {loading && <LoadingOverlay />}
    </>
  );
};

EditUser.propTypes = {
  refresh: PropTypes.func,
  data: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  onCloseAll: PropTypes.func,
};

export default EditUser;
