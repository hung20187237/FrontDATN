import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';
import debounce from 'lodash/debounce';
import { groupBy, isEmpty } from 'lodash';
import { getMsgClient } from '../../../commonFunction';
import arrow from '../../../../images/arrow.svg';
import { Item, ItemLabel } from './styles';
import { axiosGet } from '../../../../utils/request';

MyAutoCompleteTree.propTypes = {
  defaultVal: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  pathSuggestSearch: PropTypes.string,
  optionFilterSearchBy: PropTypes.array,
};

MyAutoCompleteTree.defaultProps = {
  children: null,
  className: '',
};

function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
}

export default function MyAutoCompleteTree(props) {
  const { defaultVal, children, className, pathSuggestSearch, disabled, optionFilterSearchBy, ...rest } = props;
  const [optionsSuggest, setOptionsSuggest] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      searchResult(value);
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

  const renderText = (content, text, item) => {
    if (content === '...') return text;
    // return `${content}[!|${item.id}|!]`;
    return `${content}`;
  };

  const renderItem = (content, textSearch, item, type) => ({
    value: renderText(content, textSearch, item),
    key: `_${item.id}_${type}`,
    label: (
      <ItemLabel
        dangerouslySetInnerHTML={{
          __html: replaceAllSet(content, textSearch, `<b>${textSearch}</b>`),
        }}
        // key={`_${item.id}_`}
      />
    ),
  });

  const hasSearchTerm = (character, textSearch) =>
    removeAscent(character)
      .toLowerCase()
      .indexOf(removeAscent(textSearch).toLowerCase()) !== -1;

  const searchResult = textSearch => {
    if (!textSearch) {
      setOptionsSuggest([]);
    } else {
      axiosGet(`${pathSuggestSearch}`).then(res => {
        if (res.data.isError) {
          setOptionsSuggest([]);
        } else {
          let listSearch = [];
          const result = [];
          listSearch = [...res.data.object];
          if (optionFilterSearchBy) {
            optionFilterSearchBy.forEach(item => {
              const option = [];
              listSearch.forEach(item1 => {
                let value = '';
                item.value.forEach(val => {
                  value += `${item1[val]} - `;
                });
                value = value.substring(0, value.length - 3);
                if (hasSearchTerm(value, textSearch)) {
                  option.push(renderItem(value, textSearch, item1, item.label));
                }
              });
              if (option.length > 0) {
                result.push({
                  label: renderTitle(item.label),
                  options: option,
                });
              }
            });
          }
          setOptionsSuggest(result);
        }
      });
    }
  };

  return (
    <AutoComplete
      disabled={disabled}
      defaultValue={defaultVal}
      dropdownMatchSelectWidth={500}
      options={optionsSuggest}
      onSearch={searchResult}
      className={className}
      value={getMsgClient(value || '')}
      onChange={setValue}
      {...rest}
    >
      {children}
    </AutoComplete>
  );
}
