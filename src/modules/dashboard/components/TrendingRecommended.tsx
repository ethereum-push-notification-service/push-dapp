import { FC, useState } from 'react';
import { Box, Text } from 'blocks';

import { RecommendedSnap } from './RecommendedSnap';
import { TrendingSubscribed } from './TrendingSubscribed';
export type TrendingRecommendedProps = {};

const TrendingRecommended: FC<TrendingRecommendedProps> = () => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="var(--r6)"
      padding="s6"
      display="flex"
      gap="s6"
      flexDirection={{ ml: 'column' }}
      justifyContent="space-between"
    >
      <TrendingSubscribed />
      <RecommendedSnap />
    </Box>
  );
};

export { TrendingRecommended };
