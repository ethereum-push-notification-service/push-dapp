import React, { useContext } from 'react';
import styled, { useTheme } from "styled-components";

import { A, Button, Image, Item, ItemH, Span} from 'primaries/SharedStyling';
import { BsXLg } from 'react-icons/bs'
import { shortenText } from 'helpers/UtilityHelper';
import { SpanV2 } from './reusables/SharedStylingV2';
import { GlobalContext } from 'contexts/GlobalContext';


const ProfileModal = ({ showDropdown, setShowDropdown, dropdownValues })=>{
    const theme = useTheme()
    // const delegateAddressInputRef = React.useRef<HTMLInputElement>();
    // const handleClose = () => onClose();

    // to close the modal upon a click on backdrop
    // const containerRef = React.useRef(null);
    const {mode} = useContext(GlobalContext);
    // useClickAway(containerRef, () => onClose())

    return(
        <ModalContainer>
            <Button
                bg="transparent"
                margin="10px 10px 10px 0px"
                self='flex-end'
                onClick={() => {
                  setShowDropdown(!showDropdown);
                    return 'nothing'
                }}>
                <BsXLg size={22} color={theme.headerIconsBg} />
              </Button>


    <>
      {dropdownValues.map((dropdownValue) =>
        dropdownValue.id === "walletAddress" ? (
          <ItemHead>
            <Span
              margin="11px 22px 11px 2px"
              size="16px"
              textTransform="uppercase"
              color="#fff"
              width="max-content"
            >
              <MobileAddress>
                {shortenText(dropdownValue?.title,3)}
              </MobileAddress>
            </Span>
           {dropdownValue?.invertedIcon && <Image
              src={dropdownValue?.invertedIcon}
              alt="icon"
              width="auto"
              cursor="pointer"
              filter="brightness(0) invert(1)"
              onClick={() => {
                copyToClipboard(dropdownValue?.value);
              }}
            />}
            {dropdownValue?.icon && <Image
              src={dropdownValue?.icon}
              alt="icon"
              width="auto"
              cursor="pointer"
              onClick={() => {
                copyToClipboard(dropdownValue?.value);
              }}
            />}
          </ItemHead>
        ) : (
          <BodyH>
             {dropdownValue?.invertedIcon && <Image
              src={dropdownValue.invertedIcon}
              alt="icon"
              width="max-content"
              spacing="1px"
              filter={theme.snackbarBorderIcon}
            />}
            {dropdownValue?.icon && <Image
              src={dropdownValue.icon}
              alt="icon"
              width="max-content"
              spacing="1px"
            />}
            {!dropdownValue?.link && dropdownValue?.function && (
              <Span
                width="max-content"
                color={theme.snackbarBorderText}
                margin="10px 20px"
                weight="400"
                size="16px"
                cursor="pointer"
                width="max-content"
                onClick={() => {
                setShowDropdown(false);
                  dropdownValue?.function()
                
                }}
              >
                {dropdownValue.title}
              </Span>
            )}
            {dropdownValue?.link && (
              <A
                width="max-content"
                href={dropdownValue?.link}
                target="_blank"
                rel="nofollow"
                margin="10px 20px"
                weight="400"
                size="16px"
                width="max-content"
                color={theme.snackbarBorderText}
                hoverBG="transparent"
              >
                {dropdownValue.title}
              </A>
            )}
          </BodyH>
        )
      )}
    </>

        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background: ${props => props.theme.default.bg};;
    align-items: flex-start;
    overflow: hidden;
`

const SpanAddress= styled(Span)`
  margin: 11px 22px 11px 2px;
  font-weight: 600;
  size: 15px;
  text-transform: uppercase;
  color: #fff;
  width: max-content;
`
const MobileAddress= styled(SpanAddress)`
  @media (min-width: 993px) {
    display: none;
  }
`

const ItemHead = styled(ItemH)`
    background: linear-gradient(87.17deg, #B6A0F5 0%, #F46EF7 57.29%, #FF95D5 100%);
    border-radius: 13px;
    padding: 2px 12px;
    flex-wrap: nowrap;
    margin:0px auto 8px auto;
    width: 80%;
    max-height: 42px !important;
    justify-content: space-between
`

const BodyH = styled(ItemH)`
    wrap: nowrap;
    margin: 8px 0;
    max-height: 50px !important;
    margin:0px 0 8px 40px;
`

export default ProfileModal;