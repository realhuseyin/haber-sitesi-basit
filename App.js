import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList} from 'react-native';
import data from "./urunler.json"
import Card from "./src/compents/Card"

export default function App() {

  const renderCard = ({item}) => <Card news = {item} />

  return (
    <SafeAreaView>
      <Text style = {styles.baslik}>TRİGOTER</Text>
      <TextInput placeholder='Ara...' style = {styles.input} />


    <View style = {styles.view}>

    <FlatList 
    keyExtractor={(item) => item.id.toString()} 
    data={data}
    renderItem={renderCard}
    numColumns={2}
    columnWrapperStyle = {styles.row}
    />

</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baslik: {
    fontSize: 40,
    color: "purple",
    fontWeight: "bold",
    margin: 4
  },

  input: {
    backgroundColor: "#eceff1",
    margin: 4,
    padding: 14,
    borderRadius: 10,
  },

  row: {
    justifyContent: "space-between"
  },

  view: {
    marginBottom: 200
  },

});
