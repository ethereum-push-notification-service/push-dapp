import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const PrivateChat: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="PrivateChat"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M6.73999 4.32752C6.65217 4.22853 6.54558 4.14795 6.42639 4.09046C6.3072 4.03297 6.17778 3.9997 6.04564 3.99259C5.91351 3.98549 5.78127 4.00467 5.6566 4.04905C5.53193 4.09342 5.41731 4.1621 5.31938 4.2511C5.22144 4.3401 5.14215 4.44765 5.08609 4.56752C5.03003 4.68739 4.99832 4.81719 4.9928 4.94941C4.98727 5.08162 5.00804 5.21362 5.05391 5.33775C5.09978 5.46187 5.16982 5.57567 5.25999 5.67252L7.66499 8.31877C3.12499 11.105 1.17249 15.4 1.08624 15.595C1.02938 15.7229 1 15.8613 1 16.0013C1 16.1412 1.02938 16.2796 1.08624 16.4075C1.12999 16.5063 2.18874 18.8538 4.54249 21.2075C7.67874 24.3425 11.64 26 16 26C18.2408 26.0128 20.4589 25.5514 22.5087 24.6463L25.2587 27.6725C25.3466 27.7715 25.4531 27.8521 25.5723 27.9096C25.6915 27.9671 25.8209 28.0003 25.9531 28.0075C26.0852 28.0146 26.2175 27.9954 26.3421 27.951C26.4668 27.9066 26.5814 27.8379 26.6793 27.7489C26.7773 27.66 26.8566 27.5524 26.9126 27.4325C26.9687 27.3127 27.0004 27.1829 27.0059 27.0506C27.0115 26.9184 26.9907 26.7864 26.9448 26.6623C26.899 26.5382 26.8289 26.4244 26.7387 26.3275L6.73999 4.32752ZM12.6562 13.8075L17.865 19.5388C17.0806 19.9514 16.1814 20.0919 15.3085 19.9381C14.4357 19.7843 13.6386 19.3449 13.0425 18.689C12.4464 18.0331 12.085 17.1978 12.0151 16.3143C11.9452 15.4308 12.1707 14.549 12.6562 13.8075ZM16 24C12.1525 24 8.79124 22.6013 6.00874 19.8438C4.86663 18.7087 3.89526 17.414 3.12499 16C3.71124 14.9013 5.58249 11.8263 9.04374 9.82752L11.2937 12.2963C10.4227 13.4119 9.97403 14.7996 10.0272 16.214C10.0803 17.6284 10.6317 18.9785 11.584 20.0257C12.5363 21.0728 13.8282 21.7496 15.2312 21.9363C16.6343 22.1231 18.0582 21.8078 19.2512 21.0463L21.0925 23.0713C19.4675 23.6947 17.7405 24.0097 16 24ZM16.75 12.0713C16.4894 12.0215 16.2593 11.8703 16.1102 11.6509C15.9611 11.4315 15.9053 11.1618 15.955 10.9013C16.0047 10.6407 16.1559 10.4105 16.3753 10.2615C16.5948 10.1124 16.8644 10.0565 17.125 10.1063C18.3995 10.3534 19.56 11.0058 20.4333 11.9664C21.3067 12.9269 21.8462 14.1441 21.9712 15.4363C21.9959 15.7003 21.9147 15.9634 21.7455 16.1676C21.5762 16.3717 21.3328 16.5003 21.0687 16.525C21.0375 16.5269 21.0062 16.5269 20.975 16.525C20.725 16.5261 20.4838 16.4335 20.2987 16.2656C20.1136 16.0976 19.9981 15.8664 19.975 15.6175C19.8908 14.758 19.5315 13.9486 18.9504 13.3097C18.3694 12.6708 17.5977 12.2364 16.75 12.0713ZM30.91 16.4075C30.8575 16.525 29.5912 19.3288 26.74 21.8825C26.6426 21.9726 26.5282 22.0423 26.4036 22.0877C26.2789 22.1331 26.1465 22.1533 26.014 22.147C25.8814 22.1407 25.7515 22.1082 25.6317 22.0512C25.5119 21.9942 25.4047 21.9139 25.3162 21.8151C25.2277 21.7162 25.1598 21.6008 25.1163 21.4754C25.0729 21.3501 25.0549 21.2173 25.0633 21.0849C25.0716 20.9525 25.1063 20.8231 25.1652 20.7043C25.2241 20.5854 25.306 20.4794 25.4062 20.3925C26.8051 19.1358 27.9801 17.6505 28.8812 16C28.1093 14.5847 27.1358 13.2891 25.9912 12.1538C23.2087 9.39877 19.8475 8.00002 16 8.00002C15.1893 7.99903 14.3799 8.06467 13.58 8.19627C13.4499 8.21928 13.3166 8.21628 13.1876 8.18745C13.0587 8.15863 12.9368 8.10454 12.8289 8.02833C12.721 7.95211 12.6293 7.85527 12.559 7.7434C12.4887 7.63153 12.4413 7.50685 12.4196 7.37656C12.3978 7.24627 12.402 7.11295 12.432 6.9843C12.462 6.85566 12.5172 6.73424 12.5945 6.62705C12.6717 6.51986 12.7694 6.42904 12.8819 6.35982C12.9944 6.2906 13.1195 6.24436 13.25 6.22377C14.1589 6.07369 15.0787 5.99885 16 6.00002C20.36 6.00002 24.3212 7.65752 27.4575 10.7938C29.8112 13.1475 30.87 15.4963 30.9137 15.595C30.9706 15.7229 31 15.8613 31 16.0013C31 16.1412 30.9706 16.2796 30.9137 16.4075H30.91Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default PrivateChat;
