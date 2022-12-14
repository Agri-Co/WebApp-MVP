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

function popUpRandom(rVisible, rCloseHandler) {
  return <Modal
    noPadding
    blur
    closeButton
    open={rVisible}
    onClose={rCloseHandler}      
    css={{height: 800, background: 'LightGray'}}
    width={'1300px'}
    >
    <Text css={{color: '$black'}}>
      RANDOM
    </Text>
  </Modal>
}

function popUpHydro(visible, closeHandler) {
  return <Modal
    noPadding
    blur
    closeButton
    open={visible}
    onClose={closeHandler}      
    css={{height: 800, background: 'LightGray'}}
    width={'1300px'}
    >
    <Text css={{color: '$black'}}>
      HYDROMETRY
    </Text>
  </Modal>
}

export default function Dashboard() {
  const tableSize = 470;
  const spaceSize = 70;
  const tableheight = 300;
  const [visible, setVisible] = React.useState(false);
  const [mVisible, mSetVisible] = React.useState(false);
  const [rVisible, rSetVisible] = React.useState(false);
  const mHandler = () => mSetVisible(true);
  const rHandler = () => rSetVisible(true);
  const rCloseHandler = () => rSetVisible(false);
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
        {emptyCards(spaceSize * 4)}
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
        <Card css={{ width: tableSize, height: tableheight, border: '$white', background: '$cyan100'}} isPressable onPress={rHandler}>
          <Text align="left" justify="left">
            Random
          </Text>
        </Card>
        {emptyCards(spaceSize)}
        </Row>
        {popUpHydro(visible, closeHandler)}
        {popUpMeteo(mVisible, mCloseHandler)}
        {popUpRandom(rVisible, rCloseHandler)}
      </Grid>
    </div>
  )
}