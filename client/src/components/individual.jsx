import { useState, useEffect } from "react";
import { contactbyid } from "../serverfuncs";
import { deleteContact } from "../serverfuncs";
import { edit } from "../serverfuncs";

function Individual({setPageToShow, id}){
    function backToHome(){
        setPageToShow("home");
    }

    async function save(){
      await edit(id, contact.name, contact.email, contact.phone, contact.notes, contact.url);
      setShowEdit(false);
    }

    function cancel(){
      setShowEdit(false);
    }


    const [contact, setContact] = useState({});

    useEffect(()=>{
        contactbyid(id).then(result => setContact(result));
    }, []);

    async function deleteCont(){
      await deleteContact(id);
      backToHome();
    }
    const [showEdit, setShowEdit] = useState(false);

    if (showEdit){
      return (
        <form>
              <div class="flex flex-col items-center">
              <label for="name" class="text-lg font-medium text-amber-400">Name</label>
              <input value={contact.name}  onChange={(e) => setContact({...contact, name: e.target.value})} type="text" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Name" required/>

              <label for="email" class="text-lg font-medium text-amber-400">Email</label>
              <input value={contact.email}  onChange={(e) => setContact({...contact, email: e.target.value})} type="email" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Email" required/>

              <label for="phone" class="text-lg font-medium text-amber-400">Phone number</label>
              <input value={contact.phone}  onChange={(e) => setContact({...contact, phone: e.target.value})} type="tel" class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Phone number" required/>

              <label for="notes" class="text-lg font-medium text-amber-400">Notes</label>
              <textarea value={contact.notes}  onChange={(e) => setContact({...contact, notes: e.target.value})} class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Notes" required></textarea>

              <label htmlFor="cover-photo" className="block text-lg font-medium leading-6 text-amber-400">
                  Contact photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-amber-400 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-xl leading-6 text-amber-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer  font-semibold text-amber-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-orange-500"
                    >
                      <span>Upload a file</span>
                      <input name="file-upload" type="file" className="sr-only" required/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-lg leading-5 text-amber-400">PNG, JPG, GIF up to 10MB</p>
                </div>
                </div>

              <div className="col-span-full">
                
              <div class="flex justify-center mt-4">
                <button onClick={cancel} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2">Cancel</button>
                <button type="submit" onClick={save} class="bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">Save</button>
              </div>

              </div>
              </div>
          </form>
        )
    }
    else{
      return(
          <div className="px-4 sm:px-0">
            <img class="m-8 mx-auto rounded-full w-96 h-96 shadow-xl dark:shadow-gray-800" src= {contact.url} />
            <h1 className="m-8 text-xl font-medium text-amber-400">Name: {contact.name}</h1>
            <h1 className="m-8 text-xl font-medium text-amber-400">Email: {contact.email}</h1>
            <h1 className="m-8 text-xl font-medium text-amber-400">Phone: {contact.phone}</h1>
            <h1 className="m-8 text-xl font-medium text-amber-400">Notes: {contact.notes}</h1>
            
            <button onClick={()=>setShowEdit(true)} class=" m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Edit</button>
            <button onClick={deleteCont} class="m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Delete </button>
            <button onClick={backToHome} class=" m-4 bg-amber-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"> Home </button>
          </div>
      )
    }
}

export default Individual;