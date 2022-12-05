import React from 'react'
import { Navbar, Button, Link } from '@nextui-org/react'

export default function NavbarComponent() {
  const collapseItems = [
    "Home",
    "Profile",
    "Login",
    "Register"
  ]
    return (
        <Navbar isBordered variant="sticky" maxWidth={"fluid"}>
            <Navbar.Brand>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant={"underline"} enableCursorHighlight>
                <Navbar.Link  href="/">Home</Navbar.Link>
                <Navbar.Link href="/profil/test">profil</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content variant={"underline"} enableCursorHighlight>
                <Navbar.Link href="/login">Login</Navbar.Link>
                <Button auto flat as={Link} href="/register">
                  Sign Up
                </Button>
                {/* <Navbar.Link href="/register">Register</Navbar.Link> */}
            </Navbar.Content>
            {/* <Navbar. */}
        </Navbar>
  )
}
