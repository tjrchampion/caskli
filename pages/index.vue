<template>
  <div id="geektube">

    <header-bar ref="shtn" :form="form" />

    <div class="empty__urls" v-if="urls.length < 1">
      <span>
        <coffee-icon size="1x"></coffee-icon> Nothing here. Try brewing a URL.
      </span>
    </div>

    <div class="container">
      <div class="grid" ref="grid" @scroll="handleScroll">
        <div class="grid__item" v-for="(url, index) in urls" :key="index">
          <div v-if="!url.isLoading" class="url link__item">
            <!-- :style="`background: #${parse(url.meta).colour}`" -->
            <article class="title">
              <div class="link__count" :style="`border:3px solid #${parse(url.meta).colour}; color: #${parse(url.meta).colour};`">
                {{parse(url.meta).clicks}}
              </div>
              <div class="link__info">
                <!-- <img :src="`/thumbs/${parse(url.meta).file}`" class="responsive-img" title=""> -->
                <h3>{{url.slug}}</h3>
                <p>{{url.url}}</p>
              </div>
            </article>

            <div class="link__actions">
              <a href="/" class="external" style="background:none; border:none;" :disabled="copied == true" @click.prevent="copy(url.slug)">
                <span class="external__icon">
                  <copy-icon size="1.3x"></copy-icon>
                </span>
              </a>
              <a href="/" class="external" target="_blank" @click.prevent="updateClick(url)">
                <span class="external__icon">
                  <external-link-icon size="1.3x"></external-link-icon>
                </span>
              </a>
            </div>
          </div>
          <div class="isloading" v-if="url.isLoading">
              Generating...
          </div>
        </div>
        <button v-if="!canScroll && page !== pageCount && urls.length > 10" class="btn__load" @click="get">Get more brews</button>
      </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment';
import appendHttp from '../api/append-http';
import HeaderBar from '../components/HeaderBar';

export default {
  components: {
    HeaderBar
  },
  data() {
    return {
      copied: false,
      bottom: false,
      canScroll: false,
      form: {
        slug: '',
        url: ''
      }
    }
  },

  mounted() {
    this.canScroll = this.$refs.grid.scrollHeight > this.$refs.grid.clientHeight;
  },

  created() {
    this.$bus.$on('submit-brew', () => {
      this.submit();
    });
  },

  filters: {
    moment: function (date) {
      return moment(date).format('Do MMMM YYYY');
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

    async exists(slug) {
  
      try {
        if(slug !== '') {

          let { data } = await this.$axios.$get(`/api/${slug}`);
        
          if(data.length > 0) {
            return true;
          } 

        }
        return false;
      } catch(err) {
        console.log(err)
      }
    
    },

    async get(){
      let page = this.page;
      await this.$axios.$get('/api', {
        params: {
          page: page +=1,
        }
      }).then((response) => {
        this.$store.dispatch('setUrls', response.urls);
        this.$store.dispatch('setPage', page);
        this.bottom = false;
      }).catch(e => {
        console.log(e)
      });
    },

    async submit() {

      if(this.form.url == '') {
        return
      }

      let slug = this.form.slug.replace(/\s/g, '');

      this.form.slug = slug;

      if(this.form.slug.length > 12) {
        this.$toasted.error('Brew name can\'t be more than 12 characters', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
        this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
        return;
      }

      this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);

      let host = new URL(appendHttp(this.form.url)).host;
      let banned = this.banned.find(o => o.parent_domain === host);
      let short = this.short.find(o => o === host);

      if(short) {
        this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
        this.form.url = '';
        this.$toasted.error('We can\'t brew an already shortened URL', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
        return;
      }

      if(banned) {
        this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
        this.form.url = '';
        this.$toasted.error('We don\'t brew dirty links...', {
          theme: "outline", 
          position: "bottom-center", 
          duration : 5000
        });
        return;
      }

      this.exists(slug).then(res => {
        if(res) {
          this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
          this.$toasted.clear();
          this.$toasted.error('Brew name already exists', {
            theme: "outline", 
            position: "bottom-center", 
            duration : 5000
          });
          return true;
        } else {

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

          this.$axios.post('/api', this.form).then(response => {
            this.$store.dispatch('clearLoader');
            this.$store.dispatch('setUrl', response.data);
            this.form.slug = '';
            this.form.url  = '';
            this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);

            this.$toasted.success(response.data.message, {
              theme: "outline", 
              position: "bottom-center", 
              duration : 5000
            });

          }).catch(error => {
             this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
            setTimeout(() => {
              this.$store.dispatch('clearLoader');
            }, 2000);
            this.$toasted.error(error.response.data.message, {
              theme: "outline", 
              position: "bottom-center", 
              duration : 5000
            });
          });

        }

      });

    },

    async updateClick(data) {
      let windowReference = window.open();
      this.$store.dispatch('setUrlCount', data);
      windowReference.location = `/${data.slug}`;
    },


    handleScroll(el) {
      if((el.srcElement.offsetHeight + el.srcElement.scrollTop) >= el.srcElement.scrollHeight) {
        if(this.page !== this.pageCount ) {
          this.get();
        } else {
          this.$toasted.clear();       
          this.$toasted.info('No more brews...', {
            theme: "outline", 
            position: "bottom-center", 
            duration : 5000
          });  
        }
      }
    }
  
  },
  
};
</script>
