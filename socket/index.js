import io from "socket.io-client"

//configuration
const url = "192.168.137.1"
const port = 3000
const serverbase = `http://${url}:${port}`

const socket = io(serverbase)

export { socket }