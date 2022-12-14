import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setwatering } from "../Features/WateringSlice";
import { sethumidity } from "../Features/HumiditySlice"

const socketUrl = 'ws://localhost:3001'; 

export function WebSocketClient() {
    const dispatch = useDispatch()
    const {lastJsonMessage} = useWebSocket(socketUrl, {onOpen: () => console.log('open'), shouldReconnect: (CloseEvent) => true,})
    // sendMessage('hello')
    // if (lastMessage !== null)
    //     console.log("lastmessage:", lastMessage)
    if (lastJsonMessage !== null)
        console.log("jsonmessage:", lastJsonMessage)
    // if (lastJsonMessage !== null)
        // dispatch(setwatering(lastJsonMessage.))
        // dispatch(sethumidity(lastJsonMessage.))
}