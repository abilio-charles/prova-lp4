import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'
import dotenv from 'dotenv'
import { Auction } from './models/Auction'
import { Bid } from './models/Bid'

dotenv.config()

const app = express()

const messages: Bid[] = []
let highestBid = 0;

export const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: [
      `${process.env.AUCTIONEER_APP_URL}`,
      `${process.env.AUCTIONS_APP_URL}`,
    ],
  },
})

io.on('connection', (socket) => {
  console.log('Client connected')

  socket.emit('previousMessages', messages)

  socket.on('sendNewMessage', (messageObj: Bid) => {
    if (messageObj.value > highestBid) {
      highestBid = messageObj.value;
      console.log(messageObj);
      messages.push(messageObj);
      socket.broadcast.emit('messageReceived', messageObj);
    } else {
      console.log('Bid is not higher than the current highest bid');
    }
  })

  socket.on('auctionStarted', (messageObj: Auction) => {
    console.log(messageObj)
    highestBid = 0; // Reset highest bid for new auction
    socket.broadcast.emit('newAuction', messageObj)

    /**
     * O bloco a seguir serve apenas para testar
     * a tela de acompanhamento do leilão ao vivo.
     * Remover depois.
     */
    const names = ['Fulano', 'Beltrano', 'Ciclano']
    let bidValue = 510
    setInterval(() => {
      const bid: Bid = {
        auctionId: messageObj.id,
        username: names[Math.floor(Math.random() * names.length)],
        value: bidValue,
      }

      bidValue += 50

      socket.broadcast.emit('messageReceived', bid)
      console.log('Bid sent')
    }, 1000)
  })
})
