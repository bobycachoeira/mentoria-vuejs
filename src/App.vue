<template>
  <contact-app class="contacts"/>
</template>

<script lang="ts">
import ContactApp from "./modules/contact-list/Contacts.vue";

export default {
  components: {
    ContactApp,
  },
  data: () => ({}),
};
</script>

<style>
.contacts {
  background: fixed #590381;
  margin: 0 0 0 0;
  height: 100%;
}
</style>