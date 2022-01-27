import { useRecoilValueLoadable } from 'recoil';
import { select } from 'store';

export default function Selecting() {
  const number = useRecoilValueLoadable(select);
  console.log(number);

  if (number.state === 'hasValue') {
    return <>{number.contents}</>;
  }
  return null;
}
