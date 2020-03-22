// Style import
import './styles/main.scss'

import { Contact, ContactManager } from './utils'


const contact: Contact = {name: "Kelly", age: 27, phone: "623623623"};

const contactManager = new ContactManager();


console.log(contactManager.getOlderContact());
contactManager.addNewContact(contact);
console.log(contactManager.getAllContacts());
