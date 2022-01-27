import { Button } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { title } from 'store';

export default function ChangeButton() {
  const setText = useSetRecoilState(title);

  const handleChange = () => {
    setText((v) => v + 1);
  };

  return <Button onClick={handleChange}>이름 바꾸기</Button>;
}
