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
import Wrapper from '../components/Wrapper';
import Customheader from '../components/Customheader';
import getNewLetters from '../utils/getNewLetters';

const GamePlayScreen = ({route, navigation}: any) => {
  const {letters, user, score} = route.params;
  const [correctWords, setcorrectWords] = useState<string[]>([]);
  const [timer, setTimer] = useState(60);
  const [changingLetters, setChangingLetters] = useState(letters);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          clearInterval(interval);
          return 0;
        } else {
          if (prev % 10 == 0 && prev > 0 && prev < 60) {
            setChangingLetters((prev: string[]) => getNewLetters(prev));
          }
          return prev - 1;
        }
      });
      return () => clearInterval(interval);
    }, 1000);
  }, [navigation]);
  useLayoutEffect(() => {
    if (timer >= 1) {
      navigation.setOptions({
        header: () => (
          <Customheader route={route} navigation={navigation} timer={timer} />
        ),
      });
    } else {
      navigation.replace('gameoverscreen', {
        correctWords,
        user,
        score,
      });
    }
  }, [timer]);

  return (
    <View style={styles.mainContainer}>
      <Wrapper>
        <View style={styles.inputletterContainer}>
          <View style={styles.list}>
            {changingLetters.map((letter: string, index: number) => {
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
      </Wrapper>

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
