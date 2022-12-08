import React from 'react'
import { Spacer, Text } from '@nextui-org/react'

export default function Home() {
  return (
    <div className='Home_Title' align="center">
      <Spacer y = {window.innerHeight / 75}/>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
        >
          WELCOME HOME
        </Text>
    </div>
  )
}
