<template>
    <v-row class="home-header">
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
        <h1>HOME</h1>
    </v-col>
  </v-row>
  <v-row class="home">
    <v-col cols="12">
      aqui posso colocar um background
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>
.home-header {
  background: #7a10ac;
  margin: 0px;
}

.home {
  background: #7a10ac;
  margin: 0px;
  height: 850px;
}
</style>