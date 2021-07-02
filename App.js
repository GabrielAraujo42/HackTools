import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MainMenu} />
        <Stack.Screen name="Criar Questionário" component={CreateForm} />
        <Stack.Screen name="Questionário" component={AnswerForm} />
        <Stack.Screen name="Respondidos" component={ViewForms}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainMenu({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Hack Tools</Text>
      <View style={styles.menuContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Criar Questionário" onPress={() => navigation.navigate("Criar Questionário")}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Responder Questionário" onPress={() => navigation.navigate("Questionário")}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Questionários Respondidos" onPress={() => navigation.navigate("Respondidos")}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

function CreateForm() {
  var [questionAmount, setQuestionAmount] = useState(1)
  var [questions, setQuestionValue] = useState([])

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 20}}>
        <QuestionForm height={25} placeholder="Questionário" question="Título do questionário:" />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.headerItem}>
          <QuestionForm height={25} placeholder="Usuário" question="Usuário:" />
        </View>
        <View style={styles.headerItem}>
          <QuestionForm height={25} placeholder="DD/MM/AAAA" question="Data de cadastro:" />
        </View>
      </View>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.buttonContainer}>
        <AddQuestions questionAmount={questionAmount}/>
        <View style={styles.buttonContainer}>
          <Button title="Adicionar questão" onPress={() => setQuestionAmount(++questionAmount)}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Criar questionário" />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

function AddQuestions(props) {
  const itemList = [];
  for (let index = 0; index < props.questionAmount; index++)
  {
    itemList.push(<QuestionForm question={"Pergunta " + (index + 1) + ":"} />)
  }
  return (
    <View>{itemList}</View>
  )
}

function AnswerForm({ navigation }) {
  var [answers, setAnswerValue] = useState([])

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 20 }}>
        <Text style={styles.title1}>Título do questionário</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.headerItem}>
          <QuestionForm height={25} placeholder="Usuário" question="Usuário:" />
        </View>
        <View style={styles.headerItem}>
          <QuestionForm height={25} placeholder="DD/MM/AAAA" question="Data:" />
        </View>
      </View>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.buttonContainer}>
        <QuestionForm question="Qual a sua resposta?" />
        <Button title="Enviar" />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

function ViewForms({navigation}) {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  )
}

const QuestionForm = (props) => {
  const [answer, setAnswerText] = useState("");

  return(
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{props.question}</Text>
      <View style={styles.answerBackground}>
        <TextInput
          style={{height: props.height}}
          placeholder = {props.placeholder}
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

QuestionForm.defaultProps = {
  placeholder: 'Resposta',
  height: 75
};

export default MyStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 10,
    borderTopColor: '#8000ff'
  },
  headerContainer:{
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 20,
  },
  headerItem:{
    flex: 1,
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  formContainer:{
    flex: 1,
    backgroundColor: '#fff',
    width: '90%',
    justifyContent: 'flex-start'
  },
  scrollContainer:{
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  menuContainer:{
    flex: 1,
    width: '90%',
    justifyContent: 'center',
  },
  buttonContainer:{
    paddingTop: 15,
    paddingBottom: 15
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
    fontSize: 16,
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