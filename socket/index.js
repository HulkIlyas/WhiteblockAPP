import io from "socket.io-client";

const socket = io("http://192.168.137.1:3000")
export { socket }