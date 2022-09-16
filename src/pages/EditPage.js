import React from "react";
import { View ,Text} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";

const Edit =()=>{
    return(
        <View>
            <Input placeholder='Username'/>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <Input placeholder='Password (again)'/>
            <Button placeholder='Save' />
        </View>
    )
}

export default Edit;