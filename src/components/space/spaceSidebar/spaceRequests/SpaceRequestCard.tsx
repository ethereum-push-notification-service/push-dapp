import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import Image from "assets/space/push-space.svg";
import GLOBALS from 'config/Globals';
import { Space } from 'types';
import { shortenText } from 'helpers/UtilityHelper';

const SpaceRequestCard = (
    { spaceData }: { spaceData: Space }
) => {

    const theme = useTheme();

    const [selected, setSelected] = useState(false);

    return (
            <SpaceSnapContainer
                padding="10px 7px 10px 10px"
                margin="5px 5px 5px 0"
                alignSelf = "stretch"
                borderRadius={GLOBALS.ADJUSTMENTS.RADIUS.MID}
                //   onClick={onClick}
                background={selected ? theme.chat.snapFocusBg : 'transparent'}
                theme = {theme}
            >

                    <ItemHV2
                        width="48px"
                        maxWidth="48px"
                        maxheight= "48px"
                        height= "48px"
                        borderRadius="100%"
                        overflow="hidden"
                        margin="0"
                    >
                        <ImageV2
                            alt="Profile"
                            src={spaceData?.spaceImage}
                        />
                    </ItemHV2>

                <InfoContainer>
                    <HeadTextSection>
                        <PrimaryText>
                            {shortenText(spaceData?.spaceCreator, 6, 6)}
                        </PrimaryText>
                        <SecondaryText>
                            {spaceData?.scheduleAt ?? ' 4:30PM'}
                        </SecondaryText>
                    </HeadTextSection>

                    <SecondaryTextMessage>
                        {spaceData?.spaceName?.length > 27 ? spaceData?.spaceName?.slice(0, 27) + '...' : spaceData?.spaceName}
                    </SecondaryTextMessage>
                </InfoContainer>

            </SpaceSnapContainer>


    );
};

export default SpaceRequestCard;

const SpaceSnapContainer = styled(ItemHV2)`
  flex:unset;
  font-family: 'Strawford';
  font-style: normal;
  &:hover{
    background: ${(props)=>props.theme.chat.snapFocusBg}};
  }
`;


const InfoContainer = styled(ItemVV2)`
    align-items: baseline;
    display:flex;
    flex-direction: column;

    margin:0px 0px 0 11px;
    gap: 4px;
`

const HeadTextSection = styled(ItemHV2)`

`

const PrimaryText = styled.div`
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;
    letter-spacing: -0.019em;
    color:${(props)=>props.theme.default.color};
    flex:1;
`

const SecondaryText = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: ${(props)=>props.theme.default.secondaryColor};
    
    margin:0px;
`
const SecondaryTextMessage = styled(SecondaryText)`
    font-weight: 400;
    font-size: 15px;
`