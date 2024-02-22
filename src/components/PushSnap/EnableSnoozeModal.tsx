// React + Web3 Essentials
import React, { useEffect, useState } from 'react';

// External Packages
import { AiOutlineMore } from 'react-icons/ai';
import Switch from 'react-switch';
import { useClickAway } from 'react-use';
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ReactComponent as MinusCircle } from 'assets/PushSnaps/MinusCircle.svg';
import InfoImage from 'assets/info.svg';
import { Button } from 'components/SharedStyling';
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import Tooltip from 'components/reusables/tooltip/Tooltip';
import { shortenText } from 'helpers/UtilityHelper';
import { useAccount } from 'hooks';

// Internal Configs
import { device } from 'config/Globals';
import { AppContext } from 'contexts/AppContext';


const EnableSnoozeModal = () => {
  const [walletAddresses, setWalletAddresses] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const { setSnapState, SnapState } = React.useContext(AppContext);
  const [searchedUser, setSearchedUser] = useState('');
  const [snoozeDuration, setSnoozeDuration] = useState('');
  const [snooze, setSnooze] = useState('');
  const [showRemove, setShowRemove] = useState();
  const [toggleStatus, setToggleStatus] = useState(0);
  const theme = useTheme();

  const defaultSnapOrigin = 'npm:@pushprotocol/snap';

  const { chainId, account, provider } = useAccount();

  useEffect(() => {
    (async function () {
      const res = await window.ethereum?.request({
        method: 'wallet_invokeSnap',
        params: {
          snapId: defaultSnapOrigin,
          request: {
            method: 'pushproto_gettogglestatus',
            params: { address: searchedUser },
          },
        },
      });
      setToggleStatus(res);
    })();
  }, [toggleStatus]);

  useEffect(() => {
    getWalletAddresses();
  }, []);

  async function getSignature(mode: number) {
    if (mode == 1) {
      const signer = provider.getSigner(account);
      const signature = await signer.signMessage(
        `Add address ${account} to receive notifications via Push Snap in MetaMask`
      );
      return signature;
    }
    if (mode == 2) {
      const signer = provider.getSigner(account);
      const signature = await signer.signMessage(
        `Remove address ${account} to stop receive notifications via Push Snap in MetaMask`
      );
      return signature;
    }
  }

 

  const [checked, setChecked] = useState(false);
  const handleChange = async (nextChecked) => {
    setChecked(nextChecked);
    
    const duration = parseInt(snoozeDuration);
    
    if (duration >= 1 && duration <= 72) {
      console.log(
        // await window.ethereum?.request({
        //   method: 'wallet_invokeSnap',
        //   params: {
        //     snapId: defaultSnapOrigin,
        //     request: {
        //       method: 'pushproto_setsnoozeduration',
        //       params: { snoozeDuration: snoozeDuration },
        //     },
        //   },
        // })
      );

      setSnapState(6);
      
      
    } else {
      // Display an error message if the input is invalid
      console.error('Invalid input. Please enter a number between 1 and 72.');
    }
    if (toggleStatus < 40) {
      setToggleStatus(42);
    } else {
      setToggleStatus(0);
    }
  };

  const removeWalletAddresses = async (walletSelected: string) => {
    const signatureResult = await getSignature(2);
    console.log('Ran', signatureResult);
    if (signatureResult) {
      if (walletSelected) {
        await window.ethereum?.request({
          method: 'wallet_invokeSnap',
          params: {
            snapId: defaultSnapOrigin,
            request: {
              method: 'pushproto_removeaddress',
              params: { address: walletSelected },
            },
          },
        });
        getWalletAddresses();
      }
    } else {
      console.error('Signature Validation Failed');
    }
  };

  const getWalletAddresses = async () => {
    const result = await window.ethereum?.request({
      method: 'wallet_invokeSnap',
      params: {
        snapId: defaultSnapOrigin,
        request: { method: 'pushproto_getaddresses' },
      },
    });
    console.debug('result', result);
    setAddresses(result);
  };

  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => {
    console.warn('Set show to be null');
    setWalletSelected(null);
    setShowRemove(null);
  });

  const [walletSelected, setWalletSelected] = useState();

  const handleWalletSelect = (address) => {
    setWalletSelected(address);
  };

  return (
    <Container>
      <ItemHV2
        alignItems="baseline"
        margin="24px 0 0 0"
        padding="0 9px 0 0"
        Gap="8px"
        justifyContent="flex-start"
      >
        <PrimaryText>Set Snooze Duration</PrimaryText>
        <SecondaryText>
          How long would you like to snooze notifications? You can snooze for 1 to 72 hours.
        </SecondaryText>
        <Input
          type="text"
          value={snoozeDuration}
          onChange={(e) => {
            const duration = parseInt(snoozeDuration);

            duration < 1 || duration > 72
              ? alert('Invalid. Enter a number between 1 & 72')
              : setSnoozeDuration(e.target.value);
          }}
          placeholder="Snooze duration in Hours (e.g. 6)"
        />
      </ItemHV2>

      <ItemHV2
        //   justifyContent="place-content-center"

        margin="24px 0 0 0"
      >
        <EnptyButton>Cancel </EnptyButton>

        <FilledButton onClick={handleChange}> Enable Snooze </FilledButton>
      </ItemHV2>
    </Container>
  );
};

export default EnableSnoozeModal;

const Container = styled(ItemVV2)`
  padding: 0px 0px 12px 9px;
`;

const ToolTipContainer = styled(ItemVV2)`
  box-sizing: border-box;
  width: 18.75rem;
  // height: 7.5rem;
  // max-height: 7.5rem;
  background: ${(props) => props.theme.default.bg};
  border-radius: 1rem 1rem 1rem 0.125rem;
  justify-content: flex-start;
  border: 1px solid rgba(173, 176, 190, 0.2);
  align-items: flex-start;
  padding: 0.75rem 0.25rem 0.75rem 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 400px) {
    width: 16.75rem;
  }
`;

const PrimaryText = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 500;
  align-self: baseline;
  color: ${(props) => props.theme.modalMessageColor};
`;

const SecondaryText = styled.p`
  margin: 0px;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis; // Show ellipsis (...) when text overflows

  color: ${(props) => props.theme.snapSecondaryText};
`;

const ToolTipText = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #62626a;
  color: ${(props) => props.theme.modalMessageColor};
  text-align: left;
`;

const SnapButton = styled(Button)`
  align-self: end;
  height: 36px;
  z-index: 0;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: normal;
  border-radius: 8px;
`;

const FilledButton = styled(SnapButton)`
  min-width: 79px;
  padding: 14px;
  background: #d53a94;
  width: 148px;
  height: 48px;
  radius: 12px;
  padding: 0px 24px 0px 24px;
  color: #fff;
  white-space: nowrap;
`;

const EnptyButton = styled(SnapButton)`
  flex-direction: row;
  color: black;
  text-align: center;
  width: 96px;
  height: 48px;
  padding: 0px 24px 0px 24px;
  margin-right: 8px;
  border: 1px solid #bac4d6;
  background: ${(props) => props.theme.default.bg};
  gap: 4px;
`;

const ImageInfo = styled.img`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  cursor: pointer;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  width: 240px;
  height: 48px;
  padding: 13px 16px 13px 16px;
  margin: 10px 3px 0px;
  background: ${(props) => props.theme.modalSearchBarBackground};

  border-radius: 12px;
  border: 1px solid #bac4d6;

  color: ${(props) => props.theme.default.secondaryColor || '#000'};
  &:focus {
    outline: none;
    background-origin: border;
    border: 1px solid #bac4d6 !important;
    background-clip: padding-box, border-box;
  }
  &::placeholder {
    color: ${(props) => props.theme.default.secondaryColor || '#000'};
  }
  @media ${device.mobileL} {
    min-width: 300px;
  }
`;

const AddressesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  overflow-y: scroll;
  gap: 8px;
  margin: 8px 0 0 0;
  max-height: 250px;
  flex-wrap: nowrap;
  padding: 5px 5px 5px 0;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44, #cf1c84),
      color-stop(0.72, #cf1c84),
      color-stop(0.86, #cf1c84)
    );
  }
`;

const AddressesSubContainer = styled(ItemHV2)`
  max-height: 42px;
  padding: 13px 16px;
  border-radius: 12px;
  background: ${(props) => props.theme.snapBackground};
  justify-content: space-between;
`;

const MoreOptions = styled(AiOutlineMore)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const RemoveDiv = styled(ItemHV2)`
  border-radius: 12px;
  border: 1px solid #bac4d6;
  background: #fff;
  cursor: pointer;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 8px 12px 8px 8px;
  align-items: center;
  gap: 9px;
  position: absolute;
  right: 0;
  top: 3px;
`;
