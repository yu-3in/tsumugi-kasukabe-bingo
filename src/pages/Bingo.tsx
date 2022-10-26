import React, { useState } from 'react';
import Ball from '../components/Bingo/Ball';
import Layout from '../components/Layout';
import { BingoNum } from '../types/BingoNum';
import { Colors } from '../types/Colors';
import Roulette from '../components/Bingo/Roulette';

const Bingo: React.FC = () => {
  // 1 ~ 75が照準に格納された配列を初期値とする
  const [notHit, setNotHit] = useState<BingoNum[]>([...Array(75)].map((_, i) => ++i) as BingoNum[]);
  const [hit, setHit] = useState<BingoNum[]>([]);
  const colors: Colors[] = ['pink', 'orange', 'yellow', 'blue', 'green'];

  return (
    <Layout>
      <div className="flex justify-start items-center">
        <div className="grid grid-cols-5 w-4/12">
          {[...Array(5)].map((_, i) => (
            <div className="grid grid-cols-2 tex" key={i}>
              <div>
                {[...Array(15)].map((_, j) => (
                  <Ball
                    key={i * 15 + (j + 1)}
                    hit={hit.indexOf((i * 15 + (j + 1)) as BingoNum) != -1}
                    color={colors[i]}
                    num={(i * 15 + (j + 1)) as BingoNum}
                  />
                ))}
              </div>
              {/* <div>
                {[...Array(7)].map((_, j) => (
                  <BingoBall color="red">{i * 15 + (j + 9)}</BingoBall>
                ))}
              </div> */}
            </div>
          ))}
        </div>
        <div className="w-4/12">
          <Roulette notHit={notHit} setNotHit={setNotHit} hit={hit} setHit={setHit} />
        </div>
      </div>
    </Layout>
  );
};

export default Bingo;
