import React, { useState, useContext } from 'react'
import { View,Text, StyleSheet, TextInput, Button, TimePickerAndroid } from 'react-native'

export const Add = ({route, navigation}) => {

    const { setState } = route.params;
    const { state } = route.params;


    const [time, setTime] = useState(getTime())
    const [glucose, setGlucose] = useState('')
    const [bread, setBread] = useState('')
    const [insulin, setInsulin] = useState('')

    function getTime() {
        console.log('hey')

        const a = new Date()
        return {hours: a.getHours(), minutes: a.getMinutes()}
    }

    const onSetDate = async ()=>{
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
              hour: time.hours,
              minute: time.minutes,
              is24Hour: true,
              mode:'spinner'
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                setTime({hours: hour, minutes: minute})
            }
          } catch ({ code, message }) {
            console.warn('Cannot open time picker', message);
          }
          
    }    

    const onAdd = async ()=>{
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      today = dd + '/' + mm + '/' + yyyy
      console.log(typeof today, today)


      


      let data = {id: Date.now(),time, glucose, bread, insulin}
      // setState({})

      if (state[today] && state[today].length > 0) {
        setState({...state, [today]: [...state[today], data]})
      } else {
        setState({[today]: [data]})
      }



      
      //console.log(data)


      // const alreadyHave =  await AsyncStorage.getItem(today, e=>console.log('47',e))
      // if (alreadyHave == null) {
      //   let load = JSON.stringify(data)
      //   await AsyncStorage.setItem(today, load, e=>console.log('50',e))
      //   // setState(load)
      // } else {
      //   console.log('is not null', alreadyHave)
      //   let resp = JSON.parse(alreadyHave)
      //   let load = [...resp, data]
      //   load = JSON.stringify(load)
      //   await AsyncStorage.setItem(today, load, e=>console.log('56',e))
      //   // setState(load)
      // }

        

    navigation.navigate('Дневник')

      
    }

    return (
        <View style={style.main} >
            
            
            <View style={style.block}>
              <Text style={style.text}>Время</Text>
              <Text style={{...style.input, paddingTop: 12}} onTouchEnd={onSetDate} >{`${time.hours}:${time.minutes}`}</Text> 
              {/* <Button title='settime' onPress={()=>setShowTimePicker(true)} /> */}
            </View>

            <View style={style.block} >
              <Text style={style.text}>Сахар</Text>
              <TextInput style={style.input} keyboardType='decimal-pad' maxLength={4} onChangeText={(e)=>setGlucose(e)} value={glucose} />  
            </View>

            <View style={style.block} >
              <Text style={style.text}>ХЕ</Text>
              <TextInput style={style.input} keyboardType='decimal-pad' maxLength={4} onChangeText={(e)=>setBread(e)} value={bread} />  
            </View>

            <View style={style.block} >
              <Text style={style.text}>Инсулин</Text>
              <TextInput style={style.input} keyboardType='decimal-pad' maxLength={3} onChangeText={(e)=>setInsulin(e)} value={insulin} />  
            </View>
            
            <Button title='Добавить' onPress={onAdd} />
            
        </View>
    )
}


const style = StyleSheet.create({
    main: {
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        
        
    }, 
    block: {
        // borderRightWidth: 1,
        // borderLeftWidth: 1,
        // borderRightColor: 'black',
        // borderLeftColor: 'black',
        paddingLeft: "20%",
        paddingRight: '20%',
        marginBottom: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    }, 
    input: {
        width:100,
        height: 60,
        borderBottomWidth: 2,
        borderBottomColor: 'green',
        alignSelf: 'flex-end',
        backgroundColor: 'lightgray',
        fontSize: 25,
        textAlign:'center',
        

    },
    text: {
      fontSize: 25,
    }
})