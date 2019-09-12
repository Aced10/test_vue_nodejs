<template>
  <v-app>
    

    <v-content>
      <LoginComponent/>
    </v-content>
  </v-app>
</template>

<script>
import LoginComponent from './components/LoginComponent';

export default {
  name: 'App',
  components: {
    LoginComponent,
  },
  data: () => ({
    //
  }),
};
</script>
