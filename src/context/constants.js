import iconMenuPartner from '../images/menuPartner.svg';
import iconMenuProfile from '../images/menuProfile.svg';
import iconMenuSystem from '../images/menuSystem.svg';
import iconMenuDashBoard from '../images/menuDashboard.svg';
import iconMenuCustomer from '../images/menuCustomer.svg';
import iconCustomer from '../images/icon/iconcustomer.svg';
import iconProcessStatus from '../images/donut_small.svg';
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const MAX_OF_RECORD = 50000;
export const REGEX_PHONE_NUMBER = /^(0)((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d){7}$/;

export const REGEX_PHONE_NUMBER_LANDLINE = /^((\+|0)?(84|\(\84\))?)[(]?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))[)]?[ -]?(\d){3}[ -]?(\d){4}$/;
// eslint-disable-next-line no-useless-escape
export const REGEX_EMAIL = /^[\w\.]{3,32}@([\w]+\.)+[\w]{2,4}$/;
// eslint-disable-next-line no-useless-escape
export const REGEX_EMAIL_MAX = /^[\w_\.]{3,32}@$/;

// export const REGEX_EMAIL2 = /^[\w]{3,32}@[\w]{}.[\w-]{2,4}.[\w-]{2,4}$/g;

export const REGEX_MST = /^([0-9]{10}|[0-9]{13}|[0-9]{10}[-][0-9]{3}|[a-zA-Z0-9.]{8})$/g;
export const REGEX_CMND_CCCD = /^([0-9]{9}|[0-9]{12}|[A-Z]([0-9]{7}))$/g;
export const REGEX_PASSWORD = /^(?=.{8,})((?=.*[^a-zA-Z\s])(?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\s])(?=.*\d)(?=.*[a-zA-Z])).*$/;
export const REGEX_PROFILE_NAME = /[a-zA-Z0-9.]/;
export const REGEX_HTML = /<[^>]*>?/;
export const REGEX_SAMPLE_CHARACTERS = /^(.)\1+/;

export const REGEX_PASSWORD2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

export const REGEX_CMND_CCCD2 = /^([0-9]{9}|[0-9]{12})$/g;

export const SSO_CODE = 'code';

export const SSO_SESION_STATE = 'session_state';

export const DEFAULT_PARAM = {
  partnerType: '0',
  textSearch: '',
  currentPage: 1,
  pageSize: 50,
};

export const DEFAULT_PARAM_EASY_SEARCH = {
  currentPage: 1,
  pageSize: 50,
  textSearch: '',
  objectId: 0,
  categoryId: 0,
};

export const DEFAULT_PARAM_EASY_SEARCH_ROLE = {
  currentPage: 1,
  pageSize: 50,
  textSearch: '',
  objectCategory: 0,
  objectID: '',
};

export const DEFAULT_PARAM_ADVANCE_SEARCH_ROLE = {
  textSearch: '',
  roleGroupID: 0,
  statusID: -1,
  pageSize: 50,
  currentPage: 1,
  companyId: '',
};

export const DEFAULT_PARAM_ADVANCE_SEARCH_PARTNER = {
  currentPage: 1,
  pageSize: 50,
  textSearch: '',
  ids: '',
  partnerTypeId: 0,
  userIdCreateds: '',
  activeId: 0,
};

export const DEFAULT_PARAM_ADVANCE_SEARCH_PROFILE = {
  currentPage: 1,
  pageSize: 50,
  textSearch: '',
  categoryId: 0,
  objectId: 0,
  profileCategoryIds: '',
  ids: '',
  signerIds: '',
  textSampleIds: '',
  profileSource: '-1',
  statusIds: '',
  userCreateIds: '',
};
export const DEFAULT_PARAM_ADVANCE_SEARCH_CUSTOMER = {
  currentPage: 1,
  pageSize: 50,
  textSearch: '',
  id: 0,
  userIdCreate: 0,
  companyId: '',
};

export const COOKIES = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  superPass: 'SP_eC',
  checkReload: 'checkReload',
  typeLogin: 'typeLogin',
  loginSystem: 1,
  loginSSO: 2,
};

export const STORAGE = {
  userInfo: 'userInfo',
  tokenId: 'tokenId',
  expandMenu: 'expandMenu',
};

export const REDUX_KEY = {
  app: 'app',
  login: 'login',
  accountManagement: 'accountManagement',
  partner: 'partner',
  profile: 'profile',
  user: 'user',
  system: 'system',
  position: 'position',
  dashBoard: 'dashBoard',
  role: 'role',
  customer: 'customer',
  processStatus: 'processStatus',
};

export const RESPONSE_MESSAGE = {
  IM_SUCCESS: 0,
  IM_ERROR: 1,
  CB1: 2,
  CB2: 3,
};

export const TIME_ALL = '1';
export const TIME_OPTION_TODAY = '2';
export const TIME_OPTION_FROM_THIS_WEEK = '3';
export const TIME_OPTION_FROM_LAST_WEEK = '4';
export const TIME_OPTION_FROM_THIS_MONTH = '5';
export const TIME_OPTION_FORM_LAST_MONTH = '6';
export const TIME_OPTION_PERIOD = '7';

export const LIST_CREATE_TIME = [
  {
    value: TIME_ALL,
    label: 'Tất cả',
  },
  {
    value: TIME_OPTION_TODAY,
    label: 'Hôm nay',
  },
  {
    value: TIME_OPTION_FROM_THIS_WEEK,
    label: 'Từ tuần này',
  },
  {
    value: TIME_OPTION_FROM_LAST_WEEK,
    label: 'Từ đầu tuần trước',
  },
  {
    value: TIME_OPTION_FROM_THIS_MONTH,
    label: 'Từ đầu tháng này',
  },
  {
    value: TIME_OPTION_FORM_LAST_MONTH,
    label: 'Từ đầu tháng trước',
  },
  {
    value: TIME_OPTION_PERIOD,
    label: 'Khoảng thời gian',
  },
];

export const LIST_VOCATIVE = [
  { value: 1, label: 'Bạn' },
  {
    value: 2,
    label: 'Anh',
  },
  {
    value: 3,
    label: 'Chị',
  },
  {
    value: 4,
    label: 'Cô',
  },
  {
    value: 5,
    label: 'Chú',
  },
  {
    value: 6,
    label: 'Bà',
  },
];

export const PATH_ROOT = '/';
export const PATH_LOGIN = '/login';
export const PATH_PARTNER = '/partner';
export const PATH_ROLE_GROUP = '/role-group';
export const PATH_PROFILE = '/profile';
export const PATH_SYSTEM = '/system';
export const PATH_POSITION = '/position';
export const PATH_ROLE = '/role';
export const PATH_USER = '/user';
export const PATH_DASH_BOARD = '/dashboard';
export const PATH_CUSTOMER = '/customer';
export const PATH_PROCESS_STATUS = '/processStatus';
export const PATH_PROFILE_TYPE = '/profile-type';
export const PATH_ACCOUNT = '/account';
export const PATH_TOOL = '/tool';
export const PATH_AUTHORIZATION = '/authorization';
export const PATH_SIGN_HSM = '/path-HSM';
export const PATH_LOG_ERROR = '/searchLog';
export const PATH_DEMO = '/demo';
export const PATH_SAMPLE_TEXT_TYPE = '/sample-text-type';
export const PATH_EMAIL_CONFIG = '/emailConfig';
export const PATH_SIGN_CONFIG = '/signConfig';
export const PATH_TEXT_SAMPLE = '/textSample';
export const PATH_HEALTH_CHECK = '/health-check';
export const PATH_REPORT = '/report';
export const PATH_RUN_STORED_PROCEDURE = '/runStoredProcedure';
export const CALL_BACK = '/calback';

export const ListIcon = [
  'flagvn',
  'ios',
  'icontuto',
  'defaultSign',
  'pictext',
  'timespen2',
  'editpen2',
  'pictextgray',
  'onlyText',
  'onlyPic',
  'sign1',
  'sign2',
  'sign3',
  'sign4',
  'sign5',
  'sign1gray',
  'sign2gray',
  'sign3gray',
  'sign4gray',
  'sign5gray',
  'info1',
  'black-dot-1',
  'white-dot-1',
  'square-1',
  'setting-white',
  'success-green',
  'icon-remote-signing',
  'editTypeConfigGray',
  'select-cks',
  'sign-accept',
  'delete-cks',
  'search-mini',
  'play-icon-mini',
  'pause-icon-mini',
  'icon-tool',
  'setting-green',
  'error-version',
  'drop-left',
  'drop-right',
  'drop-bottom',
  'sub-custom',
  'collapse',
  'expanded',
  'support-icon',
  'play-icon',
  'pause-icon',
  'file-excel',
  'import-black',
  'add-black',
  'helper',
  'checked-white',
  'logo-white',
  'export-white',
  'showlist',
  'hiddenlist',
  'search2',
  'graydot',
  'vbm-upload',
  'vbm-pen',
  'vbm-tv',
  'setting-grey',
  'logoLogin',
  'pen-black',
  'pen-primary',
  'signPage',
  'upload-green',
  'apart-apart',
  'warning-1',
  'plus-plus',
  'eraser',
  'square-square',
  'red-warning',
  'black-dot',
  'warning-usb2',
  'upload-success',
  'rectangle-black',
  'dot-black',
  'dot-border',
  'edit-primary',
  'white-upload',
  'arrow-down-primary-black',
  'expire-date-sign',
  'zoom-in',
  'zoom-out',

  'edittimes1',
  'editpen1',
  'arrow-down-primary',
  'arrow-up-primary',
  'deleteRow',
  'pin',
  'hierarchy',
  'chart',
  'settings',
  'database',
  'notes',
  'logo',
  'add',
  'onlytextgray',
  'onlypicgray',
  'search',
  'arrowDown',
  'arrowDownTree',
  'arrow-menu',
  'trashCan',
  'threeDots',
  'dot',
  'd-check',
  'icon-confirm',
  'bin',
  'edit',
  'send-message',
  'handout',
  'g-chart',
  'curved-previous',
  'cheque',
  'handout-2',
  'check-list',
  'box-confirm',
  'stationery',
  'menu',
  'filter-white',
  'remove',
  'back',
  'restore',
  'refresh',
  'add-blue',
  'close-icon',
  'filter-remove',
  'users',
  'access-key',
  'meeting',
  'cancel',
  'undo',
  'check',
  'role-group',
  'authorization',
  'notice-success',
  'refresh-blue',
  'notice-error',
  'icon-arrow-down',
  'faq',
  'warning',
  'menu-log-work',
  'menu-product',
  'menu-config',
  'menu-role-group',
  'menu-authori',
  'filter-black',
  'confirm',
  'history',
  'arrow-right',
  'arrow-down',
  'calendar',
  'warning_red',
  'warning_green',
  'warning_yellow',
  'confirm-lw',
  'file-text',
  'folder',
  'vbm',
  'people',
  'icon-system',
  'download',
  'download-grey',
  'eye',
  'warning-cancel',
  'sign_success',
  'download_orange',
  'eye_orange',
  'sign_in',
  'user_login',
  'lock_login',
  'defaultAvatar',
  'warningInactive',
  'updateUnit',
  'trashRed',
  'lock',
  'filter-main',
  'notice1',
  'notice2',
  'notice3',
  'notice4',
  'statistic',
  'sql',
  'searchStatistic',
  'exportStatistic',
  'editTypeConfig',
  'configTypeProfile',
  'noticePartner',
  'uploadProfile',
  'trashIcon',
  'iconPdf',
  'point-up',
  'partner',
  'closeSigner',
  'checkEnabled',
  'checkDisabled',
  'hidePassLogin',
  'warning-usb',
  'signSuccess',
  'iconSigned',
  'iconRejectSigned',
  'copy',
  'sign',
  'warning_default',
  'process_group',
  'arrow_down_white',
  'arrow_down',
  't_warning_default',
  'not-cks',
  'warningAmber',
  'warningCKS',
  'logoutIcon',
  'signMethod',
  'bigLogo',
  'closeTab',
  'uploadVBM',
  'writeVBM',
  'starOrange',
  'settingVBM',
  'uploadVBMIcon',
  'empty',
  'emptySign',
  'copyVBM',
  'add-primary',
  'addRowAbove',
  'addRowBelow',
];

// export const IMG_BASE64 = {
//   "imghandshakeCloseUpExecutives":``
// };

export const LIST_TAB_MENU = [
  {
    key: 1,
    path: '/dashboard',
    icon: iconMenuDashBoard,
  },
  {
    key: 2,
    path: '/partner',
    icon: iconMenuPartner,
  },
  {
    key: 10,
    path: '/customer',
    icon: iconMenuCustomer,
  },
  {
    key: 3,
    path: '/profile',
    icon: iconMenuProfile,
  },
  {
    key: 99,
    icon: iconMenuSystem,
  },
  {
    key: 4,
    path: '/system',
    icon: iconMenuSystem,
  },
  {
    key: 5,
    path: '/position',
    icon: iconMenuSystem,
  },
  {
    key: 7,
    path: '/role',
    icon: iconMenuSystem,
  },
  {
    key: 6,
    path: '/user',
    icon: iconMenuSystem,
  },
  {
    key: 14,
    path: '/customer',
    icon: iconCustomer,
  },
  {
    key: 16,
    path: '/processStatus',
    icon: iconProcessStatus,
  },
];
