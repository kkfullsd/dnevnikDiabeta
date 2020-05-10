import React from 'react'
import { View, Text, StyleSheet, Vibration } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Note = ({time, glucose, bread, insulin, delHandler, id}) => {



    return(
        // <Text>HI</Text>
        <TouchableOpacity
            onLongPress={()=>{
                Vibration.vibrate(50)
                delHandler(id)
            }}
        >
            <View style={style.note} >
                <Text>{time.hours}:{time.minutes}</Text>
                <Text>{glucose} ммол/л</Text>
                <Text>{bread} ХЕ</Text>
                <Text>{insulin} ЕД</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    note: {
        display: 'flex',
        width:'100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: 'lightcyan'
    }
})