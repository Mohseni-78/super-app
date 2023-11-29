<template>
  <v-app>
    <v-app-bar app color="orange" class="app-bar">
      <v-badge :content="quantity"> <v-btn size="x-large">cart</v-btn> </v-badge></v-app-bar
    >
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import * as types from "@/store/types";
import { mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      quantity: types.product.getters.GET_QUANTITY,
    }),
  },
};
</script>

<style scoped lang="scss">
.app-bar {
  padding: 10px 0;
}
</style>
