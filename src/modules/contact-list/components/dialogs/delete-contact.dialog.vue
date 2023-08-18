<template>
    <v-dialog persistent :model-value="modelValue" width="auto">
        <v-card>
            <v-card-title>
                <h2>Deletar contato</h2>
            </v-card-title>
            <v-card-text>
                Você deseja realmente deletar esse contato?
            </v-card-text>
            <v-card-actions>
                <v-btn @click="confirmDeleteContact">Sim</v-btn>
                <v-btn @click="closeDialog" color="primary">Não</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { Contact } from "../../entities/contact.entity";

export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    contact: {
      type: Object,
      required: true,
      default: () => new Contact(),
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:modelValue", false);
    },
    confirmDeleteContact() {
      this.$emit("confirm-delete-contact", this.contact);
      this.closeDialog();
    }
  },
  beforeCreate() {
      console.log('beforeCreate');
      
  }

};
</script>


<style></style>