import { View, Text, Button, Alert } from 'react-native'
import React, { use, useState } from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'

const signin = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });

    const submit = async() => {
        if(!form.email || !form.password) Alert.alert("Error", "Please enter a vaid email and password");

        setIsSubmitting(true)

        try {

            // Call Appwrite Sign in API Function

            Alert.alert("Success", "You have successfully signed in!");
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
            title="Sign In"
            isLoading ={isSubmitting}
            onPress={submit}
        />

        <View className="flex justify-center mt-5 flex-row gap-2">
            <Text className="base-regular text-grey-100">
                Dont Have an Account?
            </Text>
            <Link href="/sign-up" className="base-bold text-primary">
                Register!
            </Link>
        </View>
    </View>
  )
}

export default signin