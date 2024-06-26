// React + Web3 Essentials
import { useEffect, useState, useContext } from 'react';

// External Packages
import { useDispatch, useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { MdError } from 'react-icons/md';

// Internal Compoonents
import AliasProcessing from 'components/AliasProcessing';
import ChannelDetails from 'components/ChannelDetails';
import ChannelLoading from 'components/ChannelLoading';
import ChannelSettings from 'components/ChannelSettings';
import CreateChannelModule from '../createChannel/CreateChannelModule';
import { ButtonV2, ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import { getAliasFromChannelDetails } from 'helpers/UtilityHelper';
import { useAccount, useDeviceWidthCheck } from 'hooks';
import {
  setAliasAddress,
  setAliasAddressFromContract,
  setAliasChainId,
  setAliasVerified,
  setUserChannelDetails,
} from 'redux/slices/adminSlice';
import { setProcessingState } from 'redux/slices/channelCreationSlice';
import ChannelsDataStore from 'singletons/ChannelsDataStore';
import useToast from 'hooks/useToast';

// Internal Configs
import { appConfig } from 'config/index.js';
import { Button } from 'components/SharedStyling';
import EditChannel from 'modules/editChannel/EditChannel';
import useModalBlur from 'hooks/useModalBlur';
import { AppContext } from 'contexts/AppContext';

// Constants
// interval after which alias details api will be called, in seconds
const ALIAS_API_CALL_INTERVAL: number = 10;

// interval id for calling search api
let intervalID = null;

// CREATE CHANNEL OWNER DASHBOARD
const ChannelOwnerDashboard = () => {
  const theme = useTheme();
  const { account, chainId } = useAccount();
  const {
    channelDetails,
    delegatees,
    aliasDetails: { aliasAddr, aliasEthAddr, isAliasVerified, aliasAddrFromContract },
  } = useSelector((state: any) => state.admin);
  const { processingState } = useSelector((state: any) => state.channelCreation);
  const { epnsWriteProvider } = useSelector((state: any) => state.contracts);
  const { userPushSDKInstance } = useSelector((state: any) => {
    return state.user;
  });
  const { handleConnectWallet } = useContext(AppContext);

  const isChannelDetails = channelDetails && channelDetails !== 'unfetched';

  const destroyChannelToast = useToast();

  const dispatch = useDispatch();

  const [isChannelExpired, setIsChannelExpired] = useState<boolean>(false);
  const [channelDetailsLoading, setChannelDetailsLoading] = useState<boolean>(true);
  const [editChannel, setEditChannel] = useState<boolean>(false);

  const CORE_CHAIN_ID: number = appConfig.coreContractChain;
  const onCoreNetwork: boolean = CORE_CHAIN_ID === chainId;
  const isMobile = useDeviceWidthCheck(600);

  useEffect(() => {
    if (!onCoreNetwork || !channelDetails || aliasAddrFromContract || channelDetails === 'unfetched') return;

    const { address: aliasAddress, chainId: aliasChainId } = getAliasFromChannelDetails(channelDetails);
    if (aliasAddress) {
      dispatch(setAliasAddressFromContract(aliasAddress));
      dispatch(setAliasChainId(aliasChainId));
      // dispatch(setAliasAddress(aliasAddress));
    } else {
      dispatch(setProcessingState(0));
      // setChannelDetailsLoading(false);
    }
  }, [channelDetails, aliasAddrFromContract]);

  const fetchChannelDetails = async (address: string) => {
    let { aliasAddress = null, isAliasVerified = null } =
      await ChannelsDataStore.getInstance().getChannelDetailsFromAddress(address);
    if (aliasAddress == 'NULL') aliasAddress = null;

    return { aliasAddress: aliasAddress, aliasVerified: isAliasVerified };
  };

  useEffect(() => {
    if (!onCoreNetwork || !aliasAddrFromContract || processingState === 0) return;

    intervalID = setInterval(async () => {
      const { aliasAddress, aliasVerified } = await fetchChannelDetails(account);
      if (aliasAddress) {
        dispatch(setAliasAddress(aliasAddress));
        if (aliasVerified) {
          // setChannelDetailsLoading(false);
          dispatch(setAliasVerified(true));
          dispatch(setProcessingState(0));
        } else {
          // setChannelDetailsLoading(false);
          dispatch(setProcessingState(2));
          dispatch(setAliasVerified(false));
        }
      } else {
        if (processingState != 0 && processingState != 1) dispatch(setProcessingState(1));
        // setChannelDetailsLoading(false);
      }
    }, ALIAS_API_CALL_INTERVAL * 1000);
  }, [aliasAddrFromContract]);

  if (aliasAddr !== null) {
    clearInterval(intervalID);
  }

  const destroyChannel = async () => {
    try {
      destroyChannelToast.showLoaderToast({ loaderMessage: 'Waiting for Confirmation...' });
      const tx = await epnsWriteProvider.destroyTimeBoundChannel(account, {
        gasLimit: 1000000,
      });

      console.debug(tx);
      console.debug('Check: ' + account);
      await tx.wait();
      destroyChannelToast.showMessageToast({
        toastTitle: 'Success',
        toastMessage: `Successfully deleted the channel`,
        toastType: 'SUCCESS',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="green"
          />
        ),
      });
      dispatch(setUserChannelDetails(null));
    } catch (err) {
      console.error(err);
      if (err.code == 'ACTION_REJECTED') {
        // EIP-1193 userRejectedRequest error
        destroyChannelToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `User denied message signature.`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      } else {
        destroyChannelToast.showMessageToast({
          toastTitle: 'Error',
          toastMessage: `There was an error in deleting the channel`,
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      }
    }
  };

  const showEditChannel = () => {
    // if (!userPushSDKInstance.signer) {
    //   handleConnectWallet();
    //   return;
    // }
    setEditChannel(true);
  };

  const closeEditChannel = () => {
    setEditChannel(false);
  };

  //here the useModal hook is used to display Upload Logo Modal
  const {
    isModalOpen: isUploadLogoModalOpen,
    showModal: displayUplaodLogoModal,
    ModalComponent: UploadLogoComponent,
  } = useModalBlur();

  return (
    <ItemHV2>
      {(channelDetails === 'unfetched' || processingState === null) && <ChannelLoading />}

      {channelDetails !== 'unfetched' && (
        <ItemVV2
          justifyContent={processingState === 0 && 'flex-start'}
          height="fit-content"
        >
          {/* display the create channel page if there are no details */}
          {!channelDetails && processingState === 0 && <CreateChannelModule />}

          {isChannelDetails && processingState !== null && (
            <>
              {editChannel ? (
                <EditChannel
                  closeEditChannel={closeEditChannel}
                  UploadLogoComponent={UploadLogoComponent}
                  displayUplaodLogoModal={displayUplaodLogoModal}
                  isUploadLogoModalOpen={isUploadLogoModalOpen}
                />
              ) : (
                <>
                  {channelDetails && !isMobile && (
                    <ItemHV2
                      position="absolute"
                      top="0"
                      right="0"
                      zIndex="1"
                    >
                      {!isChannelExpired && onCoreNetwork && (
                        <SubmitButton onClick={showEditChannel}>Edit Channel</SubmitButton>
                      )}
                      {!isChannelExpired && <ChannelSettings />}
                      {isChannelExpired && onCoreNetwork && (
                        <DestroyChannelBtn
                          onClick={destroyChannel}
                          background="#E93636"
                          color="#fff"
                          height="36px"
                          width="123px"
                          borderRadius="8px"
                          fontSize="14px"
                        >
                          Delete Channel
                        </DestroyChannelBtn>
                      )}
                    </ItemHV2>
                  )}
                  {channelDetails ? (
                    <ChannelDetails
                      isChannelExpired={isChannelExpired}
                      setIsChannelExpired={setIsChannelExpired}
                      showEditChannel={showEditChannel}
                      destroyChannel={destroyChannel}
                    />
                  ) : (
                    ''
                  )}
                </>
              )}
            </>
          )}

          {/* processing box */}
          {processingState !== 0 && processingState !== null && isChannelDetails && !editChannel && (
            <>
              <AliasProcessing
                aliasEthAccount={aliasEthAddr}
                setAliasVerified={setAliasVerified}
              />
            </>
          )}
        </ItemVV2>
      )}
    </ItemHV2>
  );
};

export default ChannelOwnerDashboard;

const DestroyChannelBtn = styled(ButtonV2)`
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
`;

const SubmitButton = styled(Button)`
  width: 7rem;
  background: #cf1c84;
  color: #fff;
  z-index: 0;
  font-family: 'FK Grotesk Neu';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-right: 20px;
  border-radius: 8px;
  padding: 11px 10px;
  @media (min-width: 600px) and (max-width: 700px) {
    margin-right: 9px;
  }
`;
