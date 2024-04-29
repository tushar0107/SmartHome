import { View } from "react-native";
import { Header } from "../components/Header";
import { Home } from "./Home";


export const Base = ()=>{

    return(
        <View>
            <Header/>
            <Home/>
        </View>
    );
}