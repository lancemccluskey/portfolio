/** @jsx */
import { jsx, MenuButton } from 'theme-ui';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimatedMenuButton = motion.custom(MenuButton);

const StyledAnimationButton = styled(AnimatedMenuButton)`
  && {
    cursor: pointer;
    width: 38px;
    height: 38px;
    outline: none;

    svg {
      width: 38px;
      height: 38px;
    }
  }
`;

interface INavMenuToggle {
  toggle: () => void;
};

export const NavMenuToggle: FunctionComponent<INavMenuToggle> = ({ toggle }): JSX.Element => {
  return (
    <StyledAnimationButton
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
      onTap={toggle}
    />
  );
};
