import * as React from 'react';
import { Text, View } from 'react-native';
import stylez from './S1AppHeaderStyle';

class S1AppHeader extends React.Component{
    render(){
        return(
            <View style={stylez.container}>
                <Text style={stylez.textStyle}> School Attendance </Text>
            </View>
        );
    }
}

export default S1AppHeader;