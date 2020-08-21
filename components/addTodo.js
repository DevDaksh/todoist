import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function addTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <View style={styles.wrapper}>
                <TextInput
                    styles={styles.input}
                    placeholder="new todo..."
                    onChangeText={changeHandler}
                />
            </View>

            <View style={styles.button}>
                <Button onPress={() => submitHandler(text)} title="Add Todo" color='coral' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingHorizontal: 8,
        paddingVertical: 6
    },
    wrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10
    },
    button: {
        marginTop: 20
    }
})