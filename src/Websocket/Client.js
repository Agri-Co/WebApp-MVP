import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket"
import { useDispatch, useSelector } from "react-redux";
import { setwatering } from "../Features/WateringSlice";
import { sethumidity } from "../Features/HumiditySlice"
import { useEffect } from "react";

const socketUrl = 'ws://localhost:3001';

var actioncount = 0

export const loggerMiddleware = (store) => (next) => (action) => {
    // console.log("action", action);
    if (action.type === 'profil/setemplacement') {
        actioncount = 1
        // console.log(action)

    }
    return next(action)
}

export function WebSocketClient() {
    const emplacement = useSelector(state => state.profil.emplacement)
    const humidity = useSelector(state => state.humiditydata.humidity)
    const json_emplacement = {
        emplacement
    }

    // console.log("action: ",actioncount)
    const dispatch = useDispatch()
    const { sendMessage, sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl, { onOpen: () => console.log('open'), shouldReconnect: (CloseEvent) => true, })
    console.log("DeBUG1")

    useEffect(() => {
        switch (actioncount) {
            case 0:
                // sendJsonMessage(json_emplacement) // remove
                if (lastJsonMessage !== null)
                    // console.log(lastJsonMessage)
                    for (var i in lastJsonMessage) {
                        // console.log("jsonmessage content:", i)
                        if (i === "humidity") {
                            dispatch(sethumidity(lastJsonMessage[i]))
                            console.log("humidity:", humidity)
                        }
                        if (i === "nextWatering")
                            dispatch(setwatering(lastJsonMessage[i]))
                    }
                break
            case 1:
                console.log("DeBUG2")
                if (actioncount === 1) {
                    // console.log(emplacement)
                    // sendMessage(emplacement)
                    sendJsonMessage(json_emplacement)
                    actioncount = 0
                    // console.log("actino afet action", actioncount)
                }
                break
        }
    })
}