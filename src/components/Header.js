//import
import React from 'react';
import {View, Text} from 'react-native';
//create component
const Header = (props) =>{
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 3,
        position: 'relative'
    },
    textStyle:{
        fontSize: 20
    }
};

//make it available for other components
export default Header;