import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputBlock = () => {
  return (
    <View style={styles.inputBlock}>
      <TextInput
        maxLength={1}
        inputMode="text"
        textAlign="center"
        style={styles.textInput}
      />
    </View>
  );
};

export default InputBlock;

const styles = StyleSheet.create({
  inputBlock: {
    borderWidth: 2,
    backgroundColor: 'lightgray',
    height: 60,
    width: 60,
    borderRadius: 10,
    margin: 2,
  },
  textInput: {
    fontSize: 30,
    fontWeight: '600',
  },
});
