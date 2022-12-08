import React from 'react'
import { Navbar, Button, Text } from '@nextui-org/react'
import { useProSidebar } from 'react-pro-sidebar'
import { Link, useLocation } from 'react-router-dom'

export default function NavbarComponent() {
  let location = useLocation()


  function checkLocation(path) {
    if (location.pathname === path)
      return true
    else
      return false
  }

  const { collapseSidebar } = useProSidebar()

  return (
    <Navbar isBordered variant="sticky" maxWidth={"fluid"} blur='10px'>
        <Navbar.Brand>
          <Button auto onPress={() => collapseSidebar()}>AGG</Button>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant={"underline"} >
            <Navbar.Item isActive={checkLocation("/")}>
              <Button auto light size={'xl'}>
                <Link to="/">
                  <Text color='white'>
                    Home
                  </Text>
                </Link>
              </Button>
            </Navbar.Item>
            <Navbar.Item isActive={checkLocation("/profil/test")}>
              <Button auto light size={'xl'}>
                <Link to="/profil/test">
                  <Text color='white'>
                    Profil
                  </Text>
                </Link>
              </Button>
            </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item isActive={checkLocation("/login")} variant={"underline"}>
            <Button auto light size={'xl'}>
              <Link to="/login">
                <Text color='white'>
                  Login
                </Text>
              </Link>
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat size={'xl'}>
              <Link to="./register"> 
                <Text color='white'>
                  Sign Up
                </Text>
              </Link>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
    </Navbar>
  )
}
