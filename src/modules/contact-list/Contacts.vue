<template>
  <v-row class="contacts" height="100%">
    <add-new-contact-dialog-component @save-contact="addNewContact" v-model="showModalAddContact" width="500" />
    <edit-contact-dialog-component v-model="showModalEditContact" @confirm="confirmEditContact" :contact="contactToEdit"
      min-width="80%" />


    <delete-contact-dialog-component v-model="showModalConfirmDelete" @confirm-delete-contact="confirmDeleteContact"
      :contact="contactToDelete" min-width="80%" />

    <v-col cols="12">
      <contact-header-component @add-new-contact="setShowAddNewContact" v-model="filter.name" />
    </v-col>
    <v-col cols="12">
      <contact-list-component @delete-contact="deleteContact" @edit-contact="editContact" :showAlert="showAlert"
        @cancel-delete="cancelDelete" :contact-list="filteredContacts" class="contact-list-item" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import ContactHeaderComponent from "./components/contact-header/contact-header.component.vue";
import ContactListComponent from "./components/contact-list/contact-list.component.vue";
import AddNewContactDialogComponent from "./components/dialogs/add-new-contact.dialog.vue";
import EditContactDialogComponent from "./components/dialogs/edit-contact.dialog.vue";
import DeleteContactDialogComponent from "./components/dialogs/confirm-delete-contact.dialog.vue";
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
    DeleteContactDialogComponent
  },
  data: () => ({
    phonebook: new Phonebook(),
    filter: new PhonebookFilter(),
    showModalAddContact: false,
    showModalEditContact: false,
    contactToEdit: new Contact(),
    contactToDelete: new Contact(),
    showModalConfirmDelete: false,
    showAlert: false,
    tempoEmSegundos: 0,
    intervalId: 0,
    dismissDelete: false,
    deletedContact: new Contact(),
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
      this.contactToEdit = new Contact(contact);
      this.setShowEditContact();
    },

    confirmEditContact(contact: Contact) {
      this.phonebook.editContact(contact);
      this.closeDialogEditContact();
    },
    confirmDeleteContact(contact: Contact) {
      this.deletedContact = contact;
      this.mostraNotificacao(contact);
      // this.phonebook.deleteContact(contact.id);
      // this.closeConfirmDeleteDialog();
    },

    setShowAlertTrue() {
      this.showAlert = true;
    },
    setShowAlertFalse() {
      this.showAlert = false;
    },

    closeConfirmDeleteDialog() {
      this.showModalConfirmDelete = false
    },
    setShowConfirmDeleteDialog() {
      this.showModalConfirmDelete = true
    },
    setFilterByName(name: string) {
      this.filter.name = name;
    },

    deleteContact(contact: Contact) {
      this.contactToDelete = new Contact(contact);
      this.setShowConfirmDeleteDialog();
    },
    mostraNotificacao(contact: Contact) {
        this.setShowAlertTrue();
        this.alertTimeout = setTimeout(() => {
          this.setShowAlertFalse();
          this.phonebook.deleteContact(contact.id);
          this.closeConfirmDeleteDialog();
        }, 5000);

    },
    cancelDelete() {
      // this.addNewContact(this.deletedContact);
      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout);
    }
      this.setShowAlertFalse();
    }
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

<style scoped>
.contacts {
  background: #590381;
}

.contact-list-item {
  background: #7a10ac;
}
</style>