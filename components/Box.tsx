import { StyleSheet, View, Text } from "react-native";

type Props = {
    num: number
}

export default function Box({ num }: Props){
    return(
        <View style={styles.box}>
           <Text>{num}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000000',
        borderStyle: 'solid'
    }
})