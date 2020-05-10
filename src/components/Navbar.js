import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export const Navbar = (props) => {

    return (
        <View style={style.navbar} >
            <Text style={style.title}>{props.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 70,
        alignItems: "center",
        justifyContent: 'flex-end',
        paddingBottom: 10,
        backgroundColor: 'lightgreen',
    },
    title: {
        color: 'white',
        fontSize: 20
    }
})