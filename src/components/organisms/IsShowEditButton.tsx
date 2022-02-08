import { useRecoilValue } from 'recoil';
import { editState } from 'store';
import EditButton from './EditButton';
import EditFloatingButton from './EditFloatingButton';

export default function IsShowEditButton() {
  const state = useRecoilValue(editState);

  return state ? <EditFloatingButton /> : <EditButton />;
}
