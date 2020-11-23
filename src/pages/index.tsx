/** @jsx jsx */
import { FunctionComponent, useEffect } from 'react';
import { jsx, Flex, Box, Heading, Text } from 'theme-ui';
import { useResponsiveValue, useBreakpointIndex } from '@theme-ui/match-media';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'hooks';

const AnimatedHeading = motion.custom(Heading);

const AnimatedText = motion.custom(Text);

const Home: FunctionComponent = (): JSX.Element => {
  const isBreakpoint = useMediaQuery(832);
  const index = useBreakpointIndex();
  // x < 640, 640 <= x < 832, 832 <= x < 1024, 1024 <= x
  const theme = useResponsiveValue(['250px', '-50px', '-200px', '-75px']);
  const viewBoxHeight = useResponsiveValue(['500', '400', '300', '200']);

  useEffect(() => {
    console.log('index', index);
    console.log('theme', theme);
    console.log('breakpoint', theme[index]);
  }, [theme, index]);
  
  if (isBreakpoint) {
    return (
      <Flex sx={{ flexDirection: 'column' }}>
        <Box sx={{ width: '100%', zIndex: -5, maxHeight: '533px' }}>
          <Image
            src="/profile.jpg"
            alt="Profile"
            layout="responsive"
            height={533}
            width={800}
            quality={100}
          />
        </Box>
        <Box sx={{ textAlign: 'center', margin: 3 }}>
          <AnimatedHeading
            as="h1"
            sx={{ color: 'muted', alignSelf: 'center', marginBottom: 2 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, x: 0 }}
          >Engineer.
          </AnimatedHeading>
          <AnimatedHeading
            as="h1"
            sx={{ color: 'muted', alignSelf: 'center', marginBottom: 2 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={{ opacity: 1, x: 0 }}
          >Veteran.
          </AnimatedHeading>
          <AnimatedHeading
            as="h1"
            sx={{ color: 'muted', alignSelf: 'center', marginBottom: 2 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 1 }}
            animate={{ opacity: 1, x: 0 }}
          >Husband.
          </AnimatedHeading>
          <AnimatedHeading
            as="h1"
            sx={{ color: 'muted', alignSelf: 'center', marginBottom: 2 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 1.5 }}
            animate={{ opacity: 1, x: 0 }}
          >Father.
          </AnimatedHeading>
          <AnimatedText
            sx={{ color: 'muted' }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            animate={{ opacity: 1 }}
          >
          Welcome! Feel free to take a look around and get to know me. 
          </AnimatedText>
        </Box>
      </Flex>
    );
  } else {
    return (
      <Flex sx={{ flexDirection: 'row', width: '100vw' }}>
        <Box sx={{ width: '100%', zIndex: -5, maxHeight: '533px', flexGrow: 1 }}>
        <Image
          src="/profile.jpg"
          alt="Profile"
          layout="responsive"
          height={533}
          width={800}
          quality={100}
          />
        </Box>
        <Box sx={{ textAlign: 'center', margin: 3, flexGrow: 1, alignSelf: 'center' }}>
        <AnimatedHeading
            as="h1"
            sx={{ color: 'muted', alignSelf: 'center', marginBottom: 2 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, x: 0 }}
          >Engineer.
          </AnimatedHeading>
          <AnimatedHeading
            as="h1"
            sx={{ color: 'muted', alignSelf: 'center', marginBottom: 2 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={{ opacity: 1, x: 0 }}
          >Veteran.
          </AnimatedHeading>
          <AnimatedHeading
            as="h1"
            sx={{ color: 'muted', alignSelf: 'center', marginBottom: 2 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 1 }}
            animate={{ opacity: 1, x: 0 }}
          >Husband.
          </AnimatedHeading>
          <AnimatedHeading
            as="h1"
            sx={{ color: 'muted', alignSelf: 'center', marginBottom: 2 }}
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1, delay: 1.5 }}
            animate={{ opacity: 1, x: 0 }}
          >Father.
          </AnimatedHeading>
          <AnimatedText
            sx={{ color: 'muted' }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            animate={{ opacity: 1 }}
          >
          Welcome! Feel free to take a look around and get to know me. 
          </AnimatedText>
        </Box>
      </Flex>
    );
  }
};

export default Home;
