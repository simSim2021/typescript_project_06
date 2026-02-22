// ШАГ 1: Импортируем функцию хук useState из библиотеки react

import { type CounterProps } from "./types";
import Button from "components/Button/Button";

import "./styles.css";

function Counter({count, onMinus, onPlus}:CounterProps) {
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Функция-хук useState возвращает массив из 2 элементов
  // 1 элемент массива state - это состояние которое мы планируем изменять и показвать на экране(наш счетчик count)
  // 2 элемент - это функция, которая изменяет наше состояние(то есть 1 элемент массива)
  // Без деструктуризации
  // const state = useState(0);
  // console.log(state);
  // console.log(state[0])
  // console.log(state[1])

  ///!!!! ИЗМЕНЕНИЕ count МОЖЕТ БЫТЬ ТОЛЬКО С ИСПОЛЬЗОВАНИЕМ ФУНКЦИИ setCount
  // С использованием деструктуризации
  // По умолчанию count === undefined, если мы неичего не передадим в качестве аршумента в useState
  

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
