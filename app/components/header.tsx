import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'

const menu_icon = require('../../public/menu_btn.png')
const cnn_logo = require('../../public/CNN_logo.png')

const Header = () => {
    return (
        <View style={styles.container}>
            
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Image source={menu_icon} style={styles.icon} />

                <Image source={cnn_logo} style={styles.logo} />

                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>Log in</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomBar}>
                <Text style={styles.title}>Trending News</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 40,
        elevation: 4, // shadow for Android
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#cc0000', // CNN red line
    },

    icon: {
        width: 25,
        height: 25,
    },

    logo: {
        width: 70,
        height: 30,
        resizeMode: 'contain',
    },

    loginBtn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#cc0000',
        borderRadius: 3,
    },

    loginText: {
        color: '#cc0000',
        fontWeight: 'bold',
    },

    bottomBar: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    }
})

export default Header