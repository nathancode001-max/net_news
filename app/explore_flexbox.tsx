import { ScrollView, StyleSheet, Text, View} from "react-native";

import {Link} from "expo-router"

import Box from '@/components/Box';


export default function ExploreFlexbox(){
    return (
      <ScrollView style={styles.scroll}>

      <Link href="/explore_grid_layout">Go to Explore Grid Page</Link>

        <Text>Exploring Flexbox</Text>
        <View>
          <Text>Column</Text>
          <View style={styles.box_container}>
            <Box num={1} />
            <Box num={2} />
            <Box num={3} />
          </View>

          <Text>Row</Text>
          <View style={[styles.box_container, {flexDirection: 'row'}]}>
            <Box num={1} />
            <Box num={2} />
            <Box num={3} />
          </View>
        </View>

        <Text>Full width container</Text>
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
        </View>
      </ScrollView>
    );


    
}


const styles = StyleSheet.create({
    scroll: {
        paddingRight: 5,
        paddingLeft: 5
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    box_container: {    
        gap: 10
    },

    fill_width_box: {
        height: 80,
        width: '100%',
    }
})