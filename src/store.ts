import { atom, selector } from 'recoil';

export const title = atom({
  key: 'title',
  default: 0,
});

const promise = new Promise<void>((res, rej) => {
  setTimeout(() => {
    void res();
  }, 3000);
});

export const select = selector({
  key: 'select',
  get: async ({ get }) => {
    await promise;
    const t = get(title);
    return t * 100;
  },
  cachePolicy_UNSTABLE: { eviction: 'most-recent' },
});
