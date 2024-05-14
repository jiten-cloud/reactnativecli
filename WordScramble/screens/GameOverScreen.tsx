import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useLayoutEffect, useState} from 'react';
import Wrapper from '../components/Wrapper';
import WordBlock from '../components/WordBlock';
import {userContext} from '../store/UserContext';

const GameOverScreen = ({route, navigation}: any) => {
  const {correctWords, user} = route.params;
  const {updateScore, users} = useContext(userContext);
  const [score, setScores] = useState(0);

  useLayoutEffect(() => {
    let count = 0;
    correctWords.forEach((val: string) => (count += val.length));
    setScores(count);
    updateScore(user, count);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Wrapper>
        {correctWords.length > 0 && (
          <View style={styles.correctWordContainer}>
            <FlatList
              data={correctWords}
              style={styles.flatlist}
              renderItem={({item}) => (
                <View style={styles.list}>
                  {[...Array(6).keys()].map((val, index) => (
                    <WordBlock key={index} letter={item[val]} />
                  ))}
                </View>
              )}
            />
          </View>
        )}
        <View style={styles.pointContainer}>
          <Image
            source={require('../assets/label-png-32894.png')}
            style={styles.image}
          />
          <Text style={styles.text}>You got {score} points</Text>
        </View>
      </Wrapper>
      <View style={styles.lowerContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="NEXT"
            onPress={() => navigation.replace('leaderboardscreen', {user})}
          />
        </View>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  correctWordContainer: {
    flex: 1,
  },
  pointContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlist: {
    flex: 1,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 2,
    gap: 10,
  },
  image: {
    height: 270,
    width: 350,
    marginBottom: 10,
    zIndex: -2,
  },
  text: {
    position: 'absolute',
    fontSize: 30,
    color: 'darkblue',
    fontWeight: '500',
  },

  lowerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#223660',
  },
  buttonWrapper: {
    marginHorizontal: 40,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
