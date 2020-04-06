import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>The DoIt App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        paddingBottom: 70,
        backgroundColor: '#0d97a6'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    }
});