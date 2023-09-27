import { useState } from 'react'
import { useRef } from "react";
import './App.css'
import Addnew from './components/addnew'
import AllContacts from './components/allcontacts'
import Header from './components/header'
import Individual from './components/individual';


function App() {
  const [pageToShow, setPageToShow] = useState("home");

  switch (pageToShow) {
      case "home" : return (<Home setPageToShow={setPageToShow}></Home>);
      case "add new": return (<Addnew setPageToShow={setPageToShow}></Addnew>);
      case "individual": return (<Individual setPageToShow={setPageToShow} ></Individual>)
  }
};

function Home({setPageToShow}) {
  const handleClick = event => setPageToShow("add new");
  return (
      <div>
        <Header></Header>
        <button onClick={handleClick} class="bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Add New Contact</button>
        <AllContacts setPageToShow={setPageToShow}></AllContacts>
      </div>
  )
}

export default App
