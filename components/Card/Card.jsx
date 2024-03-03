import { Text, View, Image } from "react-native";
import Checked from '../../assets/checked.png';
import { Styles, styles } from './Card.style';


export function Card() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>React Native</Text>
                <Image style={styles.checked} source={Checked} />
            </View>
        </>
    )
}