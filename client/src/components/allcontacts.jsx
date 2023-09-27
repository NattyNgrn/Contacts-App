import {allcont} from "../serverfuncs.js";
import Contact from "./contact.jsx";
import { useState,useEffect } from "react";

function AllContacts({setPageToShow}){
    const [contacts, setContacts] = useState([]);

    useEffect(()=>{
        allcont().then(result => setContacts(result));
    }, []);
    console.log(contacts);

return (
    <div class="grid-cols-1 sm:grid md:grid-cols-4 ">
        {
            contacts.map((contact) => 
                <Contact setPageToShow={setPageToShow} name={contact.name} url={contact.url} ></Contact>
            )
        }
        
    </div>
    )
}

export default AllContacts;