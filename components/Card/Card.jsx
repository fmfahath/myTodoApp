import { Text, View, Image } from "react-native";
import Checked from '../../assets/checked.png';
import { styles } from './Card.style';


export function Card({ todoList }) {


    return (
        <>
            <View style={styles.container} key={todoList.id}>
                <Text style={todoList.isCompleted == true && styles.completed}>{todoList.title}</Text>
                {todoList.isCompleted == true && <Image style={styles.checked} source={Checked} />}
            </View>
        </>
    )
}