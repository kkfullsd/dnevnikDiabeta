import React, { useState, useEffect } from "react";
import { View, AsyncStorage, Text, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { Note } from "./Note";

export const List = props => {
  const [state, setState] = useState({});
    
  
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy; //Это должно меняться потом


    const delHandler = (id) => {
        setState(prev=>{
            return {
                ...prev,
                [today] : prev[today].filter((item)=>item.id !== id)
            }
        })
    }

    

  return (
  <View style={style.main} >
      <Text>{today}</Text>
    {state[today] && state[today].length > 0 ? (
        // <Text>State ne pustoy</Text>
        <FlatList
        data={state[today]}
        renderItem={({item}) =>
        <Note
            // key={index}
            id={item.id}
            time={item.time}
            glucose={item.glucose}
            bread={item.bread}
            insulin={item.insulin}
            delHandler={delHandler}
            />
        }
        keyExtractor={item => item.id}
        style={{flex: 1}}
        />
        ) : (
        <Text>Пока ничего нет</Text>
    )}

    {/* <Button title='Добавить измерение' onPress={()=>props.navigation.navigate('Добавить измерение', {setState: setState, state: state})} /> */}
    <TouchableOpacity
        activeOpacity={0.7}
        style={style.button}
        onPress={()=>props.navigation.navigate('Добавить измерение', {setState: setState, state: state})}
      >
        <Text style={style.buttonText} >+</Text>
      </TouchableOpacity>
    
  </View>
  )
};


const style = StyleSheet.create({
    main:{
    padding: 10,
    flexGrow: 1,
}, button : {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 70,
    height: 70,
    backgroundColor: '#19197095',
    borderRadius: 50,
}, buttonText: {
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: "center",
    textAlignVertical: 'center',
    color: 'white',
    marginTop: -9,
}

})