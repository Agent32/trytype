import React from 'react';
import logo from './logo.svg';
import './App.css';

let asdsa: number | null = 10
const bame: string = 'BARABASHJA'

let door: 'open' | 'close' = 'open';//из строки тип

let strMass: Array<string> = ['sas', 'bass']
//strMass[1]= 10
let strMass2: string[] = ['jej', 'kekd']

type doorType= typeof door

let luk: doorType = 'open'

//задаём тип
type UserType =
  {
    sayShit: (ree: string) => Function,
    name: string,
    age?: number,
    loh: boolean
  }

let user: UserType =
{
  sayShit( bame )  { 
    return (() => { alert(1) })},
name: 'sss',
  age: 32,
    loh: true
}
const sbas: any = 2;
function lala(message: string) {
  return () => { }
}

const initialShit =
{
  name :null as string | null,
  age: null as number | null,
  doors: [] as Array<doorType>
}



const typeIncluded: (count: number) => number = (a: number) => {return a} // указание определение в функции


let SOME_SHIT = "SHIIT"

type changeble = 
{
  type: typeof SOME_SHIT
}

const test2 = "SHIIT"
// let ine : changeble = {type: SOME_SHIT}  //eror 
let ine : changeble = {type: test2
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {asdsa}  {typeIncluded(10)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
