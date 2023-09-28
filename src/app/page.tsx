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
  <Container height="100vh" overflow='hidden'>
    <Hero />
    <DarkModeSwitch />
    <Main />
    <Footer />
  </Container>
)

export default Index;
