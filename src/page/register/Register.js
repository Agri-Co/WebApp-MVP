import React from 'react';
import { Input, Spacer, Text, Button } from '@nextui-org/react';
import { useRef } from 'react';
import useCurrentHeight from '../../height';



function RegisterTitle() {
    let height = useCurrentHeight()

    return(
        <div className='Login_Title' align="center">
          <Spacer y = {(height / 16) / 8}/>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
          >
          REGISTER
          </Text>
        </div>
    )
}

export default function RegisterPage() {
    let height = useCurrentHeight()
    const inputEmail = useRef('')
    const inputPassword = useRef('')

    function handleClick() {
        console.log(inputEmail.current.value)
        console.log(inputPassword.current.value)
      }
    

    return(
        <div className='RegisterPage' align="center">
            <RegisterTitle />
            <Spacer y = {(height / 16) / 20}/>
            <div className='inputmail'>
                <Input clearable labelPlaceholder="Email" width={'300px'} size={'xl'} ref={inputEmail} />
            </div>
            <Spacer y = {2}/>
            <div className='inputpassword' align="center">
                <Input.Password labelPlaceholder="Password" clearable width={'300px'}  size='xl' ref={inputPassword} />
            </div>
            <Spacer y = {2}/>
            <div className='buttonlogin' align="center">
                <Button onClick={handleClick} color="gradient" rounded bordered>login</Button>
            </div>
        </div>
    )





}