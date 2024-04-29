import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}: any) => {
  const navigateToStartScreen = () => {
    navigation.navigate('startscreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image style={styles.image} source={require('../assets/book.png')} />
        <Text style={styles.upperText}>WORDX</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={styles.lowerText}>Increase your knowledge with WORDX</Text>
        <Pressable onPress={navigateToStartScreen}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start the Game</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#223660',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    height: 80,
    width: 80,
    marginBottom: 10,
  },
  upperText: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white',
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerText: {
    fontSize: 18,
    fontWeight: '200',
    padding: 10,
  },
  button: {
    padding: 20,
    borderWidth: 2,
    backgroundColor: '#91CDFF',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '500',
  },
});
