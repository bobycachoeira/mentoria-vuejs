<template>
  <div class="text-center">
    <v-dialog persistent :model-value="modelValue" @update:modelValue="closeDialog" width="400px" transition="dialog-top-transition">
      <v-card>
        <v-card-title>
          <h2>Adicionar novo contato</h2>
        </v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-text-field :rules="[rules.required, rules.minLengthName]" v-model="contact.name" label="Nome" outlined
              dense></v-text-field>
            <v-text-field :rules="[rules.required, rules.maxLengthPhone, rules.minLengthPhone]" v-model="contact.phone" label="Telefone"
              outlined dense type="number"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="closeDialog" color="blue-darken-1" variant="text">Fechar</v-btn>
          <v-btn @click="saveContact" color="green-darken-1" variant="text">Salvar contato</v-btn>
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

    async saveContact() {
      const form: any = this.$refs.form;
      const { valid } = await form.validate();

      if (valid) {
        this.$emit("save-contact", this.contact);
      }
    },
  },
};
</script>
