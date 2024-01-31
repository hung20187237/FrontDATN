import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

import groupBy from 'lodash/groupBy';
import debounce from 'lodash/debounce';

import { isEmpty } from 'lodash';
import { getMsgClient } from '../../../commonFunction';
import arrow from '../../../../images/arrow.svg';
import { Item, ItemLabel } from './styles';
import { axiosGet,axiosPostNoCheck } from '../../../../utils/request';

MyAutoCompleteRele.propTypes = {
  defaultVal: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  pathSuggestSearch: PropTypes.string,
};

MyAutoCompleteRele.defaultProps = {
  children: null,
  className: '',
};

export default function MyAutoCompleteRele(props) {
  const { defaultVal, children, className, pathSuggestSearch, disabled, ...rest } = props;
  const [optionsSuggest, setOptionsSuggest] = useState([]);
  const [value, setValue] = useState('');

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
    if (data === '...') return text;
    return `${data}[!|${item.objectGuid}|!]`;
  };

  const renderItem = (item, textSearch) => ({
    value: renderText(item.profileName, textSearch, item),
    key: `${item.profileName}_${item.objectGuid}`,
    label: (
      <ItemLabel
        dangerouslySetInnerHTML={{
          __html: replaceAllSet(item.profileName, textSearch, `<b>${textSearch}</b>`),
        }}
        key={`${item.profileName}_${item.objectGuid}`}
      />
    ),
    objectGuid: item.objectGuid,
    profileName: item.profileName,
    text_search: textSearch,
    ...item,
  });

  const searchResult = (textSearch, listSearch) => {
    // const result = Object.keys(listSearch).map(item => ({
    //   label: renderTitle(listSearch[item].profileName),
    //   options: renderItem(listSearch[item], textSearch),
    // }));
    const result =listSearch.map(item => ({
      label: renderTitle(item.profileName),
      // options: renderItem(item, textSearch)
    }))
    
    return result;
  };

  const handleSuggestSearch = textSearch => {
    console.log("textSearch",textSearch);
    var body={
      "currentPage": 1,
      "pageSize": 1000,
      "textSearch": "",
    }
    const text = textSearch.trim();
    if (isEmpty(text)) return setOptionsSuggest([]);
    let listSearch;
    axiosPostNoCheck(`${pathSuggestSearch}`,body).then(res => {
      if (res.data.isError) return;
      listSearch = groupBy(res.data.object.data, 'categoryId');
      setOptionsSuggest(searchResult(text, res.data.object.data));
    });
    return '';
  };

  return (
    <AutoComplete
      disabled={disabled}
      defaultValue={defaultVal}
      dropdownMatchSelectWidth={500}
      options={optionsSuggest}
      onSearch={debounce(handleSuggestSearch, 300)}
      className={className}
      value={getMsgClient(value || '')}
      onChange={setValue}
      {...rest}
    >
      {children}
    </AutoComplete>
  );
}
