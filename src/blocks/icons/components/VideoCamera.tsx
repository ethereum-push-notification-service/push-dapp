import { FC } from 'react';
import { IconWrapper } from '../IconWrapper';
import { IconProps } from '../Icons.types';

const VideoCamera: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="VideoCamera"
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
            d="M31.4713 9.125C31.3118 9.03953 31.1321 8.99892 30.9514 9.0075C30.7707 9.01609 30.5956 9.07354 30.445 9.17375L26 12.1313V9C26 8.46957 25.7893 7.96086 25.4142 7.58579C25.0391 7.21071 24.5304 7 24 7H4C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V23C2 23.5304 2.21071 24.0391 2.58579 24.4142C2.96086 24.7893 3.46957 25 4 25H24C24.5304 25 25.0391 24.7893 25.4142 24.4142C25.7893 24.0391 26 23.5304 26 23V19.875L30.445 22.8388C30.6101 22.946 30.8032 23.002 31 23C31.2652 23 31.5196 22.8946 31.7071 22.7071C31.8946 22.5196 32 22.2652 32 22V10C31.9987 9.82007 31.949 9.64382 31.8559 9.48982C31.7628 9.33582 31.63 9.20979 31.4713 9.125ZM24 23H4V9H24V23ZM30 20.1313L26 17.465V14.535L30 11.875V20.1313Z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default VideoCamera;