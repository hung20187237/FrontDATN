import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ModalAlert from '../../../../../../res/components/ModalAlert';
import {
  ContentButton,
  ContentContainer,
  ContentImg,
  ContentText,
} from '../../../RoleManagement/component/DeleteRole/styled';
import IconDelete from '../../../../../../images/alertDelete.svg';
import Button from '../../../../../../res/components/Button';
import { StyleButtonClose } from '../../../../../../res/components/CustomModal/styled';
import * as actions from '../../actionsUser';
import Notice from '../../../../../../res/components/Notice';
import { TextBold } from '../../../../../DashBoard/styledDashBoard';

const DeleteUserIndex = ({ isOpen, onClose, data, noAcept, onCloseWhenCancel }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const isBeginRequest = useSelector(selectors.selectBeginRequest());
  const deleteRole = () => {
    if (data.userID) {
      const body = {
        userId: data.userID,
      };
      dispatch(
        actions.deleteUser(body, res => {
          if (res.data.isOk) {
            Notice({ msg: `Xóa người dùng ${data.fullName} <span style={{display: 'inline-block'}}> thành công !</span>` });
            onClose();
          } else {
            // false
          }
        }),
      );
    }
  };
  return (
    <>
      <ModalAlert
        isClosable={false}
        visible={isOpen}
        onClickCancel={onCloseWhenCancel}
        isCustomFooter={null}
        width={700}
        children={
          <ContentContainer>
            <ContentImg>
              <img src={IconDelete} alt="alert" />
            </ContentImg>
            {noAcept ? (
              <ContentText>Bạn không có quyền thực hiện chức năng này.</ContentText>
            ) : (
              <ContentText>
                Bạn có chắc chắn muốn xóa Người dùng <TextBold>{data.userName}</TextBold> không ?
              </ContentText>
            )}

            <ContentButton>
              <Button onClick={onCloseWhenCancel}>{t('common.closeModal')}</Button>
              {noAcept ? null : (
                <StyleButtonClose className="ml-3" onClick={() => deleteRole()}>
                  {t('system.agreeDelete')}
                </StyleButtonClose>
              )}
            </ContentButton>
          </ContentContainer>
        }
      />
    </>
  );
};

DeleteUserIndex.prototype = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
  noAcept: PropTypes.bool,
  onCloseWhenCancel: PropTypes.func,
};

export default DeleteUserIndex;
