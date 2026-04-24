import { Text, View } from "react-native";
import Header from "./components/header";
import TrendingNews from "./components/TrendingNews";
import data from "../assets/news.json";

export default function Index() {
  return (
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
    </View>
  );
}
