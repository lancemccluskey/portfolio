/** @jsx */
import { jsx } from 'theme-ui';
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { NavItem } from './NavItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

interface INavMenuProps {
  pages: string[];
  open: boolean;
};

export const NavMenu: FunctionComponent<INavMenuProps> = ({ pages, open }): JSX.Element => {
  let style;
  if (open) {
    style = {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      width: '200px',
      right: 0,
      alignItems: 'center',
      top: 50
    }
  } else {
    style = {
      display: 'none',
      position: 'absolute'
    };
  }

  return (
    <motion.div
      style={style}
      variants={variants}
    >
      {pages.map((page, index) => (
        <NavItem page={page} key={index} />
      ))}
    </motion.div>
  );
};
