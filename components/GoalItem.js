import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
    return(
    <View style={styles.goalListItem}>
    <Pressable 
        onPress={props.onDeleteItem.bind(this, props.id)}
        android_ripple={{color:'#22222'}}
        style={({pressed}) => pressed && styles.pressedItem}
        >
        <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View> 
)
};

export default GoalItem;

const styles = StyleSheet.create({

    goalListItem: {
        margin: 6,
        borderRadius: 6,
        backgroundColor: '#311b6b',
      },
      pressedItem:{
        opacity:0.5
      },
      goalText:{
        color:'white',
        padding: 8,
      }
});