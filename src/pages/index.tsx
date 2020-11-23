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
        <Box sx={{ width: '100%', maxHeight: '533px' }}>
          <Image
            src="/profile.jpg"
            alt="Profile"
            layout="responsive"
            height={533}
            width={800}
            quality={100}
          />
          <motion.svg
            width="400"
            height="300"
            initial={false}
            viewBox={`0 0 ${viewBoxHeight} 400`}
            style={{
              position: 'absolute',
              bottom: theme,
              right: '-150px'
            }}
          >
          <motion.path
            d="M18 115L27.86 115.7L37.72 115L46.87 112.18L55.32 107.96L63.07 101.62L71.52 93.87L76.45 86.13L79.97 76.97L76.45 68.52L68 71.34L63.07 79.08L61.66 90.35L61.66 101.62L61.66 113.59L60.25 125.56L57.44 138.94L53.21 150.92L50.39 159.37L45.46 170.63L39.13 183.31L32.79 193.87L27.86 201.62L20.11 207.96L14.48 195.99L14.48 186.13L15.18 176.27L20.82 167.11L27.15 158.66L34.2 151.62L45.46 143.87L57.44 135.42L70.82 127.68L81.38 122.75L91.24 117.82L102.51 113.59L95.46 121.34L87.72 129.08L80.68 138.94L75.75 146.69L72.93 155.85L72.23 165L80.68 168.52L87.72 158.66L91.94 148.8L96.17 137.54L100.39 127.68L102.51 117.82L104.62 128.38L104.62 137.54L104.62 146.69L104.62 155.85L104.62 167.11L111.66 157.96L115.89 143.17L120.11 129.08L125.04 119.23L134.2 119.93L136.31 129.08L137.01 142.46L137.01 153.73L138.42 143.17L141.94 131.2L144.76 122.75L149.69 114.3L158.14 110.77L168 119.23L170.82 134.72L171.52 143.87L172.23 157.25L172.23 166.41L172.23 175.56L174.34 160.77L177.15 152.32L179.97 143.87L187.01 132.61L194.76 124.86L202.51 119.23L210.25 115L201.8 119.93L195.46 126.97L190.54 135.42L189.83 145.28L194.76 154.44L203.21 157.25L214.48 155.14L224.34 150.21L233.49 143.87L241.94 135.42L247.58 127.68L250.39 119.23L242.65 114.3L234.2 121.34L228.56 130.49L228.56 140.35L232.79 151.62L241.94 157.96L251.8 160.07L260.96 160.07L272.93 155.85L282.08 149.51L288.42 143.17L294.76 134.72L301.1 127.68L306.03 119.23"
            fill="transparent"
            stroke="#E5E5E5"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            transition={{
              duration: 2,
            }}
            animate={{ pathLength: [0, 0.25, 0.5, 1] }}
          />
        </motion.svg>
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
                  <motion.svg
          width="400"
          height="400"
          initial={false}
          viewBox="0 0 200 400"
          style={{
            position: 'absolute',
            // bottom: '-75px',
            left: '0px',
            top: '0px'
          }}
        >
          <motion.path
            d="M18 115L27.86 115.7L37.72 115L46.87 112.18L55.32 107.96L63.07 101.62L71.52 93.87L76.45 86.13L79.97 76.97L76.45 68.52L68 71.34L63.07 79.08L61.66 90.35L61.66 101.62L61.66 113.59L60.25 125.56L57.44 138.94L53.21 150.92L50.39 159.37L45.46 170.63L39.13 183.31L32.79 193.87L27.86 201.62L20.11 207.96L14.48 195.99L14.48 186.13L15.18 176.27L20.82 167.11L27.15 158.66L34.2 151.62L45.46 143.87L57.44 135.42L70.82 127.68L81.38 122.75L91.24 117.82L102.51 113.59L95.46 121.34L87.72 129.08L80.68 138.94L75.75 146.69L72.93 155.85L72.23 165L80.68 168.52L87.72 158.66L91.94 148.8L96.17 137.54L100.39 127.68L102.51 117.82L104.62 128.38L104.62 137.54L104.62 146.69L104.62 155.85L104.62 167.11L111.66 157.96L115.89 143.17L120.11 129.08L125.04 119.23L134.2 119.93L136.31 129.08L137.01 142.46L137.01 153.73L138.42 143.17L141.94 131.2L144.76 122.75L149.69 114.3L158.14 110.77L168 119.23L170.82 134.72L171.52 143.87L172.23 157.25L172.23 166.41L172.23 175.56L174.34 160.77L177.15 152.32L179.97 143.87L187.01 132.61L194.76 124.86L202.51 119.23L210.25 115L201.8 119.93L195.46 126.97L190.54 135.42L189.83 145.28L194.76 154.44L203.21 157.25L214.48 155.14L224.34 150.21L233.49 143.87L241.94 135.42L247.58 127.68L250.39 119.23L242.65 114.3L234.2 121.34L228.56 130.49L228.56 140.35L232.79 151.62L241.94 157.96L251.8 160.07L260.96 160.07L272.93 155.85L282.08 149.51L288.42 143.17L294.76 134.72L301.1 127.68L306.03 119.23"
            fill="transparent"
            stroke="#E5E5E5"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            transition={{
              duration: 2,
            }}
            animate={{ pathLength: [0, 0.25, 0.5, 1] }}
          />
        </motion.svg>
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
