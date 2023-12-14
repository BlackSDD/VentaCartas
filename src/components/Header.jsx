import { View,Text,StyleSheet, TouchableOpacity } from "react-native"
import { colors } from '../global/color'

const Header = ({title}) => {
    return(
        <View style= {styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
        
    )
}
export default Header

const styles =  StyleSheet.create({
    headerContainer:{
        marginTop:20,
        height:100,
        justifyContent:"center",
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    headerTitle: {
        color: colors.TextPrimary,
        fontSize: 50,
        fontFamily: 'Arimo-Bold'
    },
    backButton: {
        color: colors.TextPrimary,
        fontSize: 18,
        fontFamily: 'Arimo-Regular',
        textDecorationLine: 'underline',
      },
})