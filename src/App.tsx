import { useState } from 'react';
import './App.css';
import iconMagnifyingGlass from './assets/iconMagnifyingGlass.svg';

function App() {
  return (
    <div className="App h-screen">
      <section className="flex flex-col justify-center items-center h-4/6 bg-gradient-to-br from-statista-gradient-start to-statista-dark px-5">
        <h1 className="text-2xl md:text-6xl	mb-5 md:mb-2.5 md:leading-tight text-white">
          Empowering people with data
        </h1>
        <h2 className="text-base md:text-2xl text-statista-dark2">
          Insights und Fakten aus 170 Branchen und 150+ Ländern
        </h2>
        <form className="mt-12 md:mt-16 max-w-screen-md w-full flex ">
          <input
            className="placeholder:italic h-14 pl-6 pr-20 w-full rounded-full focus:outline focus:outline-4"
            placeholder="Statistiken, Prognosen und Umfragen finden"
            type="search"
          ></input>
          <button className="h-14 px-8 bg-statista text-white rounded-full flex justify-center items-center whitespace-nowrap -ml-16">
            <div className="hidden md:flex md:visible text-white flex-no-wrap mr-5">
              Statista-Suche
            </div>
            <svg
              className="h-5 w-5 fill-current text-statista-icon-bg"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 7a5 5 0 0 0 7.757 4.171l2.536 2.536a1 1 0 0 0 1.414-1.414l-2.536-2.536A5 5 0 1 0 2 7Zm2.879 2.121A3 3 0 1 1 9.12 4.88 3 3 0 0 1 4.88 9.12Z" />
            </svg>
          </button>
        </form>
      </section>
      <section className="max-w-screen-md mx-auto px-5 py-8">
        Suchergebnisse
      </section>
    </div>
  );
}

export default App;
