/** @jsx */
import { jsx, Flex, NavLink, MenuButton, Box } from 'theme-ui';
import { useResponsiveValue, useBreakpointIndex } from '@theme-ui/match-media';
import { FunctionComponent, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useCycle } from 'framer-motion';
import { NavMenu } from './NavMenu';
import { NavMenuToggle } from './NavMenuToggle';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' }
};

const pages = ['about', 'portfolio', 'resume', 'contact', 'blog'];


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const backgroundStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '300px',
  background: '#E5E5E5',
};

const StyledNav = styled(motion.nav)`
  margin-right: 32px;
`;

export const Navigation: FunctionComponent = (): JSX.Element => {
  const [open, toggleOpen] = useCycle(false, true);

  const index = useBreakpointIndex();
  const theme = useResponsiveValue(['red', 'green', 'blue']);

  return (
    <Flex as="nav" sx={{ justifyContent: 'space-between', height: '55px', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: 'background' }}>
      <Link href="/">
        <NavLink sx={{ cursor: 'pointer', marginLeft: 3, marginTop: 1 }}>
          <Image src="/tlm-logo.svg" alt="Logo" width={212} height={50} quality={100} />
        </NavLink>
      </Link>
      {
        index < 1
          ? (
            <StyledNav
              initial={false}
              animate={open ? "open" : "closed"}
            >
              <NavMenuToggle toggle={() => toggleOpen()} />
              <NavMenu pages={pages} open={open} />
            </StyledNav>
          )
          : (
          <Fragment>
            <Link href="/about">
              <NavLink sx={{ cursor: 'pointer' }}>About</NavLink>
            </Link>
            <Link href="/portfolio">
              <NavLink sx={{ cursor: 'pointer' }}>Portfolio</NavLink>
            </Link>
            <Link href="/resume">
              <NavLink sx={{ cursor: 'pointer' }}>Resume</NavLink>
            </Link>
            <Link href="/contact">
              <NavLink sx={{ cursor: 'pointer' }}>Contact</NavLink>
            </Link>
            <Link href="/blog">
              <NavLink sx={{ cursor: 'pointer', marginRight: 4}}>Blog</NavLink>
            </Link>
          </Fragment>
          )
      }
    </Flex>
  );
};
