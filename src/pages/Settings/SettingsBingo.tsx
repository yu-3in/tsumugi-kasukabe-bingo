import React, { useCallback, useMemo } from 'react';
import Title from '../../assets/logos/settings-bingo.png';
import { BallType } from '../../components/Bingo/Ball';
import BallRadio from '../../components/Bingo/BallRadio';
import SettingsLayout from '../../components/SettingsLayout';
import { useSetSettings, useSettings } from '../../contexts/SettingsContext';
import { BingoNum } from '../../types/BingoNum';
import { Colors } from '../../types/Colors';
import Bingo from '../Bingo';

const SettingsBingo: React.FC = () => {
  const settings = useSettings();
  const setSettings = useSetSettings();
  const ball: { num: BingoNum; color: Colors } = { num: 72, color: 'green' };

  const handleChangeBall = useCallback(
    (type: BallType, status: 'hit' | 'notHit' | 'history') => {
      setSettings({
        ...settings,
        bingo: {
          ...settings.bingo,
          ball: {
            ...settings.bingo.ball,
            [status]: type
          }
        }
      });
    },
    [settings]
  );
  const handleChangeBallNotHit = useCallback(
    (type: BallType) => {
      handleChangeBall(type, 'notHit');
    },
    [settings]
  );
  const handleChangeBallHit = useCallback(
    (type: BallType) => {
      handleChangeBall(type, 'hit');
    },
    [settings]
  );
  const handleChangeBallHistory = useCallback(
    (type: BallType) => {
      handleChangeBall(type, 'history');
    },
    [settings]
  );

  return (
    <SettingsLayout titleImage={Title}>
      <div className="absolute top-16 -right-20 scale-[32%] aspect-video h-full">
        <div className="w-full h-full bg-transparent absolute z-10"></div>
        <div className="border bg-gray-200 bg-opacity-50 p-8 px-12 shadow-2xl rounded-2xl overflow-hidden">
          <div className="scale-[350%] text-center pt-5 pb-2 mb-24 bg-yellow-100">プレビュー</div>
          <div className="bg-white">
            <Bingo preview />
          </div>
        </div>
      </div>
      <div className="spacing-y-3">
        <div className="">
          <div>ボールデザイン</div>
          <li className="mt-4 ml-3">未ヒット</li>
          <div className="mt-4 ml-3 flex gap-8">
            <BallRadio
              name="notHit"
              ball={{ type: 'normal', ...ball }}
              checked={'normal' === settings.bingo.ball.notHit}
              handleChange={() => handleChangeBallNotHit('normal')}
            />
            <BallRadio
              name="notHit"
              ball={{ type: 'lightNormal', ...ball }}
              checked={'lightNormal' === settings.bingo.ball.notHit}
              handleChange={() => handleChangeBallNotHit('lightNormal')}
            />
            <BallRadio
              name="notHit"
              ball={{ type: 'filled', ...ball }}
              checked={'filled' === settings.bingo.ball.notHit}
              handleChange={() => handleChangeBallNotHit('filled')}
            />
            <BallRadio
              name="notHit"
              ball={{ type: 'lightFilled', ...ball }}
              checked={'lightFilled' === settings.bingo.ball.notHit}
              handleChange={() => handleChangeBallNotHit('lightFilled')}
            />
            <BallRadio
              name="notHit"
              ball={{ type: 'filledBorder', ...ball }}
              checked={'filledBorder' === settings.bingo.ball.notHit}
              handleChange={() => handleChangeBallNotHit('filledBorder')}
            />
            <BallRadio
              name="notHit"
              ball={{ type: 'dark', ...ball }}
              checked={'dark' === settings.bingo.ball.notHit}
              handleChange={() => handleChangeBallNotHit('dark')}
            />
          </div>
          <li className="mt-4 ml-3">ヒット</li>
          <div className="mt-4 ml-3 flex gap-8">
            <BallRadio
              name="hit"
              ball={{ type: 'normal', ...ball }}
              checked={'normal' === settings.bingo.ball.hit}
              handleChange={() => handleChangeBallHit('normal')}
            />
            <BallRadio
              name="hit"
              ball={{ type: 'lightNormal', ...ball }}
              checked={'lightNormal' === settings.bingo.ball.hit}
              handleChange={() => handleChangeBallHit('lightNormal')}
            />
            <BallRadio
              name="hit"
              ball={{ type: 'filled', ...ball }}
              checked={'filled' === settings.bingo.ball.hit}
              handleChange={() => handleChangeBallHit('filled')}
            />
            <BallRadio
              name="hit"
              ball={{ type: 'lightFilled', ...ball }}
              checked={'lightFilled' === settings.bingo.ball.hit}
              handleChange={() => handleChangeBallHit('lightFilled')}
            />
            <BallRadio
              name="hit"
              ball={{ type: 'filledBorder', ...ball }}
              checked={'filledBorder' === settings.bingo.ball.hit}
              handleChange={() => handleChangeBallHit('filledBorder')}
            />
            <BallRadio
              name="hit"
              ball={{ type: 'dark', ...ball }}
              checked={'dark' === settings.bingo.ball.hit}
              handleChange={() => handleChangeBallHit('dark')}
            />
          </div>
          <li className="mt-4 ml-3">履歴</li>
          <div className="mt-4 ml-3 flex gap-8">
            <BallRadio
              name="history"
              ball={{ type: 'normal', ...ball }}
              checked={'normal' === settings.bingo.ball.history}
              handleChange={() => handleChangeBallHistory('normal')}
            />
            <BallRadio
              name="history"
              ball={{ type: 'filled', ...ball }}
              checked={'filled' === settings.bingo.ball.history}
              handleChange={() => handleChangeBallHistory('filled')}
            />
            <BallRadio
              name="history"
              ball={{ type: 'filledBorder', ...ball }}
              checked={'filledBorder' === settings.bingo.ball.history}
              handleChange={() => handleChangeBallHistory('filledBorder')}
            />
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default SettingsBingo;
