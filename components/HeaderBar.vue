<template>
  <header class="header__wrap">

    <ul class="navigation">
      <li><a href="/account/login"><login-icon size="1x" /> Login</a></li>
      <li><a href="/account/register"><key-icon size="1x" /> Register</a></li>
    </ul>

    <form @submit.prevent="submit" ref="shtn" id="shtn"> 
      <div class="gt-logo">
        <img src="~/assets/images/gt.svg" alt="geektu.be">
      </div>
      <div>
        <input type="text" ref="brewname" class="input" v-model="form.slug" id="slug" name="slug" placeholder="Give your brew a name (Can be left empty)">
      </div>
      <div :class="{ invalid: isNotUrl && isFocused}">
        <input class="input" @focusin="setFocus(true)" @focusout="setFocus(false)" v-model="form.url" id="url" name="url" placeholder="Brew URL">
      </div>
      <button type="submit" :disabled="submitDisabled == true" :class="{ btnActive: !isNotUrl && isFocused}">
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
      }
    }
  }
</script>