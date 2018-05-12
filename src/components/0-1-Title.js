import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default ({title, children, style}) => <View style={[{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
},style]}>
    <View style={[styles.line,{
        marginRight:5
    }]}/>
    <View>
        {children ? children : <Text>{title}</Text>}
    </View>
    <View style={[styles.line,{
        marginLeft:5
    }]}/>
</View>

const styles = StyleSheet.create({
    line: {
        borderTopColor:'#ddd',
        borderTopWidth:0.5,
        paddingHorizontal:20,
    }
})
