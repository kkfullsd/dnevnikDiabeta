import React, { useState } from 'react'
import { View, Text, StyleSheet, Vibration, TouchableOpacity, TextInput } from 'react-native'
//import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 

export const Note = ({time, glucose, bread, insulin, delHandler, id, editHandler}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [newGlucose, setNewGlucose] = useState(glucose)
    const [newBread, setNewBread] = useState(bread)
    const [newInsulin, setNewInsulin] = useState(insulin)



    const defaultView = (<View style={style.note} >
    <Text style={style.b}>{time.hours}:{time.minutes}</Text>
    <Text ><Text style={style.b}>{glucose ? glucose : '--'}</Text>{glucose ? ' ммол/л' : '       '}</Text>
    <Text ><Text style={style.b}>{bread ? bread : '--'}</Text>{bread ? ' ХЕ' : '   '}</Text>
    <Text ><Text style={style.b}>{insulin ? insulin : '--'}</Text>{insulin ? ' ЕД' : '   '}</Text>
    </View>)

    const EditView = (
        <View style={style.bordered}>
        <View style={style.editnote} >
            <Text style={style.b} >{time.hours}:{time.minutes}</Text>
            <TextInput keyboardType='decimal-pad' style={style.input} value={newGlucose} onChangeText={(e)=>setNewGlucose(e)} />
            <TextInput keyboardType='decimal-pad' style={style.input} value={newBread} onChangeText={(e)=>setNewBread(e)}/>
            <TextInput keyboardType='decimal-pad' style={style.input} value={newInsulin} onChangeText={(e)=>setNewInsulin(e)}/>
        </View>
        <View style={style.undernote} >
            <AntDesign name="delete" size={32} color="pink" onPress={()=>delHandler(id)}/>
            <AntDesign name="check" size={32} color="green" onPress={()=>{editHandler(id, newGlucose, newBread, newInsulin); setIsEdit(!isEdit)}}/>
        </View>

        </View>
        )


    return(
        // <Text>HI</Text>
        <TouchableOpacity
            activeOpacity={0.7}
            onLongPress={()=>{
                Vibration.vibrate(50)
                setIsEdit(!isEdit)
                //delHandler(id)
            }}
        >
            {isEdit ? EditView : defaultView}
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
        marginTop: 5,
        backgroundColor: 'lightcyan',
        borderRadius: 7,
       

    }, 
    b:{
        fontWeight: "bold",
        fontSize: 25,
        color: '#121212cc'
    },

    input: {
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        position: 'relative',
        left: -12,
        top: -1,
        textAlign: "center",
        fontSize: 25,
        fontWeight: 'bold',
        width: '12%'

    }, editnote: {
        display: 'flex',
        width:'100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 0,
        marginTop: 10,
        backgroundColor: 'lightcyan',
        borderRadius: 3,
    }, 
    undernote: {
        display: 'flex',
        width:'100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        marginBottom: 5,
        marginTop: 0,
        backgroundColor: 'lightcyan',
        borderRadius: 3,
    },
    bordered: {
    }
})