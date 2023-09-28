const API = "http://localhost:1010";


//get all contacts for display on home page
async function allcont(){
    const result = await fetch (API + '/allcontacts');
    const contacts = await result.json();
    console.log(contacts);
    return contacts;
}


//get individual contact when image is clicked from all contacts
async function contactbyid(id){
    const result = await fetch(API + `/individual/${id}`);
    const individual = await result.json();
    console.log(individual);
    return individual;
}


//add new contact
async function addnew(name, email, phone, notes, url){
    const result = await fetch(API + '/add', {
    method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            notes: notes,
            url: url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}


//edit contact
async function edit(id, name, email, phone, notes, url){
    const result = await fetch(API + `/edit/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            notes: notes,
            url: url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}


//delete contact
async function deleteContact(id){
    const result = await fetch(API + `/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(result);
}


export {allcont, contactbyid, addnew, edit, deleteContact};