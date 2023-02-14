// React + Web3 Essentials
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { Fragment } from "react";

// External Packages
import styled from "styled-components";

// Internal Components
import FaucetInfo from "./FaucetInfo";
import { Button, Item, Span } from "primaries/SharedStyling";

// Internal Configs
import { abis, addresses } from "config";
import { useDeviceWidthCheck } from "hooks";
import { device } from "config/Globals";

const StakingInfo = ({channelStakeFees, setStakeFeesChoosen, setStepFlow,setProcessingInfo}) => {
  const { library, account } = useWeb3React();

  const isMobile = useDeviceWidthCheck(600)
  
  // mint PUSH token
  const mintPushTokenHandler = async (noOfTokens: number) => {
    try {
      var signer = library.getSigner(account);
      let pushTokenContract = new ethers.Contract(addresses.pushToken, abis.pushToken, signer);
      console.log({
        pushTokenContract,
      });
      console.log(1);
      let pushTokenAmount = noOfTokens;
      const amount = ethers.utils.parseUnits(pushTokenAmount.toString(), 18);
      console.log(amount);
      var mintTransactionPromise = pushTokenContract.mint(amount);
      console.log(3);
      const tx = await mintTransactionPromise;
      console.log(tx);
      await library.waitForTransaction(tx.hash);
      console.log(4);
      setProcessingInfo(noOfTokens+" PUSH Tokens minted successfully!");
      console.log("Transaction Completed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      {/* <Content padding="0px 0px 0px 0px"> */}
        <ItemContent>
          <Item self="center" maxWidth="800px" width="100%">
            <TabSpace>
              <p>
                Amount for Staking
              </p>

              <b>
              {channelStakeFees} PUSH
              </b>
            </TabSpace>
            <FaucetInfo onMintPushToken={mintPushTokenHandler}  />
          </Item>

        <Item width="12.2em" self="stretch" align="stretch" margin={isMobile ? "70px auto 50px auto" : "100px auto 50px auto"}>
          <Button
            bg="#e20880"
            color="#fff"
            flex="1"
            radius="15px"
            padding="20px 10px"
            onClick={() => {
              setStakeFeesChoosen(true);
              setStepFlow(1);
            }}
          >
            <Span
              color="#fff"
              weight="600"
              textTransform="none"
              line="22px"
              size="16px"
            >
              Next
            </Span>
          </Button>
        </Item>
      </ItemContent>
      {/* </Content> */}
    </Fragment>
  );
};
const TabSpace = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-radius: 20px;
  background-color: #f4f5fa;
  margin-top: 20px;
  align-items: center;
  transform: translateY(40px);

  @media ${device.tablet} {
    width: 100%;
  }

  p {
    text-align: center;
    color: #1E1E1E;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.011em;
    margin-left:50px;
    @media (max-width: 768px) {
      margin-left:20px;
      font-size: 18px;
    }
  }
  b {
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 150%;
    text-align: right;
    letter-spacing: -0.019em;
    color: #CF1C84;
    margin-right:50px;
    @media (max-width: 758px) {
    margin-right:20px;
    font-size: 26px;
    }
  }
`;

const ItemContent = styled(Item)`
    padding: 5px 0 0 0;
    self: stretch;
    align: flex-start;
    justify: center;
`

export default StakingInfo;