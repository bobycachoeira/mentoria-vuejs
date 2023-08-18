<template>
  <v-row>
    <v-col cols="3">
        <v-menu :location="location">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" dark v-bind="props"> <v-icon icon="mdi-menu" /> </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title><router-link :to="`/`">
                <v-icon icon="mdi-home-account" />
                  Home
              </router-link>
            </v-list-item-title>
            <v-list-item-title><router-link :to="`/contacts/`">
              <v-icon icon="mdi-contacts"/>
                  Contatos
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
    <v-col cols="6">
        <h1>Contatos</h1>
    </v-col>
    <v-col cols="3">
      <v-btn @click="addNewContact" absolute dark fab top right color="pink">
        <!-- ADD -->
        <v-icon icon="mdi-plus" />
      </v-btn>
    </v-col>
    <!-- <v-col cols="12">
      <v-text-field :model-value="modelValue" @update:model-value="onFilterByName" variant="outlined"
        prepend-inner-icon="mdi-magnify" />
    </v-col> -->
  </v-row>
  <v-row>
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

<style>
  .teste{
    align-content: center;
  }
</style>
