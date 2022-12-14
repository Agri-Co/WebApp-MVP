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
    if (lastJsonMessage !== null)
        for (var i in lastJsonMessage) {
            console.log("jsonmessage content:", i)
            if (i === "humidity")
                dispatch(sethumidity(lastJsonMessage[i]))
            if (i === "nextWatering")
                dispatch(setwatering(lastJsonMessage[i]))
        }
}