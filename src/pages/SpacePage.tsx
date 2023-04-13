// React + Web3 Essentials
import React from 'react';

// External Packages
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import { SpaceModule } from 'modules/space';

// Internal Configs

// Space page
const SpacePage = () => {
  const { spaceid } = useParams();

  // update spaceid in global space context
  
  // RENDER
  return (
    <Container>
      <SpaceModule />
    </Container>
  );
}
export default SpacePage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;