import React from 'react'
import { Spacer, Text, Card, Row, Button, Modal } from '@nextui-org/react'
import { useWindowSize } from 'react-use'



function emptyCards(spaceSize) {
  return <Card css={{ mw: spaceSize, backgroundColor: 'transparent'}}>
        <Card.Body>
        </Card.Body>
      </Card>
};

function displayCards(tableSize, tableheight, text) {
  return  <Card css={{ width: tableSize, height: tableheight, border: '$white', background: '$cyan100'}} isPressable onPress={() => {}}>
    <Text align="left" justify="left">
      {text}
    </Text>
</Card>
};

export default function Dashboard() {
  const tableSize = 470;
  const spaceSize = 70;
  const tableheight = 300;
  const {height} = useWindowSize()
  return (
    <div className='Dashboard' align='center'>
      
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
      <Row align='center'>
      {emptyCards(spaceSize * 2)}
      {displayCards(tableSize, tableheight, "Hydrometry\n\n\n\n")}
      {emptyCards(spaceSize)}
      {displayCards(tableSize, tableheight, "Hydrometry")}
      {emptyCards(spaceSize)}
      {displayCards(tableSize, tableheight, "Hydrometry")}
      {emptyCards(spaceSize)}
      </Row>
    </div>
  )
}