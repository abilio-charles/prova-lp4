import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css'; // Ajuste o caminho do arquivo de estilos conforme necessário

type Auction = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    currentBid: number;
    endTime: string;
};

const AuctionPage = () => {
    const [auction, setAuction] = useState<Auction | null>(null);
    const [bid, setBid] = useState<number>(0);
    const { id } = useParams<{ id: string }>();
  
    useEffect(() => {
      // Lógica para buscar os detalhes do leilão usando o id
    }, [id]);
  
    const handleBidSubmit = () => {
      // Aqui você pode implementar a lógica para enviar o lance
      // Por exemplo, verificar se o lance é maior que o lance atual + 10
      // e então enviar os dados para a API
    };
  
    if (!auction) return <p>Carregando...</p>;
  
    return (
      <div className={styles.container}>
        <h1>{auction.title}</h1>
        <img src={auction.imageUrl} alt={auction.title} />
        <p>{auction.description}</p>
        <p>Lance Atual: R$ {auction.currentBid}</p>
        <p>Tempo Restante: {auction.endTime}</p>
        <input type="number" value={bid} onChange={(e) => setBid(Number(e.target.value))} min={auction.currentBid + 10} />
        <button onClick={handleBidSubmit}>Enviar Lance</button>
        {/* Restante do código para mostrar informações de finalização ou cancelamento e botão de retorno */}
      </div>
    );
  };
  
  export default AuctionPage;