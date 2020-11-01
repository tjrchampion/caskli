<template>
  <header class="header__wrap">

    <ul class="navigation">
      <li v-if="!isAuthenticated"><a href="/account/login" aria-label="Go to login"><login-icon size="1x" />Login</a></li>
      <li v-if="isAuthenticated"><user-icon size="1x" /> Welcome {{loggedInUser.fullname}}</li>
      <li v-if="isAuthenticated"><a href="/" aria-label="Logout" @click="logout"><logout-icon size="1x" />Logout</a></li>
      <li v-if="!isAuthenticated"><a href="/account/register" aria-label="Go to Register"><key-icon size="1x" />Register</a></li>
    </ul>

    <form @submit.prevent="submit" ref="shtn" id="shtn"> 
      <div class="gt-logo">
        <img src="~/assets/images/csk.svg" width="100%" height="100%" alt="geektu.be">
      </div>
      <div>
        <label for="slug">Brew Name</label>
        <input type="text" ref="brewname" id="slug" class="input" v-model="form.slug" name="slug" placeholder="Give your brew a name (Can be left empty)">
      </div>
      <div :class="{ invalid: isNotUrl && isFocused}">
        <label for="url">Brew URL</label>
        <input class="input" @focusin="setFocus(true)" @focusout="setFocus(false)" v-model="form.url" id="url" name="url" placeholder="Brew URL">
      </div>
      <button type="submit" :disabled="submitDisabled == true" :class="{ btnActive: !isNotUrl && isFocused}" aria-label="Submit URL">
        <plus-icon size="3x" :style="{color: 'white'}"></plus-icon>
      </button>
    </form>
  </header>
</template>

<script>
  export default {
    name: 'HeaderBar',
    props: ['form'],
    data() {
      return {
        isFocused: false
      }
    },
    computed: {
      isNotUrl: function() {
        if(this.form.url.length >= 1) {
          return !this.form.url.match(this.pattern);
        }
      }
    },
    mounted() {
      //this.focusInput();
    },
    methods: {
      setFocus(focus) {
        this.isFocused = focus;
      },
      submit() {
        this.$bus.$emit('submit-brew');
      },
      async logout() {
        if(this.isAuthenticated) {
          await this.$auth.logout().then(() => {
            this.$router.push({path: '/account/login'});
          });
        }
      }

    }
  }
</script>