import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import Wrapper from '../components/Wrapper';
import {userContext} from '../store/UserContext';
import UserDetails from '../components/UserDetails';
import StatsBlock from '../components/StatsBlock';

const LeaderBoardscreen = ({route, navigation}: any) => {
  const {user} = route.params;
  const {users} = useContext(userContext);
  return (
    <View style={styles.mainContainer}>
      <Wrapper>
        <View style={styles.userList}>
          <FlatList
            data={users}
            renderItem={({item, index}) => (
              <UserDetails item={item} index={index} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.stats}>
          <Text style={styles.statText}>STASTIC</Text>
          <View style={styles.topScore}>
            <StatsBlock />
            <StatsBlock />
            <StatsBlock />
            <StatsBlock />
          </View>
        </View>
      </Wrapper>
      <View style={styles.lowerContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="NEXT"
            onPress={() => navigation.navigate('userupdatescreen', {user})}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="QUIT" onPress={() => navigation.popToTop()} />
        </View>
      </View>
    </View>
  );
};

export default LeaderBoardscreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  userList: {
    flex: 2,
  },
  stats: {
    flex: 1,
  },
  statText: {
    color: '#223660',
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  topScore: {
    flex: 4,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#223660',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 40,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
