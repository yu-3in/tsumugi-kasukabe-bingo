import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Title from '../assets/logos/bingo-tournament.png';
import Subtitle from '../assets/logos/kasukabe-tsumugi-no.png';
import BingoCard from '../assets/bingo-card.png';
import LinkButton from '../components/LinkButton';
import { fetchBingo, storeBingo } from '../api/db/bingo';

const Home: React.FC = () => {
  const [showContinueButton, setShowContinueButton] = useState(false);

  useEffect(() => {
    (async () => {
      // ビンゴの履歴を取得し、履歴が存在すれば「つづきから」ボタンを表示する
      const bingo = await fetchBingo();
      if (bingo.length > 0) {
        setShowContinueButton(true);
      }
    })();
  }, []);

  const handleClickStart = async () => {
    // ビンゴの履歴を初期化する
    storeBingo([]);
  };

  return (
    <Layout showHome={false} showSettings showCredit>
      <div className="bg-no-repeat bg-center h-screen" style={{ backgroundImage: `url(${BingoCard})` }}>
        <div className="flex justify-center items-center flex-col gap-8">
          <p className="text-3xl">
            <img src={Subtitle} />
          </p>
          <h1>
            <img src={Title} className="block" />
          </h1>
        </div>
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex gap-8 flex-col items-center">
            <LinkButton to="/bingo" className="bg-[#BD69FF] text-[#fff] text-5xl px-10 py-6" onClick={handleClickStart}>
              はじめから
            </LinkButton>
            {showContinueButton && (
              <LinkButton to="/bingo?type=continue" className="bg-[#BD69FF] text-[#fff] text-5xl px-10 py-6">
                つづきから
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
