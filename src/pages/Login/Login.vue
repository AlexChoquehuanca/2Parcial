<template>
  <div class="auth-page light-blue theme--dark">
    <b-container>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Inicia sesion para entrar al sistema</h3>" customHeader>
        <p class="widget-auth-info">
          Use su direccion de correo para iniciar sesion.
        </p>
        <!-- <b-alert class="alert-sm text-center mt-2 widget-middle-overflow rounded-0" variant="default" show>
          This is a real app with Node.js backend - use
          <br/>
          <span class="font-weight-bold">"admin@flatlogic.com / password"</span>
          <br/>
          to login!
        </b-alert> -->
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <b-form-group label="Email" label-for="email">
            <b-input-group class="mb-3">
              <b-input-group-text ><i class="la la-user text-white"></i></b-input-group-text>
              <input id="email"
                     ref="email"
                     class="form-control input-transparent pl-3"
                     type="email"
                     required
                     placeholder="Email"/>
            </b-input-group>
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-input-group class="mb-3">
              <b-input-group-text ><i class="la la-lock text-white"></i></b-input-group-text>
              <input id="password"
                     ref="password"
                     class="form-control input-transparent pl-3"
                     type="password"
                     required
                     placeholder="Password"/>
            </b-input-group>
          </b-form-group>
          <div class="bg-widget auth-widget-footer">
            <b-button type="submit" variant="danger" class="auth-btn" size="sm">
              <span class="auth-btn-circle">
                <i class="la la-caret-right"></i>
              </span>
              {{this.isFetching ? 'Cargando...' : 'Login'}}
            </b-button>
            <p class="widget-auth-info mt-4">
              No tienes una cuenta, Registrese ahora!
            </p>
            <router-link class="d-block text-center mb-4" to="register">Crear cuenta</router-link>
             <!--<div class="social-buttons">
              <b-button @click="this.googleLogin" variant="primary" class="social-button">
                <i class="social-icon social-google"></i>
                <p class="social-text">GOOGLE</p>
              </b-button>
              <b-button @click="this.microsoftLogin" variant="success" class="social-button">
                <i class="social-icon social-microsoft"></i>
                <p class="social-text">MICROSOFT</p>
              </b-button>
            </div> -->
          </div>
        </form>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      Sistema realizado por pasantes usando: <a href="https://flatlogic.com" target="_blank">Flatlogic</a>
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import {mapState, mapActions} from 'vuex';

import config from '../../config';
import NavLink from '../../components/Sidebar/NavLink/NavLink';

export default {
  name: 'LoginPage',
  components: {NavLink, Widget },
  computed: {
    ...mapState('auth', {
      isFetching: state => state.isFetching,
      errorMessage: state => state.errorMessage,
    }),
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'receiveToken', 'receiveLogin']),
    login() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      if (email.length !== 0 && password.length !== 0) {
        this.loginUser({email, password});
      }
    },
    googleLogin() {
      this.loginUser({social: "google"});
    },
    microsoftLogin() {
      this.loginUser({social: "microsoft"});
    },
    setTheme() {

      let theme = localStorage.getItem("theme")

      document.querySelector('body').setAttribute("class", `light-blue ${'theme--' + (theme ? theme : 'dark')}`)
    }
  },
  created() {

    const token = this.$route.query.token;
    if (token) {
      this.receiveToken(token);
    } else if (this.isAuthenticated(localStorage.getItem('token'))) {
      this.receiveLogin();
    }
  },
  mounted() {
    const creds = config.auth;
    this.$refs.email.value = creds.email;
    this.$refs.password.value = creds.password;
    this.setTheme()
  }
};
</script>
