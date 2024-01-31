import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';
import Floating from '../Floatting';
import { TreeSelectStyle } from './styles';
import { RedStar } from '../styled';

const TreeSelectCustom = ({ allowClear, dataSelect, onChangeSelect, label, valueSelect, multiple, disable, isRequired, autoFocus, tabIndex }) => {
  const { t } = useTranslation();
  const treeData = [...dataSelect];
  const [selectValue, setSelectValue] = useState(null);


  useEffect(() => {
    setSelectValue(valueSelect);
  }, [valueSelect]);

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
      <TreeSelectStyle
        multiple={multiple}
        onChange={onChangeSelect}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        style={{ width: '100%' }}
        // showSearch
        treeDefaultExpandAll
        value={valueSelect}
        allowClear={allowClear}
        treeData={treeData}
        disabled={disable}
        notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={t('common.noData')} />}
        autoFocus={autoFocus}
        tabIndex={tabIndex}
      >
        {/* {dataSelect.map(item => (
          <Option disabled={valueSelect.includes('all') && item.value !== 'all'} value={item.value}>
            {item.label}
          </Option>
        ))} */}
      </TreeSelectStyle>
    </Floating>
  );
};

TreeSelectCustom.propTypes = {
  allowClear: PropTypes.bool,
  dataSelect: PropTypes.array.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  valueSelect: PropTypes.array,
  multiple: PropTypes.bool,
  disable: PropTypes.bool,
  isRequired: PropTypes.bool,
};

export default TreeSelectCustom;
