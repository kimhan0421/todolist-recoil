import { AtomEffect, RecoilState, useRecoilTransaction_UNSTABLE } from 'recoil';

export function makeUseOnChange<T>(state: RecoilState<T>) {
  return () =>
    useRecoilTransaction_UNSTABLE(
      ({ set }) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          set(state, (v) => ({ ...v, [name]: value }));
        },
      [],
    );
}

export function autoSaveLocalStorage<T>(): AtomEffect<T> {
  return ({ onSet, setSelf, node }) => {
    const savedValue = window.localStorage.getItem(node.key);
    if (savedValue) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      window.localStorage.setItem(node.key, JSON.stringify(newValue));
    });
  };
}
