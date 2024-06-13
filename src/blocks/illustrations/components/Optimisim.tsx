import { FC } from 'react';
import { IllustrationWrapper } from '../IllustrationWrapper';
import { IllustrationProps } from '../Illustrations.types';

const Optimisim: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Optimisim"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? '24'}
          height={restProps?.height ?? '24'}
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clip-path="url(#clip0_248_8330)">
            <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#FF0420" />
            <path d="M11.3344 20.2496C10.3808 20.2496 9.6 20.0256 8.992 19.5776C8.3904 19.1232 8.0896 18.4704 8.0896 17.632C8.0896 17.4528 8.1088 17.2416 8.1472 16.9856C8.2496 16.4096 8.3968 15.7184 8.5888 14.9056C9.1328 12.704 10.5408 11.6032 12.8064 11.6032C13.4208 11.6032 13.9776 11.7056 14.464 11.9168C14.9504 12.1152 15.3344 12.4224 15.616 12.832C15.8976 13.2352 16.0384 13.7152 16.0384 14.272C16.0384 14.4384 16.0192 14.6496 15.9808 14.9056C15.8592 15.616 15.7184 16.3136 15.5456 16.9856C15.264 18.08 14.784 18.9056 14.0928 19.4496C13.408 19.9872 12.4864 20.2496 11.3344 20.2496ZM11.5072 18.5216C11.9552 18.5216 12.3328 18.3872 12.6464 18.1248C12.9664 17.8624 13.1968 17.4592 13.3312 16.9088C13.5168 16.1536 13.6576 15.5008 13.7536 14.9376C13.7856 14.7712 13.8048 14.5984 13.8048 14.4192C13.8048 13.6896 13.4272 13.3248 12.6656 13.3248C12.2176 13.3248 11.8336 13.4592 11.5136 13.7216C11.2 13.984 10.976 14.3872 10.8416 14.9376C10.6944 15.4752 10.5536 16.128 10.4064 16.9088C10.3744 17.0688 10.3552 17.2352 10.3552 17.4144C10.3488 18.1568 10.7392 18.5216 11.5072 18.5216Z" fill="white" />
            <path d="M16.5952 20.1344C16.5056 20.1344 16.4416 20.1088 16.3904 20.0512C16.352 19.9872 16.3392 19.9168 16.352 19.8336L18.0096 12.0256C18.0224 11.936 18.0672 11.8656 18.144 11.808C18.2144 11.7504 18.2912 11.7248 18.3744 11.7248H21.568C22.4576 11.7248 23.168 11.9104 23.7056 12.2752C24.2496 12.6464 24.5248 13.1776 24.5248 13.8752C24.5248 14.0736 24.4992 14.2848 24.4544 14.5024C24.256 15.424 23.8528 16.1024 23.2384 16.544C22.6368 16.9856 21.8112 17.2032 20.7616 17.2032H19.1424L18.592 19.8336C18.5728 19.9232 18.5344 19.9936 18.4576 20.0512C18.3872 20.1088 18.3104 20.1344 18.2272 20.1344H16.5952ZM20.8448 15.5456C21.184 15.5456 21.472 15.456 21.7216 15.2704C21.9776 15.0848 22.144 14.8224 22.2272 14.4768C22.2528 14.3424 22.2656 14.2208 22.2656 14.1184C22.2656 13.888 22.1952 13.7088 22.0608 13.5872C21.9264 13.4592 21.6896 13.3952 21.3632 13.3952H19.9232L19.4688 15.5456H20.8448Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_248_8330">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default Optimisim;
