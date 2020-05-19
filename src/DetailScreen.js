import React from 'react'
import { View, Image, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import { Block, Button, TextView } from './components'
import { Colors } from './color'
import Feather from 'react-native-vector-icons/Feather';
const W = Dimensions.get('window').width;

const Item = ({icon, title}) => {
  return (
    <Block block centered>
      <Button shadow middle color='#FFF' padding={10} borderRadius={12}>
        <Image source={icon} />
        <TextView center bold>{title}</TextView>
      </Button>
    </Block>
  )
}

const ItemField = ({ icon, title, description} ) => {
  return (
    <Button>
      <Block direction='row' borderRadius = {10} shadow color='#fff' padding={6} paddingHorizontal={10} style={{marginTop:10}}>      
        <Image style={styles.img_item} resizeMode='contain' source={icon}/>
        <Block style={styles.field_con} padding={10}>
          <TextView size={16} bold>{title}</TextView>
          <TextView style={styles.textDesc}>{description}</TextView>
        </Block>
        <Button style={styles.btn}>
          <Feather name='chevron-right' color={Colors.blue} size={30}/>
        </Button>
      </Block>
    </Button>
  )
}

const DetailScreen = () => {
  return (
    <ScrollView style={{ flex: 1}}>
      <Block block color='#fafafa'>
        <Block height={300} color={Colors.blue} style={styles.bg}>
          <Block style={styles.wrapperimage}>
            <Image
              style={styles.doctor}
              source={require('./images/coronadr.png')}
            />
          </Block>
        </Block>
        <Block style={styles.containerHeader}>
          <Image style={styles.img} source={require('./images/virus.png')} />
        </Block>
        <Block padding={10}>
          <TextView h6>Sintomas</TextView>
          <Block direction='row' paddingVertical={10}>
            <Item icon = {require('./images/caugh.png')} title='Tos' />
            <Block width={10} />
            <Item icon = {require('./images/headache.png')} title='Dolor de cabeza' />
            <Block width={10} />
            <Item icon = {require('./images/fever.png')} title='Fiebre' />
          </Block>        
        </Block>
        <Block padding={10}>
          <TextView h6>Medidas de Prevencion</TextView>
          <Block>
          <ItemField icon={require('./images/wear_mask.png')} title='Usa cubrebocas' description='Desde el comienzo del brote del coronavirus algunos lugares han adoptado como medida de prevencion el uso de cubrebocas, asi como tener un distanciamiento social adecuado'/>
          <ItemField icon={require('./images/wash_hands.png')} title='Lava tus manos' description='Los fallecimientos incluyen fallos gastrointestinales, infecciones, como Salmonela e infecciones respiratorias como la influenza'/>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  doctor: {
    position: 'absolute',
    top: 100,
    left: -30,

    // width: 50,
    // height: 80,
  },
  wrapperimage: {
    position: 'absolute',
    bottom: 0,

    alignSelf: 'center',
    width: W,
    height: 300,
  },
  bg: {
    position: 'absolute',
    width: 1000,
    height: 1000,
    top: -(930 - W / 2),
    alignSelf: 'center',
    // top: 500 - W / 2,
    // left: 500 - W / 2,
    borderRadius: 1000,
    overflow: 'hidden',
  },
  containerHeader: {
    position: 'relative',
  },
  map: {
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
    transform: [{ rotate: "180deg" }]
  },
  img_item:{
    width: (1.2 * W) / 3,
    height: (1.2 * W) / 3,
  },
  field_con:{
    // marginLeft: W/2,
    position: 'absolute',
    width:(2*W) / 3,
    left: W / 3 + 10,
    top:10,
    paddingVertical:10,
  },
  textDesc:{
    lineHeight: 20,
    marginTop:10,
    maxWidth: ( 2 * W) / 3.4,
  },
  btn:{
    position:'absolute',
    bottom:10,
    right: 10,
  }
})

export default DetailScreen