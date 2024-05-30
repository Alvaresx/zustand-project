export type AgeStore = {
  age: number;
  itemOne: {
    itemTwo: {
      itemThree: string;
    };
  };
  increaseAge: () => void;
  decreaseAge: () => void;
  resetAge: () => void;
  updateAge: (newAge: number) => void;
  updateItem: (newItem: string) => void;
};
