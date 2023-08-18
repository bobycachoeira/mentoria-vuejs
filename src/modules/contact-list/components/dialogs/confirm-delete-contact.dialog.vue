<template>
  <div class="text-center">
    <v-dialog persistent :model-value="modelValue" width="400px">
        <v-card>
            <v-card-title>
                <h2>Deletar contato</h2>
            </v-card-title>
            <v-card-text>
                Você deseja realmente deletar esse contato?
            </v-card-text>
            <v-card-actions>
                <v-btn @click="confirmDeleteContact" color="red-darken-1" variant="text">Sim</v-btn>
                <v-btn @click="closeDialog" color="green-darken-1" variant="text">Não</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
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
};
</script>


<style scoped>
.text-center {
  text-align: center;
}
</style>