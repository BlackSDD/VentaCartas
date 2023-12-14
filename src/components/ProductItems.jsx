import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductItem = ({item}) => {
    return (
        <TouchableOpacity style={style.containerProductItem}>
            <Text style={style.productoTitle}>{item.title}</Text>
            <Image
                style={style.productImage}
                resizeMode="cover"
                source={{uri: item.thumbnail}}
            />
        </TouchableOpacity>
    )
}
export default ProductItem
const style = StyleSheet.create({
    containerProductItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10
    },
    productImage: {
        width:50,
        height: 50
    }
})