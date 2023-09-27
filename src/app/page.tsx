'use client'
import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import Main from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';

const Index = () => (
  <Container height="100vh">
    <Hero />
    <DarkModeSwitch />
    <Main />
     
    <Footer>
      <a href="https://github.com/Cadufc91" target='_blank'><AiFillGithub size={30}/></a>
      <a href="https://www.linkedin.com/in/carloseduardo-fernandes/" target='_blank'><AiFillLinkedin size={30} /></a>
    </Footer>
  </Container>
)

export default Index;
