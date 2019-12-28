import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { socket } from "myIo";
const App = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const a = 15
  useEffect(() => {

    socket.on("moveMobile", (data) => {
      console.log(JSON.stringify(data))
      setX(data.x)
      setY(data.y)
    })
    return () => {
      socket.emit("disconnect")
      socket.off("moveMobile")
      socket.off();
    }
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ width: a, height: a, backgroundColor: "white", position: "absolute", bottom: y, left: x }}></View>
    </View>
  )
}

export default App
