/** @jsx */
import { FunctionComponent } from 'react';
import { jsx, Heading, Container, Text, Flex, Box } from 'theme-ui';
import Image from 'next/image';

const About: FunctionComponent = (): JSX.Element => {
  
  return (
    <Container sx={{ backgroundColor: 'secondary', height: '100%' }}>
      <Heading as="h1" sx={{ color: 'background', textAlign: 'center', padding: 3 }}>Thomas Lance McCluskey</Heading>
      <Flex sx={{ margin: 4, paddingBottom: 5 }}>
        <Box sx={{ position: 'relative', width: '100%', alignSelf: 'center' }}>
        <Image
          src="https://via.placeholder.com/600.png"
          alt="AboutOne"
          layout="responsive"
          height="600"
          width="600"
        />
        </Box>
        <Text sx={{ color: 'background', marginLeft: 3, alignSelf: 'center', maxWidth: '50vw'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Flex>
      <Flex sx={{ margin: 4, paddingBottom: 5 }}>
        <Text sx={{ color: 'background', maxWidth: '50vw', alignSelf: 'center', marginRight: 3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Box sx={{ position: 'relative', width: '100%', alignSelf: 'center' }}>
        <Image
          src="https://via.placeholder.com/300.png"  
          alt="AboutTwo"
          layout="responsive"
          height="300"
          width="300"
        />
        </Box>
      </Flex>
      <Flex sx={{ margin: 4, paddingBottom: 5 }}>
        <Box sx={{ position: 'relative', width: '100%', alignSelf: 'center' }}>
        <Image
          src="https://via.placeholder.com/300.png"
          alt="AboutThree"
          layout="responsive"
          height="300"
          width="300"
        />
        </Box>
        <Text sx={{ color: 'background', maxWidth: '50vw', alignSelf: 'center', marginLeft: 3 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          
        </Text>
      </Flex>
    </Container>
  );
};

export default About;
