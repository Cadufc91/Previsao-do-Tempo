'use client'
import { useColorMode, IconButton } from '@chakra-ui/react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <IconButton
      position="fixed"
      top={4}
      right={4}
      icon={isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
      aria-label="Toggle Theme"
      colorScheme="green"
      onClick={toggleColorMode}
    />
  )
}
