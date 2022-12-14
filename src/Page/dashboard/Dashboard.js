import React from 'react'
import { Spacer, Text, Card, Row, Button, Modal, gray, Grid } from '@nextui-org/react'
import { useWindowSize } from 'react-use'


function emptyCards(spaceSize) {
  return <Card css={{ mw: spaceSize, backgroundColor: 'transparent'}}>
        <Card.Body>
        </Card.Body>
      </Card>
};

function popUpMeteo(mVisible, mCloseHandler) {
  return <Modal
    noPadding
    closeButton
    blur
    open={mVisible}
    onClose={mCloseHandler}
    css={{height: 800, background: 'LightGray'}}
    width={'1300px'}
    >
      <Text css={{color: '$black'}}>
        METEO
      </Text>
    </Modal>
}

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
  const [visible, setVisible] = React.useState(false);
  const [mVisible, mSetVisible] = React.useState(false);
  const mHandler = () => mSetVisible(true);
  const mCloseHandler = () => mSetVisible(false);
  const handler = () => setVisible(true);
  const {height} = useWindowSize()
  const closeHandler = () => setVisible(false);

  return (
    <div className='Dashboard' align='center'>
      <Grid>
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
        <Card css={{ width: tableSize, height: tableheight, border: '$white', background: '$cyan100'}} isPressable onPress={handler}>
          <Text align="left" justify="left">
            Hydrometry
          </Text>
        </Card>
        {emptyCards(spaceSize)}
        <Card css={{ width: tableSize, height: tableheight, border: '$white', background: '$cyan100'}} isPressable onPress={mHandler}>
          <Text align="left" justify="left">
            Meteo
          </Text>
        </Card>
        {emptyCards(spaceSize)}
        <Card css={{ width: tableSize, height: tableheight, border: '$white', background: '$cyan100'}} isPressable onPress={handler}>
          <Text align="left" justify="left">
            Hydrometry
          </Text>
        </Card>
        {emptyCards(spaceSize)}
        </Row>
        <Modal
          noPadding
          blur
          closeButton
          open={visible}
          onClose={closeHandler}
          
          css={{height: 800, background: 'LightGray'}}
          width={'1300px'}
          >
            <Text css={{color: '$black'}}>
              FEUR
            </Text>
        </Modal>
        {popUpMeteo(mVisible, mCloseHandler)}
      </Grid>
    </div>
  )
}