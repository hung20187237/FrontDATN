import Cookies from 'js-cookie';
import {
  endOfDay,
  endOfWeek,
  endOfYesterday,
  startOfDay,
  startOfMonth,
  startOfToday,
  startOfWeek,
  startOfYesterday,
} from 'date-fns';
import { t } from 'i18next';
import {
  COOKIES,
  PATH_LOGIN,
  REGEX_EMAIL,
  REGEX_PHONE_NUMBER,
  TIME_ALL,
  TIME_OPTION_FORM_LAST_MONTH,
  TIME_OPTION_FROM_LAST_WEEK,
  TIME_OPTION_FROM_THIS_MONTH,
  TIME_OPTION_FROM_THIS_WEEK,
  TIME_OPTION_TODAY,
} from '../utils/constants';
import history from '../utils/history';
import { logOutSSO } from '../utils/loginSSO';

export function getMsgClient(message) {
  if (message)
    return message.indexOf('[!|') !== -1 && message.indexOf('|!]') !== -1
      ? message.split('[!|')[0].trim() + message.split('|!]')[1]
      : message;
  return '';
}

export function gotoUrlPageBlank(url) {
  if (!url) return null;
  const element = document.createElement('a');
  element.setAttribute('href', url);
  element.setAttribute('target', '_blank');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  return document.body.removeChild(element);
}

export const formatTime = time => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

export const formatDateTime = time => {
  const date = new Date(time);
  return `${formatTime(date.getHours())}h${formatTime(date.getMinutes())}' ${formatTime(date.getDate())}/${formatTime(
    date.getMonth() + 1,
  )}/${date.getFullYear()}`;
};

export const formatShortDate = time => {
  const date = new Date(time);
  return `${formatTime(date.getDate())}-${formatTime(date.getMonth() + 1)}-${date.getFullYear()}`;
};

export const downloadFromBase64 = async (filename, base64) => {
  // const opts = {
  //   suggestedName: filename,
  //   types: [
  //     {
  //       description: 'Microsoft Excel Worksheet(*.xlsx)',
  //       accept: { 'text/plain': ['.xlsx', '.xls'] },
  //     },
  //   ],
  // };
  try {
    // const fileHandle = await window.showSaveFilePicker(opts);
    // console.log(fileHandle)
    // const nameAA = fileHandle.name;
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;base64,${base64}`);
    // element.setAttribute('download', nameAA);
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    element.style.display = 'none';
    document.body.removeChild(element);
  } catch (e) {
    console.log(e);
  }
};

export const createNameFileExport = () => {
  // format <YYMMDD>_<HHMMSS>_RandomNumber(6)
  const today = new Date();
  const date = `${today
    .getFullYear()
    .toString()
    .slice(2, 4)}${today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1}${
    today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
  }`;
  const hour = `${today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()}${
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
  }${today.getSeconds()}`;
  const number = Math.floor(Math.random() * 999999);
  return `${date}_${hour}_${number}`;
};

/* Hàm format thời gian */
export const formatFullDateTime = (time, type) => {
  const valueTime = new Date(time);
  const format = value => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  if (type === 'DD/MM/YYYY HH:MM') {
    return `${format(valueTime.getDate())}/${format(valueTime.getMonth() + 1)}/${format(valueTime.getFullYear())} ${format(
      valueTime.getHours(),
    )}:${format(valueTime.getMinutes())}`;
  }
  return `${format(valueTime.getDate())}/${format(valueTime.getMonth() + 1)}/${format(valueTime.getFullYear())} ${format(
    valueTime.getHours(),
  )}:${format(valueTime.getMinutes())}:${valueTime.getSeconds()}`;
};

/* Hàm đăng xuất */
export const logOut = () => {
  let checkTypeLogin = false;
  if (Cookies.get(COOKIES.typeLogin) == COOKIES.loginSystem) {
    checkTypeLogin = true;
  }
  if (checkTypeLogin) {
    Cookies.remove(COOKIES.accessToken);
    Cookies.remove(COOKIES.refreshToken);
    Cookies.remove(COOKIES.typeLogin);
    localStorage.clear();
    history.push(PATH_LOGIN);
  } else {
    logOutSSO();
  }
};

/* Ham lay thoi gian bat dau cua mot ngay */
export const getStartOfDay = date => new Date(startOfDay(date) - startOfDay(date).getTimezoneOffset()).toISOString();

/* Ham lay thoi gian ket thuc cua mot ngay */
export const getEndOfDay = date => new Date(endOfDay(date) - endOfDay(date).getTimezoneOffset()).toISOString();

/* Ham lay thoi gian bat dau cua ngay hom nay */
export const getStartTimeToday = date => new Date(startOfToday(date) - startOfToday(date).getTimezoneOffset()).toISOString();

/* Ham lay thoi gian bat dau cua ngay hom qua */
export const getStartTimeYesterday = date =>
  new Date(startOfYesterday(date) - startOfYesterday(date).getTimezoneOffset()).toISOString();

/* Ham lay thoi gian ket thuc cua ngay hom qua */
export const getEndTimeYesterday = date =>
  new Date(endOfYesterday(date) - endOfYesterday(date).getTimezoneOffset()).toISOString();

/* Ham lay thoi gian bat dau cua tuan */
export const getStartTimeWeek = date =>
  new Date(
    startOfWeek(date, { weekStartsOn: 1 }) - startOfWeek(date, { weekStartsOn: 1 }).getTimezoneOffset(),
  ).toISOString();

/* Ham lay thoi gian bat dau cua tuan truoc */
export const getStartTimeLastWeek = date =>
  new Date(
    startOfWeek(date, { weekStartsOn: 1 }) - 7 * 86400000 - startOfWeek(date, { weekStartsOn: 1 }).getTimezoneOffset(),
  ).toISOString();

/* Ham lay thoi gian bat dau cua thang */
export const getStartTimeMonth = date => new Date(startOfMonth(date) - startOfMonth(date).getTimezoneOffset()).toISOString();

/* Ham lay thoi gian bat dau cua thang truoc */
export const getFirstDayPreviousMonth = date => new Date(date.getFullYear(), date.getMonth() - 1, 1).toISOString();

/* Ham lay thoi gian hien tai */
export const getTimeNow = () => new Date(Date.now() - new Date().getTimezoneOffset()).toISOString();

/* Ham tao uuid random */
export const createRandomUUID = () => {
  let dt = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // eslint-disable-next-line no-bitwise
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    // eslint-disable-next-line no-bitwise
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

/* Ham lay thoi gian cua time option */
export const getTimeOption = option => {
  const date = new Date();
  switch (option) {
    case TIME_ALL:
      return {
        beginDate: null,
        endDate: null,
      };
    case TIME_OPTION_TODAY:
      return {
        beginDate: getStartTimeToday(date),
        endDate: getTimeNow(),
      };
    case TIME_OPTION_FROM_THIS_WEEK:
      return {
        beginDate: getStartTimeWeek(date),
        endDate: getTimeNow(),
      };
    case TIME_OPTION_FROM_LAST_WEEK:
      return {
        beginDate: getStartTimeLastWeek(date),
        endDate: getTimeNow(),
      };
    case TIME_OPTION_FROM_THIS_MONTH:
      return {
        beginDate: getStartTimeMonth(date),
        endDate: getTimeNow(),
      };
    case TIME_OPTION_FORM_LAST_MONTH:
      return {
        beginDate: getFirstDayPreviousMonth(date),
        endDate: getTimeNow(),
      };
    default:
      return {
        beginDate: getStartTimeToday(date),
        endDate: getTimeNow(),
      };
  }
};

// PhuNDc: Hàm sao chép string
export function copyString(string) {
  if (string === '') return false;
  const element = document.createElement('input');
  element.setAttribute('value', string);

  document.body.appendChild(element);

  element.focus();
  element.select();

  try {
    const success = document.execCommand('copy');
    element.style.display = 'none';
    return success;
  } catch (error) {
    element.style.display = 'none';
    console.log(error);
    return false;
  }
}

// PhuNDc: Hàm viết tắt thông tin
export function acronym(text) {
  if (text === '') return '';
  const words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  words.join(' ');
  const str = words.toString();
  const onlyUpper = str.replace(/[^A-Z]/g, '');
  return onlyUpper;
}

// PhuNDc: format số điện thoại
export function formatPhoneNumber(phoneNumber) {
  try {
    phoneNumber = `${phoneNumber.substr(0, 4)} ${phoneNumber.substr(4, 3)} ${phoneNumber.substr(7, 3)}`;
    return phoneNumber;
  } catch {
    return '';
  }
}

// Hàm lấy thời gian kết thúc của tuần
export const getEndTimeWeek = date =>
  new Date(endOfWeek(date, { weekStartsOn: 1 }) - endOfWeek(date, { weekStartsOn: 1 }).getTimezoneOffset()).toISOString();

// PhuNDc: Hàm check kí tự đầu tiên là space
export function checkFirstLetterSpace(string) {
  if (string.trim().charCodeAt(0) === 32) {
    return true;
  }
  return false;
}

// PhuNDc: Hàm check kí tự đặc biệt
export function checkIfStringHasSpecialChar(_string) {
  const spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (spChars.test(_string)) {
    return true;
  }
  return false;
}

// PhuNDc: Hàm check spam kí tự nhập
export function isIdentile(string) {
  const letters = string.trim().split('');
  const unique = new Set(letters);

  return unique.size === 1;
}

// Hàm không cho nhập mật khẩu tiếng việt.
export function removeAscent(str) {
  if (str === null || str === undefined) return str;
  str = str.replace(/â/g, 'aa');
  str = str.replace(/á/g, 'as');
  str = str.replace(/à/g, 'af');
  str = str.replace(/ả/g, 'ar');
  str = str.replace(/ạ/g, 'aj');
  str = str.replace(/ã/g, 'ax');
  str = str.replace(/ă/g, 'aw');

  str = str.replace(/ê/g, 'ee');
  str = str.replace(/é/g, 'es');
  str = str.replace(/è/g, 'ef');
  str = str.replace(/ẻ/g, 'er');
  str = str.replace(/ẹ/g, 'ej');
  str = str.replace(/ẽ/g, 'ex');

  str = str.replace(/í/g, 'is');
  str = str.replace(/ì/g, 'if');
  str = str.replace(/ỉ/g, 'ir');
  str = str.replace(/ị/g, 'ij');
  str = str.replace(/ĩ/g, 'ix');

  str = str.replace(/ó/g, 'os');
  str = str.replace(/ò/g, 'of');
  str = str.replace(/ỏ/g, 'or');
  str = str.replace(/ọ/g, 'oj');
  str = str.replace(/õ/g, 'ox');
  str = str.replace(/ô/g, 'oo');
  str = str.replace(/ơ/g, 'ow');

  str = str.replace(/ú/g, 'us');
  str = str.replace(/ù/g, 'uf');
  str = str.replace(/ủ/g, 'ur');
  str = str.replace(/ụ/g, 'uj');
  str = str.replace(/ũ/g, 'ux');
  str = str.replace(/ư/g, 'uw');

  str = str.replace(/ý/g, 'ys');
  str = str.replace(/ỳ/g, 'yf');
  str = str.replace(/ỷ/g, 'yr');
  str = str.replace(/ỵ/g, 'yj');
  str = str.replace(/ỹ/g, 'yx');

  str = str.replace(/đ/g, 'd');

  // Viet hoa
  str = str.replace(/Â/g, 'Aa');
  str = str.replace(/Á/g, 'As');
  str = str.replace(/À/g, 'Af');
  str = str.replace(/Ả/g, 'Ar');
  str = str.replace(/Ạ/g, 'Aj');
  str = str.replace(/Ă/g, 'Ax');
  str = str.replace(/ă/g, 'aw');

  str = str.replace(/Ê/g, 'Ee');
  str = str.replace(/É/g, 'Es');
  str = str.replace(/È/g, 'Ef');
  str = str.replace(/Ẻ/g, 'Er');
  str = str.replace(/Ẹ/g, 'Ej');
  str = str.replace(/Ẽ/g, 'Ex');

  str = str.replace(/Í/g, 'Is');
  str = str.replace(/Ì/g, 'If');
  str = str.replace(/Ỉ/g, 'Ir');
  str = str.replace(/Ị/g, 'Ij');
  str = str.replace(/Ĩ/g, 'Ix');

  str = str.replace(/Ó/g, 'Os');
  str = str.replace(/Ò/g, 'Of');
  str = str.replace(/Ỏ/g, 'Or');
  str = str.replace(/Ọ/g, 'Oj');
  str = str.replace(/Õ/g, 'Ox');
  str = str.replace(/Ô/g, 'Oo');
  str = str.replace(/Ơ/g, 'Ow');

  str = str.replace(/Ú/g, 'Us');
  str = str.replace(/Ù/g, 'Uf');
  str = str.replace(/Ủ/g, 'Ur');
  str = str.replace(/Ụ/g, 'Uj');
  str = str.replace(/Ũ/g, 'Ux');
  str = str.replace(/Ư/g, 'Uw');

  str = str.replace(/Ý/g, 'Ys');
  str = str.replace(/Ỳ/g, 'Yf');
  str = str.replace(/Ỷ/g, 'Yr');
  str = str.replace(/Ỵ/g, 'Yj');
  str = str.replace(/Ỹ/g, 'Yx');

  str = str.replace(/Đ/g, 'Dd');
  return str;
}

// Hàm kiểm tra chuỗi có dấu cách
export function containsWhitespace(str) {
  return str.includes(' ');
}

// Hàm tự sinh Mã
export function genCodeNoLine(str, underscore = true) {
  if (!str) return '';
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  str = str.toUpperCase();

  if (str.split(' ').length === 1) return underscore ? `${str}` : str;

  const matches = str.match(/\b(\w)/g);
  if (!matches) return '';
  const acronym = matches.join('');
  if (underscore) return `${acronym}`;
  return acronym;
}

// Hàm nhập Mã không có dấu Tiếng Việt
export function removeAscentCode(str) {
  if (str === null || str === undefined) return str;
  // str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');

  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str;
}
// Kiem tra 4 ki tu lien tiep co bang nhau hay k ? cos thi tra flase, k thi tra ve true
export const checkFourDigitSample = str => {
  const inValue = str.toString();
  const l = inValue.length;
  for (let i = 0; i < l - 3; i += 1) {
    if (inValue[i] === inValue[i + 1] && inValue[i + 1] === inValue[i + 2] && inValue[i + 2] === inValue[i + 3]) {
      return false;
    }
  }
  return true;
};

export const checkAllSpecialCharacter = str => {
  const inValue = str.toString();
  for (let i = 0; i < inValue.length - 1; i += 1) {
    if (/[a-z]/.test(inValue[i]) || /[A-Z]/.test(inValue[i]) || /[0-9]/.test(inValue[i])) {
      return true;
    }
  }
  return false;
};

// PhuNDc: Hàm check kí tự đặc biệt sinh Mã
export function checkIfCodeHasSpecialChar(_string) {
  const spChars = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/;
  if (spChars.test(_string)) {
    return true;
  }
  return false;
}

export function validateEmailNotRequire(_email) {
  const res = '';
  if (_email && _email.length !== 0) {
    if (_email.trim().split('.').length < 4) {
      if (!REGEX_EMAIL.test(_email.trim())) {
        return `${t('common.email')} ${_email} ${t('userManagement.emailIsMalformed')}`;
      }
    } else {
      return `${t('common.email')} ${_email} ${t('userManagement.emailIsMalformed')}`;
    }
  }
  return res;
}

export function validateArrEmail(value) {
  if (value && value.length > 4) {
    return t('partner.emailIsMaximum');
  }
  if (value && value.length !== 0) {
    for (let i = 0; i < value.length; i += 1) {
      const valuecheck = value[i].split('@')[0];
      if (valuecheck.length > 32) {
        return t('partner.emailMaxFormed');
      }
      if (value[i].split('.').length > 3) {
        return t('customer.emailIsMalformed', { email: value[i] });
      }
      if (!/^[\w\.]{3,32}@([\w]+\.)+[\w]{2,4}$/.test(value[i].trim())) {
        return t('customer.emailIsMalformed', { email: value[i] });
      }
    }
  }
  return '';
}

export function validatePhoneNotRequire(_phone) {
  if (_phone) {
    if (!/^(0)((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d){7}$/.test(_phone.trim())) {
      return t('partner.phoneNumberIsIllegal');
    }
    return '';
  }
  return '';
}

export function validateArrPhoneNumber(value) {
  if (value && value.length > 4) {
    return t('partner.phoneIsMaximum');
  }
  if (value && value.length !== 0) {
    const duplicates = [];
    for (let i = 0; i < value.length; i += 1) {
      if (!/^(0)((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d){7}$/.test(value[i].trim())) {
        return t('partner.phoneIsMalformed', { SDT: value[i] });
      }
    }
    value.forEach((val, index) => {
      // Kiểm tra xem phần tử hiện tại có trùng với bất kỳ phần tử nào trước đó không
      if (value.indexOf(val, index + 1) !== -1) {
        // Nếu có, thêm phần tử đó vào mảng duplicates
        if (duplicates.indexOf(val) === -1) {
          duplicates.push(val);
          return Promise.reject(new Error(t('partner.phoneNumberDuplicates', { duplicates: val })));
        }
      }
    });
  }
  return '';
}

// Hàm tính thời gian xác minh số điện thoại
export function calculateMonth(string) {
  const now = new Date();
  const lastUpdate = new Date(string);
  let months;
  months = (now.getFullYear() - lastUpdate.getFullYear()) * 12;
  months -= lastUpdate.getMonth();
  months += now.getMonth();
  return months <= 0 ? 0 : months;
}

// PhuNDc: Hàm check kí tự đặc biệt của mã nhãn
export function checkIfCodeTagHasSpecialChar(_string) {
  const spChars = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;
  if (spChars.test(_string)) {
    return true;
  }
  return false;
}

// Random mã màu
export function randomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
