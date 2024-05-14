import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserDetails = ({
  item,
  index,
}: {
  item: {
    id: 'string';
    username: string;
    score: number;
  };
  index: number;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{index + 1}</Text>
      <Text style={styles.text}>{item.username}</Text>
      <Text style={styles.text}>{item.score}</Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    color: '#223660',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
});
