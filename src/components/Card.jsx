import {View, StyleSheet} from 'react-native'

const Card = ({children,style}) => {
    return(
        <View style = {{...styles.cardstyle,...style}}>
            {children}
        </View>
    )
}

export default Card
const styles = StyleSheet.create({
    cardstyle: {
        shadowColor: '#999A1',
        textShadowOffset: {
            width:3,
            height: 5
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 1
    }
})