// React + Web3 Essentials
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2,SectionV2,SpanV2 } from 'components/reusables/SharedStylingV2';
import InfoLogo from "../../assets/inforWithoutBG.svg";
import { Button } from 'primaries/SharedStyling';

const YieldPushFeeV2 = () => {

    const theme = useTheme();

    return (
        <Container>
        {/* Top Section */}
        <ItemVV2 margin="0px 0px 20px 0px">
            <Heading>PUSH Staking Pool</Heading>
            <SecondaryText>
                Current APR <SpanV2 color="#D53A94">9.89%</SpanV2>
            </SecondaryText>
        </ItemVV2>

        {/* Body Section */}
        <ItemVV2
            
        >
            {/* Reward Section */}
            <RewardsContainer>
                <ItemVV2 margin="0px 18px 0px 0px" padding="10px">
                    <SecondaryText>Current Reward</SecondaryText>
                    <H2V2
                        fontSize="24px"
                        fontWeight="700"
                        color="#D53A94"
                        letterSpacing="-0.03em"
                    >
                        24,900 PUSH
                    </H2V2>
                </ItemVV2>

                <Line width="10px" height="100%"></Line>

                <ItemVV2 margin="0px 0px 0px 18px" padding="10px">
                    <SecondaryText>Total Staked</SecondaryText>
                    <H2V2
                        fontSize="24px"
                        fontWeight="700"
                        letterSpacing="-0.03em"
                        color={theme.fontColor}
                    >
                        12.725 Uni-V2
                    </H2V2>
                </ItemVV2>
            </RewardsContainer>

            {/* Epoch Text */}
            <EpochText>
                Current Epoch 100/100
            </EpochText>

            {/* Deposit Cash Data */}
            <ItemVV2 >
                <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                    <DataTitle>
                        User Deposit
                        <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                    </DataTitle>
                    <DataValue> 0 PUSH</DataValue>
                </ItemHV2>
                <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                    <DataTitle>
                        Rewards Claimed
                        <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                    </DataTitle>
                    <DataValue> 0 PUSH</DataValue>
                </ItemHV2>
                <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                    <DataTitle>
                        Current Epoch Reward
                        <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                    </DataTitle>
                    <DataValue> 0 PUSH</DataValue>
                </ItemHV2>
                <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                    <DataTitle>
                        Available for Claiming
                        <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                    </DataTitle>
                    <DataValue> 0 PUSH</DataValue>
                </ItemHV2>

            </ItemVV2>

        </ItemVV2>

        {/* Bottom Section */}
        <ItemVV2 padding=" 0px 14px" margin="24px 0px 0px 0px">
                <ButtonsContainer>
                    <FilledButton style={{margin:"0px 10px 0px 0px"}}>Stake PUSH</FilledButton>
                    <EmptyButton>Unstake PUSH</EmptyButton>
                </ButtonsContainer>
                
            <ButtonsContainer>
                <EmptyButton style={{margin:"0px 10px 0px 0px"}}>Claim Rewards</EmptyButton>
                <EmptyButton>Migrate to V3</EmptyButton>
            </ButtonsContainer>
        </ItemVV2>
    </Container>
    );
};

export default YieldPushFeeV2;

const Container = styled(SectionV2)`
    border: 1px solid ${(props)=>props.theme.modalSearchBarBorderColor};
    border-radius: 24px;
    padding:20px;
    margin:10px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;

`;

const Heading = styled(H2V2)`
    font-size: 24px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: ${(props)=>props.theme.modalMessageColor};

`
const SecondaryText = styled.p`
    margin:0px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: ${(props)=>props.theme.modalMessageColor};
`

const RewardsContainer = styled(ItemHV2)`
    border: 1px solid ${(props)=>props.theme.modalSearchBarBorderColor};
    border-radius:16px;
`

const Line = styled.div`
    width: 1px;
    height: 100%;
    background:${(props)=>props.theme.modalSearchBarBorderColor};
`
const DataTitle = styled.div`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: ${(props)=>props.theme.modalDescriptionTextColor};
    display: flex;
    justify-content: center;
    align-items: center;

`

const DataValue = styled(H2V2)`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color:${(props)=>props.theme.modalMessageColor};
`

const EpochText = styled(ItemHV2)`
    align-self:end;
    margin:12px 13px 24px 0px;
    letter-spacing:-0.03em;
    color: ${(props)=>props.theme.modalDescriptionTextColor};
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    margin:15px 0px 0px 0px;
`


const FilledButton = styled(ButtonV2)`
    width:100%;
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    padding: 12px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    cursor:pointer;
    & > div{
        display:block;
    }
    
`;

const EmptyButton = styled(Button)`
    border: 1px solid ${(props)=>props.theme.default.secondaryColor};
    border-radius: 8px;
    padding: 12px;
    background:transparent;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color:${(props)=>props.theme.default.secondaryColor};   
    flex:1;
    cursor:pointer;
    & > div{
        display:block;
    }

    &:after{
        background:transparent;
    }

    &:hover{
        border-color:#D53A94;
        color: #D53A94;
    }
`
