import { View,Text,StyleSheet, FlatList } from "react-native"
import  Header  from "../components/Header"
import Categories from "../data/categories_data.json"
import CategoryItems from '../components/CategoryItems'

const CategoriesScreen = ({onSelectCategoryEvent}) => {

    const renderCategoryItem = ({item}) => (
        <CategoryItems category={item} onSelectCategoryEvent={onSelectCategoryEvent}/>
    )

    return(
        <>
        <Header title ="Juego" />
        <FlatList style={styles.FlatListStyle} data = {Categories} renderItem={renderCategoryItem} keyExtractor={item => item} />
        </>
    )
}
export default CategoriesScreen

const styles =  StyleSheet.create({
})