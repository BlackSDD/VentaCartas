import { View,Text,StyleSheet, FlatList } from "react-native"
import product_data from '../data/products_data.json'
import ProductItem  from "../components/ProductItems"
import Header from '../components/Header'
import {useState,useEffect} from 'react'

const ProductsByCategoryScreen = ({category}) => {

    const [productByCategory, setProductByCategory] = useState([])

    useEffect(()=>{
        const productFilteredByCategory = product_data.filter(product=>product.category === category)
        setProductByCategory(productFilteredByCategory)
    },[category])

    const renderProductItem = ({item} )=> (
        <ProductItem item={item}/>
    )


    return(
        <>
        <Header title ="Cartas"/>
        <FlatList 
            data={productByCategory}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
        />
        </>
    )
}
export default ProductsByCategoryScreen

const styles =  StyleSheet.create({
    container: {
        flex:1
    }
})