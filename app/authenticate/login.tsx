import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Form, Input } from '@ant-design/react-native';
import React from 'react';
import axios from 'axios';
import { useForm } from '@ant-design/react-native/lib/form/Form';

const Login = () => {
  const [form] = useForm();

  const handleLogin = async (values) => {
    console.log(values)
    // try {
    //   const response = await axios.post("https://6721f1212108960b9cc22b59.mockapi.io/login", values);
    //   console.log("Login Successful:", response.data);
    // } catch (error) {
    //   console.error("Login Error:", error);
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Music Player</Text>
      <Form form={form} onFinish={handleLogin}>
        <Form.Item label="Username:">
          <Input/>
        </Form.Item>
        <Form.Item label="Password:">
          <Input secureTextEntry={true} />
        </Form.Item>
      </Form>
      <Button size='large' style={styles.btn} type='primary' onPress={()=>{form.submit}}>
        Login
      </Button>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#000",
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  btn: {
    width: 300,
    alignSelf: "center", // Center the button horizontally
  },
});