// External Packages
import { Slide, toast, ToastOptions } from 'react-toastify';

// Internal Components
import NotifToastUI from 'components/reusables/toasts/NotifToastUI';
import './toastOverrides.css';
import { NotificationEvent } from '@pushprotocol/restapi/src/lib/pushstream/pushStreamTypes';

export const showNotifcationToast = (payload: NotificationEvent, testing: boolean = false) => {
  const toastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: testing ? 500000 : 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    rtl: false,
    closeButton: false,
    className: 'NotifToastOverride',
    onClick: () => {

    }
  }
  
  toast(
    <NotifToastUI payload={payload} />,
    toastOptions
  );
}
