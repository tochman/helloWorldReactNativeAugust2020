import React from 'react'
import { useSelector } from "react-redux";
import { StyleSheet, Button, Text, View } from 'react-native'

const MainScreen = (props) => {
  const greeting = useSelector(state => state.mainPageGreeting)
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button
        title="Press me!"
        onPress={() => props.navigation.navigate("Another page", {customParameter: "Hellooooo Thomas"})}
      />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
