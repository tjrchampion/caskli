<template>
  <div id="geektube">
    <form @submit.prevent="submit" id="shtn">
        <div class="gt-logo">
          <img src="~/assets/images/gt.svg" alt="geektu.be">
        </div>
        <div>
          <input type="text" ref="brewname" class="input" v-model="form.slug" id="slug" name="slug" placeholder="Give your brew a name (Can be left empty)">
        </div>
        <div :class="{ invalid: isNotUrl && isFocused}">
          <input class="input" @focusin="setFocus(true)" @focusout="setFocus(false)" v-model="form.url" id="url" name="url" placeholder="Brew yourself a short URL">
        </div>
        <button type="submit" :disabled="disabled == true" :class="{ btnActive: !isNotUrl && isFocused}">
          <plus-icon size="3x" :style="{color: 'white'}"></plus-icon>
        </button>
    </form>

    <div class="empty__urls" v-if="urls.length < 1">
      <span>
        <coffee-icon size="1x"></coffee-icon> Nothing here. Try brewing a URL.
      </span>
    </div>

    <div class="container" v-if="urls.length > 0">
      <div class="grid">
        <div class="grid__item" v-for="(url, index) in urls" :key="index">
          <div v-if="!url.isLoading" class="url link__item">
            <!-- :style="`background: #${parse(url.meta).colour}`" -->
            <img :src="`/thumbs/${parse(url.meta).file}`" class="responsive-img" title="">
            <article class="title">
              <div class="link__info">
                <h4>{{url.slug}}</h4>
              </div>

              <div class="link__actions">
                <button class="external" style="background:none; border:none;" :disabled="copied == true" @click="copy(url.slug)">
                  <span class="external__icon">
                    <copy-icon size="1x"></copy-icon>
                  </span>
                </button>
                <a class="external" target="_blank" :href="`/${url.slug}`">
                  <span class="external__icon">
                    <external-link-icon size="1x"></external-link-icon>
                  </span>
                </a>
              </div>
            </article>
          </div>
          <div class="isloading" v-if="url.isLoading">
              Generating...
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { PlusIcon, ExternalLinkIcon, CopyIcon, LinkIcon, CoffeeIcon } from 'vue-feather-icons';
import moment from 'moment';
import appendHttp from '../api/append-http';

export default {
  components: {
    PlusIcon,
    ExternalLinkIcon,
    CopyIcon,
    LinkIcon,
    CoffeeIcon
  },
  data() {
    return {
      isFocused: false,
      disabled: false,
      copied: false,
      form: {
        slug: '',
        url: ''
      }
    }
  },

  mounted() {
    this.focusInput();
  },

  filters: {
    moment: function (date) {
      return moment(date).format('Do MMMM YYYY');
    }
  },
  computed: {
    isNotUrl: function() {
      if(this.form.url.length >= 1) {
        return !this.form.url.match(this.pattern);
      }
    }
  },
  methods: {
    parse(string) {
      return JSON.parse(string);
    },
    focusInput() {
      if(this.urls > 0) {
        this.$refs.brewname.focus();
      }
    },
    copy(slug) {

      let url = `${this.appUrl}/${slug}`;
      this.copied = !this.copied;
      
      try {
        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        setTimeout(() => {
          this.copied = !this.copied;
        }, 2000);       

        this.$toasted.success('Copied!', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });

      } catch(err) {
        console.log(err);
      }
    },
    async submit() {

      if(this.form.url == '') {
        return
      }

      if(this.form.slug.length > 12) {
        this.$toasted.error('Brew name can\'t be more than 12 characters', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
        return;
      }

      this.disabled = !this.disabled;

      let host = new URL(appendHttp(this.form.url)).host;
      let banned = this.banned.find(o => o.parent_domain === host);
      let short = this.short.find(o => o === host);

      if(short) {
        this.disabled = !this.disabled;
        this.$toasted.error('We can\'t brew an already shortened URL', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
        return;
      }



      if(banned) {
        this.disabled = !this.disabled;
        this.$toasted.error('We don\'t brew dirty links...', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
        return;
      }

      let slugExists = this.urls.find(o => o.slug === this.form.slug);
      if(slugExists) {
        this.disabled = !this.disabled;
        this.$toasted.error('This brew name has been used', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
        return;
      }

      if(!this.form.url.match(this.pattern)) {
        this.$toasted.error('Have you tried brewing a valid URL?', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
        return
      }

      this.$store.dispatch('setUrl', this.loader);
      this.form.meta = {
        colour: Math.floor(Math.random()*16777215).toString(16)
      };

      await this.$axios.post('/api', this.form).then(response => {
        this.$store.dispatch('clearLoader');
        this.$store.dispatch('setUrl', response.data);
        this.form.slug = '';
        this.form.url  = '';
        this.disabled = !this.disabled;

        this.$toasted.success(response.data.message, {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });

      }).catch(error => {
        this.disabled = !this.disabled;
        setTimeout(() => {
          this.$store.dispatch('clearLoader');
        }, 2000);
        this.$toasted.error(error.response.data.message, {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
      });
      
    },
    setFocus(focus) {
      this.isFocused = focus;
    }
  },
  
};
</script>