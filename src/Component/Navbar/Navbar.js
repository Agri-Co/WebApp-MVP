import React, {onPress} from 'react'
import { Navbar, Button, Text } from '@nextui-org/react'
import { useProSidebar } from 'react-pro-sidebar'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function NavbarComponent() {
  let location = useLocation()
  const navigate = useNavigate()

  function checkLocation(path) {
    if (location.pathname === path)
      return true
    else
      return false
  }

  const { collapseSidebar } = useProSidebar()

  function goto(path) {
    return (
      navigate(path)
    )
  }

  return (
    <Navbar isBordered variant="sticky" maxWidth={"fluid"} blur='10px'>
        <Navbar.Brand>
          <Button auto onPress={() => collapseSidebar()}>Sidebar</Button>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant={"underline"} >
            <Navbar.Item isActive={checkLocation("/")}>
              <Button auto light size={'xl'} onPress={() => goto("/")}>
                  <Text color='white'>
                    Home
                  </Text>
              </Button>
            </Navbar.Item>
            {/* <Navbar.Item isActive={checkLocation("/profil/test")}>
              <Button auto light size={'xl'} onPress={() => goto("/profil/test")}>
                  <Text color='white'>
                    Profil
                  </Text>
              </Button>
            </Navbar.Item> */}
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item isActive={checkLocation("/login")} variant={"underline"}>
            <Button auto light size={'xl'} onPress={() => goto("/login")}>
               <Text color='white'>
                  Login
                </Text>
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat size={'xl'} onPress={() => goto("/register")}>
                <Text color='white'>
                  Sign Up
                </Text>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
    </Navbar>
  )
}
