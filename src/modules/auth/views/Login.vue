<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-alert v-model="alert" type="error" dismissible>{{messageError}}</v-alert>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    prepend-icon="mdi-account-circle"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    :counter="6"
                    :rules="passwordRules"
                    label="Senha"
                    required
                    class="mb-6"
                    v-on:keyup.enter="validate"
                  ></v-text-field>

                  <!-- <v-checkbox
                v-model="checkbox"
                label="Lembrar-me"
                  ></v-checkbox>-->

                  <v-btn
                    block
                    :disabled="!valid || loading"
                    color="success"
                    class="mr-4"
                    @click="validate"
                  >{{ loading ? 'Carregando . . .' : 'Acessar'}}</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapAction } from "vuex";

export default {
  data: () => ({
    showPassword: false,
    valid: true,
    loading: false,
    alert: false,
    messageError: "",
    token: "",
    user: "",
    email: "",
    emailRules: [
      v => !!v || "E-mail obrigatório",
      v => /.+@.+\..+/.test(v) || "Digite um e-mail válido"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Senha obrigatória",
      v => (v && v.length >= 6) || "A senha precisa ter pelo menos 6 caracteres"
    ],
    checkbox: false
  }),

  methods: {
    ...mapActions("auth", ["ActionDoLogin"]),

    submit() {
      this.ActionDoLogin(this.email, this.password)
    },

    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
