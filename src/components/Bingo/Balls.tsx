import React from 'react';
import { useSettings } from '../../contexts/SettingsContext';
import { BingoNum } from '../../types/BingoNum';
import { colors } from '../../utils/colors';
import Ball from './Ball';

type Props = {
  hit: BingoNum[];
};

const Balls: React.FC<Props> = ({ hit }) => {
  const settings = useSettings();

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div className="grid grid-cols-2 tex" key={i}>
          <div>
            {[...Array(15)].map((_, j) => (
              <Ball
                key={i * 15 + (j + 1)}
                type={
                  hit.indexOf((i * 15 + (j + 1)) as BingoNum) != -1
                    ? settings.bingo.ball.hit
                    : settings.bingo.ball.notHit
                }
                color={colors[i]}
                num={(i * 15 + (j + 1)) as BingoNum}
              />
            ))}
          </div>
          {/* <div>
          {[...Array(7)].map((_, j) => (
            <Ball
              key={i * 15 + (j + 9)}
              type={hit.indexOf((i * 15 + (j + 1)) as BingoNum) != -1 ? 'hit' : 'notHit'}
              color={colors[i]}
              num={(i * 15 + (j + 9)) as BingoNum}
            />
          ))}
        </div> */}
        </div>
      ))}
    </>
  );
};

export default Balls;
