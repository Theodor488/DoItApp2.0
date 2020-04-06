import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PickerExample from './PickerDrop';


export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>

            <Text style={item.completed ? styles.completed : styles.item}>{item.text}</Text>
            <PickerExample />

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 30,
        borderColor: '#bbb',
        borderWidth: 1,
        fontSize: 20,
        borderStyle: 'dashed',
        borderRadius: 1,
    },
    completed: {
        padding: 16,
        marginTop: 30,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontSize: 20,
        backgroundColor: '#1fb5ae',
        textDecorationLine: 'line-through',

    }
})