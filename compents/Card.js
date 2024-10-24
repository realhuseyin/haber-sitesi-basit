import React from "react";
import { View, Text, Image, StyleSheet, Dimensions} from "react-native";

const NewsCard = ({news}) =>{

    return(
        <View style = {styles.container}>
            <Image style = {styles.imgae} source={{uri: news.imgURL}} />
            <View style = {styles.innerContainer}>
            <Text style = {styles.title}>{news.title}</Text>
            <Text style = {styles.price}>{news.price}</Text>
            <Text style = {styles.author}>{news.inStock ? "" : "STOKTA  YOK"}</Text>
            </View>
        </View>
    )
}

export default NewsCard;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: Dimensions.get("window").width / 2.2,
        height: Dimensions.get("window").height / 2.5,
        backgroundColor: "#eceff1",
        padding: 10,
        borderRadius: 10,
    },
    imgae: {
        width: Dimensions.get("window").width / 2.4,
        height: Dimensions.get("window").height / 4,
        borderRadius: 10,
        objectFit: "cover"
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
    },

    price: {
        fontSize: 16,
        marginTop: 10
    },

    author: {
        color: "red",
        fontSize: 16
    }
})