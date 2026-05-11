import {ScrollView, View, Text, StyleSheet} from "react-native";

import Box from '@/components/Box';

export default function FullWidthColumn(){
    return(
        <ScrollView>
            <View>
                <Text>
                    <Text>Full height columns</Text>
                </Text>
                <View style={styles.container}>
                    <View style={styles.fill_height_box}>
                    <Box num={1} />
                    </View>
                    <View style={styles.fill_height_box}>
                    <Box num={2} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        width: "100%",
        height: 500,

    },

    fill_height_box: {
        height: "100%",
        width: "50%"
    }
})
 