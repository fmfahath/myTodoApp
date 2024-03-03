import { Text, Image, View } from "react-native";
import { Styles } from './Header.style';
import Logo from '../../assets/logo.png';


export function Header() {
    return (
        <>
            <View style={Styles.container}>
                <Image style={Styles.logo} source={Logo} />
            </View>
        </>
    )
}   