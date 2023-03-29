// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import { useClickAway } from 'react-use';
import { MdCheckCircle, MdError } from 'react-icons/md';

// Internal Components
import ModalHeader from 'primaries/SharedModalComponents/ModalHeader';
import ModalInput from 'primaries/SharedModalComponents/ModalInput';
import ModalConfirmButton from 'primaries/SharedModalComponents/ModalConfirmButton';
import { ModalInnerComponentType } from 'hooks/useModalBlur';
import BlurBG from 'components/reusables/blurs/BlurBG';

// Internal Configs
import { device } from 'config/Globals';

const AddSubgraphModalContent = ({ onClose, onConfirm: addSubgraph, toastObject }: ModalInnerComponentType) => {
  const subgraphIdInputRef = React.useRef<HTMLInputElement>();
  const pollTimeInputRef = React.useRef<HTMLInputElement>();

  const [isLoading, setIsLoading] = React.useState(false);

  const theme = useTheme();

  const handleClose = () => !isLoading && onClose();

  // to close the modal upon a click on backdrop
  const containerRef = React.useRef(null);
  useClickAway(containerRef, () => handleClose());

  const addSubgraphHandler = () => {
    const pollTime = pollTimeInputRef?.current?.value;
    const subgraphId = subgraphIdInputRef?.current?.value;

    setIsLoading(true);

    if (pollTime == '' || subgraphId == '') {
      toastObject.showMessageToast({
        toastTitle: 'Transaction Failed',
        toastMessage: 'Fields are empty! Retry',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    } else if (parseInt(pollTime) < 60) {
      toastObject.showMessageToast({
        toastTitle: 'Transaction Failed',
        toastMessage: 'Poll Time must be at least 60 sec',
        toastType: 'ERROR',
        getToastIcon: (size) => (
          <MdError
            size={size}
            color="red"
          />
        ),
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    }

    addSubgraph(pollTime, subgraphId)
      .then(async (tx) => {
        console.log(tx);
        toastObject.showMessageToast({
          toastTitle: 'Subgraph Added',
          toastMessage: 'Subgraph has been added successfully',
          toastType: 'SUCCESS',
          getToastIcon: (size) => (
            <MdCheckCircle
              size={size}
              color="green"
            />
          ),
        });
        onClose();
      })
      .catch((err) => {
        console.log(err);

        toastObject.showMessageToast({
          toastTitle: 'Transaction Failed',
          toastMessage: 'Adding a subgraph failed.',
          toastType: 'ERROR',
          getToastIcon: (size) => (
            <MdError
              size={size}
              color="red"
            />
          ),
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <OuterModalContainer>
      <BlurBG
        blur={3}
        zIndex={-1}
      />
      <ModalContainer ref={containerRef}>
        <ModalHeader
          heading="Add Subgraph"
          subHeading="Enter subgraph ID and Poll time (at least 60 sec)"
        />
        <ModalInput
          ref={subgraphIdInputRef}
          title="Subgraph ID"
        />
        <ModalInput
          ref={pollTimeInputRef}
          title="Poll Time (in seconds)"
        />
        <ModalConfirmButton
          text="Add Subgraph"
          onClick={addSubgraphHandler}
          isLoading={isLoading}
        />
      </ModalContainer>
    </OuterModalContainer>
  );
};

const OuterModalContainer = styled.div`
  position: absolute;
  top: 25vh;
  right: -59vw;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(${device.mobileL}){
    right: -84vw;
    top:0px;
  }
`;

const ModalContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 6% 1%;
  background: ${(props) => props.theme.modalContentBackground};
  border: 1px solid ${(props) => props.theme.modalBorderColor};
  border-radius: 1rem;
  padding: 1.2% 2%;
  @media(${device.laptop}){
    width:50vw;
  }
  @media(${device.mobileL}){
    width:95vw;
  }
`;

export default AddSubgraphModalContent;
