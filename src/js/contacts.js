import * as contactsApi from './contacts-api';

const contact = {
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg",
    createdAt: new Date(),
    email: "sofia@goit.ua",
    name: "Sofia",
    phone: "+380675844154"
}
const contactToUpdate = {
    id: "32",
    email: "sofia@goit.ua",
    name: "NEW SOFIA",
    phone: ""
}

contactsApi.getContacts().then(res => console.log(res))

async function renderContacts() {
    // old
    // contactsApi.getContacts().then(res => console.log(res))

    //new
    try {
        const contacts = await contactsApi.getContacts()

        if (contacts.length === 0) {
            console.log("no contacts")
        }
        if (contacts.page === 1) {
            console.log("We found ejfnjke")
        }

    } catch (error) {
        console.log(error.message)
    }
}

renderContacts()

// contactsApi.getContactById("11").then(res => console.log(res))

// contactsApi.createContact(contact).then(res => console.log(res))

// contactsApi.updateContact(contactToUpdate).then(res => console.log(res))

// contactsApi.deleteContact("33").then(res => console.log(res)).catch(error => console.log(error.message))