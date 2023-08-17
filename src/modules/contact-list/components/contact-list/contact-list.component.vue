<template>
  <v-list max-height="600px" lines="one">
    <v-list-item
      v-for="(item, index) in contactList"
      :key="index"
      :title="item.name"
      :subtitle="formatPhoneNumber(item.phone)"
      @click="editContact(item)"
    >
      <template v-slot:append>
        <v-btn @click="deleteContact(item)" class="delete-btn">
          <v-icon icon="mdi-delete" absolute dark fab top right color="red" />
        </v-btn>
      </template>
    </v-list-item>
  </v-list>
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
  },
  data: () => ({}),
  methods: {
    deleteContact(contact: Contact) {
      this.$emit("delete-contact", contact);
    },
    editContact(contact: Contact) {   
      this.$emit("edit-contact", contact);
    },
    formatPhoneNumber(phone: string) {
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
    }
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