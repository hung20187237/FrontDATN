import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  IconMenu,
  Logo,
  RightHeader,
  IconUser,
  PopoverCustom,
  LayoutSearch,
} from './style';
import SearchField from '../InputField/SearchField';

const Header = ({
  iconMenu,
  logo,
  userData,
  onClickMenu,
  onClickLogo,
  content,
  visible,
  onVisibleChange,
  showSearch,
  placeholderSearch,
  onSelectSearch,
  onClickFilterBtn,
  searchSimple,
  handleSearch,
  onPressEnter,
  hideFilter,
  pathSuggestSearch,
  contentHoverAvatar,
  paramSearch,
                  TypeOfWorkId,
  optionFilterSearchBy,
}) => (
  <HeaderEtn>
    <ContainerHeader>
      <LeftHeader>
        <IconMenu alt="" onClick={onClickMenu || null} src={iconMenu} />
        <Logo alt="" onClick={onClickLogo || null} src={logo} />
        {showSearch && (
          <LayoutSearch>
            <SearchField
              placeholder={placeholderSearch}
              onSelect={onSelectSearch}
              onClick={onClickFilterBtn}
              searchSimple={searchSimple}
              handleSearch={value => handleSearch(value)}
              onPressEnter={onPressEnter}
              hideFilter={hideFilter}
              pathSuggestSearch={pathSuggestSearch}
              paramSearch={paramSearch}
              optionFilterSearchBy={optionFilterSearchBy}
              TypeOfWorkId={TypeOfWorkId}
            />
          </LayoutSearch>
        )}
      </LeftHeader>
      <RightHeader>
        <PopoverCustom
          placement="bottomRight"
          content={content}
          visible={visible}
          onVisibleChange={onVisibleChange}
          trigger="click"
          overlayStyle={{ paddingRight: '15px' }}
        >
          {!visible ? (
            <Tooltip placement="bottomLeft" title={contentHoverAvatar} color="white" overlayStyle={{ maxWidth: '430px' }}>
              <IconUser alt="" src={userData.image} />
            </Tooltip>
          ) : (
            <IconUser alt="" src={userData.image} />
          )}
        </PopoverCustom>
      </RightHeader>
    </ContainerHeader>
  </HeaderEtn>
);
Header.propTypes = {
  iconMenu: PropTypes.element,
  logo: PropTypes.element,
  userData: PropTypes.object,
  onClickMenu: PropTypes.func,
  onClickLogo: PropTypes.func,
  content: PropTypes.node,
  visible: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  showSearch: PropTypes.bool,
  placeholderSearch: PropTypes.string,
  onSelectSearch: PropTypes.func,
  onClickFilterBtn: PropTypes.func,
  searchSimple: PropTypes.func,
  handleSearch: PropTypes.func,
  onPressEnter: PropTypes.func,
  hideFilter: PropTypes.bool,
  pathSuggestSearch: PropTypes.string,
  contentHoverAvatar: PropTypes.node,
  paramSearch: PropTypes.string,
  TypeOfWorkId: PropTypes.number,
};

export default Header;
