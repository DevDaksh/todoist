import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.Header}>
            <Text style={styles.title}>Todoist</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})