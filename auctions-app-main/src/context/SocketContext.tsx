import { ReactNode, createContext } from "react"
import { Socket, io } from "socket.io-client"

type socketContextType = {
    socket: Socket
}

const initialValue: socketContextType = {
    socket: io(`${process.env.REACT_APP_SOCKET_SERVER_URL}`),
}

export const SocketContext = createContext(initialValue)

type Props = {
    children: ReactNode
}

export const SocketContextProvider = ({ children }: Props) => {
    return (
        <SocketContext.Provider value={{ socket: initialValue.socket }}>
            {children}
        </SocketContext.Provider>
    )
}

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ta errado esse codigo atenção 