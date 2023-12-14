import {View, StyleSheet,Text} from 'react-native'
import Card from './Card'
import { TouchableOpacity } from 'react-native'

const CategoryItem = ({category, onSelectCategoryEvent}) => {
    return(
        <TouchableOpacity onPress={() => onSelectCategoryEvent(category)}>
            <Card style={styles.CardContainer}>
                <Text style={styles.Text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem
const styles = StyleSheet.create({
    CardContainer:{
        backgroundColor: '#FFEA00',
        padding: 20,
        margin:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text : {
        fontSize: 15,
        textTransform: 'uppercase',
        color: '#0466C8'
    }
})