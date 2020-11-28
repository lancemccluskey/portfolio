/** @jsx */
import { jsx, NavLink, Divider } from 'theme-ui';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
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
    <>
    <motion.div
        style={{
          cursor: 'pointer',
          width: '100%',
          height: '48px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        variants={variants}
        whileHover={{ scale: 1.25, color: '#434BE7' }}
    >
      <Link href={`/${page === 'home' ? '' : page}`}>
        <NavLink>
          {page}
        </NavLink>
      </Link>
      </motion.div>
      <Divider sx={{ width: '200px' }} />
    </>
  );
};
