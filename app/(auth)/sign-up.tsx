import { View, Text, Button, Alert } from 'react-native'
import React, { use, useState } from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'

const signup = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const submit = async() => {
        if(!form.name || !form.email || !form.password) return Alert.alert("Error", "Please enter a valid name, email and password");

        setIsSubmitting(true)

        try {

            // Call Appwrite Sign up API Function

            Alert.alert("Success", "You have successfully Registered!");
            router.replace('/');
        } catch (error: any) {
            Alert.alert("Error", error.message || "Something went wrong, please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">

         <CustomInput
            placeholder= "Enter Your Full Name"
            value={form.name}
            onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
            label="Full Name"
        />  
        <CustomInput
            placeholder= "Enter E-mail"
            value={form.email}
            onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
            label="E-mail"
            keyboardType="email-address"
        />  
        <CustomInput
            placeholder= "Enter Password"
            value={form.password}
            onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
            label="Password"
            secureTextEntry={true}
        />
        <CustomButton 
            title="Register"
            isLoading ={isSubmitting}
            onPress={submit}
        />

        <View className="flex justify-center mt-5 flex-row gap-2">
            <Text className="base-regular text-grey-100">
                Already Have an Account?
            </Text>
            <Link href="/sign-in" className="base-bold text-primary">
                Log in!
            </Link>
        </View>
    </View>
  )
}

export default signup