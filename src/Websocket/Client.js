import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket"

const socketUrl = 'ws://10.68.247.221:3000'; 

export const WebSocketClient = () => {
    const {sendMessage, sendJsonMessage, lastMessage, lastJsonMessage} = useWebSocket(socketUrl, {onOpen: () => console.log('open'), shouldReconnect: (CloseEvent) => true,})
    // sendMessage('hello')
    if (lastMessage !== null)
        console.log("lastmessage:", lastMessage)
    if (lastJsonMessage !== null)
        console.log("jsonmessage:", lastJsonMessage)
    // return lastMessage
    // lastMessage.data = null
    // lastJsonMessage.data = null
}