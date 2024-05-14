import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import StatsBlock from '../components/StatsBlock';
import {userContext} from '../store/UserContext';

const UserUpdateScreen = ({route, navigation}: any) => {
  const {updateUserName, users} = useContext(userContext);
  const {user} = route.params;
  const [userName, setUserName] = useState('');
  const updateUser = () => {
    if (userName.trim().length <= 0) {
      Alert.alert(
        'Invalid User name',
        'Name length should be greater than zero',
      );
      return;
    }
    const isUserAlreadyExist = users.some(user => user.username == userName);
    if (!isUserAlreadyExist) {
      updateUserName(user, userName);
      setUserName('');
      navigation.popToTop();
    } else {
      Alert.alert('User Already Exist', 'Please try some other name');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>UserUpdateScreen- {user}</Text> */}
      <View style={styles.upperContainer}>
        <Text style={styles.username}>{user}</Text>
        <TextInput
          placeholder="ENTER YOUR NAME"
          style={styles.textInput}
          onChangeText={Text => setUserName(Text)}
        />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={updateUser}>
            <Text style={styles.buttonText}>UPDATE</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.pop()}>
            <Text style={styles.buttonText}>GO BACK</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.stats}>
        <Text style={styles.statText}>STASTIC</Text>
        <View style={styles.topScore}>
          <StatsBlock additionalstyle={styles.additional} />
          <StatsBlock additionalstyle={styles.additional} />
          <StatsBlock additionalstyle={styles.additional} />
          <StatsBlock additionalstyle={styles.additional} />
        </View>
      </View>
    </View>
  );
};

export default UserUpdateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    marginRight: 20,
    borderTopRightRadius: 80,
  },
  upperContainer: {
    flex: 1,
    marginVertical: 20,
    padding: 20,
  },
  username: {
    fontSize: 28,
    color: '#223660',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#223660',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  stats: {
    flex: 2,
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
  },
  additional: {
    flexDirection: 'row',
    flex: 1,
    width: 'auto',
    justifyContent: 'space-between',
  },
});
