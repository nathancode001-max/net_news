import {View, Text} from 'react-native'

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
        <View>
            
        </View>
    )
}