import {View, Text, StyleSheet} from 'react-native'

type TrendingNewsType = {
    news: {
        title: string;
        description: string;
        body: string;
    }
}

function TrendingNews({news}: TrendingNewsType){

    const {title, description, body} = news;
    return(
        <View style={styles.trending_news}>
            <Text>Trending News</Text>
            <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{body}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    trending_news: {
        padding: 10,
        marginTop: 35,
    }
})

export default TrendingNews