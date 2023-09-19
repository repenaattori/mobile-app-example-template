import { View } from "react-native";
import { Button, Checkbox, SegmentedButtons, Text, TextInput } from "react-native-paper";
import { StatusBar } from 'expo-status-bar';
import { Style } from "../styles/Style";
import { useContext, useState } from "react";

export default function SendMessages(){
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    return(
        <View style={Style.container}>
        </View>
    );
}