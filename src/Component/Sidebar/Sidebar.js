import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Button } from '@nextui-org/react'
import { useWindowSize } from 'react-use'
import { useNavigate } from 'react-router-dom'


function SidebarComponent() {

    const {height} = useWindowSize();
    const navigate = useNavigate();

    function handleClick()
    {
        navigate("/dashboard");
    }


    return (
        <div className='SidebarComponent'
            style={{display:'flex',
                    height: '100%',
                    minHeight: height - 76,
                    position:'absolute',
                    zIndex:1,
                    }}
            >
            <Sidebar transitionDuration={1000}>
                <Menu>
                    <MenuItem> 
                        <Button>
                            TEST
                        </Button> 
                    </MenuItem>
                    <MenuItem>
                        <Button onClick={() => handleClick()}>
                            DASHBOARD
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        TEST 2
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SidebarComponent