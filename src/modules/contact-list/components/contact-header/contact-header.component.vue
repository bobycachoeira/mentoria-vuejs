<template>
  <v-row>
    <v-col cols="9">
      <h2>Meus contatos</h2>
    </v-col>
    <v-col cols="3">
      <v-btn @click="addNewContact" absolute dark fab top right color="pink">
        <!-- ADD -->
        <v-icon icon="mdi-plus"/>
      </v-btn>
      <!-- <v-btn>
        Edit
        <v-icon icon="mdi-pencil" absolute dark fab top right color="pink" />
      </v-btn> -->
    </v-col>
    <v-col cols="12">
      <v-text-field :model-value="modelValue" @update:model-value="onFilterByName" variant="outlined"
        prepend-inner-icon="mdi-magnify" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  components: {},
  props: {
    modelValue: {
      type: String,
      required: true,
      default: () => "",
    },
  },

  methods: {
    addNewContact() {
      this.$emit("add-new-contact");
    },
    onFilterByName(value: string) {
      this.$emit("update:modelValue", value);
    },
    onInput(text: string) {
      console.log(text);
      this.$emit("on-filter-by-name", text);
    },
  },
};
</script>
