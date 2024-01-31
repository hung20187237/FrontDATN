import React, { useEffect,useState  } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'antd';
import { ButtonSave, DivFooter, ModalTitle, ModalWrapper, StyleButtonClose, disableButton,ModalWrapperReLe } from './styled';

export default function ModalHandle({
  contextHolder,
  disableSaveMessage,
  disableSaveButton,
  children,
  width,
  height,
  onClickCancel,
  isCustomFooter,
  buttonCustom,
  title,
  nameCancel,
  nameSave,
  nameSaveAndReset,
  isSaveIsReset,
  isLoading,
  onSave,
  onSaveAndReset,
  isModalInformation,
  levelModal,
  visible,
  isLeftButton,
  onClickLeftButton,
  nameLeftButton,
  titleRemove,
  onRemove,
  tooltipLeftButton,
  isDelete,
  test,
  prioty,
  disableLeftBtn,
}) {
  const { t } = useTranslation();
  const [keyModal, setKeyModal] = useState(null);

  useEffect(() => {
    if(visible){
      setKeyModal((new Date()).getTime());
    }
  },[visible]);
  
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.ctrlKey && e.key === 's' &&(visible||visible==null)) {
        e.preventDefault();
        document.getElementById('idclose').click();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible]);

  // const onKeyDownListener = e => {
  //   if (test) {
  //   } else {
  //     localStorage.setItem('checkDESC', 1);
  //     if (e.key === 'Escape') {
  //       e.preventDefault();
  //       const arrayClose = document.getElementsByClassName('ant-modal-close');
  //       if (localStorage.getItem('checkDESC') != 0) {
  //         if (arrayClose && arrayClose.length > 0) {
  //           arrayClose[arrayClose.length - 1].click();
  //         }
  //       } else {
  //       }
  //       // onClickCancel();
  //     }
  //     if (e.ctrlKey && e.key === 's') {
  //       e.preventDefault();
  //       onSave();
  //     }
  //     if (e.ctrlKey && e.key === 'd') {
  //       e.preventDefault();
  //       onSaveAndReset();
  //     }
  //   }
  // };
  //
  // useEffect(() => {
  //   document.addEventListener('keydown', onKeyDownListener);
  //   return () => {
  //     document.removeEventListener('keydown', onKeyDownListener);
  //   };
  // });

  return (
    <ModalWrapper
      destroyOnClose
      centered
      closable
      maskClosable={false}
      width={width || null}
      height={height || null}
      visible={visible}
      onCancel={onClickCancel}
      // onOk={onSave}
      titleRemove={titleRemove}
      onRemove={onRemove}
      zIndex={prioty}
      footer={[
        <>
          {isModalInformation ? (
            <DivFooter>
              <ButtonSave onClick={onClickCancel}>
                <div>{nameCancel || t('common.closeModal')}</div>
              </ButtonSave>
            </DivFooter>
          ) : (
            <>
              {isCustomFooter ? (
                <div>{buttonCustom}</div>
              ) : (
                <div style={isLeftButton ? { display: 'flex', justifyContent: 'space-between' } : null}>
                  {isLeftButton && (
                    <>
                      {tooltipLeftButton ? (
                        <Tooltip title={tooltipLeftButton} placement="bottomRight">
                          <StyleButtonClose
                            style={{ borderColor: '#d9d9d9' }}
                            loading={isLoading}
                            onClick={isDelete ? onClickLeftButton : null}
                            disabled={!isDelete}
                          >
                            <div>{nameLeftButton}</div>
                          </StyleButtonClose>
                        </Tooltip>
                      ) : (
                        <StyleButtonClose loading={isLoading} onClick={onClickLeftButton}>
                          <div>{nameLeftButton}</div>
                        </StyleButtonClose>
                      )}
                    </>
                  )}
                  <DivFooter style={isLeftButton ? { justifyContent: 'flex-end' } : null}>
                    <StyleButtonClose onClick={onClickCancel}>
                      <div>{nameCancel || t('common.closeModal')}</div>
                    </StyleButtonClose>
                    {contextHolder}
                    {isSaveIsReset &&
                      (!disableSaveButton ? (
                        <ButtonSave loading={isLoading} onClick={onSaveAndReset}>
                          {nameSaveAndReset || t('common.saveAndNext')}
                        </ButtonSave>
                      ) : (
                        <Tooltip title={disableSaveMessage}>
                          <ButtonSave loading={isLoading} disable>
                            {nameSaveAndReset || t('common.saveAndNext')}
                          </ButtonSave>
                        </Tooltip>
                      ))}
                    {!disableSaveButton ? (
                      <ButtonSave loading={isLoading} onClick={onSave} id="idclose">
                        {nameSave || t('common.saveModal')}
                      </ButtonSave>
                    ) : (
                      <Tooltip title={disableSaveMessage}>
                        <ButtonSave loading={isLoading} disable>
                          {nameSave || t('common.saveModal')}
                        </ButtonSave>
                      </Tooltip>
                    )}
                  </DivFooter>
                </div>
              )}
            </>
          )}
        </>,
      ]}
    >
      <ModalTitle>{title}</ModalTitle>
      {children}
      <div style={{display:"none"}} className='keyModalActive'>{keyModal}</div>
    </ModalWrapper>
  );
}

ModalHandle.propTypes = {
  disableSaveButton: PropTypes.bool,
  children: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.string,
  onClickCancel: PropTypes.func,
  isCustomFooter: PropTypes.bool,
  buttonCustom: PropTypes.any,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  nameCancel: PropTypes.string,
  nameSave: PropTypes.string,
  nameSaveAndReset: PropTypes.string,
  isSaveIsReset: PropTypes.bool,
  onSave: PropTypes.func,
  onSaveAndReset: PropTypes.func,
  isModalInformation: PropTypes.bool,
  disableSaveMessage: PropTypes.string,
  contextHolder: PropTypes.func,
  levelModal: PropTypes.number,
  isLeftButton: PropTypes.bool,
  onClickLeftButton: PropTypes.func,
  nameLeftButton: PropTypes.string,
  tooltipLeftButton: PropTypes.string,
  isDelete: PropTypes.bool,
  visible: PropTypes.bool,
};
