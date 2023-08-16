import React from 'react'
import {Link} from "react-router-dom"



import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'







export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
           
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}

<Link to={'/'}>Homepage</Link>
<Link to={'/login'}>Login</Link>
<Link to={'/admin'}>Admin</Link>
<Link to={'/cart'}>Cart</Link>

            </HStack>
          </HStack>
          <>username</>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link to={'/'}>Homepage</Link>
<Link to={'/login'}>Login</Link>
<Link to={'/admin'}>Admin</Link>
<Link to={'/cart'}>Cart</Link>
            </Stack>
          </Box>
        ) : null}
       
    
      </Box>

     
    </>
  )
}