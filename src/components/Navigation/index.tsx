/** @jsx */
import { jsx, Flex, NavLink, MenuButton, Box, Container, CSSProperties } from 'theme-ui';
import { useResponsiveValue, useBreakpointIndex } from '@theme-ui/match-media';
import { FunctionComponent, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useCycle } from 'framer-motion';
import { NavMenu } from './NavMenu';
import { NavMenuToggle } from './NavMenuToggle';

// const pages = ['home', 'about', 'portfolio', 'resume', 'contact', 'blog'];
const pages = ['home', 'about'];

const sidebar = {
  open: {
    clipPath: `circle(2200px at 150px 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    },
    background: '#232324'
  },
  closed: {
    clipPath: "circle(24px at 149px 25px)",
    transition: {
      delay: 0.15,
      type: "spring",
      stiffness: 400,
      damping: 40
    },
    background: '#434BE7'
  },
};

const backgroundStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '200px',
  background: '#E5E5E5',
  zIndex: -1,
  height: '100vh'
};

const StyledNav = styled(motion.nav)`
  margin-right: 32px;
`;

export const Navigation: FunctionComponent = (): JSX.Element => {
  const [open, toggleOpen] = useCycle(false, true);

  const index = useBreakpointIndex();
  const theme = useResponsiveValue(['red', 'green', 'blue']);

  return (
    <Flex as="nav" sx={{ justifyContent: 'space-between', height: '55px', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: 'background', zIndex: 1 }}>
      <Link href="/">
        <NavLink sx={{ cursor: 'pointer', marginLeft: 3, marginTop: 1 }}>
          <Image
            src="/tlm-logo.svg"
            alt="Logo"
            width={212}
            height={50}
            quality={100}
          />
        </NavLink>
      </Link>
      {
        index < 1
          ? (
            <StyledNav
              initial={false}
              animate={open ? "open" : "closed"}
            >
              <motion.div style={backgroundStyle} variants={sidebar} />
              <NavMenuToggle toggle={() => toggleOpen()} />
              <NavMenu pages={pages} open={open} />
            </StyledNav>
          )
          : (
            <Flex sx={{ justifyContent: 'flex-start', width: '100%' }}>
              {
                pages.map((page, index) => (
                  <Link href={`/${page}`} key={index}>
                    <NavLink sx={{ cursor: 'pointer', marginLeft: '32px' }}>{page}</NavLink>
                  </Link>
                ))
              }
          </Flex>
          )
      }
    </Flex>
  );
};
