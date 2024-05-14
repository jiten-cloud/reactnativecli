import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WordBlock = ({letter}: {letter: string}) => {
  return (
    <View
      style={[
        styles.block,
        {backgroundColor: letter ? '#71BF95' : 'lightgray'},
      ]}>
      <Text style={styles.text}>{letter?.toUpperCase()}</Text>
    </View>
  );
};

export default WordBlock;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});
