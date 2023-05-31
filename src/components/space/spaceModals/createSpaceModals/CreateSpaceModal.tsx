// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';
import { useClickAway } from 'react-use';

// Internal Components
import { ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import { Button, Input, TextField } from 'primaries/SharedStyling';
import ScheduleModal from './ScheduleModal';
import InviteMembersModal from '../InviteMembersModal';
import SpaceDetailsModal from './SpaceDetailsModal';
import { User } from 'types/chat';


type CreateSpaceModalType = {
  onClose : ()=>{}
};

const CreateSpaceModal = ({
    onClose
}:CreateSpaceModalType) => {
    const [spaceModalState, setSpaceModalState] = React.useState<number>(1);
    const [spaceName,setSpaceName] = React.useState<string>('');
    const [dateValue,setDateValue] = React.useState<Dayjs | null>(dayjs(new Date()));
    const [timeValue,setTimeValue] = React.useState<Dayjs | null>(dayjs(new Date()));
    const [spaceDescription,setSpaceDescription] = React.useState<string>('');

    const [memberList,setMemberList] = React.useState<Array<User>>([]);

    const handleClose = () => onClose();
    const containerRef = React.useRef(null);
    useClickAway(containerRef, () => handleClose());


    console.log("Date and time ",dateValue,timeValue);

    return (
        <Container>

            {spaceModalState == 2 && (
                <ScheduleModal
                handleClose={handleClose} 
                setSpaceModalState={setSpaceModalState} 
                dateValue={dateValue}
                setDateValue={setDateValue}
                timeValue={timeValue}
                setTimeValue={setTimeValue}

                />
            )}

            {spaceModalState == 3 && (
                <InviteMembersModal 
                handleClose={handleClose} 
                setSpaceModalState={setSpaceModalState} 
                memberList={memberList} 
                setMemberList={setMemberList}/>
            )}

            {spaceModalState == 1 && (
               <SpaceDetailsModal onClose={onClose} 
               setSpaceModalState={setSpaceModalState}
                spaceName={spaceName} 
                spaceDescription= {spaceDescription} 
                setSpaceName={setSpaceName}
                setSpaceDecription= {setSpaceDescription}/>
            )}



        </Container>
    );
};

export default CreateSpaceModal;

const Container = styled.div`
  padding:32px 24px 30px 24px;


  @media(max-width:400px){
    padding:30px 12px;
  }

  


`

const ModalInnerContainer = styled(ItemVV2)`
`

const TextFieldContainer = styled(ItemVV2)`
  width: auto;
  margin: 14px 0px 28px 0px;
  
`;


const TextFieldHeaderContainer = styled(ItemHV2)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
  margin-bottom: 8px;
`;

const TextFieldHeading = styled(SpanV2)`
  color: ${(props) => props.color || '#0000'};
  font-size: 18px;
  font-weight: 500;
`;

const CharacterCount = styled(SpanV2)`
  color: ${(props) => props.color || '#0000'};
  font-size: 14px;
  font-size: 400;
`;

const CustomInput = styled(Input)`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  border-radius: 12px;
  background: ${(props) => props.theme.modalInputBackgrundColor};
  padding: 8px 16px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -0.019em;
  &:focus {
    border: 1px solid #ffdbf0;
  }
`;

const GroupDescription = styled(TextField)`
  resize: none;
  width: 100%;
  border: 1px solid ${(props) => props.borderColor || '#BAC4D6'};
  background: ${(props) => props.theme.modalInputBackgrundColor};
  border-radius: 12px;
  box-sizing: border-box;
  padding: 13px 16px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  &:focus {
    border: 1px solid #ffdbf0;
  }
`;

const CreateButton = styled(Button)`
  padding:16px;
  font-family: 'Strawford';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  background: #D53A94;
  width: 310px;
  border-radius: 15px;
  margin-right:18px;

  @media(max-width:500px){
    width:225px;
  }


`

const ScheduleImage = styled.img`

`