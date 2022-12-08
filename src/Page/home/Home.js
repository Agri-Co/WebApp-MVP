import React from 'react'
import { Spacer, Text } from '@nextui-org/react'
import { useWindowSize } from 'react-use'

export default function Home() {
  const {width, height} = useWindowSize()
  return (
    <div className='Home_Title'>
      <Spacer y = {(height / 16)/ 15}/>
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
