import { useState } from 'react'
import { useRef } from "react";
import './App.css'
import Addnew from './components/addnew'
import AllContacts from './components/allcontacts'
import Header from './components/header'
import Individual from './components/individual';


function App() {
  const [pageToShow, setPageToShow] = useState("home");
  const [id, setId] = useState(0);
  switch (pageToShow) {
      case "home" : return (<Home setPageToShow={setPageToShow} setId={setId} ></Home>);
      case "add new": return (<Addnew setPageToShow={setPageToShow}></Addnew>);
      case "individual": return (<Individual setPageToShow={setPageToShow} id={id} ></Individual>)
  }
};

function Home({setPageToShow, setId}) {
  const handleClick = event => setPageToShow("add new");
  return (
      <div>
        <Header></Header>
        <button onClick={handleClick} class="bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Add New Contact</button>
        <AllContacts setId={setId} setPageToShow={setPageToShow}></AllContacts>
      </div>
  )
}

export default App
