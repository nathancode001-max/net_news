import { ScrollView, StyleSheet, Text, View} from "react-native";

import {Link} from "expo-router"

import Box from '@/components/Box';


export default function Explore_grid_layout(){
    return (
      <ScrollView >
        <Text>Exploring Grid Layout</Text>

        <Link href={"/fullWidthColumn"}>Go to full Width Column</Link>

        {/* <View>
          <h3>Column</h3>
          <View style={styles.box_container}>
            <Box num={1} />
            <Box num={2} />
            <Box num={3} />
          </View>

          <h3>Row</h3>
          <View style={[styles.box_container, {flexDirection: 'row'}]}>
            <Box num={1} />
            <Box num={2} />
            <Box num={3} />
          </View>
        </View>

        <h2>Full width container</h2>
        <View style={{ borderStyle: "solid", borderColor: "green" , borderWidth: 2, gap: 50}}>
          <View style={styles.fill_width_box}>
            <Box num={1}/>
          </View>
          <View style={styles.fill_width_box}>
            <Box num={2}/>
          </View>
          <View style={styles.fill_width_box}>
            <Box num={3}/>
          </View>
          <View style={styles.fill_width_box}>
            <Box num={3}/>
          </View>
        </View> */}
        <View style={styles.container}>
            <View style={styles.fill_width_box}>
            <Box num={1}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={2}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={3}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={4}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={5}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={6}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={7}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={8}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={9}/>
            </View>
            <View style={styles.fill_width_box}>
            <Box num={10}/>
            </View>
        </View>
      </ScrollView>
    );


    
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10,
        paddingHorizontal: 5,
        width: "100%"
    },

    fill_width_box: {
        height: 100,
        width: 100
    }
})