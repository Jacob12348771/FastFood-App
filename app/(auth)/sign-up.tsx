import { View, Text, Button } from 'react-native'
import { router } from 'expo-router'

const signup = () => {
  return (
    <View>
      <Text>Sign-Up</Text>
      <Button title="Sign In" onPress={() => router.push("/sign-in")} />
    </View>
  )
}

export default signup