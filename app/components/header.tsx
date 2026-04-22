import {View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'


const menu_icon = require('../../public/menu_btn.png')
const cnn_logo = require('../../public/CNN_logo.png')

const Header = () => {
    return (
        <View>
            <div>
                <Image source={menu_icon} style={Styles.logos} />
                <Image source={cnn_logo} style={Styles.logos}/>
            </div>
            <div>
                <button>Log in</button>
            </div>
        </View>
    )
}

const Styles = StyleSheet.create({
    logos: {
        height: 60,
        width: 60,
    },

    main: {
        display: "flex"
    }
})

export default Header