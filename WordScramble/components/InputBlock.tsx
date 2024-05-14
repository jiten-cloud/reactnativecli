import React, {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import {TextInput, View, StyleSheet, Button, Alert} from 'react-native';
import threelettersfile from '../utils/dictionary/3-letter-words.json';
import fourlettersfile from '../utils/dictionary/4-letter-words.json';
import fivelettersfile from '../utils/dictionary/5-letter-words.json';
import sixlettersfile from '../utils/dictionary/6-letter-words.json';

interface InputLetters {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  input6: string;
}

const InputBlock = ({
  setcorrectWords,
  letters,
}: {
  setcorrectWords: React.Dispatch<React.SetStateAction<string[]>>;
  letters: string[];
}) => {
  const [inputLetters, setInputLetters] = useState<InputLetters>({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
  });

  const inputRef = useRef<TextInput[]>(Array(6).fill(null));
  const handleInputChange = (index: number, value: string) => {
    const trimmed = value.trim();
    const key = `input${index + 1}`;

    setInputLetters(prevState => ({
      ...prevState,
      [key]: trimmed.toUpperCase(),
    }));
    if (value.length === 1 && index < 5 && value !== ' ') {
      inputRef.current[index + 1]?.focus();
    }
  };
  const handleKeyPress = (index: number, event: any) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      //@ts-ignore
      inputLetters[`input${index + 1}`] === '' &&
      index > 0
    ) {
      //@ts-ignore
      inputRef.current[index - 1].focus();
    }
  };
  useEffect(() => {
    //@ts-ignore
    inputRef.current[0].focus();
  }, []);
  const correctWords = () => {
    const word = Object.values(inputLetters).join('').toLowerCase();
    const checker = word.split('').every(v => letters.includes(v));

    if (!checker) {
      Alert.alert('Word Checker', 'Please form the word using letters');
      setInputLetters({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
      });
      inputRef.current[0].focus();
      return;
    }

    let iswordExist;

    switch (word.length) {
      case 3:
        iswordExist = threelettersfile.some((val: any) => val.word == word);
        break;
      case 4:
        iswordExist = fourlettersfile.some((val: any) => val.word == word);
        break;
      case 5:
        iswordExist = fivelettersfile.some((val: any) => val.word == word);

        break;
      case 6:
        iswordExist = sixlettersfile.some((val: any) => val.word == word);

        break;
      default:
        Alert.alert(
          'Words length',
          'Word length should not be less than two and greater than 6',
        );
        return;
    }
    if (iswordExist) {
      setcorrectWords((prev: string[]) => {
        if (prev.includes(word)) {
          Alert.alert('Warning', 'You created already');
          return prev;
        } else {
          return [...prev, word];
        }
      });
    } else {
      Alert.alert('Wrong word', 'Please try again');
    }
    setInputLetters({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
    });
    inputRef.current[0].focus();
  };

  return (
    <View style={styles.formContiner}>
      <View style={styles.inputContiner}>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <View style={styles.inputBlock} key={`input-${index}`}>
              <TextInput
                //@ts-ignore
                ref={ref => (inputRef.current[index] = ref)}
                style={styles.textInput}
                maxLength={1}
                //@ts-ignore
                value={inputLetters[`input${index + 1}`]}
                onChangeText={text => handleInputChange(index, text)}
                onKeyPress={e => handleKeyPress(index, e)}
              />
            </View>
          ))}
      </View>

      <Button title="ENTER" onPress={correctWords} />
    </View>
  );
};

export default InputBlock;

const styles = StyleSheet.create({
  formContiner: {
    flex: 1,
  },
  inputContiner: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
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
    textAlign: 'center',
  },
});
