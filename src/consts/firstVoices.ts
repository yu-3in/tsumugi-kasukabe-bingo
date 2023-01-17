import { sounds } from '../sounds';
import { firstVoicesType } from '../types/firstVoices';

export const firstVoicesConst: { name: firstVoicesType; voice: any; defaultActive: boolean }[] = [
  { name: '次の番号は', voice: sounds.bingo['次の番号は'], defaultActive: true },
  { name: 'はいはいー次はーー', voice: sounds.bingo['はいはいー次はーー'], defaultActive: true },
  { name: 'さてさて次の番号はーー', voice: sounds.bingo['さてさて次の番号はーー'], defaultActive: true },
  { name: 'さてさてお次はー', voice: sounds.bingo['さてさてお次はー'], defaultActive: true },
  { name: '次はどれにしようかなんー', voice: sounds.bingo['次はどれにしようかなんー'], defaultActive: true },
  { name: '次は何かなえーと', voice: sounds.bingo['次は何かなえーと'], defaultActive: true },
  { name: '次に選ぶのは', voice: sounds.bingo['次に選ぶのは'], defaultActive: true },
  { name: '選ばれたのは', voice: sounds.bingo['選ばれたのは'], defaultActive: true },
  { name: '次はこの番号で決まり', voice: sounds.bingo['次はこの番号で決まり'], defaultActive: true },
  { name: 'どれにしようかなえーと', voice: sounds.bingo['どれにしようかなえーと'], defaultActive: true },
  { name: 'そうだな次の番号は', voice: sounds.bingo['そうだな次の番号は'], defaultActive: true },
  { name: '次はこれだね', voice: sounds.bingo['次はこれだね'], defaultActive: true },
  { name: '次はどれがいいかな', voice: sounds.bingo['次はどれがいいかな'], defaultActive: true }
];
