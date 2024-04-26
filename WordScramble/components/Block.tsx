import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Block = ({value}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.block]}>
        <Text style={styles.text}>{value}</Text>
      </View>
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  block: {
    backgroundColor: '#4A4E67',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    margin: 2,
    borderColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
});
