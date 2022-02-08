import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  atom,
  selectorFamily,
  useRecoilTransaction_UNSTABLE,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil';

import { autoSaveLocalStorage, makeUseOnChange } from './common';

export interface TodoListProps {
  id: number;
  title: string;
  contents: string;
  isCompleted: boolean;
}

export const todoListInput = atom({
  key: 'todoListInput',
  default: {
    title: '',
    contents: '',
  },
});

export const todoList = atom<TodoListProps[]>({
  key: 'todoList',
  default: [],
  effects_UNSTABLE: [autoSaveLocalStorage()],
});

export const title = atom<string>({
  key: 'title',
  default: 'TODO LIST',
});

export const selectItem = selectorFamily({
  key: 'selectItem',
  get:
    (id: string | undefined | null) =>
    ({ get }) => {
      const list = get(todoList);

      for (const item of list) {
        if (item.id === Number(id)) {
          return item;
        }
      }

      return null;
    },
});

export const useContents = () => {
  const { id } = useParams();
  return useRecoilValue(selectItem(id));
};

export const useOnChange = makeUseOnChange(todoListInput);

export const useAddTodo = () => {
  const navigate = useNavigate();

  return useRecoilTransaction_UNSTABLE(
    ({ get, set, reset }) =>
      () => {
        const input = get(todoListInput);
        const todo = get(todoList);
        const nextId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;

        if (!input.title.trim() || !input.contents.trim()) {
          return null;
        }

        set(todoList, (v) => [
          ...v,
          {
            id: nextId,
            title: input.title,
            contents: input.contents,
            isCompleted: false,
          },
        ]);
        reset(todoListInput);
        navigate('/');
      },
    [],
  );
};

export const editState = atom({
  key: 'editState',
  default: false,
});

export const useResetInput = () => {
  const reset = useResetRecoilState(todoListInput);
  useEffect(() => {
    return () => reset();
  }, []);
};

export const useEditState = () => {
  const origin = useContents();

  return useRecoilTransaction_UNSTABLE(
    ({ set }) =>
      () => {
        set(editState, (state) => !state);
        if (origin) {
          set(todoListInput, (s) => ({
            ...s,
            title: origin.title,
            contents: origin.contents,
          }));
        }
      },
    [],
  );
};

export const useEditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return useRecoilTransaction_UNSTABLE(
    ({ get, set, reset }) =>
      () => {
        const input = get(todoListInput);
        const list = get(todoList);

        const newList = list.map((listItem) =>
          listItem.id === Number(id)
            ? {
                ...listItem,
                title: input.title,
                contents: input.contents,
              }
            : listItem,
        );
        set(todoList, newList);

        reset(editState);
        navigate('/');
      },
    [],
  );
};
