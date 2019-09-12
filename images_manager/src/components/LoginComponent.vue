<template>
   <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login Images Manager</v-toolbar-title>
                <div class="flex-grow-1"></div>
              
              </v-toolbar>

              <v-card-actions>
                <div class="flex-grow-2"></div>
                <v-btn color="primary">Login Facebook</v-btn>
                <div class="flex-grow-1"></div>
                <v-btn color="error">Login Gmail</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LoginService from '../LoginService';
export default {
  name: 'LoginComponent',
  data() {
    return {
      user: {},
      error: '',
      message: ''
    }
  },
  async created() {
    try {
      console.log('VAMOS BIEN')
      //this.user = await LoginService.loginFacebook();
    } catch(err) {
      console.log('ERRRRRRRROOOOOOOORRRR '+err)
    }
  }
};
</script>
