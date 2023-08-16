<template>
  <v-row>
    <add-new-contact-dialog-component
      @save-contact="addNewContact"
      v-model="showModalAddContact"
      width="500"
    />
    <edit-contact-dialog-component
      @edit-contact="editContact"
      v-model="showModalEditContact"
      min-width="80%"
    />
    <v-col cols="12">
      <contact-header-component
        @add-new-contact="setShowAddNewContact"
        v-model="filter.name"
      />
    </v-col>
    <v-col cols="12">
      <contact-list-component
        @delete-contact="deleteContact"
        @edit-contact="setShowEditContact"
        :contact-list="filteredContacts"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import ContactHeaderComponent from "./components/contact-header/contact-header.component.vue";
import ContactListComponent from "./components/contact-list/contact-list.component.vue";
import AddNewContactDialogComponent from "./components/dialogs/add-new-contact.dialog.vue";
import EditContactDialogComponent from "./components/dialogs/edit-contact.dialog.vue";
import { Contact } from "./entities/contact.entity";
import { PhonebookFilter } from "./entities/phonebook-filter";
import { Phonebook } from "./entities/phonebook.entity";
import getContactsService from "./services/get-contacts.service";

export default {
  components: {
    ContactHeaderComponent,
    ContactListComponent,
    AddNewContactDialogComponent,
    EditContactDialogComponent,
  },
  data: () => ({
    phonebook: new Phonebook(),
    filter: new PhonebookFilter(),
    showModalAddContact: false,
    showModalEditContact: false,
    selectedContact: new Contact(),
  }),
  methods: {
    async getContacts() {
      const contacts = await getContactsService.execute();
      this.phonebook.contacts = contacts;
    },
    setShowAddNewContact() {
      this.showModalAddContact = true;
    },
    closeDialogAddNewContact() {
      this.showModalAddContact = false;
    },

    setShowEditContact() {
      this.showModalEditContact = true;
    },
    closeDialogEditContact() {
      this.showModalEditContact = false;
    },
    addNewContact(contact: Contact) {
      this.phonebook.addContact(contact);
      this.closeDialogAddNewContact();
    },
    editContact(contact: Contact) {
      this.phonebook.editContact(contact);
      this.closeDialogEditContact();
    },

    setFilterByName(name: string) {
      this.filter.name = name;
    },

    deleteContact(contact: Contact) {
      this.phonebook.deleteContact(contact.id);
    },
  },
  computed: {
    filteredContacts() {
      return this.phonebook.filteredContacts(this.filter.name);
    },
  },
  created() {
    this.getContacts();
  },
};
</script>
