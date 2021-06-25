import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import database from '../Config'
import S1AppHeader from '../ImportantStuff/S1AppHeader';

export default class S1 extends React.Component(){
    student1Pressed(){
        var student1 = database.ref('1'+'/');
        student1.update({
            'Exist': 'true'
        })
    }
    student2Pressed(){
        var student2 = database.ref('2'+'/');
        student2.update({
            'Exist': 'true'
        })
    }
    student3Pressed(){
        var student3 = database.ref('3'+'/');
        student3.update({
            'Exist': 'true'
        })
    }

    goToNextScreen = (btnColor) => {
        this.props.navigation.navigate('S2', { color: btnColor })
    }

    render(){
        return(
            <View>
                <Text>Student 1</Text>
                <Text>Student 2</Text>
                <Text>Student 3</Text>
                <Text>Student 4</Text>
            </View>
        )
    }
    
}