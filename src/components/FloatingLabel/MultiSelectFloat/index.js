import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Empty, Select, Tooltip } from 'antd';
import Floating from '../Floatting';
import { CardOption, ListButton, SelectFloatStyle, SpaceCus } from './style';
import Button from '../../Button';

const { Option } = Select;

const MultiSelectFloat = ({
  allowClear,
  dataSelect,
  onChangeSelect,
  label,
  valueSelect,
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
  SelectedIcon,
  placeholder,
  isTags,
  style,
}) => {
  const [selectValue, setSelectValue] = useState(null);

  useEffect(() => {
    setSelectValue(valueSelect);
  }, [valueSelect]);

  return (
    <Floating label={label} value={selectValue || valueSelect}>
      <SelectFloatStyle
        notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'no Data'} />}
        mode="multiple"
        onChange={value => {
          if (value.includes('all')) {
            setSelectValue(['all']);
            onChangeSelect(['all']);
          }
          if (dataSelect[0].value === 'all') {
            if (dataSelect.length > 2 && value.length === dataSelect.length - 1) {
              setSelectValue(['all']);
              onChangeSelect(['all']);
            } else {
              setSelectValue(value);
              onChangeSelect(value);
            }
          } else {
            setSelectValue(value);
            onChangeSelect(value);
          }
        }}
        filterOption={(input, option) =>
          isIcon
            ? option.children.props.children[0].props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            : option.children.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        value={valueSelect.includes('all') ? 'all' : valueSelect}
        allowClear={allowClear}
        menuItemSelectedIcon={SelectedIcon}
        placeholder={placeholder}
        listHeight={listHeight}
      >
        {dataSelect.map(item => (
          <Option
            disabled={valueSelect.includes('all') && item.value !== 'all'}
            value={item.value}
            style={style || { width: '100%', height: '40px', display: 'flex', alignItems: 'center' }}
          >
            {isIcon && item.value !== -1 ? (
              <CardOption className="OptionCus">
                <div style={{ width: '100%' }}>{item.title}</div>
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
                          btnType="btn-disable"
                          shape="circle"
                          iconName={item.totalCustomer && item.totalCustomer > 0 ? 'editTypeConfigGray' : 'edit'}
                          allowDisabled={item.totalCustomer && item.totalCustomer > 0}
                          onClick={() => {
                            console.log(item);
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
                          btnType="btn-disable"
                          shape="circle"
                          iconName={item.totalCustomer && item.totalCustomer > 0 ? 'delete-gray' : 'delete'}
                          allowDisabled={item.totalCustomer && item.totalCustomer > 0}
                          onClick={() => {
                            console.log(item);
                            onClickDelete(item);
                          }}
                          size="16px"
                        />
                      </Tooltip>
                    )}
                  </SpaceCus>
                </ListButton>
              </CardOption>
            ) : (
              <>{item.title}</>
            )}
          </Option>
        ))}
      </SelectFloatStyle>
    </Floating>
  );
};

MultiSelectFloat.propTypes = {
  allowClear: PropTypes.bool,
  dataSelect: PropTypes.array.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  valueSelect: PropTypes.array,
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
  SelectedIcon: PropTypes.element,
  style: PropTypes.element,
};

export default MultiSelectFloat;
