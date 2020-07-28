import React from 'react'
import { View, Text, StyleSheet, Dimensions, PixelRatio } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colorTheme, pSBC } from '../constants';


export default function Header(props) {

  const color4 = pSBC(0.52, colorTheme);

  let color3 = pSBC(0.10, colorTheme, 'rgba(194, 00, 255,0.8)');
  color3 = pSBC(-0.34, color3);

  let color1 = pSBC(0.20, colorTheme, 'rgba(00, 00, 00,0.7)');
  color1 = pSBC(-0.05, color1);

  return (
    <View style={styles.container}>

      <View style={styles.circles}>
        <View style={styles.circleShadow}>
          <View
            style={[styles.circle, styles.fourthCircle, { backgroundColor: color4 }]} />
        </View>
        <View style={styles.circleShadow}>
          <View
            style={[styles.circle, styles.thirdCircle, { backgroundColor: colorTheme }]} />
        </View>
        <View style={styles.circleShadow}>
          <View
            style={[styles.circle, styles.secondCircle, { backgroundColor: color3 }]} />
        </View>
        <LinearGradient
          style={[styles.circle, styles.firstCircle]}
          colors={[color1, color1, color3]} />
      </View>

      <View style={styles.titlesContainer}>
        <Text style={styles.title}>{props.title ? props.title : 'Título'}</Text>
        <Text style={styles.subtitle}>{props.subtitle ? props.sutitle : null}</Text>
      </View>

    </View>
  )
}

let marginDevice = 0;

if (Dimensions.get('window').height <= 760) {
  marginDevice = -50;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  circles: {
    zIndex: 2,
    marginTop: -20,
    position: 'absolute',
  },

  titlesContainer: {
    zIndex: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  title: {
    color: "#FFF",
    fontSize: 55,
    fontFamily: 'Nunito-Bold',
    width: 200,
    textAlign: 'center',
  },

  subtitle: {
    color: "#EEE",
    fontSize: 45,
    fontFamily: 'Nunito',
  },

  circleShadow: {
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 250,
    position: 'absolute',
    marginTop: -220 + marginDevice,
  },

  firstCircle: {
  },
  secondCircle: {
    marginTop: -230 + marginDevice,
    marginLeft: 0,
    width: 540,
    height: 540,
    borderRadius: 270,
  },
  thirdCircle: {
    marginTop: -210 + marginDevice,
    marginLeft: -40,
  },
  fourthCircle: {
    marginTop: -205 + marginDevice,
    marginLeft: -100,
  }
})