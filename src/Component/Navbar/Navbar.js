import React from 'react'
import { Navbar, Button } from '@nextui-org/react'
import { useProSidebar } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  // const collapseItems = [
  //   "Home",
  //   "Profile",
  //   "Login",
  //   "Register"
  // ]

  const { collapseSidebar } = useProSidebar()

  return (
    <Navbar isBordered variant="sticky" maxWidth={"fluid"} blur='10px'>
        <Navbar.Brand>
          <Button onClick={() => collapseSidebar()}>AGG</Button>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant={"underline"} enableCursorHighlight>
            <Navbar.Link  href="/">Home</Navbar.Link>
            <Navbar.Link href="/profil/test">profil</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content variant={"underline"} enableCursorHighlight>
        
            {/* <Navbar.Link href="/login">Login</Navbar.Link> */}
            <Button auto flat>
              <Link to="./register">Sign Up</Link>
            </Button>
            {/* <Navbar.Link href="/register">Register</Navbar.Link> */}
        </Navbar.Content>
    </Navbar>
  )
}
