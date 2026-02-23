import "./styles.css";
import { WEATHER_CODES } from "./types";
import { useState } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";

// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props
function Lesson_07() {
  // 12. enum
  // Создайте функцию, которая бы принимала следующие параметры:
  //   код погоды и функция decode, которая дает расшифровку погоды по коду.
  //   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
  //   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
  //   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
  //   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
  //   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
  //   одном из методов switch-case:

    const decode = (weatherCode: string): string =>{
  switch (weatherCode) {
    case WEATHER_CODES.SQ:
      return "Шквал";
    case WEATHER_CODES.PO:
      return "Пыльный вихрь";
    case WEATHER_CODES.FC:
      return "Торнадо";
    case WEATHER_CODES.BR:
      return "Дымка (видимость от 1 до 9 км)";
    case WEATHER_CODES.HZ:
      return "Мгла (видимость менее 10 км)";
    case WEATHER_CODES.FU:
      return "Дым (видимость менее 10 км)";
    case WEATHER_CODES.DS:
      return "Пыльная буря (видимость менее 10 км)";
    case WEATHER_CODES.SS:
      return "Песчаная буря (видимость менее 10 км)";
    default:
      return "This code does not exist";
  }
};

const weather = decode (WEATHER_CODES.DS);

console.log(weather);

/////////////////////////////////////////////////////////////////
//13.Generic
//do ispolzovaniya generic
// const stringArray: string [] = ["a", "b", "c"];
// const numbersArray: number [] = [1, 2, 3];
// const booleansArray: boolean[] = [true, false, true];

//posle ispolzovaniya generic
type ArrayGenerator<Type> = Type[];
const stringArray: ArrayGenerator <string>= ["a", "b", "c"];
const numbersArray: ArrayGenerator <number> = [1, 2, 3];
const booleansArray: ArrayGenerator <boolean> = [true, false, true];

//Generic with objects
interface Item <ValueType>{
    type: string;
    value: ValueType;
}

interface Item3Value {
    model: string;
    articul: number;
  }
  interface Item<ValueType> {
    type: string;
    value: ValueType;
  }
  const item1: Item<number> = {
    type: "TV",
    value: 123456789,
  };
  const item2: Item<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };
  const item3: Item<Item3Value> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 123542525135135,
    },
  };

  const setCounterResult = ()=>{
    console.log("Dostup k schetchiku v komponente Lesson 07, resultat:",count);
  }

  const [count, setCount] = useState<number>(0);
  // console.log(count);
  // console.log(setCount);
  console.log("Count in Component:", count);

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1;
    });
  };

  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  // Пример использования setState, при передаче нового значения напрямую
  const [fullName, setFullName] = useState("John Johnson");

  const changeName = () => {
    setFullName("Brat Pitt");
  };

  return <div className="lesson_07_page_wrapper">
    <Button name="Simple Button"/>
    <Input id="simple-input" 
    name="simpleInput" 
    placeholder="Enter something" 
    label="Simple Input"/>
    <Counter count={count} onMinus={onMinus} onPlus={onPlus}/>
  </div>;
}
export default Lesson_07;