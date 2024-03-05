import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from './Footer.style';

export function Footer({ activeTab, changeActiveTab }) {
    return (
        <>
            <View style={Styles.tabs}>
                <TouchableOpacity>
                    <Text style={activeTab == 'all' && Styles.active} onPress={() => changeActiveTab("all")}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={activeTab == 'inProgress' && Styles.active} onPress={() => changeActiveTab("inProgress")}>In Progress</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={activeTab == 'completed' && Styles.active} onPress={() => changeActiveTab("completed")}>Completed</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}