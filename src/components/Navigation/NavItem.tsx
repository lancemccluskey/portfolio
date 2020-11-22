/** @jsx */
import { jsx, NavLink } from 'theme-ui';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

interface INavItemProps {
  page: string;
};

export const NavItem: FunctionComponent<INavItemProps> = ({ page }): JSX.Element => {
  return (
    <motion.div
      style={{ cursor: 'pointer', margin: 2 }}
      variants={variants}
    >
      <Link href={`/${page}`}>
        <NavLink>
          {page}
        </NavLink>
      </Link>
    </motion.div>
  );
};
