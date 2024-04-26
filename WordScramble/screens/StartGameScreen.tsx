import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const StartGameScreen = ({navigation}) => {
  const [gamerName, setGamerName] = useState('');
  const moveToGameScreen = () => {
    navigation.navigate('gamescreen', {
      user: gamerName,
      level: 2,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image style={styles.image} source={require('../assets/book.png')} />
        <Text style={styles.upperText}>WORDX</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          molestias est tenetur praesentium possimus fugit quam accusamus
          temporibus. Nam, dolorem?
        </Text>
      </View>
      <View style={styles.lowerContainer}>
        <TextInput
          placeholder="Enter Your Name"
          style={styles.input}
          onChangeText={Text => {
            setGamerName(Text);
          }}
        />
        <Button title="Let's Go" onPress={moveToGameScreen} />
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  content: {
    padding: 10,
    fontWeight: '400',
    color: 'black',
    margin: 20,
  },
  lowerContainer: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'lightgray',
  },
});
