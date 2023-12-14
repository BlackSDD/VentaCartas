import { View,Text,StyleSheet } from "react-native"

const ProductDetailScreen = () => {
    return(
        <View styles= {styles.container}>
            <Text>Detalles de la carta</Text>
        </View>
    )
}
export default ProductDetailScreen

const styles =  StyleSheet.create({
    container: {
        flex:1
    }
})