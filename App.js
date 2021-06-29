import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title1}>Hack Tools</Text>
        <Text style={styles.title2}>Questionário</Text>
        <View style={styles.formContainer}>
          <QuestionForm question = "Você está bem?"/>
          <QuestionForm question = "Justifique sua resposta."/>
        </View>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const QuestionForm = (props) => {
  const [answer, setAnswerText] = useState("");

  return(
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{props.question}</Text>
      <View style={styles.answerBackground}>
        <TextInput
          style={{height: 75}}
          placeholder = "Resposta"
          textAlignVertical = "top"
          multiline = {true}
          numberOfLines = {4}
          maxLength = {160}
          onChangeText = {answer => setAnswerText(answer)}
          defaultValue = {answer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 50,
    borderTopColor: '#8000ff'
  },
  formContainer:{
    flex: 1,
    backgroundColor: '#fff',
    width: '90%',
    justifyContent: 'flex-start'
  },
  questionContainer:{
    paddingBottom: 15
  },
  answerBackground: {
    backgroundColor: '#d4d4d4',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 1
  },
  questionText:{
    fontSize: 18,
    paddingStart: 10,
  },
  title1: {
    color: '#1a1aff',
    fontSize: 42,
    paddingBottom: 2
  },
  title2: {
    color: '#ff1a1a',
    fontSize: 24,
    paddingBottom: 5
  }
});