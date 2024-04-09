import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./data.json" //10人分のユーザー情報（https://jsonplaceholder.typicode.com/users）
import TestComponent from './TestComponent';

type USERS = typeof Data; //USERSにjsonのデータを定義する

const name = "hello";
let nameChange = "hello";
nameChange = "hello2";

let username = "Hello";
let dummyNum: number =2;
let bool = true;

let array1 = [true,false, true];
let array2 = [0,1, "true"];


interface NAME {
  first: string;
  last: string;
}

let nameObj: NAME = {first:"YAMADA" , last: "TARO"};

//Intersection Types
type PROFILE ={ 
age: number;
city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

//Union Tyoes
let value: boolean | number
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];


const func1 = (x: number, y: number ): number => { 
  return x + y;
};

let company: "Facebook" | "Google" | "Amazon"
company = "Amazon";

let memory: 256 | 512;
memory = 512;

//typeof
let msg: string = "Hi";
let msg2:  typeof msg;
msg2 = "hello";

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"};

//keyof 
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS
key = "primary";

//typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS; //SPORTSが持っているデータ型をそのまま継承している
keySports = "soccer"; //soccorかbaseballという文字列しか受け取れない

//enum 自動的に連番をつけてくれる 例：1番Win,2番Mac,3番Linux
enum OS {
  Windows,
  Mac,
  Linux,
} 

interface PC {
  id: number,
  OSType: OS;
}

const PC1: PC = {
  id:1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id:2,
  OSType: OS.Mac,
};

//型の互換性
const comp1 = "test";
let comp2: string = comp1; //上記のtestという文字列をを代入した

let comp3: string = "test";

 let funcComp1 = (x: number) => {};
 let funcComp2 = (x: string) => {}; //引数(x)は一緒だけどデータ型(number,string)が違う


 //Generics ジェネリックス<>
 //1.テンプレートを用意
 interface GEN<T>{
  item: T;
 }  
//2.具体的なテンプレート型
 const gen0: GEN<string> = {item: "hello"};　
 
 //テンプレートに先にTにstring型を定義しておく
 interface GEN1<T = string>{
  item: T;
 } 
 const gen3: GEN1= {item: "hello"};　//GEN1にstringが適用される

 interface GEN2<T extends　string | number>{
  item: T;
 } //特定のデータ型だけ指定したいとき(stringとnumber)

 const gen4: GEN2<number>
 = { item: 1};

 function funcGen<T>(props :T){
  return{item :props};
 }

 const gen6 = funcGen<string>("test");
 const gen7 = funcGen<string | null>(null); //文字列だけでなくnull型も指定できる

 function funcGen1<T extends string | null>(props: T){
 return {value: props};
 }
 const gen8 = funcGen1("hello"); //自動で型推論してくれる
 //const gen9 = funcGen1(123); //指定していない型はエラーになる

interface Props {
price: number;
}
function funcGen3< T extends Props>(props: T){ //propsで受取る定義はpropsで定義したデータ型になる
  return{value: props.price}
}

const gen10 = funcGen3({price:1});

const funcGn4 = <T extends Props>(props: T) => { //上記をアロー関数で書き直したとき
  return{value: props.price}
}




const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />

      </header>
    </div>
  );
}

export default App;
