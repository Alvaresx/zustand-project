import { useState } from "react";
import useStore from "../../store/useStore";

const AgeComponent = () => {
  const [newAge, setNewAge] = useState<number>(0);
  const [newItem, setNewItem] = useState<string>("");

  const {
    age,
    itemOne: {
      itemTwo: { itemThree },
    },
    increaseAge,
    decreaseAge,
    resetAge,
    updateAge,
    updateItem,
  } = useStore((state) => state);

  return (
    <>
      <div>A sua idade é {age}</div>
      <div>O item é {itemThree}</div>
      <input
        placeholder="Digite a nova idade"
        onChange={(e) => setNewAge(parseInt(e.target.value))}
      />
      <input
        placeholder="Digite ao novo item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="button" onClick={increaseAge}>
        Aumentar
      </button>
      <button type="button" onClick={decreaseAge}>
        Diminuir
      </button>
      <button type="button" onClick={resetAge}>
        Resetar
      </button>
      <button type="button" onClick={() => updateAge(newAge)}>
        Atualizar
      </button>
      <button type="button" onClick={() => updateItem(newItem)}>
        Atualizar o item com Immer
      </button>
    </>
  );
};

export default AgeComponent;
