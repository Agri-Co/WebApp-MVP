import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket"

const socketUrl = 'ws://10.68.247.221:3000'; 

export const WebSocketTest = () => {
    const {sendMessage, sendJsonMessage, lastMessage} = useWebSocket(socketUrl, {onOpen: () => console.log('open'), shouldReconnect: (CloseEvent) => true,})
    return sendMessage
}