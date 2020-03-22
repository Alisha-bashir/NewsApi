import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button ,FlatList} from 'react-native';
import NewsCard from '../components/NewsCard'
import NewApi from '../Apis/News'
const News = ({ navigation }) => {

    const [news, setNews] = useState([]);


    useEffect(() => {
        getNewsFromAPI()
    }, [])
    //const NewsResponse = async () => {
        //const response = await NewApi.get('top-headlines?country=us&apiKey=48b84474695446a78893afea51523ce6')
        //console.warn(response.dataS)
    //}
    function getNewsFromAPI() {
        NewApi.get('top-headlines?country=us&apiKey=48b84474695446a78893afea51523ce6')
        .then(async function (response) {
            setNews(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    return (
        <View>
            <FlatList data={news.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item = {item}/>
                }}
            />
        </View>

    )
}

export default News;