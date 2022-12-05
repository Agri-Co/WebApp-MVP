import React from 'react';
import { Input, Spacer, Text, Button } from '@nextui-org/react';
import { useRef } from 'react';
// import useCurrentWidth from '../../width';
import useCurrentHeight from '../../height';

function LoginTitle() {
  let height = useCurrentHeight()

    return(
        <div className='Login_Title'>
          {/* {console.log(height)}
          {console.log(width)} */}
          <Spacer y = {(height / 16) / 8}/>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
          >
          LOGIN 
          </Text>
        </div>
    )
}

function LoginPage() {
  let height = useCurrentHeight()
  const inputEmail = useRef('')
  const inputPassword = useRef('')

  function handleClick() {
    console.log(inputEmail.current.value)
    console.log(inputPassword.current.value)
  }

  return(
    <div className='LoginPage' align="center" >
        <LoginTitle />
        <Spacer y = {(height / 16) / 20}/>
        <div className='inputmail' align="flex-left">
           <Input clearable labelPlaceholder="Email" width={'300px'} size={'xl'} ref={inputEmail} />
        </div>
        <Spacer y = {2}/>
            <div className='inputpassword' align="center">
                <Input.Password labelPlaceholder="Password" clearable  size='xl' ref={inputPassword} />
            </div>
        <Spacer y = {2}/>
        <div className='buttonlogin' align="center">
          <Button onClick={handleClick} color="gradient" rounded bordered>login</Button>
        </div>
    </div>
  )
}

export default LoginPage;