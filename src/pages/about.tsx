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
          src="/zebedie-and-i.jpg"
          alt="wife and I"
          layout="responsive"
          height="600"
          width="600"
        />
        </Box>
        <Text sx={{ color: 'background', marginLeft: 3, alignSelf: 'center', maxWidth: '50vw'}}>
          Hi there! My name is Lance and I have a true passion for technology. I started my career studying at Texas State University in San Marcos, Texas in 2018. I loved school so much I took 24 hours in a semester once! While at school I studied mainly C++ and taught myself Python in my spare time. Although I work full-time using JavaScript now, it was not until summer 2019 when I started an internship at YETI where I was first exposed to JavaScript.
        </Text>
      </Flex>
      <Flex sx={{ margin: 4, paddingBottom: 5 }}>
        <Text sx={{ color: 'background', maxWidth: '50vw', alignSelf: 'center', marginRight: 3 }}>
          At YETI I worked mainly in DevOps focusing on automating business workflows. I spent a lot of time on the ServiceNow platform writing custom JavaScript to support various business needs. I developed a love for frontend work here after developing a custom SPA in Angular for use within ServiceNow. I am not a relatively creative person by nature, but frontend work really helps bring out my creative side which I enjoy.
        </Text>
        <Box sx={{ position: 'relative', width: '100%', alignSelf: 'center' }}>
        <Image
          src="/kids-and-i.jpg"  
          alt="kids and I"
          layout="responsive"
          height="300"
          width="300"
        />
        </Box>
      </Flex>
      <Flex sx={{ margin: 4, paddingBottom: 5 }}>
        <Box sx={{ position: 'relative', width: '100%', alignSelf: 'center' }}>
        <Image
          src="/zoe-and-.jpg"
          alt="Zoe and I"
          layout="responsive"
          height="300"
          width="300"
        />
        </Box>
        <Text sx={{ color: 'background', maxWidth: '50vw', alignSelf: 'center', marginLeft: 3 }}>
          In 2020, I accepted a position at Volusion, a local ecommerce company in Austin, Texas. I was initially hired to help convert their Angular platform to React, but have also built an API Gateway, implement integrations with payment gateways like PayPal, and develop checkout experiences for both of their platforms. In my spare time I love hanging out with my wife and kids, studying for my Masters at UT at Austin, and contributing to Open Source.
        </Text>
      </Flex>
    </Container>
  );
};

export default About;
