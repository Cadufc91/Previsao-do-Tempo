import { Flex } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => (
  <Flex as="footer" py="7rem" gap='10px'> 
    <a href="https://github.com/Cadufc91" target='_blank'><AiFillGithub size={30}/></a>
    <a href="https://www.linkedin.com/in/carloseduardo-fernandes/" target='_blank'><AiFillLinkedin size={30} /></a>
  </Flex>
)
