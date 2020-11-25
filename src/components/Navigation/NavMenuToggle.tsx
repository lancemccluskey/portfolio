/** @jsx */
import { jsx } from 'theme-ui';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface INavMenuToggle {
  toggle: () => void;
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#E5E5E5"
    strokeLinecap="round"
    {...props}
  />
);

export const NavMenuToggle: FunctionComponent<INavMenuToggle> = ({ toggle }) => {

 return (  <motion.button
    onClick={toggle}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    style={{ outline: 'none', border: 'none', cursor: 'pointer', background: 'transparent' }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </motion.button>)
};
