import { useRecoilValue } from 'recoil';
import { TextField } from '@mui/material';

import { todoListInput, useOnChange } from 'store';

export default function CreateTextField() {
  const input = useRecoilValue(todoListInput);
  const onChange = useOnChange();

  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Title"
        name="title"
        value={input.title}
        onChange={onChange}
      />
      <TextField
        required
        id="outlined-multiline-static"
        label="Contents"
        multiline
        rows={4}
        name="contents"
        value={input.contents}
        onChange={onChange}
      />
    </>
  );
}
