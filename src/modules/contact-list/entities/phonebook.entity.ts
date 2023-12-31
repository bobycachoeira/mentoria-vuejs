import { Contact } from "./contact.entity";

export class Phonebook {
  public contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  filteredContacts(name: string): Contact[] {
    return this.contacts.filter((contact) =>
      contact.name.toUpperCase().includes(name.toUpperCase())
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  };
  editContact(contact: Contact): void {
    const index = this.contacts.findIndex((contacts) => contacts.id === contact.id);
    this.contacts.splice(index, 1, contact);
  }

  deleteContact(id: string): void {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    this.contacts.splice(index, 1);
  }
}
