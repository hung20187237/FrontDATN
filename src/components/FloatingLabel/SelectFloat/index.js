import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Empty, Select, Space, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import Floating from '../Floatting';
import { CardOption, ListButton, SelectFloatStyle, SpaceCus } from './style';
import iconArrowDropdown from '../../../images/icon_arrow_dropdown.svg';
import { RedStar } from '../styled';
import ButtonCircle from '../../ButtonCircle';
import Button from '../../Button';
import TooltipCustom from "../../TooltipCustom";

const { Option } = Select;

const SelectFloat = ({
  allowClear,
  dataSelect,
  onChangeSelect,
  label,
  valueSelect,
  isRequired,
  disabled,
  mode,
  showSearch,
  onClick,
  open,
  isIcon,
  titleEdit,
  titleDelete,
  onClickEdit,
  onClickDelete,
  checkEdit,
  checkDelete,
  listHeight,
  tooltipDisableEdit,
  tooltipDisableDelete,
  style,
  onBlur,
}) => {
  const [selectValue, setSelectValue] = useState(null);
  const { t } = useTranslation();
  return (
    <Floating
      label={
        isRequired ? (
          <>
            {label}
            <RedStar> *</RedStar>
          </>
        ) : (
          <>{label}</>
        )
      }
      value={selectValue || valueSelect}
    >
      {open == null ? (
        <SelectFloatStyle
          suffixIcon={<img alt="" src={iconArrowDropdown} />}
          onChange={value => {
            setSelectValue(value);
            onChangeSelect(value);
          }}
          value={valueSelect}
          allowClear={allowClear}
          disabled={disabled}
          mode={mode}
          open={open}
          onBlur={onBlur}
          showSearch={showSearch}
          optionFilterProp="children"
          autoComplete="false"
          onClick={onClick}
          listHeight={listHeight}
          filterOption={(input, option) =>
            (option && option.label ? option.label : '').toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t('common.noData')} />}
        >
          {dataSelect.map(item => (
            <Option
              value={item.value}
              label={item.title}
              style={style || { height: '40px', display: 'flex', alignItems: 'center' }}
            >
              <CardOption className="OptionCus">
                <TooltipCustom name={item.title} />

                {isIcon && (
                  <ListButton className="listButton">
                    <SpaceCus>
                      {titleEdit && checkEdit && (
                        <ButtonCircle
                          title={item.totalCustomer && item.totalCustomer > 0 ? tooltipDisableEdit : titleEdit}
                          iconName="edit"
                          onClick={() => {
                            onClickEdit(item);
                          }}
                          enable
                          size="20px"
                          allowDisabled={item.totalCustomer && item.totalCustomer > 0}
                        />
                      )}
                      {titleDelete && checkDelete && (
                        <ButtonCircle
                          title={item.totalCustomer && item.totalCustomer > 0 ? tooltipDisableDelete : titleDelete}
                          iconName="delete"
                          onClick={() => {
                            onClickDelete(item);
                          }}
                          enable
                          size="16px"
                          allowDisabled={item.totalCustomer && item.totalCustomer > 0}
                        />
                      )}
                    </SpaceCus>
                  </ListButton>
                )}
              </CardOption>
            </Option>
          ))}
        </SelectFloatStyle>
      ) : (
        <SelectFloatStyle
          suffixIcon={<img alt="" src={iconArrowDropdown} />}
          onChange={value => {
            setSelectValue(value);
            onChangeSelect(value);
          }}
          value={valueSelect}
          allowClear={allowClear}
          disabled={disabled}
          mode={mode}
          showSearch={showSearch}
          optionFilterProp="children"
          autoComplete="false"
          onClick={onClick}
          listHeight={listHeight}
          filterOption={(input, option) =>
            (option && option.label ? option.label : '').toLowerCase().includes(input.toLowerCase())
          }
          notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t('common.noData')} />}
        >
          {dataSelect.map(item => (
            <Option
              value={item.value}
              label={item.title}
              style={style || { height: '40px', display: 'flex', alignItems: 'center' }}
            >
              <CardOption className="OptionCus">
                <TooltipCustom name={item.title} />
                {isIcon && item.value !== -1 && (
                  <ListButton className="listButton">
                    <SpaceCus>
                      {titleEdit && checkEdit && (
                        <Tooltip
                          placement="bottomRight"
                          mouseLeaveDelay={0}
                          title={item.totalCustomer && item.totalCustomer > 0 ? tooltipDisableEdit : titleEdit}
                          overlayStyle={{ maxWidth: 500 }}
                        >
                          <Button
                            style={{ display: item.value === -1 ? 'none' : 'display' }}
                            btnType="btn-disable"
                            shape="circle"
                            iconName={item.totalCustomer && item.totalCustomer > 0 ? 'editTypeConfigGray' : 'edit'}
                            allowDisabled={item.totalCustomer && item.totalCustomer > 0}
                            onClick={() => {
                              onClickEdit(item);
                            }}
                            size="20px"
                          />
                        </Tooltip>
                      )}
                      {titleDelete && checkDelete && (
                        <Tooltip
                          placement="bottomRight"
                          mouseLeaveDelay={0}
                          title={item.totalCustomer && item.totalCustomer > 0 ? tooltipDisableDelete : titleDelete}
                          overlayStyle={{ maxWidth: 500 }}
                        >
                          <Button
                            style={{ display: item.value === -1 ? 'none' : 'display' }}
                            btnType="btn-disable"
                            shape="circle"
                            iconName={item.totalCustomer && item.totalCustomer > 0 ? 'delete-gray' : 'delete'}
                            allowDisabled={item.totalCustomer && item.totalCustomer > 0}
                            onClick={() => {
                              onClickDelete(item);
                            }}
                            size="16px"
                          />
                        </Tooltip>
                      )}
                    </SpaceCus>
                  </ListButton>
                )}
              </CardOption>
            </Option>
          ))}
        </SelectFloatStyle>
      )}
    </Floating>
  );
};

SelectFloat.propTypes = {
  allowClear: PropTypes.bool,
  dataSelect: PropTypes.array.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  valueSelect: PropTypes.string,
  isRequired: PropTypes.bool,
  mode: PropTypes.string,
  showSearch: PropTypes.bool,
  isIcon: PropTypes.bool,
  titleEdit: PropTypes.string,
  titleDelete: PropTypes.string,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
  checkEdit: PropTypes.bool,
  checkDelete: PropTypes.bool,
  listHeight: PropTypes.number,
  tooltipDisableEdit: PropTypes.string,
  tooltipDisableDelete: PropTypes.string,
  style: PropTypes.element,
  open: PropTypes.bool,
  onBlur: PropTypes.func,
  maxCharcter: PropTypes.number,
};

export default SelectFloat;
