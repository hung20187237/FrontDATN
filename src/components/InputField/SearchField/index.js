import React, { useEffect, useState } from 'react';
import { AutoComplete, Tooltip } from 'antd';
import PropTypes from 'prop-types';

// import SvgIcon from '../../../../images/SvgIcon';
import Button from '../../Button';
import MyAutoComplete from '../MyAutoComplete';
import { InputFieldWrapper, InputSearchCustom } from './styled';
import MyAutoCompleteTree from '../MyAutoCompleteTree';
import { getTime } from 'date-fns';
import { getTimeNow } from '../../../commonFunction';

SearchField.propTypes = {
  searchSimple: PropTypes.shape({
    searchSimple: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    isTreeSearch: PropTypes.bool,
  }),
  hideFilter: PropTypes.bool,
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func,
  pathSuggestSearch: PropTypes.string,
  paramSearch: PropTypes.string,
  mode: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  isDefaultActiveFirstOption: PropTypes.bool,
  uuid: PropTypes.string,
  isSearchPhone: PropTypes.bool,
  TypeOfWorkId: PropTypes.number,
};

SearchField.defaultProps = {
  searchSimple: {
    value: '',
    isSearchSimple: false,
    onChange: () => {},
    isTreeSearch: true,
  },
  hideFilter: false,
};

export default function SearchField(props) {
  const {
    isSearchPhone,
    mode,
    onSelect,
    onClick,
    placeholder,
    searchSimple,
    hideFilter,
    handleSearch,
    pathSuggestSearch,
    paramSearch,
    disabled,
    width,
    isDefaultActiveFirstOption,
    uuid,
    TypeOfWorkId,
    optionFilterSearchBy,
    ...rest
  } = props;

  const [open, setOpen] = useState(true);
  const [uuids, setuuids] = useState(uuid);

  return (
    <InputFieldWrapper>
      {searchSimple.isTreeSearch === true ? (
        <>
          <MyAutoCompleteTree
            mode={mode}
            onSelect={onSelect}
            pathSuggestSearch={pathSuggestSearch}
            disabled={disabled}
            optionFilterSearchBy={optionFilterSearchBy}
            children={
              <InputSearchCustom
                placeholder={placeholder}
                size="large"
                widthcus={width}
                value={searchSimple.value}
                allowClear
                onChange={searchSimple.onChange}
                {...rest}
                autoComplete="off"
              />
            }
          />
        </>
      ) : (
        <>
          {searchSimple.isSearchSimple === true ? (
            <AutoComplete disabled={disabled} dropdownMatchSelectWidth={500}>
              <InputSearchCustom
                placeholder={placeholder}
                size="large"
                allowClear
                value={searchSimple.value}
                autoComplete="off"
              />
            </AutoComplete>
          ) : (
            <MyAutoComplete
              // open={open}
              mode={mode}
              onSelect={onSelect}
              pathSuggestSearch={pathSuggestSearch}
              paramSearch={paramSearch}
              disabled={disabled}
              ObjectGuid={uuids}
              TypeOfWorkId={TypeOfWorkId}
              isDefaultActiveFirstOption={isDefaultActiveFirstOption}
              // eslint-disable-next-line react/no-children-prop
              children={
                <InputSearchCustom
                  placeholder={placeholder}
                  size="large"
                  widthcus={width}
                  value={searchSimple.value}
                  allowClear
                  onChange={value1 => {
                    // setOpen(true);
                    searchSimple.onChange(value1);
                  }}
                  onSearch={value => {
                    handleSearch(value);
                    // setOpen(!open);
                  }}
                  {...rest}
                  autoComplete="off"
                />
              }
            />
          )}
        </>
      )}
      {!hideFilter && (
        <Tooltip placement="bottom" mouseLeaveDelay={0} title="Tìm kiếm nâng cao">
          <Button btnType="filter" shape="circle" iconName="filter-white" onClick={onClick} disabled={disabled} />
        </Tooltip>
      )}
    </InputFieldWrapper>
  );
}
