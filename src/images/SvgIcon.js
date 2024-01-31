/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { ListIcon } from '../../src/context/constants';

SvgIcon.propTypes = {
  name: PropTypes.oneOf(ListIcon).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  fill: PropTypes.string,
};

SvgIcon.defaultProps = {
  className: '',
  onClick: null,
};

export default function SvgIcon(props) {
  const { name, className, onClick, fill } = props;
  let iconElement;
  switch (name) {
    case 'editTypeConfigGray':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6634_22053)">
            <path
              d="M11.7167 7.51667L12.4833 8.28333L4.93333 15.8333H4.16667V15.0667L11.7167 7.51667V7.51667ZM14.7167 2.5C14.5083 2.5 14.2917 2.58333 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C15.1417 2.575 14.9333 2.5 14.7167 2.5V2.5ZM11.7167 5.15833L2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833V5.15833Z"
              fill="#A8B1BD"
            />
          </g>
          <defs>
            <clipPath id="clip0_6634_22053">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

      break;
    case 'search2':
      iconElement = (
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_7195_24053)">
            <path
              d="M16.7173 14H15.8896L15.5963 13.73C16.623 12.59 17.2412 11.11 17.2412 9.5C17.2412 5.91 14.1924 3 10.4311 3C6.66989 3 3.62109 5.91 3.62109 9.5C3.62109 13.09 6.66989 16 10.4311 16C12.1179 16 13.6685 15.41 14.8629 14.43L15.1458 14.71V15.5L20.3843 20.49L21.9453 19L16.7173 14V14ZM10.4311 14C7.82236 14 5.71649 11.99 5.71649 9.5C5.71649 7.01 7.82236 5 10.4311 5C13.0399 5 15.1458 7.01 15.1458 9.5C15.1458 11.99 13.0399 14 10.4311 14Z"
              fill="#A8B1BD"
            />
          </g>
          <defs>
            <clipPath id="clip0_7195_24053">
              <rect width="25.1447" height="24" fill="white" transform="translate(0.476562)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'sign1':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#08B7DD" />
          <path
            d="M49.8304 8H31.983C30.9915 8 30 8.88889 30 9.77778V22.2222C30 23.2 30.8924 24 31.983 24H49.8304C50.8219 24 51.8134 23.1111 51.8134 22.2222V9.77778C51.8134 8.88889 50.8219 8 49.8304 8ZM49.8304 22.1511C49.8106 22.1778 49.7709 22.2044 49.7511 22.2222H31.983V9.84889L32.0624 9.77778H49.7412C49.7709 9.79556 49.8007 9.83111 49.8205 9.84889V22.1511H49.8304ZM39.9152 19.12L37.4364 16.4444L33.9661 20.4444H47.8474L43.3855 15.1111L39.9152 19.12Z"
            fill="white"
          />
          <rect x="24" y="33" width="33" height="2" fill="white" />
          <rect x="23.999" y="38" width="33" height="2" fill="white" />
          <rect x="23.999" y="28" width="14.5" height="2" fill="white" />
        </svg>
      );
      break;
    case 'sign2':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#08B7DD" />
          <path
            d="M49.8304 24H31.983C30.9915 24 30 24.8889 30 25.7778V38.2222C30 39.2 30.8924 40 31.983 40H49.8304C50.8219 40 51.8134 39.1111 51.8134 38.2222V25.7778C51.8134 24.8889 50.8219 24 49.8304 24ZM49.8304 38.1511C49.8106 38.1778 49.7709 38.2044 49.7511 38.2222H31.983V25.8489L32.0624 25.7778H49.7412C49.7709 25.7956 49.8007 25.8311 49.8205 25.8489V38.1511H49.8304ZM39.9152 35.12L37.4364 32.4444L33.9661 36.4444H47.8474L43.3855 31.1111L39.9152 35.12Z"
            fill="white"
          />
          <rect x="24" y="13" width="33" height="2" fill="white" />
          <rect x="24.0005" y="18" width="33" height="2" fill="white" />
          <rect x="24.0005" y="7.99997" width="14.5" height="2" fill="white" />
        </svg>
      );
      break;
    case 'tag-cus':
      iconElement = (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.5 5C3.89782 5 4.27936 4.84196 4.56066 4.56066C4.84196 4.27936 5 3.89782 5 3.5C5 3.10218 4.84196 2.72064 4.56066 2.43934C4.27936 2.15804 3.89782 2 3.5 2C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5C2 3.89782 2.15804 4.27936 2.43934 4.56066C2.72064 4.84196 3.10218 5 3.5 5ZM15.41 7.58C15.77 7.94 16 8.44 16 9C16 9.55 15.78 10.05 15.41 10.41L10.41 15.41C10.2245 15.5964 10.004 15.7444 9.7612 15.8453C9.51837 15.9463 9.25798 15.9982 8.995 15.9982C8.73202 15.9982 8.47163 15.9463 8.2288 15.8453C7.98597 15.7444 7.76548 15.5964 7.58 15.41L0.59 8.42C0.22 8.05 0 7.55 0 7V2C0 0.89 0.89 0 2 0H7C7.55 0 8.05 0.22 8.41 0.58L15.41 7.58ZM11.54 1.71L12.54 0.71L19.41 7.58C19.78 7.94 20 8.45 20 9C20 9.55 19.78 10.05 19.42 10.41L14.04 15.79L13.04 14.79L18.75 9L11.54 1.71Z"
            fill="#A36957"
          />
        </svg>
      );
      break;
    case 'sign3':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#08B7DD" />
          <path
            d="M29.8304 16H11.983C10.9915 16 10 16.8889 10 17.7778V30.2222C10 31.2 10.8924 32 11.983 32H29.8304C30.8219 32 31.8134 31.1111 31.8134 30.2222V17.7778C31.8134 16.8889 30.8219 16 29.8304 16ZM29.8304 30.1511C29.8106 30.1778 29.7709 30.2044 29.7511 30.2222H11.983V17.8489L12.0624 17.7778H29.7412C29.7709 17.7956 29.8007 17.8311 29.8205 17.8489V30.1511H29.8304ZM19.9152 27.12L17.4364 24.4444L13.9661 28.4444H27.8474L23.3855 23.1111L19.9152 27.12Z"
            fill="white"
          />
          <rect x="37" y="21" width="33" height="2" fill="white" />
          <rect x="37" y="26" width="33" height="2" fill="white" />
          <rect x="37" y="31" width="33" height="2" fill="white" />
          <rect x="37" y="16" width="14.5" height="2" fill="white" />
        </svg>
      );
      break;
    case 'sign4':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#08B7DD" />
          <path
            d="M67.8295 16H49.9822C48.9907 16 47.9991 16.8889 47.9991 17.7778V30.2222C47.9991 31.2 48.8915 32 49.9822 32H67.8295C68.8211 32 69.8126 31.1111 69.8126 30.2222V17.7778C69.8126 16.8889 68.8211 16 67.8295 16ZM67.8295 30.1511C67.8097 30.1778 67.7701 30.2044 67.7502 30.2222H49.9822V17.8489L50.0615 17.7778H67.7403C67.7701 17.7956 67.7998 17.8311 67.8196 17.8489V30.1511H67.8295ZM57.9143 27.12L55.4355 24.4444L51.9652 28.4444H65.8465L61.3847 23.1111L57.9143 27.12Z"
            fill="white"
          />
          <rect x="9.99915" y="21" width="33" height="2" fill="white" />
          <rect x="9.99915" y="26" width="33" height="2" fill="white" />
          <rect x="10.0029" y="31" width="33" height="2" fill="white" />
          <rect x="10.0029" y="16" width="14.5" height="2" fill="white" />
        </svg>
      );
      break;
    case 'sign5':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#08B7DD" />
          <path
            opacity="0.3"
            d="M60.5455 6H20.4545C18.2273 6 16 8 16 10V38C16 40.2 18.0045 42 20.4545 42H60.5455C62.7727 42 65 40 65 38V10C65 8 62.7727 6 60.5455 6ZM60.5455 37.84C60.5009 37.9 60.4118 37.96 60.3673 38H20.4545V10.16L20.6327 10H60.345C60.4118 10.04 60.4786 10.12 60.5232 10.16V37.84H60.5455ZM38.2727 31.02L32.7045 25L24.9091 34H56.0909L46.0682 22L38.2727 31.02Z"
            fill="white"
          />
          <rect x="24" y="21" width="32.9997" height="2" fill="white" />
          <rect x="24" y="26" width="32.9997" height="2" fill="white" />
          <rect x="24" y="31" width="32.9997" height="2" fill="white" />
          <rect x="24" y="16" width="14.4999" height="2" fill="white" />
        </svg>
      );
      break;
    case 'rice-green':
      iconElement = (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#689F38" />
          <g clipPath="url(#clip0_8003_20683)">
            <path
              d="M15.437 30H24.563C26.482 29.1261 28.1092 27.7187 29.2505 25.9456C30.3919 24.1726 30.9991 22.1086 31 20H9C9.00085 22.1086 9.60815 24.1726 10.7495 25.9456C11.8908 27.7187 13.518 29.1261 15.437 30V30Z"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27 15L31 9"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.2148 15L24.9998 10"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.8289 16.9998C28.6579 16.5126 28.3637 16.0779 27.9748 15.7382C27.5859 15.3984 27.1157 15.1652 26.6099 15.0612C26.1041 14.9571 25.58 14.9859 25.0886 15.1446C24.5972 15.3033 24.1553 15.5866 23.8059 15.9668C23.6599 15.5574 23.4255 15.1852 23.1195 14.8766C22.8135 14.5679 22.4434 14.3304 22.0353 14.1808C21.6272 14.0313 21.1912 13.9734 20.7582 14.0112C20.3252 14.0491 19.9059 14.1817 19.5299 14.3998C19.2306 13.922 18.8021 13.5388 18.2939 13.2946C17.7858 13.0503 17.2189 12.955 16.6589 13.0197C16.0988 13.0844 15.5685 13.3064 15.1294 13.66C14.6904 14.0136 14.3604 14.4844 14.1779 15.0178C14.1179 15.0138 14.0609 14.9998 13.9999 14.9998C13.3794 14.9997 12.7742 15.192 12.2675 15.5502C11.7609 15.9083 11.3777 16.4148 11.1709 16.9998"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12Z"
              fill="white"
            />
            <path
              d="M20 11C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9C19.4477 9 19 9.44772 19 10C19 10.5523 19.4477 11 20 11Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_8003_20683">
              <rect width="24" height="24" fill="white" transform="translate(8 8)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;

    case 'sign1gray':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#A8B1BD" />
          <path
            d="M49.8304 8H31.983C30.9915 8 30 8.88889 30 9.77778V22.2222C30 23.2 30.8924 24 31.983 24H49.8304C50.8219 24 51.8134 23.1111 51.8134 22.2222V9.77778C51.8134 8.88889 50.8219 8 49.8304 8ZM49.8304 22.1511C49.8106 22.1778 49.7709 22.2044 49.7511 22.2222H31.983V9.84889L32.0624 9.77778H49.7412C49.7709 9.79556 49.8007 9.83111 49.8205 9.84889V22.1511H49.8304ZM39.9152 19.12L37.4364 16.4444L33.9661 20.4444H47.8474L43.3855 15.1111L39.9152 19.12Z"
            fill="white"
          />
          <rect x="24" y="33" width="33" height="2" fill="white" />
          <rect x="23.999" y="38" width="33" height="2" fill="white" />
          <rect x="23.999" y="28" width="14.5" height="2" fill="white" />
        </svg>
      );
      break;
    case 'refreshBlue':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_8003_19780)">
            <path
              d="M2 12C2 6.5 6.5 2 12 2C15.9 2 19.3 4.2 20.9 7.5"
              stroke="#1574F6"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.9996 12C21.9996 17.5 17.4996 22 11.9996 22C8.09961 22 4.69961 19.8 3.09961 16.5"
              stroke="#1574F6"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.8 1.7002L21 7.60019L15 6.8002"
              stroke="#1574F6"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.2002 22.3004L3.0002 16.4004L9.0002 17.2004"
              stroke="#1574F6"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_8003_19780">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;

    case 'sign2gray':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#A8B1BD" />
          <path
            d="M49.8304 24H31.983C30.9915 24 30 24.8889 30 25.7778V38.2222C30 39.2 30.8924 40 31.983 40H49.8304C50.8219 40 51.8134 39.1111 51.8134 38.2222V25.7778C51.8134 24.8889 50.8219 24 49.8304 24ZM49.8304 38.1511C49.8106 38.1778 49.7709 38.2044 49.7511 38.2222H31.983V25.8489L32.0624 25.7778H49.7412C49.7709 25.7956 49.8007 25.8311 49.8205 25.8489V38.1511H49.8304ZM39.9152 35.12L37.4364 32.4444L33.9661 36.4444H47.8474L43.3855 31.1111L39.9152 35.12Z"
            fill="white"
          />
          <rect x="24" y="13" width="33" height="2" fill="white" />
          <rect x="24" y="18" width="33" height="2" fill="white" />
          <rect x="24" y="8" width="14.5" height="2" fill="white" />
        </svg>
      );
      break;
    case 'sign3gray':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#A8B1BD" />
          <path
            d="M29.8304 16H11.983C10.9915 16 10 16.8889 10 17.7778V30.2222C10 31.2 10.8924 32 11.983 32H29.8304C30.8219 32 31.8134 31.1111 31.8134 30.2222V17.7778C31.8134 16.8889 30.8219 16 29.8304 16ZM29.8304 30.1511C29.8106 30.1778 29.7709 30.2044 29.7511 30.2222H11.983V17.8489L12.0624 17.7778H29.7412C29.7709 17.7956 29.8007 17.8311 29.8205 17.8489V30.1511H29.8304ZM19.9152 27.12L17.4364 24.4444L13.9661 28.4444H27.8474L23.3855 23.1111L19.9152 27.12Z"
            fill="white"
          />
          <rect x="37" y="21" width="33" height="2" fill="white" />
          <rect x="37" y="26" width="33" height="2" fill="white" />
          <rect x="36.9996" y="31" width="33" height="2" fill="white" />
          <rect x="36.9995" y="16" width="14.5" height="2" fill="white" />
        </svg>
      );
      break;

    case 'sign4gray':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#A8B1BD" />
          <path
            d="M67.8294 16H49.9821C48.9905 16 47.999 16.8889 47.999 17.7778V30.2222C47.999 31.2 48.8914 32 49.9821 32H67.8294C68.8209 32 69.8125 31.1111 69.8125 30.2222V17.7778C69.8125 16.8889 68.8209 16 67.8294 16ZM67.8294 30.1511C67.8096 30.1778 67.7699 30.2044 67.7501 30.2222H49.9821V17.8489L50.0614 17.7778H67.7402C67.7699 17.7956 67.7997 17.8311 67.8195 17.8489V30.1511H67.8294ZM57.9142 27.12L55.4354 24.4444L51.9651 28.4444H65.8464L61.3845 23.1111L57.9142 27.12Z"
            fill="white"
          />
          <rect x="9.99902" y="21" width="33" height="2" fill="white" />
          <rect x="9.99902" y="26" width="33" height="2" fill="white" />
          <rect x="10.0029" y="31" width="33" height="2" fill="white" />
          <rect x="10.0029" y="16" width="14.5" height="2" fill="white" />
        </svg>
      );
      break;
    case 'sign5gray':
      iconElement = (
        <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="48" rx="4" fill="#A8B1BD" />
          <path
            opacity="0.3"
            d="M60.5455 6H20.4545C18.2273 6 16 8 16 10V38C16 40.2 18.0045 42 20.4545 42H60.5455C62.7727 42 65 40 65 38V10C65 8 62.7727 6 60.5455 6ZM60.5455 37.84C60.5009 37.9 60.4118 37.96 60.3673 38H20.4545V10.16L20.6327 10H60.345C60.4118 10.04 60.4786 10.12 60.5232 10.16V37.84H60.5455ZM38.2727 31.02L32.7045 25L24.9091 34H56.0909L46.0682 22L38.2727 31.02Z"
            fill="white"
          />
          <rect x="24" y="21" width="32.9997" height="2" fill="white" />
          <rect x="24" y="26" width="32.9997" height="2" fill="white" />
          <rect x="24" y="31" width="32.9997" height="2" fill="white" />
          <rect x="24" y="16" width="14.4999" height="2" fill="white" />
        </svg>
      );
      break;
    case 'onlypicgray':
      iconElement = (
        <svg width="73" height="40" viewBox="0 0 73 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="73" height="40" rx="4" fill="#A8B1BD" />
          <g clipPath="url(#clip0_7352_27020)">
            <path
              d="M46 11H28C27 11 26 12 26 13V27C26 28.1 26.9 29 28 29H46C47 29 48 28 48 27V13C48 12 47 11 46 11ZM46 26.92C45.98 26.95 45.94 26.98 45.92 27H28V13.08L28.08 13H45.91C45.94 13.02 45.97 13.06 45.99 13.08V26.92H46ZM36 23.51L33.5 20.5L30 25H44L39.5 19L36 23.51Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_7352_27020">
              <rect width="24" height="24" fill="white" transform="translate(25 8)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'onlyPic':
      iconElement = (
        <svg width="73" height="40" viewBox="0 0 73 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="73" height="40" rx="4" fill="#08B7DD" />
          <g clipPath="url(#clip0_202_66)">
            <path
              d="M46 11H28C27 11 26 12 26 13V27C26 28.1 26.9 29 28 29H46C47 29 48 28 48 27V13C48 12 47 11 46 11ZM46 26.92C45.98 26.95 45.94 26.98 45.92 27H28V13.08L28.08 13H45.91C45.94 13.02 45.97 13.06 45.99 13.08V26.92H46ZM36 23.51L33.5 20.5L30 25H44L39.5 19L36 23.51Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_202_66">
              <rect width="24" height="24" fill="white" transform="translate(25 8)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;

    case 'onlytextgray':
      iconElement = (
        <svg width="73" height="40" viewBox="0 0 73 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="72" height="39" rx="3.5" fill="#A8B1BD" stroke="#A8B1BD" />
          <rect x="25" y="19" width="24" height="3" fill="white" />
          <rect x="25" y="25" width="24" height="3" fill="white" />
          <rect x="25" y="13" width="10.5455" height="3" fill="white" />
        </svg>
      );
      break;
    case 'onlyText':
      iconElement = (
        <svg width="73" height="40" viewBox="0 0 73 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="72" height="39" rx="3.5" fill="#08B7DD" stroke="#08B7DD" />
          <rect x="25" y="19" width="24" height="3" fill="white" />
          <rect x="25" y="25" width="24" height="3" fill="white" />
          <rect x="25" y="13" width="10.5455" height="3" fill="white" />
        </svg>
      );
      break;

    case 'pictext':
      iconElement = (
        <svg width="73" height="40" viewBox="0 0 73 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="73" height="40" rx="4" fill="#08B7DD" />
          <rect x="39" y="19" width="24" height="3" fill="white" />
          <rect x="39" y="25" width="24" height="3" fill="white" />
          <rect x="39" y="13" width="10.5455" height="3" fill="white" />
          <g clipPath="url(#clip0_7352_27045)">
            <path
              d="M31 11H13C12 11 11 12 11 13V27C11 28.1 11.9 29 13 29H31C32 29 33 28 33 27V13C33 12 32 11 31 11ZM31 26.92C30.98 26.95 30.94 26.98 30.92 27H13V13.08L13.08 13H30.91C30.94 13.02 30.97 13.06 30.99 13.08V26.92H31ZM21 23.51L18.5 20.5L15 25H29L24.5 19L21 23.51Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_7352_27045">
              <rect width="24" height="24" fill="white" transform="translate(10 8)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'pictextgray':
      iconElement = (
        <svg width="73" height="40" viewBox="0 0 73 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="73" height="40" rx="4" fill="#A8B1BD" />
          <rect x="39" y="19" width="24" height="3" fill="white" />
          <rect x="39" y="25" width="24" height="3" fill="white" />
          <rect x="39" y="13" width="10.5455" height="3" fill="white" />
          <g clipPath="url(#clip0_202_56)">
            <path
              d="M31 11H13C12 11 11 12 11 13V27C11 28.1 11.9 29 13 29H31C32 29 33 28 33 27V13C33 12 32 11 31 11ZM31 26.92C30.98 26.95 30.94 26.98 30.92 27H13V13.08L13.08 13H30.91C30.94 13.02 30.97 13.06 30.99 13.08V26.92H31ZM21 23.51L18.5 20.5L15 25H29L24.5 19L21 23.51Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_202_56">
              <rect width="24" height="24" fill="white" transform="translate(10 8)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;

    case 'info1':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
            fill="#626262"
          />
        </svg>
      );

      break;
    case 'editpen1':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11.5" fill="#D9D9D9" fillOpacity="0.51" stroke="#C5CED9" />
          <g clipPath="url(#clip0_7147_24831)">
            <path
              d="M6 15.5V18H8.5L15.8733 10.6267L13.3733 8.12667L6 15.5ZM7.94667 16.6667H7.33333V16.0533L13.3733 10.0133L13.9867 10.6267L7.94667 16.6667ZM17.8067 7.75333L16.2467 6.19333C16.1133 6.06 15.9467 6 15.7733 6C15.6 6 15.4333 6.06667 15.3067 6.19333L14.0867 7.41333L16.5867 9.91333L17.8067 8.69333C18.0667 8.43333 18.0667 8.01333 17.8067 7.75333Z"
              fill="#08B7DD"
            />
          </g>
          <defs>
            <clipPath id="clip0_7147_24831">
              <rect width="16" height="16" fill="white" transform="translate(4 4)" />
            </clipPath>
          </defs>
        </svg>
      );

      break;
    case 'editpen2':
      iconElement = (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_7357_30233)">
            <circle cx="16" cy="15" r="12" fill="white" />
          </g>
          <g clipPath="url(#clip0_7357_30233)">
            <path
              d="M10 18.5V21H12.5L19.8733 13.6267L17.3733 11.1267L10 18.5ZM11.9467 19.6667H11.3333V19.0533L17.3733 13.0133L17.9867 13.6267L11.9467 19.6667ZM21.8067 10.7533L20.2467 9.19333C20.1133 9.06 19.9467 9 19.7733 9C19.6 9 19.4333 9.06667 19.3067 9.19333L18.0867 10.4133L20.5867 12.9133L21.8067 11.6933C22.0667 11.4333 22.0667 11.0133 21.8067 10.7533Z"
              fill="#08B7DD"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_7357_30233"
              x="0"
              y="0"
              width="32"
              height="32"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7357_30233" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7357_30233" result="shape" />
            </filter>
            <clipPath id="clip0_7357_30233">
              <rect width="16" height="16" fill="white" transform="translate(8 7)" />
            </clipPath>
          </defs>
        </svg>
      );

      break;
    case 'timespen2':
      iconElement = (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_7357_30236)">
            <circle cx="16" cy="15" r="12" fill="white" />
          </g>
          <g clipPath="url(#clip0_7357_30236)">
            <path
              d="M20.6663 11.274L19.7263 10.334L15.9997 14.0607L12.273 10.334L11.333 11.274L15.0597 15.0007L11.333 18.7273L12.273 19.6673L15.9997 15.9407L19.7263 19.6673L20.6663 18.7273L16.9397 15.0007L20.6663 11.274Z"
              fill="#222D4B"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_7357_30236"
              x="0"
              y="0"
              width="32"
              height="32"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7357_30236" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7357_30236" result="shape" />
            </filter>
            <clipPath id="clip0_7357_30236">
              <rect width="16" height="16" fill="white" transform="translate(8 7)" />
            </clipPath>
          </defs>
        </svg>
      );

      break;

    case 'edittimes1':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11.5" fill="#D9D9D9" fillOpacity="0.51" stroke="#C5CED9" />
          <g clipPath="url(#clip0_7147_24832)">
            <path
              d="M16.6663 8.27398L15.7263 7.33398L11.9997 11.0607L8.27301 7.33398L7.33301 8.27398L11.0597 12.0007L7.33301 15.7273L8.27301 16.6673L11.9997 12.9407L15.7263 16.6673L16.6663 15.7273L12.9397 12.0007L16.6663 8.27398Z"
              fill="#222D4B"
            />
          </g>
          <defs>
            <clipPath id="clip0_7147_24832">
              <rect width="16" height="16" fill="white" transform="translate(4 4)" />
            </clipPath>
          </defs>
        </svg>
      );

      break;

    case 'signPage':
      iconElement = (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.72754 18.2126C6.22341 17.3384 6.96721 16.8284 6.96721 16.8284C7.58704 16.3184 9.10688 16.4808 8.33084 17.4841C7.71101 18.2854 8.20688 18.7225 9.44655 17.994C9.89357 17.7313 10.5622 17.9212 11.1821 18.3583"
            stroke="#626262"
            strokeLinecap="round"
          />
          <path d="M21.4668 7.56641L22.7524 8.85205L15.0386 16.5659L13.7529 15.2803L21.4668 7.56641Z" fill="#626262" />
          <path
            d="M23.041 5.99027C23.2362 5.79501 23.5528 5.79501 23.7481 5.99027L24.3266 6.56881C24.5219 6.76408 24.5219 7.08066 24.3266 7.27592L23.3945 8.20802L22.1089 6.92237L23.041 5.99027Z"
            fill="#626262"
          />
          <path d="M11.8237 18.4932L13.1094 15.9219L14.395 17.2075L11.8237 18.4932Z" fill="#626262" />
          <path
            d="M24.2711 9.08361L23.3945 8.20703L22.7517 8.84986L23.3945 9.49268L19.859 13.0282C19.6815 13.2057 19.6815 13.4935 19.859 13.671C20.0365 13.8485 20.3243 13.8485 20.5018 13.671L24.2711 9.90175C24.497 9.67583 24.497 9.30953 24.2711 9.08361Z"
            fill="#626262"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5455 3.81818H13.7455C13.3636 2.76364 12.3636 2 11.1818 2C10 2 9 2.76364 8.61818 3.81818H4.81818C4.69091 3.81818 4.57273 3.82727 4.45455 3.85455C4.1 3.92727 3.78182 4.10909 3.53636 4.35455C3.37273 4.51818 3.23636 4.71818 3.14545 4.93636C3.05455 5.14545 3 5.38182 3 5.63636V20.1818C3 20.4273 3.05455 20.6727 3.14545 20.8909C3.23636 21.1091 3.37273 21.3 3.53636 21.4727C3.78182 21.7182 4.1 21.9 4.45455 21.9727C4.57273 21.9909 4.69091 22 4.81818 22H17.5455C18.5455 22 19.3636 21.1818 19.3636 20.1818V13.9473L17.5455 15.7655V20.1818H4.81818V5.63636H17.5455V9.55783L19.3636 7.73965V5.63636C19.3636 4.63636 18.5455 3.81818 17.5455 3.81818ZM17.5455 13.1942L19.3636 11.376V10.3109L17.5455 12.1291V13.1942ZM11.1818 3.59091C11.5545 3.59091 11.8636 3.9 11.8636 4.27273C11.8636 4.64545 11.5545 4.95455 11.1818 4.95455C10.8091 4.95455 10.5 4.64545 10.5 4.27273C10.5 3.9 10.8091 3.59091 11.1818 3.59091Z"
            fill="#626262"
          />
          <rect x="5.72754" y="7.45312" width="10.9091" height="1.36364" rx="0.681818" fill="#626262" />
          <rect x="5.72754" y="10.1836" width="9.09091" height="1.36364" rx="0.681818" fill="#626262" />
          <rect x="5.72754" y="12.9102" width="7.27273" height="1.36364" rx="0.681818" fill="#626262" />
        </svg>
      );

      break;

    case 'black-dot-1':
      iconElement = (
        <svg width="10" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="#222D4B" />
        </svg>
      );

      break;
    case 'blue-dot-1':
      iconElement = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#08B7DD" />
        </svg>
      );

      break;
    case 'white-dot-1':
      iconElement = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="3.5" fill="white" stroke="#222D4B" />
        </svg>
      );

      break;
    case 'square-1':
      iconElement = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="8" height="8" fill="#222D4B" />
        </svg>
      );

      break;
    case 'success-green':
      iconElement = (
        <svg width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="61" cy="61" r="60" fill="white" stroke="#00C968" strokeDasharray="5 5" />
          <g clipPath="url(#clip0_6750_22105)">
            <path
              d="M53.5004 71.425L43.0754 61L39.5254 64.525L53.5004 78.5L83.5004 48.5L79.9754 44.975L53.5004 71.425Z"
              fill="#00C968"
            />
          </g>
          <defs>
            <clipPath id="clip0_6750_22105">
              <rect width="60" height="60" fill="white" transform="translate(31 31)" />
            </clipPath>
          </defs>
        </svg>
      );

      break;

    case 'icon-remote-signing':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="59.5" stroke="#08B7DD" strokeDasharray="5 5" />
          <g clipPath="url(#clip0_6729_21802)">
            <path
              d="M56.666 43.3334H63.3327V50.0001H56.666V43.3334ZM56.666 56.6667H63.3327V76.6668H56.666V56.6667ZM59.9994 26.6667C41.5993 26.6667 26.666 41.6001 26.666 60.0001C26.666 78.4001 41.5993 93.3334 59.9994 93.3334C78.3994 93.3334 93.3327 78.4001 93.3327 60.0001C93.3327 41.6001 78.3994 26.6667 59.9994 26.6667ZM59.9994 86.6668C45.2994 86.6668 33.3327 74.7001 33.3327 60.0001C33.3327 45.3001 45.2994 33.3334 59.9994 33.3334C74.6994 33.3334 86.666 45.3001 86.666 60.0001C86.666 74.7001 74.6994 86.6668 59.9994 86.6668Z"
              fill="#08B7DD"
            />
          </g>
          <defs>
            <clipPath id="clip0_6729_21802">
              <rect width="80" height="80" fill="white" transform="translate(20 20)" />
            </clipPath>
          </defs>
        </svg>
      );

      break;

    case 'select-cks':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20H100V100H20V20Z" fill="white" />
          <path
            d="M56.6667 43.3333H76.6667V50H56.6667V43.3333ZM56.6667 56.6667H76.6667V63.3333H56.6667V56.6667ZM56.6667 70H76.6667V76.6667H56.6667V70ZM43.3333 43.3333H50V50H43.3333V43.3333ZM43.3333 56.6667H50V63.3333H43.3333V56.6667ZM43.3333 70H50V76.6667H43.3333V70ZM87 30H33C31.3333 30 30 31.3333 30 33V87C30 88.3333 31.3333 90 33 90H87C88.3333 90 90 88.3333 90 87V33C90 31.3333 88.3333 30 87 30ZM83.3333 83.3333H36.6667V36.6667H83.3333V83.3333Z"
            fill="#08B7DD"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#08B7DD" strokeDasharray="5 5" />
        </svg>
      );

      break;
    case 'sign-accept':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M66.666 39.9997L63.3327 33.333H36.666V89.9997H43.3327V66.6663H59.9993L63.3327 73.333H86.666V39.9997H66.666ZM79.9993 66.6663H66.666L63.3327 59.9997H43.3327V39.9997H59.9993L63.3327 46.6663H79.9993V66.6663Z"
            fill="#08B7DD"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#08B7DD" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'delete-cks':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'library-book':
      iconElement = (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_7346_26641)">
            <path
              d="M3 4.5H1.5V15C1.5 15.825 2.175 16.5 3 16.5H13.5V15H3V4.5ZM15 1.5H6C5.175 1.5 4.5 2.175 4.5 3V12C4.5 12.825 5.175 13.5 6 13.5H15C15.825 13.5 16.5 12.825 16.5 12V3C16.5 2.175 15.825 1.5 15 1.5ZM15 12H6V3H15V12ZM7.5 6.75H13.5V8.25H7.5V6.75ZM7.5 9H10.5V10.5H7.5V9ZM7.5 4.5H13.5V6H7.5V4.5Z"
              fill="#1877F2"
            />
          </g>
          <defs>
            <clipPath id="clip0_7346_26641">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'search-mini':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="10" transform="matrix(-1 0 0 1 10 10)" fill="#88B5EB" />
          <circle cx="10.625" cy="8.75" r="4.6875" fill="white" />
          <rect
            x="6.6983"
            y="12.8511"
            width="1.52378"
            height="3.64081"
            rx="0.761888"
            transform="rotate(41 6.6983 12.8511)"
            fill="white"
          />
          <path
            d="M7.94806 11.962C8.11337 11.7719 8.40153 11.7517 8.5917 11.917V11.917C8.78186 12.0823 8.80201 12.3705 8.6367 12.5607L6.84674 14.6198C6.68144 14.8099 6.39327 14.8301 6.20311 14.6648V14.6648C6.01295 14.4995 5.9928 14.2113 6.1581 14.0211L7.94806 11.962Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'collapse':
      iconElement = (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.50508 12.6984L8.93841 7.26506C9.58008 6.6234 10.6301 6.6234 11.2717 7.26506L16.7051 12.6984"
            stroke="#8B8A92"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'timesocial':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="white" />
          <path
            d="M16.6673 8.2735L15.7273 7.3335L12.0007 11.0602L8.27398 7.3335L7.33398 8.2735L11.0607 12.0002L7.33398 15.7268L8.27398 16.6668L12.0007 12.9402L15.7273 16.6668L16.6673 15.7268L12.9407 12.0002L16.6673 8.2735Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'error-version':
      iconElement = (
        <svg width="257" height="260" viewBox="0 0 257 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M204.376 142.008C204.376 144.787 204.231 147.532 203.947 150.235C200.29 185.321 173.466 213.528 139.05 219.287C134.812 219.999 130.457 220.372 126.019 220.372C107.165 220.372 89.8749 213.714 76.359 202.632C58.8403 188.259 47.6543 166.44 47.6543 142.008C47.6543 135.661 48.4148 129.487 49.839 123.576C53.0122 110.386 59.5386 98.4875 68.4569 88.8432C82.7678 73.3501 103.259 63.6436 126.019 63.6436C139.444 63.6436 152.082 67.0173 163.13 72.9767C177.911 80.9411 189.851 93.5167 197.006 108.775C200.027 115.211 202.198 122.132 203.366 129.391C204.037 133.497 204.383 137.714 204.383 142.008H204.376Z"
            fill="#F4F4F4"
          />
          <path
            d="M163.953 81.0309C163.773 85.7183 161.941 90.5784 158.125 93.3023C152.152 97.5749 143.323 95.0929 138.228 89.7972C135.4 86.859 133.126 83.0151 129.275 81.6601C123.488 79.6275 117.322 84.5153 114.909 90.1498C111.597 97.8998 112.586 107.447 107.359 114.05C103.757 118.599 97.556 120.79 91.8109 119.919C86.0727 119.048 80.9429 115.301 77.9909 110.303C75.2117 105.608 74.306 100.057 72.2181 95.0238C71.3125 92.8184 70.0404 90.6407 68.4434 88.8432C82.7542 73.3501 103.246 63.6436 126.005 63.6436C139.431 63.6436 152.069 67.0173 163.116 72.9767C163.683 75.6384 164.057 78.3209 163.946 81.0309H163.953Z"
            fill="#A8B1BD"
          />
          <path
            d="M76.3041 151.086C77.2167 146.855 80.867 143.343 85.1326 142.596C92.4332 141.317 100.169 147.422 106.924 144.359C111.985 142.064 113.727 135.759 117.785 131.97C123.689 126.453 134.191 127.822 139.307 134.079C144.429 140.328 144.174 150 139.632 156.686C135.864 162.23 129.814 165.722 124.968 170.347C121.961 173.216 119.382 176.555 116.05 179.037C112.717 181.526 108.313 183.088 104.387 181.733C99.6232 180.095 97.2174 174.979 94.5488 170.706C89.4397 162.541 73.6009 163.578 76.3041 151.079V151.086Z"
            fill="#A8B1BD"
          />
          <path
            d="M203.948 150.235C200.291 185.321 173.467 213.528 139.052 219.287C138.36 213.259 135.913 207.334 134.019 201.485C131.454 193.576 130.03 184.291 134.765 177.468C139.176 171.093 148.724 168.985 155.416 172.891C158.658 174.792 161.133 177.806 164.362 179.714C167.591 181.63 172.319 182.065 174.663 179.127C176.322 177.06 176.17 174.066 175.5 171.501C174.829 168.936 173.723 166.42 173.716 163.765C173.702 158.739 178.362 154.176 183.388 154.294C185.884 154.349 188.255 155.386 190.737 155.635C195.68 156.146 200.084 153.609 203.948 150.229V150.235Z"
            fill="#A8B1BD"
          />
          <path
            d="M172.215 123.176C171.544 120.487 171.835 117.383 173.708 115.35C175.402 113.511 178.015 112.889 180.463 112.357C185.973 111.167 191.476 109.965 196.993 108.775C200.014 115.212 202.185 122.132 203.353 129.391C198.742 132.544 193.571 134.791 188.005 134.632C181.023 134.424 173.902 129.951 172.208 123.176H172.215Z"
            fill="#A8B1BD"
          />
          <path
            d="M90.9812 196.258C89.5847 198.049 87.1027 198.471 84.8904 199.024C81.8761 199.777 78.9863 201.008 76.3454 202.633C58.8266 188.26 47.6406 166.441 47.6406 142.008C47.6406 135.662 48.4011 129.488 49.8253 123.577C56.1511 124.925 61.6819 130.318 62.5392 136.803C63.3688 143.115 60.3545 149.219 59.2 155.469C57.8933 162.493 59.0064 169.939 62.3041 176.272C64.3989 180.309 67.6136 184.07 71.9553 185.425C74.7967 186.317 77.8456 186.11 80.8253 186.144C83.805 186.186 86.9575 186.559 89.315 188.384C91.6656 190.202 92.7994 193.901 90.9674 196.252L90.9812 196.258Z"
            fill="#A8B1BD"
          />
          <path
            d="M126.103 259.993C125.646 259.993 125.197 259.993 124.741 259.993C124.588 259.993 124.464 259.869 124.471 259.717C124.471 259.565 124.595 259.447 124.748 259.447C125.197 259.447 125.653 259.454 126.103 259.447C126.884 259.447 127.665 259.44 128.439 259.419C128.591 259.419 128.709 259.537 128.716 259.689C128.716 259.841 128.598 259.966 128.446 259.972C127.665 259.986 126.884 260 126.103 260V259.993ZM118.836 259.779H118.823C117.592 259.703 116.348 259.613 115.124 259.495C114.972 259.482 114.861 259.35 114.875 259.198C114.889 259.046 115.02 258.935 115.172 258.949C116.389 259.06 117.627 259.157 118.85 259.226C119.002 259.233 119.12 259.364 119.106 259.516C119.099 259.661 118.975 259.772 118.83 259.772L118.836 259.779ZM134.35 259.703C134.205 259.703 134.088 259.592 134.074 259.447C134.06 259.295 134.177 259.164 134.33 259.15C135.56 259.06 136.798 258.956 138.001 258.832C138.146 258.825 138.291 258.929 138.305 259.081C138.319 259.233 138.208 259.371 138.056 259.385C136.846 259.509 135.602 259.613 134.364 259.703C134.364 259.703 134.35 259.703 134.343 259.703H134.35ZM109.282 258.818C109.282 258.818 109.254 258.818 109.241 258.818C108.017 258.645 106.786 258.451 105.583 258.237C105.431 258.21 105.334 258.071 105.362 257.919C105.39 257.767 105.535 257.67 105.68 257.698C106.883 257.905 108.107 258.099 109.324 258.279C109.476 258.299 109.579 258.438 109.559 258.59C109.538 258.728 109.42 258.825 109.289 258.825L109.282 258.818ZM143.898 258.638C143.766 258.638 143.649 258.541 143.628 258.403C143.607 258.251 143.711 258.113 143.856 258.092C144.423 258.009 144.99 257.912 145.557 257.822C146.207 257.712 146.85 257.601 147.493 257.484C147.645 257.456 147.783 257.553 147.818 257.705C147.845 257.857 147.749 257.995 147.597 258.03C146.947 258.147 146.297 258.265 145.647 258.375C145.08 258.472 144.513 258.562 143.939 258.652C143.925 258.652 143.912 258.652 143.898 258.652V258.638ZM99.8382 257.076C99.8382 257.076 99.7968 257.076 99.776 257.069C98.58 256.799 97.3701 256.502 96.1741 256.191C96.0289 256.149 95.9391 256.004 95.9736 255.852C96.0151 255.707 96.1603 255.617 96.3124 255.652C97.5015 255.963 98.7045 256.253 99.8936 256.523C100.039 256.557 100.136 256.702 100.101 256.854C100.073 256.979 99.9558 257.069 99.8314 257.069L99.8382 257.076ZM153.321 256.806C153.196 256.806 153.086 256.723 153.051 256.592C153.017 256.44 153.107 256.294 153.259 256.26C154.434 255.983 155.637 255.672 156.833 255.354C156.985 255.313 157.13 255.403 157.172 255.548C157.213 255.693 157.123 255.845 156.978 255.887C155.782 256.212 154.572 256.516 153.39 256.799C153.369 256.799 153.349 256.806 153.328 256.806H153.321ZM90.5604 254.566C90.5604 254.566 90.5051 254.566 90.4774 254.552C89.2952 254.179 88.113 253.785 86.9654 253.384C86.8202 253.336 86.7441 253.176 86.7994 253.031C86.8478 252.886 87.0069 252.81 87.152 252.865C88.2997 253.266 89.475 253.66 90.6503 254.034C90.7954 254.082 90.8784 254.234 90.83 254.379C90.7954 254.497 90.6848 254.573 90.5673 254.573L90.5604 254.566ZM162.557 254.207C162.44 254.207 162.336 254.131 162.295 254.013C162.246 253.868 162.329 253.716 162.474 253.667C163.636 253.287 164.804 252.886 165.952 252.471C166.097 252.416 166.256 252.492 166.304 252.637C166.353 252.782 166.284 252.941 166.138 252.99C164.991 253.405 163.816 253.806 162.647 254.193C162.619 254.2 162.592 254.207 162.564 254.207H162.557ZM81.5245 251.296C81.4899 251.296 81.4553 251.296 81.4208 251.275C80.2731 250.805 79.1255 250.314 78.0124 249.817C77.8742 249.754 77.8119 249.588 77.8742 249.45C77.9364 249.312 78.1023 249.25 78.2406 249.312C79.3467 249.81 80.4874 250.294 81.6282 250.764C81.7664 250.819 81.8356 250.985 81.7803 251.123C81.7388 251.227 81.6351 251.296 81.5245 251.296ZM171.538 250.86C171.427 250.86 171.33 250.798 171.282 250.695C171.22 250.556 171.289 250.39 171.427 250.335C172.554 249.865 173.688 249.367 174.794 248.856C174.932 248.793 175.098 248.856 175.161 248.994C175.223 249.132 175.161 249.298 175.022 249.36C173.909 249.872 172.768 250.37 171.642 250.847C171.607 250.86 171.572 250.867 171.538 250.867V250.86ZM72.7858 247.3C72.7444 247.3 72.7029 247.293 72.6614 247.272C71.5622 246.712 70.456 246.132 69.3844 245.544C69.2531 245.468 69.2047 245.302 69.2738 245.171C69.3498 245.039 69.5158 244.991 69.6471 245.06C70.7187 245.648 71.811 246.228 72.9103 246.782C73.0486 246.851 73.0969 247.017 73.0278 247.155C72.9794 247.252 72.8826 247.307 72.7789 247.307L72.7858 247.3ZM180.214 246.788C180.117 246.788 180.021 246.733 179.972 246.636C179.903 246.498 179.958 246.332 180.09 246.263C181.182 245.696 182.275 245.108 183.325 244.514C183.457 244.438 183.63 244.486 183.699 244.618C183.775 244.749 183.726 244.922 183.595 244.991C182.537 245.586 181.438 246.173 180.339 246.747C180.297 246.768 180.256 246.775 180.214 246.775V246.788ZM64.4067 242.606C64.3583 242.606 64.3099 242.592 64.2615 242.564C63.2107 241.914 62.1598 241.251 61.1366 240.573C61.0122 240.49 60.9776 240.317 61.0606 240.193C61.1436 240.069 61.3164 240.034 61.4408 240.117C62.4571 240.788 63.501 241.451 64.5519 242.101C64.6833 242.184 64.7247 242.35 64.6418 242.481C64.5865 242.564 64.4966 242.613 64.4067 242.613V242.606ZM188.538 242.025C188.448 242.025 188.358 241.977 188.303 241.894C188.22 241.762 188.262 241.596 188.393 241.513C189.43 240.864 190.467 240.186 191.476 239.509C191.601 239.426 191.774 239.453 191.857 239.585C191.94 239.709 191.905 239.882 191.781 239.965C190.764 240.649 189.72 241.327 188.683 241.984C188.635 242.011 188.587 242.025 188.538 242.025ZM56.4424 237.241C56.3871 237.241 56.3318 237.227 56.2765 237.186C55.2809 236.46 54.2923 235.706 53.3244 234.946C53.2069 234.856 53.1861 234.676 53.276 234.559C53.3728 234.441 53.5456 234.42 53.6632 234.51C54.6241 235.264 55.6128 236.01 56.6014 236.736C56.7258 236.826 56.7535 236.999 56.6636 237.123C56.6083 237.199 56.5253 237.234 56.4424 237.234V237.241ZM196.447 236.591C196.364 236.591 196.281 236.55 196.226 236.48C196.136 236.356 196.157 236.183 196.281 236.093C197.256 235.367 198.238 234.607 199.199 233.84C199.316 233.743 199.489 233.763 199.586 233.881C199.683 233.999 199.662 234.171 199.544 234.268C198.583 235.036 197.595 235.796 196.62 236.529C196.572 236.563 196.509 236.584 196.454 236.584L196.447 236.591ZM48.9344 231.247C48.8721 231.247 48.803 231.226 48.7546 231.178C47.8282 230.376 46.8949 229.539 45.9961 228.71C45.8855 228.606 45.8786 228.433 45.9823 228.323C46.086 228.212 46.2588 228.205 46.3695 228.309C47.2682 229.138 48.1946 229.968 49.1141 230.77C49.2316 230.867 49.2385 231.046 49.1418 231.157C49.0865 231.219 49.0104 231.254 48.9344 231.254V231.247ZM203.893 230.535C203.817 230.535 203.741 230.5 203.686 230.438C203.582 230.321 203.596 230.148 203.713 230.051C204.619 229.249 205.538 228.412 206.437 227.569C206.548 227.465 206.721 227.472 206.824 227.583C206.928 227.693 206.921 227.866 206.81 227.97C205.905 228.82 204.985 229.657 204.073 230.466C204.017 230.514 203.955 230.535 203.893 230.535ZM41.9448 224.665C41.8757 224.665 41.7997 224.638 41.7513 224.582C40.8871 223.704 40.0298 222.799 39.2002 221.9C39.0965 221.789 39.1034 221.617 39.214 221.513C39.3246 221.409 39.4975 221.416 39.6012 221.527C40.4308 222.425 41.2811 223.324 42.1384 224.195C42.2421 224.306 42.2421 224.479 42.1384 224.582C42.0831 224.638 42.014 224.658 41.9448 224.658V224.665ZM210.827 223.891C210.758 223.891 210.689 223.863 210.634 223.815C210.523 223.711 210.523 223.532 210.627 223.428C211.477 222.543 212.327 221.637 213.143 220.732C213.247 220.621 213.42 220.607 213.53 220.711C213.641 220.815 213.655 220.987 213.551 221.098C212.728 222.004 211.878 222.916 211.028 223.808C210.972 223.863 210.903 223.891 210.827 223.891ZM35.5084 217.538C35.4323 217.538 35.3494 217.503 35.2941 217.441C34.5059 216.494 33.7247 215.526 32.9711 214.558C32.8744 214.44 32.902 214.267 33.0195 214.171C33.1371 214.081 33.3099 214.102 33.4067 214.219C34.1603 215.18 34.9346 216.148 35.7227 217.088C35.8195 217.206 35.8057 217.379 35.6881 217.475C35.6398 217.517 35.5775 217.538 35.5153 217.538H35.5084ZM217.201 216.708C217.139 216.708 217.077 216.687 217.029 216.646C216.911 216.549 216.89 216.376 216.987 216.259C217.761 215.305 218.536 214.337 219.275 213.369C219.372 213.251 219.545 213.224 219.663 213.32C219.78 213.41 219.808 213.583 219.711 213.707C218.964 214.682 218.19 215.657 217.409 216.611C217.353 216.68 217.277 216.715 217.194 216.715L217.201 216.708ZM29.6734 209.919C29.5835 209.919 29.5006 209.877 29.4453 209.801C28.7332 208.792 28.0349 207.762 27.3643 206.739C27.2814 206.614 27.3159 206.441 27.4404 206.358C27.5648 206.275 27.7377 206.31 27.8206 206.435C28.4843 207.451 29.1826 208.474 29.8947 209.483C29.9845 209.608 29.95 209.781 29.8255 209.871C29.7771 209.905 29.7218 209.919 29.6665 209.919H29.6734ZM222.974 209.027C222.919 209.027 222.863 209.013 222.815 208.979C222.691 208.889 222.656 208.723 222.746 208.598C223.437 207.596 224.129 206.566 224.792 205.529C224.875 205.398 225.048 205.363 225.173 205.446C225.297 205.529 225.339 205.702 225.256 205.826C224.585 206.863 223.894 207.9 223.202 208.91C223.147 208.986 223.064 209.027 222.974 209.027ZM24.4745 201.844C24.3777 201.844 24.2878 201.796 24.2394 201.706C23.6172 200.648 23.0019 199.563 22.4143 198.484C22.3382 198.353 22.3935 198.18 22.5249 198.111C22.6632 198.035 22.8291 198.09 22.8982 198.221C23.4859 199.293 24.0943 200.371 24.7165 201.422C24.7925 201.554 24.751 201.72 24.6197 201.802C24.5782 201.83 24.5298 201.844 24.4814 201.844H24.4745ZM228.104 200.897C228.056 200.897 228.007 200.883 227.966 200.862C227.834 200.786 227.786 200.62 227.862 200.482C228.47 199.431 229.072 198.346 229.653 197.253C229.722 197.122 229.888 197.067 230.026 197.143C230.157 197.212 230.213 197.385 230.136 197.516C229.556 198.608 228.947 199.701 228.339 200.759C228.291 200.848 228.194 200.897 228.097 200.897H228.104ZM19.9531 193.375C19.8494 193.375 19.7526 193.32 19.7042 193.216C19.1719 192.117 18.6464 190.983 18.1487 189.856C18.0864 189.718 18.1487 189.552 18.2869 189.49C18.4252 189.427 18.5911 189.49 18.6533 189.628C19.1511 190.748 19.6696 191.875 20.202 192.967C20.2711 193.105 20.2089 193.271 20.0706 193.333C20.0291 193.354 19.9946 193.361 19.9531 193.361V193.375ZM232.556 192.379C232.515 192.379 232.473 192.372 232.439 192.352C232.3 192.29 232.245 192.124 232.307 191.985C232.833 190.872 233.344 189.738 233.828 188.618C233.891 188.48 234.049 188.411 234.188 188.473C234.326 188.536 234.388 188.695 234.333 188.833C233.849 189.953 233.331 191.094 232.805 192.214C232.757 192.31 232.66 192.373 232.556 192.373V192.379ZM16.1368 184.567C16.0262 184.567 15.9225 184.498 15.881 184.387C15.4386 183.247 15.0099 182.078 14.609 180.917C14.5606 180.772 14.6366 180.613 14.7818 180.564C14.9201 180.516 15.086 180.592 15.1344 180.737C15.5354 181.892 15.964 183.053 16.4065 184.194C16.4618 184.339 16.3926 184.498 16.2475 184.553C16.2129 184.567 16.1783 184.574 16.1507 184.574L16.1368 184.567ZM236.289 183.516C236.289 183.516 236.227 183.516 236.193 183.503C236.047 183.447 235.978 183.288 236.034 183.15C236.462 182.002 236.877 180.834 237.271 179.672C237.32 179.527 237.479 179.451 237.624 179.5C237.769 179.548 237.845 179.707 237.797 179.852C237.403 181.021 236.981 182.196 236.552 183.35C236.511 183.461 236.407 183.53 236.296 183.53L236.289 183.516ZM13.0534 175.476C12.9359 175.476 12.8253 175.4 12.7907 175.275C12.4451 174.093 12.1132 172.89 11.809 171.715C11.7675 171.57 11.8574 171.418 12.0095 171.376C12.1547 171.335 12.3068 171.425 12.3483 171.577C12.6525 172.752 12.9843 173.948 13.33 175.123C13.3715 175.269 13.2885 175.421 13.1433 175.462C13.1157 175.469 13.088 175.476 13.0673 175.476H13.0534ZM239.283 174.37C239.283 174.37 239.235 174.37 239.207 174.356C239.062 174.315 238.979 174.162 239.02 174.017C239.352 172.835 239.677 171.639 239.967 170.443C240.002 170.298 240.154 170.208 240.299 170.242C240.444 170.277 240.534 170.429 240.5 170.574C240.202 171.77 239.878 172.98 239.546 174.162C239.511 174.287 239.401 174.363 239.283 174.363V174.37ZM10.7305 166.164C10.6061 166.164 10.4885 166.074 10.4609 165.942C10.212 164.739 9.98385 163.516 9.76954 162.313C9.74188 162.161 9.84559 162.022 9.99768 161.995C10.1498 161.967 10.288 162.071 10.3157 162.216C10.5231 163.419 10.7582 164.629 11.0001 165.832C11.0278 165.984 10.9379 166.129 10.7858 166.157C10.7651 166.157 10.7512 166.157 10.7305 166.157V166.164ZM241.516 165.023C241.516 165.023 241.481 165.023 241.461 165.023C241.309 164.995 241.212 164.85 241.246 164.698C241.481 163.509 241.703 162.285 241.896 161.068C241.924 160.916 242.055 160.819 242.214 160.84C242.366 160.868 242.463 161.006 242.442 161.158C242.242 162.382 242.021 163.606 241.786 164.802C241.758 164.933 241.647 165.023 241.516 165.023ZM9.17498 156.699C9.03671 156.699 8.91918 156.595 8.89844 156.457C8.74634 155.24 8.61499 154.003 8.50437 152.772C8.49054 152.62 8.60116 152.489 8.75326 152.475C8.89844 152.447 9.03671 152.572 9.05053 152.724C9.16115 153.947 9.29251 155.178 9.43769 156.388C9.45843 156.54 9.34781 156.678 9.19572 156.692C9.18189 156.692 9.17498 156.692 9.16115 156.692L9.17498 156.699ZM242.975 155.531C242.975 155.531 242.954 155.531 242.947 155.531C242.795 155.51 242.684 155.379 242.705 155.226C242.74 154.922 242.774 154.618 242.802 154.314C242.899 153.394 242.982 152.482 243.058 151.555C243.072 151.403 243.189 151.293 243.355 151.3C243.507 151.313 243.618 151.445 243.611 151.597C243.535 152.523 243.452 153.45 243.355 154.369C243.32 154.673 243.293 154.978 243.258 155.289C243.244 155.427 243.12 155.531 242.982 155.531H242.975ZM8.40067 147.131C8.25549 147.131 8.13105 147.013 8.12413 146.868C8.07574 145.644 8.04117 144.4 8.02734 143.169C8.02734 143.017 8.14487 142.893 8.29697 142.893C8.44907 142.893 8.57351 143.017 8.57351 143.162C8.58734 144.386 8.61499 145.624 8.66338 146.84C8.66338 146.992 8.55277 147.124 8.40067 147.131H8.38684H8.40067ZM243.666 145.955H243.659C243.507 145.955 243.39 145.824 243.39 145.672C243.431 144.448 243.445 143.204 243.445 141.987V141.849C243.445 141.697 243.569 141.572 243.721 141.572C243.874 141.572 243.998 141.697 243.998 141.849V141.987C243.998 143.211 243.977 144.455 243.943 145.693C243.943 145.845 243.818 145.962 243.666 145.962V145.955ZM8.40067 137.535C8.40067 137.535 8.39376 137.535 8.38684 137.535C8.23475 137.535 8.11722 137.403 8.12413 137.251C8.17253 136.021 8.24166 134.776 8.32462 133.553C8.33845 133.401 8.46981 133.283 8.6219 133.297C8.774 133.311 8.89152 133.442 8.8777 133.594C8.79474 134.811 8.7256 136.048 8.67721 137.272C8.67721 137.424 8.55277 137.535 8.40067 137.535ZM243.569 136.214C243.424 136.214 243.3 136.097 243.293 135.952C243.231 134.735 243.148 133.497 243.051 132.274C243.037 132.122 243.155 131.99 243.307 131.976C243.459 131.963 243.59 132.08 243.604 132.225C243.708 133.456 243.784 134.693 243.853 135.917C243.86 136.069 243.742 136.201 243.59 136.207C243.59 136.207 243.583 136.207 243.576 136.207L243.569 136.214ZM9.16806 127.96C9.16806 127.96 9.14733 127.96 9.1335 127.96C8.9814 127.939 8.8777 127.808 8.89153 127.655C9.03671 126.432 9.20954 125.201 9.39621 123.984C9.41695 123.832 9.56213 123.729 9.70732 123.756C9.85941 123.777 9.96311 123.922 9.93546 124.067C9.74879 125.277 9.58287 126.501 9.43078 127.718C9.41695 127.856 9.29251 127.96 9.15424 127.96H9.16806ZM242.691 126.653C242.553 126.653 242.436 126.549 242.415 126.411C242.27 125.298 242.104 124.178 241.924 123.072L241.876 122.788C241.848 122.636 241.952 122.484 242.104 122.463C242.249 122.436 242.394 122.533 242.415 122.678V122.699L242.463 122.982C242.643 124.088 242.809 125.215 242.961 126.335C242.982 126.487 242.878 126.625 242.726 126.646C242.712 126.646 242.698 126.646 242.691 126.646V126.653ZM10.7098 118.481C10.7098 118.481 10.6752 118.481 10.6545 118.481C10.5024 118.454 10.4125 118.308 10.4401 118.156C10.689 116.947 10.9587 115.73 11.2421 114.541C11.2767 114.395 11.4219 114.299 11.574 114.333C11.7191 114.368 11.8159 114.52 11.7814 114.665C11.4979 115.854 11.2283 117.064 10.9863 118.26C10.9587 118.391 10.848 118.481 10.7167 118.481H10.7098ZM241.046 117.188C240.922 117.188 240.804 117.099 240.776 116.974C240.514 115.771 240.23 114.561 239.94 113.386C239.905 113.241 239.995 113.089 240.14 113.054C240.285 113.02 240.438 113.11 240.472 113.255C240.769 114.437 241.053 115.654 241.316 116.864C241.35 117.016 241.253 117.161 241.101 117.188C241.081 117.188 241.06 117.188 241.046 117.188ZM13.0258 109.155C13.0258 109.155 12.9774 109.155 12.9497 109.141C12.8045 109.1 12.7216 108.948 12.7631 108.802C13.1087 107.62 13.4752 106.431 13.8554 105.263C13.9038 105.118 14.0559 105.042 14.2011 105.083C14.3463 105.131 14.4223 105.283 14.3739 105.429C13.9937 106.59 13.6273 107.772 13.2816 108.948C13.247 109.065 13.1364 109.148 13.0189 109.148L13.0258 109.155ZM238.633 107.89C238.516 107.89 238.405 107.814 238.37 107.696C238.011 106.521 237.631 105.346 237.237 104.191C237.188 104.046 237.264 103.887 237.409 103.839C237.555 103.79 237.714 103.866 237.762 104.011C238.156 105.173 238.536 106.355 238.896 107.537C238.937 107.682 238.861 107.835 238.716 107.883C238.688 107.89 238.661 107.897 238.633 107.897V107.89ZM16.0954 100.05C16.0954 100.05 16.0262 100.05 15.9986 100.029C15.8534 99.974 15.7843 99.8149 15.8396 99.6698C16.2751 98.529 16.7452 97.3745 17.2223 96.2338C17.2845 96.0955 17.4435 96.0264 17.5818 96.0886C17.72 96.1508 17.7892 96.3098 17.7269 96.4481C17.2499 97.5819 16.7867 98.7295 16.3512 99.8702C16.3097 99.9809 16.206 100.05 16.0954 100.05ZM235.453 98.8263C235.342 98.8263 235.239 98.7572 235.197 98.6535C234.748 97.5197 234.271 96.3789 233.78 95.252C233.718 95.1138 233.78 94.9479 233.925 94.8925C234.063 94.8303 234.229 94.8925 234.285 95.0377C234.775 96.1715 235.252 97.3192 235.709 98.4599C235.764 98.5982 235.695 98.7641 235.557 98.8194C235.522 98.8332 235.487 98.8401 235.453 98.8401V98.8263ZM19.8978 91.2353C19.8563 91.2353 19.8148 91.2284 19.7802 91.2077C19.642 91.1385 19.5867 90.9795 19.6489 90.8412C20.1812 89.742 20.7412 88.6289 21.3081 87.5297C21.3773 87.3914 21.5432 87.343 21.6815 87.4122C21.8197 87.4813 21.8681 87.6472 21.799 87.7855C21.2321 88.8778 20.6721 89.984 20.1467 91.0763C20.0983 91.1731 20.0015 91.2353 19.8978 91.2353ZM231.54 90.0531C231.436 90.0531 231.339 89.9978 231.291 89.901C230.745 88.8018 230.178 87.6956 229.604 86.624C229.535 86.4927 229.583 86.3198 229.715 86.2507C229.846 86.1816 230.019 86.23 230.088 86.3613C230.662 87.4398 231.236 88.546 231.782 89.6521C231.851 89.7904 231.796 89.9563 231.657 90.0185C231.616 90.0393 231.574 90.0462 231.533 90.0462L231.54 90.0531ZM24.4192 82.7594C24.3708 82.7594 24.3224 82.7456 24.2809 82.7179C24.1496 82.6419 24.1081 82.469 24.1841 82.3377C24.8063 81.2799 25.4562 80.2152 26.1061 79.1782C26.189 79.0469 26.355 79.0123 26.4863 79.0883C26.6177 79.1713 26.6522 79.3372 26.5693 79.4686C25.9194 80.4987 25.2695 81.5634 24.6542 82.6142C24.6058 82.7041 24.5091 82.7525 24.4192 82.7525V82.7594ZM226.929 81.6325C226.832 81.6325 226.742 81.5841 226.694 81.5011C226.058 80.4503 225.401 79.3925 224.744 78.3763C224.661 78.2518 224.696 78.079 224.827 77.996C224.951 77.9131 225.124 77.9476 225.207 78.079C225.871 79.1022 226.528 80.1599 227.164 81.2177C227.24 81.349 227.198 81.515 227.067 81.5979C227.025 81.6256 226.977 81.6394 226.922 81.6394L226.929 81.6325ZM29.6112 74.6845C29.5559 74.6845 29.5006 74.6706 29.4522 74.6361C29.3278 74.5462 29.3001 74.3734 29.3831 74.2489C30.0882 73.2465 30.8211 72.2371 31.5608 71.2554C31.6507 71.1309 31.8235 71.1102 31.948 71.2001C32.0724 71.2899 32.0931 71.4628 32.0033 71.5872C31.2704 72.5689 30.5376 73.5714 29.8393 74.5669C29.784 74.643 29.7011 74.6845 29.6112 74.6845ZM221.647 73.6129C221.564 73.6129 221.474 73.5714 221.426 73.4953C220.713 72.5067 219.974 71.5112 219.227 70.5364C219.137 70.4119 219.158 70.2391 219.275 70.1492C219.393 70.0594 219.566 70.0801 219.663 70.1976C220.416 71.1793 221.156 72.1749 221.868 73.1704C221.958 73.2949 221.93 73.4677 221.806 73.5576C221.757 73.5921 221.702 73.606 221.647 73.606V73.6129ZM35.4462 67.0589C35.384 67.0589 35.3217 67.0382 35.2733 66.9967C35.1558 66.8999 35.142 66.7271 35.2388 66.6095C36.0269 65.6624 36.8358 64.7221 37.6516 63.8027C37.7553 63.6851 37.9281 63.6782 38.0387 63.7819C38.1563 63.8856 38.1632 64.0585 38.0595 64.1691C37.2506 65.0816 36.4417 66.0288 35.6605 66.9621C35.6052 67.0312 35.5291 67.0589 35.4462 67.0589ZM215.729 66.0564C215.653 66.0564 215.577 66.0219 215.521 65.9597C214.726 65.0263 213.904 64.093 213.088 63.1874C212.984 63.0767 212.998 62.897 213.109 62.8002C213.219 62.6965 213.399 62.7103 213.496 62.8209C214.318 63.7266 215.141 64.6599 215.936 65.6071C216.033 65.7246 216.019 65.8974 215.909 65.9942C215.86 66.0357 215.791 66.0634 215.729 66.0634V66.0564ZM41.8826 59.9311C41.8135 59.9311 41.7443 59.9035 41.689 59.8551C41.5784 59.7514 41.5784 59.5716 41.689 59.4679C42.5532 58.583 43.4381 57.705 44.3162 56.8615C44.4268 56.7578 44.5996 56.7578 44.7033 56.8684C44.807 56.9791 44.807 57.1519 44.6964 57.2556C43.8184 58.099 42.9404 58.9701 42.0762 59.8481C42.0209 59.9035 41.9517 59.9311 41.8826 59.9311ZM209.216 58.9978C209.147 58.9978 209.078 58.9701 209.023 58.9148C208.152 58.0437 207.26 57.1865 206.375 56.3499C206.264 56.2462 206.257 56.0734 206.361 55.9628C206.465 55.8522 206.638 55.8452 206.748 55.9489C207.64 56.7855 208.532 57.6497 209.41 58.5277C209.521 58.6383 209.521 58.8111 209.41 58.9148C209.355 58.9701 209.285 58.9978 209.216 58.9978ZM48.8652 53.3426C48.7892 53.3426 48.7131 53.308 48.6578 53.2458C48.561 53.1283 48.5679 52.9554 48.6855 52.8586C49.6119 52.0498 50.5659 51.2478 51.52 50.4735C51.6375 50.3767 51.8104 50.3974 51.9072 50.515C52.0039 50.6325 51.9832 50.8053 51.8657 50.9021C50.9185 51.6695 49.9714 52.4715 49.045 53.2734C48.9897 53.3218 48.9274 53.3426 48.8652 53.3426ZM202.151 52.4922C202.089 52.4922 202.026 52.4715 201.971 52.43C201.038 51.6349 200.077 50.8537 199.123 50.0863C199.005 49.9895 198.984 49.8167 199.081 49.6992C199.178 49.5816 199.351 49.5609 199.468 49.6577C200.429 50.4251 201.39 51.2132 202.331 52.0083C202.448 52.1051 202.462 52.2779 202.365 52.3954C202.31 52.4576 202.234 52.4922 202.158 52.4922H202.151ZM56.3594 47.3486C56.2765 47.3486 56.1935 47.3071 56.1382 47.238C56.0483 47.1135 56.076 46.9407 56.2004 46.8508C57.189 46.1249 58.2053 45.399 59.2147 44.7076C59.3391 44.6247 59.512 44.6523 59.5949 44.7768C59.6779 44.9012 59.6502 45.0741 59.5258 45.157C58.5164 45.8484 57.5071 46.5674 56.5254 47.2933C56.477 47.3279 56.4216 47.3486 56.3594 47.3486ZM194.58 46.5812C194.525 46.5812 194.47 46.5674 194.421 46.5328C193.426 45.8207 192.41 45.1155 191.393 44.4311C191.269 44.3481 191.234 44.1753 191.317 44.0509C191.4 43.9264 191.573 43.8919 191.698 43.9748C192.721 44.6593 193.744 45.3713 194.74 46.0903C194.864 46.1802 194.892 46.3531 194.802 46.4775C194.746 46.5535 194.663 46.595 194.58 46.595V46.5812ZM64.3168 41.9837C64.227 41.9837 64.1371 41.9353 64.0818 41.8524C63.9988 41.721 64.0403 41.5551 64.1717 41.4721C65.2225 40.8292 66.2872 40.1862 67.3518 39.5778C67.4832 39.5018 67.6491 39.5502 67.7252 39.6816C67.8012 39.8129 67.7528 39.9788 67.6215 40.0549C66.5637 40.6633 65.499 41.2924 64.4551 41.9423C64.4067 41.9699 64.3583 41.9837 64.3099 41.9837H64.3168ZM186.561 41.3062C186.512 41.3062 186.464 41.2924 186.416 41.2647C185.365 40.6356 184.293 40.0134 183.229 39.4188C183.097 39.3428 183.049 39.1769 183.125 39.0455C183.201 38.9142 183.367 38.8658 183.498 38.9418C184.57 39.5433 185.648 40.1655 186.706 40.8015C186.837 40.8776 186.879 41.0504 186.803 41.1818C186.754 41.2647 186.658 41.3131 186.568 41.3131L186.561 41.3062ZM72.689 37.2826C72.5853 37.2826 72.4886 37.2273 72.4402 37.1305C72.371 36.9922 72.4263 36.8263 72.5577 36.7572C73.6569 36.1972 74.77 35.651 75.8831 35.1325C76.0213 35.0703 76.1873 35.1325 76.2495 35.2638C76.3117 35.4021 76.2495 35.568 76.1181 35.6303C75.012 36.1488 73.9058 36.6949 72.8066 37.248C72.7651 37.2688 72.7236 37.2757 72.6821 37.2757L72.689 37.2826ZM178.133 36.6949C178.092 36.6949 178.05 36.688 178.009 36.6673C176.91 36.1211 175.79 35.5888 174.684 35.0841C174.545 35.0219 174.483 34.8559 174.545 34.7177C174.607 34.5794 174.773 34.5172 174.912 34.5794C176.025 35.0841 177.152 35.6233 178.258 36.1695C178.396 36.2386 178.451 36.4046 178.382 36.5359C178.334 36.6327 178.237 36.688 178.133 36.688V36.6949ZM81.4139 33.2797C81.3032 33.2797 81.1995 33.2175 81.1581 33.1068C81.1027 32.9686 81.165 32.8026 81.3101 32.7473C82.444 32.2841 83.6054 31.8278 84.7531 31.3992C84.8982 31.3439 85.0573 31.42 85.1056 31.5582C85.161 31.7034 85.0849 31.8624 84.9466 31.9108C83.8059 32.3394 82.6514 32.7888 81.5176 33.252C81.483 33.2659 81.4484 33.2728 81.4139 33.2728V33.2797ZM169.36 32.7888C169.36 32.7888 169.291 32.7888 169.256 32.7681C168.116 32.3187 166.961 31.8762 165.807 31.4614C165.661 31.413 165.592 31.254 165.641 31.1088C165.689 30.9637 165.848 30.8876 165.993 30.9429C167.148 31.3577 168.316 31.8002 169.457 32.2565C169.602 32.3118 169.671 32.4708 169.609 32.616C169.568 32.7266 169.464 32.7888 169.353 32.7888H169.36ZM90.4359 30.0096C90.3184 30.0096 90.2078 29.9336 90.1732 29.816C90.1248 29.6708 90.2078 29.5187 90.353 29.4704C91.5213 29.1039 92.7105 28.7444 93.8927 28.4126C94.0448 28.3711 94.1899 28.4541 94.2314 28.6062C94.2729 28.7514 94.1899 28.9034 94.0378 28.9449C92.8626 29.2768 91.6734 29.6294 90.512 30.0027C90.4843 30.0096 90.4567 30.0165 90.429 30.0165L90.4359 30.0096ZM160.29 29.6155C160.29 29.6155 160.234 29.6155 160.207 29.6017C159.031 29.2422 157.835 28.9035 156.667 28.5854C156.522 28.544 156.432 28.3918 156.473 28.2467C156.515 28.1015 156.667 28.0116 156.812 28.0531C157.994 28.3711 159.19 28.7168 160.373 29.0763C160.518 29.1178 160.601 29.2768 160.552 29.422C160.518 29.5395 160.407 29.6155 160.29 29.6155ZM99.6931 27.4931C99.5686 27.4931 99.4511 27.4032 99.4235 27.2788C99.3889 27.1267 99.4857 26.9815 99.6309 26.9469C100.834 26.6704 102.051 26.4146 103.247 26.1795C103.392 26.1519 103.544 26.2487 103.572 26.4008C103.599 26.5529 103.502 26.6981 103.35 26.7257C102.154 26.9608 100.944 27.2166 99.7484 27.4862C99.7276 27.4862 99.7069 27.4862 99.6861 27.4862L99.6931 27.4931ZM150.991 27.2027C150.991 27.2027 150.95 27.2027 150.936 27.2027C149.733 26.94 148.523 26.6981 147.32 26.4768C147.168 26.4492 147.071 26.304 147.099 26.1588C147.126 26.0067 147.272 25.9099 147.417 25.9376C148.62 26.1588 149.843 26.4008 151.046 26.6635C151.192 26.698 151.288 26.8432 151.261 26.9884C151.233 27.1198 151.115 27.2027 150.991 27.2027ZM109.123 25.744C108.985 25.744 108.867 25.6472 108.853 25.5089C108.833 25.3568 108.936 25.2186 109.088 25.1978C110.298 25.025 111.529 24.866 112.753 24.7277C112.905 24.7139 113.043 24.8176 113.057 24.9697C113.071 25.1218 112.967 25.26 112.815 25.2739C111.598 25.4121 110.367 25.5642 109.165 25.7371C109.151 25.7371 109.137 25.7371 109.123 25.7371V25.744ZM141.527 25.5642C141.527 25.5642 141.506 25.5642 141.492 25.5642C140.282 25.4052 139.051 25.26 137.828 25.1425C137.676 25.1287 137.565 24.9904 137.579 24.8383C137.593 24.6862 137.717 24.5756 137.883 24.5894C139.107 24.7139 140.344 24.8591 141.561 25.0181C141.713 25.0388 141.817 25.1771 141.796 25.3292C141.775 25.4675 141.658 25.5712 141.52 25.5712L141.527 25.5642ZM118.664 24.7692C118.518 24.7692 118.401 24.6586 118.387 24.5134C118.38 24.3613 118.491 24.2299 118.643 24.223C119.867 24.147 121.111 24.0917 122.342 24.0571C122.508 24.0571 122.618 24.1746 122.625 24.3267C122.625 24.4788 122.508 24.6033 122.355 24.6102C121.132 24.6448 119.894 24.707 118.677 24.7761H118.664V24.7692ZM131.958 24.6931C131.958 24.6931 131.951 24.6931 131.944 24.6931C130.728 24.6309 129.49 24.5894 128.26 24.5687C128.107 24.5687 127.983 24.4373 127.99 24.2853C127.99 24.1332 128.135 24.0295 128.273 24.0156C129.504 24.0364 130.748 24.0848 131.972 24.1401C132.124 24.147 132.242 24.2783 132.235 24.4304C132.228 24.5756 132.103 24.6931 131.958 24.6931Z"
            fill="#A8B1BD"
          />
          <path
            d="M20.7888 89.4865C20.7474 89.4865 20.699 89.4796 20.6644 89.4519C20.5261 89.3828 20.4777 89.2168 20.5469 89.0786C20.8372 88.5255 21.1691 87.9932 21.5493 87.4885C21.6392 87.364 21.812 87.3433 21.9365 87.4332C22.0609 87.523 22.0817 87.6959 21.9918 87.8203C21.6323 88.2974 21.3143 88.809 21.0377 89.3344C20.9893 89.4312 20.8925 89.4796 20.7957 89.4796L20.7888 89.4865Z"
            fill="#A8B1BD"
          />
          <path
            d="M230.772 190.741C230.634 190.741 230.516 190.638 230.496 190.499C230.371 189.372 230.122 188.176 229.763 186.946C229.721 186.801 229.804 186.649 229.949 186.6C230.095 186.559 230.247 186.642 230.295 186.787C230.662 188.045 230.917 189.276 231.049 190.43C231.063 190.582 230.959 190.721 230.807 190.734C230.793 190.734 230.786 190.734 230.779 190.734L230.772 190.741ZM227.841 181.685C227.737 181.685 227.64 181.629 227.592 181.533C227.073 180.496 226.479 179.417 225.822 178.325C225.746 178.193 225.788 178.027 225.919 177.944C226.05 177.868 226.216 177.91 226.299 178.041C226.963 179.147 227.564 180.24 228.09 181.284C228.159 181.422 228.104 181.588 227.965 181.65C227.924 181.671 227.882 181.678 227.841 181.678V181.685ZM222.794 173.554C222.711 173.554 222.628 173.513 222.573 173.444C221.875 172.483 221.121 171.501 220.34 170.526C220.243 170.409 220.264 170.236 220.381 170.139C220.499 170.042 220.672 170.063 220.768 170.181C221.557 171.162 222.31 172.151 223.015 173.119C223.105 173.243 223.077 173.416 222.953 173.506C222.905 173.541 222.849 173.561 222.787 173.561L222.794 173.554ZM216.738 166.129C216.662 166.129 216.586 166.102 216.53 166.039C215.728 165.141 214.885 164.235 214.035 163.336C213.931 163.226 213.931 163.053 214.042 162.949C214.152 162.845 214.325 162.852 214.429 162.956C215.286 163.855 216.129 164.767 216.938 165.673C217.042 165.784 217.028 165.963 216.918 166.06C216.862 166.109 216.8 166.129 216.731 166.129H216.738ZM210.087 159.23C210.018 159.23 209.949 159.202 209.893 159.154C209.029 158.31 208.137 157.467 207.225 156.616C207.114 156.513 207.107 156.34 207.211 156.229C207.315 156.119 207.488 156.112 207.598 156.215C208.518 157.066 209.41 157.916 210.274 158.76C210.384 158.863 210.384 159.043 210.274 159.147C210.218 159.202 210.149 159.23 210.073 159.23H210.087ZM203.028 152.745C202.966 152.745 202.897 152.724 202.849 152.676C201.936 151.881 201.003 151.079 200.056 150.277C199.938 150.18 199.924 150.007 200.021 149.89C200.118 149.772 200.291 149.758 200.408 149.855C201.362 150.657 202.296 151.459 203.208 152.261C203.326 152.358 203.333 152.537 203.236 152.648C203.181 152.71 203.104 152.745 203.028 152.745ZM195.672 146.599C195.61 146.599 195.548 146.578 195.5 146.537C194.553 145.776 193.585 145.016 192.61 144.255C192.492 144.158 192.472 143.986 192.561 143.868C192.651 143.75 192.831 143.73 192.949 143.82C193.93 144.58 194.898 145.341 195.845 146.101C195.963 146.198 195.984 146.371 195.887 146.488C195.831 146.557 195.749 146.592 195.672 146.592V146.599ZM188.081 140.75C188.026 140.75 187.964 140.729 187.916 140.695C186.941 139.969 185.945 139.243 184.943 138.524C184.818 138.434 184.791 138.261 184.881 138.137C184.97 138.012 185.143 137.985 185.268 138.074C186.277 138.8 187.266 139.526 188.247 140.252C188.372 140.342 188.393 140.515 188.303 140.639C188.247 140.715 188.164 140.75 188.081 140.75ZM180.29 135.171C180.235 135.171 180.179 135.157 180.131 135.122C179.129 134.431 178.112 133.733 177.089 133.041C176.965 132.959 176.93 132.786 177.013 132.661C177.096 132.537 177.269 132.502 177.393 132.585C178.423 133.277 179.433 133.975 180.442 134.666C180.567 134.756 180.601 134.922 180.511 135.046C180.456 135.122 180.373 135.164 180.283 135.164L180.29 135.171ZM172.326 129.834C172.277 129.834 172.222 129.82 172.174 129.792C171.15 129.128 170.113 128.465 169.076 127.801C168.945 127.718 168.91 127.552 168.993 127.421C169.076 127.289 169.249 127.255 169.374 127.338C170.418 128.002 171.455 128.665 172.478 129.329C172.602 129.412 172.644 129.585 172.561 129.709C172.505 129.792 172.422 129.834 172.333 129.834H172.326ZM164.216 124.725C164.168 124.725 164.119 124.711 164.071 124.683C163.027 124.047 161.976 123.411 160.918 122.782C160.787 122.706 160.746 122.533 160.822 122.402C160.898 122.27 161.071 122.229 161.202 122.305C162.26 122.941 163.317 123.577 164.361 124.213C164.493 124.289 164.534 124.462 164.451 124.593C164.396 124.676 164.306 124.725 164.216 124.725ZM155.975 119.837C155.927 119.837 155.879 119.823 155.837 119.802C154.779 119.194 153.708 118.585 152.636 117.977C152.505 117.901 152.456 117.735 152.532 117.604C152.608 117.472 152.781 117.424 152.906 117.5C153.984 118.108 155.049 118.717 156.114 119.325C156.245 119.401 156.293 119.567 156.217 119.698C156.169 119.788 156.072 119.837 155.975 119.837ZM147.61 115.163C147.569 115.163 147.52 115.149 147.479 115.129C146.407 114.548 145.322 113.967 144.236 113.386C144.105 113.317 144.05 113.151 144.119 113.013C144.188 112.875 144.361 112.826 144.492 112.896C145.584 113.476 146.663 114.057 147.741 114.638C147.873 114.707 147.928 114.88 147.852 115.011C147.804 115.101 147.707 115.156 147.61 115.156V115.163ZM139.134 110.697C139.093 110.697 139.051 110.69 139.01 110.669C137.91 110.109 136.818 109.556 135.719 109.01C135.581 108.941 135.525 108.775 135.594 108.644C135.664 108.506 135.829 108.45 135.968 108.519C137.06 109.066 138.159 109.619 139.259 110.186C139.397 110.255 139.445 110.421 139.376 110.559C139.328 110.656 139.231 110.711 139.127 110.711L139.134 110.697ZM130.548 106.438C130.506 106.438 130.465 106.432 130.43 106.411C129.317 105.878 128.211 105.353 127.105 104.835C126.966 104.772 126.904 104.606 126.973 104.468C127.036 104.33 127.201 104.275 127.34 104.337C128.446 104.855 129.559 105.381 130.672 105.92C130.81 105.989 130.866 106.148 130.803 106.286C130.755 106.383 130.658 106.445 130.554 106.445L130.548 106.438ZM121.857 102.401C121.816 102.401 121.781 102.394 121.747 102.373C120.62 101.869 119.5 101.371 118.38 100.88C118.242 100.818 118.179 100.659 118.235 100.514C118.29 100.368 118.456 100.313 118.601 100.368C119.721 100.859 120.848 101.357 121.975 101.862C122.113 101.924 122.175 102.09 122.113 102.228C122.065 102.332 121.968 102.394 121.864 102.394L121.857 102.401ZM113.07 98.5847C113.036 98.5847 113.001 98.5847 112.967 98.564C111.826 98.087 110.692 97.6238 109.565 97.1606C109.427 97.1052 109.358 96.9393 109.413 96.8011C109.468 96.6628 109.634 96.5936 109.773 96.649C110.906 97.1052 112.04 97.5754 113.181 98.0524C113.319 98.1146 113.388 98.2736 113.326 98.4119C113.285 98.5156 113.181 98.5847 113.07 98.5847ZM104.18 95.0174C104.18 95.0174 104.11 95.0174 104.083 94.9966C102.928 94.5542 101.781 94.1186 100.64 93.6969C100.495 93.6416 100.426 93.4826 100.474 93.3443C100.529 93.1991 100.688 93.13 100.827 93.1784C101.967 93.6001 103.122 94.0357 104.276 94.4781C104.422 94.5334 104.491 94.6924 104.435 94.8376C104.394 94.9482 104.29 95.0174 104.18 95.0174ZM95.1852 91.7197C95.1852 91.7197 95.1229 91.7197 95.0953 91.7058C93.9269 91.2979 92.7654 90.9039 91.6109 90.5167C91.4657 90.4683 91.3897 90.3093 91.4381 90.171C91.4865 90.0259 91.6455 89.9498 91.7837 89.9982C92.9383 90.3854 94.1067 90.7794 95.275 91.1942C95.4202 91.2426 95.4963 91.4016 95.4479 91.5468C95.4064 91.6574 95.3027 91.7335 95.1852 91.7335V91.7197ZM86.087 88.7192C86.087 88.7192 86.0317 88.7192 86.0041 88.7054C84.8219 88.339 83.6466 87.9864 82.4782 87.6407C82.333 87.5992 82.25 87.4471 82.2915 87.295C82.333 87.1498 82.4851 87.0669 82.6372 87.1084C83.8056 87.454 84.9809 87.8066 86.17 88.173C86.3152 88.2214 86.3981 88.3735 86.3497 88.5187C86.3152 88.6362 86.2046 88.7123 86.087 88.7123V88.7192ZM76.8783 86.0644C76.8783 86.0644 76.8299 86.0644 76.8092 86.0575C75.6062 85.7395 74.4171 85.4284 73.2418 85.138C73.0966 85.1035 73.0067 84.9514 73.0413 84.8062C73.0759 84.661 73.228 84.5642 73.3732 84.6057C74.5484 84.8961 75.7445 85.2072 76.9474 85.5252C77.0926 85.5667 77.1825 85.7188 77.141 85.8639C77.1064 85.9884 76.9958 86.0714 76.8783 86.0714V86.0644ZM26.2648 84.184C26.168 84.184 26.0712 84.1287 26.0228 84.0388C25.9467 83.9074 26.002 83.7346 26.1334 83.6655C27.1566 83.1055 28.3111 82.6077 29.5556 82.186C29.7008 82.1376 29.8528 82.2136 29.9082 82.3588C29.9565 82.504 29.8805 82.663 29.7353 82.7114C28.5185 83.1262 27.3986 83.6102 26.403 84.1494C26.3615 84.1701 26.3132 84.184 26.2717 84.184H26.2648ZM67.5658 83.8176C67.5658 83.8176 67.5244 83.8176 67.5105 83.8176C66.2938 83.5548 65.0908 83.3129 63.9017 83.0847C63.7496 83.0571 63.6528 82.9119 63.6805 82.7598C63.7081 82.6077 63.8533 82.5109 64.0054 82.5386C65.1945 82.7667 66.3975 83.0156 67.6212 83.2783C67.7733 83.3129 67.8631 83.4581 67.8355 83.6032C67.8078 83.7346 67.6903 83.8245 67.5658 83.8245V83.8176ZM58.1428 82.0823C58.1428 82.0823 58.1151 82.0823 58.1013 82.0823C56.8707 81.8956 55.647 81.7297 54.4579 81.5845C54.3058 81.5638 54.2021 81.4324 54.2159 81.2803C54.2367 81.1282 54.3749 81.0245 54.5201 81.0383C55.7161 81.1835 56.9467 81.3495 58.1773 81.5361C58.3294 81.5569 58.4331 81.702 58.4055 81.8472C58.3848 81.9855 58.2672 82.0823 58.1359 82.0823H58.1428ZM35.3836 81.3909C35.2523 81.3909 35.1347 81.2941 35.114 81.1559C35.0933 81.0038 35.197 80.8655 35.3491 80.8448C36.5174 80.6719 37.7549 80.5406 39.0339 80.4507C39.186 80.4369 39.3174 80.5544 39.3312 80.7065C39.3381 80.8586 39.2275 80.9899 39.0754 81.0038C37.8103 81.0936 36.5866 81.225 35.432 81.3909C35.4182 81.3909 35.4044 81.3909 35.3905 81.3909H35.3836ZM48.6229 81.0314C48.6229 81.0314 48.6091 81.0314 48.6022 81.0314C47.3439 80.9485 46.1133 80.9001 44.9311 80.8724C44.779 80.8724 44.6546 80.7411 44.6615 80.589C44.6615 80.4369 44.7583 80.3262 44.945 80.3193C46.1341 80.347 47.3716 80.3954 48.6368 80.4783C48.7888 80.4853 48.9064 80.6166 48.8925 80.7687C48.8856 80.9139 48.7612 81.0245 48.616 81.0245L48.6229 81.0314Z"
            fill="#A8B1BD"
          />
          <path
            d="M229.554 198.291C229.513 198.291 229.465 198.284 229.43 198.264C229.292 198.194 229.243 198.028 229.312 197.89C229.589 197.365 229.817 196.812 230.004 196.238C230.052 196.093 230.211 196.017 230.35 196.058C230.495 196.107 230.571 196.259 230.529 196.404C230.336 197.005 230.087 197.586 229.803 198.139C229.755 198.236 229.658 198.291 229.561 198.291H229.554Z"
            fill="#A8B1BD"
          />
          <path
            d="M235.169 98.5916C235.044 98.5916 234.927 98.5018 234.899 98.3773C234.774 97.7966 234.595 97.2159 234.38 96.6628C234.325 96.5176 234.394 96.3586 234.533 96.3033C234.671 96.248 234.837 96.3171 234.892 96.4554C235.12 97.0361 235.307 97.6445 235.438 98.2529C235.473 98.405 235.376 98.5502 235.224 98.5778C235.203 98.5778 235.182 98.5778 235.169 98.5778V98.5916Z"
            fill="#A8B1BD"
          />
          <path
            d="M48.3873 194.675C48.2352 194.675 48.1108 194.558 48.1108 194.406C48.1108 194.254 48.2283 194.129 48.3804 194.129C49.5695 194.108 50.807 194.074 52.0584 194.012C52.2035 194.012 52.3418 194.122 52.3487 194.274C52.3556 194.427 52.2381 194.558 52.086 194.565C50.8278 194.62 49.5833 194.662 48.3942 194.682L48.3873 194.675ZM42.4901 194.613H42.4763C41.218 194.565 39.9736 194.489 38.7845 194.385C38.6324 194.371 38.5218 194.24 38.5356 194.088C38.5494 193.936 38.6808 193.825 38.8329 193.839C40.0151 193.936 41.2457 194.012 42.497 194.06C42.6491 194.06 42.7667 194.191 42.7597 194.344C42.7597 194.496 42.6353 194.606 42.4832 194.606L42.4901 194.613ZM57.9556 194.171C57.8173 194.171 57.6928 194.06 57.679 193.922C57.6652 193.77 57.7758 193.638 57.9279 193.625C59.1309 193.521 60.3545 193.403 61.592 193.272C61.7441 193.265 61.8824 193.369 61.8962 193.514C61.9101 193.666 61.8064 193.804 61.6543 193.818C60.4098 193.949 59.1862 194.074 57.9763 194.178C57.9694 194.178 57.9625 194.178 57.9556 194.178V194.171ZM32.9634 193.652C32.9634 193.652 32.9288 193.652 32.915 193.652C31.6567 193.431 30.433 193.175 29.2923 192.878C29.1471 192.843 29.0572 192.691 29.0918 192.539C29.1264 192.394 29.2785 192.304 29.4237 192.339C30.5575 192.629 31.7604 192.885 33.0048 193.099C33.1569 193.127 33.2537 193.265 33.2261 193.417C33.2053 193.548 33.0878 193.645 32.9564 193.645L32.9634 193.652ZM67.4754 193.092C67.3371 193.092 67.2196 192.995 67.2058 192.857C67.185 192.705 67.2887 192.567 67.4408 192.546C68.6369 192.38 69.8536 192.2 71.0842 192.007C71.2363 191.979 71.3746 192.083 71.4023 192.235C71.423 192.387 71.3262 192.525 71.1741 192.553C69.9435 192.747 68.7267 192.926 67.5238 193.092C67.51 193.092 67.4961 193.092 67.4823 193.092H67.4754ZM76.933 191.557C76.8017 191.557 76.6842 191.468 76.6634 191.329C76.6358 191.177 76.7326 191.039 76.8846 191.011C78.0807 190.79 79.2836 190.562 80.5004 190.32C80.6525 190.285 80.7977 190.389 80.8253 190.534C80.853 190.686 80.7562 190.831 80.611 190.859C79.3942 191.101 78.1844 191.336 76.9883 191.55C76.9745 191.55 76.9538 191.55 76.94 191.55L76.933 191.557ZM23.7892 190.963C23.7477 190.963 23.7131 190.956 23.6716 190.935C22.4756 190.389 21.3833 189.774 20.4223 189.11C20.2979 189.027 20.2633 188.854 20.3532 188.73C20.4431 188.605 20.609 188.571 20.7334 188.661C21.6737 189.304 22.7383 189.905 23.8998 190.437C24.0381 190.5 24.1003 190.666 24.0381 190.804C23.9897 190.908 23.8929 190.963 23.7892 190.963ZM86.3215 189.649C86.1971 189.649 86.0796 189.559 86.0519 189.435C86.0173 189.283 86.1141 189.138 86.2593 189.103C87.4484 188.84 88.6445 188.564 89.8474 188.28C89.9926 188.246 90.1447 188.336 90.1793 188.488C90.2138 188.633 90.1239 188.785 89.9718 188.82C88.762 189.103 87.566 189.38 86.3768 189.642C86.3561 189.642 86.3354 189.642 86.3146 189.642L86.3215 189.649ZM95.6409 187.416C95.5165 187.416 95.4058 187.333 95.3713 187.209C95.3367 187.064 95.4197 186.912 95.5718 186.877C96.754 186.573 97.9362 186.262 99.1322 185.944C99.2774 185.902 99.4295 185.992 99.471 186.137C99.5124 186.282 99.4226 186.435 99.2774 186.476C98.0814 186.801 96.8922 187.112 95.71 187.416C95.6893 187.416 95.6616 187.423 95.6409 187.423V187.416ZM104.891 184.9C104.774 184.9 104.663 184.824 104.628 184.699C104.587 184.554 104.67 184.402 104.815 184.36C105.983 184.022 107.166 183.676 108.348 183.323C108.493 183.282 108.645 183.365 108.694 183.51C108.735 183.655 108.652 183.807 108.507 183.856C107.325 184.208 106.142 184.561 104.967 184.893C104.94 184.9 104.919 184.907 104.891 184.907V184.9ZM114.058 182.121C113.941 182.121 113.83 182.044 113.796 181.927C113.747 181.782 113.83 181.63 113.975 181.581C115.137 181.208 116.305 180.835 117.481 180.447C117.626 180.399 117.778 180.475 117.826 180.62C117.875 180.765 117.799 180.918 117.653 180.966C116.478 181.353 115.31 181.733 114.141 182.1C114.114 182.107 114.086 182.114 114.058 182.114V182.121ZM123.15 179.092C123.032 179.092 122.928 179.023 122.887 178.906C122.839 178.761 122.915 178.602 123.06 178.553C124.214 178.152 125.369 177.744 126.53 177.329C126.675 177.274 126.834 177.35 126.883 177.495C126.931 177.641 126.862 177.8 126.717 177.848C125.555 178.263 124.394 178.671 123.239 179.079C123.212 179.086 123.177 179.092 123.15 179.092ZM132.158 175.836C132.047 175.836 131.944 175.767 131.902 175.656C131.847 175.511 131.923 175.352 132.061 175.304C133.209 174.875 134.356 174.44 135.504 173.99C135.642 173.935 135.808 174.004 135.863 174.149C135.919 174.288 135.85 174.453 135.704 174.509C134.557 174.951 133.402 175.394 132.255 175.822C132.22 175.836 132.192 175.836 132.158 175.836ZM141.09 172.359C140.979 172.359 140.876 172.296 140.834 172.186C140.779 172.048 140.848 171.882 140.986 171.826C142.127 171.363 143.268 170.9 144.395 170.43C144.533 170.368 144.699 170.437 144.754 170.582C144.81 170.72 144.747 170.886 144.602 170.941C143.468 171.412 142.334 171.875 141.187 172.338C141.152 172.352 141.118 172.359 141.083 172.359H141.09ZM149.932 168.66C149.829 168.66 149.725 168.598 149.677 168.494C149.614 168.356 149.677 168.19 149.822 168.135C150.956 167.644 152.076 167.153 153.196 166.655C153.334 166.593 153.5 166.655 153.562 166.793C153.624 166.932 153.562 167.098 153.424 167.16C152.304 167.658 151.177 168.148 150.05 168.639C150.015 168.653 149.974 168.66 149.939 168.66H149.932ZM158.678 164.74C158.574 164.74 158.477 164.678 158.429 164.581C158.367 164.443 158.429 164.277 158.567 164.215C159.687 163.696 160.8 163.178 161.9 162.652C162.038 162.59 162.204 162.645 162.266 162.784C162.328 162.922 162.273 163.088 162.135 163.15C161.029 163.675 159.915 164.201 158.795 164.719C158.761 164.74 158.719 164.747 158.678 164.747V164.74ZM167.32 160.599C167.216 160.599 167.119 160.544 167.071 160.447C167.002 160.308 167.057 160.143 167.195 160.08C168.301 159.534 169.401 158.981 170.486 158.428C170.617 158.359 170.79 158.414 170.859 158.546C170.929 158.684 170.873 158.85 170.742 158.919C169.657 159.472 168.557 160.025 167.451 160.578C167.41 160.599 167.368 160.606 167.327 160.606L167.32 160.599ZM175.837 156.216C175.74 156.216 175.644 156.16 175.595 156.071C175.526 155.939 175.574 155.766 175.713 155.697C176.805 155.116 177.884 154.536 178.948 153.948C179.08 153.879 179.252 153.92 179.322 154.059C179.398 154.19 179.349 154.363 179.211 154.432C178.139 155.02 177.061 155.6 175.962 156.188C175.92 156.209 175.879 156.223 175.83 156.223L175.837 156.216ZM184.223 151.584C184.126 151.584 184.037 151.535 183.981 151.445C183.905 151.314 183.954 151.148 184.085 151.072C185.157 150.457 186.221 149.835 187.265 149.219C187.396 149.143 187.562 149.185 187.645 149.316C187.721 149.447 187.68 149.613 187.549 149.696C186.498 150.319 185.44 150.934 184.361 151.556C184.32 151.584 184.272 151.591 184.223 151.591V151.584ZM192.45 146.675C192.36 146.675 192.271 146.627 192.215 146.544C192.132 146.412 192.174 146.247 192.305 146.164C193.356 145.507 194.393 144.85 195.416 144.2C195.541 144.117 195.713 144.152 195.796 144.283C195.879 144.408 195.845 144.58 195.713 144.663C194.69 145.32 193.646 145.977 192.595 146.634C192.547 146.661 192.499 146.675 192.45 146.675ZM200.491 141.462C200.401 141.462 200.318 141.421 200.262 141.338C200.18 141.213 200.207 141.041 200.339 140.958C201.369 140.259 202.378 139.561 203.367 138.863C203.491 138.773 203.664 138.801 203.754 138.932C203.844 139.056 203.809 139.229 203.685 139.319C202.689 140.017 201.68 140.716 200.65 141.421C200.601 141.455 200.546 141.469 200.498 141.469L200.491 141.462ZM208.289 135.897C208.206 135.897 208.123 135.856 208.068 135.786C207.978 135.662 207.999 135.489 208.123 135.399C209.119 134.653 210.093 133.899 211.041 133.159C211.158 133.063 211.331 133.083 211.428 133.208C211.525 133.325 211.504 133.498 211.379 133.595C210.425 134.341 209.45 135.095 208.455 135.849C208.407 135.883 208.344 135.904 208.289 135.904V135.897ZM215.769 129.917C215.693 129.917 215.617 129.882 215.562 129.82C215.465 129.703 215.479 129.53 215.59 129.433C216.544 128.624 217.47 127.801 218.355 127.006C218.473 126.903 218.645 126.91 218.742 127.027C218.846 127.138 218.832 127.317 218.721 127.414C217.837 128.216 216.903 129.039 215.949 129.855C215.901 129.896 215.832 129.924 215.769 129.924V129.917ZM222.8 123.411C222.731 123.411 222.662 123.384 222.607 123.335C222.496 123.232 222.496 123.052 222.607 122.948C223.492 122.049 224.342 121.151 225.13 120.279C225.234 120.169 225.407 120.155 225.517 120.259C225.628 120.362 225.642 120.535 225.538 120.646C224.743 121.524 223.886 122.43 223.001 123.335C222.946 123.391 222.876 123.418 222.807 123.418L222.8 123.411ZM229.099 116.194C229.043 116.194 228.981 116.173 228.933 116.138C228.808 116.048 228.787 115.876 228.877 115.751C229.638 114.735 230.343 113.726 230.972 112.744C231.055 112.612 231.228 112.578 231.352 112.661C231.477 112.744 231.518 112.917 231.435 113.041C230.799 114.037 230.087 115.06 229.32 116.083C229.264 116.152 229.182 116.194 229.099 116.194ZM233.952 107.96C233.917 107.96 233.883 107.96 233.848 107.939C233.71 107.884 233.641 107.718 233.696 107.579C234.18 106.39 234.553 105.229 234.795 104.116C234.83 103.971 234.975 103.874 235.12 103.908C235.265 103.943 235.362 104.088 235.328 104.233C235.079 105.374 234.698 106.57 234.201 107.787C234.159 107.891 234.056 107.96 233.945 107.96H233.952Z"
            fill="#A8B1BD"
          />
          <path
            d="M16.4881 184.948C16.3913 184.948 16.3014 184.899 16.253 184.816C15.9281 184.277 15.6515 183.71 15.4234 183.13C15.3681 182.991 15.4372 182.825 15.5755 182.77C15.7207 182.715 15.8797 182.784 15.935 182.922C16.1493 183.475 16.4189 184.015 16.73 184.526C16.8061 184.657 16.7646 184.823 16.6332 184.906C16.5918 184.934 16.5365 184.948 16.495 184.948H16.4881Z"
            fill="#A8B1BD"
          />
          <path
            d="M99.8569 257.567C99.8569 257.567 99.8085 257.567 99.7877 257.56C99.1794 257.408 98.5848 257.2 98.011 256.952C97.8727 256.889 97.8105 256.73 97.8658 256.585C97.928 256.447 98.0939 256.385 98.2253 256.44C98.7715 256.682 99.3453 256.876 99.9191 257.021C100.064 257.055 100.154 257.207 100.12 257.353C100.085 257.477 99.9744 257.56 99.85 257.56L99.8569 257.567Z"
            fill="#A8B1BD"
          />
          <path
            d="M93.4352 253.466C93.3591 253.466 93.2831 253.439 93.2278 253.377C92.4465 252.505 91.6999 251.503 91.0016 250.383C90.9187 250.252 90.9601 250.086 91.0915 250.003C91.2228 249.92 91.3888 249.961 91.4717 250.093C92.1493 251.178 92.8821 252.16 93.6356 253.01C93.7393 253.121 93.7255 253.3 93.6149 253.397C93.5596 253.446 93.4974 253.466 93.4282 253.466H93.4352ZM88.6234 245.239C88.5128 245.239 88.4091 245.17 88.3676 245.067C87.932 243.974 87.5172 242.799 87.137 241.568C87.0886 241.423 87.1715 241.271 87.3167 241.223C87.4619 241.181 87.614 241.257 87.6624 241.402C88.0426 242.612 88.4505 243.781 88.8792 244.859C88.9345 245.004 88.8654 245.163 88.7271 245.219C88.6925 245.232 88.6579 245.239 88.6234 245.239ZM85.9271 236.058C85.8027 236.058 85.6852 235.968 85.6575 235.837C85.4086 234.676 85.1736 233.452 84.9662 232.207C84.9385 232.055 85.0422 231.917 85.1943 231.889C85.3395 231.869 85.4847 231.965 85.5123 232.118C85.7197 233.355 85.9548 234.572 86.2037 235.726C86.2382 235.872 86.1414 236.024 85.9893 236.051C85.9686 236.051 85.9479 236.051 85.934 236.051L85.9271 236.058ZM84.4269 226.594C84.2886 226.594 84.1711 226.49 84.1504 226.352L84.102 225.889C83.9914 224.838 83.8877 223.766 83.7978 222.674C83.7839 222.522 83.8946 222.39 84.0467 222.377C84.2057 222.363 84.3301 222.48 84.3439 222.632C84.4338 223.718 84.5306 224.789 84.6481 225.833L84.6965 226.29C84.7104 226.442 84.6067 226.58 84.4546 226.594C84.4407 226.594 84.4338 226.594 84.42 226.594H84.4269ZM83.7148 217.039C83.5696 217.039 83.4452 216.922 83.4383 216.777C83.3899 215.567 83.3484 214.336 83.3277 213.085C83.3277 212.933 83.4452 212.808 83.5973 212.801C83.7355 212.801 83.8738 212.919 83.8807 213.071C83.9084 214.315 83.943 215.546 83.9914 216.749C83.9914 216.901 83.8807 217.032 83.7286 217.039H83.7148ZM83.5765 207.457C83.4244 207.457 83.3 207.333 83.3069 207.181C83.3207 205.964 83.3484 204.733 83.383 203.489C83.383 203.337 83.4867 203.212 83.6664 203.219C83.8185 203.219 83.936 203.351 83.936 203.503C83.9015 204.747 83.8738 205.971 83.86 207.181C83.86 207.333 83.7356 207.45 83.5835 207.45L83.5765 207.457ZM83.8946 197.882C83.8946 197.882 83.8876 197.882 83.8807 197.882C83.7286 197.875 83.6111 197.744 83.618 197.592C83.6872 196.375 83.7632 195.151 83.8462 193.907C83.86 193.755 83.9914 193.637 84.1435 193.651C84.2955 193.665 84.4131 193.796 84.3992 193.941C84.3163 195.179 84.2402 196.403 84.1711 197.619C84.1642 197.765 84.0397 197.882 83.8946 197.882ZM84.5928 188.328C84.5928 188.328 84.579 188.328 84.5652 188.328C84.4131 188.314 84.3025 188.182 84.3163 188.03C84.4269 186.814 84.5444 185.59 84.6758 184.359C84.6896 184.207 84.8279 184.11 84.98 184.11C85.1321 184.124 85.2427 184.263 85.2289 184.415C85.0975 185.645 84.98 186.869 84.8694 188.079C84.8555 188.224 84.738 188.328 84.5928 188.328ZM85.6229 178.801C85.6229 178.801 85.6022 178.801 85.5884 178.801C85.4363 178.78 85.3326 178.642 85.3464 178.497C85.4985 177.287 85.6575 176.063 85.8234 174.839C85.8442 174.687 85.9824 174.577 86.1345 174.604C86.2866 174.625 86.3903 174.763 86.3696 174.916C86.2037 176.139 86.0447 177.356 85.8926 178.566C85.8787 178.704 85.7543 178.808 85.616 178.808L85.6229 178.801ZM86.9503 169.309C86.9503 169.309 86.9227 169.309 86.9088 169.309C86.7567 169.288 86.653 169.143 86.6807 168.998C86.8674 167.788 87.0609 166.578 87.2614 165.354C87.2891 165.202 87.4274 165.105 87.5794 165.126C87.7315 165.154 87.8283 165.292 87.8076 165.444C87.6071 166.661 87.4135 167.878 87.2269 169.081C87.2061 169.219 87.0886 169.316 86.9572 169.316L86.9503 169.309ZM88.5473 159.858C88.5473 159.858 88.5128 159.858 88.4989 159.858C88.3468 159.83 88.2501 159.685 88.2777 159.54C88.4989 158.337 88.7271 157.127 88.9621 155.917C88.9898 155.765 89.1419 155.668 89.2871 155.696C89.4392 155.724 89.536 155.869 89.5083 156.021C89.2732 157.231 89.0451 158.441 88.8308 159.644C88.81 159.775 88.6925 159.872 88.5612 159.872L88.5473 159.858ZM90.3932 150.456C90.3932 150.456 90.3587 150.456 90.3379 150.456C90.1858 150.421 90.0959 150.276 90.1236 150.131C90.3725 148.935 90.6352 147.732 90.8979 146.522C90.9325 146.37 91.0777 146.28 91.2298 146.314C91.3749 146.349 91.4717 146.494 91.4372 146.646C91.1745 147.849 90.9117 149.052 90.6628 150.248C90.6352 150.38 90.5177 150.469 90.3932 150.469V150.456ZM92.4811 141.102C92.4811 141.102 92.4396 141.102 92.4189 141.095C92.2737 141.06 92.1769 140.908 92.2115 140.763C92.4949 139.574 92.7784 138.378 93.0757 137.175C93.1102 137.03 93.2623 136.94 93.4075 136.974C93.5527 137.009 93.6426 137.161 93.608 137.306C93.3107 138.502 93.0273 139.698 92.7438 140.887C92.7162 141.012 92.5986 141.102 92.4742 141.102H92.4811ZM94.7971 131.803C94.7971 131.803 94.7487 131.803 94.728 131.796C94.5828 131.755 94.4929 131.61 94.5344 131.457C94.8455 130.261 95.1635 129.079 95.4885 127.897C95.5299 127.752 95.6751 127.662 95.8272 127.703C95.9724 127.745 96.0623 127.897 96.0208 128.042C95.7028 129.224 95.3848 130.407 95.0667 131.603C95.0322 131.727 94.9216 131.81 94.7971 131.81V131.803ZM97.3413 122.567C97.3413 122.567 97.2929 122.567 97.2652 122.553C97.12 122.511 97.0371 122.359 97.0786 122.214C97.4242 121.025 97.7699 119.85 98.1225 118.674C98.164 118.529 98.323 118.446 98.4682 118.488C98.6133 118.529 98.6963 118.688 98.6548 118.833C98.3022 120.002 97.9566 121.184 97.6178 122.366C97.5832 122.484 97.4726 122.567 97.3551 122.567H97.3413ZM100.12 113.393C100.12 113.393 100.065 113.393 100.038 113.379C99.8923 113.33 99.8094 113.178 99.8578 113.033C100.231 111.858 100.611 110.682 100.992 109.521C101.04 109.376 101.192 109.3 101.337 109.348C101.482 109.397 101.558 109.549 101.51 109.694C101.13 110.855 100.75 112.024 100.376 113.199C100.342 113.316 100.231 113.393 100.114 113.393H100.12ZM103.135 104.294C103.135 104.294 103.073 104.294 103.045 104.281C102.9 104.232 102.824 104.073 102.872 103.928C103.28 102.76 103.688 101.598 104.096 100.451C104.144 100.305 104.303 100.229 104.448 100.285C104.593 100.333 104.67 100.492 104.614 100.637C104.199 101.785 103.792 102.946 103.391 104.108C103.349 104.225 103.245 104.294 103.128 104.294H103.135ZM106.398 95.2862C106.398 95.2862 106.336 95.2861 106.301 95.2654C106.156 95.2101 106.087 95.0511 106.142 94.9128C106.585 93.7514 107.027 92.6037 107.47 91.4699C107.525 91.3316 107.684 91.2556 107.829 91.3109C107.974 91.3662 108.043 91.5252 107.988 91.6704C107.546 92.8042 107.103 93.9519 106.661 95.1064C106.619 95.217 106.515 95.2862 106.405 95.2862H106.398ZM109.931 86.3816C109.896 86.3816 109.862 86.3816 109.827 86.3609C109.689 86.3056 109.62 86.1396 109.682 86.0014C110.159 84.8537 110.636 83.7199 111.12 82.6068C111.182 82.4686 111.341 82.3994 111.479 82.4617C111.618 82.5239 111.687 82.6829 111.625 82.8212C111.141 83.9411 110.664 85.068 110.193 86.2157C110.152 86.3194 110.048 86.3885 109.938 86.3885L109.931 86.3816ZM113.754 77.5946C113.719 77.5946 113.678 77.5877 113.636 77.5669C113.498 77.5047 113.436 77.3388 113.498 77.2005C114.017 76.0667 114.535 74.9536 115.054 73.8544C115.116 73.7161 115.282 73.6608 115.42 73.723C115.558 73.7853 115.614 73.9512 115.551 74.0895C115.033 75.1887 114.514 76.3018 113.996 77.4287C113.947 77.5324 113.851 77.5877 113.747 77.5877L113.754 77.5946ZM117.909 68.9597C117.867 68.9597 117.826 68.9527 117.784 68.932C117.646 68.8629 117.591 68.6969 117.66 68.5587C118.22 67.4456 118.787 66.3533 119.354 65.2817C119.423 65.1503 119.596 65.095 119.727 65.1642C119.858 65.2333 119.914 65.3992 119.845 65.5375C119.278 66.6091 118.711 67.6945 118.151 68.8076C118.102 68.9043 118.006 68.9597 117.902 68.9597H117.909ZM122.437 60.5183C122.389 60.5183 122.347 60.5045 122.299 60.4837C122.168 60.4077 122.119 60.2418 122.195 60.1104L122.721 59.184C123.163 58.4166 123.606 57.663 124.055 56.9164C124.131 56.785 124.304 56.7435 124.435 56.8196C124.567 56.8956 124.608 57.0685 124.532 57.1998C124.09 57.9396 123.647 58.6931 123.205 59.4605L122.679 60.38C122.631 60.4699 122.534 60.5183 122.437 60.5183ZM127.422 52.3328C127.373 52.3328 127.318 52.3189 127.27 52.2913C127.145 52.2083 127.104 52.0355 127.187 51.911C127.871 50.8602 128.569 49.8301 129.254 48.8484C129.344 48.7239 129.51 48.6894 129.641 48.7792C129.765 48.8691 129.793 49.035 129.71 49.1664C129.033 50.1412 128.341 51.1644 127.65 52.2152C127.595 52.2982 127.512 52.3397 127.422 52.3397V52.3328ZM132.98 44.5344C132.918 44.5344 132.863 44.5136 132.807 44.479C132.69 44.3823 132.669 44.2094 132.759 44.0919C133.54 43.0964 134.328 42.1354 135.103 41.2297C135.199 41.1122 135.372 41.0984 135.49 41.2021C135.607 41.2989 135.621 41.4717 135.517 41.5892C134.75 42.488 133.962 43.442 133.195 44.4307C133.139 44.4998 133.056 44.5344 132.98 44.5344ZM139.334 37.372C139.265 37.372 139.189 37.3443 139.133 37.289C139.03 37.1784 139.03 37.0056 139.133 36.9019C140.053 36.0031 140.979 35.1666 141.878 34.413C141.995 34.3162 142.168 34.3301 142.265 34.4476C142.362 34.5651 142.348 34.738 142.23 34.8347C141.339 35.5745 140.426 36.4041 139.513 37.2959C139.458 37.3513 139.389 37.372 139.32 37.372H139.334ZM146.876 31.5094C146.78 31.5094 146.69 31.461 146.634 31.3711C146.558 31.2397 146.607 31.0738 146.738 30.9978C147.879 30.3479 149.019 29.8225 150.119 29.4284C150.257 29.38 150.423 29.4492 150.471 29.5943C150.52 29.7395 150.451 29.8985 150.305 29.9469C149.234 30.3272 148.128 30.8457 147.015 31.4817C146.973 31.5094 146.925 31.5163 146.876 31.5163V31.5094Z"
            fill="#A8B1BD"
          />
          <path
            d="M157.842 29.4013C157.842 29.4013 157.793 29.4013 157.773 29.3944C157.199 29.2492 156.604 29.1455 156.01 29.0971C155.858 29.0833 155.747 28.952 155.761 28.7999C155.775 28.6478 155.906 28.5371 156.058 28.551C156.687 28.6063 157.31 28.71 157.911 28.8621C158.056 28.8966 158.146 29.0487 158.112 29.1939C158.077 29.3184 157.966 29.4013 157.842 29.4013Z"
            fill="#A8B1BD"
          />
          <path
            d="M88.1835 189.787C88.1835 191.854 86.5104 193.527 84.4433 193.527C82.3762 193.527 80.7031 191.854 80.7031 189.787C80.7031 187.72 82.3762 186.047 84.4433 186.047C86.5104 186.047 88.1835 187.72 88.1835 189.787Z"
            fill="#A8B1BD"
          />
          <path
            d="M194.547 149.225C196.612 149.225 198.287 147.551 198.287 145.485C198.287 143.42 196.612 141.745 194.547 141.745C192.481 141.745 190.807 143.42 190.807 145.485C190.807 147.551 192.481 149.225 194.547 149.225Z"
            fill="#222D4B"
          />
          <path
            d="M235.447 106.846C237.513 106.846 239.187 105.171 239.187 103.105C239.187 101.04 237.513 99.3652 235.447 99.3652C233.382 99.3652 231.707 101.04 231.707 103.105C231.707 105.171 233.382 106.846 235.447 106.846Z"
            fill="#A8B1BD"
          />
          <path
            d="M28.2714 84.3154C28.2714 86.3825 26.5983 88.0556 24.5312 88.0556C22.4641 88.0556 20.791 86.3825 20.791 84.3154C20.791 82.2483 22.4641 80.5752 24.5312 80.5752C26.5983 80.5752 28.2714 82.2483 28.2714 84.3154Z"
            fill="#A8B1BD"
          />
          <path
            d="M107.97 96.1716C107.97 97.2639 107.085 98.1488 105.993 98.1488C104.901 98.1488 104.016 97.2639 104.016 96.1716C104.016 95.0793 104.901 94.1943 105.993 94.1943C107.085 94.1943 107.97 95.0793 107.97 96.1716Z"
            fill="#222D4B"
          />
          <path
            d="M231.624 194.211C232.716 194.211 233.601 193.326 233.601 192.234C233.601 191.142 232.716 190.257 231.624 190.257C230.532 190.257 229.646 191.142 229.646 192.234C229.646 193.326 230.532 194.211 231.624 194.211Z"
            fill="#A8B1BD"
          />
          <path
            d="M101.837 257.29C101.837 258.382 100.952 259.267 99.8601 259.267C98.7677 259.267 97.8828 258.382 97.8828 257.29C97.8828 256.197 98.7677 255.312 99.8601 255.312C100.952 255.312 101.837 256.197 101.837 257.29Z"
            fill="#222D4B"
          />
          <path
            d="M18.2944 185.12C18.2944 186.212 17.4094 187.097 16.3171 187.097C15.2248 187.097 14.3398 186.212 14.3398 185.12C14.3398 184.027 15.2248 183.143 16.3171 183.143C17.4094 183.143 18.2944 184.027 18.2944 185.12Z"
            fill="#222D4B"
          />
          <path
            d="M159.82 29.1247C159.82 30.217 158.935 31.102 157.842 31.102C156.75 31.102 155.865 30.217 155.865 29.1247C155.865 28.0324 156.75 27.1475 157.842 27.1475C158.935 27.1475 159.82 28.0324 159.82 29.1247Z"
            fill="#A8B1BD"
          />
          <path
            d="M51.8176 191.473C62.5048 191.473 71.1684 182.809 71.1684 172.122C71.1684 161.435 62.5048 152.771 51.8176 152.771C41.1305 152.771 32.4668 161.435 32.4668 172.122C32.4668 182.809 41.1305 191.473 51.8176 191.473Z"
            fill="#A8B1BD"
          />
          <path
            d="M60.9647 200.77C58.2148 200.77 55.7839 200.393 53.672 199.638C51.5601 198.892 49.7852 197.791 48.3473 196.336C46.9095 194.88 45.8221 193.096 45.0851 190.984C44.3482 188.872 43.9798 186.455 43.9798 183.732C43.9798 181.098 44.3527 178.744 45.0986 176.668C45.8535 174.592 46.9454 172.831 48.3743 171.384C49.8122 169.928 51.5556 168.818 53.6046 168.054C55.6625 167.29 57.9901 166.908 60.5873 166.908C63.1126 166.908 65.3233 167.322 67.2195 168.149C69.1247 168.966 70.7153 170.076 71.9915 171.478C73.2766 172.871 74.2381 174.439 74.8762 176.183C75.5232 177.926 75.8468 179.724 75.8468 181.575C75.8468 182.878 75.7839 184.199 75.658 185.538C75.5322 186.877 75.2671 188.108 74.8627 189.231C74.4583 190.346 73.8337 191.245 72.989 191.928C72.1532 192.611 71.0209 192.952 69.592 192.952C68.9629 192.952 68.2709 192.853 67.5161 192.655C66.7612 192.458 66.0917 192.13 65.5075 191.671C64.9234 191.213 64.5774 190.597 64.4696 189.825H64.3078C64.0921 190.346 63.7596 190.84 63.3103 191.307C62.8699 191.775 62.2903 192.148 61.5713 192.426C60.8614 192.705 59.9942 192.826 58.9697 192.79C57.8014 192.745 56.7724 192.485 55.8827 192.008C54.993 191.523 54.2471 190.867 53.645 190.04C53.0519 189.205 52.6026 188.238 52.297 187.142C52.0004 186.037 51.8522 184.846 51.8522 183.57C51.8522 182.357 52.0319 181.247 52.3914 180.24C52.7508 179.234 53.2496 178.353 53.8877 177.598C54.5347 176.843 55.2896 176.241 56.1523 175.792C57.024 175.333 57.9632 175.05 58.9697 174.943C59.8683 174.853 60.6861 174.893 61.423 175.064C62.16 175.226 62.7666 175.473 63.2429 175.805C63.7192 176.129 64.0202 176.488 64.146 176.884H64.3078V175.374H67.1656V187.56C67.1656 188.315 67.3768 188.98 67.7991 189.555C68.2215 190.13 68.8371 190.418 69.6459 190.418C70.5626 190.418 71.2635 190.103 71.7488 189.474C72.2431 188.845 72.5801 187.874 72.7598 186.562C72.9485 185.25 73.0429 183.57 73.0429 181.521C73.0429 180.317 72.8767 179.13 72.5441 177.962C72.2206 176.785 71.7263 175.684 71.0613 174.659C70.4053 173.635 69.574 172.732 68.5675 171.95C67.561 171.168 66.3792 170.557 65.0222 170.117C63.6742 169.667 62.142 169.443 60.4255 169.443C58.3136 169.443 56.4219 169.771 54.7504 170.427C53.0878 171.074 51.6724 172.022 50.5042 173.271C49.3449 174.511 48.4597 176.021 47.8486 177.8C47.2465 179.571 46.9454 181.584 46.9454 183.839C46.9454 186.131 47.2465 188.167 47.8486 189.946C48.4597 191.725 49.3583 193.226 50.5446 194.448C51.7398 195.67 53.2182 196.596 54.9796 197.225C56.741 197.863 58.772 198.182 61.0726 198.182C62.0611 198.182 63.0362 198.088 63.9977 197.899C64.9593 197.71 65.8086 197.504 66.5455 197.279C67.2824 197.054 67.8126 196.888 68.1361 196.78L68.891 199.261C68.3339 199.494 67.6059 199.728 66.7073 199.962C65.8176 200.195 64.865 200.389 63.8495 200.541C62.843 200.694 61.8814 200.77 60.9647 200.77ZM59.401 190.04C60.6053 190.04 61.5803 189.798 62.3262 189.312C63.0721 188.827 63.6158 188.095 63.9573 187.115C64.2988 186.136 64.4696 184.9 64.4696 183.408C64.4696 181.898 64.2808 180.721 63.9034 179.876C63.5259 179.032 62.9688 178.438 62.2319 178.097C61.4949 177.755 60.5873 177.585 59.5089 177.585C58.4844 177.585 57.6082 177.854 56.8802 178.393C56.1613 178.924 55.6086 179.634 55.2222 180.523C54.8448 181.404 54.656 182.366 54.656 183.408C54.656 184.558 54.8088 185.641 55.1144 186.657C55.4199 187.663 55.9187 188.481 56.6106 189.11C57.3026 189.73 58.2328 190.04 59.401 190.04Z"
            fill="white"
          />
          <path
            d="M191.345 220.745C187.308 220.745 187.301 227.016 191.345 227.016C195.39 227.016 195.39 220.745 191.345 220.745Z"
            fill="#C5CED9"
          />
          <path
            d="M201.071 215.823C198.52 213.029 194.711 211.363 190.922 211.446C187.134 211.529 183.38 213.278 180.939 216.189C180.068 217.226 179.923 218.719 180.939 219.736C181.831 220.627 183.615 220.779 184.486 219.736C184.928 219.21 185.405 218.719 185.938 218.277C185.986 218.242 186.048 218.194 186.076 218.173C186.256 218.049 186.435 217.924 186.622 217.814C186.919 217.627 187.224 217.454 187.535 217.302C187.908 217.115 188.44 216.908 189.132 216.721C189.47 216.631 189.809 216.555 190.155 216.507C190.176 216.507 190.21 216.507 190.266 216.507C190.487 216.493 190.701 216.479 190.915 216.472C191.268 216.465 191.614 216.479 191.959 216.5C192.022 216.5 192.118 216.514 192.167 216.514C192.305 216.535 192.45 216.562 192.588 216.59C193.245 216.721 193.902 216.908 194.517 217.171C194.566 217.191 194.656 217.24 194.704 217.267C194.856 217.35 195.015 217.426 195.167 217.509C195.513 217.696 195.845 217.91 196.163 218.132C196.19 218.152 196.363 218.284 196.425 218.325C196.481 218.374 196.654 218.526 196.674 218.546C196.965 218.809 197.241 219.086 197.504 219.376C198.417 220.379 200.124 220.302 201.051 219.376C202.046 218.381 201.97 216.832 201.051 215.829L201.071 215.823Z"
            fill="#C5CED9"
          />
          <path
            d="M206.465 208.26C202.026 204.637 196.503 202.508 190.73 202.632C184.971 202.757 179.502 205.045 175.223 208.861C172.81 211.011 176.364 214.551 178.769 212.408C185.503 206.407 195.894 206.075 202.911 211.806C203.962 212.664 205.435 212.829 206.458 211.806C207.343 210.921 207.516 209.117 206.458 208.26H206.465Z"
            fill="#C5CED9"
          />
          <path
            d="M184.023 176.216L153.859 161.027L162.785 193.597L168.578 183.067L176.701 192.988L180.67 189.739L172.553 179.818L184.023 176.216Z"
            fill="#FFFFFE"
          />
          <path d="M113.519 55.8775L69.7832 44.9404L63.0274 71.956L106.763 82.893L113.519 55.8775Z" fill="#F4F4F4" />
          <path d="M69.7793 44.9424L88.2659 63.9199L113.514 55.8864L87.6368 66.4433L69.7793 44.9424Z" fill="#222D4B" />
          <path
            d="M25.9119 113.103C21.3905 115.433 25.0062 122.464 29.5346 120.127C34.056 117.797 30.4402 110.766 25.9119 113.103Z"
            fill="#C5CED9"
          />
          <path
            d="M33.283 99.2143C28.7616 101.544 32.3773 108.575 36.9057 106.238C41.4271 103.909 37.8113 96.8776 33.283 99.2143Z"
            fill="#C5CED9"
          />
          <path
            d="M28.1608 117.46C27.8911 117.598 27.5662 117.605 27.2758 117.46C26.8126 117.211 26.6329 116.637 26.8818 116.174L34.2515 102.285C34.4935 101.821 35.0742 101.642 35.5374 101.891C36.0006 102.139 36.1804 102.713 35.9315 103.176L28.5617 117.066C28.4649 117.245 28.3267 117.377 28.1608 117.467V117.46Z"
            fill="#C5CED9"
          />
          <path
            d="M45.1241 122.174C40.6026 124.504 36.9731 117.487 41.5014 115.15C46.0228 112.82 49.6524 119.837 45.1241 122.174Z"
            fill="#C5CED9"
          />
          <path
            d="M43.7475 119.505C43.5815 119.588 43.388 119.63 43.1875 119.602L27.5976 117.556C27.0791 117.487 26.7127 117.01 26.7818 116.491C26.851 115.973 27.328 115.606 27.8465 115.675L43.4364 117.722C43.9549 117.791 44.3213 118.268 44.2522 118.786C44.2107 119.104 44.0102 119.367 43.7475 119.505Z"
            fill="#C5CED9"
          />
          <path
            d="M144.385 132.728L108.492 138.484C103.035 139.359 99.3207 144.492 100.196 149.949C101.071 155.407 106.204 159.121 111.661 158.246L147.554 152.49C153.011 151.615 156.725 146.482 155.85 141.025C154.975 135.568 149.842 131.853 144.385 132.728Z"
            fill="#222D4B"
          />
          <path
            d="M109.478 152.389L108.119 143.915L113.73 143.015L113.967 144.493L110.148 145.105L110.471 147.124L113.918 146.571L114.155 148.048L110.708 148.601L111.27 152.101L109.478 152.389ZM116.26 151.301L115.241 144.946L117.004 144.663L118.023 151.018L116.26 151.301ZM115.995 143.985C115.733 144.027 115.495 143.976 115.279 143.832C115.066 143.685 114.94 143.489 114.901 143.244C114.862 143.001 114.921 142.778 115.078 142.574C115.237 142.368 115.447 142.243 115.71 142.201C115.972 142.159 116.209 142.212 116.422 142.359C116.638 142.502 116.765 142.696 116.804 142.938C116.843 143.184 116.783 143.41 116.624 143.617C116.467 143.82 116.258 143.943 115.995 143.985ZM119.435 150.792L118.416 144.437L120.125 144.163L120.302 145.272L120.369 145.261C120.421 144.848 120.568 144.519 120.809 144.274C121.049 144.026 121.347 143.873 121.703 143.816C121.791 143.802 121.887 143.793 121.991 143.787C122.095 143.782 122.187 143.783 122.267 143.79L122.518 145.354C122.431 145.342 122.313 145.338 122.164 145.342C122.015 145.347 121.88 145.358 121.758 145.378C121.499 145.419 121.276 145.513 121.09 145.659C120.907 145.802 120.771 145.982 120.685 146.199C120.601 146.416 120.579 146.655 120.621 146.914L121.198 150.509L119.435 150.792ZM126.823 149.735C126.169 149.84 125.585 149.797 125.071 149.608C124.559 149.416 124.137 149.096 123.805 148.648C123.473 148.198 123.253 147.638 123.145 146.968C123.04 146.314 123.075 145.72 123.25 145.185C123.424 144.651 123.72 144.209 124.136 143.859C124.555 143.509 125.077 143.284 125.7 143.184C126.119 143.117 126.521 143.122 126.904 143.199C127.289 143.273 127.638 143.422 127.951 143.646C128.267 143.87 128.534 144.172 128.75 144.554C128.967 144.932 129.118 145.392 129.205 145.932L129.282 146.416L123.916 147.277L123.741 146.184L127.448 145.59C127.408 145.336 127.316 145.12 127.175 144.942C127.033 144.764 126.855 144.635 126.642 144.557C126.43 144.474 126.197 144.454 125.94 144.495C125.672 144.538 125.445 144.638 125.258 144.795C125.074 144.949 124.94 145.139 124.857 145.365C124.774 145.587 124.751 145.824 124.789 146.076L124.955 147.114C125.006 147.429 125.107 147.691 125.26 147.902C125.415 148.112 125.61 148.261 125.845 148.351C126.08 148.441 126.346 148.462 126.641 148.414C126.837 148.383 127.011 148.327 127.165 148.245C127.319 148.164 127.445 148.059 127.543 147.93C127.642 147.801 127.708 147.652 127.743 147.482L129.391 147.328C129.371 147.733 129.256 148.103 129.046 148.436C128.839 148.766 128.547 149.045 128.17 149.272C127.796 149.497 127.347 149.651 126.823 149.735ZM130.903 148.953L129.544 140.48L135.155 139.58L135.392 141.057L131.573 141.669L131.896 143.688L135.343 143.136L135.58 144.613L132.133 145.166L132.695 148.666L130.903 148.953ZM140.11 147.604C139.468 147.707 138.89 147.66 138.377 147.462C137.867 147.261 137.445 146.935 137.113 146.485C136.78 146.032 136.561 145.48 136.457 144.829C136.352 144.172 136.386 143.578 136.561 143.046C136.736 142.512 137.035 142.071 137.457 141.723C137.882 141.372 138.415 141.145 139.058 141.042C139.701 140.939 140.277 140.988 140.788 141.189C141.3 141.387 141.723 141.712 142.056 142.165C142.389 142.616 142.607 143.169 142.713 143.826C142.817 144.477 142.782 145.069 142.607 145.604C142.432 146.135 142.132 146.577 141.708 146.928C141.285 147.276 140.753 147.501 140.11 147.604ZM139.9 146.237C140.192 146.19 140.423 146.069 140.592 145.872C140.761 145.672 140.872 145.419 140.925 145.114C140.98 144.808 140.978 144.47 140.919 144.1C140.86 143.731 140.756 143.409 140.608 143.136C140.462 142.862 140.278 142.657 140.055 142.52C139.832 142.383 139.574 142.338 139.282 142.385C138.987 142.433 138.752 142.557 138.578 142.757C138.406 142.957 138.292 143.21 138.237 143.516C138.184 143.822 138.187 144.159 138.246 144.529C138.306 144.899 138.408 145.22 138.554 145.494C138.702 145.767 138.889 145.972 139.115 146.108C139.343 146.242 139.604 146.285 139.9 146.237ZM144.591 140.24L146.114 142.274L146.953 139.861L148.761 139.571L147.43 143.044L149.83 145.918L148.03 146.207L146.424 144.211L145.544 146.605L143.723 146.897L145.1 143.417L142.77 140.532L144.591 140.24Z"
            fill="#A8B1BD"
          />
          <path
            d="M235.459 242.834C232.5 242.834 229.624 241.908 227.176 240.138C224.107 237.919 222.088 234.635 221.487 230.895C220.249 223.172 225.524 215.886 233.24 214.648C240.955 213.418 248.249 218.686 249.486 226.401C250.088 230.141 249.196 233.888 246.97 236.958C244.744 240.027 241.467 242.046 237.726 242.648C236.966 242.772 236.205 242.827 235.452 242.827L235.459 242.834ZM235.493 216.542C234.857 216.542 234.214 216.591 233.571 216.695C226.983 217.752 222.475 223.974 223.533 230.563C224.045 233.757 225.766 236.557 228.386 238.451C231.007 240.345 234.207 241.113 237.401 240.594C243.99 239.537 248.498 233.314 247.44 226.726C246.486 220.78 241.335 216.535 235.493 216.535V216.542Z"
            fill="#222D4B"
          />
          <path
            d="M237.256 242.689C235.624 242.689 233.965 241.368 232.541 238.914C231.144 236.508 230.059 233.204 229.485 229.616C228.4 222.826 229.347 215.277 233.246 214.655C235.03 214.371 236.876 215.699 238.438 218.395C239.834 220.801 240.92 224.105 241.494 227.694C242.068 231.282 242.068 234.759 241.494 237.483C240.851 240.532 239.51 242.371 237.726 242.661C237.567 242.689 237.408 242.696 237.249 242.696L237.256 242.689ZM233.723 216.687C233.675 216.687 233.626 216.687 233.578 216.701C231.925 216.964 230.349 221.886 231.531 229.291C232.071 232.637 233.066 235.686 234.338 237.877C235.396 239.695 236.571 240.753 237.415 240.608C238.251 240.477 239.046 239.115 239.482 237.054C240.007 234.572 240 231.365 239.461 228.025C238.922 224.686 237.926 221.63 236.654 219.439C235.659 217.724 234.553 216.694 233.73 216.694L233.723 216.687Z"
            fill="#222D4B"
          />
          <path
            d="M231.283 235.078C226.292 235.078 221.957 233.812 221.487 230.895C221.203 229.111 222.531 227.265 225.227 225.703C227.633 224.306 230.938 223.221 234.526 222.647C241.315 221.562 248.864 222.509 249.493 226.408C249.777 228.192 248.449 230.038 245.753 231.6C243.347 232.997 240.043 234.082 236.454 234.656C234.74 234.932 232.977 235.078 231.283 235.078ZM239.787 224.272C238.307 224.272 236.655 224.396 234.851 224.687C231.504 225.226 228.456 226.221 226.264 227.494C224.446 228.551 223.395 229.727 223.533 230.57C223.796 232.222 228.718 233.799 236.123 232.616C239.469 232.077 242.518 231.082 244.709 229.81C246.527 228.752 247.578 227.576 247.44 226.74C247.239 225.489 244.377 224.279 239.787 224.279V224.272Z"
            fill="#222D4B"
          />
          <path
            d="M40.99 220C41.0038 219.764 41.0245 219.529 41.0245 219.287C41.0245 212.443 35.473 206.892 28.6287 206.892C23.2085 206.892 18.6042 210.383 16.9242 215.229C15.9632 214.379 14.7119 213.86 13.3292 213.86C10.3287 213.86 7.9021 216.287 7.9021 219.287C7.9021 219.308 7.9021 219.322 7.9021 219.343C3.45674 219.827 0 223.588 0 228.164C0 233.066 3.97524 237.041 8.8769 237.041H37.5056C42.4072 237.041 46.3825 233.066 46.3825 228.164C46.3825 224.5 44.1633 221.355 40.9969 220H40.99Z"
            fill="#FFFFFE"
          />
          <path
            d="M28.6274 226.657V217.545H19.5154V226.657H17.5312L24.0714 233.771L30.6115 226.657H28.6274Z"
            fill="#222D4B"
          />
          <path
            d="M100.558 144.842C96.0987 137.79 87.1803 133.227 76.098 132.336C70.2423 131.866 64.2621 132.322 58.4825 132.764C54.8391 133.041 51.0712 133.331 47.3587 133.386C35.4675 133.559 26.3002 130.891 20.0919 125.436C16.1651 121.986 13.1785 117.188 11.457 111.568C10.2748 107.71 9.97753 104.371 10.5514 101.343C10.897 99.5105 11.5884 97.8167 12.5493 96.3787C12.3489 95.8187 12.176 95.2863 12.0239 94.7955C7.64078 80.4777 11.222 63.9821 21.1566 52.7754L21.6751 53.2317C11.8995 64.2656 8.3667 80.4984 12.6876 94.595C12.7913 94.9407 12.9088 95.314 13.0471 95.6942C13.9459 94.5397 15.0313 93.5856 16.2481 92.915C19.532 91.1106 23.68 91.5531 26.1205 93.9659C27.4202 95.2518 28.1392 97.1944 28.0424 99.1579C27.9526 100.955 27.2059 102.504 25.9546 103.513C23.2237 105.712 19.2208 104.861 16.8426 102.946C14.9068 101.391 13.6832 99.1924 12.8674 97.1737C12.0931 98.4389 11.5331 99.8976 11.2427 101.46C10.6965 104.371 10.9869 107.613 12.1345 111.353C13.8145 116.856 16.732 121.537 20.569 124.904C26.6459 130.241 35.6611 132.854 47.3725 132.681C51.0643 132.626 54.8183 132.343 58.4548 132.059C64.2621 131.617 70.2699 131.153 76.174 131.63C87.4776 132.543 96.5895 137.217 101.166 144.455L100.586 144.821L100.558 144.842ZM13.3167 96.4754C14.098 98.5218 15.294 100.831 17.2574 102.414C19.4283 104.163 23.0509 104.951 25.4983 102.981C26.5975 102.096 27.2474 100.727 27.3304 99.1302C27.4202 97.3604 26.7773 95.6182 25.6158 94.4636C23.4242 92.2997 19.5389 91.8987 16.5661 93.5303C15.3078 94.2217 14.2017 95.2379 13.3167 96.4824V96.4754Z"
            fill="#A8B1BD"
          />
          <path
            d="M24.7444 28.7161C31.8238 20.6965 40.8597 19.6249 46.4666 24.568C52.0803 29.5181 52.1287 38.6162 45.0493 46.6358C44.5654 47.182 42.5397 49.4289 41.0395 51.0466C40.7284 51.3785 40.4449 51.6826 40.203 51.9454C39.878 52.2841 39.6222 52.5537 39.4701 52.6782C32.7433 58.7828 26.8392 57.7803 21.6126 54.1992C21.343 54.0194 21.0872 53.8189 20.8383 53.5977C20.5894 53.3764 20.3544 53.1483 20.147 52.9063C15.9574 48.1637 14.2221 42.4255 19.4487 35.0004C19.5593 34.8414 19.7875 34.5511 20.0847 34.1846C20.306 33.9081 20.5756 33.5832 20.8729 33.2375C22.2901 31.5437 24.2674 29.2553 24.7444 28.7161Z"
            fill="#F4F4F4"
          />
          <path d="M30.9772 41.2072L20.3848 53.2051L21.2917 54.0058L31.8842 42.0079L30.9772 41.2072Z" fill="#C5CED9" />
          <path
            d="M24.2799 48.2416L25.7414 49.5319C26.0935 49.8428 26.6309 49.8093 26.9417 49.4573L30.1263 45.8501C30.4371 45.498 30.4037 44.9607 30.0516 44.6498L28.5901 43.3595C28.2381 43.0487 27.7007 43.0821 27.3899 43.4342L24.2053 47.0413C23.8944 47.3934 23.9279 47.9308 24.2799 48.2416Z"
            fill="#222D4B"
          />
          <path
            d="M20.8721 33.2441C24.799 35.5463 28.4562 38.1873 31.8231 41.1601C35.1899 44.1329 38.2664 47.4306 41.0387 51.0532C40.7276 51.3851 40.4442 51.6893 40.2022 51.952C34.6991 44.7205 27.9377 38.7542 20.084 34.1913C20.3052 33.9147 20.5748 33.5898 20.8721 33.2441Z"
            fill="#C5CED9"
          />
          <path d="M228.894 20.1458L208.748 0L197.402 11.3464L217.547 31.4921L228.894 20.1458Z" fill="#FFFFFE" />
          <path d="M216.362 10.4157L209.146 3.2002L200.606 11.7405L207.822 18.956L216.362 10.4157Z" fill="#222D4B" />
          <path d="M225.481 19.5368L218.266 12.3213L209.725 20.8616L216.941 28.0771L225.481 19.5368Z" fill="#222D4B" />
          <path d="M224.829 38.7634L244.975 58.9092L256.321 47.5628L236.175 27.4171L224.829 38.7634Z" fill="#FFFFFE" />
          <path d="M237.361 48.4925L244.576 55.708L253.116 47.1677L245.901 39.9522L237.361 48.4925Z" fill="#222D4B" />
          <path d="M228.245 39.3743L235.461 46.5898L244.001 38.0495L236.786 30.834L228.245 39.3743Z" fill="#222D4B" />
          <path
            d="M234.731 39.3565C231.572 42.516 226.643 39.4948 221.734 34.5862C216.825 29.6776 213.797 24.7483 216.964 21.5889C220.123 18.4294 228.281 18.2289 233.183 23.1375C238.091 28.0461 237.891 36.197 234.731 39.3565Z"
            fill="#A8B1BD"
          />
          <path
            d="M233.789 47.0382C230.084 50.7439 221.587 48.2619 214.819 41.4936C208.05 34.7253 205.568 26.2287 209.274 22.5231C212.98 18.8174 221.476 21.2994 228.245 28.0677C235.013 34.836 237.495 43.3326 233.789 47.0382Z"
            fill="#FFFFFE"
          />
          <path
            d="M232.813 46.0708C229.654 49.2303 222.035 46.7414 215.806 40.5124C209.57 34.2764 207.081 26.6647 210.248 23.5052C213.414 20.3458 221.026 22.8346 227.255 29.0637C233.484 35.2927 235.98 42.9114 232.813 46.0708Z"
            fill="#222D4B"
          />
          <path
            d="M214.163 45.8137C213.154 46.8231 211.509 46.8231 210.499 45.8137C209.49 44.8044 209.49 43.159 210.499 42.1496C211.509 41.1402 213.154 41.1402 214.163 42.1496C215.173 43.159 215.173 44.8044 214.163 45.8137Z"
            fill="#A8B1BD"
          />
          <path
            d="M211.979 43.6358L220.967 33.8255C221.368 33.3831 222.052 33.3554 222.488 33.7564C222.923 34.1574 222.958 34.8418 222.557 35.2774C222.536 35.2981 222.515 35.3258 222.488 35.3465L212.678 44.334C212.477 44.5207 212.159 44.5068 211.979 44.3064C211.806 44.1128 211.806 43.8224 211.979 43.6358Z"
            fill="#A8B1BD"
          />
          <path
            d="M228.495 87.8615C234.123 82.234 225.294 64.252 208.813 47.7703C192.331 31.2886 174.349 22.4601 168.721 28.0876C167.74 29.0694 167.187 30.4313 167.035 32.1113C156.236 26.5321 147.393 25.1079 143.28 29.2215C140.805 31.6965 140.252 35.893 141.565 41.3961C127.531 34.0885 116.041 32.1942 110.724 37.5107C105.871 42.364 107.032 52.3678 112.826 64.7498C112.992 64.7221 113.158 64.6876 113.324 64.6599C107.565 52.4646 106.369 42.6405 111.111 37.8979C113.103 35.9068 115.992 34.9596 119.58 34.9596C125.409 34.9596 133.082 37.4623 141.724 42.0321C142.485 44.9427 143.736 48.2059 145.499 51.7663C148.389 57.6013 152.44 63.858 157.363 70.1769C157.722 70.3359 158.082 70.4949 158.441 70.6539C153.249 64.093 148.997 57.5736 145.997 51.5174C144.345 48.1851 143.142 45.1224 142.374 42.3778C154.77 49.0424 169.102 59.8758 182.894 73.6682C196.679 87.4536 207.52 101.792 214.184 114.188C211.44 113.428 208.377 112.218 205.045 110.565C201.775 108.941 198.366 106.957 194.889 104.647C195.062 104.972 195.241 105.29 195.414 105.615C202.459 110.185 209.027 113.345 214.502 114.776C221.907 128.769 223.912 140.21 218.671 145.444C215.719 148.396 210.728 149.108 204.153 147.635C204.139 147.815 204.132 148.002 204.118 148.182C206.331 148.672 208.37 148.921 210.216 148.921C214.005 148.921 216.998 147.898 219.058 145.831C224.389 140.501 222.474 128.99 215.145 114.928C217.095 115.398 218.899 115.647 220.531 115.647C223.414 115.647 225.751 114.886 227.355 113.275C231.468 109.162 230.044 100.313 224.451 89.5C226.124 89.3687 227.5 88.8294 228.488 87.8408L228.495 87.8615ZM169.115 28.4817C170.194 27.4032 171.763 26.8916 173.706 26.8916C181.511 26.8916 195.407 35.1463 208.425 48.1644C224.693 64.4318 233.521 82.0611 228.108 87.4744C227.161 88.4215 225.834 88.9262 224.216 89.0368C219.065 79.2335 210.534 67.8678 199.632 56.9652C188.729 46.0627 177.363 37.5384 167.56 32.3878C167.671 30.7424 168.182 29.4219 169.115 28.4886V28.4817ZM199.237 57.3524C210.043 68.1581 218.512 79.3925 223.663 89.0645C215.892 89.1751 201.899 80.8997 188.798 67.7986C180.889 59.8896 174.494 51.4137 170.789 43.9471C168.597 39.5225 167.512 35.7893 167.546 32.9409C177.211 38.0914 188.446 46.5535 199.244 57.3524H199.237ZM226.974 112.916C224.568 115.322 220.386 115.785 214.855 114.375C208.197 101.806 197.253 87.2601 183.295 73.2948C169.337 59.3365 154.791 48.3925 142.215 41.7348C140.798 36.2041 141.261 32.0283 143.674 29.6155C145.209 28.0807 147.435 27.3479 150.207 27.3479C154.639 27.3479 160.453 29.2215 167.007 32.6505C166.903 35.6372 167.995 39.5571 170.291 44.1822C174.024 51.7041 180.454 60.2284 188.404 68.1789C201.512 81.2868 215.574 89.5553 223.614 89.5553C223.718 89.5553 223.815 89.5484 223.919 89.5484C229.498 100.209 230.977 108.906 226.974 112.909V112.916Z"
            fill="#FFFFFE"
          />
          <path
            d="M234.799 159.696C233.785 159.696 232.779 159.314 232.006 158.541L187.122 113.657C185.577 112.111 185.577 109.607 187.122 108.061C188.667 106.516 191.172 106.516 192.717 108.061L237.602 152.946C239.147 154.491 239.147 156.996 237.602 158.541C236.829 159.314 235.814 159.696 234.809 159.696H234.799Z"
            fill="#F4F4F4"
          />
          <path
            d="M235.852 163.239C234.278 163.239 232.705 162.634 231.504 161.442L206.897 136.835C204.495 134.433 204.495 130.541 206.897 128.139C209.299 125.737 213.191 125.737 215.593 128.139L240.2 152.746C242.602 155.148 242.602 159.04 240.2 161.442C238.999 162.643 237.425 163.248 235.852 163.248V163.239Z"
            fill="#222D4B"
          />
          <path
            d="M199.447 87.8665C199.447 105.826 184.885 120.387 166.917 120.387C165.697 120.387 164.487 120.312 163.295 120.182C160.791 119.912 158.379 119.344 156.089 118.543C153.687 117.696 151.425 116.588 149.321 115.22C145.708 112.892 142.58 109.866 140.15 106.329C136.51 101.087 134.396 94.7281 134.396 87.8665C134.396 70.1493 148.557 55.7465 166.172 55.3555C166.414 55.3555 166.666 55.3555 166.908 55.3555C171.088 55.3555 175.082 56.1468 178.75 57.5806C181.115 58.5023 183.349 59.694 185.398 61.1185C187.427 62.5243 189.289 64.1629 190.956 65.9784C196.216 71.7507 199.428 79.4408 199.428 87.8758L199.447 87.8665Z"
            fill="#F4F4F4"
          />
          <path
            d="M166.919 124.334C146.809 124.334 130.441 107.976 130.441 87.8571C130.441 67.7378 146.809 51.3799 166.919 51.3799C187.029 51.3799 203.396 67.7471 203.396 87.8571C203.396 107.967 187.038 124.334 166.919 124.334ZM166.919 59.2935C151.166 59.2935 138.355 72.1043 138.355 87.8571C138.355 103.61 151.175 116.421 166.919 116.421C182.662 116.421 195.482 103.61 195.482 87.8571C195.482 72.1043 182.671 59.2935 166.919 59.2935Z"
            fill="#222D4B"
          />
          <path
            d="M177.65 78.6104L156.295 99.9661"
            stroke="#E50500"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M177.65 99.9668L156.295 78.611"
            stroke="#E50500"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M163.777 206.12L103.479 191.966L93.974 232.457L154.273 246.611L163.777 206.12Z" fill="white" />
          <path d="M159.774 208.348L106.064 195.74L97.9692 230.227L151.679 242.835L159.774 208.348Z" fill="#222D4B" />
          <path
            d="M153.887 233.459L144.955 219.044L133.368 226.22L120.861 206.047L100.715 218.533L97.9707 230.223L151.681 242.833L153.887 233.459Z"
            fill="#C5CED9"
          />
          <path
            d="M141.241 212.691C140.55 215.65 137.591 217.482 134.632 216.784C131.673 216.093 129.841 213.134 130.539 210.175C131.23 207.216 134.189 205.384 137.148 206.082C140.107 206.773 141.939 209.732 141.241 212.691Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;

    case 'android':
      iconElement = (
        <svg width="111" height="32" viewBox="0 0 111 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M106.889 32H4.11111C1.85103 32 0 30.199 0 28V4C0 1.801 1.85103 1.69118e-06 4.11111 1.69118e-06H106.889C109.149 1.69118e-06 111 1.801 111 4V28C111 30.199 109.149 32 106.889 32Z"
            fill="black"
          />
          <path
            d="M106.889 0.641C108.792 0.641 110.341 2.148 110.341 4V28C110.341 29.852 108.792 31.359 106.889 31.359H4.11111C2.20767 31.359 0.658805 29.852 0.658805 28V4C0.658805 2.148 2.20767 0.641 4.11111 0.641H106.889ZM106.889 1.69118e-06H4.11111C1.85103 1.69118e-06 0 1.801 0 4V28C0 30.199 1.85103 32 4.11111 32H106.889C109.149 32 111 30.199 111 28V4C111 1.801 109.149 1.69118e-06 106.889 1.69118e-06Z"
            fill="white"
          />
          <path
            d="M38.9878 8.1947C38.9878 8.8627 38.7822 9.3977 38.3773 9.7967C37.9117 10.2697 37.3053 10.5077 36.5622 10.5077C35.852 10.5077 35.2456 10.2657 34.7482 9.7887C34.2497 9.3047 34.001 8.7107 34.001 7.9997C34.001 7.2887 34.2497 6.6947 34.7482 6.2147C35.2456 5.7337 35.852 5.4917 36.5622 5.4917C36.9158 5.4917 37.2529 5.5627 37.5746 5.6947C37.8952 5.8277 38.1563 6.0077 38.3454 6.2297L37.9158 6.6517C37.5859 6.2727 37.1367 6.0857 36.5622 6.0857C36.0442 6.0857 35.5951 6.2617 35.2138 6.6167C34.8366 6.9727 34.6474 7.4337 34.6474 7.9997C34.6474 8.5657 34.8366 9.0307 35.2138 9.3867C35.5951 9.7377 36.0442 9.9177 36.5622 9.9177C37.1121 9.9177 37.5746 9.7377 37.9394 9.3827C38.1799 9.1477 38.3166 8.8237 38.3526 8.4097H36.5622V7.8317H38.9508C38.9795 7.9567 38.9878 8.0777 38.9878 8.1947Z"
            fill="white"
            stroke="white"
            strokeWidth="0.16"
            strokeMiterlimit="10"
          />
          <path
            d="M42.7772 6.19105H40.5336V7.71105H42.5563V8.28905H40.5336V9.80905H42.7772V10.398H39.8984V5.60205H42.7772V6.19105Z"
            fill="white"
            stroke="white"
            strokeWidth="0.16"
            strokeMiterlimit="10"
          />
          <path
            d="M45.4518 10.398H44.8166V6.19105H43.4404V5.60205H46.829V6.19105H45.4518V10.398Z"
            fill="white"
            stroke="white"
            strokeWidth="0.16"
            strokeMiterlimit="10"
          />
          <path
            d="M49.2803 10.398V5.60205H49.9144V10.398H49.2803Z"
            fill="white"
            stroke="white"
            strokeWidth="0.16"
            strokeMiterlimit="10"
          />
          <path
            d="M52.7262 10.398H52.0962V6.19105H50.7148V5.60205H54.1075V6.19105H52.7262V10.398Z"
            fill="white"
            stroke="white"
            strokeWidth="0.16"
            strokeMiterlimit="10"
          />
          <path
            d="M60.5222 9.7807C60.036 10.2657 59.4337 10.5077 58.7153 10.5077C57.9928 10.5077 57.3905 10.2657 56.9044 9.7807C56.4193 9.2967 56.1777 8.7027 56.1777 7.9997C56.1777 7.2967 56.4193 6.7027 56.9044 6.2187C57.3905 5.7337 57.9928 5.4917 58.7153 5.4917C59.4296 5.4917 60.0319 5.7337 60.518 6.2227C61.0073 6.7107 61.2488 7.3007 61.2488 7.9997C61.2488 8.7027 61.0073 9.2967 60.5222 9.7807ZM57.3741 9.3787C57.74 9.7377 58.185 9.9177 58.7153 9.9177C59.2415 9.9177 59.6907 9.7377 60.0525 9.3787C60.4173 9.0197 60.6023 8.5587 60.6023 7.9997C60.6023 7.4407 60.4173 6.9797 60.0525 6.6207C59.6907 6.2617 59.2415 6.0817 58.7153 6.0817C58.185 6.0817 57.74 6.2617 57.3741 6.6207C57.0092 6.9797 56.8242 7.4407 56.8242 7.9997C56.8242 8.5587 57.0092 9.0197 57.3741 9.3787Z"
            fill="white"
            stroke="white"
            strokeWidth="0.16"
            strokeMiterlimit="10"
          />
          <path
            d="M62.1406 10.398V5.60205H62.9115L65.3082 9.33205H65.336L65.3082 8.41005V5.60205H65.9424V10.398H65.2805L62.7707 6.48405H62.7429L62.7707 7.41005V10.398H62.1406Z"
            fill="white"
            stroke="white"
            strokeWidth="0.16"
            strokeMiterlimit="10"
          />
          <path
            d="M56.0213 17.4022C54.0901 17.4022 52.5124 18.8322 52.5124 20.8052C52.5124 22.7622 54.0901 24.2072 56.0213 24.2072C57.9566 24.2072 59.5342 22.7622 59.5342 20.8052C59.5342 18.8322 57.9566 17.4022 56.0213 17.4022ZM56.0213 22.8672C54.9616 22.8672 54.05 22.0162 54.05 20.8052C54.05 19.5782 54.9616 18.7422 56.0213 18.7422C57.0809 18.7422 57.9967 19.5782 57.9967 20.8052C57.9967 22.0162 57.0809 22.8672 56.0213 22.8672ZM48.3654 17.4022C46.43 17.4022 44.8565 18.8322 44.8565 20.8052C44.8565 22.7622 46.43 24.2072 48.3654 24.2072C50.2996 24.2072 51.8742 22.7622 51.8742 20.8052C51.8742 18.8322 50.2996 17.4022 48.3654 17.4022ZM48.3654 22.8672C47.3047 22.8672 46.39 22.0162 46.39 20.8052C46.39 19.5782 47.3047 18.7422 48.3654 18.7422C49.425 18.7422 50.3366 19.5782 50.3366 20.8052C50.3366 22.0162 49.425 22.8672 48.3654 22.8672ZM39.2551 18.4452V19.8912H42.804C42.7002 20.6992 42.4227 21.2932 41.9972 21.7072C41.4792 22.2072 40.6724 22.7622 39.2551 22.7622C37.0711 22.7622 35.3609 21.0472 35.3609 18.9222C35.3609 16.7972 37.0711 15.0822 39.2551 15.0822C40.4361 15.0822 41.2953 15.5312 41.9294 16.1132L42.9767 15.0942C42.0897 14.2702 40.9099 13.6372 39.2551 13.6372C36.2602 13.6372 33.7432 16.0082 33.7432 18.9222C33.7432 21.8362 36.2602 24.2072 39.2551 24.2072C40.8739 24.2072 42.0897 23.6912 43.0456 22.7232C44.025 21.7702 44.3303 20.4302 44.3303 19.3482C44.3303 19.0122 44.3015 18.7032 44.2501 18.4452H39.2551ZM76.508 19.5662C76.2192 18.8052 75.3281 17.4022 73.513 17.4022C71.7144 17.4022 70.2169 18.7812 70.2169 20.8052C70.2169 22.7112 71.699 24.2072 73.6857 24.2072C75.2921 24.2072 76.2191 23.2542 76.6005 22.6992L75.4082 21.9262C75.0105 22.4922 74.4688 22.8672 73.6857 22.8672C72.9077 22.8672 72.3496 22.5202 71.9919 21.8362L76.6693 19.9532L76.508 19.5662ZM71.7391 20.6992C71.699 19.3872 72.7864 18.7152 73.5654 18.7152C74.1759 18.7152 74.6939 19.0122 74.8666 19.4372L71.7391 20.6992ZM67.9373 24.0002H69.4749V14.0002H67.9373V24.0002ZM65.4193 18.1602H65.3679C65.0225 17.7622 64.3637 17.4022 63.5292 17.4022C61.7779 17.4022 60.1766 18.8982 60.1766 20.8162C60.1766 22.7232 61.7779 24.2072 63.5292 24.2072C64.3637 24.2072 65.0225 23.8442 65.3679 23.4342H65.4193V23.9222C65.4193 25.2232 64.705 25.9222 63.5528 25.9222C62.6134 25.9222 62.0307 25.2622 61.7902 24.7072L60.453 25.2502C60.8385 26.1522 61.859 27.2622 63.5528 27.2622C65.3555 27.2622 66.8767 26.2302 66.8767 23.7192V17.6092H65.4193V18.1602ZM63.6607 22.8672C62.6011 22.8672 61.7141 22.0042 61.7141 20.8162C61.7141 19.6172 62.6011 18.7422 63.6607 18.7422C64.705 18.7422 65.5282 19.6172 65.5282 20.8162C65.5282 22.0042 64.705 22.8672 63.6607 22.8672ZM83.7065 14.0002H80.0291V24.0002H81.5626V20.2112H83.7065C85.4095 20.2112 87.0797 19.0122 87.0797 17.1052C87.0797 15.1992 85.4054 14.0002 83.7065 14.0002ZM83.7466 18.8202H81.5626V15.3912H83.7466C84.8915 15.3912 85.5452 16.3162 85.5452 17.1052C85.5452 17.8792 84.8915 18.8202 83.7466 18.8202ZM93.2258 17.3832C92.1178 17.3832 90.9657 17.8592 90.4919 18.9142L91.8527 19.4692C92.1456 18.9142 92.6841 18.7342 93.2535 18.7342C94.049 18.7342 94.8558 19.1992 94.8682 20.0202V20.1252C94.5907 19.9692 93.9966 19.7382 93.2659 19.7382C91.8003 19.7382 90.3069 20.5232 90.3069 21.9882C90.3069 23.3282 91.5073 24.1912 92.8568 24.1912C93.8887 24.1912 94.4581 23.7382 94.8158 23.2112H94.8682V23.9842H96.3492V20.1482C96.3492 18.3752 94.9884 17.3832 93.2258 17.3832ZM93.0408 22.8632C92.5392 22.8632 91.8403 22.6212 91.8403 22.0162C91.8403 21.2422 92.7119 20.9452 93.4663 20.9452C94.1415 20.9452 94.4581 21.0902 94.8682 21.2812C94.7479 22.2072 93.9288 22.8632 93.0408 22.8632ZM101.745 17.6022L99.9824 21.9372H99.93L98.1077 17.6022H96.454L99.192 23.6602L97.6298 27.0312H99.2321L103.451 17.6022H101.745ZM87.9225 24.0002H89.46V14.0002H87.9225V24.0002Z"
            fill="white"
          />
          <path
            d="M8.58052 6.03085C8.339 6.27685 8.19922 6.65985 8.19922 7.15585V24.8479C8.19922 25.3439 8.339 25.7269 8.58052 25.9729L8.64014 26.0269L18.8295 16.1169V15.8829L8.64014 5.97285L8.58052 6.03085Z"
            fill="url(#paint0_linear_7312_23506)"
          />
          <path
            d="M22.2218 19.4219L18.8291 16.1169V15.8829L22.2259 12.5779L22.302 12.6209L26.3247 14.8479C27.4727 15.4799 27.4727 16.5199 26.3247 17.1559L22.302 19.3789L22.2218 19.4219Z"
            fill="url(#paint1_linear_7312_23506)"
          />
          <path
            d="M22.3019 19.379L18.8291 16L8.58008 25.973C8.96138 26.363 9.58319 26.41 10.2903 26.02L22.3019 19.379Z"
            fill="url(#paint2_linear_7312_23506)"
          />
          <path
            d="M22.3019 12.621L10.2903 5.98C9.58319 5.594 8.96138 5.641 8.58008 6.031L18.8291 16L22.3019 12.621Z"
            fill="url(#paint3_linear_7312_23506)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7312_23506"
              x1="17.9248"
              y1="25.0321"
              x2="4.50394"
              y2="11.2384"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00A0FF" />
              <stop offset="0.0066" stopColor="#00A1FF" />
              <stop offset="0.2601" stopColor="#00BEFF" />
              <stop offset="0.5122" stopColor="#00D2FF" />
              <stop offset="0.7604" stopColor="#00DFFF" />
              <stop offset="1" stopColor="#00E3FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_7312_23506"
              x1="27.8196"
              y1="15.9988"
              x2="7.92438"
              y2="15.9988"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE000" />
              <stop offset="0.4087" stopColor="#FFBD00" />
              <stop offset="0.7754" stopColor="#FFA500" />
              <stop offset="1" stopColor="#FF9C00" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_7312_23506"
              x1="20.4135"
              y1="14.1631"
              x2="2.21369"
              y2="-4.54226"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF3A44" />
              <stop offset="1" stopColor="#C31162" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_7312_23506"
              x1="6.00019"
              y1="31.859"
              x2="14.1272"
              y2="23.5063"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32A071" />
              <stop offset="0.0685" stopColor="#2DA771" />
              <stop offset="0.4762" stopColor="#15CF74" />
              <stop offset="0.8009" stopColor="#06E775" />
              <stop offset="1" stopColor="#00F076" />
            </linearGradient>
          </defs>
        </svg>
      );
      break;

    case 'ios':
      iconElement = (
        <svg width="111" height="32" viewBox="0 0 111 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M110.383 28.3093C110.383 30.0146 108.97 31.396 107.222 31.396H3.78121C2.03424 31.396 0.616211 30.0146 0.616211 28.3093V3.69421C0.616211 1.98969 2.03424 0.603516 3.78121 0.603516H107.221C108.97 0.603516 110.382 1.98969 110.382 3.69421L110.383 28.3093Z"
            fill="black"
          />
          <path
            d="M106.889 0.641C108.792 0.641 110.341 2.148 110.341 4V28C110.341 29.852 108.792 31.359 106.889 31.359H4.11111C2.20767 31.359 0.658805 29.852 0.658805 28V4C0.658805 2.148 2.20767 0.641 4.11111 0.641H106.889ZM106.889 1.69118e-06H4.11111C1.85103 1.69118e-06 0 1.801 0 4V28C0 30.199 1.85103 32 4.11111 32H106.889C109.149 32 111 30.199 111 28V4C111 1.801 109.149 1.69118e-06 106.889 1.69118e-06Z"
            fill="white"
          />
          <path
            d="M24.7717 15.8272C24.7479 13.2488 26.9415 11.9944 27.0419 11.936C25.7995 10.1736 23.8738 9.93283 23.1971 9.91363C21.5798 9.74803 20.011 10.8552 19.1872 10.8552C18.3469 10.8552 17.0782 9.92963 15.7108 9.95683C13.9513 9.98323 12.3052 10.9744 11.4024 12.5136C9.53921 15.652 10.9288 20.264 12.7138 22.8008C13.6067 24.0432 14.6501 25.4304 16.0159 25.3816C17.352 25.328 17.8511 24.5528 19.4634 24.5528C21.061 24.5528 21.5297 25.3816 22.9225 25.3504C24.3565 25.328 25.2593 24.1024 26.121 22.8488C27.1529 21.4248 27.5673 20.0224 27.5837 19.9504C27.55 19.9392 24.7988 18.9176 24.7717 15.8272Z"
            fill="white"
          />
          <path
            d="M22.1406 8.24483C22.8592 7.37043 23.3509 6.18083 23.2144 4.97363C22.1743 5.01843 20.8735 5.67363 20.1245 6.52883C19.4618 7.28243 18.8698 8.51763 19.0227 9.67923C20.1911 9.76403 21.3907 9.10563 22.1406 8.24483Z"
            fill="white"
          />
          <path
            d="M44.1078 25.203H42.2405L41.2177 22.0758H37.6624L36.688 25.203H34.8701L38.3925 14.5566H40.5681L44.1078 25.203ZM40.9093 20.7638L39.9843 17.9838C39.8865 17.6998 39.7031 17.031 39.4326 15.9782H39.3997C39.292 16.431 39.1185 17.0998 38.8801 17.9838L37.9715 20.7638H40.9093Z"
            fill="white"
          />
          <path
            d="M53.1665 21.2703C53.1665 22.5759 52.8039 23.6079 52.0787 24.3655C51.4292 25.0399 50.6226 25.3767 49.6597 25.3767C48.6204 25.3767 47.8739 25.0135 47.4192 24.2871H47.3863V28.3311H45.6333V20.0535C45.6333 19.2327 45.6111 18.3903 45.5684 17.5263H47.11L47.2079 18.7431H47.2408C47.8254 17.8263 48.7125 17.3687 49.9031 17.3687C50.8339 17.3687 51.6109 17.7263 52.2325 18.4423C52.8557 19.1591 53.1665 20.1015 53.1665 21.2703ZM51.3806 21.3327C51.3806 20.5855 51.208 19.9695 50.861 19.4847C50.482 18.9791 49.973 18.7263 49.335 18.7263C48.9025 18.7263 48.5094 18.8671 48.1584 19.1447C47.8064 19.4247 47.5762 19.7903 47.4685 20.2431C47.4142 20.4543 47.3871 20.6271 47.3871 20.7631V22.0431C47.3871 22.6015 47.5631 23.0727 47.915 23.4575C48.2669 23.8423 48.724 24.0343 49.2864 24.0343C49.9467 24.0343 50.4606 23.7863 50.8281 23.2919C51.1965 22.7967 51.3806 22.1439 51.3806 21.3327Z"
            fill="white"
          />
          <path
            d="M62.2409 21.2703C62.2409 22.5759 61.8783 23.6079 61.1523 24.3655C60.5035 25.0399 59.6969 25.3767 58.7341 25.3767C57.6948 25.3767 56.9482 25.0135 56.4944 24.2871H56.4615V28.3311H54.7085V20.0535C54.7085 19.2327 54.6863 18.3903 54.6436 17.5263H56.1852L56.2831 18.7431H56.316C56.8997 17.8263 57.7869 17.3687 58.9783 17.3687C59.9082 17.3687 60.6852 17.7263 61.3085 18.4423C61.9293 19.1591 62.2409 20.1015 62.2409 21.2703ZM60.455 21.3327C60.455 20.5855 60.2815 19.9695 59.9346 19.4847C59.5555 18.9791 59.0482 18.7263 58.4093 18.7263C57.976 18.7263 57.5838 18.8671 57.2319 19.1447C56.88 19.4247 56.6506 19.7903 56.5429 20.2431C56.4894 20.4543 56.4615 20.6271 56.4615 20.7631V22.0431C56.4615 22.6015 56.6374 23.0727 56.9877 23.4575C57.3396 23.8415 57.7968 24.0343 58.3608 24.0343C59.0211 24.0343 59.535 23.7863 59.9025 23.2919C60.2708 22.7967 60.455 22.1439 60.455 21.3327Z"
            fill="white"
          />
          <path
            d="M72.3879 22.2177C72.3879 23.1233 72.0647 23.8601 71.416 24.4289C70.7031 25.0505 69.7107 25.3609 68.4355 25.3609C67.258 25.3609 66.3141 25.1401 65.5996 24.6977L66.0058 23.2761C66.7754 23.7289 67.6198 23.9561 68.5399 23.9561C69.2001 23.9561 69.714 23.8105 70.0832 23.5209C70.4507 23.2313 70.6341 22.8425 70.6341 22.3577C70.6341 21.9257 70.4828 21.5617 70.1794 21.2665C69.8776 20.9713 69.3736 20.6969 68.6698 20.4433C66.754 19.7481 65.7969 18.7297 65.7969 17.3905C65.7969 16.5153 66.1324 15.7977 66.8042 15.2393C67.4735 14.6801 68.3664 14.4009 69.483 14.4009C70.4787 14.4009 71.3058 14.5697 71.9661 14.9065L71.5278 16.2969C70.9112 15.9705 70.2139 15.8073 69.4336 15.8073C68.817 15.8073 68.3351 15.9553 67.9898 16.2497C67.6979 16.5129 67.5516 16.8337 67.5516 17.2137C67.5516 17.6345 67.7185 17.9825 68.0539 18.2561C68.3458 18.5089 68.8762 18.7825 69.6458 19.0777C70.5872 19.4465 71.2787 19.8777 71.7235 20.3721C72.1667 20.8649 72.3879 21.4817 72.3879 22.2177Z"
            fill="white"
          />
          <path
            d="M78.183 18.8066H76.2508V22.5338C76.2508 23.4818 76.5912 23.9554 77.2736 23.9554C77.5869 23.9554 77.8467 23.929 78.0523 23.8762L78.1008 25.1714C77.7554 25.297 77.3008 25.3602 76.7375 25.3602C76.0452 25.3602 75.5042 25.1546 75.1136 24.7442C74.7247 24.333 74.529 23.6434 74.529 22.6746V18.805H73.3779V17.525H74.529V16.1194L76.2508 15.6138V17.525H78.183V18.8066Z"
            fill="white"
          />
          <path
            d="M86.9019 21.3016C86.9019 22.4816 86.5549 23.4504 85.8626 24.208C85.1366 24.988 84.1729 25.3768 82.9717 25.3768C81.814 25.3768 80.8923 25.0032 80.2049 24.256C79.5175 23.5088 79.1738 22.5656 79.1738 21.4288C79.1738 20.2392 79.5274 19.2648 80.237 18.5072C80.9449 17.7488 81.9003 17.3696 83.1016 17.3696C84.2593 17.3696 85.1908 17.7432 85.8938 18.4912C86.5664 19.2168 86.9019 20.1536 86.9019 21.3016ZM85.0831 21.3568C85.0831 20.6488 84.9277 20.0416 84.6128 19.5352C84.2453 18.9224 83.7199 18.6168 83.0391 18.6168C82.3344 18.6168 81.7992 18.9232 81.4317 19.5352C81.1167 20.0424 80.9613 20.6592 80.9613 21.3888C80.9613 22.0968 81.1167 22.704 81.4317 23.2096C81.8107 23.8224 82.3402 24.128 83.0235 24.128C83.6928 24.128 84.2182 23.816 84.5972 23.1936C84.9203 22.6776 85.0831 22.064 85.0831 21.3568Z"
            fill="white"
          />
          <path
            d="M92.5992 19.0263C92.4258 18.9951 92.2407 18.9791 92.0467 18.9791C91.43 18.9791 90.9531 19.2055 90.6177 19.6591C90.3258 20.0591 90.1794 20.5647 90.1794 21.1751V25.2031H88.4273L88.4437 19.9439C88.4437 19.0591 88.4215 18.2535 88.3779 17.5271H89.9048L89.9689 18.9959H90.0175C90.2025 18.4911 90.4943 18.0847 90.8939 17.7799C91.2845 17.5055 91.7063 17.3687 92.161 17.3687C92.323 17.3687 92.4693 17.3799 92.5992 17.3999V19.0263Z"
            fill="white"
          />
          <path
            d="M100.439 21.0017C100.439 21.3073 100.418 21.5649 100.375 21.7753H95.1156C95.1362 22.5337 95.3902 23.1137 95.8786 23.5137C96.3218 23.8713 96.8949 24.0505 97.5987 24.0505C98.3774 24.0505 99.0878 23.9297 99.7266 23.6873L100.001 24.8713C99.2547 25.1881 98.3732 25.3457 97.3562 25.3457C96.1327 25.3457 95.1723 24.9953 94.4734 24.2953C93.7762 23.5953 93.4268 22.6553 93.4268 21.4761C93.4268 20.3185 93.7515 19.3545 94.4019 18.5857C95.0827 17.7649 96.0028 17.3545 97.1605 17.3545C98.2976 17.3545 99.1585 17.7649 99.7431 18.5857C100.206 19.2377 100.439 20.0441 100.439 21.0017ZM98.7671 20.5593C98.7786 20.0537 98.6643 19.6169 98.4267 19.2481C98.1233 18.7737 97.6571 18.5369 97.0297 18.5369C96.4566 18.5369 95.9904 18.7681 95.6344 19.2321C95.3425 19.6009 95.169 20.0433 95.1156 20.5585H98.7671V20.5593Z"
            fill="white"
          />
          <path
            d="M40.3307 8.00745C40.3307 8.94905 40.0405 9.65785 39.4608 10.1339C38.9239 10.5731 38.1609 10.7931 37.1726 10.7931C36.6825 10.7931 36.2632 10.7723 35.9121 10.7307V5.58585C36.3701 5.51385 36.8634 5.47705 37.3962 5.47705C38.3377 5.47705 39.0472 5.67625 39.5258 6.07465C40.0619 6.52505 40.3307 7.16905 40.3307 8.00745ZM39.4222 8.03065C39.4222 7.42025 39.2561 6.95225 38.9239 6.62585C38.5917 6.30025 38.1066 6.13705 37.4678 6.13705C37.1964 6.13705 36.9654 6.15465 36.7738 6.19145V10.1027C36.8799 10.1187 37.0739 10.1259 37.3559 10.1259C38.0154 10.1259 38.5243 9.94745 38.8828 9.59065C39.2413 9.23385 39.4222 8.71385 39.4222 8.03065Z"
            fill="white"
          />
          <path
            d="M45.1478 8.82964C45.1478 9.40964 44.9776 9.88484 44.6372 10.2576C44.2803 10.6408 43.8075 10.832 43.2172 10.832C42.6482 10.832 42.1952 10.6488 41.8572 10.2808C41.5201 9.91364 41.3516 9.45044 41.3516 8.89204C41.3516 8.30804 41.5251 7.82884 41.8737 7.45684C42.2223 7.08484 42.691 6.89844 43.2813 6.89844C43.8503 6.89844 44.3075 7.08164 44.6536 7.44884C44.9825 7.80564 45.1478 8.26644 45.1478 8.82964ZM44.254 8.85684C44.254 8.50884 44.1767 8.21044 44.023 7.96164C43.8421 7.66084 43.5847 7.51044 43.2501 7.51044C42.9039 7.51044 42.6408 7.66084 42.4599 7.96164C42.3053 8.21044 42.2289 8.51364 42.2289 8.87204C42.2289 9.22004 42.3062 9.51844 42.4599 9.76724C42.6466 10.068 42.9064 10.2184 43.2419 10.2184C43.5707 10.2184 43.8289 10.0656 44.0147 9.75924C44.1743 9.50564 44.254 9.20484 44.254 8.85684Z"
            fill="white"
          />
          <path
            d="M51.607 6.97559L50.3942 10.7468H49.6049L49.1025 9.10919C48.9751 8.70039 48.8715 8.29399 48.7909 7.89079H48.7753C48.7004 8.30519 48.5968 8.71079 48.4636 9.10919L47.93 10.7468H47.1316L45.9912 6.97559H46.8767L47.315 8.76839C47.4211 9.19239 47.5082 9.59639 47.5781 9.97879H47.5937C47.6579 9.66359 47.7639 9.26199 47.9136 8.77639L48.4636 6.97639H49.1658L49.6929 8.73799C49.8203 9.16759 49.9239 9.58119 50.0037 9.97959H50.0275C50.0859 9.59159 50.1739 9.17799 50.2906 8.73799L50.7609 6.97639H51.607V6.97559Z"
            fill="white"
          />
          <path
            d="M56.0742 10.7464H55.2125V8.5864C55.2125 7.9208 54.9527 7.588 54.4314 7.588C54.1757 7.588 53.9693 7.6792 53.809 7.8624C53.6503 8.0456 53.5697 8.2616 53.5697 8.5088V10.7456H52.708V8.0528C52.708 7.7216 52.6973 7.3624 52.6768 6.9736H53.434L53.4743 7.5632H53.4982C53.5985 7.38 53.7481 7.2288 53.9446 7.108C54.1781 6.9672 54.4396 6.896 54.7257 6.896C55.0875 6.896 55.3884 7.0096 55.6277 7.2376C55.9253 7.5168 56.0742 7.9336 56.0742 8.4872V10.7464Z"
            fill="white"
          />
          <path d="M58.4507 10.7467H57.5898V5.24512H58.4507V10.7467Z" fill="white" />
          <path
            d="M63.5247 8.82964C63.5247 9.40964 63.3545 9.88484 63.0141 10.2576C62.6573 10.6408 62.1837 10.832 61.5941 10.832C61.0243 10.832 60.5713 10.6488 60.2342 10.2808C59.8971 9.91364 59.7285 9.45044 59.7285 8.89204C59.7285 8.30804 59.902 7.82884 60.2506 7.45684C60.5993 7.08484 61.0679 6.89844 61.6574 6.89844C62.2272 6.89844 62.6836 7.08164 63.0306 7.44884C63.3594 7.80564 63.5247 8.26644 63.5247 8.82964ZM62.6301 8.85684C62.6301 8.50884 62.5529 8.21044 62.3991 7.96164C62.219 7.66084 61.9608 7.51044 61.627 7.51044C61.28 7.51044 61.0169 7.66084 60.8369 7.96164C60.6823 8.21044 60.6058 8.51364 60.6058 8.87204C60.6058 9.22004 60.6831 9.51844 60.8369 9.76724C61.0235 10.068 61.2833 10.2184 61.6188 10.2184C61.9477 10.2184 62.205 10.0656 62.3909 9.75924C62.5512 9.50564 62.6301 9.20484 62.6301 8.85684Z"
            fill="white"
          />
          <path
            d="M67.6937 10.7464H66.92L66.8559 10.312H66.832C66.5673 10.6584 66.1899 10.832 65.6998 10.832C65.3339 10.832 65.0379 10.7176 64.8151 10.4904C64.6129 10.284 64.5117 10.0272 64.5117 9.72244C64.5117 9.26164 64.7091 8.91044 65.1062 8.66724C65.5025 8.42404 66.06 8.30484 66.7778 8.31044V8.24004C66.7778 7.74324 66.5097 7.49524 65.9728 7.49524C65.5905 7.49524 65.2534 7.58884 64.9623 7.77444L64.7872 7.22404C65.1473 7.00724 65.5921 6.89844 66.1167 6.89844C67.1297 6.89844 67.6378 7.41844 67.6378 8.45844V9.84724C67.6378 10.224 67.6567 10.524 67.6937 10.7464ZM66.7991 9.45044V8.86884C65.8486 8.85284 65.3734 9.10644 65.3734 9.62884C65.3734 9.82564 65.4277 9.97284 65.5387 10.0712C65.6497 10.1696 65.7911 10.2184 65.9597 10.2184C66.1488 10.2184 66.3255 10.16 66.4867 10.044C66.6487 9.92724 66.7482 9.77924 66.7852 9.59764C66.7942 9.55684 66.7991 9.50724 66.7991 9.45044Z"
            fill="white"
          />
          <path
            d="M72.5896 10.7467H71.825L71.7847 10.1411H71.7608C71.5166 10.6019 71.1006 10.8323 70.516 10.8323C70.049 10.8323 69.6601 10.6539 69.3517 10.2971C69.0434 9.94032 68.8896 9.47712 68.8896 8.90832C68.8896 8.29792 69.0566 7.80352 69.392 7.42592C69.7168 7.07392 70.1148 6.89792 70.5884 6.89792C71.1088 6.89792 71.4731 7.06832 71.6803 7.40992H71.6967V5.24512H72.5592V9.73072C72.5592 10.0979 72.5691 10.4363 72.5896 10.7467ZM71.6967 9.15632V8.52752C71.6967 8.41872 71.6885 8.33072 71.6729 8.26352C71.6244 8.06192 71.5199 7.89232 71.3612 7.75552C71.2009 7.61872 71.0077 7.54992 70.7849 7.54992C70.4634 7.54992 70.2118 7.67392 70.0268 7.92272C69.8434 8.17152 69.7505 8.48912 69.7505 8.87712C69.7505 9.24992 69.8385 9.55232 70.0153 9.78512C70.2019 10.0331 70.4535 10.1571 70.7684 10.1571C71.0513 10.1571 71.2774 10.0539 71.4492 9.84672C71.6153 9.65552 71.6967 9.42512 71.6967 9.15632Z"
            fill="white"
          />
          <path
            d="M79.9603 8.82964C79.9603 9.40964 79.7901 9.88484 79.4497 10.2576C79.0928 10.6408 78.6209 10.832 78.0297 10.832C77.4615 10.832 77.0085 10.6488 76.6697 10.2808C76.3326 9.91364 76.1641 9.45044 76.1641 8.89204C76.1641 8.30804 76.3376 7.82884 76.6862 7.45684C77.0348 7.08484 77.5035 6.89844 78.0946 6.89844C78.6628 6.89844 79.1208 7.08164 79.4661 7.44884C79.795 7.80564 79.9603 8.26644 79.9603 8.82964ZM79.0673 8.85684C79.0673 8.50884 78.99 8.21044 78.8363 7.96164C78.6546 7.66084 78.398 7.51044 78.0626 7.51044C77.7172 7.51044 77.4541 7.66084 77.2724 7.96164C77.1178 8.21044 77.0414 8.51364 77.0414 8.87204C77.0414 9.22004 77.1187 9.51844 77.2724 9.76724C77.4591 10.068 77.7189 10.2184 78.0544 10.2184C78.3832 10.2184 78.6422 10.0656 78.8281 9.75924C78.9868 9.50564 79.0673 9.20484 79.0673 8.85684Z"
            fill="white"
          />
          <path
            d="M84.5929 10.7464H83.732V8.5864C83.732 7.9208 83.4722 7.588 82.9501 7.588C82.6944 7.588 82.488 7.6792 82.3285 7.8624C82.169 8.0456 82.0892 8.2616 82.0892 8.5088V10.7456H81.2267V8.0528C81.2267 7.7216 81.2168 7.3624 81.1963 6.9736H81.9527L81.993 7.5632H82.0169C82.118 7.38 82.2676 7.2288 82.4633 7.108C82.6977 6.9672 82.9583 6.896 83.2453 6.896C83.6062 6.896 83.9071 7.0096 84.1464 7.2376C84.4449 7.5168 84.5929 7.9336 84.5929 8.4872V10.7464Z"
            fill="white"
          />
          <path
            d="M90.3918 7.60333H89.443V9.43533C89.443 9.90093 89.6116 10.1337 89.9454 10.1337C90.1 10.1337 90.2282 10.1209 90.3294 10.0945L90.3516 10.7305C90.1814 10.7929 89.9577 10.8241 89.6823 10.8241C89.3419 10.8241 89.0771 10.7233 88.8855 10.5217C88.6931 10.3201 88.5978 9.98093 88.5978 9.50493V7.60333H88.0312V6.97533H88.5978V6.28413L89.4422 6.03613V6.97453H90.391V7.60333H90.3918Z"
            fill="white"
          />
          <path
            d="M94.9541 10.7467H94.0916V8.60272C94.0916 7.92672 93.8317 7.58832 93.3113 7.58832C92.9117 7.58832 92.6387 7.78432 92.4891 8.17632C92.4636 8.25872 92.4488 8.35952 92.4488 8.47792V10.7459H91.5879V5.24512H92.4488V7.51792H92.4652C92.7365 7.10432 93.1255 6.89792 93.6295 6.89792C93.9863 6.89792 94.2815 7.01152 94.5158 7.23952C94.8077 7.52352 94.9541 7.94592 94.9541 8.50432V10.7467Z"
            fill="white"
          />
          <path
            d="M99.6598 8.6828C99.6598 8.8332 99.6483 8.9596 99.6277 9.0628H97.0435C97.055 9.4356 97.1783 9.7196 97.4176 9.9164C97.6363 10.0924 97.9183 10.1804 98.2637 10.1804C98.646 10.1804 98.9946 10.1212 99.3087 10.002L99.4436 10.5844C99.076 10.7396 98.6435 10.8172 98.1428 10.8172C97.5426 10.8172 97.0698 10.6452 96.7278 10.3012C96.3841 9.9572 96.2139 9.4956 96.2139 8.9164C96.2139 8.3476 96.3726 7.874 96.6924 7.4964C97.0262 7.0932 97.4776 6.8916 98.0474 6.8916C98.6049 6.8916 99.0283 7.0932 99.3145 7.4964C99.5455 7.8164 99.6598 8.2124 99.6598 8.6828ZM98.8376 8.466C98.8442 8.2172 98.7874 8.0028 98.6707 7.822C98.521 7.5892 98.2933 7.4724 97.9849 7.4724C97.7037 7.4724 97.4743 7.586 97.2992 7.814C97.1561 7.9956 97.0714 8.2124 97.0435 8.466H98.8376Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'expanded':
      iconElement = (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.7059 7.70224L11.2725 13.1356C10.6309 13.7772 9.58086 13.7772 8.93919 13.1356L3.50586 7.70224"
            stroke="#8B8A92"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'drop-left':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.41 12.59L6.83 8L11.41 3.41L10 2L4 8L10 14L11.41 12.59Z" fill="#222D4B" />
        </svg>
      );
      break;
    case 'sub-custom':
      iconElement = (
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="white" />
        </svg>
      );
      break;

    case 'title-pageE':
      iconElement = (
        <svg width="174" height="28" viewBox="0 0 174 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M83.9716 8.59078C82.5598 7.93265 80.8855 8.53963 80.224 9.94795C79.7261 10.9437 78.7952 11.6564 77.704 11.878C76.4526 12.1303 75.1499 11.3529 74.5361 10.913C73.2813 9.76381 71.3342 9.85247 70.185 11.1073C69.0393 12.3622 69.1245 14.3093 70.3794 15.4585C71.6342 16.6076 73.5814 16.519 74.7305 15.2641C74.9419 15.0322 75.1158 14.7731 75.2488 14.4866C75.2625 14.4594 75.2761 14.4287 75.2863 14.398C75.4602 14.1252 75.6751 13.8831 75.9274 13.6819C76.4594 13.3102 77.0698 13.0715 77.7108 12.9794C79.5079 12.6043 81.4107 13.5966 81.4107 13.5966C81.4652 13.6273 81.5232 13.658 81.5846 13.6853C82.9929 14.3434 84.6672 13.7364 85.3287 12.3281C85.9903 10.9198 85.3799 9.24549 83.9716 8.58396V8.59078Z"
            fill="white"
          />
          <path
            d="M81.1174 15.9696L81.1345 15.9867H81.1174C79.9956 15.9867 79.0169 16.7164 78.6861 17.7701C78.6929 17.7462 78.6964 17.7223 78.7066 17.6985C78.0314 18.6533 77.155 19.4478 76.1355 20.0241C75.924 20.0991 75.7229 20.2014 75.5387 20.331C71.5661 22.1519 66.8705 20.406 65.0496 16.4368C63.2287 12.4642 64.9746 7.76862 68.9438 5.94769C71.457 4.79511 74.3861 5.04063 76.6777 6.58876L76.6879 6.57512C76.7595 6.61945 76.8277 6.66719 76.9027 6.7047C78.1917 7.33896 79.7534 6.81041 80.3877 5.51803C80.8992 4.48139 80.6639 3.23334 79.8148 2.45245L79.8251 2.43882C79.7876 2.41154 79.7466 2.38767 79.7091 2.36039C79.5727 2.24786 79.4295 2.14897 79.2726 2.06713C73.2438 -1.81343 65.2065 -0.0709309 61.3259 5.95792C57.4454 11.9868 59.1879 20.0241 65.2167 23.9046C71.1842 27.7443 79.126 26.0836 83.0543 20.1775C83.0714 20.1571 83.0884 20.14 83.1055 20.123C83.2078 19.9661 83.3067 19.8127 83.4021 19.6524C83.5726 19.3046 83.6613 18.9261 83.6613 18.5407C83.6613 18.5339 83.6613 18.5305 83.6613 18.5237C83.6613 17.1188 82.5189 15.9799 81.114 15.9799L81.1174 15.9696Z"
            fill="white"
          />
          <path
            d="M95.0407 8.53857C94.9691 8.53857 94.9009 8.53857 94.8293 8.53857C92.2888 8.61018 90.2838 10.7278 90.3554 13.2682C90.3554 16.1667 92.4355 18.0183 95.1873 18.0183C96.5922 18.0183 98.0176 17.5887 98.9178 16.7668L97.8676 15.2324C97.189 15.7984 96.3365 16.1155 95.4499 16.1292C93.912 16.1292 92.9947 15.1744 92.8447 14.0355H99.5726V13.5103C99.5726 10.5539 97.7346 8.53516 95.0373 8.53516L95.0407 8.53857ZM92.8106 12.4294C92.9026 11.2734 93.8813 10.3936 95.0407 10.4277C95.0407 10.4277 95.0714 10.4277 95.0884 10.4277C96.2444 10.3765 97.2231 11.2768 97.2708 12.4328H92.8106V12.4294Z"
            fill="white"
          />
          <path
            d="M107.317 7.47602C108.555 7.49648 109.683 8.19211 110.26 9.29013L112.544 8.16824C111.525 6.23819 109.496 5.05493 107.317 5.11972C103.569 5.11972 100.664 7.73858 100.664 11.5714C100.664 15.4042 103.569 18.0231 107.317 18.0231C110.072 18.0231 111.648 16.5091 112.544 14.9575L110.26 13.8527C109.69 14.9541 108.558 15.6531 107.317 15.6668C105.049 15.6668 103.399 13.9277 103.399 11.5714C103.399 9.21511 105.049 7.47602 107.317 7.47602V7.47602Z"
            fill="white"
          />
          <path
            d="M118.188 8.53906C115.207 8.53906 113.41 10.7078 113.41 13.2721C113.41 15.8364 115.211 18.0222 118.188 18.0222C121.164 18.0222 122.985 15.8535 122.985 13.2721C122.985 10.6908 121.185 8.53906 118.188 8.53906ZM118.188 15.908C116.708 15.908 115.882 14.6941 115.882 13.2721C115.882 11.8502 116.708 10.6533 118.188 10.6533C119.667 10.6533 120.513 11.8706 120.513 13.2721C120.513 14.6736 119.671 15.908 118.188 15.908Z"
            fill="white"
          />
          <path
            d="M130.197 8.54247C128.987 8.52542 127.831 9.03692 127.03 9.94397V8.76412H124.649V17.7972H127.03V11.7206C127.51 11.059 128.274 10.6635 129.089 10.6533C130.102 10.6533 130.757 11.0829 130.757 12.3378V17.7972H133.137V11.4205C133.137 9.66095 132.182 8.53906 130.194 8.53906L130.197 8.54247Z"
            fill="white"
          />
          <path
            d="M139.101 15.9081C138.576 15.9081 138.276 15.4785 138.276 14.9158V10.8375H140.114V8.76082H138.276V6.29199H135.878V8.76082H134.378V10.8375H135.878V15.5501C135.878 17.1596 136.779 18.0189 138.446 18.0189C139.438 18.0189 140.076 17.7563 140.434 17.4392L139.929 15.6456C139.694 15.8229 139.401 15.9184 139.104 15.9081H139.101Z"
            fill="white"
          />
          <path
            d="M144.029 9.99853V8.76412H141.648V17.7972H144.029V11.8331C144.424 11.2534 145.471 10.8033 146.259 10.8033C146.477 10.7999 146.699 10.8169 146.913 10.8578V8.53906C145.785 8.58339 144.731 9.11535 144.029 9.99853V9.99853Z"
            fill="white"
          />
          <path
            d="M152.168 8.53857C150.719 8.5147 149.314 9.01937 148.212 9.96053L149.109 11.5496C149.818 10.8676 150.766 10.4857 151.752 10.4823C152.952 10.4823 153.74 11.0824 153.74 11.9963V13.2136C153.14 12.5044 152.072 12.1088 150.872 12.1088C149.43 12.1088 147.725 12.9136 147.725 15.0278C147.725 17.1419 149.43 18.0183 150.872 18.0183C151.95 18.0626 152.996 17.6398 153.74 16.8589V17.7933H156.12V11.9588C156.12 9.36037 154.227 8.53516 152.168 8.53516V8.53857ZM153.74 15.6245C153.256 16.1633 152.553 16.4531 151.827 16.4122C150.889 16.4122 150.122 15.9246 150.122 15.0857C150.122 14.2469 150.889 13.7217 151.827 13.7217C152.55 13.6774 153.252 13.9673 153.74 14.506V15.6279V15.6245Z"
            fill="white"
          />
          <path
            d="M162.719 10.6533C163.483 10.6226 164.206 10.9908 164.632 11.6251L166.187 10.1656C165.587 9.34382 164.461 8.53906 162.606 8.53906C159.814 8.53906 157.809 10.5032 157.809 13.2721C157.809 16.041 159.814 18.0222 162.606 18.0222C164.461 18.0222 165.587 17.2175 166.187 16.3752L164.632 14.9362C164.195 15.5568 163.479 15.9217 162.719 15.908C161.277 15.908 160.264 14.8441 160.264 13.2721C160.264 11.7001 161.277 10.6533 162.719 10.6533V10.6533Z"
            fill="white"
          />
          <path
            d="M172.161 15.6456C171.922 15.8229 171.632 15.915 171.336 15.9081C170.81 15.9081 170.51 15.4785 170.51 14.9158V10.8375H172.348V8.76082H170.51V6.29199H168.11V8.76082H166.609V10.8375H168.11V15.5501C168.11 17.1596 169.01 18.0189 170.677 18.0189C171.67 18.0189 172.307 17.7563 172.665 17.4392L172.161 15.6456V15.6456Z"
            fill="white"
          />
          <line x1="50.668" y1="5.25" x2="50.668" y2="17.5" stroke="white" />
          <path
            d="M45.5301 9.44005C45.5676 9.39572 45.5846 9.34116 45.5812 9.28319C45.5812 9.24227 45.5744 9.20476 45.5539 9.16725C45.5335 9.13315 45.5028 9.10587 45.4687 9.08882C45.438 9.07177 45.4039 9.05813 45.3664 9.05472C45.3186 9.0479 45.2743 9.04449 45.2266 9.0479H44.9163V9.90381H45.1209V9.59009H45.2027L45.455 9.90381H45.7108L45.4005 9.53553C45.4516 9.51507 45.4926 9.48097 45.5301 9.44005ZM45.3459 9.36162C45.3459 9.36162 45.3255 9.39231 45.3084 9.40254C45.2914 9.41618 45.2709 9.42641 45.2504 9.42641C45.2232 9.43323 45.1959 9.43664 45.1652 9.43664H45.1175V9.19453H45.1788C45.2027 9.19453 45.2266 9.19453 45.2504 9.19794C45.2675 9.19794 45.288 9.20476 45.3016 9.21499C45.3186 9.22181 45.3323 9.23545 45.3425 9.2525C45.3493 9.26955 45.3527 9.2866 45.3527 9.30365C45.3527 9.32411 45.3493 9.34457 45.3425 9.36503L45.3459 9.36162ZM45.8506 8.88763C45.5164 8.55346 44.9742 8.55687 44.6435 8.89104C44.3127 9.22522 44.3127 9.76741 44.6469 10.0982C44.9811 10.4289 45.5232 10.4289 45.854 10.0948C46.0143 9.9345 46.1029 9.71967 46.1029 9.49461C46.1063 9.26614 46.0143 9.0479 45.8506 8.88763ZM45.7176 9.9686C45.5949 10.0982 45.4209 10.1698 45.2436 10.1698C45.0663 10.1698 44.8924 10.0982 44.7696 9.9686C44.5071 9.70603 44.5071 9.28319 44.7696 9.02062C44.8924 8.89104 45.0663 8.81943 45.2436 8.81943C45.4209 8.81943 45.5949 8.88764 45.7176 9.01721C45.9802 9.27978 45.9802 9.70603 45.7176 9.9686ZM37.8849 15.0938L35.8764 9.39572H32.2789L35.7707 18.0059H39.8797L43.3988 9.39572H39.8661L37.8849 15.0938ZM8.26238 10.9132C8.26238 10.9132 8.24533 10.9063 8.23851 10.9029C8.43288 10.8279 8.62043 10.7358 8.79775 10.6267C10.1788 9.69921 10.5471 7.83054 9.61956 6.4495C9.06714 5.62428 8.14303 5.12643 7.14732 5.1162H0V18.0059H6.01862C6.13455 18.0059 6.24367 18.0059 6.3562 18.0025H7.98617C9.94691 17.9309 11.2325 16.3248 11.2325 14.3504C11.2325 12.6318 9.85484 11.3087 8.25897 10.9166L8.26238 10.9132ZM3.51228 7.48954H5.24114C5.43892 7.49295 5.6367 7.52364 5.82425 7.5782C6.20616 7.73506 6.49942 8.05901 6.61536 8.45798C6.63923 8.55687 6.65287 8.65576 6.65287 8.75806C6.65287 8.98311 6.61536 9.20476 6.54034 9.41618C6.45168 9.60373 6.31869 9.77082 6.15502 9.9004C6.09364 9.94132 6.03226 9.97542 5.96747 10.0061C5.75264 10.1118 5.51735 10.1732 5.27865 10.1902C5.05359 10.2005 4.94788 10.2073 4.39205 10.2073H3.51228V7.49295V7.48954ZM6.81996 15.2916C6.4926 15.503 6.10728 15.6189 5.71513 15.6189H3.51569V12.4204H5.37754C5.51053 12.4204 5.62306 12.4204 5.68785 12.4204C5.96406 12.4204 6.23685 12.4613 6.49942 12.5465C6.55057 12.5636 6.60172 12.5841 6.65287 12.6045C7.42012 12.9933 7.72702 13.931 7.34169 14.6982C7.22234 14.9369 7.04161 15.1381 6.81996 15.2882V15.2916ZM18.6492 9.41618L15.6143 13.2865V5.10938H12.2043V18.0059H15.6143L17.0806 16.1475L18.4446 18.0059H22.332L19.055 13.6105L22.3422 9.41618H18.6492ZM31.157 9.75377C30.4614 9.24568 28.77 8.99675 27.2492 8.99675C26.632 9.00357 26.0182 9.05813 25.4078 9.15702C24.6712 9.26955 23.9483 9.46051 23.2527 9.72308L24.2313 11.694C24.8724 11.3053 25.5919 11.0632 26.3353 10.978C26.7854 10.9063 27.2457 10.8995 27.6959 10.9575C27.9755 10.9848 28.2449 11.0837 28.4767 11.2439C28.7666 11.4622 28.9235 11.8168 28.8928 12.1783V12.2431C27.6038 12.2294 26.3182 12.376 25.0668 12.6761C23.9108 13.0137 22.7037 14.0401 22.7037 15.3973C22.7514 16.9454 24.0233 18.173 25.5714 18.1628C25.6124 18.1628 25.9909 18.1696 25.9909 18.1696C27.0139 18.115 28.0096 17.8013 28.8757 17.2557L29.4452 18.0196H32.197V12.0214C32.197 10.9848 31.8492 10.2619 31.1536 9.75377H31.157ZM28.8791 15.6564C28.4529 16.0929 27.88 16.3623 27.2696 16.4066C27.2185 16.4066 27.1673 16.4066 27.1162 16.3964C27.0923 16.3964 27.0684 16.3896 27.048 16.3896C27.0343 16.3896 27.0173 16.3828 27.0036 16.3828C26.3796 16.26 25.9704 15.6564 26.0932 15.0324C26.1818 14.5755 26.5399 14.2174 26.9968 14.1254C27.007 14.122 27.0139 14.122 27.0275 14.1151C27.4947 14.0128 28.8757 13.8833 28.8757 13.8833V15.6599L28.8791 15.6564Z"
            fill="white"
          />
          <path
            d="M130.019 23.5127V24.8187H131.284V23.5127H132.051V26.909H131.284V25.4871H130.019V26.909H129.248V23.5127H130.019Z"
            fill="white"
          />
          <path
            d="M135.953 23.0693C136.017 23.1989 136.075 23.3728 136.075 23.5842C136.075 23.8911 135.908 24.1298 135.547 24.1367C135.707 24.3924 135.83 24.7368 135.83 25.1733C135.83 26.2849 135.155 26.9601 134.162 26.9601C133.17 26.9601 132.566 26.1997 132.566 25.2313C132.566 24.2151 133.218 23.4547 134.217 23.4547C134.473 23.4547 134.681 23.5058 134.837 23.557C135.005 23.6183 135.199 23.7343 135.335 23.7343C135.461 23.7343 135.523 23.6695 135.523 23.5331C135.523 23.3967 135.472 23.2705 135.41 23.1648L135.953 23.0693V23.0693ZM135.015 25.2006C135.015 24.5902 134.722 24.0685 134.193 24.0685C133.664 24.0685 133.371 24.5868 133.371 25.2176C133.368 25.8587 133.678 26.3566 134.196 26.3566C134.715 26.3566 135.011 25.8621 135.011 25.204L135.015 25.2006ZM133.845 27.6592C133.845 27.4614 134.002 27.3114 134.203 27.3114C134.391 27.3114 134.534 27.4614 134.534 27.6592C134.534 27.8399 134.387 28.0002 134.203 28.0002C134.002 28.0002 133.845 27.8399 133.845 27.6592Z"
            fill="white"
          />
          <path
            d="M136.328 23.557C136.563 23.516 136.897 23.4854 137.364 23.4854C137.831 23.4854 138.176 23.5774 138.401 23.7582C138.616 23.9287 138.762 24.2117 138.762 24.5424C138.762 24.8732 138.65 25.1562 138.449 25.3472C138.186 25.5927 137.797 25.7052 137.347 25.7052C137.245 25.7052 137.156 25.7018 137.085 25.6916V26.9056H136.324V23.557H136.328ZM137.088 25.0983C137.153 25.1119 137.235 25.1187 137.344 25.1187C137.753 25.1187 138.005 24.9107 138.005 24.5663C138.005 24.2526 137.791 24.0685 137.405 24.0685C137.248 24.0685 137.143 24.0821 137.088 24.0991V25.1017V25.0983Z"
            fill="white"
          />
          <path
            d="M139.956 24.8766H140.314V23.5467C140.597 23.5024 140.965 23.4717 141.351 23.4717C141.992 23.4717 142.415 23.5808 142.742 23.8297C143.093 24.0923 143.311 24.5254 143.311 25.1255C143.311 25.7836 143.08 26.2372 142.752 26.5168C142.394 26.8135 141.852 26.9601 141.187 26.9601C140.788 26.9601 140.508 26.9362 140.314 26.9089V25.4802H139.956V24.88V24.8766ZM141.753 25.4768H141.078V26.3429C141.15 26.3531 141.255 26.3531 141.344 26.3531C142.05 26.3531 142.496 25.9814 142.496 25.1494C142.496 24.4128 142.087 24.065 141.422 24.065C141.255 24.065 141.146 24.0787 141.075 24.0957V24.8766H141.75V25.4768H141.753Z"
            fill="white"
          />
          <path
            d="M146.923 25.1736C146.923 26.2853 146.247 26.9604 145.255 26.9604C144.263 26.9604 143.659 26.2 143.659 25.2316C143.659 24.2154 144.31 23.455 145.31 23.455C146.309 23.455 146.923 24.2359 146.923 25.1736ZM144.471 25.2179C144.471 25.8829 144.784 26.35 145.296 26.35C145.807 26.35 146.111 25.8556 146.111 25.1975C146.111 24.5871 145.818 24.0654 145.289 24.0654C144.761 24.0654 144.467 24.5598 144.467 25.2179H144.471ZM145.579 22.7082L146.033 23.3288H145.538L145.316 23.0117H145.306L145.081 23.3288H144.594L145.047 22.7082H145.582H145.579ZM146.131 22.3672L146.459 22.9367H146.06L145.47 22.3672H146.131V22.3672Z"
            fill="white"
          />
          <path
            d="M147.427 26.9051V23.5088H148.324L149.029 24.7534C149.231 25.1115 149.432 25.5343 149.582 25.9162H149.596C149.544 25.4695 149.531 25.0092 149.531 24.5011V23.5088H150.237V26.9051H149.432L148.706 25.5957C148.504 25.2342 148.283 24.7944 148.116 24.3988H148.102C148.122 24.8523 148.133 25.3297 148.133 25.8855V26.9085H147.427V26.9051Z"
            fill="white"
          />
          <path
            d="M153.735 26.7521C153.5 26.8339 153.049 26.9431 152.603 26.9431C151.982 26.9431 151.535 26.7862 151.222 26.4861C150.908 26.1929 150.738 25.7496 150.744 25.2517C150.748 24.123 151.57 23.4785 152.685 23.4785C153.125 23.4785 153.462 23.5638 153.626 23.6456L153.465 24.2594C153.278 24.1776 153.046 24.1128 152.674 24.1128C152.033 24.1128 151.553 24.4742 151.553 25.2108C151.553 25.9473 151.992 26.3224 152.62 26.3224C152.797 26.3224 152.937 26.302 152.998 26.2713V25.562H152.473V24.9619H153.738V26.7487L153.735 26.7521Z"
            fill="white"
          />
          <path
            d="M155.034 24.8766H155.392V23.5467C155.675 23.5024 156.044 23.4717 156.429 23.4717C157.07 23.4717 157.493 23.5808 157.82 23.8297C158.171 24.0923 158.39 24.5254 158.39 25.1255C158.39 25.7836 158.158 26.2372 157.83 26.5168C157.472 26.8135 156.93 26.9601 156.265 26.9601C155.866 26.9601 155.587 26.9362 155.392 26.9089V25.4802H155.034V24.88V24.8766ZM156.831 25.4768H156.156V26.3429C156.228 26.3531 156.333 26.3531 156.422 26.3531C157.128 26.3531 157.575 25.9814 157.575 25.1494C157.575 24.4128 157.165 24.065 156.5 24.065C156.333 24.065 156.224 24.0787 156.153 24.0957V24.8766H156.828V25.4768H156.831Z"
            fill="white"
          />
          <path d="M159.665 23.5127V26.909H158.895V23.5127H159.665Z" fill="white" />
          <path
            d="M162.353 25.4696H161.105V26.2744H162.499V26.9052H160.334V23.5089H162.428V24.1397H161.105V24.8456H162.353V25.4696V25.4696ZM161.688 22.7109L162.203 23.3316H161.664L161.408 23.0178H161.398L161.146 23.3316H160.61L161.115 22.7109H161.688V22.7109ZM161.105 27.6554C161.105 27.4576 161.255 27.3076 161.456 27.3076C161.657 27.3076 161.793 27.4576 161.793 27.6554C161.793 27.8361 161.647 27.9964 161.456 27.9964C161.255 27.9964 161.105 27.8361 161.105 27.6554Z"
            fill="white"
          />
          <path
            d="M163.021 26.9051V23.5088H163.917L164.623 24.7534C164.824 25.1115 165.026 25.5343 165.176 25.9162H165.189C165.138 25.4695 165.124 25.0092 165.124 24.5011V23.5088H165.83V26.9051H165.026L164.299 25.5957C164.098 25.2342 163.876 24.7944 163.709 24.3988H163.696C163.716 24.8523 163.726 25.3297 163.726 25.8855V26.9085H163.021V26.9051Z"
            fill="white"
          />
          <path d="M167.968 24.1572H167.058V23.5127H169.666V24.1572H168.739V26.9056H167.968V24.1572Z" fill="white" />
          <path
            d="M173.356 22.8917C173.42 23.0213 173.468 23.1884 173.468 23.3589C173.468 23.6658 173.298 23.8738 172.929 23.9079L172.844 23.9181V25.4151C172.844 26.462 172.316 26.9598 171.429 26.9598C170.542 26.9598 170.068 26.4858 170.068 25.4049V23.5123H170.839V25.4663C170.839 26.0494 171.061 26.346 171.453 26.346C171.845 26.346 172.077 26.063 172.077 25.4663V23.5123H172.66C172.868 23.5123 172.923 23.4475 172.923 23.3146C172.923 23.2088 172.888 23.0929 172.817 22.977L173.356 22.8917V22.8917ZM171.395 23.2736C171.47 23.0452 171.64 23.0077 171.64 22.8406C171.64 22.7485 171.576 22.6905 171.494 22.6905C171.398 22.6905 171.313 22.7928 171.265 22.861L171.023 22.7144C171.139 22.4825 171.33 22.3154 171.637 22.3154C171.91 22.3154 172.125 22.5132 172.125 22.7451C172.125 23.0418 171.879 23.0963 171.743 23.3487L171.391 23.2736H171.395Z"
            fill="white"
          />
        </svg>
      );
      break;

    case 'drop-right':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.99984 2L4.58984 3.41L9.16984 8L4.58984 12.59L5.99984 14L11.9998 8L5.99984 2Z" fill="#222D4B" />
        </svg>
      );
      break;
    case 'drop-bottom':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.41 4.58997L8 9.16997L12.59 4.58997L14 5.99997L8 12L2 5.99997L3.41 4.58997Z" fill="#222D4B" />
        </svg>
      );
      break;
    case 'file-excel':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.4167 13.3333H5.83333C3.99167 13.3333 2.5 11.8416 2.5 9.99996C2.5 8.15829 3.99167 6.66663 5.83333 6.66663H16.25C17.4 6.66663 18.3333 7.59996 18.3333 8.74996C18.3333 9.89996 17.4 10.8333 16.25 10.8333H7.5C7.04167 10.8333 6.66667 10.4583 6.66667 9.99996C6.66667 9.54163 7.04167 9.16663 7.5 9.16663H15.4167V7.91663H7.5C6.35 7.91663 5.41667 8.84996 5.41667 9.99996C5.41667 11.15 6.35 12.0833 7.5 12.0833H16.25C18.0917 12.0833 19.5833 10.5916 19.5833 8.74996C19.5833 6.90829 18.0917 5.41663 16.25 5.41663H5.83333C3.3 5.41663 1.25 7.46663 1.25 9.99996C1.25 12.5333 3.3 14.5833 5.83333 14.5833H15.4167V13.3333Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'setting-green':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 10C20 4.47803 15.522 0 10 0C4.47803 0 0 4.47803 0 10C0 15.522 4.47803 20 10 20C15.522 20 20 15.522 20 10Z"
            fill="#F4A835"
          />
          <path
            d="M16 10.7266V9.2809L14.6296 8.85019C14.5136 8.38577 14.3301 7.94757 14.0867 7.54682L14.7532 6.26966L13.731 5.24719L12.4505 5.91386C12.0537 5.67416 11.6193 5.49438 11.1551 5.37828L10.7207 4H9.27176L8.83744 5.37828C8.37691 5.49438 7.93885 5.67416 7.54197 5.91386L6.2727 5.24719L5.2468 6.27341L5.91326 7.55056C5.67364 7.95131 5.48643 8.38577 5.37036 8.85393L4 9.28464V10.7303L5.36287 11.161C5.47894 11.6292 5.6624 12.0712 5.90577 12.4757L5.2468 13.7341L6.26895 14.7566L7.53073 14.0974C7.9351 14.3408 8.38066 14.5281 8.85242 14.6442L9.27925 16H10.7282L11.1551 14.6442C11.6268 14.5281 12.0686 14.3408 12.4768 14.0974L13.7385 14.7566L14.7607 13.7341L14.1017 12.4682C14.3451 12.0637 14.5285 11.6217 14.6446 11.1536L16 10.7266ZM10.0019 13.1798C8.25335 13.1798 6.83432 11.7603 6.83432 10.0112C6.83432 8.26217 8.25335 6.8427 10.0019 6.8427C11.7504 6.8427 13.1657 8.26217 13.1657 10.0112C13.1657 11.764 11.7504 13.1798 10.0019 13.1798Z"
            fill="white"
          />
        </svg>
      );
      break;

    case 'setting-bubble':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 13.0435C8.3222 13.0435 6.95654 11.6783 6.95654 10C6.95654 8.32176 8.3222 6.95654 10 6.95654C11.6778 6.95654 13.0435 8.32176 13.0435 10C13.0435 11.6783 11.6778 13.0435 10 13.0435ZM10 8.26089C9.04089 8.26089 8.26089 9.04089 8.26089 10C8.26089 10.9592 9.04089 11.7392 10 11.7392C10.9592 11.7392 11.7392 10.9592 11.7392 10C11.7392 9.04089 10.9592 8.26089 10 8.26089Z"
            fill="url(#paint0_linear_8_15)"
          />
          <path
            d="M16.9565 8.69563H16.3913C16.2217 7.86519 15.8913 7.09128 15.4391 6.40432L15.8087 6.03476C16.1652 5.67824 16.1652 5.09998 15.8087 4.74345L15.2565 4.19128C14.9 3.83476 14.3217 3.83476 13.9652 4.19128L13.5956 4.56085C12.9087 4.10867 12.1348 3.77824 11.3043 3.60867V3.04345C11.3043 2.56519 10.913 2.17389 10.4348 2.17389H9.56519C9.08693 2.17389 8.69563 2.56519 8.69563 3.04345V3.60867C7.86519 3.77824 7.09128 4.10867 6.40432 4.56085L6.03476 4.19128C5.67824 3.83476 5.09998 3.83476 4.74345 4.19128L4.19128 4.74345C3.83476 5.09998 3.83476 5.67824 4.19128 6.03476L4.56085 6.40432C4.10867 7.09128 3.77824 7.86519 3.60867 8.69563H3.04345C2.56519 8.69563 2.17389 9.08693 2.17389 9.56519V10.4348C2.17389 10.913 2.56519 11.3043 3.04345 11.3043H3.60867C3.77824 12.1348 4.10867 12.9087 4.56085 13.5956L4.19128 13.9652C3.83476 14.3217 3.83476 14.9 4.19128 15.2565L4.74345 15.8087C5.09998 16.1652 5.67824 16.1652 6.03476 15.8087L6.40432 15.4391C7.09128 15.8913 7.86519 16.2217 8.69563 16.3913V16.9565C8.69563 17.4348 9.08693 17.8261 9.56519 17.8261H10.4348C10.913 17.8261 11.3043 17.4348 11.3043 16.9565V16.3913C12.1348 16.2217 12.9087 15.8913 13.5956 15.4391L13.9652 15.8087C14.3217 16.1652 14.9 16.1652 15.2565 15.8087L15.8087 15.2565C16.1652 14.9 16.1652 14.3217 15.8087 13.9652L15.4391 13.5956C15.8913 12.9087 16.2217 12.1348 16.3913 11.3043H16.9565C17.4348 11.3043 17.8261 10.913 17.8261 10.4348V9.56519C17.8261 9.08693 17.4348 8.69563 16.9565 8.69563ZM9.99998 14.7826C7.3565 14.7826 5.21737 12.6435 5.21737 9.99998C5.21737 7.3565 7.3565 5.21737 9.99998 5.21737C12.6435 5.21737 14.7826 7.3565 14.7826 9.99998C14.7826 12.6435 12.6435 14.7826 9.99998 14.7826Z"
            fill="url(#paint1_linear_8_15)"
          />
          <path
            d="M17.8261 0H2.17391C0.956522 0 0 0.956522 0 2.17391V17.8261C0 19.0435 0.956522 20 2.17391 20H17.8261C19.0435 20 20 19.0435 20 17.8261V2.17391C20 0.956522 19.0435 0 17.8261 0ZM19.1304 17.8261C19.1304 18.5652 18.5652 19.1304 17.8261 19.1304H2.17391C1.43478 19.1304 0.869565 18.5652 0.869565 17.8261V2.17391C0.869565 1.43478 1.43478 0.869565 2.17391 0.869565H17.8261C18.5652 0.869565 19.1304 1.43478 19.1304 2.17391V17.8261ZM10 4.78261C7.12304 4.78261 4.78261 7.12304 4.78261 10C4.78261 12.877 7.12304 15.2174 10 15.2174C12.877 15.2174 15.2174 12.877 15.2174 10C15.2174 7.12304 12.877 4.78261 10 4.78261ZM5.65217 10C5.65217 8.54956 6.3687 7.26652 7.46348 6.47609L9.49783 10L7.46348 13.5239C6.3687 12.7335 5.65217 11.4504 5.65217 10ZM10 14.3478C9.36391 14.3478 8.76087 14.207 8.21565 13.9604L10.2513 10.4348H14.3261C14.107 12.6287 12.2504 14.3478 10 14.3478ZM10.2513 9.56522L8.21565 6.03957C8.76087 5.79304 9.36391 5.65217 10 5.65217C12.2504 5.65217 14.107 7.3713 14.3257 9.56522H10.2513ZM16.9565 8.26087H16.737C16.5748 7.63217 16.3252 7.0313 15.9913 6.46783L16.1178 6.3413C16.3726 6.08696 16.5126 5.74826 16.5126 5.38826C16.5126 5.02826 16.3726 4.69 16.1178 4.43522L15.5648 3.88217C15.0552 3.37304 14.1674 3.37348 13.6587 3.88217L13.5322 4.00913C12.9687 3.67522 12.3678 3.42565 11.7391 3.26391V3.04348C11.7391 2.32435 11.1539 1.73913 10.4348 1.73913H9.56522C8.84609 1.73913 8.26087 2.32435 8.26087 3.04348V3.26304C7.63217 3.42522 7.0313 3.67478 6.46783 4.00826L6.34174 3.88174C5.83217 3.37217 4.94478 3.37261 4.43522 3.88174L3.88217 4.43478C3.62739 4.68913 3.48739 5.02783 3.48739 5.38783C3.48739 5.74783 3.62739 6.08652 3.88217 6.34087L4.0087 6.46739C3.67478 7.03087 3.42522 7.6313 3.26304 8.26043H3.04348C2.32435 8.26043 1.73913 8.84565 1.73913 9.56478V10.4343C1.73913 11.1535 2.32435 11.7387 3.04348 11.7387H3.26304C3.42522 12.3674 3.67478 12.9683 4.0087 13.5317L3.88217 13.6583C3.62739 13.9126 3.48739 14.2513 3.48739 14.6113C3.48739 14.9713 3.62739 15.3096 3.88217 15.5643L4.43522 16.1174C4.94478 16.6265 5.83261 16.6261 6.3413 16.1174L6.46783 15.9904C7.0313 16.3243 7.63217 16.5739 8.26087 16.7357V16.9565C8.26087 17.6757 8.84609 18.2609 9.56522 18.2609H10.4348C11.1539 18.2609 11.7391 17.6757 11.7391 16.9565V16.737C12.3678 16.5748 12.9687 16.3252 13.5322 15.9917L13.6583 16.1183C14.1678 16.6278 15.0552 16.6274 15.5648 16.1183L16.1178 15.5652C16.3726 15.3109 16.5126 14.9722 16.5126 14.6122C16.5126 14.2522 16.3726 13.9135 16.1178 13.6591L15.9913 13.5326C16.3252 12.9691 16.5748 12.3687 16.737 11.7396H16.9565C17.6757 11.7396 18.2609 11.1543 18.2609 10.4352V9.56565C18.2609 8.84609 17.6757 8.26087 16.9565 8.26087ZM17.3913 10.4348C17.3913 10.6743 17.1965 10.8696 16.9565 10.8696H16.3909C16.1839 10.8696 16.0057 11.0152 15.9648 11.2178C15.8104 11.9791 15.5117 12.6978 15.077 13.3543C14.9626 13.5265 14.9861 13.7557 15.1322 13.9017L15.5035 14.273C15.69 14.4596 15.69 14.763 15.5035 14.9496L14.9504 15.5026C14.7696 15.6835 14.4548 15.6839 14.2739 15.5026L13.9026 15.1313C13.7561 14.9852 13.5265 14.9626 13.3552 15.0765C12.6987 15.5113 11.98 15.81 11.2183 15.9643C11.0152 16.0057 10.8696 16.1839 10.8696 16.3909V16.9565C10.8696 17.1961 10.6748 17.3913 10.4348 17.3913H9.56522C9.32522 17.3913 9.13043 17.1961 9.13043 16.9565V16.3909C9.13043 16.1839 8.98478 16.0061 8.78217 15.9648C8.02043 15.8104 7.30174 15.5117 6.64522 15.077C6.57217 15.0287 6.4887 15.0048 6.40522 15.0048C6.29304 15.0048 6.18174 15.0483 6.09783 15.1317L5.72609 15.5035C5.54609 15.6839 5.23087 15.6843 5.05 15.5035L4.49696 14.9504C4.31043 14.7639 4.31043 14.4604 4.49696 14.2739L4.86826 13.9026C5.01435 13.7565 5.03783 13.5274 4.92348 13.3552C4.4887 12.6987 4.19 11.98 4.03565 11.2187C3.99435 11.0152 3.81565 10.8696 3.60913 10.8696H3.04348C2.80348 10.8696 2.6087 10.6743 2.6087 10.4348V9.56522C2.6087 9.32565 2.80348 9.13043 3.04348 9.13043H3.60913C3.81609 9.13043 3.99435 8.98478 4.03522 8.78217C4.18957 8.02087 4.48826 7.30217 4.92304 6.64565C5.03739 6.47348 5.01391 6.24435 4.86783 6.09826L4.49652 5.72696C4.31 5.54043 4.31 5.23696 4.49652 5.05043L5.04957 4.49739C5.23043 4.31652 5.54522 4.31609 5.72609 4.49739L6.09739 4.8687C6.24391 5.01478 6.47304 5.03696 6.64478 4.92348C7.3013 4.4887 8.02 4.19 8.78174 4.03565C8.98478 3.99435 9.13043 3.81609 9.13043 3.60913V3.04348C9.13043 2.80391 9.32522 2.6087 9.56522 2.6087H10.4348C10.6748 2.6087 10.8696 2.80391 10.8696 3.04348V3.60913C10.8696 3.81609 11.0152 3.99391 11.2178 4.03522C11.9796 4.18957 12.6983 4.48826 13.3548 4.92304C13.5261 5.03652 13.7557 5.01391 13.9022 4.86826L14.2739 4.49652C14.4539 4.31609 14.7691 4.31565 14.95 4.49652L15.503 5.04957C15.6896 5.23609 15.6896 5.53957 15.503 5.72609L15.1317 6.09739C14.9857 6.24348 14.9622 6.47261 15.0765 6.64478C15.5113 7.3013 15.81 8.02 15.9643 8.7813C16.0057 8.98478 16.1843 9.13043 16.3909 9.13043H16.9565C17.1965 9.13043 17.3913 9.32565 17.3913 9.56522V10.4348Z"
            fill="url(#paint2_linear_8_15)"
          />
          <defs>
            <linearGradient id="paint0_linear_8_15" x1="10" y1="6.95654" x2="10" y2="13.0435" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6DC7FF" />
              <stop offset="1" stopColor="#E6ABFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_8_15"
              x1="9.99998"
              y1="17.8261"
              x2="9.99998"
              y2="2.17389"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E6ABFF" />
              <stop offset="1" stopColor="#6DC7FF" />
            </linearGradient>
            <linearGradient id="paint2_linear_8_15" x1="10" y1="20" x2="10" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C822FF" />
              <stop offset="1" stopColor="#1A6DFF" />
            </linearGradient>
          </defs>
        </svg>
      );
      break;

    case 'add-black':
      iconElement = (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#626262" />
        </svg>
      );
      break;
    case 'add-plus':
      iconElement = (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#08B7DD" />
        </svg>
      );
      break;

    case 'import-black':
      iconElement = (
        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 13H10V7H14L7 0L0 7H4V13ZM7 2.83L9.17 5H8V11H6V5H4.83L7 2.83ZM0 15H14V17H0V15Z" fill="#626262" />
        </svg>
      );
      break;
    case 'helper':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
            fill="#08B7DD"
          />
          <path
            d="M8.00094 15.04C11.889 15.04 15.0409 11.888 15.0409 7.99996C15.0409 4.11188 11.889 0.959961 8.00094 0.959961C4.11285 0.959961 0.960938 4.11188 0.960938 7.99996C0.960938 11.888 4.11285 15.04 8.00094 15.04Z"
            fill="#08B7DD"
            stroke="white"
          />
          <path
            d="M8.51255 9.65717H7.07895C7.07798 9.36488 7.10369 9.07311 7.15575 8.78549C7.20366 8.54879 7.29239 8.32226 7.4181 8.11606C7.56318 7.89836 7.73524 7.69987 7.93013 7.52534C8.10293 7.3679 8.25651 7.21857 8.39091 7.07735C8.5119 6.94494 8.61516 6.79735 8.6981 6.6383C8.77616 6.47905 8.81566 6.30364 8.81333 6.12629C8.81766 5.94124 8.78274 5.75738 8.71091 5.58678C8.6531 5.44599 8.54936 5.32891 8.41653 5.25461C8.2674 5.17421 8.09942 5.13532 7.93013 5.14198C7.7744 5.14133 7.62074 5.17797 7.48208 5.24885C7.34101 5.31891 7.22327 5.42826 7.14294 5.56373C7.04677 5.73538 6.99811 5.92958 7.00208 6.12629H5.37653C5.36664 5.67726 5.48901 5.23523 5.72849 4.85526C5.95299 4.52097 6.27147 4.26064 6.64372 4.10709C7.49165 3.77286 8.43554 3.77699 9.28052 4.11862C9.63988 4.27118 9.94213 4.53292 10.1445 4.86678C10.3513 5.22924 10.4533 5.64206 10.439 6.05911C10.4434 6.35992 10.38 6.65788 10.2533 6.93079C10.1213 7.18961 9.95079 7.42695 9.7477 7.63477C9.5429 7.85237 9.31895 8.07702 9.06935 8.30934C8.87787 8.47353 8.72672 8.6796 8.6277 8.91159C8.55243 9.15301 8.51365 9.40429 8.51255 9.65717ZM6.90614 11.3954C6.9031 11.284 6.92374 11.1732 6.96677 11.0703C7.0098 10.9675 7.07426 10.875 7.15575 10.7989C7.24518 10.7166 7.35002 10.6528 7.46427 10.6113C7.57852 10.5698 7.69987 10.5513 7.8213 10.557C7.94176 10.5513 8.06215 10.5698 8.17536 10.6113C8.28857 10.6529 8.39234 10.7167 8.48052 10.7989C8.55937 10.8764 8.62198 10.9688 8.66474 11.0707C8.70749 11.1726 8.7295 11.282 8.7295 11.3925C8.7295 11.5031 8.70749 11.6125 8.66474 11.7144C8.62198 11.8163 8.55937 11.9087 8.48052 11.9861C8.39223 12.0682 8.28848 12.1318 8.17528 12.1732C8.06209 12.2147 7.9417 12.2331 7.8213 12.2274C7.69992 12.2331 7.57866 12.2147 7.46442 12.1733C7.35019 12.1319 7.24529 12.0683 7.15575 11.9861C7.07484 11.9102 7.01078 11.818 6.96778 11.7157C6.92478 11.6134 6.90379 11.5032 6.90614 11.3922V11.3954Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'checked-white':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9.25" stroke="white" strokeWidth="1.5" />
          <path d="M6 10.375L8.73913 13L15 7" stroke="white" strokeWidth="1.5" />
        </svg>
      );
      break;
    case 'play-icon':
      iconElement = (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="32" transform="matrix(-1 0 0 1 32 32)" fill="#32BEA6" />
          <path
            d="M46.694 30.5068C47.7073 31.0659 47.7326 32.5132 46.7394 33.1074L26.1923 45.399C25.2025 45.9911 23.9426 45.2911 23.9225 44.1379L23.5061 20.2793C23.4859 19.1261 24.7206 18.3825 25.7305 18.9398L46.694 30.5068Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'play-icon-mini':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="10" transform="matrix(-1 0 0 1 10 10)" fill="#32BEA6" />
          <path
            d="M12.9789 8.66656C13.9921 9.22566 14.0174 10.673 13.0242 11.2672L9.67243 13.2723C8.68262 13.8644 7.42274 13.1644 7.40261 12.0112L7.33467 8.11918C7.31454 6.96595 8.54923 6.22244 9.5591 6.77965L12.9789 8.66656Z"
            fill="white"
          />
        </svg>
      );
      break;

    case 'support-icon':
      iconElement = (
        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.39896 2.40012H21.5999V16.8008H3.80303L2.39896 18.2049V2.40012ZM2.39896 0C1.0789 0 0.0108501 1.08005 0.0108501 2.40012L1.46206e-07 21.9301C-0.000424242 22.694 0.923147 23.0769 1.4633 22.5367L4.79908 19.2009H21.5999C22.9199 19.2009 24 18.1209 24 16.8008V2.40012C24 1.08005 22.9199 0 21.5999 0H2.39896ZM4.79908 12.0006H14.3995V14.4007H4.79908V12.0006ZM4.79908 8.4004H19.1998V10.8005H4.79908V8.4004ZM4.79908 4.80023H19.1998V7.20034H4.79908V4.80023Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;

    case 'pause-icon':
      iconElement = (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="32" transform="matrix(-1 0 0 1 32 32)" fill="#FA3C48" />
          <rect x="22" y="19" width="8" height="26" fill="white" />
          <rect x="34" y="19" width="8" height="26" fill="white" />
        </svg>
      );
      break;
    case 'pause-icon-mini':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="10" transform="matrix(-1 0 0 1 10 10)" fill="#FA3C48" />
          <rect x="6.875" y="5.9375" width="2.5" height="8.125" fill="white" />
          <rect x="10.625" y="5.9375" width="2.5" height="8.125" fill="white" />
        </svg>
      );
      break;
    case 'logo-white':
      iconElement = (
        <svg width="298" height="48" viewBox="0 0 298 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M143.95 14.7263C141.529 13.5981 138.659 14.6386 137.525 17.0529C136.672 18.7598 135.076 19.9815 133.205 20.3615C131.06 20.7941 128.827 19.4613 127.775 18.7072C125.623 16.7372 122.285 16.8892 120.315 19.0404C118.351 21.1916 118.497 24.5295 120.649 26.4995C122.8 28.4695 126.138 28.3175 128.108 26.1663C128.47 25.7688 128.768 25.3245 128.996 24.8335C129.02 24.7867 129.043 24.7341 129.061 24.6815C129.359 24.2138 129.727 23.7988 130.16 23.4539C131.072 22.8167 132.118 22.4075 133.217 22.2497C136.298 21.6066 139.559 23.3077 139.559 23.3077C139.653 23.3604 139.752 23.413 139.858 23.4597C142.272 24.5879 145.142 23.5474 146.276 21.1331C147.41 18.7189 146.364 15.8487 143.95 14.7146V14.7263Z"
            fill="white"
          />
          <path
            d="M139.057 27.3765L139.086 27.4057H139.057C137.134 27.4057 135.456 28.6567 134.889 30.463C134.901 30.4221 134.907 30.3812 134.924 30.3403C133.767 31.977 132.264 33.3391 130.516 34.327C130.154 34.4556 129.809 34.631 129.493 34.8531C122.683 37.9747 114.634 34.9817 111.512 28.1773C108.391 21.3671 111.383 13.3176 118.188 10.196C122.496 8.22019 127.518 8.64108 131.446 11.295L131.463 11.2716C131.586 11.3476 131.703 11.4295 131.832 11.4938C134.041 12.5811 136.719 11.675 137.806 9.45948C138.683 7.68239 138.279 5.54287 136.824 4.20421L136.841 4.18083C136.777 4.13406 136.707 4.09314 136.643 4.04638C136.409 3.85347 136.163 3.68394 135.894 3.54365C125.559 -3.10874 111.781 -0.121596 105.129 10.2136C98.4762 20.5487 101.463 34.327 111.799 40.9794C122.028 47.5616 135.643 44.7148 142.377 34.5901C142.407 34.555 142.436 34.5258 142.465 34.4965C142.64 34.2276 142.81 33.9646 142.974 33.6898C143.266 33.0936 143.418 32.4447 143.418 31.7841C143.418 31.7724 143.418 31.7666 143.418 31.7549C143.418 29.3465 141.46 27.394 139.051 27.394L139.057 27.3765Z"
            fill="white"
          />
          <path
            d="M162.925 14.6387C162.802 14.6387 162.685 14.6387 162.562 14.6387C158.207 14.7614 154.77 18.3916 154.893 22.7466C154.893 27.7154 158.459 30.8897 163.176 30.8897C165.585 30.8897 168.028 30.1531 169.571 28.7443L167.771 26.1137C166.608 27.0841 165.146 27.6278 163.626 27.6511C160.99 27.6511 159.417 26.0144 159.16 24.0619H170.694V23.1617C170.694 18.0935 167.543 14.6328 162.919 14.6328L162.925 14.6387ZM159.102 21.3086C159.26 19.3269 160.937 17.8187 162.925 17.8772C162.925 17.8772 162.977 17.8772 163.007 17.8772C164.988 17.7895 166.666 19.3327 166.748 21.3144H159.102V21.3086Z"
            fill="white"
          />
          <path
            d="M183.969 12.8147C186.091 12.8498 188.026 14.0423 189.014 15.9246L192.931 14.0014C191.183 10.6927 187.705 8.66427 183.969 8.77534C177.545 8.77534 172.564 13.2648 172.564 19.8354C172.564 26.4059 177.545 30.8954 183.969 30.8954C188.693 30.8954 191.393 28.2999 192.931 25.6401L189.014 23.7461C188.038 25.6343 186.097 26.8326 183.969 26.856C180.082 26.856 177.253 23.8747 177.253 19.8354C177.253 15.796 180.082 12.8147 183.969 12.8147Z"
            fill="white"
          />
          <path
            d="M202.606 14.6387C197.497 14.6387 194.416 18.3565 194.416 22.7525C194.416 27.1484 197.503 30.8955 202.606 30.8955C207.709 30.8955 210.831 27.1777 210.831 22.7525C210.831 18.3273 207.744 14.6387 202.606 14.6387ZM202.606 27.2712C200.069 27.2712 198.654 25.1901 198.654 22.7525C198.654 20.3148 200.069 18.263 202.606 18.263C205.143 18.263 206.593 20.3499 206.593 22.7525C206.593 25.1551 205.149 27.2712 202.606 27.2712Z"
            fill="white"
          />
          <path
            d="M223.194 14.6445C221.118 14.6153 219.137 15.4921 217.763 17.0471V15.0245H213.683V30.5097H217.763V20.0927C218.587 18.9586 219.897 18.2805 221.294 18.263C223.03 18.263 224.152 18.9995 224.152 21.1508V30.5097H228.233V19.5783C228.233 16.5619 226.596 14.6387 223.188 14.6387L223.194 14.6445Z"
            fill="white"
          />
          <path
            d="M238.457 27.2714C237.556 27.2714 237.042 26.5349 237.042 25.5703V18.5789H240.193V15.0189H237.042V10.7866H232.932V15.0189H230.36V18.5789H232.932V26.6576C232.932 29.4168 234.476 30.8899 237.334 30.8899C239.035 30.8899 240.128 30.4398 240.742 29.8962L239.877 26.8213C239.474 27.1253 238.971 27.289 238.462 27.2714H238.457Z"
            fill="white"
          />
          <path
            d="M246.904 17.1406V15.0245H242.823V30.5097H246.904V20.2856C247.582 19.2918 249.376 18.5202 250.727 18.5202C251.101 18.5144 251.481 18.5436 251.849 18.6137V14.6387C249.914 14.7147 248.108 15.6266 246.904 17.1406Z"
            fill="white"
          />
          <path
            d="M260.858 14.6387C258.374 14.5977 255.965 15.4629 254.077 17.0763L255.615 19.8004C256.83 18.6313 258.456 17.9765 260.145 17.9707C262.203 17.9707 263.553 18.9995 263.553 20.5662V22.6531C262.524 21.4372 260.694 20.7591 258.637 20.7591C256.164 20.7591 253.241 22.1387 253.241 25.763C253.241 29.3873 256.164 30.8897 258.637 30.8897C260.484 30.9656 262.279 30.2408 263.553 28.9021V30.5038H267.633V20.5019C267.633 16.0475 264.389 14.6328 260.858 14.6328V14.6387ZM263.553 26.786C262.723 27.7096 261.519 28.2065 260.274 28.1363C258.666 28.1363 257.351 27.3004 257.351 25.8624C257.351 24.4243 258.666 23.5241 260.274 23.5241C261.513 23.4481 262.717 23.945 263.553 24.8686V26.7918V26.786Z"
            fill="white"
          />
          <path
            d="M278.944 18.263C280.254 18.2104 281.493 18.8417 282.224 19.929L284.889 17.4271C283.86 16.0183 281.931 14.6387 278.751 14.6387C273.964 14.6387 270.526 18.0058 270.526 22.7525C270.526 27.4992 273.964 30.8955 278.751 30.8955C281.931 30.8955 283.86 29.5159 284.889 28.072L282.224 25.6052C281.475 26.6691 280.248 27.2946 278.944 27.2712C276.471 27.2712 274.735 25.4473 274.735 22.7525C274.735 20.0576 276.471 18.263 278.944 18.263Z"
            fill="white"
          />
          <path
            d="M295.131 26.8213C294.722 27.1253 294.225 27.2831 293.716 27.2714C292.816 27.2714 292.302 26.5349 292.302 25.5703V18.5789H295.453V15.0189H292.302V10.7866H288.186V15.0189H285.614V18.5789H288.186V26.6576C288.186 29.4168 289.73 30.8899 292.588 30.8899C294.289 30.8899 295.382 30.4398 295.996 29.8962L295.131 26.8213Z"
            fill="white"
          />
          <line x1="86.5" y1="9" x2="86.5" y2="30" stroke="white" />
          <path
            d="M78.0515 16.1818C78.1158 16.1058 78.1451 16.0123 78.1392 15.9129C78.1392 15.8428 78.1275 15.7785 78.0925 15.7142C78.0574 15.6557 78.0048 15.609 77.9463 15.5797C77.8937 15.5505 77.8353 15.5271 77.771 15.5213C77.6891 15.5096 77.6131 15.5037 77.5313 15.5096H76.9993V16.9768H77.3501V16.439H77.4903L77.9229 16.9768H78.3614L77.8294 16.3455C77.9171 16.3104 77.9872 16.252 78.0515 16.1818ZM77.7359 16.0474C77.7359 16.0474 77.7008 16.1 77.6716 16.1175C77.6423 16.1409 77.6073 16.1584 77.5722 16.1584C77.5254 16.1701 77.4787 16.176 77.426 16.176H77.3442V15.7609H77.4494C77.4904 15.7609 77.5313 15.7609 77.5722 15.7668C77.6014 15.7668 77.6365 15.7785 77.6599 15.796C77.6891 15.8077 77.7125 15.8311 77.73 15.8603C77.7417 15.8895 77.7476 15.9188 77.7476 15.948C77.7476 15.9831 77.7417 16.0182 77.73 16.0532L77.7359 16.0474ZM78.601 15.2348C78.0282 14.662 77.0987 14.6678 76.5317 15.2407C75.9646 15.8135 75.9646 16.743 76.5375 17.31C77.1104 17.8771 78.0398 17.8771 78.6069 17.3042C78.8816 17.0295 79.0336 16.6612 79.0336 16.2754C79.0395 15.8837 78.8816 15.5096 78.601 15.2348ZM78.3731 17.0879C78.1626 17.31 77.8645 17.4328 77.5605 17.4328C77.2565 17.4328 76.9584 17.31 76.748 17.0879C76.2978 16.6378 76.2978 15.9129 76.748 15.4628C76.9584 15.2407 77.2565 15.1179 77.5605 15.1179C77.8645 15.1179 78.1626 15.2348 78.3731 15.457C78.8232 15.9071 78.8232 16.6378 78.3731 17.0879ZM64.9455 25.874L61.5024 16.1058H55.3352L61.3212 30.8662H68.3652L74.398 16.1058H68.3419L64.9455 25.874ZM14.1641 18.7072C14.1641 18.7072 14.1349 18.6955 14.1232 18.6896C14.4564 18.561 14.7779 18.4032 15.0819 18.2161C17.4494 16.6261 18.0807 13.4227 16.4907 11.0552C15.5437 9.64051 13.9595 8.78704 12.2525 8.7695H0V30.8662H10.3176C10.5164 30.8662 10.7034 30.8662 10.8963 30.8603H13.6906C17.0519 30.7376 19.2557 27.9843 19.2557 24.5996C19.2557 21.6534 16.894 19.3853 14.1582 18.713L14.1641 18.7072ZM6.02105 12.8381H8.98481C9.32386 12.8439 9.66291 12.8966 9.98442 12.9901C10.6391 13.259 11.1419 13.8143 11.3406 14.4983C11.3815 14.6678 11.4049 14.8373 11.4049 15.0127C11.4049 15.3985 11.3406 15.7785 11.212 16.1409C11.06 16.4624 10.832 16.7489 10.5515 16.971C10.4462 17.0411 10.341 17.0996 10.2299 17.1522C9.86166 17.3334 9.45831 17.4387 9.04911 17.4679C8.6633 17.4854 8.48208 17.4971 7.52924 17.4971H6.02105V12.8439V12.8381ZM11.6914 26.213C11.1302 26.5754 10.4696 26.7742 9.79736 26.7742H6.0269V21.291H9.21864C9.44662 21.291 9.63953 21.291 9.7506 21.291C10.2241 21.291 10.6917 21.3611 11.1419 21.5072C11.2296 21.5365 11.3172 21.5715 11.4049 21.6066C12.7202 22.273 13.2463 23.8806 12.5858 25.1959C12.3812 25.6051 12.0713 25.95 11.6914 26.2072V26.213ZM31.97 16.1409L26.7674 22.7758V8.75781H20.9217V30.8662H26.7674L29.281 27.6803L31.6193 30.8662H38.2834L32.6657 23.3311L38.3009 16.1409H31.97ZM53.412 16.7196C52.2195 15.8486 49.32 15.4219 46.7128 15.4219C45.6548 15.4336 44.6025 15.5271 43.5562 15.6966C42.2935 15.8895 41.0542 16.2169 39.8617 16.667L41.5394 20.0458C42.6384 19.3794 43.8718 18.9644 45.1462 18.8182C45.9178 18.6955 46.707 18.6838 47.4786 18.7832C47.958 18.8299 48.4198 18.9994 48.8173 19.2742C49.3142 19.6483 49.5831 20.2563 49.5305 20.8759V20.987C47.3208 20.9636 45.117 21.215 42.9716 21.7294C40.9899 22.3081 38.9205 24.0677 38.9205 26.3942C39.0024 29.0482 41.1828 31.1526 43.8368 31.1351C43.9069 31.1351 44.5558 31.1468 44.5558 31.1468C46.3095 31.0532 48.0164 30.5154 49.5012 29.5801L50.4775 30.8896H55.1949V20.607C55.1949 18.8299 54.5987 17.5906 53.4061 16.7196H53.412ZM49.5071 26.8385C48.7764 27.5868 47.7943 28.0486 46.7479 28.1246C46.6602 28.1246 46.5725 28.1246 46.4849 28.107C46.4439 28.107 46.403 28.0953 46.3679 28.0953C46.3446 28.0953 46.3153 28.0836 46.292 28.0836C45.2222 27.8732 44.5207 26.8385 44.7312 25.7687C44.8831 24.9854 45.4969 24.3716 46.2803 24.2138C46.2978 24.2079 46.3095 24.2079 46.3329 24.1963C47.1337 24.0209 49.5012 23.7988 49.5012 23.7988V26.8444L49.5071 26.8385Z"
            fill="white"
          />
          <path
            d="M222.889 40.3071V42.546H225.058V40.3071H226.374V46.1294H225.058V43.6918H222.889V46.1294H221.568V40.3071H222.889Z"
            fill="white"
          />
          <path
            d="M233.061 39.5469C233.172 39.769 233.271 40.0671 233.271 40.4296C233.271 40.9557 232.985 41.3649 232.365 41.3766C232.64 41.815 232.85 42.4054 232.85 43.1537C232.85 45.0594 231.693 46.2168 229.992 46.2168C228.291 46.2168 227.256 44.9132 227.256 43.253C227.256 41.511 228.372 40.2074 230.085 40.2074C230.524 40.2074 230.88 40.2951 231.149 40.3828C231.436 40.488 231.769 40.6868 232.003 40.6868C232.219 40.6868 232.324 40.5757 232.324 40.3419C232.324 40.1081 232.236 39.8918 232.131 39.7106L233.061 39.5469ZM231.453 43.2004C231.453 42.154 230.95 41.2597 230.044 41.2597C229.138 41.2597 228.635 42.1482 228.635 43.2297C228.63 44.3286 229.162 45.1821 230.05 45.1821C230.939 45.1821 231.447 44.3345 231.447 43.2063L231.453 43.2004ZM229.448 47.4152C229.448 47.0761 229.717 46.8189 230.062 46.8189C230.383 46.8189 230.629 47.0761 230.629 47.4152C230.629 47.725 230.377 47.9997 230.062 47.9997C229.717 47.9997 229.448 47.725 229.448 47.4152Z"
            fill="white"
          />
          <path
            d="M233.704 40.383C234.107 40.3129 234.68 40.2603 235.481 40.2603C236.282 40.2603 236.872 40.4181 237.258 40.7279C237.627 41.0202 237.878 41.5054 237.878 42.0724C237.878 42.6394 237.685 43.1246 237.34 43.452C236.89 43.8729 236.224 44.0658 235.452 44.0658C235.277 44.0658 235.125 44.0599 235.002 44.0424V46.1235H233.698V40.383H233.704ZM235.008 43.0253C235.119 43.0486 235.259 43.0603 235.446 43.0603C236.148 43.0603 236.58 42.7038 236.58 42.1133C236.58 41.5755 236.212 41.2599 235.551 41.2599C235.282 41.2599 235.101 41.2832 235.008 41.3125V43.0311V43.0253Z"
            fill="white"
          />
          <path
            d="M239.924 42.6452H240.538V40.3654C241.023 40.2894 241.654 40.2368 242.315 40.2368C243.414 40.2368 244.139 40.4239 244.7 40.8506C245.302 41.3007 245.676 42.0431 245.676 43.072C245.676 44.2002 245.278 44.9777 244.717 45.457C244.103 45.9656 243.174 46.217 242.034 46.217C241.35 46.217 240.871 46.176 240.538 46.1293V43.6799H239.924V42.6511V42.6452ZM243.005 43.6741H241.847V45.1589C241.97 45.1764 242.151 45.1764 242.303 45.1764C243.513 45.1764 244.279 44.5392 244.279 43.1129C244.279 41.8502 243.577 41.254 242.437 41.254C242.151 41.254 241.964 41.2773 241.841 41.3066V42.6452H242.999V43.6741H243.005Z"
            fill="white"
          />
          <path
            d="M251.867 43.1538C251.867 45.0595 250.709 46.2169 249.008 46.2169C247.307 46.2169 246.272 44.9133 246.272 43.2531C246.272 41.5111 247.389 40.2075 249.102 40.2075C250.815 40.2075 251.867 41.5462 251.867 43.1538ZM247.664 43.2298C247.664 44.3697 248.202 45.1705 249.078 45.1705C249.955 45.1705 250.476 44.3229 250.476 43.1947C250.476 42.1483 249.973 41.2539 249.067 41.2539C248.161 41.2539 247.658 42.1015 247.658 43.2298H247.664ZM249.564 38.9273L250.341 39.9913H249.493L249.113 39.4476H249.096L248.71 39.9913H247.874L248.652 38.9273H249.569H249.564ZM250.511 38.3428L251.072 39.319H250.388L249.377 38.3428H250.511Z"
            fill="white"
          />
          <path
            d="M252.731 46.1236V40.3013H254.269L255.479 42.4349C255.824 43.0487 256.169 43.7736 256.426 44.4283H256.449C256.362 43.6625 256.338 42.8734 256.338 42.0024V40.3013H257.548V46.1236H256.169L254.924 43.8788C254.579 43.2592 254.199 42.5051 253.912 41.827H253.889C253.924 42.6045 253.942 43.4229 253.942 44.3757V46.1294H252.731V46.1236Z"
            fill="white"
          />
          <path
            d="M263.546 45.8604C263.143 46.0007 262.371 46.1877 261.605 46.1877C260.541 46.1877 259.775 45.9188 259.238 45.4044C258.7 44.9017 258.408 44.1418 258.419 43.2883C258.425 41.3534 259.834 40.2485 261.745 40.2485C262.5 40.2485 263.078 40.3947 263.359 40.535L263.084 41.5872C262.763 41.4469 262.365 41.3358 261.728 41.3358C260.629 41.3358 259.805 41.9555 259.805 43.2181C259.805 44.4808 260.559 45.1238 261.634 45.1238C261.938 45.1238 262.178 45.0888 262.283 45.0361V43.8202H261.383V42.7914H263.552V45.8545L263.546 45.8604Z"
            fill="white"
          />
          <path
            d="M265.773 42.6452H266.387V40.3654C266.872 40.2894 267.504 40.2368 268.164 40.2368C269.263 40.2368 269.988 40.4239 270.549 40.8506C271.151 41.3007 271.526 42.0431 271.526 43.072C271.526 44.2002 271.128 44.9777 270.567 45.457C269.953 45.9656 269.024 46.217 267.884 46.217C267.2 46.217 266.72 46.176 266.387 46.1293V43.6799H265.773V42.6511V42.6452ZM268.854 43.6741H267.697V45.1589C267.819 45.1764 268.001 45.1764 268.153 45.1764C269.363 45.1764 270.128 44.5392 270.128 43.1129C270.128 41.8502 269.427 41.254 268.287 41.254C268.001 41.254 267.814 41.2773 267.691 41.3066V42.6452H268.848V43.6741H268.854Z"
            fill="white"
          />
          <path d="M273.712 40.3071V46.1294H272.391V40.3071H273.712Z" fill="white" />
          <path
            d="M278.318 43.6627H276.179V45.0423H278.569V46.1238H274.857V40.3015H278.447V41.3829H276.179V42.593H278.318V43.6627ZM277.178 38.9336L278.061 39.9975H277.137L276.699 39.4597H276.681L276.249 39.9975H275.331L276.196 38.9336H277.178ZM276.179 47.4098C276.179 47.0708 276.436 46.8136 276.781 46.8136C277.126 46.8136 277.359 47.0708 277.359 47.4098C277.359 47.7197 277.108 47.9944 276.781 47.9944C276.436 47.9944 276.179 47.7197 276.179 47.4098Z"
            fill="white"
          />
          <path
            d="M279.464 46.1236V40.3013H281.001L282.211 42.4349C282.556 43.0487 282.901 43.7736 283.158 44.4283H283.182C283.094 43.6625 283.071 42.8734 283.071 42.0024V40.3013H284.281V46.1236H282.901L281.656 43.8788C281.311 43.2592 280.931 42.5051 280.645 41.827H280.621C280.656 42.6045 280.674 43.4229 280.674 44.3757V46.1294H279.464V46.1236Z"
            fill="white"
          />
          <path d="M287.946 41.412H286.385V40.3071H290.857V41.412H289.267V46.1236H287.946V41.412Z" fill="white" />
          <path
            d="M297.182 39.2433C297.293 39.4654 297.375 39.7519 297.375 40.0442C297.375 40.5703 297.083 40.9269 296.451 40.9853L296.305 41.0028V43.5691C296.305 45.3637 295.399 46.2172 293.879 46.2172C292.359 46.2172 291.547 45.4046 291.547 43.5516V40.3072H292.868V43.6568C292.868 44.6564 293.248 45.165 293.92 45.165C294.592 45.165 294.99 44.6798 294.99 43.6568V40.3072H295.99C296.346 40.3072 296.44 40.1961 296.44 39.9682C296.44 39.7869 296.381 39.5882 296.258 39.3894L297.182 39.2433ZM293.821 39.898C293.949 39.5063 294.242 39.442 294.242 39.1556C294.242 38.9978 294.131 38.8984 293.99 38.8984C293.827 38.8984 293.681 39.0738 293.599 39.1907L293.184 38.9393C293.382 38.5418 293.71 38.2554 294.236 38.2554C294.704 38.2554 295.072 38.5944 295.072 38.9919C295.072 39.5005 294.651 39.594 294.417 40.0266L293.815 39.898H293.821Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'export-white':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9H15V3H9V9H5L12 16L19 9ZM11 11V5H13V11H14.17L12 13.17L9.83 11H11ZM5 18H19V20H5V18Z" fill="white" />
        </svg>
      );
      break;
    case 'setting-grey':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5698 5.11 19.3998 5.02 19.2198 5.02C19.1598 5.02 19.0998 5.03 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.88984 5.03 4.82984 5.02 4.76984 5.02C4.59984 5.02 4.42984 5.11 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.42984 18.89 4.59984 18.98 4.77984 18.98C4.83984 18.98 4.89984 18.97 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.1098 18.97 19.1698 18.98 19.2298 18.98C19.3998 18.98 19.5698 18.89 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM17.4498 11.27C17.4898 11.58 17.4998 11.79 17.4998 12C17.4998 12.21 17.4798 12.43 17.4498 12.73L17.3098 13.86L18.1998 14.56L19.2798 15.4L18.5798 16.61L17.3098 16.1L16.2698 15.68L15.3698 16.36C14.9398 16.68 14.5298 16.92 14.1198 17.09L13.0598 17.52L12.8998 18.65L12.6998 20H11.2998L11.1098 18.65L10.9498 17.52L9.88984 17.09C9.45984 16.91 9.05984 16.68 8.65984 16.38L7.74984 15.68L6.68984 16.11L5.41984 16.62L4.71984 15.41L5.79984 14.57L6.68984 13.87L6.54984 12.74C6.51984 12.43 6.49984 12.2 6.49984 12C6.49984 11.8 6.51984 11.57 6.54984 11.27L6.68984 10.14L5.79984 9.44L4.71984 8.6L5.41984 7.39L6.68984 7.9L7.72984 8.32L8.62984 7.64C9.05984 7.32 9.46984 7.08 9.87984 6.91L10.9398 6.48L11.0998 5.35L11.2998 4H12.6898L12.8798 5.35L13.0398 6.48L14.0998 6.91C14.5298 7.09 14.9298 7.32 15.3298 7.62L16.2398 8.32L17.2998 7.89L18.5698 7.38L19.2698 8.59L18.1998 9.44L17.3098 10.14L17.4498 11.27ZM11.9998 8C9.78984 8 7.99984 9.79 7.99984 12C7.99984 14.21 9.78984 16 11.9998 16C14.2098 16 15.9998 14.21 15.9998 12C15.9998 9.79 14.2098 8 11.9998 8ZM11.9998 14C10.8998 14 9.99984 13.1 9.99984 12C9.99984 10.9 10.8998 10 11.9998 10C13.0998 10 13.9998 10.9 13.9998 12C13.9998 13.1 13.0998 14 11.9998 14Z"
            fill="#626262"
          />
        </svg>
      );
      break;
    case 'setting-black':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_8003_19558)">
            <g clipPath="url(#clip1_8003_19558)">
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#333333"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9996 12C19.9984 11.4239 19.9354 10.8496 19.8116 10.287L22.5256 8.232L20.5256 4.768L17.3826 6.094C16.5315 5.3137 15.5213 4.72723 14.4216 4.375L13.9996 1H9.99963L9.57763 4.375C8.47798 4.72723 7.46777 5.3137 6.61663 6.094L3.47363 4.768L1.47363 8.232L4.18763 10.287C3.93703 11.4153 3.93703 12.5847 4.18763 13.713L1.47363 15.768L3.47363 19.232L6.61663 17.906C7.46777 18.6863 8.47798 19.2728 9.57763 19.625L9.99963 23H13.9996L14.4216 19.625C15.5213 19.2728 16.5315 18.6863 17.3826 17.906L20.5256 19.232L22.5256 15.768L19.8116 13.713C19.9354 13.1504 19.9984 12.5761 19.9996 12V12Z"
                stroke="#333333"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_8003_19558">
              <rect width="24" height="24" fill="white" />
            </clipPath>
            <clipPath id="clip1_8003_19558">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'point-up':
      iconElement = (
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5L5 -4.37114e-07L0 5L10 5Z" fill="#323232" />
        </svg>
      );
      break;
    case 'point-down':
      iconElement = (
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L5 5L10 0H0Z" fill="#323232" />
        </svg>
      );
      break;
    case 'warning-1':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6829_22927)">
            <path
              d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="#08B7DD"
            />
          </g>
          <defs>
            <clipPath id="clip0_6829_22927">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'setting-white':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.4298 10.98C17.4698 10.66 17.4998 10.34 17.4998 10C17.4998 9.66 17.4698 9.34 17.4298 9.02L19.5398 7.37C19.7298 7.22 19.7798 6.95 19.6598 6.73L17.6598 3.27C17.5698 3.11 17.3998 3.02 17.2198 3.02C17.1598 3.02 17.0998 3.03 17.0498 3.05L14.5598 4.05C14.0398 3.65 13.4798 3.32 12.8698 3.07L12.4898 0.42C12.4598 0.18 12.2498 0 11.9998 0H7.99984C7.74984 0 7.53984 0.18 7.50984 0.42L7.12984 3.07C6.51984 3.32 5.95984 3.66 5.43984 4.05L2.94984 3.05C2.88984 3.03 2.82984 3.02 2.76984 3.02C2.59984 3.02 2.42984 3.11 2.33984 3.27L0.339839 6.73C0.209839 6.95 0.26984 7.22 0.45984 7.37L2.56984 9.02C2.52984 9.34 2.49984 9.67 2.49984 10C2.49984 10.33 2.52984 10.66 2.56984 10.98L0.45984 12.63C0.26984 12.78 0.219839 13.05 0.339839 13.27L2.33984 16.73C2.42984 16.89 2.59984 16.98 2.77984 16.98C2.83984 16.98 2.89984 16.97 2.94984 16.95L5.43984 15.95C5.95984 16.35 6.51984 16.68 7.12984 16.93L7.50984 19.58C7.53984 19.82 7.74984 20 7.99984 20H11.9998C12.2498 20 12.4598 19.82 12.4898 19.58L12.8698 16.93C13.4798 16.68 14.0398 16.34 14.5598 15.95L17.0498 16.95C17.1098 16.97 17.1698 16.98 17.2298 16.98C17.3998 16.98 17.5698 16.89 17.6598 16.73L19.6598 13.27C19.7798 13.05 19.7298 12.78 19.5398 12.63L17.4298 10.98ZM15.4498 9.27C15.4898 9.58 15.4998 9.79 15.4998 10C15.4998 10.21 15.4798 10.43 15.4498 10.73L15.3098 11.86L16.1998 12.56L17.2798 13.4L16.5798 14.61L15.3098 14.1L14.2698 13.68L13.3698 14.36C12.9398 14.68 12.5298 14.92 12.1198 15.09L11.0598 15.52L10.8998 16.65L10.6998 18H9.2998L9.1098 16.65L8.9498 15.52L7.88984 15.09C7.45984 14.91 7.05984 14.68 6.65984 14.38L5.74984 13.68L4.68984 14.11L3.41984 14.62L2.71984 13.41L3.79984 12.57L4.68984 11.87L4.54984 10.74C4.51984 10.43 4.49984 10.2 4.49984 10C4.49984 9.8 4.51984 9.57 4.54984 9.27L4.68984 8.14L3.79984 7.44L2.71984 6.6L3.41984 5.39L4.68984 5.9L5.72984 6.32L6.62984 5.64C7.05984 5.32 7.46984 5.08 7.87984 4.91L8.9398 4.48L9.0998 3.35L9.2998 2H10.6898L10.8798 3.35L11.0398 4.48L12.0998 4.91C12.5298 5.09 12.9298 5.32 13.3298 5.62L14.2398 6.32L15.2998 5.89L16.5698 5.38L17.2698 6.59L16.1998 7.44L15.3098 8.14L15.4498 9.27ZM9.9998 6C7.78984 6 5.99984 7.79 5.99984 10C5.99984 12.21 7.78984 14 9.9998 14C12.2098 14 13.9998 12.21 13.9998 10C13.9998 7.79 12.2098 6 9.9998 6ZM9.9998 12C8.8998 12 7.99984 11.1 7.99984 10C7.99984 8.9 8.8998 8 9.9998 8C11.0998 8 11.9998 8.9 11.9998 10C11.9998 11.1 11.0998 12 9.9998 12Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'addlist':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6667 2H3.33333C2.59333 2 2 2.6 2 3.33333V12.6667C2 13.4 2.59333 14 3.33333 14H12.6667C13.4 14 14 13.4 14 12.6667V3.33333C14 2.6 13.4 2 12.6667 2ZM12.6667 12.6667H3.33333V3.33333H12.6667V12.6667ZM7.33333 11.3333H8.66667V8.66667H11.3333V7.33333H8.66667V4.66667H7.33333V7.33333H4.66667V8.66667H7.33333V11.3333Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'hiddenlist':
      iconElement = (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0ZM10.6667 10.6667H1.33333V1.33333H10.6667V10.6667ZM2.66667 5.33333H9.33333V6.66667H2.66667V5.33333Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;

    case 'pen-black':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667L2 11.5ZM3.94667 12.6667H3.33333V12.0533L9.37333 6.01333L9.98667 6.62667L3.94667 12.6667ZM13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2C11.6 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'graydot':
      iconElement = (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="#626262" />
        </svg>
      );
      break;

    case 'vbm-tv':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM18 12H6V10H18V12ZM14 16H6V14H14V16Z"
            fill="#626262"
          />
        </svg>
      );
      break;
    case 'vbm-pen':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
            fill="#626262"
          />
        </svg>
      );
      break;

    case 'vbm-upload':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 16H15V10H19L12 3L5 10H9V16ZM12 5.83L14.17 8H13V14H11V8H9.83L12 5.83ZM5 18H19V20H5V18Z"
            fill="#626262"
          />
        </svg>
      );
      break;

    case 'pen-primary':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667L2 11.5ZM3.94667 12.6667H3.33333V12.0533L9.37333 6.01333L9.98667 6.62667L3.94667 12.6667ZM13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2C11.6 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'upload-success':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'dot-black':
      iconElement = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#222D4B" />
        </svg>
      );
      break;
    case 'upload-green':
      iconElement = (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5 24H22.5V15H28.5L18 4.5L7.5 15H13.5V24ZM18 8.745L21.255 12H19.5V21H16.5V12H14.745L18 8.745ZM7.5 27H28.5V30H7.5V27Z"
            fill="#00C968"
          />
        </svg>
      );
      break;

    case 'dot-border':
      iconElement = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="3.5" fill="white" stroke="#222D4B" />
        </svg>
      );
      break;
    case 'plus-plus':
      iconElement = (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.66634 5.66732H5.66634V9.66732H4.33301V5.66732H0.333008V4.33398H4.33301V0.333984H5.66634V4.33398H9.66634V5.66732Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'apart-apart':
      iconElement = (
        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.66634 1.66732H0.333008V0.333984H9.66634V1.66732Z" fill="#222D4B" />
        </svg>
      );
      break;

    case 'rectangle-black':
      iconElement = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="8" height="8" fill="#222D4B" />
        </svg>
      );
      break;
    case 'square-square':
      iconElement = (
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="5" height="5" fill="white" stroke="#C5CED9" />
        </svg>
      );
      break;
    case 'eraser':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_5168_17024)">
            <path
              d="M14.0205 6L21.0916 13.0711L13.1419 21.0208L6.99963 21.0208L2.99969 17.0208L14.0205 6Z"
              stroke="#626262"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M9.5 11L14 6.5L20.5 13L16 17.5L9.5 11Z" fill="#626262" />
          </g>
          <defs>
            <clipPath id="clip0_5168_17024">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;

    case 'edit-primary':
      iconElement = (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02V6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0V0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19V3.19Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'white-upload':
      iconElement = (
        <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 13H10V7H14L7 0L0 7H4V13ZM7 2.83L9.17 5H8V11H6V5H4.83L7 2.83ZM0 15H14V17H0V15Z" fill="white" />
        </svg>
      );
      break;
    case 'red-warning':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.00033 3.99398L13.0203 12.6673H2.98033L8.00033 3.99398ZM8.00033 1.33398L0.666992 14.0007H15.3337L8.00033 1.33398ZM8.66699 10.6673H7.33366V12.0007H8.66699V10.6673ZM8.66699 6.66732H7.33366V9.33398H8.66699V6.66732Z"
            fill="#E50500"
          />
        </svg>
      );
      break;

    case 'black-dot':
      iconElement = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill="#222D4B" />
        </svg>
      );
      break;

    case 'expire-date-sign':
      iconElement = (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4831_16432)">
            <path
              d="M24.9992 11.1104C17.3604 11.1104 11.1104 17.3604 11.1104 24.9992C11.1104 32.6381 17.3604 38.8881 24.9992 38.8881C32.6381 38.8881 38.8881 32.6381 38.8881 24.9992C38.8881 17.3604 32.6381 11.1104 24.9992 11.1104ZM24.9992 36.1103C18.8742 36.1103 13.8881 31.1242 13.8881 24.9992C13.8881 18.8742 18.8742 13.8881 24.9992 13.8881C31.1242 13.8881 36.1103 18.8742 36.1103 24.9992C36.1103 31.1242 31.1242 36.1103 24.9992 36.1103ZM25.6937 18.0548H23.6103V26.3881L30.8326 30.8326L31.9437 29.027L25.6937 25.277V18.0548Z"
              fill="#E50500"
            />
          </g>
          <circle cx="25" cy="25" r="24.5" stroke="#E50500" strokeDasharray="5 5" />
          <defs>
            <clipPath id="clip0_4831_16432">
              <rect width="33.3333" height="33.3333" fill="white" transform="translate(8.33301 8.33301)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'zoom-in':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect opacity="0.5" width="24" height="24" rx="4" fill="#222D4B" />
          <path
            d="M15 3L17.3 5.3L14.41 8.17L15.83 9.59L18.7 6.7L21 9V3H15ZM3 9L5.3 6.7L8.17 9.59L9.59 8.17L6.7 5.3L9 3H3V9ZM9 21L6.7 18.7L9.59 15.83L8.17 14.41L5.3 17.3L3 15V21H9ZM21 15L18.7 17.3L15.83 14.41L14.41 15.83L17.3 18.7L15 21H21V15Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'zoom-out':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#08B7DD" />
          <path
            d="M15 3L17.3 5.3L14.41 8.17L15.83 9.59L18.7 6.7L21 9V3H15ZM3 9L5.3 6.7L8.17 9.59L9.59 8.17L6.7 5.3L9 3H3V9ZM9 21L6.7 18.7L9.59 15.83L8.17 14.41L5.3 17.3L3 15V21H9ZM21 15L18.7 17.3L15.83 14.41L14.41 15.83L17.3 18.7L15 21H21V15Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'arrow-down-primary':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10H7Z" fill={fill || '#08B7DD'} />
        </svg>
      );
      break;

    case 'arrow-up-primary':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14L12 9L17 14H7Z" fill={fill || '#08B7DD'} />
        </svg>
      );
      break;
    case 'arrow-down-primary-black':
      iconElement = (
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L5 5L10 0H0Z" fill="#323232" />
        </svg>
      );
      break;
    case 'arrow-up-primary-black':
      iconElement = (
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5L5 0L10 5H0Z" fill="#323232" />
        </svg>
      );
      break;

    case 'pin':
      iconElement = (
        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_4412_19837)">
            <path
              d="M18.6293 10.4433L14.658 19.1651C13.8948 20.8411 11.9191 21.5806 10.243 20.8174C8.56689 20.0542 7.82747 18.0785 8.59066 16.4024L12.9073 6.92223C13.3839 5.87562 14.6201 5.41297 15.6667 5.88953C16.7133 6.36609 17.1759 7.60228 16.6994 8.64889L13.0734 16.6122C12.8835 17.0294 12.3868 17.2152 11.9696 17.0253C11.5525 16.8354 11.3666 16.3387 11.5566 15.9216L14.8372 8.71664L13.6996 8.19864L10.4189 15.4036C9.94238 16.4502 10.405 17.6864 11.4516 18.1629C12.4983 18.6395 13.7344 18.1768 14.211 17.1302L17.837 9.16689C18.6002 7.4908 17.8608 5.5151 16.1847 4.75191C14.5086 3.98873 12.5329 4.72814 11.7697 6.40423L7.45304 15.8844C6.40323 18.19 7.41941 20.9052 9.72498 21.955C12.0306 23.0048 14.7458 21.9886 15.7956 19.6831L19.7669 10.9613L18.6293 10.4433Z"
              fill="#08B7DD"
            />
          </g>
          <defs>
            <clipPath id="clip0_4412_19837">
              <rect width="20" height="20" fill="white" transform="translate(0.106445 18.9487) rotate(-65.5185)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'add-primary':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#219653" />
        </svg>
      );
      break;
    case 'copyVBM':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z"
            fill="#8E24AA"
          />
        </svg>
      );
      break;
    case 'accountCircle':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
            fill="#089DDD"
          />
        </svg>
      );
      break;
    case 'emptySign':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
            fill="#E50500"
          />
        </svg>
      );
      break;
    case 'empty':
      iconElement = (
        <svg width="97" height="62" viewBox="0 0 97 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48.5 61.9989C75.2858 61.9989 97 57.2596 97 51.4135C97 45.5674 75.2858 40.8281 48.5 40.8281C21.7142 40.8281 0 45.5674 0 51.4135C0 57.2596 21.7142 61.9989 48.5 61.9989Z"
            fill="#DCDCDC"
          />
          <path
            d="M83.3594 20.8082L67.9823 3.41315C67.2444 2.22824 66.1659 1.51172 65.0306 1.51172H31.9694C30.8341 1.51172 29.7556 2.22842 29.0177 3.41315L13.6406 20.8082L13.6406 34.78H83.3594V20.8082Z"
            stroke="#B3AAAA"
          />
          <path
            d="M63.0701 25.6029C63.0701 23.1749 64.5762 21.1703 66.4445 21.1699H83.3594V48.5968C83.3594 51.8054 81.3578 54.4382 78.8889 54.4382H18.1111C15.642 54.4382 13.6406 51.8052 13.6406 48.5968V21.1699H30.5555C32.4238 21.1699 33.9299 23.1703 33.9299 25.5983V25.6304C33.9299 28.0584 35.4531 30.0181 37.3214 30.0181H59.6786C61.5469 30.0181 63.0701 28.0404 63.0701 25.6123V25.6029Z"
            fill="#FAFAFA"
            stroke="#B3AAAA"
          />
        </svg>
      );
      break;
    case 'uploadVBMIcon':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 16H15V10H19L12 3L5 10H9V16ZM12 5.83L14.17 8H13V14H11V8H9.83L12 5.83ZM5 18H19V20H5V18Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'settingVBM':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.4308 12.98C19.4708 12.66 19.5008 12.34 19.5008 12C19.5008 11.66 19.4708 11.34 19.4308 11.02L21.5408 9.37C21.7308 9.22 21.7808 8.95 21.6608 8.73L19.6608 5.27C19.5708 5.11 19.4008 5.02 19.2208 5.02C19.1608 5.02 19.1008 5.03 19.0508 5.05L16.5608 6.05C16.0408 5.65 15.4808 5.32 14.8708 5.07L14.4908 2.42C14.4608 2.18 14.2508 2 14.0008 2H10.0008C9.75082 2 9.54082 2.18 9.51082 2.42L9.13082 5.07C8.52082 5.32 7.96082 5.66 7.44082 6.05L4.95082 5.05C4.89082 5.03 4.83082 5.02 4.77082 5.02C4.60082 5.02 4.43082 5.11 4.34082 5.27L2.34082 8.73C2.21082 8.95 2.27082 9.22 2.46082 9.37L4.57082 11.02C4.53082 11.34 4.50082 11.67 4.50082 12C4.50082 12.33 4.53082 12.66 4.57082 12.98L2.46082 14.63C2.27082 14.78 2.22082 15.05 2.34082 15.27L4.34082 18.73C4.43082 18.89 4.60082 18.98 4.78082 18.98C4.84082 18.98 4.90082 18.97 4.95082 18.95L7.44082 17.95C7.96082 18.35 8.52082 18.68 9.13082 18.93L9.51082 21.58C9.54082 21.82 9.75082 22 10.0008 22H14.0008C14.2508 22 14.4608 21.82 14.4908 21.58L14.8708 18.93C15.4808 18.68 16.0408 18.34 16.5608 17.95L19.0508 18.95C19.1108 18.97 19.1708 18.98 19.2308 18.98C19.4008 18.98 19.5708 18.89 19.6608 18.73L21.6608 15.27C21.7808 15.05 21.7308 14.78 21.5408 14.63L19.4308 12.98V12.98ZM17.4508 11.27C17.4908 11.58 17.5008 11.79 17.5008 12C17.5008 12.21 17.4808 12.43 17.4508 12.73L17.3108 13.86L18.2008 14.56L19.2808 15.4L18.5808 16.61L17.3108 16.1L16.2708 15.68L15.3708 16.36C14.9408 16.68 14.5308 16.92 14.1208 17.09L13.0608 17.52L12.9008 18.65L12.7008 20H11.3008L11.1108 18.65L10.9508 17.52L9.89082 17.09C9.46082 16.91 9.06082 16.68 8.66082 16.38L7.75082 15.68L6.69082 16.11L5.42082 16.62L4.72082 15.41L5.80082 14.57L6.69082 13.87L6.55082 12.74C6.52082 12.43 6.50082 12.2 6.50082 12C6.50082 11.8 6.52082 11.57 6.55082 11.27L6.69082 10.14L5.80082 9.44L4.72082 8.6L5.42082 7.39L6.69082 7.9L7.73082 8.32L8.63082 7.64C9.06082 7.32 9.47082 7.08 9.88082 6.91L10.9408 6.48L11.1008 5.35L11.3008 4H12.6908L12.8808 5.35L13.0408 6.48L14.1008 6.91C14.5308 7.09 14.9308 7.32 15.3308 7.62L16.2408 8.32L17.3008 7.89L18.5708 7.38L19.2708 8.59L18.2008 9.44L17.3108 10.14L17.4508 11.27ZM12.0008 8C9.79082 8 8.00082 9.79 8.00082 12C8.00082 14.21 9.79082 16 12.0008 16C14.2108 16 16.0008 14.21 16.0008 12C16.0008 9.79 14.2108 8 12.0008 8ZM12.0008 14C10.9008 14 10.0008 13.1 10.0008 12C10.0008 10.9 10.9008 10 12.0008 10C13.1008 10 14.0008 10.9 14.0008 12C14.0008 13.1 13.1008 14 12.0008 14Z"
            fill="#F57C00"
          />
        </svg>
      );
      break;
    case 'starOrange':
      iconElement = (
        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.99935 5.75797L6.05935 7.0013L5.51268 4.65797L7.33268 3.0813L4.93602 2.87797L3.99935 0.667969L3.06268 2.87797L0.666016 3.0813L2.48602 4.65797L1.93935 7.0013L3.99935 5.75797Z"
            fill="#F57C00"
          />
        </svg>
      );
      break;
    case 'writeVBM':
      iconElement = (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="49" stroke="#8E24AA" strokeWidth="2" />
          <path
            d="M54.2917 43.7917L56.2083 45.7083L37.3333 64.5833H35.4167V62.6667L54.2917 43.7917V43.7917ZM61.7917 31.25C61.2708 31.25 60.7292 31.4583 60.3333 31.8542L56.5208 35.6667L64.3333 43.4792L68.1458 39.6667C68.9583 38.8542 68.9583 37.5417 68.1458 36.7292L63.2708 31.8542C62.8542 31.4375 62.3333 31.25 61.7917 31.25V31.25ZM54.2917 37.8958L31.25 60.9375V68.75H39.0625L62.1042 45.7083L54.2917 37.8958V37.8958Z"
            fill="#8E24AA"
          />
        </svg>
      );
      break;
    case 'uploadVBM':
      iconElement = (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="49" stroke="#00C968" strokeWidth="2" />
          <path
            d="M43.7493 58.3333H56.2494V45.8333H64.5827L49.9993 31.25L35.416 45.8333H43.7493V58.3333ZM49.9993 37.1458L54.5202 41.6667H52.0827V54.1667H47.916V41.6667H45.4785L49.9993 37.1458ZM35.416 62.5H64.5827V66.6667H35.416V62.5Z"
            fill="#00C968"
          />
        </svg>
      );
      break;
    case 'sign':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 0H3C1.34325 0 0 1.34325 0 3V21C0 22.6568 1.34325 24 3 24H11.25V22.5H3C2.17387 22.5 1.5 21.8276 1.5 21V3C1.5 2.17237 2.17387 1.5 3 1.5H18C18.8276 1.5 19.5 2.17237 19.5 3V11.8183L21 10.3183V3C21 1.34325 19.6568 0 18 0Z"
            fill="#8E24AA"
          />
          <path
            d="M23.5605 13.5L22.5 12.4395C22.2069 12.1464 21.8233 12 21.4395 12C21.0557 12 20.6719 12.1464 20.379 12.4395L13.9395 18.879C13.6464 19.1721 12.7504 20.3049 12.75 20.6887L12 24L15.3105 23.25C15.3105 23.25 16.8281 22.3536 17.121 22.0605L23.5605 15.621C24.1464 15.0352 24.1464 14.0852 23.5605 13.5ZM16.5922 21.5287C16.5073 21.6094 16.2135 21.8078 15.8546 22.0363L13.9116 20.0933C14.1109 19.8201 14.3327 19.5454 14.4697 19.4092L19.3183 14.5607L21.4395 16.6819L16.5922 21.5287Z"
            fill="#8E24AA"
          />
          <path opacity="0.3" d="M16.5 6H4.5V4.5H16.5V6Z" fill="#8E24AA" />
          <path opacity="0.3" d="M16.5 9H4.5V7.5H16.5V9Z" fill="#8E24AA" />
          <path opacity="0.3" d="M16.5 12H4.5V10.5H16.5V12Z" fill="#8E24AA" />
          <path opacity="0.3" d="M10.5 15H4.5V13.5H10.5V15Z" fill="#8E24AA" />
        </svg>
      );
      break;
    case 'iconSigned':
      iconElement = (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2210_12464)">
            <path
              d="M14.3242 8.95268C14.4809 8.97506 14.6376 9.01982 14.8166 9.06458L15.1747 9.98222L15.6223 9.15411C15.9357 9.15411 16.249 9.17649 16.5624 9.17649L15.9581 8.39314C15.9804 8.326 16.0028 8.25885 16.0252 8.19171C15.9581 8.16933 15.8909 8.14695 15.7566 8.10219C15.9581 7.90075 16.0476 7.81123 16.1595 7.85599C16.2043 7.74408 16.249 7.60979 16.2938 7.49789C15.9804 7.58741 15.6671 7.7217 15.3538 7.83361C15.1747 7.69932 14.9957 7.58741 14.8166 7.45312C14.8166 7.60979 14.839 7.78885 14.7718 7.99028C14.6823 7.78885 14.6152 7.63218 14.548 7.52027C14.5704 7.76646 14.5704 8.03504 14.5928 8.28124C14.5704 8.30362 14.5257 8.326 14.5033 8.37076C14.5928 8.37076 14.6823 8.37076 14.7942 8.37076C14.7942 8.66172 14.6823 8.84077 14.3242 8.95268Z"
              fill="#00C968"
            />
            <path
              d="M13.8545 8.86288C13.8993 8.86288 13.944 8.88527 13.9888 8.88527C13.9888 8.8405 13.9888 8.79574 13.9888 8.75098C13.9216 8.79574 13.8993 8.81812 13.8545 8.86288Z"
              fill="#00C968"
            />
            <path
              d="M20.1208 5.93097C19.9194 5.68477 19.6956 5.43858 19.4718 5.19238C19.4046 5.5281 19.3375 5.84144 19.2927 6.17716L18.8451 6.3786L18.3975 6.60241C18.7108 6.7367 19.0018 6.87099 19.2927 7.02766L19.427 7.99006L20.0761 7.31861C20.3894 7.38576 20.6804 7.49766 20.9713 7.58719L20.5908 6.69193C20.7699 6.42336 20.9489 6.1324 21.128 5.86382C20.7923 5.86382 20.4565 5.90859 20.1208 5.93097Z"
              fill="#00C968"
            />
            <path
              d="M10.9897 12.1309L11.5716 12.9142C11.6387 12.6009 11.7283 12.3099 11.8178 11.9966C12.1087 11.907 12.4445 11.8623 12.7354 11.7951L11.9521 11.1908C11.9744 10.8775 11.9968 10.5418 12.0416 10.2061C11.7506 10.3851 11.4821 10.5865 11.2135 10.7656C10.9001 10.6537 10.5868 10.5418 10.2735 10.4299C10.363 10.7432 10.4749 11.0565 10.5868 11.3699C10.3854 11.6385 10.1839 11.907 10.0049 12.1756C10.3406 12.1756 10.6539 12.1532 10.9897 12.1309Z"
              fill="#00C968"
            />
            <path
              d="M18.1292 35.8776C18.1515 35.6538 18.1292 35.5867 17.9053 35.4748C17.5696 35.3181 17.9501 35.139 18.0396 34.9824C17.9501 34.8929 17.9053 34.8257 17.7934 34.6914C18.0396 34.5795 18.2635 34.4676 18.5096 34.3333C18.6216 34.7138 18.7111 35.0271 18.8006 35.3629C19.2706 35.3629 19.4273 35.721 19.6287 36.1462C19.2259 36.0567 19.3154 35.9672 19.1587 36.4595L22.8293 38.5858C22.8069 38.4291 22.8516 38.2948 23.0083 38.2724C23.0978 38.2501 23.2097 38.2948 23.2769 38.3396L25.1122 35.1614C25.0674 35.1614 25.045 35.1838 25.0002 35.1838C24.9555 35.1838 24.9107 35.0719 24.9107 35.0495C24.9331 35.0048 25.0002 34.96 25.1122 34.8928C25.1345 34.96 25.1569 35.0048 25.1793 35.0495L25.9403 33.7514C25.8507 33.729 25.7388 33.7066 25.5598 33.6395C25.7388 33.5723 25.9179 33.4828 26.0969 33.5052L26.6788 32.4757C26.5893 32.5204 26.4998 32.5652 26.3655 32.5876C26.1193 31.9161 26.3431 31.5804 27.0817 31.5804C27.0593 31.6923 27.0369 31.7818 27.0146 31.8937L30.797 25.3584C30.7523 25.4031 30.7299 25.4255 30.6627 25.4703C30.6851 25.1346 30.7075 24.9331 30.9985 25.0003L33.4828 20.7031C33.4604 20.6583 33.4156 20.5688 33.3709 20.4792C33.438 20.4792 33.5276 20.4792 33.5947 20.5016L37.1533 14.3244L30.5508 10.5195L20.3002 28.2903L13.7872 24.5303L9.95996 31.1552L18.1292 35.8776Z"
              fill="#00C968"
            />
            <path
              d="M0 25.0001C0 25.0896 0 25.1567 0 25.2463C0.0447628 25.2239 0.0895255 25.2015 0.179051 25.2015C0.201432 25.2015 0.290958 25.3134 0.268577 25.3134C0.201432 25.4029 0.15667 25.5148 0.0671442 25.5596C0.0447628 25.5596 0.0223814 25.582 0 25.582C0.0223814 26.9025 0.15667 28.2006 0.402865 29.4764C0.470009 29.4316 0.514772 29.3644 0.559535 29.2749C0.626679 29.1406 0.895255 29.0959 1.09669 29.0063C1.16383 28.6035 0.738586 28.7154 0.581916 28.5363C0.49239 28.2006 0.425246 27.8649 0.290958 27.3725C0.760967 27.7082 0.984781 28.1335 1.38765 28.3349C1.49955 28.3797 1.61146 28.4468 1.72337 28.514C1.70099 28.2901 1.65622 28.0887 1.63384 27.8649C1.41003 27.932 1.20859 27.9768 1.00716 27.753C0.581916 27.2606 0.783348 26.7906 0.80573 26.6339C1.09669 26.522 1.3205 26.4772 1.49955 26.5444C1.47717 26.3206 1.47717 26.0968 1.45479 25.8506C1.41003 25.8506 1.38765 25.8282 1.34288 25.8282C1.09669 25.7163 1.25336 25.582 1.36526 25.4029C1.38765 25.4253 1.41003 25.4477 1.43241 25.4701C1.38765 23.6124 1.5667 21.7772 1.96956 20.009C1.79051 19.8524 1.74575 19.7181 1.79051 19.5614C1.83527 19.4271 1.9248 19.36 2.12623 19.3824C3.9615 11.9517 9.35542 5.61781 16.8979 2.8649C16.8308 2.79775 16.7637 2.73061 16.6741 2.66346C16.8532 2.6187 16.9651 2.57394 17.1441 2.52918C17.1218 2.6187 17.1218 2.70823 17.1218 2.79775C17.547 2.64108 17.9946 2.50679 18.4423 2.37251C18.3751 2.17107 18.2856 1.94726 18.1961 1.67868C18.4199 1.74583 19.3151 1.85773 19.0913 2.19345C22.5381 1.2982 26.0295 1.20867 29.3196 1.83535C29.2972 1.81297 29.2972 1.81297 29.2748 1.79059C29.7225 1.67868 29.7672 1.6563 29.9687 1.96964C30.5058 2.08155 31.0206 2.21584 31.5354 2.37251C31.5577 2.35012 31.5801 2.30536 31.6249 2.2606C31.6473 2.32774 31.6697 2.37251 31.692 2.41727C34.333 3.20062 36.795 4.43159 39.0107 6.06543C39.0107 5.99829 39.0107 5.90876 38.9884 5.75209C39.4136 5.95353 39.3689 5.81924 39.2569 6.2221C39.2346 6.2221 39.2122 6.19972 39.1898 6.19972C43.2408 9.24359 46.3518 13.6303 47.7619 18.89C51.1191 31.4235 43.6437 44.3824 31.1101 47.7396C29.8568 48.0753 28.6034 48.2991 27.3277 48.4334C27.4172 48.5677 27.5515 48.6796 27.5739 48.8139C27.6634 49.3734 27.2381 49.4182 26.6338 49.6867C26.88 49.2167 27.0591 48.8362 27.2605 48.4334C26.0072 48.5453 24.7314 48.5677 23.5005 48.5005C23.6124 48.6348 23.6571 48.702 23.5676 48.9929C23.5676 49.0153 23.3885 49.0153 23.3662 48.9929C23.2319 48.7691 23.3214 48.6124 23.3885 48.5005C23.12 48.4781 22.8514 48.4558 22.5828 48.4334V48.4558C22.4933 48.4558 22.4261 48.4334 22.3814 48.411C20.9937 48.2543 19.6061 47.9634 18.2856 47.5605C18.5765 47.9186 18.487 48.0305 17.9499 48.3439C17.9722 48.1648 18.0618 47.9634 18.017 47.8738C17.9275 47.7172 17.9499 47.6053 18.017 47.4934C16.2936 46.9562 14.6374 46.2176 13.0931 45.3C12.8022 45.3 12.735 45.3 12.6679 45.0538C12.4888 44.9419 12.3098 44.83 12.1531 44.7181C12.1083 44.7628 12.1083 44.7405 11.9964 44.6733C11.9964 44.6509 12.0188 44.6509 12.0188 44.6285C7.38586 41.5623 3.82722 36.8622 2.2829 31.1102C2.12623 30.5283 1.99194 29.924 1.88004 29.3421C1.79051 29.3421 1.70099 29.3197 1.5667 29.2973C1.3205 29.7225 1.07431 30.1254 0.581916 30.2373C0.716204 30.8416 0.872874 31.4459 1.02954 32.0502C1.07431 32.0054 1.16383 31.9607 1.25336 31.8935C1.18621 32.0054 1.14145 32.1397 1.07431 32.2516C1.70099 34.3555 2.61862 36.3474 3.76007 38.1827L3.78245 38.1603C3.93912 38.026 3.62578 37.5336 4.16294 37.6232C4.2077 37.9589 4.2077 38.2499 3.91674 38.4737C3.93912 38.5184 3.9615 38.5632 4.00627 38.608C4.05103 38.5856 4.14056 38.5632 4.29723 38.5184C4.23008 38.5856 4.18532 38.6751 4.11817 38.7646C8.46016 45.3447 15.8236 49.7763 24.239 50.0225C24.2167 50.0001 24.1943 49.9553 24.1719 49.9329C24.3062 49.9777 24.4181 50.0001 24.5076 50.0225C24.6643 50.0225 24.8433 50.0225 25 50.0225C31.0654 50.0225 36.6159 47.8738 40.9355 44.2704C40.8013 44.2704 40.7565 44.2481 40.846 43.9571C41.0251 44.1138 41.0475 44.1138 41.0475 44.1585C44.1361 41.5847 46.5757 38.2499 48.12 34.4898C48.0081 34.5569 47.8962 34.6465 47.7619 34.736C47.7619 34.4226 47.829 34.2212 48.0976 34.1541C48.12 34.1541 48.1647 34.1988 48.2095 34.2436C48.2766 34.0869 48.3438 33.9079 48.4109 33.7512C48.3662 33.7512 48.3214 33.7512 48.2766 33.7512C48.3438 33.6617 48.4333 33.5721 48.5228 33.4379C48.6124 33.1917 48.7019 32.9455 48.769 32.6993C48.7467 32.6993 48.7243 32.7217 48.7019 32.744C48.7914 32.4531 48.8809 32.1621 48.9705 31.8488C48.9928 31.8488 49.0152 31.8488 49.0152 31.8712C49.06 31.6921 49.1048 31.5131 49.1719 31.334C49.1271 31.2669 49.1719 31.1773 49.239 31.0207C49.7091 29.0959 49.9776 27.0815 49.9776 25.0001C49.9776 18.1738 47.2471 11.9741 42.7932 7.47546C42.7708 7.47546 42.7261 7.49784 42.7037 7.52022C42.4575 7.40832 42.3903 7.22926 42.368 7.05021C40.4879 5.23732 38.3169 3.69301 35.9445 2.52918C35.9221 2.55156 35.8774 2.57394 35.855 2.6187C35.855 2.57394 35.855 2.52918 35.855 2.50679C34.2435 1.67868 32.4754 1.07439 30.6625 0.64914C30.5506 0.850572 30.3939 1.02962 30.1477 1.16391C30.0134 1.25344 29.8791 1.36534 29.7001 1.16391C29.9015 1.052 29.9015 0.693902 30.2596 0.761046C30.282 0.761046 30.3715 0.671521 30.3939 0.604377C30.1925 0.559614 29.9911 0.514851 29.7896 0.470088C29.6777 0.537233 29.521 0.626758 29.3196 0.738665C29.2077 0.581995 29.2077 0.470088 29.2301 0.380563C29.0958 0.358182 28.9391 0.3358 28.8048 0.313419C28.7825 0.425326 28.7825 0.581995 28.8048 0.828191C28.6034 0.98486 28.402 1.16391 28.1782 1.34296C28.1558 1.18629 28.0663 1.02962 28.0886 0.895335C28.1334 0.581995 28.1334 0.358182 28.0663 0.201512C27.0815 0.0896051 26.0519 0.0224609 25.0224 0.0224609C23.3214 0.0224609 21.6428 0.201512 20.0313 0.514851C20.0313 0.559614 20.0537 0.626758 20.0313 0.716284C19.8747 0.671521 19.7628 0.626758 19.6956 0.559614C18.8675 0.738665 18.0394 0.962479 17.2337 1.23106C17.1218 1.34296 17.0546 1.36534 16.9651 1.32058C7.0949 4.67779 0 14.0108 0 25.0001Z"
              fill="#00C968"
            />
            <path
              d="M6.02022 25.2235C5.97545 21.8439 6.82595 18.5091 8.57169 15.51L7.27357 14.749C4.54305 19.4939 3.80446 24.9997 5.23687 30.2817C6.6469 35.5637 10.0489 39.9728 14.7713 42.7257L15.5323 41.4276C11.2127 38.9433 8.10169 34.937 6.7588 30.125C6.7588 30.1698 6.73642 30.1698 6.6469 30.2146C6.46784 29.946 6.46784 30.0131 6.69166 29.9012C6.4007 28.7822 6.19927 27.6631 6.10974 26.544C6.08736 26.5664 6.06498 26.6112 6.06498 26.6112C6.08736 27.1707 5.63973 27.2602 5.25925 27.5064C5.12496 27.2378 5.01305 27.014 4.87877 26.7678C5.12496 26.7007 5.41592 26.6783 5.57259 26.5216C5.72926 26.3873 5.77402 26.0964 5.86355 25.8949C5.70688 25.7159 5.57259 25.5816 5.41592 25.4026C5.61735 25.2459 5.75164 25.134 5.88593 24.9997C5.90831 25.0668 5.93069 25.1116 6.02022 25.2235Z"
              fill="#00C968"
            />
            <path
              d="M25.2014 5.3269C25.0671 5.03594 24.9105 4.7226 24.7538 4.43164C24.6195 4.7226 24.4628 5.03594 24.3285 5.3269C23.9928 5.37166 23.6795 5.4388 23.3438 5.52833C23.6123 5.72976 23.8585 5.93119 24.1047 6.15501L23.9928 7.13979C24.2614 6.96074 24.5076 6.80407 24.7985 6.6474C25.0671 6.78169 25.3357 6.96074 25.6043 7.11741L25.4476 6.15501C25.6938 5.93119 25.94 5.70738 26.1862 5.50595C25.8729 5.39404 25.5371 5.37166 25.2014 5.3269Z"
              fill="#00C968"
            />
            <path
              d="M34.7135 40.5778L34.3554 39.6602L33.9078 40.4883C33.5945 40.4883 33.2811 40.4659 32.9678 40.4659L33.5721 41.2492C33.4825 41.5626 33.3706 41.8759 33.2363 42.1669C33.5497 42.0773 33.863 41.9431 34.1764 41.8312C34.4449 42.0326 34.7135 42.2116 35.0045 42.3907C34.9821 42.055 34.9597 41.7192 34.9373 41.4059C35.2059 41.2045 35.4521 40.9807 35.6983 40.7568C35.3402 40.7121 35.0269 40.6449 34.7135 40.5778Z"
              fill="#00C968"
            />
            <path
              d="M29.3871 43.6885C29.5886 43.9347 29.8124 44.2033 30.0362 44.4495C30.1033 44.1138 30.1705 43.8004 30.2152 43.4647L30.6629 43.2633L31.1105 43.0395C30.8867 42.9499 30.6852 42.838 30.4838 42.7485C30.4838 42.7709 30.4838 42.7709 30.4614 42.7933C30.3048 43.0395 30.0586 42.7709 29.4543 42.3233C29.1409 42.2561 28.85 42.1442 28.559 42.0547L28.9395 42.9499C28.7604 43.2185 28.5814 43.5095 28.4023 43.7781C28.7381 43.7557 29.0514 43.7109 29.3871 43.6885Z"
              fill="#00C968"
            />
            <path
              d="M30.1927 42.278L30.1032 41.6289L29.4541 42.3003C29.7898 42.2108 30.036 42.2108 30.1927 42.278Z"
              fill="#00C968"
            />
            <path
              d="M24.3061 44.3148C24.4404 44.6058 24.597 44.9191 24.7537 45.2101C24.888 44.9191 25.0447 44.6058 25.1789 44.3148C25.5147 44.2701 25.828 44.2029 26.1637 44.1134C25.8952 43.912 25.649 43.7105 25.4028 43.4867L25.5147 42.502C25.2461 42.681 24.9999 42.8377 24.7089 42.9943C24.4404 42.8601 24.1718 42.681 23.9032 42.5243L24.0599 43.4867C23.8137 43.7105 23.5675 43.9344 23.3213 44.1358C23.657 44.2253 23.9704 44.2477 24.3061 44.3148Z"
              fill="#00C968"
            />
            <path
              d="M29.5654 7.13982C29.7892 7.36364 30.013 7.58745 30.2368 7.81126L30.3263 6.82648C30.6173 6.66981 30.9082 6.51314 31.1992 6.37886C30.9082 6.22219 30.5949 6.11028 30.2816 5.97599C30.2144 5.66265 30.1473 5.32693 30.0801 4.99121C29.8563 5.23741 29.6549 5.50598 29.4535 5.77456C29.1177 5.75218 28.782 5.7298 28.4463 5.70742C28.6477 5.97599 28.8492 6.22219 29.0282 6.51314L28.6701 7.43078L29.5654 7.13982Z"
              fill="#00C968"
            />
            <path
              d="M19.4491 44.6062C19.673 44.36 19.8744 44.0914 20.0758 43.8228C20.4115 43.8452 20.7473 43.8676 21.083 43.89C20.8816 43.6214 20.6801 43.3752 20.5011 43.0843L20.8592 42.1666L19.9639 42.4576C19.7401 42.2338 19.5163 42.0099 19.2925 41.7861L19.203 42.7709C18.912 42.9276 18.621 43.0843 18.3301 43.2185C18.621 43.3752 18.9344 43.4871 19.2477 43.6214V43.6438C19.2925 43.5766 19.3372 43.5095 19.4044 43.4424C19.5834 43.599 19.7401 43.7333 19.9415 43.89C19.6506 43.9571 19.4715 44.0243 19.3372 44.0466C19.382 44.2705 19.4044 44.4271 19.4491 44.6062Z"
              fill="#00C968"
            />
            <path
              d="M38.5407 37.4884L37.9588 36.7051C37.8916 37.0184 37.8021 37.3094 37.7126 37.6227C37.4216 37.7122 37.0859 37.757 36.7949 37.8241L37.5783 38.4284C37.5559 38.7418 37.5335 39.0775 37.4887 39.4132C37.7797 39.2342 38.0483 39.0327 38.3169 38.8537C38.6302 38.9656 38.9435 39.0775 39.2569 39.1894C39.1673 38.8761 39.0554 38.5627 38.9435 38.2494C39.145 37.9808 39.3464 37.7122 39.5255 37.4437C39.1897 37.4437 38.854 37.466 38.5407 37.4884Z"
              fill="#00C968"
            />
            <path
              d="M38.6746 9.73629C37.6226 8.79627 36.4812 7.96816 35.2502 7.25195L34.4893 8.55007C38.876 11.0792 42.0094 15.175 43.3299 20.0765C43.4866 20.6584 43.6209 21.2627 43.7104 21.8446C43.7999 21.867 43.8894 21.9118 43.979 21.9789C43.9342 22.0684 43.9118 22.2027 43.8447 22.2027C43.8223 22.2027 43.7999 22.2027 43.7775 22.2251C43.8447 22.7175 43.9118 23.2099 43.9342 23.6799C43.979 23.7023 44.0237 23.747 44.0685 23.7694C44.0237 23.8142 43.979 23.8366 43.9566 23.8589C44.0685 25.6718 43.9118 27.4847 43.5089 29.2305C43.7328 29.1633 43.9342 29.0962 44.1804 29.32C44.2252 29.1633 44.2699 29.2081 43.9118 28.9619C43.6656 28.7828 43.6656 28.7828 43.9342 28.4471C44.1356 28.5143 44.158 28.8947 44.4937 28.8052C44.5161 28.8052 44.6056 29.0738 44.6056 29.0514C44.5161 29.32 44.2252 29.5662 44.5833 29.8348C44.3594 30.1033 44.158 30.2824 43.8223 30.3048C44.0461 30.7076 43.6209 30.7972 43.5313 31.0434C43.3299 31.0657 43.1285 31.0657 42.9494 31.0881C42.6585 31.9386 42.3004 32.7667 41.8975 33.5725C41.9646 33.6172 42.0318 33.662 42.0989 33.7067C41.8975 33.9306 41.8303 33.9977 41.6513 34.0201C41.5842 34.1544 41.517 34.2887 41.4275 34.4229L42.7256 35.1839C45.4561 30.4391 46.1947 24.9332 44.7623 19.6512C43.7328 15.7793 41.6289 12.3773 38.7193 9.75867C38.585 10.072 38.6746 10.4749 38.2717 10.6092C37.8465 10.7434 37.5779 10.4525 37.3093 10.0944C37.7793 10.0049 38.0703 9.40056 38.6746 9.73629Z"
              fill="#00C968"
            />
            <path
              d="M43.8227 30.3713C43.8899 29.6327 44.0018 29.4537 43.5765 29.5208C43.6884 29.8118 43.3079 30.1699 43.8227 30.3713Z"
              fill="#00C968"
            />
          </g>
          <defs>
            <clipPath id="clip0_2210_12464">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'iconRejectSigned':
      iconElement = (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2210_12522)">
            <path
              d="M14.3242 8.95268C14.4809 8.97506 14.6376 9.01982 14.8166 9.06458L15.1747 9.98222L15.6223 9.15411C15.9357 9.15411 16.249 9.17649 16.5624 9.17649L15.9581 8.39314C15.9804 8.326 16.0028 8.25885 16.0252 8.19171C15.9581 8.16933 15.8909 8.14695 15.7566 8.10219C15.9581 7.90075 16.0476 7.81123 16.1595 7.85599C16.2043 7.74408 16.249 7.60979 16.2938 7.49789C15.9804 7.58741 15.6671 7.7217 15.3538 7.83361C15.1747 7.69932 14.9957 7.58741 14.8166 7.45312C14.8166 7.60979 14.839 7.78885 14.7718 7.99028C14.6823 7.78885 14.6152 7.63218 14.548 7.52027C14.5704 7.76646 14.5704 8.03504 14.5928 8.28124C14.5704 8.30362 14.5257 8.326 14.5033 8.37076C14.5928 8.37076 14.6823 8.37076 14.7942 8.37076C14.7942 8.66172 14.6823 8.84077 14.3242 8.95268Z"
              fill="#E50500"
            />
            <path
              d="M13.8545 8.86288C13.8993 8.86288 13.944 8.88527 13.9888 8.88527C13.9888 8.8405 13.9888 8.79574 13.9888 8.75098C13.9216 8.79574 13.8993 8.81812 13.8545 8.86288Z"
              fill="#E50500"
            />
            <path
              d="M20.1208 5.93097C19.9194 5.68477 19.6956 5.43858 19.4718 5.19238C19.4046 5.5281 19.3375 5.84144 19.2927 6.17716L18.8451 6.3786L18.3975 6.60241C18.7108 6.7367 19.0018 6.87099 19.2927 7.02766L19.427 7.99006L20.0761 7.31861C20.3894 7.38576 20.6804 7.49766 20.9713 7.58719L20.5908 6.69193C20.7699 6.42336 20.9489 6.1324 21.128 5.86382C20.7923 5.86382 20.4565 5.90859 20.1208 5.93097Z"
              fill="#E50500"
            />
            <path
              d="M10.9897 12.1309L11.5716 12.9142C11.6387 12.6009 11.7283 12.3099 11.8178 11.9966C12.1087 11.907 12.4445 11.8623 12.7354 11.7951L11.9521 11.1908C11.9744 10.8775 11.9968 10.5418 12.0416 10.2061C11.7506 10.3851 11.4821 10.5865 11.2135 10.7656C10.9001 10.6537 10.5868 10.5418 10.2735 10.4299C10.363 10.7432 10.4749 11.0565 10.5868 11.3699C10.3854 11.6385 10.1839 11.907 10.0049 12.1756C10.3406 12.1756 10.6539 12.1532 10.9897 12.1309Z"
              fill="#E50500"
            />
            <path
              d="M18.1292 35.8776C18.1515 35.6538 18.1292 35.5867 17.9053 35.4748C17.5696 35.3181 17.9501 35.139 18.0396 34.9824C17.9501 34.8929 17.9053 34.8257 17.7934 34.6914C18.0396 34.5795 18.2635 34.4676 18.5096 34.3333C18.6216 34.7138 18.7111 35.0271 18.8006 35.3629C19.2706 35.3629 19.4273 35.721 19.6287 36.1462C19.2259 36.0567 19.3154 35.9672 19.1587 36.4595L22.8293 38.5858C22.8069 38.4291 22.8516 38.2948 23.0083 38.2724C23.0978 38.2501 23.2097 38.2948 23.2769 38.3396L25.1122 35.1614C25.0674 35.1614 25.045 35.1838 25.0002 35.1838C24.9555 35.1838 24.9107 35.0719 24.9107 35.0495C24.9331 35.0048 25.0002 34.96 25.1122 34.8928C25.1345 34.96 25.1569 35.0048 25.1793 35.0495L25.9403 33.7514C25.8507 33.729 25.7388 33.7066 25.5598 33.6395C25.7388 33.5723 25.9179 33.4828 26.0969 33.5052L26.6788 32.4757C26.5893 32.5204 26.4998 32.5652 26.3655 32.5876C26.1193 31.9161 26.3431 31.5804 27.0817 31.5804C27.0593 31.6923 27.0369 31.7818 27.0146 31.8937L30.797 25.3584C30.7523 25.4031 30.7299 25.4255 30.6627 25.4703C30.6851 25.1346 30.7075 24.9331 30.9985 25.0003L33.4828 20.7031C33.4604 20.6583 33.4156 20.5688 33.3709 20.4792C33.438 20.4792 33.5276 20.4792 33.5947 20.5016L37.1533 14.3244L30.5508 10.5195L20.3002 28.2903L13.7872 24.5303L9.95996 31.1552L18.1292 35.8776Z"
              fill="#E50500"
            />
            <path
              d="M0 25.0001C0 25.0896 0 25.1567 0 25.2463C0.0447628 25.2239 0.0895255 25.2015 0.179051 25.2015C0.201432 25.2015 0.290958 25.3134 0.268577 25.3134C0.201432 25.4029 0.15667 25.5148 0.0671442 25.5596C0.0447628 25.5596 0.0223814 25.582 0 25.582C0.0223814 26.9025 0.15667 28.2006 0.402865 29.4764C0.470009 29.4316 0.514772 29.3644 0.559535 29.2749C0.626679 29.1406 0.895255 29.0959 1.09669 29.0063C1.16383 28.6035 0.738586 28.7154 0.581916 28.5363C0.49239 28.2006 0.425246 27.8649 0.290958 27.3725C0.760967 27.7082 0.984781 28.1335 1.38765 28.3349C1.49955 28.3797 1.61146 28.4468 1.72337 28.514C1.70099 28.2901 1.65622 28.0887 1.63384 27.8649C1.41003 27.932 1.20859 27.9768 1.00716 27.753C0.581916 27.2606 0.783348 26.7906 0.80573 26.6339C1.09669 26.522 1.3205 26.4772 1.49955 26.5444C1.47717 26.3206 1.47717 26.0968 1.45479 25.8506C1.41003 25.8506 1.38765 25.8282 1.34288 25.8282C1.09669 25.7163 1.25336 25.582 1.36526 25.4029C1.38765 25.4253 1.41003 25.4477 1.43241 25.4701C1.38765 23.6124 1.5667 21.7772 1.96956 20.009C1.79051 19.8524 1.74575 19.7181 1.79051 19.5614C1.83527 19.4271 1.9248 19.36 2.12623 19.3824C3.9615 11.9517 9.35542 5.61781 16.8979 2.8649C16.8308 2.79775 16.7637 2.73061 16.6741 2.66346C16.8532 2.6187 16.9651 2.57394 17.1441 2.52918C17.1218 2.6187 17.1218 2.70823 17.1218 2.79775C17.547 2.64108 17.9946 2.50679 18.4423 2.37251C18.3751 2.17107 18.2856 1.94726 18.1961 1.67868C18.4199 1.74583 19.3151 1.85773 19.0913 2.19345C22.5381 1.2982 26.0295 1.20867 29.3196 1.83535C29.2972 1.81297 29.2972 1.81297 29.2748 1.79059C29.7225 1.67868 29.7672 1.6563 29.9687 1.96964C30.5058 2.08155 31.0206 2.21584 31.5354 2.37251C31.5577 2.35012 31.5801 2.30536 31.6249 2.2606C31.6473 2.32774 31.6697 2.37251 31.692 2.41727C34.333 3.20062 36.795 4.43159 39.0107 6.06543C39.0107 5.99829 39.0107 5.90876 38.9884 5.75209C39.4136 5.95353 39.3689 5.81924 39.2569 6.2221C39.2346 6.2221 39.2122 6.19972 39.1898 6.19972C43.2408 9.24359 46.3518 13.6303 47.7619 18.89C51.1191 31.4235 43.6437 44.3824 31.1101 47.7396C29.8568 48.0753 28.6034 48.2991 27.3277 48.4334C27.4172 48.5677 27.5515 48.6796 27.5739 48.8139C27.6634 49.3734 27.2381 49.4182 26.6338 49.6867C26.88 49.2167 27.0591 48.8362 27.2605 48.4334C26.0072 48.5453 24.7314 48.5677 23.5005 48.5005C23.6124 48.6348 23.6571 48.702 23.5676 48.9929C23.5676 49.0153 23.3885 49.0153 23.3662 48.9929C23.2319 48.7691 23.3214 48.6124 23.3885 48.5005C23.12 48.4781 22.8514 48.4558 22.5828 48.4334V48.4558C22.4933 48.4558 22.4261 48.4334 22.3814 48.411C20.9937 48.2543 19.6061 47.9634 18.2856 47.5605C18.5765 47.9186 18.487 48.0305 17.9499 48.3439C17.9722 48.1648 18.0618 47.9634 18.017 47.8738C17.9275 47.7172 17.9499 47.6053 18.017 47.4934C16.2936 46.9562 14.6374 46.2176 13.0931 45.3C12.8022 45.3 12.735 45.3 12.6679 45.0538C12.4888 44.9419 12.3098 44.83 12.1531 44.7181C12.1083 44.7628 12.1083 44.7405 11.9964 44.6733C11.9964 44.6509 12.0188 44.6509 12.0188 44.6285C7.38586 41.5623 3.82722 36.8622 2.2829 31.1102C2.12623 30.5283 1.99194 29.924 1.88004 29.3421C1.79051 29.3421 1.70099 29.3197 1.5667 29.2973C1.3205 29.7225 1.07431 30.1254 0.581916 30.2373C0.716204 30.8416 0.872874 31.4459 1.02954 32.0502C1.07431 32.0054 1.16383 31.9607 1.25336 31.8935C1.18621 32.0054 1.14145 32.1397 1.07431 32.2516C1.70099 34.3555 2.61862 36.3474 3.76007 38.1827L3.78245 38.1603C3.93912 38.026 3.62578 37.5336 4.16294 37.6232C4.2077 37.9589 4.2077 38.2499 3.91674 38.4737C3.93912 38.5184 3.9615 38.5632 4.00627 38.608C4.05103 38.5856 4.14056 38.5632 4.29723 38.5184C4.23008 38.5856 4.18532 38.6751 4.11817 38.7646C8.46016 45.3447 15.8236 49.7763 24.239 50.0225C24.2167 50.0001 24.1943 49.9553 24.1719 49.9329C24.3062 49.9777 24.4181 50.0001 24.5076 50.0225C24.6643 50.0225 24.8433 50.0225 25 50.0225C31.0654 50.0225 36.6159 47.8738 40.9355 44.2704C40.8013 44.2704 40.7565 44.2481 40.846 43.9571C41.0251 44.1138 41.0475 44.1138 41.0475 44.1585C44.1361 41.5847 46.5757 38.2499 48.12 34.4898C48.0081 34.5569 47.8962 34.6465 47.7619 34.736C47.7619 34.4226 47.829 34.2212 48.0976 34.1541C48.12 34.1541 48.1647 34.1988 48.2095 34.2436C48.2766 34.0869 48.3438 33.9079 48.4109 33.7512C48.3662 33.7512 48.3214 33.7512 48.2766 33.7512C48.3438 33.6617 48.4333 33.5721 48.5228 33.4379C48.6124 33.1917 48.7019 32.9455 48.769 32.6993C48.7467 32.6993 48.7243 32.7217 48.7019 32.744C48.7914 32.4531 48.8809 32.1621 48.9705 31.8488C48.9928 31.8488 49.0152 31.8488 49.0152 31.8712C49.06 31.6921 49.1048 31.5131 49.1719 31.334C49.1271 31.2669 49.1719 31.1773 49.239 31.0207C49.7091 29.0959 49.9776 27.0815 49.9776 25.0001C49.9776 18.1738 47.2471 11.9741 42.7932 7.47546C42.7708 7.47546 42.7261 7.49784 42.7037 7.52022C42.4575 7.40832 42.3903 7.22926 42.368 7.05021C40.4879 5.23732 38.3169 3.69301 35.9445 2.52918C35.9221 2.55156 35.8774 2.57394 35.855 2.6187C35.855 2.57394 35.855 2.52918 35.855 2.50679C34.2435 1.67868 32.4754 1.07439 30.6625 0.64914C30.5506 0.850572 30.3939 1.02962 30.1477 1.16391C30.0134 1.25344 29.8791 1.36534 29.7001 1.16391C29.9015 1.052 29.9015 0.693902 30.2596 0.761046C30.282 0.761046 30.3715 0.671521 30.3939 0.604377C30.1925 0.559614 29.9911 0.514851 29.7896 0.470088C29.6777 0.537233 29.521 0.626758 29.3196 0.738665C29.2077 0.581995 29.2077 0.470088 29.2301 0.380563C29.0958 0.358182 28.9391 0.3358 28.8048 0.313419C28.7825 0.425326 28.7825 0.581995 28.8048 0.828191C28.6034 0.98486 28.402 1.16391 28.1782 1.34296C28.1558 1.18629 28.0663 1.02962 28.0886 0.895335C28.1334 0.581995 28.1334 0.358182 28.0663 0.201512C27.0815 0.0896051 26.0519 0.0224609 25.0224 0.0224609C23.3214 0.0224609 21.6428 0.201512 20.0313 0.514851C20.0313 0.559614 20.0537 0.626758 20.0313 0.716284C19.8747 0.671521 19.7628 0.626758 19.6956 0.559614C18.8675 0.738665 18.0394 0.962479 17.2337 1.23106C17.1218 1.34296 17.0546 1.36534 16.9651 1.32058C7.0949 4.67779 0 14.0108 0 25.0001Z"
              fill="#E50500"
            />
            <path
              d="M6.02022 25.2235C5.97545 21.8439 6.82595 18.5091 8.57169 15.51L7.27357 14.749C4.54305 19.4939 3.80446 24.9997 5.23687 30.2817C6.6469 35.5637 10.0489 39.9728 14.7713 42.7257L15.5323 41.4276C11.2127 38.9433 8.10169 34.937 6.7588 30.125C6.7588 30.1698 6.73642 30.1698 6.6469 30.2146C6.46784 29.946 6.46784 30.0131 6.69166 29.9012C6.4007 28.7822 6.19927 27.6631 6.10974 26.544C6.08736 26.5664 6.06498 26.6112 6.06498 26.6112C6.08736 27.1707 5.63973 27.2602 5.25925 27.5064C5.12496 27.2378 5.01305 27.014 4.87877 26.7678C5.12496 26.7007 5.41592 26.6783 5.57259 26.5216C5.72926 26.3873 5.77402 26.0964 5.86355 25.8949C5.70688 25.7159 5.57259 25.5816 5.41592 25.4026C5.61735 25.2459 5.75164 25.134 5.88593 24.9997C5.90831 25.0668 5.93069 25.1116 6.02022 25.2235Z"
              fill="#E50500"
            />
            <path
              d="M25.2014 5.3269C25.0671 5.03594 24.9105 4.7226 24.7538 4.43164C24.6195 4.7226 24.4628 5.03594 24.3285 5.3269C23.9928 5.37166 23.6795 5.4388 23.3438 5.52833C23.6123 5.72976 23.8585 5.93119 24.1047 6.15501L23.9928 7.13979C24.2614 6.96074 24.5076 6.80407 24.7985 6.6474C25.0671 6.78169 25.3357 6.96074 25.6043 7.11741L25.4476 6.15501C25.6938 5.93119 25.94 5.70738 26.1862 5.50595C25.8729 5.39404 25.5371 5.37166 25.2014 5.3269Z"
              fill="#E50500"
            />
            <path
              d="M34.7135 40.5778L34.3554 39.6602L33.9078 40.4883C33.5945 40.4883 33.2811 40.4659 32.9678 40.4659L33.5721 41.2492C33.4825 41.5626 33.3706 41.8759 33.2363 42.1669C33.5497 42.0773 33.863 41.9431 34.1764 41.8312C34.4449 42.0326 34.7135 42.2116 35.0045 42.3907C34.9821 42.055 34.9597 41.7192 34.9373 41.4059C35.2059 41.2045 35.4521 40.9807 35.6983 40.7568C35.3402 40.7121 35.0269 40.6449 34.7135 40.5778Z"
              fill="#E50500"
            />
            <path
              d="M29.3871 43.6885C29.5886 43.9347 29.8124 44.2033 30.0362 44.4495C30.1033 44.1138 30.1705 43.8004 30.2152 43.4647L30.6629 43.2633L31.1105 43.0395C30.8867 42.9499 30.6852 42.838 30.4838 42.7485C30.4838 42.7709 30.4838 42.7709 30.4614 42.7933C30.3048 43.0395 30.0586 42.7709 29.4543 42.3233C29.1409 42.2561 28.85 42.1442 28.559 42.0547L28.9395 42.9499C28.7604 43.2185 28.5814 43.5095 28.4023 43.7781C28.7381 43.7557 29.0514 43.7109 29.3871 43.6885Z"
              fill="#E50500"
            />
            <path
              d="M30.1927 42.278L30.1032 41.6289L29.4541 42.3003C29.7898 42.2108 30.036 42.2108 30.1927 42.278Z"
              fill="#E50500"
            />
            <path
              d="M24.3061 44.3148C24.4404 44.6058 24.597 44.9191 24.7537 45.2101C24.888 44.9191 25.0447 44.6058 25.1789 44.3148C25.5147 44.2701 25.828 44.2029 26.1637 44.1134C25.8952 43.912 25.649 43.7105 25.4028 43.4867L25.5147 42.502C25.2461 42.681 24.9999 42.8377 24.7089 42.9943C24.4404 42.8601 24.1718 42.681 23.9032 42.5243L24.0599 43.4867C23.8137 43.7105 23.5675 43.9344 23.3213 44.1358C23.657 44.2253 23.9704 44.2477 24.3061 44.3148Z"
              fill="#E50500"
            />
            <path
              d="M29.5654 7.13982C29.7892 7.36364 30.013 7.58745 30.2368 7.81126L30.3263 6.82648C30.6173 6.66981 30.9082 6.51314 31.1992 6.37886C30.9082 6.22219 30.5949 6.11028 30.2816 5.97599C30.2144 5.66265 30.1473 5.32693 30.0801 4.99121C29.8563 5.23741 29.6549 5.50598 29.4535 5.77456C29.1177 5.75218 28.782 5.7298 28.4463 5.70742C28.6477 5.97599 28.8492 6.22219 29.0282 6.51314L28.6701 7.43078L29.5654 7.13982Z"
              fill="#E50500"
            />
            <path
              d="M19.4491 44.6062C19.673 44.36 19.8744 44.0914 20.0758 43.8228C20.4115 43.8452 20.7473 43.8676 21.083 43.89C20.8816 43.6214 20.6801 43.3752 20.5011 43.0843L20.8592 42.1666L19.9639 42.4576C19.7401 42.2338 19.5163 42.0099 19.2925 41.7861L19.203 42.7709C18.912 42.9276 18.621 43.0843 18.3301 43.2185C18.621 43.3752 18.9344 43.4871 19.2477 43.6214V43.6438C19.2925 43.5766 19.3372 43.5095 19.4044 43.4424C19.5834 43.599 19.7401 43.7333 19.9415 43.89C19.6506 43.9571 19.4715 44.0243 19.3372 44.0466C19.382 44.2705 19.4044 44.4271 19.4491 44.6062Z"
              fill="#E50500"
            />
            <path
              d="M38.5407 37.4884L37.9588 36.7051C37.8916 37.0184 37.8021 37.3094 37.7126 37.6227C37.4216 37.7122 37.0859 37.757 36.7949 37.8241L37.5783 38.4284C37.5559 38.7418 37.5335 39.0775 37.4887 39.4132C37.7797 39.2342 38.0483 39.0327 38.3169 38.8537C38.6302 38.9656 38.9435 39.0775 39.2569 39.1894C39.1673 38.8761 39.0554 38.5627 38.9435 38.2494C39.145 37.9808 39.3464 37.7122 39.5255 37.4437C39.1897 37.4437 38.854 37.466 38.5407 37.4884Z"
              fill="#E50500"
            />
            <path
              d="M38.6746 9.73629C37.6226 8.79627 36.4812 7.96816 35.2502 7.25195L34.4893 8.55007C38.876 11.0792 42.0094 15.175 43.3299 20.0765C43.4866 20.6584 43.6209 21.2627 43.7104 21.8446C43.7999 21.867 43.8894 21.9118 43.979 21.9789C43.9342 22.0684 43.9118 22.2027 43.8447 22.2027C43.8223 22.2027 43.7999 22.2027 43.7775 22.2251C43.8447 22.7175 43.9118 23.2099 43.9342 23.6799C43.979 23.7023 44.0237 23.747 44.0685 23.7694C44.0237 23.8142 43.979 23.8366 43.9566 23.8589C44.0685 25.6718 43.9118 27.4847 43.5089 29.2305C43.7328 29.1633 43.9342 29.0962 44.1804 29.32C44.2252 29.1633 44.2699 29.2081 43.9118 28.9619C43.6656 28.7828 43.6656 28.7828 43.9342 28.4471C44.1356 28.5143 44.158 28.8947 44.4937 28.8052C44.5161 28.8052 44.6056 29.0738 44.6056 29.0514C44.5161 29.32 44.2252 29.5662 44.5833 29.8348C44.3594 30.1033 44.158 30.2824 43.8223 30.3048C44.0461 30.7076 43.6209 30.7972 43.5313 31.0434C43.3299 31.0657 43.1285 31.0657 42.9494 31.0881C42.6585 31.9386 42.3004 32.7667 41.8975 33.5725C41.9646 33.6172 42.0318 33.662 42.0989 33.7067C41.8975 33.9306 41.8303 33.9977 41.6513 34.0201C41.5842 34.1544 41.517 34.2887 41.4275 34.4229L42.7256 35.1839C45.4561 30.4391 46.1947 24.9332 44.7623 19.6512C43.7328 15.7793 41.6289 12.3773 38.7193 9.75867C38.585 10.072 38.6746 10.4749 38.2717 10.6092C37.8465 10.7434 37.5779 10.4525 37.3093 10.0944C37.7793 10.0049 38.0703 9.40056 38.6746 9.73629Z"
              fill="#E50500"
            />
            <path
              d="M43.8227 30.3713C43.8899 29.6327 44.0018 29.4537 43.5765 29.5208C43.6884 29.8118 43.3079 30.1699 43.8227 30.3713Z"
              fill="#E50500"
            />
          </g>
          <defs>
            <clipPath id="clip0_2210_12522">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'signSuccess':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50.0005 73.9005L36.1005 60.0005L31.3672 64.7005L50.0005 83.3338L90.0005 43.3338L85.3005 38.6338L50.0005 73.9005Z"
            fill="#08B7DD"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#08B7DD" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'hidePassLogin':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.00033 4.00003C10.527 4.00003 12.7803 5.42003 13.8803 7.6667C13.487 8.48003 12.9337 9.18003 12.2737 9.7467L13.2137 10.6867C14.1403 9.8667 14.8737 8.84003 15.3337 7.6667C14.1803 4.74003 11.3337 2.6667 8.00033 2.6667C7.15366 2.6667 6.34032 2.80003 5.57366 3.0467L6.67366 4.1467C7.10699 4.06003 7.54699 4.00003 8.00033 4.00003ZM7.28699 4.76003L8.66699 6.14003C9.04699 6.3067 9.35366 6.61336 9.52032 6.99336L10.9003 8.37336C10.9537 8.1467 10.9937 7.9067 10.9937 7.66003C11.0003 6.0067 9.65366 4.6667 8.00033 4.6667C7.75366 4.6667 7.52033 4.70003 7.28699 4.76003ZM1.34033 2.58003L3.12699 4.3667C2.04033 5.22003 1.18033 6.35336 0.666992 7.6667C1.82033 10.5934 4.66699 12.6667 8.00033 12.6667C9.01366 12.6667 9.98699 12.4734 10.8803 12.12L13.1603 14.4L14.1003 13.46L2.28033 1.63336L1.34033 2.58003ZM6.34033 7.58003L8.08033 9.32003C8.05366 9.32669 8.02699 9.33336 8.00033 9.33336C7.08033 9.33336 6.33366 8.5867 6.33366 7.6667C6.33366 7.63336 6.34033 7.61336 6.34033 7.58003ZM4.07366 5.31336L5.24033 6.48003C5.08699 6.8467 5.00033 7.2467 5.00033 7.6667C5.00033 9.32003 6.34699 10.6667 8.00033 10.6667C8.42033 10.6667 8.82032 10.58 9.18033 10.4267L9.83366 11.08C9.24699 11.24 8.63366 11.3334 8.00033 11.3334C5.47366 11.3334 3.22033 9.91336 2.12033 7.6667C2.58699 6.71336 3.26699 5.92669 4.07366 5.31336Z"
            fill="#323232"
          />
        </svg>
      );
      break;
    case 'checkDisabled':
      iconElement = (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5" clipPath="url(#clip0_2178_12364)">
            <path
              d="M20.0547 12.5339C20.274 12.5653 20.4934 12.6279 20.744 12.6906L21.2454 13.9753L21.8721 12.816C22.3107 12.816 22.7494 12.8473 23.1881 12.8473L22.3421 11.7506C22.3734 11.6566 22.4047 11.5626 22.4361 11.4686C22.3421 11.4373 22.2481 11.4059 22.0601 11.3433C22.3421 11.0612 22.4674 10.9359 22.6241 10.9986C22.6867 10.8419 22.7494 10.6539 22.8121 10.4972C22.3734 10.6226 21.9347 10.8106 21.496 10.9672C21.2454 10.7792 20.9947 10.6226 20.744 10.4346C20.744 10.6539 20.7754 10.9046 20.6814 11.1866C20.556 10.9046 20.462 10.6852 20.368 10.5286C20.3994 10.8732 20.3994 11.2493 20.4307 11.5939C20.3994 11.6253 20.3367 11.6566 20.3054 11.7193C20.4307 11.7193 20.556 11.7193 20.7127 11.7193C20.7127 12.1266 20.556 12.3773 20.0547 12.5339Z"
              fill="white"
            />
            <path
              d="M19.3965 12.4086C19.4592 12.4086 19.5218 12.44 19.5845 12.44C19.5845 12.3773 19.5845 12.3146 19.5845 12.252C19.4905 12.3146 19.4592 12.346 19.3965 12.4086Z"
              fill="white"
            />
            <path
              d="M28.1686 8.30355C27.8866 7.95888 27.5732 7.6142 27.2599 7.26953C27.1659 7.73954 27.0719 8.17822 27.0092 8.64822L26.3825 8.93023L25.7559 9.24357C26.1945 9.43157 26.6019 9.61958 27.0092 9.83891L27.1972 11.1863L28.1059 10.2463C28.5446 10.3403 28.9519 10.4969 29.3593 10.6223L28.8266 9.3689C29.0773 8.9929 29.3279 8.58556 29.5786 8.20955C29.1086 8.20955 28.6386 8.27222 28.1686 8.30355Z"
              fill="white"
            />
            <path
              d="M15.3846 16.9828L16.1992 18.0795C16.2932 17.6408 16.4186 17.2335 16.5439 16.7948C16.9513 16.6695 17.4213 16.6068 17.8286 16.5128L16.7319 15.6668C16.7633 15.2281 16.7946 14.7581 16.8573 14.2881C16.4499 14.5388 16.0739 14.8208 15.6979 15.0714C15.2592 14.9148 14.8205 14.7581 14.3819 14.6014C14.5072 15.0401 14.6639 15.4788 14.8205 15.9175C14.5385 16.2935 14.2565 16.6695 14.0059 17.0455C14.4759 17.0455 14.9145 17.0141 15.3846 16.9828Z"
              fill="white"
            />
            <path
              d="M25.3802 50.2279C25.4116 49.9146 25.3802 49.8206 25.0669 49.6639C24.5969 49.4446 25.1296 49.1939 25.2549 48.9746C25.1296 48.8492 25.0669 48.7552 24.9102 48.5672C25.2549 48.4105 25.5682 48.2539 25.9129 48.0659C26.0696 48.5985 26.1949 49.0372 26.3203 49.5072C26.9783 49.5072 27.1976 50.0086 27.4796 50.6039C26.9156 50.4786 27.0409 50.3532 26.8216 51.0426L31.9604 54.0193C31.929 53.8 31.9917 53.612 32.211 53.5806C32.3364 53.5493 32.493 53.612 32.587 53.6746L35.1564 49.2252C35.0938 49.2252 35.0624 49.2566 34.9998 49.2566C34.9371 49.2566 34.8744 49.0999 34.8744 49.0686C34.9058 49.0059 34.9998 48.9432 35.1564 48.8492C35.1878 48.9432 35.2191 49.0059 35.2504 49.0686L36.3158 47.2512C36.1904 47.2199 36.0338 47.1885 35.7831 47.0945C36.0338 47.0005 36.2844 46.8752 36.5351 46.9065L37.3498 45.4652C37.2245 45.5278 37.0991 45.5905 36.9111 45.6218C36.5665 44.6818 36.8798 44.2118 37.9138 44.2118C37.8825 44.3685 37.8511 44.4938 37.8198 44.6505L43.1152 35.501C43.0526 35.5636 43.0212 35.595 42.9272 35.6576C42.9586 35.1876 42.9899 34.9056 43.3972 34.9996L46.8753 28.9835C46.844 28.9208 46.7813 28.7955 46.7186 28.6702C46.8126 28.6702 46.938 28.6702 47.032 28.7015L52.0141 20.0533L42.7706 14.7266L28.4196 39.6057L19.3015 34.3416L13.9434 43.6164L25.3802 50.2279Z"
              fill="white"
            />
            <path
              d="M0 34.9999C0 35.1252 0 35.2192 0 35.3446C0.0626679 35.3133 0.125336 35.2819 0.250671 35.2819C0.282005 35.2819 0.407341 35.4386 0.376007 35.4386C0.282005 35.5639 0.219338 35.7206 0.0940018 35.7833C0.0626679 35.7833 0.0313339 35.8146 0 35.8146C0.0313339 37.6633 0.219338 39.4807 0.564011 41.2667C0.658013 41.204 0.72068 41.11 0.783348 40.9847C0.87735 40.7967 1.25336 40.734 1.53536 40.6087C1.62936 40.0447 1.03402 40.2013 0.814682 39.9507C0.689346 39.4807 0.595345 39.0107 0.407341 38.3213C1.06535 38.7913 1.37869 39.3867 1.9427 39.6687C2.09937 39.7313 2.25604 39.8253 2.41271 39.9193C2.38138 39.606 2.31871 39.324 2.28738 39.0107C1.97404 39.1047 1.69203 39.1673 1.41003 38.854C0.814682 38.1646 1.09669 37.5066 1.12802 37.2873C1.53536 37.1306 1.8487 37.068 2.09937 37.162C2.06804 36.8486 2.06804 36.5353 2.03671 36.1906C1.97404 36.1906 1.9427 36.1593 1.88004 36.1593C1.53536 36.0026 1.7547 35.8146 1.91137 35.5639C1.9427 35.5953 1.97404 35.6266 2.00537 35.6579C1.9427 33.0572 2.19338 30.4878 2.75739 28.0124C2.50671 27.7931 2.44405 27.6051 2.50671 27.3858C2.56938 27.1978 2.69472 27.1038 2.97672 27.1351C5.54611 16.7322 13.0976 7.86473 23.6571 4.01066C23.5631 3.91666 23.4691 3.82265 23.3438 3.72865C23.5945 3.66599 23.7511 3.60332 24.0018 3.54065C23.9705 3.66599 23.9705 3.79132 23.9705 3.91666C24.5658 3.69732 25.1925 3.50932 25.8192 3.32131C25.7252 3.03931 25.5998 2.72597 25.4745 2.34996C25.7878 2.44396 27.0412 2.60063 26.7278 3.07064C31.5533 1.81728 36.4414 1.69195 41.0475 2.5693C41.0161 2.53796 41.0161 2.53796 40.9848 2.50663C41.6115 2.34996 41.6741 2.31863 41.9561 2.7573C42.7081 2.91397 43.4288 3.10197 44.1495 3.32131C44.1808 3.28998 44.2122 3.22731 44.2748 3.16464C44.3062 3.25864 44.3375 3.32131 44.3689 3.38398C48.0663 4.48067 51.513 6.20403 54.615 8.49141C54.615 8.39741 54.615 8.27207 54.5837 8.05274C55.1791 8.33474 55.1164 8.14674 54.9597 8.71075C54.9284 8.71075 54.8971 8.67941 54.8657 8.67941C60.5372 12.9408 64.8926 19.0823 66.8666 26.4458C71.5667 43.9927 61.1012 62.1351 43.5542 66.8352C41.7995 67.3052 40.0448 67.6185 38.2587 67.8065C38.3841 67.9945 38.5721 68.1512 38.6034 68.3392C38.7287 69.1226 38.1334 69.1852 37.2874 69.5612C37.6321 68.9032 37.8827 68.3705 38.1647 67.8065C36.41 67.9632 34.624 67.9945 32.9006 67.9005C33.0573 68.0885 33.12 68.1825 32.9946 68.5899C32.9946 68.6212 32.744 68.6212 32.7126 68.5899C32.5246 68.2765 32.65 68.0572 32.744 67.9005C32.368 67.8692 31.9919 67.8379 31.6159 67.8065V67.8379C31.4906 67.8379 31.3966 67.8065 31.3339 67.7752C29.3912 67.5559 27.4485 67.1485 25.5998 66.5845C26.0072 67.0859 25.8818 67.2425 25.1298 67.6812C25.1611 67.4305 25.2865 67.1485 25.2238 67.0232C25.0985 66.8038 25.1298 66.6472 25.2238 66.4905C22.8111 65.7385 20.4924 64.7045 18.3304 63.4198C17.923 63.4198 17.829 63.4198 17.735 63.0751C17.4843 62.9184 17.2337 62.7618 17.0143 62.6051C16.9517 62.6678 16.9517 62.6364 16.795 62.5424C16.795 62.5111 16.8263 62.5111 16.8263 62.4798C10.3402 58.187 5.3581 51.6069 3.19606 43.5541C2.97672 42.7394 2.78872 41.8934 2.63205 41.0787C2.50671 41.0787 2.38138 41.0474 2.19338 41.016C1.8487 41.6114 1.50403 42.1754 0.814682 42.3321C1.00269 43.1781 1.22202 44.0241 1.44136 44.8701C1.50403 44.8074 1.62936 44.7448 1.7547 44.6508C1.6607 44.8074 1.59803 44.9954 1.50403 45.1521C2.38138 48.0975 3.66607 50.8862 5.2641 53.4556L5.29543 53.4243C5.51477 53.2363 5.0761 52.5469 5.82811 52.6722C5.89078 53.1423 5.89078 53.5496 5.48344 53.8629C5.51477 53.9256 5.54611 53.9883 5.60877 54.0509C5.67144 54.0196 5.79678 53.9883 6.01612 53.9256C5.92211 54.0196 5.85945 54.1449 5.76544 54.2703C11.8442 63.4824 22.1531 69.6866 33.9347 70.0312C33.9033 69.9999 33.872 69.9372 33.8406 69.9059C34.0287 69.9686 34.1853 69.9999 34.3107 70.0312C34.53 70.0312 34.7807 70.0312 35 70.0312C43.4915 70.0312 51.2623 67.0232 57.3098 61.9784C57.1218 61.9784 57.0591 61.9471 57.1844 61.5397C57.4351 61.7591 57.4664 61.7591 57.4664 61.8218C61.7905 58.2183 65.2059 53.5496 67.368 48.2855C67.2113 48.3795 67.0546 48.5048 66.8666 48.6302C66.8666 48.1915 66.9606 47.9095 67.3366 47.8155C67.368 47.8155 67.4306 47.8782 67.4933 47.9408C67.5873 47.7215 67.6813 47.4708 67.7753 47.2515C67.7126 47.2515 67.65 47.2515 67.5873 47.2515C67.6813 47.1261 67.8066 47.0008 67.932 46.8128C68.0573 46.4681 68.1826 46.1235 68.2766 45.7788C68.2453 45.7788 68.214 45.8101 68.1826 45.8414C68.308 45.4341 68.4333 45.0268 68.5586 44.5881C68.59 44.5881 68.6213 44.5881 68.6213 44.6194C68.684 44.3688 68.7466 44.1181 68.8406 43.8674C68.778 43.7734 68.8407 43.6481 68.9347 43.4287C69.5927 40.734 69.9687 37.914 69.9687 34.9999C69.9687 25.4431 66.1459 16.7636 59.9105 10.4654C59.8791 10.4654 59.8165 10.4968 59.7851 10.5281C59.4405 10.3714 59.3465 10.1208 59.3151 9.8701C56.6831 7.33205 53.6437 5.17001 50.3223 3.54065C50.291 3.57198 50.2283 3.60332 50.197 3.66599C50.197 3.60332 50.197 3.54065 50.197 3.50932C47.9409 2.34996 45.4655 1.50394 42.9275 0.9086C42.7708 1.19061 42.5515 1.44128 42.2068 1.62928C42.0188 1.75462 41.8308 1.91129 41.5801 1.62928C41.8621 1.47261 41.8621 0.971268 42.3635 1.06527C42.3948 1.06527 42.5201 0.939934 42.5515 0.845932C42.2695 0.783264 41.9875 0.720596 41.7055 0.657928C41.5488 0.75193 41.3295 0.877266 41.0475 1.03394C40.8908 0.814598 40.8908 0.657929 40.9221 0.532593C40.7341 0.501259 40.5148 0.469925 40.3268 0.438591C40.2954 0.595261 40.2954 0.814598 40.3268 1.15927C40.0448 1.37861 39.7628 1.62928 39.4494 1.87995C39.4181 1.66061 39.2928 1.44128 39.3241 1.25327C39.3868 0.814598 39.3868 0.501259 39.2928 0.281921C37.9141 0.125252 36.4727 0.03125 35.0313 0.03125C32.65 0.03125 30.2999 0.281921 28.0439 0.720596C28.0439 0.783264 28.0752 0.877266 28.0439 1.0026C27.8245 0.939934 27.6679 0.877266 27.5739 0.783264C26.4145 1.03394 25.2551 1.34727 24.1271 1.72328C23.9705 1.87995 23.8765 1.91129 23.7511 1.84862C9.93286 6.54871 0 19.615 0 34.9999Z"
              fill="white"
            />
            <path
              d="M8.4283 35.3137C8.36564 30.5823 9.55633 25.9135 12.0004 21.7148L10.183 20.6494C6.36026 27.2922 5.32624 35.0004 7.33162 42.3952C9.30565 49.79 14.0684 55.9628 20.6799 59.8168L21.7452 57.9995C15.6978 54.5214 11.3424 48.9126 9.46232 42.1758C9.46232 42.2385 9.43099 42.2385 9.30565 42.3012C9.05498 41.9252 9.05498 42.0192 9.36832 41.8625C8.96098 40.2958 8.67898 38.7291 8.55364 37.1624C8.52231 37.1937 8.49097 37.2564 8.49097 37.2564C8.52231 38.0397 7.89563 38.1651 7.36295 38.5098C7.17495 38.1337 7.01828 37.8204 6.83027 37.4757C7.17495 37.3817 7.58229 37.3504 7.80162 37.1311C8.02096 36.9431 8.08363 36.5357 8.20897 36.2537C7.98963 36.003 7.80163 35.815 7.58229 35.5644C7.86429 35.345 8.0523 35.1884 8.2403 35.0004C8.27163 35.0944 8.30297 35.157 8.4283 35.3137Z"
              fill="white"
            />
            <path
              d="M35.2824 7.45746C35.0944 7.05012 34.875 6.61144 34.6557 6.2041C34.4677 6.61144 34.2483 7.05012 34.0603 7.45746C33.5903 7.52013 33.1517 7.61413 32.6816 7.73947C33.0576 8.02147 33.4023 8.30348 33.747 8.61682L33.5903 9.99551C33.9663 9.74484 34.311 9.5255 34.7184 9.30616C35.0944 9.49417 35.4704 9.74484 35.8464 9.96417L35.627 8.61682C35.9717 8.30348 36.3164 7.99014 36.6611 7.70813C36.2224 7.55146 35.7524 7.52013 35.2824 7.45746Z"
              fill="white"
            />
            <path
              d="M48.5983 56.8081L48.097 55.5234L47.4703 56.6828C47.0316 56.6828 46.593 56.6515 46.1543 56.6515L47.0003 57.7482C46.875 58.1868 46.7183 58.6255 46.5303 59.0328C46.969 58.9075 47.4077 58.7195 47.8463 58.5628C48.2223 58.8448 48.5983 59.0955 49.0057 59.3462C48.9743 58.8762 48.943 58.4062 48.9117 57.9675C49.2877 57.6855 49.6324 57.3721 49.977 57.0588C49.4757 56.9961 49.037 56.9021 48.5983 56.8081Z"
              fill="white"
            />
            <path
              d="M41.1424 61.1634C41.4244 61.508 41.7377 61.884 42.051 62.2287C42.145 61.7587 42.2391 61.32 42.3017 60.85L42.9284 60.568L43.5551 60.2547C43.2417 60.1293 42.9597 59.9727 42.6777 59.8473C42.6777 59.8787 42.6777 59.8787 42.6464 59.91C42.4271 60.2547 42.0824 59.8787 41.2364 59.252C40.7977 59.158 40.3903 59.0013 39.983 58.876L40.5157 60.1293C40.265 60.5053 40.0143 60.9127 39.7637 61.2887C40.2337 61.2574 40.6724 61.1947 41.1424 61.1634Z"
              fill="white"
            />
            <path
              d="M42.2703 59.1899L42.145 58.2812L41.2363 59.2213C41.7063 59.0959 42.051 59.0959 42.2703 59.1899Z"
              fill="white"
            />
            <path
              d="M34.0291 62.041C34.2171 62.4483 34.4364 62.887 34.6558 63.2943C34.8438 62.887 35.0631 62.4483 35.2511 62.041C35.7211 61.9783 36.1598 61.8843 36.6298 61.759C36.2538 61.477 35.9091 61.195 35.5645 60.8816L35.7211 59.5029C35.3451 59.7536 35.0004 59.9729 34.5931 60.1923C34.2171 60.0043 33.8411 59.7536 33.4651 59.5343L33.6844 60.8816C33.3397 61.195 32.9951 61.5083 32.6504 61.7903C33.1204 61.9156 33.5591 61.947 34.0291 62.041Z"
              fill="white"
            />
            <path
              d="M41.3929 9.99536C41.7062 10.3087 42.0196 10.622 42.3329 10.9354L42.4582 9.55669C42.8656 9.33735 43.2729 9.11801 43.6803 8.93001C43.2729 8.71067 42.8342 8.554 42.3956 8.366C42.3016 7.92732 42.2076 7.45731 42.1136 6.9873C41.8002 7.33198 41.5182 7.70799 41.2362 8.08399C40.7662 8.05266 40.2962 8.02132 39.8262 7.98999C40.1082 8.366 40.3902 8.71067 40.6409 9.11801L40.1395 10.4027L41.3929 9.99536Z"
              fill="white"
            />
            <path
              d="M27.2288 62.4481C27.5421 62.1034 27.8241 61.7274 28.1062 61.3514C28.5762 61.3827 29.0462 61.4141 29.5162 61.4454C29.2342 61.0694 28.9522 60.7247 28.7015 60.3174L29.2028 59.0327L27.9495 59.44C27.6361 59.1267 27.3228 58.8133 27.0095 58.5L26.8841 59.8787C26.4768 60.098 26.0695 60.3174 25.6621 60.5054C26.0695 60.7247 26.5081 60.8814 26.9468 61.0694V61.1007C27.0095 61.0067 27.0721 60.9127 27.1661 60.8187C27.4168 61.038 27.6361 61.226 27.9182 61.4454C27.5108 61.5394 27.2601 61.6334 27.0721 61.6647C27.1348 61.9781 27.1661 62.1974 27.2288 62.4481Z"
              fill="white"
            />
            <path
              d="M53.9577 52.4844L53.143 51.3877C53.049 51.8264 52.9237 52.2337 52.7984 52.6724C52.391 52.7977 51.921 52.8604 51.5137 52.9544L52.6104 53.8004C52.579 54.2391 52.5477 54.7091 52.485 55.1791C52.8924 54.9284 53.2684 54.6464 53.6444 54.3958C54.0831 54.5524 54.5217 54.7091 54.9604 54.8658C54.8351 54.4271 54.6784 53.9884 54.5217 53.5497C54.8037 53.1737 55.0857 52.7977 55.3364 52.4217C54.8664 52.4217 54.3964 52.453 53.9577 52.4844Z"
              fill="white"
            />
            <path
              d="M54.1446 13.6304C52.6719 12.3144 51.0739 11.155 49.3505 10.1523L48.2852 11.9697C54.4266 15.5104 58.8134 21.2446 60.6621 28.1067C60.8814 28.9214 61.0694 29.7674 61.1947 30.5821C61.3201 30.6134 61.4454 30.6761 61.5707 30.7701C61.5081 30.8954 61.4767 31.0834 61.3827 31.0834C61.3514 31.0834 61.3201 31.0834 61.2887 31.1147C61.3827 31.8041 61.4767 32.4934 61.5081 33.1514C61.5707 33.1828 61.6334 33.2454 61.6961 33.2768C61.6334 33.3394 61.5707 33.3708 61.5394 33.4021C61.6961 35.9402 61.4767 38.4782 60.9127 40.9223C61.2261 40.8283 61.5081 40.7343 61.8527 41.0476C61.9154 40.8283 61.9781 40.8909 61.4767 40.5462C61.1321 40.2956 61.1321 40.2956 61.5081 39.8256C61.7901 39.9196 61.8214 40.4522 62.2914 40.3269C62.3228 40.3269 62.4481 40.7029 62.4481 40.6716C62.3228 41.0476 61.9154 41.3923 62.4168 41.7683C62.1034 42.1443 61.8214 42.395 61.3514 42.4263C61.6647 42.9903 61.0694 43.1156 60.9441 43.4603C60.6621 43.4916 60.3801 43.4916 60.1294 43.523C59.722 44.7137 59.2207 45.873 58.6567 47.001C58.7507 47.0637 58.8447 47.1264 58.9387 47.189C58.6567 47.5024 58.5627 47.5964 58.312 47.6277C58.218 47.8157 58.124 48.0037 57.9987 48.1917L59.816 49.2571C63.6388 42.6143 64.6728 34.9061 62.6674 27.5113C61.2261 22.0906 58.2807 17.3278 54.2073 13.6617C54.0193 14.1004 54.1446 14.6644 53.5806 14.8524C52.9852 15.0404 52.6092 14.6331 52.2332 14.1318C52.8912 14.0064 53.2986 13.1604 54.1446 13.6304Z"
              fill="white"
            />
            <path
              d="M61.3518 42.5205C61.4458 41.4864 61.6025 41.2358 61.0071 41.3298C61.1638 41.7371 60.6311 42.2385 61.3518 42.5205Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2178_12364">
              <rect width="70" height="70" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'checkEnabled':
      iconElement = (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5" clipPath="url(#clip0_2178_12343)">
            <path
              d="M20.0547 12.5339C20.274 12.5653 20.4934 12.6279 20.744 12.6906L21.2454 13.9753L21.8721 12.816C22.3107 12.816 22.7494 12.8473 23.1881 12.8473L22.3421 11.7506C22.3734 11.6566 22.4047 11.5626 22.4361 11.4686C22.3421 11.4373 22.2481 11.4059 22.0601 11.3433C22.3421 11.0612 22.4674 10.9359 22.6241 10.9986C22.6867 10.8419 22.7494 10.6539 22.8121 10.4972C22.3734 10.6226 21.9347 10.8106 21.496 10.9672C21.2454 10.7792 20.9947 10.6226 20.744 10.4346C20.744 10.6539 20.7754 10.9046 20.6814 11.1866C20.556 10.9046 20.462 10.6852 20.368 10.5286C20.3994 10.8732 20.3994 11.2493 20.4307 11.5939C20.3994 11.6253 20.3367 11.6566 20.3054 11.7193C20.4307 11.7193 20.556 11.7193 20.7127 11.7193C20.7127 12.1266 20.556 12.3773 20.0547 12.5339Z"
              fill="#00C968"
            />
            <path
              d="M19.3965 12.4086C19.4592 12.4086 19.5218 12.44 19.5845 12.44C19.5845 12.3773 19.5845 12.3146 19.5845 12.252C19.4905 12.3146 19.4592 12.346 19.3965 12.4086Z"
              fill="#00C968"
            />
            <path
              d="M28.1686 8.30355C27.8866 7.95888 27.5732 7.6142 27.2599 7.26953C27.1659 7.73954 27.0719 8.17822 27.0092 8.64822L26.3825 8.93023L25.7559 9.24357C26.1945 9.43157 26.6019 9.61958 27.0092 9.83891L27.1972 11.1863L28.1059 10.2463C28.5446 10.3403 28.9519 10.4969 29.3593 10.6223L28.8266 9.3689C29.0773 8.9929 29.3279 8.58556 29.5786 8.20955C29.1086 8.20955 28.6386 8.27222 28.1686 8.30355Z"
              fill="#00C968"
            />
            <path
              d="M15.3846 16.9828L16.1992 18.0795C16.2932 17.6408 16.4186 17.2335 16.5439 16.7948C16.9513 16.6695 17.4213 16.6068 17.8286 16.5128L16.7319 15.6668C16.7633 15.2281 16.7946 14.7581 16.8573 14.2881C16.4499 14.5388 16.0739 14.8208 15.6979 15.0714C15.2592 14.9148 14.8205 14.7581 14.3819 14.6014C14.5072 15.0401 14.6639 15.4788 14.8205 15.9175C14.5385 16.2935 14.2565 16.6695 14.0059 17.0455C14.4759 17.0455 14.9145 17.0141 15.3846 16.9828Z"
              fill="#00C968"
            />
            <path
              d="M25.3802 50.2279C25.4116 49.9146 25.3802 49.8206 25.0669 49.6639C24.5969 49.4446 25.1296 49.1939 25.2549 48.9746C25.1296 48.8492 25.0669 48.7552 24.9102 48.5672C25.2549 48.4105 25.5682 48.2539 25.9129 48.0659C26.0696 48.5985 26.1949 49.0372 26.3203 49.5072C26.9783 49.5072 27.1976 50.0086 27.4796 50.6039C26.9156 50.4786 27.0409 50.3532 26.8216 51.0426L31.9604 54.0193C31.929 53.8 31.9917 53.612 32.211 53.5806C32.3364 53.5493 32.493 53.612 32.587 53.6746L35.1564 49.2252C35.0938 49.2252 35.0624 49.2566 34.9998 49.2566C34.9371 49.2566 34.8744 49.0999 34.8744 49.0686C34.9058 49.0059 34.9998 48.9432 35.1564 48.8492C35.1878 48.9432 35.2191 49.0059 35.2504 49.0686L36.3158 47.2512C36.1904 47.2199 36.0338 47.1885 35.7831 47.0945C36.0338 47.0005 36.2844 46.8752 36.5351 46.9065L37.3498 45.4652C37.2245 45.5278 37.0991 45.5905 36.9111 45.6218C36.5665 44.6818 36.8798 44.2118 37.9138 44.2118C37.8825 44.3685 37.8511 44.4938 37.8198 44.6505L43.1152 35.501C43.0526 35.5636 43.0212 35.595 42.9272 35.6576C42.9586 35.1876 42.9899 34.9056 43.3973 34.9996L46.8753 28.9835C46.844 28.9208 46.7813 28.7955 46.7186 28.6702C46.8127 28.6702 46.938 28.6702 47.032 28.7015L52.0141 20.0533L42.7706 14.7266L28.4196 39.6057L19.3015 34.3416L13.9434 43.6164L25.3802 50.2279Z"
              fill="#00C968"
            />
            <path
              d="M0 34.9999C0 35.1252 0 35.2193 0 35.3446C0.0626679 35.3133 0.125336 35.2819 0.250671 35.2819C0.282005 35.2819 0.407341 35.4386 0.376007 35.4386C0.282005 35.5639 0.219338 35.7206 0.0940018 35.7833C0.0626679 35.7833 0.0313339 35.8146 0 35.8146C0.0313339 37.6633 0.219338 39.4807 0.564011 41.2667C0.658013 41.204 0.72068 41.11 0.783348 40.9847C0.87735 40.7967 1.25336 40.734 1.53536 40.6087C1.62936 40.0447 1.03402 40.2013 0.814682 39.9507C0.689346 39.4807 0.595345 39.0107 0.407341 38.3213C1.06535 38.7913 1.37869 39.3867 1.9427 39.6687C2.09937 39.7313 2.25604 39.8253 2.41271 39.9193C2.38138 39.606 2.31871 39.324 2.28738 39.0107C1.97404 39.1047 1.69203 39.1673 1.41003 38.854C0.814682 38.1646 1.09669 37.5066 1.12802 37.2873C1.53536 37.1306 1.8487 37.068 2.09937 37.162C2.06804 36.8486 2.06804 36.5353 2.03671 36.1906C1.97404 36.1906 1.9427 36.1593 1.88004 36.1593C1.53536 36.0026 1.7547 35.8146 1.91137 35.5639C1.9427 35.5953 1.97404 35.6266 2.00537 35.6579C1.9427 33.0572 2.19338 30.4878 2.75739 28.0124C2.50671 27.7931 2.44405 27.6051 2.50671 27.3858C2.56938 27.1978 2.69472 27.1038 2.97672 27.1351C5.54611 16.7322 13.0976 7.86473 23.6571 4.01066C23.5631 3.91666 23.4691 3.82265 23.3438 3.72865C23.5945 3.66599 23.7511 3.60332 24.0018 3.54065C23.9705 3.66599 23.9705 3.79132 23.9705 3.91666C24.5658 3.69732 25.1925 3.50932 25.8192 3.32131C25.7252 3.03931 25.5998 2.72597 25.4745 2.34996C25.7878 2.44396 27.0412 2.60063 26.7278 3.07064C31.5533 1.81728 36.4414 1.69195 41.0475 2.5693C41.0161 2.53796 41.0161 2.53796 40.9848 2.50663C41.6115 2.34996 41.6741 2.31863 41.9561 2.7573C42.7081 2.91397 43.4288 3.10197 44.1495 3.32131C44.1808 3.28998 44.2122 3.22731 44.2748 3.16464C44.3062 3.25864 44.3375 3.32131 44.3689 3.38398C48.0663 4.48067 51.513 6.20403 54.615 8.49141C54.615 8.39741 54.615 8.27207 54.5837 8.05274C55.1791 8.33474 55.1164 8.14674 54.9597 8.71075C54.9284 8.71075 54.8971 8.67941 54.8657 8.67941C60.5372 12.9408 64.8926 19.0823 66.8666 26.4458C71.5667 43.9927 61.1012 62.1351 43.5542 66.8352C41.7995 67.3052 40.0448 67.6185 38.2587 67.8065C38.3841 67.9945 38.5721 68.1512 38.6034 68.3392C38.7287 69.1226 38.1334 69.1852 37.2874 69.5612C37.6321 68.9032 37.8827 68.3705 38.1647 67.8065C36.41 67.9632 34.624 67.9945 32.9006 67.9005C33.0573 68.0885 33.12 68.1825 32.9946 68.5899C32.9946 68.6212 32.744 68.6212 32.7126 68.5899C32.5246 68.2765 32.65 68.0572 32.744 67.9005C32.368 67.8692 31.9919 67.8379 31.6159 67.8065V67.8379C31.4906 67.8379 31.3966 67.8065 31.3339 67.7752C29.3912 67.5559 27.4485 67.1485 25.5998 66.5845C26.0072 67.0859 25.8818 67.2425 25.1298 67.6812C25.1611 67.4305 25.2865 67.1485 25.2238 67.0232C25.0985 66.8038 25.1298 66.6472 25.2238 66.4905C22.8111 65.7385 20.4924 64.7045 18.3304 63.4198C17.923 63.4198 17.829 63.4198 17.735 63.0751C17.4843 62.9184 17.2337 62.7618 17.0143 62.6051C16.9517 62.6678 16.9517 62.6364 16.795 62.5424C16.795 62.5111 16.8263 62.5111 16.8263 62.4798C10.3402 58.187 5.3581 51.6069 3.19606 43.5541C2.97672 42.7394 2.78872 41.8934 2.63205 41.0787C2.50671 41.0787 2.38138 41.0474 2.19338 41.016C1.8487 41.6114 1.50403 42.1754 0.814682 42.3321C1.00269 43.1781 1.22202 44.0241 1.44136 44.8701C1.50403 44.8074 1.62936 44.7448 1.7547 44.6508C1.6607 44.8074 1.59803 44.9954 1.50403 45.1521C2.38138 48.0975 3.66607 50.8862 5.2641 53.4556L5.29543 53.4243C5.51477 53.2363 5.0761 52.5469 5.82811 52.6722C5.89078 53.1423 5.89078 53.5496 5.48344 53.8629C5.51477 53.9256 5.54611 53.9883 5.60877 54.0509C5.67144 54.0196 5.79678 53.9883 6.01612 53.9256C5.92211 54.0196 5.85945 54.1449 5.76544 54.2703C11.8442 63.4824 22.1531 69.6866 33.9346 70.0312C33.9033 69.9999 33.872 69.9372 33.8406 69.9059C34.0287 69.9686 34.1853 69.9999 34.3107 70.0312C34.53 70.0312 34.7807 70.0312 35 70.0312C43.4915 70.0312 51.2623 67.0232 57.3098 61.9784C57.1218 61.9784 57.0591 61.9471 57.1844 61.5397C57.4351 61.7591 57.4664 61.7591 57.4664 61.8218C61.7905 58.2184 65.2059 53.5496 67.368 48.2855C67.2113 48.3795 67.0546 48.5048 66.8666 48.6302C66.8666 48.1915 66.9606 47.9095 67.3366 47.8155C67.368 47.8155 67.4306 47.8782 67.4933 47.9408C67.5873 47.7215 67.6813 47.4708 67.7753 47.2515C67.7126 47.2515 67.65 47.2515 67.5873 47.2515C67.6813 47.1261 67.8066 47.0008 67.932 46.8128C68.0573 46.4681 68.1826 46.1235 68.2766 45.7788C68.2453 45.7788 68.214 45.8101 68.1826 45.8414C68.308 45.4341 68.4333 45.0268 68.5586 44.5881C68.59 44.5881 68.6213 44.5881 68.6213 44.6194C68.684 44.3688 68.7466 44.1181 68.8406 43.8674C68.778 43.7734 68.8406 43.6481 68.9347 43.4287C69.5927 40.734 69.9687 37.914 69.9687 34.9999C69.9687 25.4431 66.1459 16.7636 59.9105 10.4654C59.8791 10.4654 59.8165 10.4968 59.7851 10.5281C59.4405 10.3714 59.3465 10.1208 59.3151 9.8701C56.6831 7.33205 53.6437 5.17001 50.3223 3.54065C50.291 3.57198 50.2283 3.60332 50.197 3.66599C50.197 3.60332 50.197 3.54065 50.197 3.50932C47.9409 2.34996 45.4655 1.50394 42.9275 0.9086C42.7708 1.19061 42.5515 1.44128 42.2068 1.62928C42.0188 1.75462 41.8308 1.91129 41.5801 1.62928C41.8621 1.47261 41.8621 0.971268 42.3635 1.06527C42.3948 1.06527 42.5201 0.939934 42.5515 0.845932C42.2695 0.783264 41.9875 0.720596 41.7055 0.657928C41.5488 0.75193 41.3295 0.877266 41.0475 1.03394C40.8908 0.814598 40.8908 0.657929 40.9221 0.532593C40.7341 0.501259 40.5148 0.469925 40.3268 0.438591C40.2954 0.595261 40.2954 0.814598 40.3268 1.15927C40.0448 1.37861 39.7628 1.62928 39.4494 1.87995C39.4181 1.66061 39.2928 1.44128 39.3241 1.25327C39.3868 0.814598 39.3868 0.501259 39.2928 0.281921C37.9141 0.125252 36.4727 0.03125 35.0313 0.03125C32.65 0.03125 30.2999 0.281921 28.0439 0.720596C28.0439 0.783264 28.0752 0.877266 28.0439 1.0026C27.8245 0.939934 27.6679 0.877266 27.5739 0.783264C26.4145 1.03394 25.2551 1.34727 24.1271 1.72328C23.9705 1.87995 23.8765 1.91129 23.7511 1.84862C9.93286 6.54871 0 19.615 0 34.9999Z"
              fill="#00C968"
            />
            <path
              d="M8.4283 35.3137C8.36564 30.5823 9.55633 25.9135 12.0004 21.7148L10.183 20.6494C6.36026 27.2922 5.32624 35.0004 7.33162 42.3952C9.30565 49.79 14.0684 55.9628 20.6799 59.8168L21.7452 57.9995C15.6978 54.5214 11.3424 48.9126 9.46232 42.1758C9.46232 42.2385 9.43099 42.2385 9.30565 42.3012C9.05498 41.9252 9.05498 42.0192 9.36832 41.8625C8.96098 40.2958 8.67898 38.7291 8.55364 37.1624C8.52231 37.1937 8.49097 37.2564 8.49097 37.2564C8.52231 38.0397 7.89563 38.1651 7.36295 38.5098C7.17495 38.1337 7.01828 37.8204 6.83027 37.4757C7.17495 37.3817 7.58229 37.3504 7.80162 37.1311C8.02096 36.9431 8.08363 36.5357 8.20897 36.2537C7.98963 36.003 7.80163 35.815 7.58229 35.5644C7.86429 35.345 8.0523 35.1884 8.2403 35.0004C8.27163 35.0944 8.30297 35.157 8.4283 35.3137Z"
              fill="#00C968"
            />
            <path
              d="M35.2824 7.45746C35.0944 7.05012 34.875 6.61144 34.6557 6.2041C34.4677 6.61144 34.2483 7.05012 34.0603 7.45746C33.5903 7.52013 33.1517 7.61413 32.6816 7.73947C33.0576 8.02147 33.4023 8.30348 33.747 8.61682L33.5903 9.99551C33.9663 9.74484 34.311 9.5255 34.7184 9.30616C35.0944 9.49417 35.4704 9.74484 35.8464 9.96417L35.627 8.61682C35.9717 8.30348 36.3164 7.99014 36.6611 7.70813C36.2224 7.55146 35.7524 7.52013 35.2824 7.45746Z"
              fill="#00C968"
            />
            <path
              d="M48.5983 56.8081L48.097 55.5234L47.4703 56.6828C47.0316 56.6828 46.593 56.6515 46.1543 56.6515L47.0003 57.7482C46.875 58.1868 46.7183 58.6255 46.5303 59.0328C46.969 58.9075 47.4077 58.7195 47.8463 58.5628C48.2223 58.8448 48.5983 59.0955 49.0057 59.3462C48.9743 58.8762 48.943 58.4062 48.9117 57.9675C49.2877 57.6855 49.6324 57.3721 49.977 57.0588C49.4757 56.9961 49.037 56.9021 48.5983 56.8081Z"
              fill="#00C968"
            />
            <path
              d="M41.1424 61.1634C41.4244 61.508 41.7377 61.884 42.051 62.2287C42.145 61.7587 42.2391 61.32 42.3017 60.85L42.9284 60.568L43.5551 60.2547C43.2417 60.1293 42.9597 59.9727 42.6777 59.8473C42.6777 59.8787 42.6777 59.8787 42.6464 59.91C42.4271 60.2547 42.0824 59.8787 41.2364 59.252C40.7977 59.158 40.3903 59.0013 39.983 58.876L40.5157 60.1293C40.265 60.5053 40.0143 60.9127 39.7637 61.2887C40.2337 61.2574 40.6724 61.1947 41.1424 61.1634Z"
              fill="#00C968"
            />
            <path
              d="M42.2703 59.1899L42.145 58.2812L41.2363 59.2213C41.7063 59.0959 42.051 59.0959 42.2703 59.1899Z"
              fill="#00C968"
            />
            <path
              d="M34.0291 62.041C34.2171 62.4483 34.4364 62.887 34.6558 63.2943C34.8438 62.887 35.0631 62.4483 35.2511 62.041C35.7211 61.9783 36.1598 61.8843 36.6298 61.759C36.2538 61.477 35.9091 61.195 35.5645 60.8816L35.7211 59.5029C35.3451 59.7536 35.0004 59.9729 34.5931 60.1923C34.2171 60.0043 33.8411 59.7536 33.4651 59.5343L33.6844 60.8816C33.3397 61.195 32.9951 61.5083 32.6504 61.7903C33.1204 61.9156 33.5591 61.947 34.0291 62.041Z"
              fill="#00C968"
            />
            <path
              d="M41.3929 9.99536C41.7062 10.3087 42.0196 10.622 42.3329 10.9354L42.4582 9.55669C42.8656 9.33735 43.2729 9.11801 43.6803 8.93001C43.2729 8.71067 42.8342 8.554 42.3956 8.366C42.3016 7.92732 42.2076 7.45731 42.1136 6.9873C41.8002 7.33198 41.5182 7.70799 41.2362 8.08399C40.7662 8.05266 40.2962 8.02132 39.8262 7.98999C40.1082 8.366 40.3902 8.71067 40.6409 9.11801L40.1395 10.4027L41.3929 9.99536Z"
              fill="#00C968"
            />
            <path
              d="M27.2288 62.4481C27.5421 62.1034 27.8241 61.7274 28.1062 61.3514C28.5762 61.3827 29.0462 61.4141 29.5162 61.4454C29.2342 61.0694 28.9522 60.7247 28.7015 60.3174L29.2028 59.0327L27.9495 59.44C27.6361 59.1267 27.3228 58.8133 27.0095 58.5L26.8841 59.8787C26.4768 60.098 26.0695 60.3174 25.6621 60.5054C26.0695 60.7247 26.5081 60.8814 26.9468 61.0694V61.1007C27.0095 61.0067 27.0721 60.9127 27.1661 60.8187C27.4168 61.038 27.6361 61.226 27.9182 61.4454C27.5108 61.5394 27.2601 61.6334 27.0721 61.6647C27.1348 61.9781 27.1661 62.1974 27.2288 62.4481Z"
              fill="#00C968"
            />
            <path
              d="M53.9577 52.4844L53.143 51.3877C53.049 51.8264 52.9237 52.2337 52.7984 52.6724C52.391 52.7977 51.921 52.8604 51.5137 52.9544L52.6104 53.8004C52.579 54.2391 52.5477 54.7091 52.485 55.1791C52.8924 54.9284 53.2684 54.6464 53.6444 54.3958C54.0831 54.5524 54.5217 54.7091 54.9604 54.8658C54.8351 54.4271 54.6784 53.9884 54.5217 53.5497C54.8037 53.1737 55.0857 52.7977 55.3364 52.4217C54.8664 52.4217 54.3964 52.453 53.9577 52.4844Z"
              fill="#00C968"
            />
            <path
              d="M54.1446 13.6304C52.6719 12.3144 51.0739 11.155 49.3505 10.1523L48.2852 11.9697C54.4266 15.5104 58.8134 21.2446 60.6621 28.1067C60.8814 28.9214 61.0694 29.7674 61.1947 30.5821C61.3201 30.6134 61.4454 30.6761 61.5707 30.7701C61.5081 30.8954 61.4767 31.0834 61.3827 31.0834C61.3514 31.0834 61.3201 31.0834 61.2887 31.1147C61.3827 31.8041 61.4767 32.4934 61.5081 33.1514C61.5707 33.1828 61.6334 33.2454 61.6961 33.2768C61.6334 33.3394 61.5707 33.3708 61.5394 33.4021C61.6961 35.9402 61.4767 38.4782 60.9127 40.9223C61.2261 40.8283 61.5081 40.7343 61.8527 41.0476C61.9154 40.8283 61.9781 40.8909 61.4767 40.5462C61.1321 40.2956 61.1321 40.2956 61.5081 39.8256C61.7901 39.9196 61.8214 40.4522 62.2914 40.3269C62.3228 40.3269 62.4481 40.7029 62.4481 40.6716C62.3228 41.0476 61.9154 41.3923 62.4168 41.7683C62.1034 42.1443 61.8214 42.395 61.3514 42.4263C61.6647 42.9903 61.0694 43.1156 60.9441 43.4603C60.6621 43.4916 60.3801 43.4916 60.1294 43.523C59.722 44.7137 59.2207 45.873 58.6567 47.001C58.7507 47.0637 58.8447 47.1264 58.9387 47.189C58.6567 47.5024 58.5627 47.5964 58.312 47.6277C58.218 47.8157 58.124 48.0037 57.9987 48.1917L59.816 49.2571C63.6388 42.6143 64.6728 34.9061 62.6674 27.5113C61.2261 22.0906 58.2807 17.3278 54.2073 13.6617C54.0193 14.1004 54.1446 14.6644 53.5806 14.8524C52.9852 15.0404 52.6092 14.6331 52.2332 14.1318C52.8912 14.0064 53.2986 13.1604 54.1446 13.6304Z"
              fill="#00C968"
            />
            <path
              d="M61.3518 42.5205C61.4458 41.4864 61.6025 41.2358 61.0071 41.3298C61.1638 41.7371 60.6311 42.2385 61.3518 42.5205Z"
              fill="#00C968"
            />
          </g>
          <defs>
            <clipPath id="clip0_2178_12343">
              <rect width="70" height="70" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'closeSigner':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6654 4.2735L11.7254 3.3335L7.9987 7.06016L4.27203 3.3335L3.33203 4.2735L7.0587 8.00016L3.33203 11.7268L4.27203 12.6668L7.9987 8.94016L11.7254 12.6668L12.6654 11.7268L8.9387 8.00016L12.6654 4.2735Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'iconPdf':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM16 12V9C16 8.45 15.55 8 15 8H13V13H15C15.55 13 16 12.55 16 12ZM14 9H15V12H14V9ZM18 11H19V10H18V9H19V8H17V13H18V11ZM10 11H11C11.55 11 12 10.55 12 10V9C12 8.45 11.55 8 11 8H9V13H10V11ZM10 9H11V10H10V9Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'trashIcon':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
            fill="#E50500"
          />
        </svg>
      );
      break;
    case 'uploadProfile':
      iconElement = (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5 24H22.5V15H28.5L18 4.5L7.5 15H13.5V24ZM18 8.745L21.255 12H19.5V21H16.5V12H14.745L18 8.745ZM7.5 27H28.5V30H7.5V27Z"
            fill="#00C968"
          />
        </svg>
      );
      break;
    case 'noticePartner':
      iconElement = (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.4043 7H13.4043V9H11.4043V7ZM11.4043 11H13.4043V17H11.4043V11ZM12.4043 2C6.8843 2 2.4043 6.48 2.4043 12C2.4043 17.52 6.8843 22 12.4043 22C17.9243 22 22.4043 17.52 22.4043 12C22.4043 6.48 17.9243 2 12.4043 2ZM12.4043 20C7.9943 20 4.4043 16.41 4.4043 12C4.4043 7.59 7.9943 4 12.4043 4C16.8143 4 20.4043 7.59 20.4043 12C20.4043 16.41 16.8143 20 12.4043 20Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'partner':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_7412_11876)">
            <path
              d="M20 6H17V4C17 2.89 16.11 2 15 2H9C7.89 2 7 2.89 7 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM9 4H15V6H9V4ZM20 19H4V17H20V19ZM20 14H4V8H7V10H9V8H15V10H17V8H20V14Z"
              fill="#626262"
            />
          </g>
          <defs>
            <clipPath id="clip0_7412_11876">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'exportStatistic':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9H15V3H9V9H5L12 16L19 9ZM11 11V5H13V11H14.17L12 13.17L9.83 11H11ZM5 18H19V20H5V18Z" fill="white" />
        </svg>
      );
      break;
    case 'editTypeConfig':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.7167 7.51667L12.4833 8.28333L4.93333 15.8333H4.16667V15.0667L11.7167 7.51667ZM14.7167 2.5C14.5083 2.5 14.2917 2.58333 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C15.1417 2.575 14.9333 2.5 14.7167 2.5ZM11.7167 5.15833L2.5 14.375V17.5H5.625L14.8417 8.28333L11.7167 5.15833Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'configTypeProfile':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.4308 12.98C19.4708 12.66 19.5008 12.34 19.5008 12C19.5008 11.66 19.4708 11.34 19.4308 11.02L21.5408 9.37C21.7308 9.22 21.7808 8.95 21.6608 8.73L19.6608 5.27C19.5708 5.11 19.4008 5.02 19.2208 5.02C19.1608 5.02 19.1008 5.03 19.0508 5.05L16.5608 6.05C16.0408 5.65 15.4808 5.32 14.8708 5.07L14.4908 2.42C14.4608 2.18 14.2508 2 14.0008 2H10.0008C9.75082 2 9.54082 2.18 9.51082 2.42L9.13082 5.07C8.52082 5.32 7.96082 5.66 7.44082 6.05L4.95082 5.05C4.89082 5.03 4.83082 5.02 4.77082 5.02C4.60082 5.02 4.43082 5.11 4.34082 5.27L2.34082 8.73C2.21082 8.95 2.27082 9.22 2.46082 9.37L4.57082 11.02C4.53082 11.34 4.50082 11.67 4.50082 12C4.50082 12.33 4.53082 12.66 4.57082 12.98L2.46082 14.63C2.27082 14.78 2.22082 15.05 2.34082 15.27L4.34082 18.73C4.43082 18.89 4.60082 18.98 4.78082 18.98C4.84082 18.98 4.90082 18.97 4.95082 18.95L7.44082 17.95C7.96082 18.35 8.52082 18.68 9.13082 18.93L9.51082 21.58C9.54082 21.82 9.75082 22 10.0008 22H14.0008C14.2508 22 14.4608 21.82 14.4908 21.58L14.8708 18.93C15.4808 18.68 16.0408 18.34 16.5608 17.95L19.0508 18.95C19.1108 18.97 19.1708 18.98 19.2308 18.98C19.4008 18.98 19.5708 18.89 19.6608 18.73L21.6608 15.27C21.7808 15.05 21.7308 14.78 21.5408 14.63L19.4308 12.98ZM17.4508 11.27C17.4908 11.58 17.5008 11.79 17.5008 12C17.5008 12.21 17.4808 12.43 17.4508 12.73L17.3108 13.86L18.2008 14.56L19.2808 15.4L18.5808 16.61L17.3108 16.1L16.2708 15.68L15.3708 16.36C14.9408 16.68 14.5308 16.92 14.1208 17.09L13.0608 17.52L12.9008 18.65L12.7008 20H11.3008L11.1108 18.65L10.9508 17.52L9.89082 17.09C9.46082 16.91 9.06082 16.68 8.66082 16.38L7.75082 15.68L6.69082 16.11L5.42082 16.62L4.72082 15.41L5.80082 14.57L6.69082 13.87L6.55082 12.74C6.52082 12.43 6.50082 12.2 6.50082 12C6.50082 11.8 6.52082 11.57 6.55082 11.27L6.69082 10.14L5.80082 9.44L4.72082 8.6L5.42082 7.39L6.69082 7.9L7.73082 8.32L8.63082 7.64C9.06082 7.32 9.47082 7.08 9.88082 6.91L10.9408 6.48L11.1008 5.35L11.3008 4H12.6908L12.8808 5.35L13.0408 6.48L14.1008 6.91C14.5308 7.09 14.9308 7.32 15.3308 7.62L16.2408 8.32L17.3008 7.89L18.5708 7.38L19.2708 8.59L18.2008 9.44L17.3108 10.14L17.4508 11.27ZM12.0008 8C9.79082 8 8.00082 9.79 8.00082 12C8.00082 14.21 9.79082 16 12.0008 16C14.2108 16 16.0008 14.21 16.0008 12C16.0008 9.79 14.2108 8 12.0008 8ZM12.0008 14C10.9008 14 10.0008 13.1 10.0008 12C10.0008 10.9 10.9008 10 12.0008 10C13.1008 10 14.0008 10.9 14.0008 12C14.0008 13.1 13.1008 14 12.0008 14Z"
            fill="#F57C00"
          />
        </svg>
      );
      break;
    case 'searchStatistic':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'statistic':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"
            fill="rgba(0, 0, 0, 0.5)"
          />
        </svg>
      );
      break;
    case 'sql':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 6.5165V3.36321C6.06217 3.38046 6.12468 3.39699 6.18732 3.41287C6.68842 3.53983 7.26703 3.64117 7.88651 3.72037C9.12623 3.87887 10.5877 3.95594 12.035 3.95507C13.4822 3.95421 14.9405 3.87542 16.1736 3.71455C16.7897 3.63418 17.3649 3.53138 17.8618 3.4024C17.908 3.39043 17.954 3.37808 18 3.36532V6.5165C17.9751 6.53454 17.941 6.55711 17.895 6.5839C17.6405 6.7322 17.2076 6.89067 16.5915 7.03026C15.3765 7.30557 13.7065 7.45161 12 7.45161C10.2935 7.45161 8.62354 7.30557 7.40848 7.03026C6.7924 6.89067 6.35951 6.7322 6.10498 6.5839C6.059 6.55711 6.02487 6.53454 6 6.5165ZM18.0593 6.46495C18.0599 6.46501 18.0571 6.46883 18.0495 6.47619C18.055 6.46856 18.0588 6.46488 18.0593 6.46495ZM5.94068 6.46495C5.94122 6.46488 5.94502 6.46856 5.95045 6.47619C5.94286 6.46883 5.94014 6.46501 5.94068 6.46495Z"
            stroke="#626262"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M6 13.2909V10.1376C6.06217 10.1549 6.12468 10.1714 6.18732 10.1873C6.68842 10.3142 7.26703 10.4156 7.88651 10.4948C9.12623 10.6533 10.5877 10.7304 12.035 10.7295C13.4822 10.7286 14.9405 10.6498 16.1736 10.489C16.7897 10.4086 17.3649 10.3058 17.8618 10.1768C17.908 10.1648 17.954 10.1525 18 10.1397V13.2909C17.9751 13.309 17.941 13.3315 17.895 13.3583C17.6405 13.5066 17.2076 13.6651 16.5915 13.8047C15.3765 14.08 13.7065 14.226 12 14.226C10.2935 14.226 8.62354 14.08 7.40848 13.8047C6.7924 13.6651 6.35951 13.5066 6.10498 13.3583C6.059 13.3315 6.02487 13.309 6 13.2909ZM18.0593 13.2394C18.0599 13.2394 18.0571 13.2432 18.0495 13.2506C18.055 13.243 18.0588 13.2393 18.0593 13.2394ZM5.94068 13.2394C5.94122 13.2393 5.94502 13.243 5.95045 13.2506C5.94286 13.2432 5.94014 13.2394 5.94068 13.2394Z"
            stroke="#626262"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M6 20.0653V16.912C6.06217 16.9293 6.12468 16.9458 6.18732 16.9617C6.68842 17.0887 7.26703 17.19 7.88651 17.2692C9.12623 17.4277 10.5877 17.5048 12.035 17.5039C13.4822 17.503 14.9405 17.4242 16.1736 17.2634C16.7897 17.183 17.3649 17.0802 17.8618 16.9512C17.908 16.9393 17.954 16.9269 18 16.9141V20.0653C17.9751 20.0834 17.941 20.1059 17.895 20.1327C17.6405 20.281 17.2076 20.4395 16.5915 20.5791C15.3765 20.8544 13.7065 21.0004 12 21.0004C10.2935 21.0004 8.62354 20.8544 7.40848 20.5791C6.7924 20.4395 6.35951 20.281 6.10498 20.1327C6.059 20.1059 6.02487 20.0834 6 20.0653ZM18.0593 20.0138C18.0599 20.0138 18.0571 20.0177 18.0495 20.025C18.055 20.0174 18.0588 20.0137 18.0593 20.0138ZM5.94068 20.0138C5.94122 20.0137 5.94502 20.0174 5.95045 20.025C5.94286 20.0177 5.94014 20.0138 5.94068 20.0138Z"
            stroke="#626262"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      );
      break;
    case 'notice1':
      iconElement = (
        <svg width="406" height="202" viewBox="0 0 406 202" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-121.565 -14.4636L405.183 -16.1669C222.227 -7.58615 73.9122 58.9039 -22.2484 121.781C-67.5549 151.405 -101.284 180.228 -121.604 201.814L-121.565 -14.4636Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'notice2':
      iconElement = (
        <svg width="424" height="256" viewBox="0 0 424 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M-120.7 -20.147L423.489 -22.0001C234.479 -11.1557 81.2827 73.6495 -18.0336 153.873C-64.827 191.671 -99.6598 228.451 -120.643 256L-120.7 -20.147Z"
            fill="#B2E9F8"
          />
        </svg>
      );
      break;
    case 'notice3':
      iconElement = (
        <svg width="605" height="225" viewBox="0 0 605 225" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M723.401 225.59L0 226C251.28 217.524 455.132 148.556 587.351 83.2214C649.646 52.4386 696.04 22.4625 724 0L723.401 225.59Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'notice4':
      iconElement = (
        <svg width="630" height="272" viewBox="0 0 630 272" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M746.382 272.505L0 273C259.262 262.762 469.591 179.45 606.01 100.528C670.284 63.344 718.152 27.1339 747 0L746.382 272.505Z"
            fill="#B2E9F8"
          />
        </svg>
      );
      break;
    case 'warningInactive':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M59.9997 93.333C63.6663 93.333 66.6663 90.333 66.6663 86.6663H53.333C53.333 90.333 56.333 93.333 59.9997 93.333ZM79.9997 73.333V56.6663C79.9997 46.433 74.5663 37.8663 64.9997 35.5997V33.333C64.9997 30.5663 62.7663 28.333 59.9997 28.333C57.233 28.333 54.9997 30.5663 54.9997 33.333V35.5997C45.4663 37.8663 39.9997 46.3997 39.9997 56.6663V73.333L33.333 79.9997V83.333H86.6663V79.9997L79.9997 73.333ZM73.333 76.6663H46.6663V56.6663C46.6663 48.3997 51.6997 41.6663 59.9997 41.6663C68.2997 41.6663 73.333 48.3997 73.333 56.6663V76.6663Z"
            fill="#F57C00"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#F57C00" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'closeTab':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="white" />
          <path
            d="M14.6668 6.2735L13.7268 5.3335L10.0002 9.06016L6.2735 5.3335L5.3335 6.2735L9.06016 10.0002L5.3335 13.7268L6.2735 14.6668L10.0002 10.9402L13.7268 14.6668L14.6668 13.7268L10.9402 10.0002L14.6668 6.2735Z"
            fill="#323232"
          />
        </svg>
      );
      break;
    case 'defaultAvatar':
      iconElement = (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#F4F4F4" />
          <path
            d="M20 14C21.1 14 22 14.9 22 16C22 17.1 21.1 18 20 18C18.9 18 18 17.1 18 16C18 14.9 18.9 14 20 14ZM20 23C22.7 23 25.8 24.29 26 25V26H14V25.01C14.2 24.29 17.3 23 20 23ZM20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12ZM20 21C17.33 21 12 22.34 12 25V28H28V25C28 22.34 22.67 21 20 21Z"
            fill="#626262"
          />
        </svg>
      );
      break;
    case 'bigLogo':
      iconElement = (
        <svg width="264" height="45" viewBox="0 0 264 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M28.2558 27.1657C28.186 23.1565 27.8372 20.2532 27.0698 18.2486C26.3023 16.1058 24.7674 14.5159 22.6047 13.6173C20.5814 12.7878 17.6512 12.373 13.7442 12.373C9.69767 12.373 6.76744 12.9952 4.81395 14.3085C2.7907 15.6219 1.46512 17.5574 0.837209 19.9767C0.27907 22.1887 0 25.2993 0 29.3085C0 32.2118 0.209302 34.6311 0.55814 36.4975C0.976744 38.5021 1.67442 40.0919 2.7907 41.3362C3.83721 42.5804 5.37209 43.5482 7.32558 44.1012C9.13953 44.6542 11.5814 44.8615 14.4419 44.8615C17.5116 44.8615 19.9535 44.6542 21.7674 44.2394C23.7907 43.8247 25.3953 42.7878 26.5116 41.1979C27.6977 39.6772 28.2558 37.3961 28.2558 34.3546V33.3178H21.4884V35.3224C21.4884 37.8108 20.5116 38.2256 20.1628 38.433C19.0465 38.986 17.2326 39.1933 14.9302 39.1933H13.7442C11.4419 39.1933 9.76744 38.8477 8.86047 38.1565C7.95349 37.4652 7.39535 36.5666 7.18605 35.4606C6.97674 34.2855 6.83721 32.6265 6.83721 30.4836H28.3256V27.1657H28.2558ZM6.76744 24.9537C6.83721 23.1565 7.04651 21.7048 7.39535 20.7371C7.74419 19.7002 8.37209 19.009 9.34884 18.5942C10.3953 18.1104 12 17.903 14.1628 17.903C16.6047 17.903 18.4186 18.1104 19.4651 18.5942C20.3721 18.9399 20.9302 19.562 21.1395 20.5297C21.4186 21.4975 21.5581 23.0182 21.6279 25.0919H6.76744V24.9537Z"
              fill="#08B7DD"
            />
            <path
              d="M66.2791 30.9677C66.2094 30.1382 66.2094 29.5161 66.2094 29.1014V28.0645H59.3721V29.1014C59.3721 29.5853 59.3721 30.4147 59.4419 31.5207C59.5117 32.6267 59.5117 33.3871 59.5117 33.871C59.4419 35.7373 58.6745 36.9124 57.1396 37.6037C55.3954 38.3641 53.0931 38.7097 50.3721 38.7097C49.8838 38.7097 49.1861 38.7097 48.2791 38.6406C47.3721 38.5714 46.7442 38.5714 46.3954 38.5714C42.2094 38.5714 39.628 37.8111 38.7908 36.4286C37.7442 34.5622 37.2559 30.8295 37.2559 25.2304V15.4147C37.2559 13.2719 37.3954 11.5438 37.7442 10.2995C38.0233 9.19355 38.5815 8.36406 39.4187 7.74194C40.3256 7.11982 41.6512 6.70507 43.4652 6.56682C46.7442 6.35945 49.7442 6.2212 52.3954 6.2212C54.4187 6.2212 55.9535 6.4977 56.8605 7.05069C57.6977 7.53456 58.2559 8.22581 58.4652 9.19355C58.7442 10.3687 58.8838 12.0968 58.8838 14.447V15.4839H65.7907L65.721 14.3779C65.5117 11.3364 65.1628 8.84793 64.7442 7.05069C64.2559 5.18433 63.4187 3.66359 62.2326 2.62673C61.1163 1.58986 59.5117 0.898618 57.628 0.483871C55.8838 0.207373 53.4419 0 50.3721 0C46.5349 0 43.7442 0.138249 41.9303 0.345622C38.9303 0.691244 36.4884 1.52074 34.7442 2.8341C33.0001 4.14747 31.7442 5.9447 31.0466 8.15668C30.4187 10.2304 30.0698 12.7189 30.0698 15.6912V22.4654C30.1396 24.47 30.2094 26.8203 30.2791 29.5853C30.4187 32.4194 30.7675 34.9078 31.4652 36.9816C32.1628 39.1244 33.4884 40.9217 35.3024 42.3733C37.1163 43.7558 39.6977 44.5853 42.907 44.7926H48.9768C51.2791 44.7926 53.5814 44.7235 55.8838 44.5853C62.721 43.9631 66.3489 39.9539 66.3489 33.1106C66.4187 32.5576 66.3489 31.8664 66.2791 30.9677Z"
              fill="#1F2A49"
            />
            <path
              d="M96.1394 18.3874C95.3022 16.1063 93.7673 14.4473 91.6045 13.5487C89.5115 12.6501 86.5115 12.2354 82.5347 12.2354C78.7673 12.2354 75.9766 12.7883 73.9533 13.8252C71.9301 14.9312 70.4649 16.6593 69.7673 19.0095C69.1394 21.1524 68.7905 24.1248 68.7905 27.7883V30.6224C68.7905 34.4934 69.2091 37.3966 70.1161 39.4012C71.0929 41.5441 72.6975 43.0648 74.9301 43.8943C77.0231 44.6547 79.9533 45.0003 83.7905 45.0003C87.9068 45.0003 90.9068 44.3091 92.9301 42.8575C94.9533 41.4059 96.2091 39.4012 96.6277 36.9819C97.0463 34.7699 97.2556 31.5902 97.2556 27.5118C97.2556 23.5026 96.9068 20.5303 96.1394 18.3874ZM90.4184 27.1662C90.4184 30.0695 90.4184 32.3506 90.3487 33.8713C90.2789 35.4612 89.9301 36.7054 89.4417 37.4658C88.9533 38.157 88.2557 38.6409 87.4184 38.8483C86.3719 39.1248 84.9766 39.263 83.1626 39.263H80.9301C78.3487 39.263 77.3022 38.7791 76.8836 38.3644C76.1859 37.604 75.3487 35.5994 75.3487 30.2768V26.8206C75.3487 23.9865 75.558 21.9128 75.9068 20.6685C76.1859 19.6317 76.8138 18.9404 77.7208 18.5948C78.7673 18.1801 80.5812 17.9036 83.1626 17.9036H84.1394C86.8603 17.9036 88.1161 18.3183 88.6743 18.733C89.4417 19.2169 89.9301 19.9773 90.1394 21.0142C90.2789 22.3275 90.4184 24.4012 90.4184 27.1662Z"
              fill="#1F2A49"
            />
            <path
              d="M125.861 17.0741C125.023 15.2769 123.698 13.9635 121.954 13.2032C120.209 12.4428 117.977 12.0972 115.116 12.0972C112.675 12.0972 110.512 12.4428 108.698 13.134C107.651 13.5488 106.744 14.1018 105.907 14.8621V12.7884H99.7676V44.5165H106.326V25.2999C106.326 20.1847 108.837 17.8345 114.14 17.8345C116.093 17.8345 117.489 18.0419 118.395 18.3875C119.163 18.7331 119.651 19.217 119.93 19.9774C120.279 20.876 120.419 22.3276 120.419 24.1939V44.5165H127.047V23.8483C127.047 21.0142 126.628 18.7331 125.861 17.0741Z"
              fill="#1F2A49"
            />
            <path
              d="M146.163 32.0044V34.9076C146.163 36.9813 145.814 37.9491 145.535 38.3638C145.256 38.8477 144.279 39.1242 142.884 39.1242C141 39.1242 140.442 38.7094 140.302 38.5021C140.093 38.2256 139.744 37.5343 139.744 35.5297V18.456H151.256V12.7878H139.744V5.66797H133.116V12.7878H129.209V18.456H133.116V35.5297C133.116 37.8108 133.396 39.6081 134.023 40.9214C134.651 42.373 135.768 43.4099 137.302 44.032C138.698 44.585 140.512 44.8615 142.884 44.8615C146.721 44.8615 149.372 43.8246 150.628 41.6818C151.814 39.6772 152.442 36.9122 152.442 33.0412V32.0044H146.163Z"
              fill="#1F2A49"
            />
            <path
              d="M168.349 12.0972C165.488 12.0972 163.116 12.8575 161.302 14.3783V12.7884H154.884V44.5165H161.442V23.7101C161.442 19.7009 163.326 17.8345 167.372 17.8345C169.116 17.8345 170.233 18.2492 170.721 19.0096C171.279 19.9774 171.628 21.4981 171.628 23.5718V24.6087H178.047V23.5718C178.047 14.1018 172.744 12.0972 168.349 12.0972Z"
              fill="#1F2A49"
            />
            <path
              d="M206.512 16.9353C205.395 15.2072 203.791 14.0321 201.698 13.4791C199.814 12.9952 197.233 12.7188 194.093 12.7188C189.768 12.7188 186.698 13.2717 184.605 14.3777C182.372 15.622 181.186 18.3178 181.186 22.3962V23.433H187.884V22.3962C187.884 22.1197 187.814 21.9123 187.744 21.6358C187.675 21.4284 187.675 21.3593 187.675 21.3593C187.675 20.1842 187.954 19.3547 188.581 18.9399C189.14 18.5252 190.465 17.9722 193.674 17.9722C196.116 17.9722 197.93 18.1105 198.977 18.4561C199.814 18.7326 200.372 19.2164 200.721 20.1151C201.14 21.1519 201.279 22.8109 201.279 25.1611V26.1289C200.581 25.645 199.744 25.2994 198.837 25.092C197.233 24.7464 195.209 24.539 192.768 24.539C190.116 24.539 187.954 24.7464 186.209 25.2303C184.326 25.7141 182.791 26.751 181.744 28.2026C180.698 29.6542 180.14 31.7971 180.14 34.4929C180.14 37.3271 180.628 39.4699 181.675 40.9906C182.721 42.5805 184.186 43.6174 186.14 44.1704C187.884 44.6542 190.186 44.9307 192.977 44.9307C195.488 44.9307 197.581 44.6542 199.256 44.1704C200.163 43.8939 201 43.4791 201.768 42.9261L201.628 44.3777H208.047V24.1934C208.116 20.9446 207.558 18.5943 206.512 16.9353ZM201.698 34.7694C201.698 36.2211 201.349 37.1888 200.581 37.8109C199.744 38.5022 198.768 38.9169 197.581 39.0552C196.326 39.2625 194.651 39.3317 192.768 39.3317C189.907 39.3317 188.651 38.7787 188.093 38.2948C187.326 37.6727 186.977 36.2211 186.977 34.0782C186.977 32.0045 187.465 31.3823 187.605 31.2441L187.675 31.175C188.093 30.7602 189.419 30.1381 193.326 30.1381H194.442C197.023 30.1381 198.977 30.4146 200.233 31.0367C201.209 31.5206 201.698 32.7648 201.698 34.7694Z"
              fill="#1F2A49"
            />
            <path
              d="M232.047 31.5894V32.6262C232.047 34.7691 231.837 36.2898 231.419 37.1884C231.07 37.9488 230.512 38.4327 229.605 38.7092C228.558 38.9857 226.884 39.1239 224.581 39.1239C222.279 39.1239 220.605 38.8474 219.628 38.2253C218.721 37.6723 218.163 36.9119 217.884 35.8059C217.605 34.5617 217.465 32.6262 217.465 30.1377V27.1654C217.465 24.3313 217.674 22.2576 218.023 20.9442C218.372 19.9073 218.93 19.147 219.907 18.8013C221.023 18.3175 222.837 18.1101 225.419 18.1101C227.093 18.1101 228.419 18.2483 229.326 18.594C230.093 18.8705 230.581 19.2852 230.93 19.9765C231.349 20.7368 231.488 21.9119 231.488 23.5709V24.6078H237.907V22.6032C237.907 18.594 236.651 15.8981 234.279 14.4465C232.047 13.1331 228.907 12.4419 224.86 12.4419C221.163 12.4419 218.372 12.9258 216.279 14.0318C214.116 15.1377 212.651 16.7967 211.814 19.0778C211.047 21.2207 210.628 24.1239 210.628 27.7184C210.628 31.0364 210.767 33.6631 210.977 35.4603C211.186 37.3958 211.814 39.1239 212.721 40.5064C213.698 41.958 215.163 43.064 217.186 43.7553C219.07 44.4465 221.581 44.723 224.86 44.723C228.209 44.723 230.721 44.4465 232.605 43.8244C234.628 43.1331 236.163 41.8889 237.14 40.0917C238.047 38.3636 238.535 35.9442 238.535 32.6953V31.6585H232.047V31.5894Z"
              fill="#1F2A49"
            />
            <path
              d="M257.721 32.0044V34.9076C257.721 36.9813 257.372 37.9491 257.093 38.3638C256.814 38.8477 255.837 39.1242 254.442 39.1242C252.558 39.1242 252 38.7094 251.861 38.5021C251.651 38.2256 251.302 37.5343 251.302 35.5297V18.456H262.814V12.7878H251.302V5.66797H244.675V12.7878H240.768V18.456H244.675V35.5297C244.675 37.8108 244.954 39.6081 245.582 40.9214C246.209 42.373 247.326 43.4099 248.861 44.032C250.256 44.585 252.07 44.8615 254.442 44.8615C258.279 44.8615 260.93 43.8246 262.186 41.6818C263.372 39.6772 264 36.9122 264 33.0412V32.0044H257.721Z"
              fill="#1F2A49"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="264" height="45" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'signMethod':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M66.6665 40L63.3332 33.3333H36.6665V90H43.3332V66.6667H59.9998L63.3332 73.3333H86.6665V40H66.6665ZM79.9998 66.6667H66.6665L63.3332 60H43.3332V40H59.9998L63.3332 46.6667H79.9998V66.6667Z"
            fill="#08B7DD"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#08B7DD" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'trashRed':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40.0003 83.3333C40.0003 87 43.0003 90 46.667 90H73.3337C77.0003 90 80.0003 87 80.0003 83.3333V43.3333H40.0003V83.3333ZM46.667 50H73.3337V83.3333H46.667V50ZM71.667 33.3333L68.3337 30H51.667L48.3337 33.3333H36.667V40H83.3337V33.3333H71.667Z"
            fill="#E50500"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#E50500" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'logoutIcon':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'updateUnit':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'warningCKS':
      iconElement = (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.9148 5.99L20.4156 19H5.41406L12.9148 5.99ZM12.9148 2L1.95752 21H23.8722L12.9148 2ZM13.911 16H11.9187V18H13.911V16ZM13.911 10H11.9187V14H13.911V10Z"
            fill="#F57C00"
          />
        </svg>
      );
      break;
    case 'warningAmber':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z"
            fill="#E50500"
          />
        </svg>
      );
      break;
    case 'arrowDownTree':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5 4.5L8 12L0.5 4.5"
            stroke="#868E96"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'cancel':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 17.4649L3 2.99995C3 2.73473 3.10536 2.48038 3.29289 2.29284C3.48043 2.1053 3.73478 1.99995 4 1.99995H20C20.2652 1.99995 20.5196 2.1053 20.7071 2.29284C20.8946 2.48038 21 2.73473 21 2.99995V17.4649C21 17.6295 20.9594 17.7916 20.8818 17.9367C20.8042 18.0819 20.6919 18.2056 20.555 18.2969L12.555 23.6299C12.3907 23.7396 12.1975 23.7981 12 23.7981C11.8025 23.7981 11.6093 23.7396 11.445 23.6299L3.445 18.2969C3.30808 18.2056 3.19583 18.0819 3.11821 17.9367C3.04058 17.7916 2.99998 17.6295 3 17.4649ZM5 16.9299L12 21.5959L19 16.9299V3.99995H5L5 16.9299ZM10.586 10.9999L7.757 8.17195L9.172 6.75695L12 9.58595L14.828 6.75695L16.243 8.17195L13.414 10.9999L16.243 13.8279L14.828 15.2429L12 12.4139L9.172 15.2429L7.757 13.8279L10.586 10.9999Z"
            fill="#EB5757"
          />
        </svg>
      );
      break;
    case 'undo':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 16H16C19.866 16 23 12.866 23 9C23 5.134 19.866 2 16 2H9"
            stroke="#219653"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11L2 16L7 21"
            stroke="#219653"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'refresh':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13.01 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 10.99 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74Z"
            fill="#00C968"
          />
        </svg>
      );
      break;
    case 'refresh-blue':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33398 7.99998C1.33398 4.33331 4.33398 1.33331 8.00065 1.33331C10.6007 1.33331 12.8673 2.79998 13.934 4.99998"
            stroke="#448AFF"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6664 8C14.6664 11.6667 11.6664 14.6667 7.99974 14.6667C5.39974 14.6667 3.13307 13.2 2.06641 11"
            stroke="#448AFF"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5333 1.13336L14 5.0667L10 4.53336"
            stroke="#448AFF"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.4668 14.8667L2.00013 10.9333L6.00013 11.4667"
            stroke="#448AFF"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'users':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.992 18.7371L8.2 20.4001C8.704 20.7781 9 21.3701 9 22.0001V23.0001H1V22.0001C1 21.3701 1.296 20.7781 1.8 20.4001L4.008 18.7371"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 19C3.895 19 3 18.105 3 17V16C3 14.895 3.895 14 5 14C6.105 14 7 14.895 7 16V17C7 18.105 6.105 19 5 19Z"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.992 5.73706L15.2 7.40006C15.704 7.77806 16 8.37006 16 9.00006V10.0001H8V9.00006C8 8.37006 8.296 7.77806 8.8 7.40006L11.008 5.73706"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C10.895 6 10 5.105 10 4V3C10 1.895 10.895 1 12 1C13.105 1 14 1.895 14 3V4C14 5.105 13.105 6 12 6Z"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.992 18.7371L22.2 20.4001C22.704 20.7781 23 21.3701 23 22.0001V23.0001H15V22.0001C15 21.3701 15.296 20.7781 15.8 20.4001L18.008 18.7371"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 19C17.895 19 17 18.105 17 17V16C17 14.895 17.895 14 19 14C20.105 14 21 14.895 21 16V17C21 18.105 20.105 19 19 19Z"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'restore':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6C12.5523 6 13 6.44772 13 7V11.5858L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z"
            fill="#24B8CC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.20019 7.06373C3.96759 3.41846 7.71737 1 12 1C18.0523 1 23 5.94772 23 12C23 18.0523 18.0523 23 12 23C5.94772 23 1 18.0523 1 12C1 11.4477 1.44772 11 2 11C2.55228 11 3 11.4477 3 12C3 16.9477 7.05228 21 12 21C16.9477 21 21 16.9477 21 12C21 7.05228 16.9477 3 12 3C8.48263 3 5.43241 4.98154 3.99981 7.93627C3.75887 8.43323 3.16068 8.64076 2.66373 8.39981C2.16677 8.15887 1.95924 7.56068 2.20019 7.06373Z"
            fill="#24B8CC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.09664 1.58406C2.64116 1.49172 3.15742 1.85828 3.24976 2.4028L3.91857 6.34687L7.86264 5.67806C8.40716 5.58572 8.92342 5.95228 9.01576 6.4968C9.10809 7.04131 8.74153 7.55757 8.19702 7.64991L3.26702 8.48591C3.00554 8.53025 2.73715 8.4689 2.5209 8.31536C2.30465 8.16181 2.15825 7.92865 2.11391 7.66717L1.27791 2.73717C1.18557 2.19266 1.55213 1.67639 2.09664 1.58406Z"
            fill="#24B8CC"
          />
        </svg>
      );
      break;
    case 'back':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2C8 1.44772 8.44772 1 9 1H16C20.4183 1 24 4.58172 24 9C24 13.4183 20.4183 17 16 17H2C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15H16C19.3137 15 22 12.3137 22 9C22 5.68628 19.3137 3 16 3H9C8.44772 3 8 2.55228 8 2Z"
            fill="#219653"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.70711 10.2929C8.09763 10.6834 8.09763 11.3166 7.70711 11.7071L3.41421 16L7.70711 20.2929C8.09763 20.6834 8.09763 21.3166 7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071L1.29289 16.7071C0.902369 16.3166 0.902369 15.6834 1.29289 15.2929L6.29289 10.2929C6.68342 9.90237 7.31658 9.90237 7.70711 10.2929Z"
            fill="#219653"
          />
        </svg>
      );
      break;
    case 'remove':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4142 12.0002L17.7072 7.70725C18.0982 7.31625 18.0982 6.68425 17.7072 6.29325C17.3162 5.90225 16.6842 5.90225 16.2933 6.29325L12.0002 10.5862L7.70725 6.29325C7.31625 5.90225 6.68425 5.90225 6.29325 6.29325C5.90225 6.68425 5.90225 7.31625 6.29325 7.70725L10.5862 12.0002L6.29325 16.2933C5.90225 16.6842 5.90225 17.3162 6.29325 17.7072C6.48825 17.9022 6.74425 18.0002 7.00025 18.0002C7.25625 18.0002 7.51225 17.9022 7.70725 17.7072L12.0002 13.4142L16.2933 17.7072C16.4882 17.9022 16.7443 18.0002 17.0002 18.0002C17.2562 18.0002 17.5122 17.9022 17.7072 17.7072C18.0982 17.3162 18.0982 16.6842 17.7072 16.2933L13.4142 12.0002Z"
            fill="#616161"
          />
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="6" width="13" height="13">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.4142 12.0002L17.7072 7.70725C18.0982 7.31625 18.0982 6.68425 17.7072 6.29325C17.3162 5.90225 16.6842 5.90225 16.2933 6.29325L12.0002 10.5862L7.70725 6.29325C7.31625 5.90225 6.68425 5.90225 6.29325 6.29325C5.90225 6.68425 5.90225 7.31625 6.29325 7.70725L10.5862 12.0002L6.29325 16.2933C5.90225 16.6842 5.90225 17.3162 6.29325 17.7072C6.48825 17.9022 6.74425 18.0002 7.00025 18.0002C7.25625 18.0002 7.51225 17.9022 7.70725 17.7072L12.0002 13.4142L16.2933 17.7072C16.4882 17.9022 16.7443 18.0002 17.0002 18.0002C17.2562 18.0002 17.5122 17.9022 17.7072 17.7072C18.0982 17.3162 18.0982 16.6842 17.7072 16.2933L13.4142 12.0002Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)" />
        </svg>
      );
      break;
    case 'filter-main':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.00018 6H17.0002L11.9902 12.3L7.00018 6ZM4.25018 5.61C6.27018 8.2 10.0002 13 10.0002 13V19C10.0002 19.55 10.4502 20 11.0002 20H13.0002C13.5502 20 14.0002 19.55 14.0002 19V13C14.0002 13 17.7202 8.2 19.7402 5.61C20.2502 4.95 19.7802 4 18.9502 4H5.04018C4.21018 4 3.74018 4.95 4.25018 5.61Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'filter-white':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.99969 6H16.9997L11.9897 12.3L6.99969 6ZM4.24969 5.61C6.26969 8.2 9.99969 13 9.99969 13V19C9.99969 19.55 10.4497 20 10.9997 20H12.9997C13.5497 20 13.9997 19.55 13.9997 19V13C13.9997 13 17.7197 8.2 19.7397 5.61C20.2497 4.95 19.7797 4 18.9497 4H5.03969C4.20969 4 3.73969 4.95 4.24969 5.61Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'box-confirm':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.7071 16.2929C23.0976 16.6834 23.0976 17.3166 22.7071 17.7071L17.7071 22.7071C17.3166 23.0976 16.6834 23.0976 16.2929 22.7071L14.2929 20.7071C13.9024 20.3166 13.9024 19.6834 14.2929 19.2929C14.6834 18.9024 15.3166 18.9024 15.7071 19.2929L17 20.5858L21.2929 16.2929C21.6834 15.9024 22.3166 15.9024 22.7071 16.2929Z"
            fill="#27AE60"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 2C0 1.44772 0.447715 1 1 1H23C23.5523 1 24 1.44772 24 2V12C24 12.5523 23.5523 13 23 13C22.4477 13 22 12.5523 22 12V3H2V21H10C10.5523 21 11 21.4477 11 22C11 22.5523 10.5523 23 10 23H1C0.447715 23 0 22.5523 0 22V2Z"
            fill="#27AE60"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.4933 4.09558C11.8433 4.26069 12.0667 4.61297 12.0667 5.00001V7.39811C13.5323 7.5105 15.0816 7.89853 16.3582 8.84625C17.986 10.0547 19 12.043 19 15C19 15.4438 18.7075 15.8345 18.2816 15.9595C17.8558 16.0845 17.3985 15.9139 17.1586 15.5405C15.9136 13.6021 14.0982 12.8713 12.0667 12.7055V15C12.0667 15.387 11.8433 15.7393 11.4933 15.9044C11.1432 16.0696 10.7293 16.0179 10.4307 15.7717L4.364 10.7717C4.13351 10.5817 4 10.2987 4 10C4 9.70133 4.13351 9.41829 4.364 9.22833L10.4307 4.22833C10.7293 3.98217 11.1432 3.93046 11.4933 4.09558ZM6.57232 10L10.0667 12.88V11.6667C10.0667 11.1144 10.5144 10.6667 11.0667 10.6667C12.8672 10.6667 14.7811 10.9756 16.4404 12.0328C16.1114 11.3266 15.6632 10.8211 15.1661 10.4521C14.0907 9.65379 12.6097 9.36084 11.0667 9.36084C10.5144 9.36084 10.0667 8.91313 10.0667 8.36084V7.12005L6.57232 10Z"
            fill="#27AE60"
          />
        </svg>
      );
      break;
    case 'check-list':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 6C11 5.44772 11.4477 5 12 5H23C23.5523 5 24 5.44772 24 6C24 6.55228 23.5523 7 23 7H12C11.4477 7 11 6.55228 11 6Z"
              fill="#EB5757"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 3C1 2.44772 1.44772 2 2 2H8C8.55228 2 9 2.44772 9 3V9C9 9.55228 8.55228 10 8 10H2C1.44772 10 1 9.55228 1 9V3ZM3 4V8H7V4H3Z"
              fill="#EB5757"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 18C11 17.4477 11.4477 17 12 17H23C23.5523 17 24 17.4477 24 18C24 18.5523 23.5523 19 23 19H12C11.4477 19 11 18.5523 11 18Z"
              fill="#EB5757"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L4.70711 20.7071C4.31658 21.0976 3.68342 21.0976 3.29289 20.7071L1.29289 18.7071C0.902369 18.3166 0.902369 17.6834 1.29289 17.2929C1.68342 16.9024 2.31658 16.9024 2.70711 17.2929L4 18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929Z"
              fill="#EB5757"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'handout-2':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9C5.67157 9 5 9.67157 5 10.5C5 11.3284 5.67157 12 6.5 12C7.32843 12 8 11.3284 8 10.5C8 9.67157 7.32843 9 6.5 9ZM3 10.5C3 8.567 4.567 7 6.5 7C8.433 7 10 8.567 10 10.5C10 12.433 8.433 14 6.5 14C4.567 14 3 12.433 3 10.5Z"
              fill="#27AE60"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 12C24 11.4477 23.5523 11 23 11H22C21.3492 11 20.2719 11.124 19.1976 11.4598C18.2997 11.7404 17.2686 12.2106 16.5281 13H14C12.3643 13 10.912 13.7856 9.99972 15H5C3.32232 15 2.2698 15.6124 1.66114 16.3773C1.37282 16.7397 1.21171 17.1021 1.12193 17.3773C1.07682 17.5156 1.04873 17.6348 1.03132 17.7254C1.02259 17.7709 1.01646 17.8096 1.01219 17.8404C1.01006 17.8558 1.00838 17.8693 1.00707 17.8808L1.00537 17.8964L1.00471 17.903L1.00442 17.9061L1.00429 17.9075C1.00422 17.9082 1.00416 17.9089 2 18L1.00416 17.9089C0.963396 18.3544 1.22348 18.7728 1.64102 18.9333L13.4057 23.4582C13.4058 23.4583 13.4056 23.4582 13.4057 23.4582C14.4555 23.8623 15.6264 23.8048 16.6312 23.3024L23.4472 19.8944C23.786 19.725 24 19.3788 24 19V12ZM3.3817 17.46C3.63075 17.2423 4.09907 17 5 17H9.10003C9.03444 17.3231 9 17.6575 9 18C9 18.5523 9.44771 19 10 19H17C17.5523 19 18 18.5523 18 18C18 17.4477 17.5523 17 17 17H11.1707C11.5826 15.8349 12.6939 15 14 15H17C17.3262 15 17.6319 14.8409 17.8191 14.5737C18.1762 14.0637 18.893 13.6504 19.7942 13.3687C20.6701 13.095 21.5458 13 22 13V18.382L15.7368 21.5136C15.2337 21.7651 14.6484 21.7936 14.1243 21.5918L3.3817 17.46Z"
              fill="#27AE60"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.7071 0.292893C21.0976 0.683417 21.0976 1.31658 20.7071 1.70711L14.7071 7.70711C14.3166 8.09763 13.6834 8.09763 13.2929 7.70711L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L14 5.58579L19.2929 0.292893C19.6834 -0.0976311 20.3166 -0.0976311 20.7071 0.292893Z"
              fill="#27AE60"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'cheque':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11C0 10.4477 0.447715 10 1 10H6C6.55228 10 7 10.4477 7 11C7 11.5523 6.55228 12 6 12H2V21H22V12H17C16.4477 12 16 11.5523 16 11C16 10.4477 16.4477 10 17 10H23C23.5523 10 24 10.4477 24 11V22C24 22.5523 23.5523 23 23 23H1C0.447715 23 0 22.5523 0 22V11Z"
            fill="#24B8CC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2929 1.29289C14.6834 0.902369 15.3166 0.902369 15.7071 1.29289L18.7071 4.29289C19.0976 4.68342 19.0976 5.31658 18.7071 5.70711L9.70711 14.7071C9.51957 14.8946 9.26522 15 9 15H6C5.44772 15 5 14.5523 5 14V11C5 10.7348 5.10536 10.4804 5.29289 10.2929L14.2929 1.29289ZM7 11.4142V13H8.58579L16.5858 5L15 3.41421L7 11.4142Z"
            fill="#24B8CC"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 18C5 17.4477 5.44772 17 6 17H18C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
            fill="#24B8CC"
          />
        </svg>
      );
      break;
    case 'curved-previous':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3827 2.07615C10.7564 2.23093 11 2.59557 11 3.00003V7.02266C13.6775 7.14467 16.6994 7.78362 19.1713 9.50429C22.0179 11.4858 24 14.8085 24 20C24 20.4513 23.6978 20.8467 23.2623 20.965C22.8268 21.0834 22.366 20.8954 22.1376 20.5062C20.8447 18.3035 19.6007 16.9885 17.8759 16.1806C16.2711 15.429 14.1535 15.0694 11 15.0092V19C11 19.4045 10.7564 19.7691 10.3827 19.9239C10.009 20.0787 9.57889 19.9931 9.29289 19.7071L1.29289 11.7071C0.902369 11.3166 0.902369 10.6834 1.29289 10.2929L9.29289 2.29292C9.57889 2.00692 10.009 1.92137 10.3827 2.07615ZM3.41421 11L9 16.5858V14C9 13.4477 9.44772 13 10 13C13.7848 13 16.5429 13.3478 18.7241 14.3694C19.8286 14.8867 20.756 15.5624 21.5819 16.405C20.9399 13.9086 19.6174 12.2516 18.0287 11.1458C15.7141 9.5346 12.6976 9.00003 10 9.00003C9.44772 9.00003 9 8.55231 9 8.00003V5.41424L3.41421 11Z"
            fill="#9B51E0"
          />
        </svg>
      );
      break;
    case 'g-chart':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 14C1 13.4477 1.44772 13 2 13H6C6.55228 13 7 13.4477 7 14V20C7 20.5523 6.55228 21 6 21H2C1.44772 21 1 20.5523 1 20V14ZM3 15V19H5V15H3Z"
            fill="#27AE60"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 9C9 8.44772 9.44772 8 10 8H14C14.5523 8 15 8.44772 15 9V20C15 20.5523 14.5523 21 14 21H10C9.44772 21 9 20.5523 9 20V9ZM11 10V19H13V10H11Z"
            fill="#27AE60"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 4C17 3.44772 17.4477 3 18 3H22C22.5523 3 23 3.44772 23 4V20C23 20.5523 22.5523 21 22 21H18C17.4477 21 17 20.5523 17 20V4ZM19 5V19H21V5H19Z"
            fill="#27AE60"
          />
        </svg>
      );
      break;
    case 'handout':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5 8C16.6716 8 16 8.67157 16 9.5C16 10.3284 16.6716 11 17.5 11C18.3284 11 19 10.3284 19 9.5C19 8.67157 18.3284 8 17.5 8ZM14 9.5C14 7.567 15.567 6 17.5 6C19.433 6 21 7.567 21 9.5C21 11.433 19.433 13 17.5 13C15.567 13 14 11.433 14 9.5Z"
            fill="#F2994A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 2C8.67157 2 8 2.67157 8 3.5C8 4.32843 8.67157 5 9.5 5C10.3284 5 11 4.32843 11 3.5C11 2.67157 10.3284 2 9.5 2ZM6 3.5C6 1.567 7.567 0 9.5 0C11.433 0 13 1.567 13 3.5C13 5.433 11.433 7 9.5 7C7.567 7 6 5.433 6 3.5Z"
            fill="#F2994A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 12C0 11.4477 0.447715 11 1 11H2C2.65081 11 3.72806 11.124 4.80242 11.4598C5.70034 11.7404 6.73139 12.2106 7.4719 13H10C11.6357 13 13.088 13.7856 14.0003 15H19C20.6777 15 21.7302 15.6124 22.3389 16.3773C22.6272 16.7397 22.7883 17.1021 22.8781 17.3773C22.9232 17.5156 22.9513 17.6348 22.9687 17.7254C22.9774 17.7709 22.9835 17.8096 22.9878 17.8404C22.9899 17.8558 22.9916 17.8693 22.9929 17.8808L22.9946 17.8964L22.9953 17.903L22.9956 17.9061L22.9957 17.9075C22.9958 17.9082 22.9958 17.9089 22 18L22.9958 17.9089C23.0366 18.3544 22.7765 18.7728 22.359 18.9333L10.5943 23.4582C10.5942 23.4583 10.5944 23.4582 10.5943 23.4582C9.54446 23.8623 8.37357 23.8048 7.36879 23.3024L0.552786 19.8944C0.214002 19.725 0 19.3788 0 19V12ZM20.6183 17.46C20.3693 17.2423 19.9009 17 19 17H14.9C14.9656 17.3231 15 17.6575 15 18C15 18.5523 14.5523 19 14 19H7C6.44772 19 6 18.5523 6 18C6 17.4477 6.44772 17 7 17H12.8293C12.4174 15.8349 11.3061 15 10 15H7C6.67378 15 6.36806 14.8409 6.18092 14.5737C5.82377 14.0637 5.10703 13.6504 4.20583 13.3687C3.32994 13.095 2.45419 13 2 13V18.382L8.26321 21.5136C8.76633 21.7651 9.35162 21.7936 9.8757 21.5918L20.6183 17.46Z"
            fill="#F2994A"
          />
        </svg>
      );
      break;
    case 'send-message':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L10.7071 14.7071C10.3166 15.0976 9.68342 15.0976 9.29289 14.7071C8.90237 14.3166 8.90237 13.6834 9.29289 13.2929L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z"
            fill="#2F80ED"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.7071 2.29292C21.9829 2.56873 22.0732 2.97973 21.9384 3.34573L14.9384 22.3457C14.8005 22.7199 14.4535 22.9764 14.0553 22.9985C13.6571 23.0206 13.2839 22.8039 13.1056 22.4472L9.25465 14.7454L1.55279 10.8945C1.19611 10.7161 0.979485 10.3429 1.00154 9.94473C1.02359 9.54656 1.28011 9.19955 1.6543 9.06169L20.6543 2.06169C21.0203 1.92684 21.4313 2.01711 21.7071 2.29292ZM4.51462 10.1393L10.4472 13.1056C10.6407 13.2024 10.7977 13.3593 10.8944 13.5528L13.8607 19.4854L19.3126 4.6874L4.51462 10.1393Z"
            fill="#2F80ED"
          />
        </svg>
      );
      break;
    case 'warning-usb':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M59.9997 39.966L85.0997 83.3327H34.8997L59.9997 39.966ZM59.9997 26.666L23.333 89.9993H96.6663L59.9997 26.666ZM63.333 73.3327H56.6663V79.9993H63.333V73.3327ZM63.333 53.3327H56.6663V66.666H63.333V53.3327Z"
            fill="#F57C00"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#F57C00" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'warning-usb2':
      iconElement = (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path
            d="M56.666 69.9998H63.3327V76.6665H56.666V69.9998ZM56.666 43.3332H63.3327V63.3332H56.666V43.3332ZM59.966 26.6665C41.566 26.6665 26.666 41.5998 26.666 59.9998C26.666 78.3998 41.566 93.3332 59.966 93.3332C78.3994 93.3332 93.3327 78.3998 93.3327 59.9998C93.3327 41.5998 78.3994 26.6665 59.966 26.6665ZM59.9994 86.6665C45.266 86.6665 33.3327 74.7332 33.3327 59.9998C33.3327 45.2665 45.266 33.3332 59.9994 33.3332C74.7327 33.3332 86.666 45.2665 86.666 59.9998C86.666 74.7332 74.7327 86.6665 59.9994 86.6665Z"
            fill="#E50500"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#E50500" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'not-cks':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M56.667 69.9994H63.3337V76.666H56.667V69.9994ZM56.667 43.3327H63.3337V63.3327H56.667V43.3327ZM59.967 26.666C41.567 26.666 26.667 41.5993 26.667 59.9994C26.667 78.3994 41.567 93.3327 59.967 93.3327C78.4003 93.3327 93.3337 78.3994 93.3337 59.9994C93.3337 41.5993 78.4003 26.666 59.967 26.666ZM60.0003 86.666C45.267 86.666 33.3337 74.7327 33.3337 59.9994C33.3337 45.266 45.267 33.3327 60.0003 33.3327C74.7337 33.3327 86.667 45.266 86.667 59.9994C86.667 74.7327 74.7337 86.666 60.0003 86.666Z"
            fill="#E50500"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#E50500" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'd-check':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7071 7.29289C19.0976 7.68342 19.0976 8.31658 18.7071 8.70711L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L10 14.5858L17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289Z"
            fill="#868E96"
          />
        </svg>
      );
      break;
    case 'bin':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
            fill={fill || '#E50500'}
          />
        </svg>
      );
      break;
    case 'lock':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.87" d="M0 0H24V24H0V0Z" fill="transparent" />
          <path
            d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'hierarchy':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 9V15"
            stroke="#1574F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 15V12H21V15"
            stroke="#1574F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 23C4.10457 23 5 22.1046 5 21C5 19.8954 4.10457 19 3 19C1.89543 19 1 19.8954 1 21C1 22.1046 1.89543 23 3 23Z"
            stroke="#1574F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z"
            stroke="#1574F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M21 23C22.1046 23 23 22.1046 23 21C23 19.8954 22.1046 19 21 19C19.8954 19 19 19.8954 19 21C19 22.1046 19.8954 23 21 23Z"
            stroke="#1574F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M14 1H10V5H14V1Z"
            stroke="#1574F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'settings':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M14 19L16.95 21.95C17.2759 22.2826 17.6648 22.5468 18.0941 22.7272C18.5234 22.9076 18.9844 23.0005 19.45 23.0005C19.9156 23.0005 20.3766 22.9076 20.8059 22.7272C21.2352 22.5468 21.6241 22.2826 21.95 21.95V21.95C22.2826 21.6241 22.5468 21.2352 22.7272 20.8059C22.9076 20.3766 23.0005 19.9156 23.0005 19.45C23.0005 18.9844 22.9076 18.5234 22.7272 18.0941C22.5468 17.6648 22.2826 17.2759 21.95 16.95L20 15"
              stroke="#F2994A"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.925 10.225L6.5 6.79999"
              stroke="#F2994A"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.4001 7.49999L6.5001 6.79999L7.2001 4.69999L4.4001 1.89999L1.6001 4.69999L4.4001 7.49999Z"
              stroke="#F2994A"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.6781 4.92199L19.6001 7.98699L16.0051 4.41098L19.0851 1.34499C18.3746 1.03694 17.593 0.930716 16.8261 1.03799C15.4031 1.16021 14.0802 1.82008 13.1266 2.8833C12.173 3.94651 11.6604 5.33315 11.6931 6.76099C11.6855 7.32229 11.7899 7.87946 12.0001 8.39998L2.14506 17.083C1.80331 17.3877 1.52625 17.758 1.33032 18.1718C1.13438 18.5856 1.02357 19.0346 1.00445 19.4921C0.985327 19.9496 1.05829 20.4062 1.21901 20.835C1.37973 21.2637 1.62493 21.6558 1.94006 21.988V21.988C2.26247 22.3252 2.65296 22.5899 3.08559 22.7646C3.51822 22.9392 3.98307 23.0197 4.44923 23.0008C4.91538 22.9819 5.37218 22.864 5.78923 22.6548C6.20628 22.4457 6.57405 22.1502 6.86806 21.788L15.5941 11.978C16.5267 12.2515 17.5075 12.3198 18.4691 12.178C19.4823 11.9687 20.4192 11.4869 21.1789 10.7845C21.9385 10.0821 22.4921 9.18573 22.7801 8.19199C23.1074 7.12053 23.0715 5.97096 22.6781 4.92199V4.92199Z"
              stroke="#F2994A"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.6723 4.9334C22.9946 5.64627 23.1056 6.43052 22.9933 7.19995C22.8651 8.62761 22.1742 9.95481 21.0612 10.9114"
              stroke="#F2994A"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'database':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4V20C3 21.7 7 23 12 23C17 23 21 21.7 21 20V4" stroke="#BB6BD9" strokeWidth="2" strokeMiterlimit="10" />
          <path
            d="M12 7C16.9706 7 21 5.65685 21 4C21 2.34315 16.9706 1 12 1C7.02944 1 3 2.34315 3 4C3 5.65685 7.02944 7 12 7Z"
            stroke="#BB6BD9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M21 12C21 13.7 17 15 12 15C7 15 3 13.7 3 12"
            stroke="#BB6BD9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      );
      break;
    case 'chart':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 5C18.971 5 23 9.029 23 14C23 18.971 18.971 23 14 23C9.029 23 5 18.971 5 14"
            stroke="#24B8CC"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 1C5.029 1 1 5.029 1 10H10V1Z"
            stroke="#24B8CC"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'notes':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 4C1 3.44772 1.44772 3 2 3H4C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5H3V22H21V5H20C19.4477 5 19 4.55228 19 4C19 3.44772 19.4477 3 20 3H22C22.5523 3 23 3.44772 23 4V23C23 23.5523 22.5523 24 22 24H2C1.44772 24 1 23.5523 1 23V4Z"
            fill="#868E96"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.1706 2C9.58229 0.834621 10.6934 0 12 0C13.3066 0 14.4177 0.834621 14.8294 2H17C17.5523 2 18 2.44772 18 3V7C18 7.55228 17.5523 8 17 8H7C6.44772 8 6 7.55228 6 7V3C6 2.44772 6.44772 2 7 2H9.1706ZM12 2C11.4473 2 11 2.44728 11 3C11 3.55228 10.5523 4 10 4H8V6H16V4H14C13.4477 4 13 3.55228 13 3C13 2.44728 12.5527 2 12 2Z"
            fill="#868E96"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11Z"
            fill="#868E96"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 15C6 14.4477 6.44772 14 7 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H7C6.44772 16 6 15.5523 6 15Z"
            fill="#868E96"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 19C6 18.4477 6.44772 18 7 18H11C11.5523 18 12 18.4477 12 19C12 19.5523 11.5523 20 11 20H7C6.44772 20 6 19.5523 6 19Z"
            fill="#868E96"
          />
        </svg>
      );
      break;
    case 'logoLogin':
      iconElement = (
        <svg width="162" height="111" viewBox="0 0 162 111" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M74.443 1.44831C74.7158 0.405756 75.7876 -0.208084 76.8204 0.0647335L112.93 9.61335C113.972 9.88617 114.586 10.958 114.313 11.9908L102.845 55.3785C102.572 56.4211 101.501 57.0349 100.468 56.7621L64.3585 47.2135C63.3159 46.9407 62.7021 45.8689 62.9749 44.8361L74.443 1.44831Z"
            fill="#FF0F0F"
          />
          <path
            d="M47.26 17.1348C47.0164 16.0825 47.6692 15.0399 48.7118 14.7963L85.0745 6.30002C86.1268 6.05643 87.1693 6.70924 87.4129 7.7518L96.7374 47.6514C96.981 48.7037 96.3282 49.7462 95.2856 49.9898L58.9229 58.4861C57.8706 58.7297 56.8281 58.0769 56.5845 57.0344L47.26 17.1348Z"
            fill="#FFC700"
          />
          <path
            d="M48.7592 20.0781C47.6875 20.0781 46.8105 20.955 46.8105 22.0268V27.0155V32.0042V63.9336C46.8105 65.0054 47.6875 65.8823 48.7592 65.8823H113.076C114.148 65.8823 115.025 65.0054 115.025 63.9336V28.9642C115.025 27.8924 114.148 27.0155 113.076 27.0155H78.4866L76.3333 21.335C76.0508 20.575 75.32 20.0781 74.5113 20.0781H48.7592Z"
            fill="url(#paint0_linear_5239_28011)"
          />
          <path
            d="M74.91 45.2164C74.8516 41.7867 74.5495 39.3119 73.8967 37.597C73.2439 35.7652 71.9285 34.4109 70.087 33.6411C68.3624 32.9299 65.8583 32.5791 62.5163 32.5791C59.0574 32.5791 56.5533 33.115 54.8871 34.2355C53.1625 35.3463 52.0226 37.0026 51.4867 39.0683C51.0092 40.9585 50.7754 43.6185 50.7754 47.0384C50.7754 49.523 50.9508 51.5886 51.2528 53.1768C51.6133 54.8917 52.2077 56.246 53.1625 57.3081C54.0589 58.3701 55.3646 59.1983 57.0307 59.666C58.5799 60.1337 60.665 60.3188 63.1106 60.3188C65.7316 60.3188 67.8168 60.1434 69.366 59.7829C71.0906 59.4322 72.4644 58.5455 73.4193 57.1814C74.4326 55.8855 74.91 53.9368 74.91 51.3353V50.4681H69.1321V52.183C69.1321 54.3071 68.2942 54.6676 68.0019 54.843C67.047 55.3107 65.4978 55.4958 63.5296 55.4958H62.5163C60.5481 55.4958 59.1158 55.2035 58.3461 54.6091C57.5666 54.0148 57.0989 53.2548 56.9138 52.3097C56.7384 51.3061 56.6117 49.8835 56.6117 48.0615H74.9685V45.2262H74.91V45.2164ZM56.5533 43.3262C56.6117 41.7867 56.7871 40.5493 57.0892 39.7211C57.3912 38.8344 57.9271 38.2401 58.7553 37.8893C59.6517 37.4801 61.0158 37.295 62.8671 37.295C64.9522 37.295 66.5014 37.4703 67.3978 37.8893C68.1675 38.1816 68.645 38.7175 68.8301 39.5457C69.0639 40.3739 69.1906 41.6698 69.249 43.4431H56.5533V43.3262Z"
            fill="white"
          />
          <path
            d="M81.0984 35.1514H94.2229C94.7587 35.1514 95.1972 35.5898 95.1972 36.1257V38.1426C95.1972 38.6785 94.7587 39.117 94.2229 39.117H81.0984C80.5625 39.117 80.124 38.6785 80.124 38.1426V36.1257C80.124 35.5898 80.5625 35.1514 81.0984 35.1514Z"
            fill="white"
          />
          <path
            d="M81.0984 45.0596H104.337C104.872 45.0596 105.311 45.498 105.311 46.0339V48.0508C105.311 48.5867 104.872 49.0252 104.337 49.0252H81.0984C80.5625 49.0252 80.124 48.5867 80.124 48.0508V46.0339C80.124 45.498 80.5625 45.0596 81.0984 45.0596Z"
            fill="white"
          />
          <path
            d="M81.0984 54.9785H110.085C110.621 54.9785 111.06 55.417 111.06 55.9529V57.9698C111.06 58.5057 110.621 58.9441 110.085 58.9441H81.0984C80.5625 58.9441 80.124 58.5057 80.124 57.9698V55.9529C80.124 55.417 80.5625 54.9785 81.0984 54.9785Z"
            fill="white"
          />
          <path
            d="M17.3389 99.9664C17.296 97.495 17.082 95.7053 16.6111 94.4696C16.1401 93.1487 15.1983 92.1686 13.8711 91.6147C12.6295 91.1033 10.8314 90.8477 8.43396 90.8477C5.95087 90.8477 4.15276 91.2312 2.95403 92.0408C1.71248 92.8504 0.899052 94.0435 0.513744 95.5349C0.171248 96.8984 0 98.8159 0 101.287C0 103.077 0.128436 104.568 0.342496 105.719C0.599368 106.955 1.02749 107.935 1.71248 108.702C2.35466 109.469 3.29652 110.065 4.49526 110.406C5.60837 110.747 7.10679 110.875 8.86208 110.875C10.7458 110.875 12.2442 110.747 13.3573 110.491C14.5989 110.236 15.5836 109.597 16.2686 108.616C16.9964 107.679 17.3389 106.273 17.3389 104.398V103.759H13.1861V104.995C13.1861 106.529 12.5867 106.784 12.3727 106.912C11.6877 107.253 10.5746 107.381 9.16177 107.381H8.43396C7.02117 107.381 5.99368 107.168 5.43712 106.742C4.88057 106.315 4.53807 105.762 4.40964 105.08C4.2812 104.355 4.19558 103.333 4.19558 102.012H17.3817V99.9664H17.3389ZM4.15276 98.6029C4.19558 97.495 4.32401 96.6002 4.53807 96.0036C4.75213 95.3644 5.13744 94.9383 5.73681 94.6827C6.37899 94.3844 7.36366 94.2565 8.69084 94.2565C10.1893 94.2565 11.3024 94.3844 11.9445 94.6827C12.5011 94.8957 12.8436 95.2792 12.972 95.8758C13.1433 96.4723 13.2289 97.4098 13.2717 98.6881H4.15276V98.6029Z"
            fill="#1F2A49"
          />
          <path
            d="M40.6716 102.31C40.6288 101.799 40.6288 101.416 40.6288 101.16V100.521H36.4332V101.16C36.4332 101.458 36.4332 101.97 36.476 102.651C36.5188 103.333 36.5188 103.802 36.5188 104.1C36.476 105.251 36.0051 105.975 35.0632 106.401C33.9929 106.87 32.5801 107.083 30.9104 107.083C30.6108 107.083 30.1826 107.083 29.6261 107.04C29.0695 106.998 28.6842 106.998 28.4702 106.998C25.9014 106.998 24.3174 106.529 23.8036 105.677C23.1615 104.526 22.8618 102.225 22.8618 98.7738V92.723C22.8618 91.402 22.9474 90.3368 23.1615 89.5698C23.3327 88.888 23.6752 88.3766 24.189 87.9931C24.7455 87.6096 25.5589 87.354 26.6721 87.2688C28.6842 87.1409 30.5251 87.0557 32.152 87.0557C33.3935 87.0557 34.3354 87.2261 34.892 87.567C35.4057 87.8653 35.7482 88.2914 35.8766 88.888C36.0479 89.6124 36.1335 90.6776 36.1335 92.1264V92.7656H40.3719L40.3291 92.0838C40.2006 90.2089 39.9866 88.6749 39.7297 87.567C39.43 86.4165 38.9163 85.4791 38.1885 84.8399C37.5035 84.2008 36.5188 83.7746 35.3629 83.519C34.2926 83.3485 32.7942 83.2207 30.9104 83.2207C28.5558 83.2207 26.8433 83.3059 25.7302 83.4338C23.8893 83.6468 22.3909 84.1581 21.3206 84.9678C20.2503 85.7774 19.4796 86.8853 19.0515 88.2488C18.6662 89.5271 18.4521 91.0611 18.4521 92.8934V97.0693C18.495 98.305 18.5378 99.7538 18.5806 101.458C18.6662 103.205 18.8803 104.739 19.3084 106.018C19.7365 107.339 20.5499 108.446 21.663 109.341C22.7762 110.194 24.3602 110.705 26.3296 110.833H30.0542C31.467 110.833 32.8798 110.79 34.2926 110.705C38.4882 110.321 40.7144 107.85 40.7144 103.631C40.7572 103.291 40.7144 102.864 40.6716 102.31Z"
            fill="#1F2A49"
          />
          <path
            d="M58.9942 94.5561C58.4805 93.1499 57.5386 92.1272 56.2114 91.5733C54.9271 91.0193 53.0862 90.7637 50.6459 90.7637C48.334 90.7637 46.6216 91.1046 45.38 91.7437C44.1385 92.4255 43.2394 93.4908 42.8113 94.9396C42.426 96.2605 42.2119 98.0928 42.2119 100.351V102.098C42.2119 104.484 42.4688 106.274 43.0253 107.51C43.6247 108.831 44.6094 109.768 45.9794 110.28C47.2637 110.748 49.0618 110.961 51.4165 110.961C53.9424 110.961 55.7833 110.535 57.0249 109.64C58.2664 108.746 59.037 107.51 59.2939 106.018C59.5508 104.655 59.6792 102.695 59.6792 100.181C59.6792 97.7093 59.4652 95.877 58.9942 94.5561ZM55.4836 99.9677C55.4836 101.757 55.4836 103.164 55.4408 104.101C55.398 105.081 55.184 105.848 54.8843 106.317C54.5846 106.743 54.1565 107.041 53.6427 107.169C53.0005 107.339 52.1443 107.425 51.0312 107.425H49.6612C48.0772 107.425 47.435 107.126 47.1781 106.871C46.75 106.402 46.2362 105.166 46.2362 101.885V99.7546C46.2362 98.0076 46.3647 96.7292 46.5787 95.9622C46.75 95.3231 47.1353 94.8969 47.6919 94.6839C48.334 94.4282 49.4471 94.2578 51.0312 94.2578H51.6306C53.3002 94.2578 54.0708 94.5134 54.4133 94.7691C54.8843 95.0674 55.184 95.5361 55.3124 96.1753C55.398 96.9849 55.4836 98.2632 55.4836 99.9677Z"
            fill="#1F2A49"
          />
          <path
            d="M77.2334 93.7457C76.7196 92.6378 75.9062 91.8282 74.8359 91.3595C73.7656 90.8908 72.3956 90.6777 70.6403 90.6777C69.1419 90.6777 67.8147 90.8908 66.7016 91.3169C66.0594 91.5726 65.5029 91.9135 64.9891 92.3822V91.1038H61.2217V110.662H65.246V98.8165C65.246 95.6632 66.7872 94.2145 70.041 94.2145C71.2397 94.2145 72.0959 94.3423 72.6525 94.5553C73.1234 94.7684 73.4231 95.0667 73.5943 95.5354C73.8084 96.0893 73.894 96.9842 73.894 98.1347V110.662H77.9612V97.9216C77.9612 96.1746 77.7043 94.7684 77.2334 93.7457Z"
            fill="#1F2A49"
          />
          <path
            d="M89.6924 102.95V104.739C89.6924 106.018 89.4783 106.614 89.3071 106.87C89.1358 107.168 88.5364 107.339 87.6802 107.339C86.5243 107.339 86.1818 107.083 86.0962 106.955C85.9677 106.785 85.7537 106.359 85.7537 105.123V94.5979H92.8176V91.1038H85.7537V86.7148H81.6865V91.1038H79.2891V94.5979H81.6865V105.123C81.6865 106.529 81.8578 107.637 82.2431 108.447C82.6284 109.341 83.3134 109.981 84.2553 110.364C85.1115 110.705 86.2246 110.875 87.6802 110.875C90.0349 110.875 91.6617 110.236 92.4323 108.915C93.1601 107.68 93.5454 105.975 93.5454 103.589V102.95H89.6924Z"
            fill="#1F2A49"
          />
          <path
            d="M103.305 90.6777C101.549 90.6777 100.094 91.1465 98.9807 92.0839V91.1038H95.042V110.662H99.0663V97.8364C99.0663 95.365 100.222 94.2145 102.705 94.2145C103.776 94.2145 104.461 94.4701 104.76 94.9388C105.103 95.5354 105.317 96.4728 105.317 97.7512V98.3903H109.256V97.7512C109.256 91.9135 106.002 90.6777 103.305 90.6777Z"
            fill="#1F2A49"
          />
          <path
            d="M126.724 93.6608C126.039 92.5955 125.054 91.8711 123.77 91.5302C122.614 91.232 121.03 91.0615 119.103 91.0615C116.449 91.0615 114.565 91.4024 113.281 92.0842C111.911 92.8512 111.183 94.513 111.183 97.0271V97.6662H115.293V97.0271C115.293 96.8566 115.25 96.7288 115.208 96.5584C115.165 96.4305 115.165 96.3879 115.165 96.3879C115.165 95.6635 115.336 95.1522 115.721 94.8965C116.064 94.6409 116.877 94.3 118.847 94.3C120.345 94.3 121.458 94.3852 122.1 94.5982C122.614 94.7687 122.956 95.067 123.171 95.6209C123.427 96.2601 123.513 97.2827 123.513 98.7315V99.3281C123.085 99.0298 122.571 98.8167 122.015 98.6889C121.03 98.4759 119.788 98.348 118.29 98.348C116.663 98.348 115.336 98.4759 114.266 98.7741C113.11 99.0724 112.168 99.7116 111.526 100.606C110.884 101.501 110.541 102.822 110.541 104.484C110.541 106.231 110.841 107.552 111.483 108.489C112.125 109.47 113.024 110.109 114.223 110.45C115.293 110.748 116.706 110.918 118.418 110.918C119.96 110.918 121.244 110.748 122.271 110.45C122.828 110.279 123.342 110.023 123.813 109.683L123.727 110.577H127.666V98.135C127.709 96.1322 127.366 94.6835 126.724 93.6608ZM123.77 104.654C123.77 105.549 123.556 106.146 123.085 106.529C122.571 106.955 121.972 107.211 121.244 107.296C120.473 107.424 119.446 107.467 118.29 107.467C116.535 107.467 115.764 107.126 115.422 106.828C114.951 106.444 114.737 105.549 114.737 104.228C114.737 102.95 115.036 102.567 115.122 102.481L115.165 102.439C115.422 102.183 116.235 101.8 118.632 101.8H119.317C120.901 101.8 122.1 101.97 122.871 102.353C123.47 102.652 123.77 103.419 123.77 104.654Z"
            fill="#1F2A49"
          />
          <path
            d="M142.393 102.693V103.332C142.393 104.653 142.265 105.59 142.008 106.144C141.794 106.613 141.451 106.911 140.895 107.082C140.253 107.252 139.225 107.338 137.812 107.338C136.4 107.338 135.372 107.167 134.773 106.784C134.216 106.443 133.874 105.974 133.702 105.292C133.531 104.525 133.446 103.332 133.446 101.798V99.9658C133.446 98.2188 133.574 96.9404 133.788 96.1308C134.002 95.4916 134.345 95.0229 134.944 94.8099C135.629 94.5116 136.742 94.3838 138.326 94.3838C139.354 94.3838 140.167 94.469 140.724 94.682C141.195 94.8525 141.494 95.1081 141.708 95.5343C141.965 96.003 142.051 96.7274 142.051 97.75V98.3892H145.989V97.1535C145.989 94.682 145.219 93.0202 143.763 92.1254C142.393 91.3158 140.467 90.8896 137.984 90.8896C135.715 90.8896 134.002 91.1879 132.718 91.8697C131.391 92.5515 130.492 93.5741 129.978 94.9803C129.507 96.3013 129.25 98.0909 129.25 100.307C129.25 102.352 129.336 103.971 129.464 105.079C129.592 106.272 129.978 107.338 130.534 108.19C131.134 109.085 132.033 109.766 133.274 110.192C134.43 110.619 135.971 110.789 137.984 110.789C140.039 110.789 141.58 110.619 142.736 110.235C143.977 109.809 144.919 109.042 145.519 107.934C146.075 106.869 146.375 105.377 146.375 103.375V102.736H142.393V102.693Z"
            fill="#1F2A49"
          />
          <path
            d="M158.147 102.95V104.739C158.147 106.018 157.933 106.614 157.762 106.87C157.591 107.168 156.992 107.339 156.135 107.339C154.979 107.339 154.637 107.083 154.551 106.955C154.423 106.785 154.209 106.359 154.209 105.123V94.5979H161.273V91.1038H154.209V86.7148H150.142V91.1038H147.744V94.5979H150.142V105.123C150.142 106.529 150.313 107.637 150.698 108.447C151.083 109.341 151.768 109.981 152.71 110.364C153.567 110.705 154.68 110.875 156.135 110.875C158.49 110.875 160.117 110.236 160.887 108.915C161.615 107.68 162.001 105.975 162.001 103.589V102.95H158.147Z"
            fill="#1F2A49"
          />
          <defs>
            <linearGradient
              id="paint0_linear_5239_28011"
              x1="46.8105"
              y1="42.9822"
              x2="115.022"
              y2="42.9822"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#05809B" />
              <stop offset="1" stopColor="#06CCF7" />
            </linearGradient>
          </defs>
        </svg>
      );
      break;
    case 'logo':
      iconElement = (
        <svg width="199" height="32" viewBox="0 0 199 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M95.9663 9.81768C94.3529 9.06554 92.4394 9.75923 91.6834 11.3687C91.1144 12.5067 90.0505 13.3212 88.8034 13.5745C87.3732 13.8629 85.8845 12.9743 85.183 12.4716C83.7489 11.1583 81.5236 11.2596 80.2103 12.6937C78.9009 14.1279 78.9983 16.3531 80.4325 17.6665C81.8666 18.9798 84.0918 18.8785 85.4052 17.4443C85.6468 17.1793 85.8455 16.8831 85.9975 16.5558C86.0131 16.5246 86.0287 16.4895 86.0404 16.4545C86.2391 16.1427 86.4847 15.866 86.773 15.6361C87.381 15.2113 88.0786 14.9385 88.8112 14.8333C90.865 14.4046 93.0396 15.5386 93.0396 15.5386C93.1019 15.5737 93.1682 15.6088 93.2383 15.64C94.8478 16.3921 96.7613 15.6984 97.5174 14.0889C98.2734 12.4794 97.5758 10.5659 95.9663 9.80989V9.81768Z"
            fill="#08B7DD"
          />
          <path
            d="M92.7049 18.2509L92.7243 18.2704H92.7049C91.4227 18.2704 90.3042 19.1044 89.9262 20.3086C89.934 20.2813 89.9379 20.254 89.9496 20.2268C89.178 21.3179 88.1764 22.226 87.0112 22.8846C86.7696 22.9703 86.5396 23.0872 86.3292 23.2353C81.7891 25.3164 76.4228 23.3211 74.3417 18.7848C72.2606 14.2447 74.256 8.87838 78.7922 6.79733C81.6644 5.48011 85.012 5.7607 87.6308 7.52998L87.6425 7.5144C87.7244 7.56506 87.8023 7.61962 87.888 7.66249C89.3611 8.38735 91.146 7.7833 91.8709 6.30629C92.4554 5.12157 92.1865 3.69523 91.2162 2.80279L91.2279 2.78721C91.185 2.75603 91.1382 2.72875 91.0954 2.69757C90.9395 2.56897 90.7758 2.45595 90.5965 2.36242C83.7064 -2.07248 74.521 -0.0810636 70.0861 6.80902C65.6511 13.6991 67.6426 22.8846 74.5327 27.3195C81.3526 31.7076 90.4289 29.8097 94.9184 23.06C94.9379 23.0366 94.9574 23.0171 94.9769 22.9976C95.0938 22.8183 95.2068 22.643 95.3159 22.4598C95.5108 22.0623 95.6121 21.6297 95.6121 21.1893C95.6121 21.1815 95.6121 21.1777 95.6121 21.1699C95.6121 19.5642 94.3066 18.2626 92.701 18.2626L92.7049 18.2509Z"
            fill="#08B7DD"
          />
          <path
            d="M108.617 9.75927C108.535 9.75927 108.457 9.75927 108.375 9.75927C105.472 9.84111 103.18 12.2612 103.262 15.1646C103.262 18.4771 105.639 20.5932 108.784 20.5932C110.39 20.5932 112.019 20.1022 113.048 19.163L111.847 17.4093C111.072 18.0562 110.097 18.4186 109.084 18.4342C107.327 18.4342 106.278 17.343 106.107 16.0414H113.796V15.4412C113.796 12.0625 111.695 9.75537 108.613 9.75537L108.617 9.75927ZM106.068 14.2059C106.173 12.8847 107.291 11.8793 108.617 11.9183C108.617 11.9183 108.652 11.9183 108.671 11.9183C109.992 11.8598 111.111 12.8886 111.165 14.2098H106.068V14.2059Z"
            fill="#08B7DD"
          />
          <path
            d="M122.646 8.54345C124.061 8.56683 125.351 9.36184 126.009 10.6167L128.62 9.33456C127.455 7.1288 125.136 5.7765 122.646 5.85055C118.363 5.85055 115.043 8.84353 115.043 13.2239C115.043 17.6042 118.363 20.5972 122.646 20.5972C125.795 20.5972 127.596 18.8669 128.62 17.0937L126.009 15.831C125.359 17.0898 124.065 17.8887 122.646 17.9043C120.055 17.9043 118.168 15.9168 118.168 13.2239C118.168 10.531 120.055 8.54345 122.646 8.54345Z"
            fill="#08B7DD"
          />
          <path
            d="M135.07 9.75928C131.664 9.75928 129.61 12.2378 129.61 15.1685C129.61 18.0991 131.668 20.5971 135.07 20.5971C138.472 20.5971 140.553 18.1186 140.553 15.1685C140.553 12.2184 138.496 9.75928 135.07 9.75928ZM135.07 18.1809C133.379 18.1809 132.436 16.7936 132.436 15.1685C132.436 13.5434 133.379 12.1755 135.07 12.1755C136.762 12.1755 137.728 13.5668 137.728 15.1685C137.728 16.7702 136.765 18.1809 135.07 18.1809Z"
            fill="#08B7DD"
          />
          <path
            d="M148.796 9.76317C147.412 9.74369 146.091 10.3283 145.175 11.3649V10.0165H142.455V20.3399H145.175V13.3953C145.725 12.6392 146.598 12.1872 147.529 12.1755C148.687 12.1755 149.435 12.6665 149.435 14.1007V20.3399H152.155V13.0523C152.155 11.0414 151.064 9.75928 148.792 9.75928L148.796 9.76317Z"
            fill="#08B7DD"
          />
          <path
            d="M158.971 18.1808C158.371 18.1808 158.028 17.6897 158.028 17.0467V12.3858H160.128V10.0124H158.028V7.19092H155.288V10.0124H153.573V12.3858H155.288V17.7716C155.288 19.611 156.317 20.5931 158.222 20.5931C159.357 20.5931 160.085 20.293 160.495 19.9306L159.918 17.8807C159.649 18.0833 159.314 18.1924 158.975 18.1808H158.971Z"
            fill="#08B7DD"
          />
          <path
            d="M164.602 11.4272V10.0165H161.882V20.3399H164.602V13.5239C165.054 12.8614 166.25 12.347 167.151 12.347C167.4 12.3431 167.653 12.3625 167.899 12.4093V9.75928C166.609 9.80994 165.405 10.4179 164.602 11.4272Z"
            fill="#08B7DD"
          />
          <path
            d="M173.905 9.75927C172.249 9.73199 170.643 10.3088 169.384 11.3844L170.409 13.2004C171.22 12.421 172.303 11.9845 173.43 11.9806C174.801 11.9806 175.702 12.6665 175.702 13.7109V15.1022C175.016 14.2916 173.796 13.8395 172.424 13.8395C170.776 13.8395 168.827 14.7593 168.827 17.1755C168.827 19.5917 170.776 20.5932 172.424 20.5932C173.656 20.6439 174.852 20.1606 175.702 19.2682V20.336H178.422V13.6681C178.422 10.6985 176.259 9.75537 173.905 9.75537V9.75927ZM175.702 17.8575C175.148 18.4732 174.345 18.8045 173.515 18.7577C172.444 18.7577 171.567 18.2004 171.567 17.2417C171.567 16.283 172.444 15.6829 173.515 15.6829C174.342 15.6322 175.144 15.9635 175.702 16.5792V17.8614V17.8575Z"
            fill="#08B7DD"
          />
          <path
            d="M185.962 12.1755C186.835 12.1404 187.662 12.5613 188.149 13.2862L189.926 11.6182C189.24 10.679 187.954 9.75928 185.834 9.75928C182.642 9.75928 180.351 12.004 180.351 15.1685C180.351 18.3329 182.642 20.5971 185.834 20.5971C187.954 20.5971 189.24 19.6774 189.926 18.7148L188.149 17.0702C187.65 17.7795 186.831 18.1965 185.962 18.1809C184.314 18.1809 183.157 16.965 183.157 15.1685C183.157 13.3719 184.314 12.1755 185.962 12.1755Z"
            fill="#08B7DD"
          />
          <path
            d="M196.754 17.8807C196.481 18.0833 196.15 18.1885 195.811 18.1808C195.21 18.1808 194.867 17.6897 194.867 17.0467V12.3858H196.968V10.0124H194.867V7.19092H192.124V10.0124H190.409V12.3858H192.124V17.7716C192.124 19.611 193.153 20.5931 195.058 20.5931C196.192 20.5931 196.921 20.293 197.33 19.9306L196.754 17.8807Z"
            fill="#08B7DD"
          />
          <path
            d="M52.0342 10.7882C52.077 10.7375 52.0965 10.6752 52.0926 10.6089C52.0926 10.5622 52.0848 10.5193 52.0614 10.4764C52.0381 10.4375 52.003 10.4063 51.964 10.3868C51.9289 10.3673 51.89 10.3517 51.8471 10.3478C51.7925 10.34 51.7419 10.3361 51.6873 10.34H51.3327V11.3182H51.5665V10.9597H51.66L51.9484 11.3182H52.2407L51.8861 10.8973C51.9445 10.8739 51.9913 10.835 52.0342 10.7882ZM51.8237 10.6986C51.8237 10.6986 51.8003 10.7336 51.7808 10.7453C51.7614 10.7609 51.738 10.7726 51.7146 10.7726C51.6834 10.7804 51.6522 10.7843 51.6172 10.7843H51.5626V10.5076H51.6328C51.66 10.5076 51.6873 10.5076 51.7146 10.5115C51.7341 10.5115 51.7575 10.5193 51.7731 10.531C51.7925 10.5388 51.8081 10.5544 51.8198 10.5739C51.8276 10.5933 51.8315 10.6128 51.8315 10.6323C51.8315 10.6557 51.8276 10.6791 51.8198 10.7025L51.8237 10.6986ZM52.4005 10.1569C52.0186 9.77494 51.3989 9.77884 51.0209 10.1608C50.6429 10.5427 50.6429 11.1623 51.0248 11.5403C51.4067 11.9184 52.0264 11.9184 52.4044 11.5364C52.5875 11.3533 52.6889 11.1078 52.6889 10.8505C52.6928 10.5894 52.5875 10.34 52.4005 10.1569ZM52.2485 11.3922C52.1082 11.5403 51.9095 11.6222 51.7068 11.6222C51.5042 11.6222 51.3054 11.5403 51.1651 11.3922C50.865 11.0922 50.865 10.6089 51.1651 10.3088C51.3054 10.1608 51.5042 10.0789 51.7068 10.0789C51.9095 10.0789 52.1082 10.1569 52.2485 10.305C52.5486 10.605 52.5486 11.0922 52.2485 11.3922ZM43.2968 17.2496L41.0015 10.7375H36.89L40.8806 20.5777H45.5766L49.5985 10.7375H45.5611L43.2968 17.2496ZM9.44269 12.4717C9.44269 12.4717 9.4232 12.4639 9.41541 12.4601C9.63754 12.3743 9.85188 12.2691 10.0545 12.1444C11.6329 11.0844 12.0537 8.94876 10.9937 7.37043C10.3624 6.42733 9.30629 5.85835 8.16833 5.84666H0V20.5777H6.87839C7.01089 20.5777 7.1356 20.5777 7.2642 20.5738H9.12702C11.3679 20.492 12.8371 18.6564 12.8371 16.4C12.8371 14.4359 11.2626 12.9238 9.43879 12.4756L9.44269 12.4717ZM4.01402 8.55905H5.98985C6.21588 8.56295 6.44192 8.59802 6.65626 8.66037C7.09273 8.83964 7.42788 9.20986 7.56038 9.66582C7.58766 9.77884 7.60325 9.89186 7.60325 10.0088C7.60325 10.266 7.56039 10.5193 7.47465 10.7609C7.37332 10.9753 7.22134 11.1662 7.03428 11.3143C6.96413 11.3611 6.89398 11.4 6.81993 11.4351C6.57442 11.5559 6.30552 11.6261 6.03272 11.6456C5.77551 11.6572 5.6547 11.665 5.01947 11.665H4.01402V8.56294V8.55905ZM7.79421 17.4756C7.42009 17.7172 6.97972 17.8497 6.53155 17.8497H4.01792V14.1943H6.14574C6.29772 14.1943 6.42633 14.1943 6.50037 14.1943C6.81604 14.1943 7.12781 14.241 7.42788 14.3385C7.48634 14.3579 7.5448 14.3813 7.60325 14.4047C8.4801 14.849 8.83084 15.9207 8.39047 16.7975C8.25407 17.0703 8.04752 17.3003 7.79421 17.4717V17.4756ZM21.3133 10.7609L17.8448 15.1841V5.83887H13.9477V20.5777H17.8448L19.5206 18.4538L21.0794 20.5777H25.5221L21.777 15.5544L25.5338 10.7609H21.3133ZM35.6079 11.1467C34.8128 10.5661 32.8799 10.2816 31.1418 10.2816C30.4364 10.2894 29.7349 10.3517 29.0373 10.4647C28.1956 10.5933 27.3694 10.8116 26.5744 11.1117L27.6928 13.3642C28.4255 12.9199 29.2478 12.6432 30.0973 12.5458C30.6118 12.4639 31.1379 12.4562 31.6523 12.5224C31.9719 12.5536 32.2797 12.6666 32.5447 12.8498C32.876 13.0992 33.0552 13.5045 33.0202 13.9176V13.9916C31.5471 13.976 30.0779 14.1436 28.6476 14.4865C27.3265 14.8724 25.9469 16.0454 25.9469 17.5964C26.0015 19.3657 27.4551 20.7687 29.2244 20.757C29.2712 20.757 29.7037 20.7648 29.7037 20.7648C30.8729 20.7024 32.0108 20.3439 33.0007 19.7204L33.6515 20.5933H36.7965V13.7383C36.7965 12.5536 36.399 11.7274 35.604 11.1467H35.6079ZM33.0046 17.8926C32.5175 18.3914 31.8627 18.6993 31.1652 18.75C31.1067 18.75 31.0482 18.75 30.9898 18.7383C30.9625 18.7383 30.9352 18.7305 30.9118 18.7305C30.8963 18.7305 30.8768 18.7227 30.8612 18.7227C30.148 18.5824 29.6804 17.8926 29.8207 17.1794C29.922 16.6572 30.3312 16.248 30.8534 16.1428C30.8651 16.1389 30.8729 16.1389 30.8885 16.1311C31.4224 16.0142 33.0007 15.8661 33.0007 15.8661V17.8965L33.0046 17.8926Z"
            fill="#ED5A26"
          />
          <path
            d="M58.4033 6.00635H57.9033V20.4412H58.4033V6.00635Z"
            fill="white"
            stroke="black"
            strokeWidth="0.35"
            strokeMiterlimit="10"
          />
          <path
            d="M148.593 26.8711V28.3637H150.038V26.8711H150.915V30.7526H150.038V29.1275H148.593V30.7526H147.712V26.8711H148.593Z"
            fill="#5E5E5E"
          />
          <path
            d="M155.374 26.3647C155.448 26.5128 155.514 26.7116 155.514 26.9532C155.514 27.3039 155.323 27.5767 154.91 27.5845C155.093 27.8768 155.233 28.2704 155.233 28.7693C155.233 30.0397 154.462 30.8113 153.328 30.8113C152.194 30.8113 151.504 29.9423 151.504 28.8355C151.504 27.6742 152.248 26.8051 153.39 26.8051C153.682 26.8051 153.92 26.8636 154.099 26.922C154.29 26.9922 154.512 27.1247 154.668 27.1247C154.813 27.1247 154.883 27.0506 154.883 26.8948C154.883 26.7389 154.824 26.5947 154.754 26.4739L155.374 26.3647ZM154.302 28.8004C154.302 28.1029 153.967 27.5066 153.363 27.5066C152.759 27.5066 152.424 28.099 152.424 28.8199C152.42 29.5526 152.774 30.1216 153.367 30.1216C153.959 30.1216 154.298 29.5565 154.298 28.8043L154.302 28.8004ZM152.965 31.6103C152.965 31.3842 153.145 31.2127 153.375 31.2127C153.589 31.2127 153.753 31.3842 153.753 31.6103C153.753 31.8168 153.585 32 153.375 32C153.145 32 152.965 31.8168 152.965 31.6103Z"
            fill="#5E5E5E"
          />
          <path
            d="M155.803 26.9222C156.072 26.8754 156.454 26.8403 156.987 26.8403C157.521 26.8403 157.915 26.9456 158.172 27.1521C158.418 27.347 158.585 27.6704 158.585 28.0484C158.585 28.4265 158.457 28.7499 158.227 28.9682C157.927 29.2487 157.482 29.3773 156.968 29.3773C156.851 29.3773 156.75 29.3735 156.668 29.3618V30.7491H155.799V26.9222H155.803ZM156.672 28.6837C156.746 28.6993 156.839 28.707 156.964 28.707C157.432 28.707 157.72 28.4693 157.72 28.0757C157.72 27.7172 157.475 27.5067 157.034 27.5067C156.855 27.5067 156.734 27.5223 156.672 27.5418V28.6876V28.6837Z"
            fill="#5E5E5E"
          />
          <path
            d="M159.949 28.4303H160.358V26.9104C160.682 26.8598 161.103 26.8247 161.543 26.8247C162.276 26.8247 162.759 26.9494 163.133 27.2339C163.535 27.534 163.784 28.0289 163.784 28.7148C163.784 29.4669 163.519 29.9853 163.145 30.3048C162.736 30.6439 162.116 30.8114 161.356 30.8114C160.9 30.8114 160.581 30.7842 160.358 30.753V29.1201H159.949V28.4342V28.4303ZM162.003 29.1162H161.231V30.1061C161.313 30.1178 161.434 30.1178 161.535 30.1178C162.342 30.1178 162.853 29.693 162.853 28.7421C162.853 27.9003 162.385 27.5028 161.625 27.5028C161.434 27.5028 161.309 27.5184 161.227 27.5379V28.4303H161.999V29.1162H162.003Z"
            fill="#5E5E5E"
          />
          <path
            d="M167.911 28.7693C167.911 30.0398 167.14 30.8114 166.005 30.8114C164.871 30.8114 164.182 29.9424 164.182 28.8356C164.182 27.6742 164.926 26.8052 166.068 26.8052C167.21 26.8052 167.911 27.6976 167.911 28.7693ZM165.109 28.82C165.109 29.5799 165.468 30.1138 166.052 30.1138C166.637 30.1138 166.984 29.5488 166.984 28.7966C166.984 28.099 166.649 27.5028 166.044 27.5028C165.44 27.5028 165.105 28.0679 165.105 28.82H165.109ZM166.376 25.9517L166.894 26.661H166.329L166.076 26.2986H166.064L165.807 26.661H165.249L165.768 25.9517H166.38H166.376ZM167.007 25.562L167.381 26.2128H166.925L166.251 25.562H167.007Z"
            fill="#5E5E5E"
          />
          <path
            d="M168.487 30.7487V26.8672H169.512L170.319 28.2896C170.549 28.6988 170.779 29.1821 170.95 29.6185H170.966C170.907 29.108 170.892 28.5819 170.892 28.0012V26.8672H171.699V30.7487H170.779L169.949 29.2522C169.719 28.8391 169.465 28.3364 169.275 27.8843H169.259C169.282 28.4026 169.294 28.9482 169.294 29.5835V30.7526H168.487V30.7487Z"
            fill="#5E5E5E"
          />
          <path
            d="M175.697 30.5737C175.428 30.6673 174.914 30.792 174.403 30.792C173.694 30.792 173.184 30.6127 172.825 30.2698C172.467 29.9346 172.272 29.428 172.28 28.859C172.283 27.5691 173.223 26.8325 174.497 26.8325C175 26.8325 175.386 26.9299 175.573 27.0235L175.389 27.725C175.175 27.6314 174.91 27.5574 174.485 27.5574C173.753 27.5574 173.203 27.9705 173.203 28.8123C173.203 29.654 173.706 30.0827 174.423 30.0827C174.626 30.0827 174.785 30.0593 174.856 30.0243V29.2137H174.255V28.5278H175.701V30.5698L175.697 30.5737Z"
            fill="#5E5E5E"
          />
          <path
            d="M177.183 28.4303H177.592V26.9104C177.915 26.8598 178.336 26.8247 178.777 26.8247C179.509 26.8247 179.992 26.9494 180.367 27.2339C180.768 27.534 181.017 28.0289 181.017 28.7148C181.017 29.4669 180.752 29.9853 180.378 30.3048C179.969 30.6439 179.349 30.8114 178.589 30.8114C178.134 30.8114 177.814 30.7842 177.592 30.753V29.1201H177.183V28.4342V28.4303ZM179.236 29.1162H178.465V30.1061C178.547 30.1178 178.667 30.1178 178.769 30.1178C179.575 30.1178 180.086 29.693 180.086 28.7421C180.086 27.9003 179.618 27.5028 178.858 27.5028C178.667 27.5028 178.543 27.5184 178.461 27.5379V28.4303H179.232V29.1162H179.236Z"
            fill="#5E5E5E"
          />
          <path d="M182.474 26.8711V30.7526H181.594V26.8711H182.474Z" fill="#5E5E5E" />
          <path
            d="M185.545 29.1083H184.119V30.028H185.713V30.749H183.238V26.8675H185.631V27.5885H184.119V28.3952H185.545V29.1083ZM184.785 25.9556L185.374 26.6648H184.758L184.466 26.3063H184.454L184.166 26.6648H183.554L184.131 25.9556H184.785ZM184.119 31.6064C184.119 31.3803 184.291 31.2089 184.52 31.2089C184.75 31.2089 184.906 31.3803 184.906 31.6064C184.906 31.8129 184.739 31.9961 184.52 31.9961C184.291 31.9961 184.119 31.8129 184.119 31.6064Z"
            fill="#5E5E5E"
          />
          <path
            d="M186.31 30.7487V26.8672H187.335L188.141 28.2896C188.371 28.6988 188.601 29.1821 188.773 29.6185H188.788C188.73 29.108 188.714 28.5819 188.714 28.0012V26.8672H189.521V30.7487H188.601L187.771 29.2522C187.541 28.8391 187.288 28.3364 187.097 27.8843H187.081C187.105 28.4026 187.116 28.9482 187.116 29.5835V30.7526H186.31V30.7487Z"
            fill="#5E5E5E"
          />
          <path d="M191.964 27.6076H190.924V26.8711H193.905V27.6076H192.845V30.7487H191.964V27.6076Z" fill="#5E5E5E" />
          <path
            d="M198.121 26.162C198.195 26.3101 198.25 26.5011 198.25 26.6959C198.25 27.0467 198.055 27.2844 197.634 27.3234L197.537 27.3351V29.0459C197.537 30.2423 196.932 30.8113 195.919 30.8113C194.906 30.8113 194.364 30.2696 194.364 29.0342V26.8713H195.245V29.1043C195.245 29.7708 195.498 30.1098 195.946 30.1098C196.395 30.1098 196.66 29.7863 196.66 29.1043V26.8713H197.326C197.564 26.8713 197.626 26.7973 197.626 26.6453C197.626 26.5245 197.587 26.392 197.505 26.2595L198.121 26.162ZM195.88 26.5985C195.966 26.3374 196.161 26.2945 196.161 26.1036C196.161 25.9984 196.087 25.9321 195.993 25.9321C195.884 25.9321 195.787 26.049 195.732 26.127L195.455 25.9594C195.588 25.6944 195.806 25.5034 196.157 25.5034C196.469 25.5034 196.714 25.7295 196.714 25.9945C196.714 26.3335 196.434 26.3959 196.278 26.6842L195.876 26.5985H195.88Z"
            fill="#5E5E5E"
          />
        </svg>
      );
      break;
    case 'add':
      iconElement = (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M8 1.83398V15.1673"
              stroke={fill || 'white'}
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6663 8.5H1.33301"
              stroke={fill || 'white'}
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'search':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill={fill || '#222D4B'}
          />
        </svg>
      );
      break;
    case 'arrowDown':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5 4.5L8 12L0.5 4.5"
            stroke="#868E96"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'arrow-menu':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.3335 4.6665H4.66682C4.42482 4.6665 4.20148 4.79784 4.08348 5.00984C3.96615 5.22184 3.97282 5.48117 4.10148 5.6865L7.43482 11.0198C7.55682 11.2145 7.77015 11.3332 8.00015 11.3332C8.23015 11.3332 8.44348 11.2145 8.56548 11.0198L11.8988 5.6865C12.0275 5.48117 12.0341 5.22184 11.9168 5.00984C11.7988 4.79784 11.5755 4.6665 11.3335 4.6665Z"
            fill="rgba(0, 0, 0, 0.5)"
          />
        </svg>
      );
      break;
    case 'trashCan':
      iconElement = (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.1" cx="24" cy="24" r="24" fill="#BC2618" />
          <path
            d="M32.25 16.5V33.5455C32.25 34.4868 31.5784 35.25 30.75 35.25H17.25C16.4216 35.25 15.75 34.4868 15.75 33.5455V16.5"
            stroke="#B20D0D"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 22.125V30.375"
            stroke="#B20D0D"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.25 22.125V30.375"
            stroke="#B20D0D"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.75 22.125V30.375"
            stroke="#B20D0D"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.25 16.5V12.75H27.75V16.5"
            stroke="#B20D0D"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.5 16.5H13.5"
            stroke="#B20D0D"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" transform="translate(12 12)" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'threeDots':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke="#868E96"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M3 14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10C1.89543 10 1 10.8954 1 12C1 13.1046 1.89543 14 3 14Z"
            stroke="#868E96"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M21 14C22.1046 14 23 13.1046 23 12C23 10.8954 22.1046 10 21 10C19.8954 10 19 10.8954 19 12C19 13.1046 19.8954 14 21 14Z"
            stroke="#868E96"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      );
      break;
    case 'dot':
      iconElement = (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" fill={fill || 'rgba(0, 0, 0, 0.5)'} />
        </svg>
      );
      break;
    case 'stationery':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1001 4.40002H20.5001" stroke="#27AE60" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
          <path d="M17.1001 10H20.5001" stroke="#27AE60" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
          <path d="M19 7.19995H20.5" stroke="#27AE60" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
          <path
            d="M5.8001 13.2L2.1001 7.40002L2.4001 2.40002L7.1001 4.40002L12.7001 13.3"
            stroke="#27AE60"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.2002 13V1H20.5002V13"
            stroke="#27AE60"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M20 13.5H22V23H2V13.5H20Z"
            stroke="#27AE60"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'menu':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 18H16V16H3V18ZM3 13H13V11H3V13ZM3 6V8H16V6H3ZM21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z"
            fill="#222D4B"
          />
        </svg>
      );
      break;
    case 'meeting':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.992 18.7373L8.2 20.4003C8.704 20.7783 9 21.3703 9 22.0003V23.0003H1V22.0003C1 21.3703 1.296 20.7783 1.8 20.4003L4.008 18.7373"
            stroke="#BB6BD9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 19C3.895 19 3 18.105 3 17V16C3 14.895 3.895 14 5 14C6.105 14 7 14.895 7 16V17C7 18.105 6.105 19 5 19Z"
            stroke="#BB6BD9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.992 5.7373L15.2 7.4003C15.704 7.7783 16 8.3703 16 9.0003V10.0003H8V9.0003C8 8.3703 8.296 7.7783 8.8 7.4003L11.008 5.7373"
            stroke="#BB6BD9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C10.895 6 10 5.105 10 4V3C10 1.895 10.895 1 12 1C13.105 1 14 1.895 14 3V4C14 5.105 13.105 6 12 6Z"
            stroke="#BB6BD9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.992 18.7373L22.2 20.4003C22.704 20.7783 23 21.3703 23 22.0003V23.0003H15V22.0003C15 21.3703 15.296 20.7783 15.8 20.4003L18.008 18.7373"
            stroke="#BB6BD9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 19C17.895 19 17 18.105 17 17V16C17 14.895 17.895 14 19 14C20.105 14 21 14.895 21 16V17C21 18.105 20.105 19 19 19Z"
            stroke="#BB6BD9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'access-key':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M11.2424 21.2426C13.5856 18.8995 13.5856 15.1005 11.2424 12.7574C8.89932 10.4143 5.10037 10.4143 2.75725 12.7574C0.414125 15.1005 0.414125 18.8995 2.75725 21.2426C5.10037 23.5857 8.89932 23.5857 11.2424 21.2426Z"
              stroke="#F2994A"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.2432 12.757L22.0002 2"
              stroke="#F2994A"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 5L22 8L19 11L16 8"
              stroke="#F2994A"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'add-blue':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2V22"
            stroke="#2196F3"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 12H2"
            stroke="#2196F3"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'close-icon':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#CED4DA" />
          <path
            d="M16.6663 7.33337L7.33301 16.6667"
            stroke="#868E96"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.6663 16.6667L7.33301 7.33337"
            stroke="#868E96"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'filter-remove':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9H23" stroke="#EB5757" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M1 3H23" stroke="#EB5757" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M1 15H11" stroke="#EB5757" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M1 21H11" stroke="#EB5757" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M16 15L22 21" stroke="#EB5757" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
          <path d="M22 15L16 21" stroke="#EB5757" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
        </svg>
      );
      break;
    case 'check':
      iconElement = (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="hjustice://www.w3.org/2000/svg">
          <path
            d="M1 5L5 9L13 1"
            stroke="#1574F6"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'role-group':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4V20C3 21.7 7 23 12 23C17 23 21 21.7 21 20V4" stroke="#56CCF2" strokeWidth="2" strokeMiterlimit="10" />
          <path
            d="M12 7C16.9706 7 21 5.65685 21 4C21 2.34315 16.9706 1 12 1C7.02944 1 3 2.34315 3 4C3 5.65685 7.02944 7 12 7Z"
            stroke="#56CCF2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M21 12C21 13.7 17 15 12 15C7 15 3 13.7 3 12"
            stroke="#56CCF2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      );
      break;
    case 'authorization':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.992 18.7371L8.2 20.4001C8.704 20.7781 9 21.3701 9 22.0001V23.0001H1V22.0001C1 21.3701 1.296 20.7781 1.8 20.4001L4.008 18.7371"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 19C3.895 19 3 18.105 3 17V16C3 14.895 3.895 14 5 14C6.105 14 7 14.895 7 16V17C7 18.105 6.105 19 5 19Z"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.992 5.73706L15.2 7.40006C15.704 7.77806 16 8.37006 16 9.00006V10.0001H8V9.00006C8 8.37006 8.296 7.77806 8.8 7.40006L11.008 5.73706"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6C10.895 6 10 5.105 10 4V3C10 1.895 10.895 1 12 1C13.105 1 14 1.895 14 3V4C14 5.105 13.105 6 12 6Z"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.992 18.7371L22.2 20.4001C22.704 20.7781 23 21.3701 23 22.0001V23.0001H15V22.0001C15 21.3701 15.296 20.7781 15.8 20.4001L18.008 18.7371"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 19C17.895 19 17 18.105 17 17V16C17 14.895 17.895 14 19 14C20.105 14 21 14.895 21 16V17C21 18.105 20.105 19 19 19Z"
            stroke="#F2994A"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'notice-error':
      iconElement = (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.3335 28H30.6668L16.0002 2.66666L1.3335 28ZM5.96016 25.3333L16.0002 7.98666L26.0402 25.3333H5.96016ZM14.6668 21.3333H17.3335V24H14.6668V21.3333ZM14.6668 13.3333H17.3335V18.6667H14.6668V13.3333Z"
            fill="#E13F3D"
          />
        </svg>
      );
      break;
    case 'notice-success':
      iconElement = (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.6861 14.1597C28.0165 15.7411 28.1152 17.4848 27.8027 19.2574C26.5524 26.348 19.8333 31.0528 12.7427 29.8025C5.65211 28.5522 0.947385 21.8332 2.19765 14.7426C3.44792 7.65195 10.167 2.94722 17.2576 4.19749C19.7196 4.63161 21.9616 5.73773 23.7055 7.36528"
            stroke="#27AE60"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
          <path
            d="M10 16L15 21L30 6"
            stroke="#27AE60"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'icon-arrow-down':
      iconElement = (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 0L0.999979 0C0.636979 0 0.301979 0.197 0.124979 0.515C-0.0510214 0.833 -0.0410214 1.222 0.151979 1.53L5.15198 9.53C5.33498 9.822 5.65498 10 5.99998 10C6.34498 10 6.66498 9.822 6.84798 9.53L11.848 1.53C12.041 1.222 12.051 0.833 11.875 0.515C11.698 0.197 11.363 0 11 0Z"
            fill="#868E96"
          />
        </svg>
      );
      break;
    case 'faq':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79 4 6 5.79 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79 12.21 4 10 4Z"
            fill="#1574F6"
          />
        </svg>
      );
      break;
    case 'warning':
      iconElement = (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33331 28H30.6666L16 2.66663L1.33331 28ZM17.3333 24H14.6666V21.3333H17.3333V24ZM17.3333 18.6666H14.6666V13.3333H17.3333V18.6666Z"
            fill="#E65100"
          />
        </svg>
      );
      break;
    case 't_warning_default':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="hjustice://www.w3.org/2000/svg">
          <path
            d="M2 22L12 3L22 22H2Z"
            stroke="#F57C00"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path d="M12 11V15" stroke="#F57C00" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
          <path
            d="M12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19Z"
            fill="#F57C00"
          />
        </svg>
      );
      break;
    case 'arrow_down':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.3335 4.66669L4.66682 4.66669C4.42482 4.66669 4.20148 4.79802 4.08348 5.01002C3.96615 5.22202 3.97282 5.48135 4.10148 5.68669L7.43482 11.02C7.55682 11.2147 7.77015 11.3334 8.00015 11.3334C8.23015 11.3334 8.44348 11.2147 8.56548 11.02L11.8988 5.68669C12.0275 5.48135 12.0341 5.22202 11.9168 5.01002C11.7988 4.79802 11.5755 4.66669 11.3335 4.66669Z"
            fill="#868E96"
          />
        </svg>
      );
      break;
    case 'arrow_down_white':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.3335 4.66666L4.66682 4.66666C4.42482 4.66666 4.20148 4.79799 4.08348 5.00999C3.96615 5.22199 3.97282 5.48132 4.10148 5.68666L7.43482 11.02C7.55682 11.2147 7.77015 11.3333 8.00015 11.3333C8.23015 11.3333 8.44348 11.2147 8.56548 11.02L11.8988 5.68666C12.0275 5.48132 12.0341 5.22199 11.9168 5.00999C11.7988 4.79799 11.5755 4.66666 11.3335 4.66666Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'process_group':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M20 6H10V8H20V6Z" fill="#F2994A" />
            <path
              d="M2.26668 21.1875V2.81249C2.26668 2.29554 2.77506 1.87499 3.39998 1.87499H19.6001C20.225 1.87499 20.7334 2.29554 20.7334 2.81249V10.0683L23 12V2.81249C23 1.26168 21.4748 0 19.6001 0H3.39998C1.52526 0 0 1.26168 0 2.81249V21.1875C0 22.7383 1.5252 24 3.39993 24H10L10.5 22.125H3.39998C2.77506 22.125 2.26668 21.7045 2.26668 21.1875Z"
              fill="#F2994A"
            />
            <path d="M20 11H10V13H18L20 11Z" fill="#F2994A" />
            <path
              d="M20.117 12L13.8232 18.4717C13.4635 18.8328 13.1888 19.2791 13.0285 19.7629L13.0143 19.8058L12 24L16.4723 23.265L16.5165 23.2503C17.0027 23.0894 17.4512 22.8131 17.8134 22.451L24.1063 15.9804L20.117 12ZM16.4851 21.1301C16.45 21.1648 16.413 21.1976 16.3745 21.2284L15.0515 19.9045C15.0832 19.8651 15.117 19.8273 15.1527 19.7916L20.137 14.6665L21.4738 16.0003L16.4851 21.1301Z"
              fill="#F2994A"
            />
            <path
              d="M8.48433 9.40326L6.19176 12.0036L5.05096 10.9323L3.76855 12.298L6.31856 14.6926L9.8896 10.6423L8.48433 9.40326Z"
              fill="#F2994A"
            />
            <path
              d="M8.48433 3.73624L6.19176 6.33654L5.05096 5.26526L3.76855 6.63097L6.31856 9.02554L9.8896 4.97519L8.48433 3.73624Z"
              fill="#F2994A"
            />
            <path
              d="M5.05096 16.5526L3.76855 17.9183L6.31856 20.3129L9.8896 16.2626L8.48433 15.0236L6.19176 17.6239L5.05096 16.5526Z"
              fill="#F2994A"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'menu-log-work':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.42857 19V20.5C7.42857 22.75 5 23 5 23C5 23 19.4053 23 19.5714 23C20.913 23 22 21.881 22 20.5V19H7.42857Z"
            stroke="#FF5722"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 1H2V20.5C2 21.881 3.119 23 4.5 23H6"
            stroke="#FF5722"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 15C19.7614 15 22 12.7614 22 10C22 7.23858 19.7614 5 17 5C14.2386 5 12 7.23858 12 10C12 12.7614 14.2386 15 17 15Z"
            stroke="#FF5722"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 8V10H19"
            stroke="#FF5722"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 6H9"
            stroke="#FF5722"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 10H9"
            stroke="#FF5722"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 14H9"
            stroke="#FF5722"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'menu-product':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 1L22 6V23H2V1H17Z"
            stroke="#18BC78"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11H17"
            stroke="#18BC78"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 1V6H22"
            stroke="#18BC78"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16H17"
            stroke="#18BC78"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 6H12"
            stroke="#18BC78"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'menu-config':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 13C9.176 13 6.671 13.638 5.025 14.193C3.81 14.604 3 15.749 3 17.032V21H12.5"
            stroke="#F57C00"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 13C13.824 13 16.329 13.638 17.975 14.193C19.19 14.604 20 15.749 20 17.032V21H12"
            stroke="#F57C00"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13C9.239 13 7 9.761 7 7V6C7 3.239 9.239 1 12 1C14.761 1 17 3.239 17 6V7C17 9.761 14.761 13 12 13Z"
            stroke="#F57C00"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      );
      break;
    case 'menu-role-group':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 5V1H16V5"
            stroke="#2196F3"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 15H1V5H23V15H15"
            stroke="#2196F3"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 18V23H2V18"
            stroke="#2196F3"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 13H9V17H15V13Z"
            stroke="#2196F3"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'menu-authori':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 13C7.176 13 4.671 13.638 3.025 14.193C1.81 14.604 1 15.749 1 17.032V21H9"
            stroke="#7B1FA2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 13C7.239 13 5 9.761 5 7V6C5 3.239 7.239 1 10 1C12.761 1 15 3.239 15 6V7C15 9.761 12.761 13 10 13Z"
            stroke="#7B1FA2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M17.4195 20.1937C18.4172 19.196 18.4172 17.5784 17.4195 16.5807C16.4218 15.583 14.8042 15.583 13.8065 16.5807C12.8088 17.5784 12.8088 19.196 13.8065 20.1937C14.8042 21.1914 16.4218 21.1914 17.4195 20.1937Z"
            stroke="#7B1FA2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.4199 16.5804L22.0003 12"
            stroke="#7B1FA2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.7227 13.2773L22.0001 14.5548L20.7227 15.8322L19.4453 14.5548"
            stroke="#7B1FA2"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'filter-black':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M22 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1V4C1.00006 4.26519 1.10545 4.51951 1.293 4.707L9 12.414V23C9 23.1857 9.05171 23.3678 9.14935 23.5257C9.24698 23.6837 9.38668 23.8114 9.55279 23.8944C9.71889 23.9775 9.90484 24.0126 10.0898 23.996C10.2748 23.9793 10.4514 23.9114 10.6 23.8L14.6 20.8C14.7242 20.7069 14.825 20.5861 14.8944 20.4472C14.9639 20.3084 15 20.1552 15 20V12.414L22.707 4.707C22.8946 4.51951 22.9999 4.26519 23 4V1C23 0.734784 22.8946 0.48043 22.7071 0.292893C22.5196 0.105357 22.2652 0 22 0V0Z"
              fill="#616161"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case 'confirm':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 12L10 16L18 8"
            stroke="#18BC78"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'history':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 7V12L16 16"
            stroke="#F57C00"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C8.1 2 4.7 4.2 3.1 7.5"
            stroke="#F57C00"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.26392 2.56982L3.09992 7.49982L8.02992 6.66382"
            stroke="#F57C00"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'edit':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z"
            fill="#1574F6"
          />
        </svg>
      );
      break;
    case 'delete':
      iconElement = (
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.42913 19.5556C1.42913 20.9 2.52199 22 3.8577 22H13.572C14.9077 22 16.0006 20.9 16.0006 19.5556V4.88889H1.42913V19.5556ZM3.8577 7.33333H13.572V19.5556H3.8577V7.33333ZM12.9648 1.22222L11.7506 0H5.67913L4.46484 1.22222H0.214844V3.66667H17.2148V1.22222H12.9648Z"
            fill="#E50500"
          />
        </svg>
      );
      break;
    case 'delete-gray':
      iconElement = (
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.42913 19.5556C1.42913 20.9 2.52199 22 3.8577 22H13.572C14.9077 22 16.0006 20.9 16.0006 19.5556V4.88889H1.42913V19.5556ZM3.8577 7.33333H13.572V19.5556H3.8577V7.33333ZM12.9648 1.22222L11.7506 0H5.67913L4.46484 1.22222H0.214844V3.66667H17.2148V1.22222H12.9648Z"
            fill="#A8B1BD"
          />
        </svg>
      );
      break;
    case 'arrow-right':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.66699 4.66652L4.66699 11.3332C4.66699 11.5752 4.79833 11.7985 5.01033 11.9165C5.22233 12.0339 5.48166 12.0272 5.68699 11.8985L11.0203 8.56518C11.215 8.44318 11.3337 8.22985 11.3337 7.99985C11.3337 7.76985 11.215 7.55652 11.0203 7.43452L5.68699 4.10118C5.48166 3.97252 5.22233 3.96585 5.01033 4.08318C4.79833 4.20118 4.66699 4.42452 4.66699 4.66652Z"
            fill={fill || '#616161'}
          />
        </svg>
      );
      break;
    case 'arrow-down':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.3335 4.66602H4.66682C4.42482 4.66602 4.20148 4.79735 4.08348 5.00935C3.96615 5.22135 3.97282 5.48068 4.10148 5.68602L7.43482 11.0193C7.55682 11.214 7.77015 11.3327 8.00015 11.3327C8.23015 11.3327 8.44348 11.214 8.56548 11.0193L11.8988 5.68602C12.0275 5.48068 12.0341 5.22135 11.9168 5.00935C11.7988 4.79735 11.5755 4.66602 11.3335 4.66602Z"
            fill={fill || '#616161'}
          />
        </svg>
      );
      break;
    case 'calendar':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.666992 5.33398H15.3337"
            stroke="#616161"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0003 2H2.00033C1.26395 2 0.666992 2.59695 0.666992 3.33333V13.3333C0.666992 14.0697 1.26395 14.6667 2.00033 14.6667H14.0003C14.7367 14.6667 15.3337 14.0697 15.3337 13.3333V3.33333C15.3337 2.59695 14.7367 2 14.0003 2Z"
            stroke="#616161"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 0.666016V2.66602"
            stroke="#616161"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 0.666016V2.66602"
            stroke="#616161"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'warning_default':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33301 14.6667L7.99967 2L14.6663 14.6667H1.33301Z"
            stroke="#18BC78"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path d="M8 7.33398V10.0007" stroke="#18BC78" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" />
          <path
            d="M7.99967 12.6673C8.36786 12.6673 8.66634 12.3688 8.66634 12.0007C8.66634 11.6325 8.36786 11.334 7.99967 11.334C7.63148 11.334 7.33301 11.6325 7.33301 12.0007C7.33301 12.3688 7.63148 12.6673 7.99967 12.6673Z"
            fill="#18BC78"
          />
        </svg>
      );
      break;
    case 'warning_green':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33301 14.6667L7.99967 2L14.6663 14.6667H1.33301Z"
            stroke="#18BC78"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path d="M8 7.33398V10.0007" stroke="#18BC78" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" />
          <path
            d="M7.99967 12.6673C8.36786 12.6673 8.66634 12.3688 8.66634 12.0007C8.66634 11.6325 8.36786 11.334 7.99967 11.334C7.63148 11.334 7.33301 11.6325 7.33301 12.0007C7.33301 12.3688 7.63148 12.6673 7.99967 12.6673Z"
            fill="#18BC78"
          />
        </svg>
      );
      break;
    case 'warning_yellow':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33301 14.6667L7.99967 2L14.6663 14.6667H1.33301Z"
            stroke="#F2994A"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path d="M8 7.33398V10.0007" stroke="#F2994A" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" />
          <path
            d="M7.99967 12.6673C8.36786 12.6673 8.66634 12.3688 8.66634 12.0007C8.66634 11.6325 8.36786 11.334 7.99967 11.334C7.63148 11.334 7.33301 11.6325 7.33301 12.0007C7.33301 12.3688 7.63148 12.6673 7.99967 12.6673Z"
            fill="#F2994A"
          />
        </svg>
      );
      break;
    case 'warning_red':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.3335 14.6667L8.00016 2L14.6668 14.6667H1.3335Z"
            stroke="#BC2618"
            strokeWidth="1.3"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path d="M8 7.33398V10.0007" stroke="#BC2618" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" />
          <path
            d="M8.00016 12.6673C8.36835 12.6673 8.66683 12.3688 8.66683 12.0007C8.66683 11.6325 8.36835 11.334 8.00016 11.334C7.63197 11.334 7.3335 11.6325 7.3335 12.0007C7.3335 12.3688 7.63197 12.6673 8.00016 12.6673Z"
            fill="#BC2618"
          />
        </svg>
      );
      break;
    case 'confirm-lw':
      iconElement = (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.1" cx="24" cy="24" r="24" fill="#F57C00" />
          <path
            d="M14 32L24 13L34 32H14Z"
            stroke="#F57C00"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path d="M24 21V25" stroke="#F57C00" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
          <path
            d="M24 29C24.5523 29 25 28.5523 25 28C25 27.4477 24.5523 27 24 27C23.4477 27 23 27.4477 23 28C23 28.5523 23.4477 29 24 29Z"
            fill="#F57C00"
          />
        </svg>
      );
      break;
    case 'file-text':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM10 9H18V11H10V9ZM10 12H14V14H10V12ZM10 6H18V8H10V6Z"
            fill={fill || 'rgba(0, 0, 0, 0.5)'}
          />
        </svg>

        // <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //   <path
        //     fillRule="evenodd"
        //     clipRule="evenodd"
        //     d="M14.714 8C14.32 8 14 7.619 14 7.15V3.978L17.742 8H14.714ZM15 18H9C8.448 18 8 17.552 8 17C8 16.448 8.448 16 9 16H15C15.553 16 16 16.448 16 17C16 17.552 15.553 18 15 18ZM9 12H12C12.552 12 13 12.448 13 13C13 13.552 12.552 14 12 14H9C8.448 14 8 13.552 8 13C8 12.448 8.448 12 9 12ZM19.74 7.328L15.296 2.328C15.107 2.119 14.838 2 14.556 2H6.556C5.147 2 4 3.122 4 4.5V19.5C4 20.878 5.147 22 6.556 22H17.444C18.854 22 20 20.878 20 19.5V8C20 7.751 19.907 7.512 19.74 7.328Z"
        //     fill="#18BC78"
        //   />
        //   <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="2" width="16" height="20">
        //     <path
        //       fillRule="evenodd"
        //       clipRule="evenodd"
        //       d="M14.714 8C14.32 8 14 7.619 14 7.15V3.978L17.742 8H14.714ZM15 18H9C8.448 18 8 17.552 8 17C8 16.448 8.448 16 9 16H15C15.553 16 16 16.448 16 17C16 17.552 15.553 18 15 18ZM9 12H12C12.552 12 13 12.448 13 13C13 13.552 12.552 14 12 14H9C8.448 14 8 13.552 8 13C8 12.448 8.448 12 9 12ZM19.74 7.328L15.296 2.328C15.107 2.119 14.838 2 14.556 2H6.556C5.147 2 4 3.122 4 4.5V19.5C4 20.878 5.147 22 6.556 22H17.444C18.854 22 20 20.878 20 19.5V8C20 7.751 19.907 7.512 19.74 7.328Z"
        //       fill="white"
        //     />
        //   </mask>
        // </svg>
      );
      break;
    case 'folder':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.17 6L11.17 8H20V18H4V6H9.17ZM10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
            fill="rgba(0, 0, 0, 0.5)"
          />
        </svg>
      );
      break;
    case 'vbm':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 15H14V17H7V15ZM7 11H17V13H7V11ZM7 7H17V9H7V7ZM19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C4.86 3 4.73 3.01 4.6 3.04C4.21 3.12 3.86 3.32 3.59 3.59C3.41 3.77 3.26 3.99 3.16 4.23C3.06 4.46 3 4.72 3 5V19C3 19.27 3.06 19.54 3.16 19.78C3.26 20.02 3.41 20.23 3.59 20.42C3.86 20.69 4.21 20.89 4.6 20.97C4.73 20.99 4.86 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 2.75C12.41 2.75 12.75 3.09 12.75 3.5C12.75 3.91 12.41 4.25 12 4.25C11.59 4.25 11.25 3.91 11.25 3.5C11.25 3.09 11.59 2.75 12 2.75ZM19 19H5V5H19V19Z"
            fill="#626262"
          />
        </svg>
      );
      break;
    case 'people':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.67 13.1299C18.04 14.0599 19 15.3199 19 16.9999V19.9999H23V16.9999C23 14.8199 19.43 13.5299 16.67 13.1299Z"
            fill="rgba(0, 0, 0, 0.5)"
          />
          <path
            d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12Z"
            fill="rgba(0, 0, 0, 0.5)"
          />
          <path
            d="M9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6Z"
            fill="rgba(0, 0, 0, 0.5)"
          />
          <path
            d="M9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13ZM15 18H3V17.01C3.2 16.29 6.3 15 9 15C11.7 15 14.8 16.29 15 17V18Z"
            fill="rgba(0, 0, 0, 0.5)"
          />
        </svg>
      );
      break;
    case 'icon-confirm':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M59.9994 26.6665C41.666 26.6665 26.666 41.6665 26.666 59.9998C26.666 78.3332 41.666 93.3332 59.9994 93.3332C78.3327 93.3332 93.3327 78.3332 93.3327 59.9998C93.3327 41.6665 78.3327 26.6665 59.9994 26.6665ZM59.9994 86.6665C45.2994 86.6665 33.3327 74.6998 33.3327 59.9998C33.3327 45.2998 45.2994 33.3332 59.9994 33.3332C74.6994 33.3332 86.666 45.2998 86.666 59.9998C86.666 74.6998 74.6994 86.6665 59.9994 86.6665ZM61.666 43.3332H56.666V63.3332L73.9994 73.9998L76.666 69.6665L61.666 60.6665V43.3332Z"
            fill="#E50500"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#E50500" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'download':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9H15V3H9V9H5L12 16L19 9ZM11 11V5H13V11H14.17L12 13.17L9.83 11H11ZM5 18H19V20H5V18Z" fill="#00C968" />
        </svg>
      );
      break;
    case 'icon-system':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.66 4.51994L19.49 7.34994L16.66 10.1799L13.83 7.34994L16.66 4.51994ZM9 4.99994V8.99994H5V4.99994H9ZM19 14.9999V18.9999H15V14.9999H19ZM9 14.9999V18.9999H5V14.9999H9ZM16.66 1.68994L11 7.33994L16.66 12.9999L22.32 7.33994L16.66 1.68994ZM11 2.99994H3V10.9999H11V2.99994ZM21 12.9999H13V20.9999H21V12.9999ZM11 12.9999H3V20.9999H11V12.9999Z"
            fill="rgba(0, 0, 0)"
          />
        </svg>
      );
      break;
    case 'icon-tool':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.4298 10.98C17.4698 10.66 17.4998 10.34 17.4998 10C17.4998 9.66 17.4698 9.34 17.4298 9.02L19.5398 7.37C19.7298 7.22 19.7798 6.95 19.6598 6.73L17.6598 3.27C17.5698 3.11 17.3998 3.02 17.2198 3.02C17.1598 3.02 17.0998 3.03 17.0498 3.05L14.5598 4.05C14.0398 3.65 13.4798 3.32 12.8698 3.07L12.4898 0.42C12.4598 0.18 12.2498 0 11.9998 0H7.99984C7.74984 0 7.53984 0.18 7.50984 0.42L7.12984 3.07C6.51984 3.32 5.95984 3.66 5.43984 4.05L2.94984 3.05C2.88984 3.03 2.82984 3.02 2.76984 3.02C2.59984 3.02 2.42984 3.11 2.33984 3.27L0.339839 6.73C0.209839 6.95 0.26984 7.22 0.45984 7.37L2.56984 9.02C2.52984 9.34 2.49984 9.67 2.49984 10C2.49984 10.33 2.52984 10.66 2.56984 10.98L0.45984 12.63C0.26984 12.78 0.219839 13.05 0.339839 13.27L2.33984 16.73C2.42984 16.89 2.59984 16.98 2.77984 16.98C2.83984 16.98 2.89984 16.97 2.94984 16.95L5.43984 15.95C5.95984 16.35 6.51984 16.68 7.12984 16.93L7.50984 19.58C7.53984 19.82 7.74984 20 7.99984 20H11.9998C12.2498 20 12.4598 19.82 12.4898 19.58L12.8698 16.93C13.4798 16.68 14.0398 16.34 14.5598 15.95L17.0498 16.95C17.1098 16.97 17.1698 16.98 17.2298 16.98C17.3998 16.98 17.5698 16.89 17.6598 16.73L19.6598 13.27C19.7798 13.05 19.7298 12.78 19.5398 12.63L17.4298 10.98ZM15.4498 9.27C15.4898 9.58 15.4998 9.79 15.4998 10C15.4998 10.21 15.4798 10.43 15.4498 10.73L15.3098 11.86L16.1998 12.56L17.2798 13.4L16.5798 14.61L15.3098 14.1L14.2698 13.68L13.3698 14.36C12.9398 14.68 12.5298 14.92 12.1198 15.09L11.0598 15.52L10.8998 16.65L10.6998 18H9.29984L9.10984 16.65L8.94984 15.52L7.88984 15.09C7.45984 14.91 7.05984 14.68 6.65984 14.38L5.74984 13.68L4.68984 14.11L3.41984 14.62L2.71984 13.41L3.79984 12.57L4.68984 11.87L4.54984 10.74C4.51984 10.43 4.49984 10.2 4.49984 10C4.49984 9.8 4.51984 9.57 4.54984 9.27L4.68984 8.14L3.79984 7.44L2.71984 6.6L3.41984 5.39L4.68984 5.9L5.72984 6.32L6.62984 5.64C7.05984 5.32 7.46984 5.08 7.87984 4.91L8.93984 4.48L9.09984 3.35L9.29984 2H10.6898L10.8798 3.35L11.0398 4.48L12.0998 4.91C12.5298 5.09 12.9298 5.32 13.3298 5.62L14.2398 6.32L15.2998 5.89L16.5698 5.38L17.2698 6.59L16.1998 7.44L15.3098 8.14L15.4498 9.27ZM9.99984 6C7.78984 6 5.99984 7.79 5.99984 10C5.99984 12.21 7.78984 14 9.99984 14C12.2098 14 13.9998 12.21 13.9998 10C13.9998 7.79 12.2098 6 9.99984 6ZM9.99984 12C8.89984 12 7.99984 11.1 7.99984 10C7.99984 8.9 8.89984 8 9.99984 8C11.0998 8 11.9998 8.9 11.9998 10C11.9998 11.1 11.0998 12 9.99984 12Z"
            fill="#626262"
          />
        </svg>
      );
      break;
    case 'eye':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'eye-green':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_8502_15911)">
            <path
              d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
              fill="#219653"
            />
          </g>
          <defs>
            <clipPath id="clip0_8502_15911">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
      case 'eye-blue':
        iconElement = (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_8502_15911)">
              <path
                d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"
                fill="#089DDD"
              />
            </g>
            <defs>
              <clipPath id="clip0_8502_15911">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
    break;
    case 'download-grey':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z"
            fill="#757575"
          />
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z"
              fill="white"
            />
          </mask>
        </svg>
      );
      break;
    case 'warning-cancel':
      iconElement = (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M83.3334 41.3666L78.6334 36.6666L60.0001 55.3L41.3667 36.6666L36.6667 41.3666L55.3001 60L36.6667 78.6333L41.3667 83.3333L60.0001 64.7L78.6334 83.3333L83.3334 78.6333L64.7001 60L83.3334 41.3666Z"
            fill="#E50500"
          />
          <circle cx="60" cy="60" r="59.5" stroke="#E50500" strokeDasharray="5 5" />
        </svg>
      );
      break;
    case 'blue-circle':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#303F9F" />
        </svg>
      );
      break;
    case 'sign_success':
      iconElement = (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#373839" />
          <path
            d="M20 32L28 40L44 24"
            stroke="#18BC78"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case 'eye_orange':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 10.4996C11.173 10.4996 10.5 11.1726 10.5 11.9996C10.5 12.8266 11.173 13.4996 12 13.4996C12.827 13.4996 13.5 12.8266 13.5 11.9996C13.5 11.1726 12.827 10.4996 12 10.4996ZM12 15.4996C10.07 15.4996 8.5 13.9296 8.5 11.9996C8.5 10.0696 10.07 8.49964 12 8.49964C13.93 8.49964 15.5 10.0696 15.5 11.9996C15.5 13.9296 13.93 15.4996 12 15.4996ZM21.868 11.5016C21.229 10.3896 17.706 4.81564 11.729 5.00264C6.202 5.14364 2.986 10.0136 2.132 11.5016C1.956 11.8106 1.956 12.1886 2.132 12.4976C2.762 13.5946 6.162 18.9996 12.025 18.9996C12.106 18.9996 12.188 18.9986 12.271 18.9966C17.798 18.8556 21.014 13.9856 21.868 12.4976C22.044 12.1886 22.044 11.8106 21.868 11.5016Z"
            fill="#F7941E"
          />
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="20" height="15">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 10.4996C11.173 10.4996 10.5 11.1726 10.5 11.9996C10.5 12.8266 11.173 13.4996 12 13.4996C12.827 13.4996 13.5 12.8266 13.5 11.9996C13.5 11.1726 12.827 10.4996 12 10.4996ZM12 15.4996C10.07 15.4996 8.5 13.9296 8.5 11.9996C8.5 10.0696 10.07 8.49964 12 8.49964C13.93 8.49964 15.5 10.0696 15.5 11.9996C15.5 13.9296 13.93 15.4996 12 15.4996ZM21.868 11.5016C21.229 10.3896 17.706 4.81564 11.729 5.00264C6.202 5.14364 2.986 10.0136 2.132 11.5016C1.956 11.8106 1.956 12.1886 2.132 12.4976C2.762 13.5946 6.162 18.9996 12.025 18.9996C12.106 18.9996 12.188 18.9986 12.271 18.9966C17.798 18.8556 21.014 13.9856 21.868 12.4976C22.044 12.1886 22.044 11.8106 21.868 11.5016Z"
              fill="white"
            />
          </mask>
        </svg>
      );
      break;
    case 'download_orange':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z"
            fill="#F7941E"
          />
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="17">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z"
              fill="white"
            />
          </mask>
        </svg>
      );
      break;
    case 'sign_in':
      iconElement = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 14H10.375C10.1687 14 10 13.8313 10 13.625V12.375C10 12.1687 10.1687 12 10.375 12H13C13.5531 12 14 11.5531 14 11V5C14 4.44688 13.5531 4 13 4H10.375C10.1687 4 10 3.83125 10 3.625V2.375C10 2.16875 10.1687 2 10.375 2H13C14.6562 2 16 3.34375 16 5V11C16 12.6562 14.6562 14 13 14ZM11.5312 7.71875L6.28125 2.46875C5.8125 2 5 2.32812 5 3V6H0.75C0.334375 6 0 6.33437 0 6.75V9.75C0 10.1656 0.334375 10.5 0.75 10.5H5V13.5C5 14.1719 5.8125 14.5 6.28125 14.0312L11.5312 8.78125C11.8219 8.4875 11.8219 8.0125 11.5312 7.71875Z"
            fill="white"
          />
        </svg>
      );
      break;
    case 'user_login':
      iconElement = (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z"
            fill="#9A9A9A"
          />
        </svg>
      );
      break;
    case 'lock_login':
      iconElement = (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 7H11.75V4.75C11.75 2.13125 9.61875 0 7 0C4.38125 0 2.25 2.13125 2.25 4.75V7H1.5C0.671875 7 0 7.67188 0 8.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V8.5C14 7.67188 13.3281 7 12.5 7ZM9.25 7H4.75V4.75C4.75 3.50938 5.75938 2.5 7 2.5C8.24063 2.5 9.25 3.50938 9.25 4.75V7Z"
            fill="#9E9E9E"
          />
        </svg>
      );
      break;
    case 'copy':
      iconElement = (
        <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM13 4H6C4.9 4 4.01 4.9 4.01 6L4 20C4 21.1 4.89 22 5.99 22H17C18.1 22 19 21.1 19 20V10L13 4ZM6 20V6H12V11H17V20H6Z"
            fill="#08B7DD"
          />
        </svg>
      );
      break;
    case 'addRowAbove':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.33464 4.99935H1.66797V16.666C1.66797 17.5827 2.41797 18.3327 3.33464 18.3327H15.0013V16.666H3.33464V4.99935ZM16.668 1.66602H6.66797C5.7513 1.66602 5.0013 2.41602 5.0013 3.33268V13.3327C5.0013 14.2493 5.7513 14.9993 6.66797 14.9993H16.668C17.5846 14.9993 18.3346 14.2493 18.3346 13.3327V3.33268C18.3346 2.41602 17.5846 1.66602 16.668 1.66602ZM16.668 13.3327H6.66797V3.33268H16.668V13.3327ZM10.8346 12.4993H12.5013V9.16602H15.8346V7.49935H12.5013V4.16602H10.8346V7.49935H7.5013V9.16602H10.8346V12.4993Z"
            fill="#A8B1BD"
          />
        </svg>
      );
      break;
    case 'addRowBelow':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.6654 15.0007H18.332L18.332 3.33398C18.332 2.41732 17.582 1.66732 16.6654 1.66732H4.9987V3.33398L16.6654 3.33398V15.0007ZM3.33203 18.334L13.332 18.334C14.2487 18.334 14.9987 17.584 14.9987 16.6673L14.9987 6.66732C14.9987 5.75065 14.2487 5.00065 13.332 5.00065L3.33203 5.00065C2.41536 5.00065 1.66536 5.75065 1.66536 6.66732V16.6673C1.66536 17.584 2.41536 18.334 3.33203 18.334ZM3.33203 6.66732L13.332 6.66732L13.332 16.6673H3.33203L3.33203 6.66732ZM9.16536 7.50065H7.4987V10.834L4.16536 10.834L4.16536 12.5007L7.4987 12.5007V15.834H9.16536V12.5007H12.4987V10.834H9.16536V7.50065Z"
            fill="#A8B1BD"
          />
        </svg>
      );
      break;

    case 'deleteRow':
      iconElement = (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.3346 7.5V15.8333H6.66797V7.5H13.3346ZM12.0846 2.5H7.91797L7.08464 3.33333H4.16797V5H15.8346V3.33333H12.918L12.0846 2.5ZM15.0013 5.83333H5.0013V15.8333C5.0013 16.75 5.7513 17.5 6.66797 17.5H13.3346C14.2513 17.5 15.0013 16.75 15.0013 15.8333V5.83333Z"
            fill="#A8B1BD"
          />
        </svg>
      );
      break;
    case 'approve':
      iconElement = (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_7970_19502)">
            <path
              d="M19.5002 7.58341L17.9727 6.05591L11.1043 12.9242L12.6318 14.4517L19.5002 7.58341ZM24.0935 6.05591L12.6318 17.5176L8.1035 13.0001L6.576 14.5276L12.6318 20.5834L25.6318 7.58341L24.0935 6.05591ZM0.444336 14.5276L6.50017 20.5834L8.02767 19.0559L1.98267 13.0001L0.444336 14.5276Z"
              fill="#F5A122"
            />
          </g>
          <defs>
            <clipPath id="clip0_7970_19502">
              <rect width="26" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
      break;

    case 'addDepartment':
      iconElement = (
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#219653" />
        </svg>
      );
      break;
    case 'export-primary':
      iconElement = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9H15V3H9V9H5L12 16L19 9ZM11 11V5H13V11H14.17L12 13.17L9.83 11H11ZM5 18H19V20H5V18Z" fill="#089DDD" />
        </svg>
      );
      break;
    case 'notSign':
        iconElement = (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 0H3C1.34325 0 0 1.34325 0 3V21C0 22.6568 1.34325 24 3 24H11.25V22.5H3C2.17387 22.5 1.5 21.8276 1.5 21V3C1.5 2.17237 2.17387 1.5 3 1.5H18C18.8276 1.5 19.5 2.17237 19.5 3V11.8183L21 10.3183V3C21 1.34325 19.6568 0 18 0Z"
              fill="#999999"
            />
            <path
              d="M23.5605 13.5L22.5 12.4395C22.2069 12.1464 21.8233 12 21.4395 12C21.0557 12 20.6719 12.1464 20.379 12.4395L13.9395 18.879C13.6464 19.1721 12.7504 20.3049 12.75 20.6887L12 24L15.3105 23.25C15.3105 23.25 16.8281 22.3536 17.121 22.0605L23.5605 15.621C24.1464 15.0352 24.1464 14.0852 23.5605 13.5ZM16.5922 21.5287C16.5073 21.6094 16.2135 21.8078 15.8546 22.0363L13.9116 20.0933C14.1109 19.8201 14.3327 19.5454 14.4697 19.4092L19.3183 14.5607L21.4395 16.6819L16.5922 21.5287Z"
              fill="#999999"
            />
            <path opacity="0.3" d="M16.5 6H4.5V4.5H16.5V6Z" fill="#CCCCCC" />
            <path opacity="0.3" d="M16.5 9H4.5V7.5H16.5V9Z" fill="#CCCCCC" />
            <path opacity="0.3" d="M16.5 12H4.5V10.5H16.5V12Z" fill="#CCCCCC" />
            <path opacity="0.3" d="M10.5 15H4.5V13.5H10.5V15Z" fill="#CCCCCC" />
          </svg>
        );
        break;
    default:
      iconElement = null;
      break;
  }

  if (iconElement == null) {
    return null;
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <span className={`d-flex align-item-center justify-content-center ${className}`} onClick={onClick}>
      {iconElement}
    </span>
  );
}
