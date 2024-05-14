import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Wrapper = ({children}: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  wrapper: {
    flex: 4,
    backgroundColor: '#223660',
  },
  innerContainer: {
    flex: 5,
    backgroundColor: 'white',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
