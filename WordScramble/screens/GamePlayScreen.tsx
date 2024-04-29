import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useState, useLayoutEffect, useEffect, useRef} from 'react';
import Block from '../components/Block';
import InputBlock from '../components/InputBlock';

const GamePlayScreen = ({route, navigation}: any) => {
  const {letters} = route.params;
  const [correctWords, setcorrectWords] = useState<string[]>([]);
  const [timer, setTimer] = useState(60);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer(prev => {
  //       if (prev === 1) {
  //         navigation.navigate('gameoverscreen');
  //         clearInterval(interval);
  //       }
  //       return prev - 1;
  //     });
  //     return () => clearInterval(interval); // Clea
  //   }, 1000);
  // }, []);
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Text>{timer}s</Text>,
  //   });
  // }, [timer]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <View style={styles.innerContainer}>
          <View style={styles.inputletterContainer}>
            <View style={styles.list}>
              {letters.map((letter: string, index: number) => {
                return <Block key={index} value={letter} />;
              })}
            </View>
            <View style={styles.list}>
              <InputBlock setcorrectWords={setcorrectWords} letters={letters} />
            </View>
          </View>
          <View style={styles.wordsContainer}>
            <View style={styles.word}>
              <Text style={{flex: 1, textAlign: 'center'}}>Your words</Text>
              <View
                style={{
                  flex: 4,
                  flexWrap: 'wrap',
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                {correctWords.map((val, index) => (
                  <View
                    key={index}
                    style={{
                      padding: 10,
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{height: 20, width: 20}}
                      source={require('../assets/Green-check-mark-icon-on-transparent-background-PNG.png')}
                    />
                    <Text>{val}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.timerContainer}>
        <Image
          source={require('../assets/sand-clock.png')}
          style={{height: 40, width: 40}}
        />
        <Text style={styles.timerText}>{timer}s</Text>
      </View>
    </View>
  );
};

export default GamePlayScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 5,
    backgroundColor: '#223660',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  inputletterContainer: {
    flex: 2,
  },
  list: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  wordsContainer: {
    flex: 1,
  },
  word: {
    flex: 1,
  },
  timerContainer: {
    flex: 1,
    backgroundColor: '#223660',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  timerText: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },
});
