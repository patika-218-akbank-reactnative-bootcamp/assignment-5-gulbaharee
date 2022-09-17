import React from "react";
import { View ,Text} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import {useDispatch,useSelector} from 'react-redux';

const Edit =()=>{
    const loggedUser = useSelector((state)=> state.loggedUser.loggedUserInfo);
    return(
        <View>
            <Input placeholder={loggedUser.username}/>
            <Input placeholder={loggedUser.email}/>
            <Input placeholder='Password'/>
            <Input placeholder='Password (again)'/>
            <Button placeholder='Save'/>
        </View>
    )
}

export default Edit;