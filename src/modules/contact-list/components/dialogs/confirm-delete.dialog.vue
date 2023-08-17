<template>
      <v-dialog persistent :model-value="modelValue" width="400px">
      <v-card>
        <v-card-title>
          <h2>Deletar contato</h2>
        </v-card-title>
        <v-card-text>
          Você deseja realmente deletar esse contato?
        </v-card-text>
        <v-card-actions>
          <v-btn @click="confirmDeleteContact">Sim</v-btn>
          <v-btn @click="cancelDeleteContact" color="primary">Não</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
export default {

    methods: {
        confirmDeleteContact() {
            this.$emit("confirm-delete-contact", this.contact);
        },
        cancelDeleteContact() {
            this.$emit("cancel-delete-contact");
        },

}
</script>

<style>

</style>