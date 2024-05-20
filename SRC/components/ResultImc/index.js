import React from "react";
import {View, Text} from "react-native";

export default function ResulImc(props){
    return (
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.ResulImc}</Text>
        </View>
    );
}