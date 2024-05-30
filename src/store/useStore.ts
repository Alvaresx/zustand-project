import { create } from "zustand";
import { AgeStore } from "../types/AgeStoreType";
import { enableMapSet } from "immer";
import { immer } from "zustand/middleware/immer";

enableMapSet();

const useStore = create<AgeStore>()(
  immer((set) => ({
    age: 0,
    itemOne: {
      itemTwo: {
        itemThree: "",
      },
    },
    increaseAge: () => set((state) => ({ age: state.age + 1 })),
    decreaseAge: () => set((state) => ({ age: state.age - 1 })),
    resetAge: () => set({ age: 0 }),
    updateAge: (newAge: number) => set({ age: newAge }),
    updateItem: (newItem: string) =>
      set((state) => {
        state.itemOne.itemTwo.itemThree = newItem;
      }),
  }))
);

export default useStore;
