import {StyleSheet, Text, View, Pressable, Image, FlatList} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Block from '../components/Block';
import {generateRandomAlphabets} from '../utils/lettergenerator';

const GameScreen = ({route, navigation}) => {
  const [data, setData] = useState<string[]>([]);
  const {user, level} = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Level ${level}`,
      headerRight: () => <Text style={{color: 'blue'}}>score 240</Text>,
    });
  }, [navigation]);
  const generateNumbers = () => {
    const letters = generateRandomAlphabets();
    setData(letters);
    setTimeout(() => {
      navigation.navigate('gameplayscreen', {
        letters,
      });
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperContainer}>
          <View style={styles.letterContainer}>
            {data.length > 0 && (
              <>
                <View style={styles.blocks}>
                  <Block value={data[0]} />
                </View>
                <View style={styles.blocks}>
                  <Block value={data[1]} />
                  <Block value={data[2]} />
                </View>
                <View style={styles.blocks}>
                  <Block value={data[3]} />
                  <Block value={data[4]} />
                </View>
                <View style={styles.blocks}>
                  <Block value={data[5]} />
                </View>
              </>
            )}
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../assets/bucket_6377052.png')}
            />
          </View>
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <Pressable onPress={generateNumbers}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>ROLL DICE</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 4,
    justifyContent: 'space-between',
    backgroundColor: '#223660',
  },
  upperContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'space-between',
  },
  letterContainer: {
    flex: 2,
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
  },
  blocks: {
    flexDirection: 'row',
  },

  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
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
    backgroundColor: '#223660',
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
