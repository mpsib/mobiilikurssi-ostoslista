import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addButton = () => {
    setData([...data, {key: text}]);
    setText('');
  }

  const clearButton = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>

      <View style={{flex:1}}>
        <TextInput
          style={{width: 200, borderColor:'gray', borderWidth:1 }}
          onChangeText={input => setText(input)}
          value={text}
        />
        <View style={styles.horizontal}>
          <View style={styles.button}>
            <Button onPress={addButton} title="add"/>
          </View>
          <View style={styles.button}>
            <Button onPress={clearButton} title="clear"/>
          </View>
        </View>
      </View>
      
      <View style={{flex:2}}>
        <Text style={{color:'blue', fontWeight:'bold'}}>Shopping List</Text>
        <View style={{justifyContent:'flex-start'}}>
          <FlatList
            data={data}
            renderItem={ ({item}) => <Text>{item.key}</Text> }
            keyExtractor={ (item, index) => index.toString() }
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
  button: {
    width:60,
    marginTop:20,
  },
  horizontal: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'center',
  }
});
