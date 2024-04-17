import { create } from "zustand";

type PostStoreType = {
  open: boolean;
  postNumber: number;
  setPostNumber: (number: number) => void;
  handleClickOpen: () => void;
  handleClickClose: () => void;
};

export const usePostStore = create<PostStoreType>((set) => ({
  postNumber: 0,
  setPostNumber: (number: number) => {
    set(() => ({ postNumber: number }));
  },
  open: false,
  handleClickClose: () => set({ open: false }),
  handleClickOpen: () => set({ open: true }),
}));
