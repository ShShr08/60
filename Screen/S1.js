import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

class S1 extends React.Component {

    componentDidMount() {
        var class_ref = await db.ref('/').on('value', data => {
            var allStudents = [];
            var classA = data.val().classA;

        });
    }
}
    
