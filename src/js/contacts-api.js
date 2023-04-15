import axios from 'axios';

axios.defaults.baseURL = 'https://62d459315112e98e484e5213.mockapi.io';
const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts

export const getContacts = async () => {
    // variant 1
    // const { data } = await axios.get('/contcts')
    // return data;

    // variant 2
    // const data = await fetch(`${BASE_URL}/contacts`)
    // return await data.json();

    // variant 3
    return fetch(`${BASE_URL}/contacts`).then(response => response.json());
};

// GET -> /contacts/:id
export const getContactById = async (id) => {
    // variant 1
    const { data } = await axios.get(`/contacts/${id}`)
    return data

    // variant 2
    // const data = await fetch(`${BASE_URL}/contacts/${id}`);
    // return await data.json()

    // variant 3
    // return fetch(`${BASE_URL}/contacts/${id}`).then(response => response.json());
};

// POST -> /contacts
export const createContact = async contact => {
    // variant 1
    const { data } = await axios.post('/contacts', contact);
    return data;

    // variant 2
    // const options = {
    //     method: 'POST',
    //     body: JSON.stringify(contact),
    //     headers: {
    //         'Content-Type': 'application/json; charset=UTF-8',
    //     },
    // };
    // const data = await fetch(`${BASE_URL}/contacts`, options)
    // return await data.json()

    // variant 3
    // const options = {
    //     method: 'POST',
    //     body: JSON.stringify(contact),
    //     headers: {
    //         'Content-Type': 'application/json; charset=UTF-8',
    //     },
    // };

    // return fetch(`${BASE_URL}/contacts`, options).then(response =>
    //     response.json()
    // );
};

// PUT -> /contacts/:id
export const updateContact = async newContact => {
    // variant 1
    const { data } = await axios.put(`/contacts/${newContact.id}`, newContact)
    return data;

    // variant 2
    // const options = {
    //     method: 'PUT',
    //     body: JSON.stringify(newContact),
    //     headers: {
    //         'Content-Type': 'application/json; charset=UTF-8',
    //     },
    // };

    // const data = await fetch(`${BASE_URL}/contacts/${newContact.id}`, options)
    // return await data.json()


    // variant 3
    // const options = {
    //     method: 'PUT',
    //     body: JSON.stringify(newContact),
    //     headers: {
    //         'Content-Type': 'application/json; charset=UTF-8',
    //     },
    // };

    // return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
    //     response => response.json()
    // );
};

// DELETE -> /contacts/:id
export const deleteContact = async id => {
    // variant 1
    const { data } = await axios.delete(`/contacts/${id}`)
    return data;

    // variant 2
    // const options = {
    //     method: 'DELETE',
    // };

    // const data = await fetch(`${BASE_URL}/contacts/${id}`, options)

    // return await data.json();

    // variant 3
    // const options = {
    //     method: 'DELETE',
    // };
    // return fetch(`${BASE_URL}/contacts/${id}`, options).then(response =>
    //     response.json()
    // );
};