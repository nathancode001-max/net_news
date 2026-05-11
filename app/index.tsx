import { ScrollView, View } from "react-native";
import Header from "../components/header";
import TrendingNews from "../components/TrendingNews";
import data from "../assets/news.json";
import { Link } from "expo-router"

export default function Index() {
  return (
    <ScrollView>

    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Header />
      <TrendingNews news={data.news_1}  />
      <TrendingNews news={data.news_2}  />
      <TrendingNews news={data.news_3}  />
      <TrendingNews news={data.news_4}  />
      <Link href="/explore_flexbox">Goto Explore Flexbox</Link>
    </View>
    </ScrollView>
  );
}
