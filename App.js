import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  View,
  TouchableOpacityBase,
} from 'react-native';
import {useState} from 'react';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [anyText, setAnyText] = useState('');
  const onIncrement = () => {
    setCounter(counter + 1);
  };
  const onDecrement = () => {
    setCounter(counter - 1);
  };
  const onPressReset = () => {
    setCounter(0);
    setAnyText('');
  };

  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
        <View // Comp 1
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
          }}>
          <TouchableOpacity
            onPress={() => {
              onDecrement();
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'grey',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              width: 50,
              height: 50,
              borderColor: 'black',
              borderWidth: 1,
              marginHorizontal: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{counter}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              onIncrement();
            }}
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'grey',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View //Comp 2
          style={{
            height: 50,
            width: 200,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 50,
          }}>
          <TextInput
            value={anyText}
            onChange={text => setAnyText(text)}
            style={{width: 100, height: 50}}
          />
        </View>
        {counter >= 5 ? (
          <View // Comp 3
            style={{
              width: 200,
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text>DNA Rocks</Text>
          </View>
        ) : null}
        <TouchableOpacity
          onPress={() => {
            onPressReset();
          }}
          style={{
            marginTop: 50,
            width: 200,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'black',
            alignSelf: 'center',
            backgroundColor: 'grey',
          }}>
          <Text>Reset Button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
