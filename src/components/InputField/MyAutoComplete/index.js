import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

import groupBy from 'lodash/groupBy';
import debounce from 'lodash/debounce';

import { isEmpty } from 'lodash';
import { getMsgClient } from '../../../commonFunction';
import arrow from '../../../../images/arrow.svg';
import { Item, ItemLabel } from './styles';
import { axiosGet, axiosGetNoCheck } from '../../../../utils/request';

MyAutoComplete.propTypes = {
  defaultVal: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  pathSuggestSearch: PropTypes.string,
  paramSearch: PropTypes.string,
  onSelect: PropTypes.func,
  TypeOfWorkId: PropTypes.number,
  ObjectGuid: PropTypes.string,
};

MyAutoComplete.defaultProps = {
  children: null,
  className: '',
};

export default function MyAutoComplete(props) {
  // eslint-disable-next-line react/prop-types
  const {
    defaultVal,
    children,
    className,
    pathSuggestSearch,
    paramSearch,
    ObjectGuid,
    disabled,
    isDefaultActiveFirstOption,
    TypeOfWorkId,
    ...rest
  } = props;
  const [optionsSuggest, setOptionsSuggest] = useState([]);
  const [value, setValue] = useState('');
  const [keySearch, setKeySearch] = useState(paramSearch || 'keySearch');
  useEffect(() => {
    const handler = setTimeout(() => {
      handleSuggestSearch(value);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  const renderTitle = title => (
    <div className="d-flex">
      <img alt="" src={arrow} />
      <Item>{title}</Item>
    </div>
  );

  const replaceAllSet = (str, find, replace) => {
    if (!str.includes(find)) return str;
    return str.replace(find, replace);
  };

  const renderText = (data, text, item) => {
    return `${data}[!|${item.objectId}_${item.categoryId}|!]`;
  };

  const renderItem = (item, textSearch) => ({
    value: renderText(item.objectName === '...' ? textSearch : item.objectName, textSearch, item),
    key: `${item.objectName}_${item.objectId}_${item.categoryId}`,
    label: (
      <ItemLabel
        dangerouslySetInnerHTML={{
          __html: replaceAllSet(item.objectName, textSearch, `<b>${textSearch}</b>`),
        }}
        key={`${item.objectName}_${item.objectId}_${item.categoryId}`}
      />
    ),
    objectid: item.objectId,
    categoryid: item.categoryId,
    object_name: item.objectName,
    text_search: textSearch,
    ...item,
  });

  const searchResult = (textSearch, listSearch) => {
    const result = Object.keys(listSearch).map(item => ({
      label: renderTitle(listSearch[item][0].categoryName),
      options: listSearch[item].map(object => renderItem(object, textSearch)),
    }));
    return result;
  };

  const handleSuggestSearch = textSearch => {
    const text = textSearch.trim();
    if (isEmpty(text)) return setOptionsSuggest([]);
    let listSearch;
    let listResult;
    if (ObjectGuid) {
      axiosGetNoCheck(pathSuggestSearch + '?keySearch=' + textSearch + '&ObjectGuid=' + ObjectGuid).then(res => {
        if (res.data.isError) return;
        listSearch = groupBy(res.data.object, 'categoryId');
        listResult = searchResult(text, listSearch);
        listResult.map(item => {
          if (item.options.length > 10) {
            const newItem = {
              label: <div style={{ color: 'black', paddingLeft: 25, width: '100%' }}>...</div>,
            };
            return (item.options = [...item.options.slice(0, 10), newItem]);
          }
        });
        setOptionsSuggest(listResult);
      });
    }
    if (TypeOfWorkId) {
      axiosGet(`${pathSuggestSearch}?${keySearch}=${textSearch}&TypeOfWorkId=${TypeOfWorkId}`).then(res => {
        if (res.data.isError) return;
        listSearch = groupBy(res.data.object, 'categoryId');
        listResult = searchResult(text, listSearch);
        listResult.map(item => {
          if (item.options.length > 10) {
            const newItem = {
              label: <div style={{ color: 'black', paddingLeft: 25, width: '100%' }}>...</div>,
            };
            return (item.options = [...item.options.slice(0, 10), newItem]);
          }
        });
        setOptionsSuggest(listResult);
      });
    } else {
      axiosGet(`${pathSuggestSearch}?${keySearch}=${textSearch}`).then(res => {
        if (res.data.isError) return;
        listSearch = groupBy(res.data.object, 'categoryId');
        Object.keys(listSearch).map(item => {
          if (listSearch[item].length > 10) {
            const newItem = {
              categoryId: 0,
              categoryName: listSearch[item][0].categoryName,
              objectId: '0',
              objectName: '...',
            };
            listSearch[item] = listSearch[item].slice(0, 10);
            listSearch[item].push(newItem);
          }
        });
        listResult = searchResult(text, listSearch);
        setOptionsSuggest(listResult);
      });
    }

    return '';
  };
  return (
    <AutoComplete
      defaultActiveFirstOption={isDefaultActiveFirstOption}
      disabled={disabled}
      defaultValue={defaultVal}
      dropdownMatchSelectWidth={500}
      options={optionsSuggest}
      // onSearch={debounce(handleSuggestSearch, 300)}
      className={className}
      value={getMsgClient(value || '')}
      onChange={setValue}
      style={{ cursor: 'pointer', overflow: 'auto' }}
      onSelect={props.onSelect}
      {...rest}
    >
      {children}
    </AutoComplete>
  );
}
