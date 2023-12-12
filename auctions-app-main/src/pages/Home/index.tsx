import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
// Importe outros componentes ou serviços conforme necessário
/*
type Auction = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  currentBid: number;
  endTime: string; // Ou um tipo de data adequado
};  */ //esse codigo é o correto

const fakeAuctions = [
  {
    id: '1',
    title: 'Leilão de Arte',
    description: 'Pintura a óleo do século XIX.',
    imageUrl: 'https://4.bp.blogspot.com/-fJALn7OHpLA/V9A1ByeugeI/AAAAAAAACZ0/llzeFgxy3hgE74EuRRPMI2vVG5h1jogMgCLcB/s1600/antiguissimo-quadro-gobelin-da-epoca_MLBK_4199%2B%25283%2529.jpg',
    currentBid: 1000,
    endTime: '2023-12-31T23:59:59'
  },

  {
    id: '2',
    title: 'Leilão de carro',
    description: 'Amarok 2012, carro de mulher nunca foi usado para trabalho pesado',
    imageUrl: 'http://4.bp.blogspot.com/-BVeeuEg_brU/T0zKHnjCTEI/AAAAAAAAAUA/jae_AHLCIkE/s1600/Nova-Amarok-2012-automatica-prata-4.jpg',
    currentBid: 100000,
    endTime: '2023-12-31T23:59:59'
  },
  // Adicione mais objetos aqui para simular mais leilões
];

const Home = () => {
  const [auctions, setAuctions] = useState(fakeAuctions); //useState<Auction[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuctions = async () => {
      // Implemente a lógica para buscar os leilões da API
    };
    fetchAuctions();
  }, []);

  const handleEnterAuction = (auctionId: string) => {
    navigate(`/auction/${auctionId}`);
  };

  return (
    <div>
      <header className={styles.header}>
        <h1>LANCE CERTO</h1>
      </header>

      <div className={styles.container}>
        {auctions.length > 0 ? (
          <ul className={styles.auctionList}>
            {auctions.map(auction => (
              <li key={auction.id} className={styles.auctionItem}>
                <h2 className={styles.auctionTitle}>{auction.title}</h2>
                <p className={styles.auctionDescription}>{auction.description}</p>
                <img src={auction.imageUrl} alt={auction.title} className={styles.auctionImage} />
                <p className={styles.auctionCurrentBid}>Lance Atual: R$ {auction.currentBid}</p>
                <p className={styles.endTime}>Tempo Restante: {auction.endTime}</p>
                <button onClick={() => handleEnterAuction(auction.id)} className={styles.enterButton}>
                  Participar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum leilão ocorrendo no momento.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
