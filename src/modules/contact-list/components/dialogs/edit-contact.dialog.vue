<template>
  <div class="text-center">
    <v-dialog persistent :model-value="modelValue" :contact="contact" width="400px">
      <v-card>
        <v-card-title>
          <h2>Editar contato</h2>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field :rules="[rules.required, rules.minLengthName]" v-model="contact.name" label="Nome" outlined
              dense></v-text-field>
            <v-text-field :rules="[rules.required, rules.maxLengthPhone, rules.minLengthPhone]" v-model="contact.phone"
              label="Telefone" outlined dense type="number"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog">Fechar</v-btn>
          <v-btn @click="editContact" color="primary">Salvar contato</v-btn>
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
  data: () => ({
    contact: new Contact(),
    rules: {
      required: (value: string) => !!value || "Campo obrigatório",
      minLengthName: (value: string) =>
        value.length >= 3 || "Nome deve ter no mínimo 3 caracteres",
      maxLengthPhone: (value: string) =>
        value.length <= 11 || "Telefone deve ter no máximo 11 caracteres",
      minLengthPhone: (value: string) =>
        value.length >= 10 || "Telefone deve ter ao menos 10 caracteres",
    },
  }),
  methods: {
    closeDialog() {
      this.$emit("update:modelValue", false);
    },

    async editContact() {
      const form: any = this.$refs.form;
      const { valid } = await form.validate();
      if (valid) {
        this.$emit("edit-contact", this.contact);
      }
    },
  },
};
</script>
