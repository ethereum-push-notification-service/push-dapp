// React + Web3 Essentials
import React from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

// External Packages
import styled, { css, useTheme } from 'styled-components';

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { Anchor, RouterLink } from 'primaries/SharedStyling';
import { ImageV2, ItemHV2, ItemVV2, SpanV2 } from './reusables/SharedStylingV2';

// Internal Configs
import GLOBALS from 'config/Globals';
import { nothing } from 'immer';
import { AppContext } from 'contexts/AppContext';

// Create Header
function MobileNavButton({ item, data, sectionID, active, bg = 'none', showNavBar, setShowNavBar }) {
  const theme = useTheme();

  const { showMetamaskPushSnap } = React.useContext(AppContext);

  let SelectedIcon;
  let RouteLogic;
  let definedMargin;

  switch (sectionID) {
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.MOBILE:
      SelectedIcon = LeftBarPrimaryItemIcon;
      definedMargin = '5px';
      break;
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY:
      SelectedIcon = item.isSection ? LeftBarSecondarySectionIcon : LeftBarSecondaryItemIcon;
      definedMargin = item.isSection ? '0px' : '5px';
      break;
    case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.THIRD:
      SelectedIcon = item.isSection ? LeftBarSecondarySectionIcon : LeftBarSecondaryItemIcon;
      definedMargin = item.isSection ? '0px' : '5px';
      break;
    default:
      SelectedIcon = item.isSection ? LeftBarPrimarySectionIcon : LeftBarPrimaryItemIcon;
      definedMargin = item.isSection ? '0px' : '5px';
  }

  if (data.isRoute) {
    RouteLogic = RouterLink;
  } else {
    RouteLogic = Anchor;
  }

  return (
    <>
      {data.loading && (
        <ItemVV2
          alignSelf="flex-start"
          padding="0px 15px"
        >
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            completed={false}
            spinnerSize={20}
            spinnerColor={(props) => props.theme.nav.color}
          />
        </ItemVV2>
      )}

      {!data.loading && !data.hidden && (
        <RouteLogic
          style={{ display: data.name === 'Hide' ? 'none' : 'block' }}
          flex="1"
          title={`${data.title}`}
          to={`${data.href ? data.href : '#'}`}
          href={`${data.href ? data.href : '#'}`}
          alt={`${data.alt}`}
          target={data.isRoute ? null : data.newTab ? '_blank' : 'self'}
          disabled={data.disabled}
          radius="16px"
          align="stretch"
          margin={definedMargin}
          padding="10px 15px 10px 0px"
          bg={bg}
          hover={'transparent'}
          hoverBG={'transparent'}
          onClick={() => {
            if (item.data.drilldown) {
              return nothing;
            } else {
              setShowNavBar(!showNavBar);
            }
          }}
          className={data?.name?.toLowerCase()}
        >
          {data.iconFactory ? (
            <ItemHV2
              justifyContent="flex-start"
              padding="0 0rem"
            >
              {data.iconFactory}
            </ItemHV2>
          ) : (
            <ItemHV2 alignItems="center">
              {!active ? (
                <SelectedIcon
                  src={require(`../assets/${data.src}`)}
                  margin="0 5px"
                  alt={`${data.alt}`}
                  active={active}
                />
              ) : (
                <SelectedIcon
                  src={require(`../assets/${data.activeSrc}`)}
                  margin="0 5px"
                  alt={`${data.alt}`}
                  active={active}
                />
              )}

              <SpanV2
                flex="1"
                fontWeight={!active ? '300' : '600'}
                letterSpacing="0"
                margin="0 10px"
                color={theme.nav.color}
                onClick={data?.hasOnClickFunction && showMetamaskPushSnap}
                minWidth="100px"
                fontSize="17px"
                textAlign="left"
              >
                {data.name}
              </SpanV2>

              {data?.showNewTag && <NewTag>New</NewTag>}

              {item.hasItems && !item.opened && <BiChevronDown color={theme.nav.color} />}

              {item.hasItems && item.opened && <BiChevronUp color={theme.nav.color} />}
            </ItemHV2>
          )}
        </RouteLogic>
      )}
    </>
  );
}

// css styles
const InheritedSectionGroupIcon = styled(ImageV2)`
  height: 25px;
  width: 25px;
  margin: 0 5px;

  @media (max-width: 992px) {
    margin: 0px 0px;
  }

  ${(props) =>
    props.active &&
    css`
      transform: scale(1.1) translate(0px, 0px);
    `};
`;

const InheritedSectionItemIcon = styled(ImageV2)`
  height: 25px;
  width: 25px;
  margin: 0 5px;

  @media (max-width: 992px) {
    margin: 0px 0px;
  }

  ${(props) =>
    props.active &&
    css`
      transform: scale(1.25) translate(0px, 0px);
    `};
`;

const LeftBarPrimarySectionIcon = styled(InheritedSectionGroupIcon)``;

const LeftBarPrimaryItemIcon = styled(InheritedSectionItemIcon)``;

const LeftBarSecondarySectionIcon = styled(InheritedSectionGroupIcon)`
  height: 25px;
  width: 25px;
`;

const LeftBarSecondaryItemIcon = styled(InheritedSectionItemIcon)``;

const NewTag = styled(SpanV2)`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #d53a94;
  margin-left: 10px;
  padding: 2px 6px;
  background: #f3d7fa;
  border-radius: 6px;
  height: 17px;
  width: fit-content;
`;

// Export Default
export default MobileNavButton;
