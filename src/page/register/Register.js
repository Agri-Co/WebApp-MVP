import React from 'react';
import { Input, Spacer, Text, Button, Grid } from '@nextui-org/react';
import { useRef } from 'react';

function RegisterTitle() {
    return(
        <div className='Login_Title' align="center">
          <Spacer y = {window.innerHeight / 75}/>
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
    const inputEmail = useRef('')
    const inputPassword = useRef('')

    return(
        <div className='RegisterPage'>
            <RegisterTitle />
            <Spacer y = {window.innerHeight / 350}/>
            <Grid.Container direction='column' gap={2} justify='center' alignItems='center'>
                <Grid xs>
                    <Input clearable labelPlaceholder="Email" width="300px" ref={inputEmail} />
                </Grid>
                <Grid xs>
                    <Input.Password labelPlaceholder="Password" clearable width="300px" ref={inputPassword} />
                </Grid>
            </Grid.Container>
        </div>
    )





}