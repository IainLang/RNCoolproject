import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }
    
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/Images/planner.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
           <Button title="Add Goal" onPress={addGoalHandler} color={'#e4d0ff'}/>
          </View>
          <View style={styles.buttonStyle}>
            <Button title='Close' onPress={props.onCancel} color={'#e4d0ff'}/>
          </View>
        </View>
      </View>
      </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:16,
        backgroundColor:'#311b6b',

      },
      image:{
        width:100,
        height:100,
        margin:20
      },
      textInput: {
        borderWidth: 1,
        borderWidth:2,
        width: "100%",
        padding: 16,
        backgroundColor:"#e4d0ff",
        borderRadius:6,
        color:'#120438',

      },
      buttonContainer:{
        flexDirection:'row',
        margin:5,

      },
      buttonStyle:{
        width: '30%',
        marginHorizontal: 8,
        borderRadius:6,
      }
});