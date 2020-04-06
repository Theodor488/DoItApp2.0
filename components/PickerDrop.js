import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, itemStyle } from 'react-native'

class PickerExample extends Component {
    state = { user: '' }
    updateUser = (user) => {
        this.setState({ user: user })
    }
    render() {
        return (
            <View style={styles.initial}>
                <Picker selectedValue={this.state.user} onValueChange={this.updateUser}
                    itemStyle={{
                        height: 50,
                        width: 150,
                        fontSize: 70,
                    }}>
                    <Picker.Item label="Select urgency Level" />
                    <Picker.Item label="High Urgency " value=" high" color="red" />
                    <Picker.Item label="Medium Urgency" value="medium" color="orange" />
                    <Picker.Item label="Low Urgency" value="low" color="green" />
                </Picker>
                {/* <Text style={styles.text}>{this.state.user}</Text> */}
            </View>
        )
    }
}

export default PickerExample

const styles = StyleSheet.create({
    Item: {
        fontSize: 30,
        marginTop: 50,
        borderColor: 'blue',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
    },
    initial: {
        borderColor: '#bbb',
        borderWidth: 1,
        backgroundColor: 'white',
        borderStyle: 'dashed',
        borderRadius: 5,
        paddingBottom: 0,
        padding: 5,
    },
})






