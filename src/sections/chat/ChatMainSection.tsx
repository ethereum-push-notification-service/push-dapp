// React + Web3 Essentials
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import { useDispatch, useSelector } from 'react-redux';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { DID } from 'dids';
import useToast from 'hooks/useToast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import * as PushNodeClient from 'api';
import { ConnectedUser, Feeds, User } from 'api';
import LoaderSpinner, {
  LOADER_OVERLAY, LOADER_SPINNER_TYPE, LOADER_TYPE,
  PROGRESS_POSITIONING
} from 'components/reusables/loaders/LoaderSpinner';
import { VideoCallContext } from 'contexts/VideoCallContext';
import * as w2wHelper from 'helpers/w2w';
import ChatBoxSection from 'sections/chat/ChatBoxSection';
import ChatSidebarSection from 'sections/chat/ChatSidebarSection';
import VideoCallSection, { VideoCallInfoI } from 'sections/video/VideoCallSection';
import {
  setChat,
  setConnectedUser,
} from 'redux/slices/chatSlice';

// Internal Configs
import GLOBALS, { device } from 'config/Globals';
import CryptoHelper from 'helpers/CryptoHelper';
import { setBlockedLoading } from 'redux/slices/chatSlice';

export interface InboxChat {
  name: string;
  profilePicture: string;
  timestamp: number;
  fromDID: string;
  toDID: string;
  fromCAIP10: string;
  toCAIP10: string;
  lastMessage: string;
  messageType: string;
  encType: string;
  signature: string;
  signatureType: string;
  encryptedSecret: string;
}

export interface BlockedLoadingI {
  enabled: boolean;
  title: string;
  spinnerEnabled?: boolean;
  spinnerSize?: number;
  spinnerType?: number;
  progressEnabled?: boolean;
  progress?: number;
  progressNotice?: string;
}


export const ToastPosition: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
};


// Chat Sections
// Divided into two, left and right
const ChatMainSection = () => {
  const { connector, account, chainId, library } = useWeb3React<ethers.providers.Web3Provider>();

  const theme = useTheme();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // redux variables
  const { currentChat, viewChatBox, connectedUser, blockedLoading } = useSelector((state:any) => state.chat);

  const queryClient = new QueryClient({});

  // For video calling
  const [videoCallInfo, setVideoCallInfo] = useState<VideoCallInfoI>({
    address: null,
    fromPublicKeyArmored: null,
    toPublicKeyArmored: null,
    privateKeyArmored: null,
    establishConnection: 0,
  });

  useEffect(() => {
    if (videoCallInfo) {
      console.log(videoCallInfo);
    }
  }, [videoCallInfo]);

  const { call, callAccepted } = useContext(VideoCallContext);
  useEffect(() => {
    if (Object.keys(call).length > 0) {
      setVideoCallInfo({
        address: call.from,
        fromPublicKeyArmored: connectedUser.publicKey,
        toPublicKeyArmored: currentChat ? currentChat.publicKey : null,
        privateKeyArmored: connectedUser.privateKey,
        establishConnection: 2,
      })
    }
  }, [call]);

  useEffect(() => {
    if (callAccepted && videoCallInfo.establishConnection == 2) {
      setVideoCallInfo({
        address: call.from,
        fromPublicKeyArmored: connectedUser.publicKey,
        toPublicKeyArmored: currentChat ? currentChat.publicKey : null,
        privateKeyArmored: connectedUser.privateKey,
        establishConnection: 3,
      })
    }
  }, [callAccepted]);
  

  // Rest of the loading logic
  useEffect(() => {
    if (isLoading) {
      connectUser();
    }
  }, []);

  const connectUser = async (): Promise<void> => {
    // Getting User Info
    dispatch(setBlockedLoading({
      enabled: true,
      title: 'Step 1/4: Getting Account Info',
      progressEnabled: true,
      progress: 25,
      progressNotice: 'Reminder: Push Chat is in alpha, you might need to sign a decrypt transaction to continue',
    }));

    const caip10: string = w2wHelper.walletToCAIP10({ account, chainId });
    const user: User = await PushNodeClient.getUser({ caip10 });
    let connectedUser: ConnectedUser;

    // TODO: Change this to do verification on ceramic to validate if did is valid
    if (user?.did.includes('did:3:')) {
      throw Error('Invalid DID');
    }

    // new user might not have a private key
    if (user && user.encryptedPrivateKey) {
      if (user.wallets.includes(',') || !user.wallets.includes(caip10)) {
        throw Error('Invalid user');
      }

      const privateKeyArmored: string = await CryptoHelper.decryptWithWalletRPCMethod(
        library.provider,
        user.encryptedPrivateKey,
        account
      );
      connectedUser = { ...user, privateKey: privateKeyArmored };
    } else {
      connectedUser = {
        // We only need to provide this information when it's a new user
        name: 'john-snow',
        profilePicture:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvklEQVR4AcXBsW2FMBiF0Y8r3GQb6jeBxRauYRpo4yGQkMd4A7kg7Z/GUfSKe8703fKDkTATZsJsrr0RlZSJ9r4RLayMvLmJjnQS1d6IhJkwE2bT13U/DBzp5BN73xgRZsJMmM1HOolqb/yWiWpvjJSUiRZWopIykTATZsJs5g+1N6KSMiO1N/5DmAkzYTa9Lh6MhJkwE2ZzSZlo7xvRwson3txERzqJhJkwE2bT6+JhoKTMJ2pvjAgzYSbMfgDlXixqjH6gRgAAAABJRU5ErkJggg==',
        wallets: caip10,
        ///
        about: '',
        allowedNumMsg: 0,
        did: caip10,
        encryptedPrivateKey: '',
        encryptionType: '',
        numMsg: 0,
        publicKey: '',
        sigType: '',
        signature: '',
        linkedListHash: '',
        privateKey: '',
      };
    }

    dispatch(setBlockedLoading({
      enabled: false,
      title: "Step 4/4: Let's Chat ;)",
      spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
      progressEnabled: true,
      progress: 100,
    }));

    dispatch(setConnectedUser(connectedUser));
    setIsLoading(false);
  };


  // RENDER
  return (
    <ItemHV2>
      {!isLoading ? (
        <QueryClientProvider client={queryClient}>
            <ChatSidebarContainer
              flex="1"
              maxWidth="340px"
              minWidth="280px"
              padding="10px 10px 10px 20px"
              boxSizing="content-box"
              background={theme.default.bg}
              chatActive={viewChatBox}
            >
              <ChatSidebarSection />
            </ChatSidebarContainer>
            <ChatContainer
              padding="10px 10px 10px 10px"
              chatActive={viewChatBox}
            >
              <ChatBoxSection setVideoCallInfo={setVideoCallInfo} />
            </ChatContainer>
          {/* The rest of your application */}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      ) : (
        <LoaderSpinner type={LOADER_TYPE.SEAMLESS} />
      )}

      {/* This always needs to be last */}
      {blockedLoading.enabled && (
        <LoaderSpinner
          type={LOADER_TYPE.STANDALONE}
          overlay={LOADER_OVERLAY.ONTOP}
          blur={GLOBALS.ADJUSTMENTS.BLUR.DEFAULT}
          title={blockedLoading.title}
          width="50%"
          spinnerEnabled={blockedLoading.spinnerEnabled}
          spinnerSize={blockedLoading.spinnerSize}
          spinnerType={blockedLoading.spinnerType}
          progressEnabled={blockedLoading.progressEnabled}
          progressPositioning={PROGRESS_POSITIONING.BOTTOM}
          progress={blockedLoading.progress}
          progressNotice={blockedLoading.progressNotice}
        />
      )}

      {/* But video chat trumps this now!!! */}
      {videoCallInfo.establishConnection > 0 && (
        <VideoCallSection
          videoCallInfo={videoCallInfo}
          setVideoCallInfo={setVideoCallInfo}
          endVideoCallHook={() => {
            setVideoCallInfo({
              address: null,
              fromPublicKeyArmored: null,
              toPublicKeyArmored: null,
              privateKeyArmored: null,
              establishConnection: 0
            });
          }}
        />
      )}
    </ItemHV2>
  );
};
export default ChatMainSection;

const ChatSidebarContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    margin-right: ${(props) => (props.chatActive ? '20%' : '0%')};
    opacity: ${(props) => (props.chatActive ? '0' : '1')};
    transition: margin-right 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 1;
  }
`;

const ChatContainer = styled(ItemVV2)`
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-left: ${(props) => (props.chatActive ? '0%' : '100%')};
    transition: margin-left 0.25s;
    max-width: initial;
    min-width: auto;
    z-index: 2;
  }
`;
