import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Block from '../components/Block';
import InputBlock from '../components/InputBlock';

const GamePlayScreen = ({route}: {route: any}) => {
  const {letters} = route.params;
  const [inputLetters, setInputLetters] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
  });

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
              {Object.keys(inputLetters).map(val => (
                <InputBlock key={val} />
              ))}
            </View>
          </View>
          <View style={styles.wordsContainer}>
            <View>
              <Button title="ENTER" />
            </View>
            <View>
              <Text>words</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.timerContainer}></View>
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
    flex: 4,
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
    justifyContent: 'space-between',
  },
  list: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  wordsContainer: {
    flex: 3,
    justifyContent: 'space-evenly',
    margin: 20,
  },
  timerContainer: {
    flex: 1,
    backgroundColor: '#223660',
  },
});
