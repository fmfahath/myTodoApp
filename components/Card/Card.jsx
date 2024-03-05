import { Text, View, Image, TouchableOpacity } from "react-native";
import Checked from '../../assets/checked.png';
import { styles } from './Card.style';


export function Card({ todoItem, updateTodo }) {


    return (
        <>
            <TouchableOpacity onPress={() => updateTodo(todoItem)}>
                <View style={styles.container}>
                    <Text style={todoItem.isCompleted == true && styles.completed}>{todoItem.title}</Text>
                    {todoItem.isCompleted == true && <Image style={styles.checked} source={Checked} />}
                </View>
            </TouchableOpacity>
        </>
    )
}