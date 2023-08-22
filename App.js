import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, TouchableHighlight, Alert } from 'react-native';

export default function App() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [cates, setCates] = useState([
    { id: 1, title: "Mom" },
    { id: 2, title: "Personal" },
    { id: 3, title: "Org" },
    { id: 4, title: "Office" }
  ]);
  // console.log(cates);

  const handleAddItem = () => {
    console.log('Title:', title);
    console.log('Price:', price);
  };
  const _onPressButton = () => {
    Alert.alert('You tapped the button!');
  }



  return (
    <View className="flex-1 bg-cyan-800">
      <Text className="bg-lime-500 p-5 w-full  text-center font-bold text-3xl">Shopping List</Text>
      <View className="w-full bg-lime-400 flex-1 overflow-y-scroll flex flex-col px-8 py-5">
        {/*  <View className="flex flex-row">
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
        </View> */}

        <View className="flex flex-row">
          <TextInput
            className="flex-1 border px-4 focus:bg-lime-200 border-lime-700 rounded-none "
            placeholder="Type a Category"
            value={title}
            onChangeText={text => setTitle(text)}
          />
         
          <Button className="px-3 rounded-none" title="+ Add" onPress={handleAddItem} />
        </View>
        <View className="flex-1 justify-center items-center">
          <View>
            {cates.map((category) => (
              <TouchableHighlight
                style="border px-4"
                key={category.id}
                onPress={_onPressButton}
                underlayColor="white"
              >
                <View >
                  <Text className="border  mb-2 px-4 font-bold border-lime-600 bg-lime-500">{category.title}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>

          <View className="px-3 rounded-none absolute right-0 bottom-0">
            <Button  title="+ Add" onPress={handleAddItem} />
          </View>
        </View>
      </View>
    </View>
  );
}



