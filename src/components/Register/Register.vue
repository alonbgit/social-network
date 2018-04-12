<template>
  <div class="register">
    <input type="text" placeholder="First Name" v-model="firstName"/>
    <input type="text" placeholder="Last Name" v-model="lastName"/>
    <input type="text" placeholder="Email" v-model="email"/>
    <input type="password" placeholder="Password" v-model="password"/>
    <birthday class="birthday"
              @yearChange="year = $event"
              @monthChange="month = $event"
              @dayChange = "day = $event"/>
    <button class="submit-button" @click="onSubmit">Create Account</button>
  </div>
</template>

<script>

  import Birthday from './Birthday.vue';

  import { mapActions } from 'vuex';

  export default {

    components: {
      birthday: Birthday
    },

    data() {
      return {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        year: null,
        month: null,
        day: null
      }
    },

    methods: {

      ...mapActions([
        'registerUser'
      ]),

       onSubmit() {

         this.registerUser({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            day: this.day,
            month: this.month,
            year: this.year
          }).then((data) => {
            console.log('user regisered');
          });

        }

    }

  }

</script>

<style lang="scss" scoped>

  .register {

    display: flex;
    flex-direction: column;

    .birthday {
      margin-top: 8px;
    }

    input[type="text"], input[type="password"] {
      height: 30px;
      width: 200px;
      padding-left: 10px;
      font-size: 17px;
      outline: 0;
      border-radius: 3px;
      border: 1px solid #63a6ff;
      margin-top: 9px;
    }

    .submit-button {
      width: 150px;
      height: 30px;
      background: #63a6ff;
      border: 0;
      margin-top: 10px;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }

    .submit-button:hover {
      background: #52a6f9;
    }

  }

</style>
