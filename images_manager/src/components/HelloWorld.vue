<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    </v-layout>
  </v-container>
</template>

<script>
import LoginService from '../LoginService';
export default {
  name: 'LoginComponent',
  data() {
    return {
      user: {},
      msg: '',
      error: ''
    }
  },
  async created() {
    try {
      this.user = await LoginService.loginFacebook();
    } catch(err) {
      this.error = err.message;
    } 
  }
}
</script>
