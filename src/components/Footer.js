import {
  Divider,
  HStack,
  Link,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <VStack
    py={5}
    bg={useColorModeValue('gray.100', 'gray.800')}
    fontSize="sm"
    fontWeight="600"
    transition="background 100ms linear"
  >
    <HStack>
      <fa-instagram-square size="20px" />
      <Link href="https://instagram.com/ilham.shff" isExternal>
        Made With ♥ by ilhamshf
      </Link>
      <Divider orientation="vertical" h="18px" />
      <Link
        href="https://rs-bed-covid-api.vercel.app/"
        isExternal
      >
        API Source
      </Link>
    </HStack>
  </VStack>
);

export default Footer;
