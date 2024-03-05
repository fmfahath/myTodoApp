import { Text, TouchableOpacity, View } from "react-native";
import { Styles } from './Footer.style';

export function Footer({ activeTab, changeActiveTab, data }) {

    // get todo item counts
    const countStatus = data.reduce((acc, item) => {
        item.isCompleted == true ? acc.completed++ : acc.inProgress++
        return acc
    },
        {
            all: data.length,
            inProgress: 0,
            completed: 0,
        })
    return (
        <>
            <View style={Styles.tabs}>
                <TouchableOpacity>
                    <Text style={activeTab == 'all' && Styles.active} onPress={() => changeActiveTab("all")}>All ({countStatus.all})</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={activeTab == 'inProgress' && Styles.active} onPress={() => changeActiveTab("inProgress")}>In Progress ({countStatus.inProgress})</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={activeTab == 'completed' && Styles.active} onPress={() => changeActiveTab("completed")}>Completed ({countStatus.completed})</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}