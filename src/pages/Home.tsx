import React from 'react';
import Layout from '../components/Layout';
import Title from '../assets/logos/bingo-tournament.png';
import SUbtitle from '../assets/logos/kasukabe-tsumugi-no.png';
import BingoCard from '../assets/bingo-card.png';
import LinkButton from '../components/LinkButton';

const Home: React.FC = () => {
  return (
    <Layout showHome={false} showSettings showCredit>
      <div className="bg-no-repeat bg-center h-screen" style={{ backgroundImage: `url(${BingoCard})` }}>
        <div className="flex justify-center items-center flex-col gap-8">
          <p className="text-3xl">
            <img src={SUbtitle} />
          </p>
          <h1>
            <img src={Title} className="block" />
          </h1>
        </div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LinkButton to="/bingo" className="bg-[#BD69FF] text-[#fff] text-5xl px-10 py-6">
            スタート
          </LinkButton>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
