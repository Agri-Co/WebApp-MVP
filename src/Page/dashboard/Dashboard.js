import React from 'react'
import { Spacer, Text, Card, Row } from '@nextui-org/react'
import { useWindowSize } from 'react-use'

export default function Dashboard() {
  const tableSize = 470;
  const spaceSize = 70;
  const tableheight = 300;
  const {height} = useWindowSize()
  return (
    <div className='Dashboard'>
      
      <Spacer y = {(height / 16)/ 15}/>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
        >
          WELCOME TO THE DASHBOARD
        </Text>
      <Row justify="center" align="center">
      <Card css={{ mw: "300px",}}>
        <Card.Body>
        </Card.Body>
      </Card>
      <Card css={{ mw: tableSize, height: tableheight, border: '$white', background: '$cyan100'}}>
        <Card.Body>
          <Text>Hydrometry</Text>
        </Card.Body>
      </Card>
      <Card css={{ mw: spaceSize,}}>
        <Card.Body>
        </Card.Body>
      </Card>
      <Card css={{ mw: tableSize, height: tableheight, border: '$white', background: '$cyan100'}}>
        <Card.Body>
          <Text>Hydrometry</Text>
        </Card.Body>
      </Card>
      <Card css={{ mw: spaceSize,}}>
        <Card.Body>
        </Card.Body>
      </Card>
      <Card css={{ mw: tableSize, height: tableheight, border: '$white', background: '$cyan100'}}>
        <Card.Body>
          <Text>Hydrometry</Text>
        </Card.Body>
      </Card>
      <Card css={{ mw: spaceSize,}}>
        <Card.Body>
        </Card.Body>
      </Card>
      </Row>
    </div>
  )
}