import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, TouchableHighlight, Alert } from 'react-native';

export default function App() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    console.log('Title:', title);
    console.log('Price:', price);
  };
  const _onPressButton = () => {
    Alert.alert('You tapped the button!');
  }

  return (
    <View className="flex-1 bg-cyan-800">
      <Text className="bg-green-500 p-5 w-full  text-center font-bold text-3xl">Shopping List</Text>
      <View className="w-full bg-yellow-500 flex-1 overflow-y-scroll flex flex-col px-8 py-5">
        <View className="flex flex-row">
          <TextInput
            className="flex-1 border px-4 focus:bg-lime-200 rounded-none"
            placeholder="Title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            placeholder="Price"
            className="w-1/5 border px-4 focus:bg-lime-200 rounded-none"
            value={price}
            onChangeText={text => setPrice(text)}
            keyboardType="numeric"
          />
          <Button className="px-3 rounded-none" title="+ Add" onPress={handleAddItem} />
        </View>
        <View className="flex-1 justify-center items-center">
          <View >
            <TouchableHighlight onPress={_onPressButton} underlayColor="white">
              <View >
                <Text >TouchableHighlight</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View className="px-3 rounded-none absolute right-0 bottom-0">
            <Button title="+ Add" onPress={handleAddItem} />
          </View>
        </View>
      </View>
    </View>
  );
}



