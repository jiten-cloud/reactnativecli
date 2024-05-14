import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Customheader = ({navigation, route, timer}: any) => {
  return (
    <View
      style={{
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
      <Pressable
        onPress={() => navigation.pop()}
        style={{
          backgroundColor: '#006DFa',
          padding: 5,
          height: 30,
          width: 30,
          borderRadius: 30 / 2,
          marginHorizontal: 5,
        }}>
        <Image
          source={require('../assets/back.png')}
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'pink',
            borderRadius: 20 / 2,
          }}
        />
      </Pressable>

      <Text style={{fontSize: 20, fontWeight: 600}}>
        Level {route.params.level}
      </Text>
      {timer && <Text style={{fontSize: 20, fontWeight: '500'}}>{timer}s</Text>}
      <View
        style={{
          backgroundColor: '#006DFa',
          width: 60,
          paddingHorizontal: 20,
          paddingVertical: 2,
          borderRadius: 10,
          alignItems: 'center',
          marginRight: 5,
        }}>
        <Text style={{color: 'white'}}>{route.params.score}</Text>
      </View>
    </View>
  );
};

export default Customheader;

const styles = StyleSheet.create({});
