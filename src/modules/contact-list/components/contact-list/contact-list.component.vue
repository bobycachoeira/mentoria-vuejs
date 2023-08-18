<template>
  <v-list max-height="600px" lines="one">
    <v-list-item v-for="(item, index) in contactList" :key="index" :title="item.name" :subtitle="item.formatPhoneNumber"
      @click="editContact(item)">
      <template v-slot:append>
        <v-btn @click="deleteContact(item, $event)" class="delete-btn">
          <v-icon icon="mdi-delete" absolute dark fab top right color="red" />
        </v-btn>
      </template>
    </v-list-item>
  </v-list>

  <v-alert v-if="showAlert" type="success" title="Deletado com sucesso" text="Contato deletado com sucesso!"></v-alert>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Contact } from "../../entities/contact.entity";

export default {
  props: {
    contactList: {
      type: Array as PropType<Contact[]>,
      required: true,
      default: () => [],
    },
    showAlert: {
      type: Boolean,
      required: true,
      default: () => false,
    },
  },
  methods: {
    deleteContact(contact: Contact, event: Event) {
      event.stopPropagation();
      this.$emit("delete-contact", contact);
    },
    editContact(contact: Contact) {
      this.$emit("edit-contact", contact);
    },
  },
};
</script>

<style scoped>
.delete-btn {
  background: fixed #590381;
}

.contact-list-item {
  background: fixed #8916be;
}
</style>