import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StatsBlock = ({additionalstyle}: any) => {
  return (
    <View style={[styles.block, additionalstyle && {...additionalstyle}]}>
      <Text style={styles.textWhite}>StatsBlock</Text>
      <View style={styles.score}>
        <Text style={styles.point}>20</Text>
        <Text style={styles.textWhite}>Points</Text>
      </View>
    </View>
  );
};

export default StatsBlock;

const styles = StyleSheet.create({
  block: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#223660',
    width: 150,
    margin: 10,
    alignItems: 'center',
  },
  score: {
    flexDirection: 'row',
    gap: 5,
  },
  point: {
    color: '#ffd700',
  },
  textWhite: {
    color: 'white',
  },
});
