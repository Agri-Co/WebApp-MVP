import React, {useState} from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'
import { Button } from '@nextui-org/react'
import { useWindowSize } from 'react-use'

function SidebarComponent() {
    const {width, height} = useWindowSize()

    return (
        <div className='SidebarComponent'
            style={{display:'flex',
                    height: '100%',
                    minHeight: height - 76,
                    position:'absolute',
                    zIndex:1,
                    }}
            >
            {console.log(height)}
            <Sidebar transitionDuration={1000}>
                <Menu>
                    <MenuItem> <Button>TEST</Button> </MenuItem>
                    <MenuItem>TEST 2</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    )
}

export default SidebarComponent