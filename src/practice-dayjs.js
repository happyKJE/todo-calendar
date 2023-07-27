import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function App(){
    useEffect(()=>{
        runPracticeDayjs();
    },[]);

    return(
        <View style={StyleSheet.container}>
            <Text></Text>
        </View>
    )
}