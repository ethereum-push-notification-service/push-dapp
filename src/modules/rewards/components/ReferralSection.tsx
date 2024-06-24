import { FC, useRef, useState } from 'react';
import { css } from 'styled-components';

//hooks
import { useAccount, useCopy } from 'hooks';
import { useGetUserRewardsDetails } from 'queries';

//helpers
import { walletToCAIP10 } from 'helpers/w2w';

// components
import { Box, Button, Copy, Text, Referral, Skeleton } from 'blocks';

// Styles

export type ReferralSectionProps = {};

const ReferralSection: FC<RefferralSectionProps> = () => {
  const { isWalletConnected, account, connect } = useAccount();
  const caip10WalletAddress = walletToCAIP10({ account });

  const { data: userDetails, isSuccess, isLoading } = useGetUserRewardsDetails({ caip10WalletAddress });
  const { textRef, isCopied, copyToClipboard } = useCopy();

  const handleConnectWallet = () => {
    connect();
  };

  return (
    <Box
      display="flex"
      flexDirection={{ tb: 'column-reverse', initial: 'row' }}
      padding="s12"
      borderRadius="r6"
      backgroundColor={{ light: 'white', dark: 'gray-900' }}
      alignItems={{ tb: 'flex-start', initial: 'center' }}
      justifyContent="space-between"
      gap={{ tb: 's9' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="s9"
      >
        <Box>
          <Text
            variant="h3-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            Onboard Users on Push.
          </Text>
          <Text
            variant="h3-bold"
            color={{ light: 'gray-1000', dark: 'gray-100' }}
          >
            Earn Points.
          </Text>
          <Text
            variant="bm-regular"
            color="gray-500"
          >
            Earn +12% of any Points your invites earn, and +2% of any Points your invite’s invites earn.
          </Text>
        </Box>

        <Skeleton isLoading={isLoading}>
          {isWalletConnected && userDetails && (
            <Box
              display="flex"
              gap="s2"
              flexDirection={{ tb: 'column', initial: 'row' }}
            >
              <Box
                width={{ tb: '-webkit-fill-available', initial: '344px' }}
                display="flex"
                alignItems="center"
                padding="s3"
                borderRadius="r3"
                border={{ light: '1.5px solid gray-200', dark: 'none' }}
                backgroundColor={{ light: 'transparent', dark: 'gray-800' }}
              >
                <Text
                  variant="bs-regular"
                  ref={textRef}
                  color={{ light: 'gray-1000', dark: 'gray-100' }}
                >
                  https://app.push.org/rewards/dashboard?ref={userDetails?.userId}
                </Text>
              </Box>
              <Button
                leadingIcon={<Copy />}
                onClick={copyToClipboard}
              >
                {isCopied ? 'Copied' : 'Copy Link'}
              </Button>
            </Box>
          )}
        </Skeleton>

        {!isWalletConnected && (
          <Box>
            <Button
              size="small"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </Button>
          </Box>
        )}
      </Box>

      <Box height="auto">
        <Referral />
      </Box>
    </Box>
  );
};

export { ReferralSection };
