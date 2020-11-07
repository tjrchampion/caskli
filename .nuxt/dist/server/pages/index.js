exports.ids = [4];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_append_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _api_append_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api_append_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HeaderBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  middleware: 'auth',
  components: {
    HeaderBar: _components_HeaderBar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  },

  data() {
    return {
      copied: false,
      bottom: false,
      canScroll: false,
      form: {
        user_id: null,
        slug: '',
        url: ''
      }
    };
  },

  async fetch() {
    try {
      this.$store.dispatch('clearUrls');
      let response = await this.$axios.$get(`/api`, {
        params: {
          page: this.page
        }
      });
      this.$store.dispatch('setUrls', response.urls);
      this.$store.dispatch('setPageCount', response.pageCount);
    } catch (err) {
      console.log(err);
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
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('Do MMMM YYYY');
    }
  },
  methods: {
    parse(string) {
      return JSON.parse(string);
    },

    focusInput() {
      if (this.urls > 0) {
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
          duration: 5000
        });
      } catch (err) {
        this.$toasted.error('Sorry cannot copy this URL.', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
      }
    },

    async exists(slug) {
      try {
        if (slug !== '') {
          let {
            data
          } = await this.$axios.$get(`/api/${slug}`);

          if (data.length > 0) {
            return true;
          }
        }

        return false;
      } catch (err) {
        this.$toasted.error('could not check if URL exists!', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
      }
    },

    async get() {
      let page = this.page;
      await this.$axios.$get(`/api`, {
        params: {
          page: page += 1
        }
      }).then(response => {
        this.$store.dispatch('setUrls', response.urls);
        this.$store.dispatch('setPage', page);
        this.bottom = false;
      }).catch(e => {
        this.$toasted.error('Could not find URL!', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
      });
    },

    async submit() {
      this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);

      if (this.form.url == '') {
        return;
      }

      let slug = this.form.slug.replace(/\s/g, '');
      this.form.slug = slug;
      this.form.user_id = this.loggedInUser.id;

      if (this.form.slug.length > 12) {
        this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
        this.$toasted.clear();
        this.$toasted.error('Brew name can\'t be more than 12 characters', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
        return;
      }

      let host = new URL(_api_append_http__WEBPACK_IMPORTED_MODULE_2___default()(this.form.url)).host;
      let banned = this.banned.find(o => o.parent_domain === host);
      let short = this.short.find(o => o === host);

      if (short) {
        this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
        this.form.url = '';
        this.$toasted.clear();
        this.$toasted.error('We can\'t brew an already shortened URL', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
        return;
      }

      if (banned) {
        this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
        this.form.url = '';
        this.$toasted.clear();
        this.$toasted.error('We don\'t brew dirty links...', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
        return;
      }

      this.exists(slug).then(res => {
        if (res) {
          this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
          this.$toasted.clear();
          this.$toasted.error('Brew name already exists', {
            theme: "outline",
            position: "bottom-center",
            duration: 5000
          });
          return true;
        } else {
          if (!this.form.url.match(this.pattern)) {
            this.$toasted.error('Have you tried brewing a valid URL?', {
              theme: "outline",
              position: "bottom-center",
              duration: 5000
            });
            return;
          }

          this.$store.dispatch('setUrl', this.loader);
          this.form.meta = {
            colour: Math.floor(Math.random() * 16777215).toString(16)
          };
          this.$axios.post('/api', this.form).then(response => {
            this.$store.dispatch('clearLoader');
            this.$store.dispatch('setUrl', response.data);
            this.form.slug = '';
            this.form.url = '';
            this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
            this.$toasted.success(response.data.message, {
              theme: "outline",
              position: "bottom-center",
              duration: 5000
            });
          }).catch(error => {
            this.$store.dispatch('setSubmitDisabled', !this.submitDisabled);
            setTimeout(() => {
              this.$store.dispatch('clearLoader');
            }, 2000);
            this.$toasted.error(error.response.data.message, {
              theme: "outline",
              position: "bottom-center",
              duration: 5000
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

    async remove(id) {
      try {
        await sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
          heightAuto: false,
          title: 'Are you sure?',
          html: `You are about to delete this brew.`,
          showCloseButton: false,
          showCancelButton: true,
          allowEscapeKey: false,
          allowOutsideClick: false,
          showConfirmButton: true,
          confirmButtonText: 'Yes delete brew.',
          cancelButtonText: 'No keep it!'
        }).then(result => {
          if (result.value) {
            this.$axios.delete(`/api/${id}`).then(res => {
              this.$store.dispatch('clearIndex', id);
            });
          }
        });
      } catch (err) {
        this.$toasted.error('cannot remove this URL').goAway(5000);
      }
    },

    handleScroll(el) {
      if (el.srcElement.offsetHeight + el.srcElement.scrollTop >= el.srcElement.scrollHeight) {
        if (this.page !== this.pageCount) {
          this.get();
        } else {
          this.$toasted.clear();
          this.$toasted.info('No more brews...', {
            theme: "outline",
            position: "bottom-center",
            duration: 5000
          });
        }
      }
    },

    reload() {
      alert('qeqweq');
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)["URL"]))

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

const appendHttp = url => {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
    if (!url.match('www.')) {
      url = "https://" + url;
    } else {
      url = "https://" + url;
    }
  } else if (/^(?:f|ht)tps?\:\/\//.test(url)) {
    if (url.match('https://www.')) {
      return url;
    } else {
      host = url.replace('https://', '');
      url = `https://${host}`;
    }
  }

  return url;
};

module.exports = appendHttp;

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderBar.vue?vue&type=template&id=7f9f0170&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.$nuxt.isOffline)?("<span class=\"is-offline\">You're currently offline. Please check you have an active internet connection.</span>"):"<!---->")+" "),_vm._ssrNode("<header class=\"header__wrap\">","</header>",[_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"navigation\">","</ul>",[(_vm.isAuthenticated)?_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href>","</a>",[_c('refresh-cw',{attrs:{"size":"1x"}}),_vm._ssrNode(" Refresh")],2)]):_vm._e(),_vm._ssrNode(" "),(!_vm.isAuthenticated)?_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"/account/login\" aria-label=\"Go to login\">","</a>",[_c('login-icon',{attrs:{"size":"1x"}}),_vm._ssrNode(" Login")],2)]):_vm._e(),_vm._ssrNode(" "),(_vm.isAuthenticated)?_vm._ssrNode("<li>","</li>",[_c('user-icon',{attrs:{"size":"1x"}}),_vm._ssrNode(_vm._ssrEscape(" Welcome "+_vm._s(_vm.loggedInUser.fullname)))],2):_vm._e(),_vm._ssrNode(" "),(_vm.isAuthenticated)?_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"/\" aria-label=\"Logout\">","</a>",[_c('logout-icon',{attrs:{"size":"1x"}}),_vm._ssrNode(" Logout")],2)]):_vm._e(),_vm._ssrNode(" "),(!_vm.isAuthenticated)?_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"/account/register\" aria-label=\"Go to Register\">","</a>",[_c('key-icon',{attrs:{"size":"1x"}}),_vm._ssrNode(" Register")],2)]):_vm._e()],2)]),_vm._ssrNode(" "),_vm._ssrNode("<form id=\"shtn\">","</form>",[_vm._ssrNode("<div class=\"gt-logo\"><img src=\"csk.svg\" width=\"100%\" height=\"100%\" alt=\"geektu.be\"></div> <div><label for=\"slug\">Brew Name</label> <input type=\"text\" autocomplete=\"off\" id=\"slug\" name=\"slug\" placeholder=\"Give your brew a name (Can be left empty)\""+(_vm._ssrAttr("value",(_vm.form.slug)))+" class=\"input\"></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("url",{ invalid: _vm.isNotUrl && _vm.isFocused}))+">","</div>",[_vm._ssrNode("<label for=\"url\">Brew URL</label> <input autocomplete=\"off\" id=\"url\" name=\"url\" placeholder=\"Brew URL\""+(_vm._ssrAttr("value",(_vm.form.url)))+" class=\"input\"> "),_vm._ssrNode("<button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.submitDisabled == true))+" aria-label=\"Submit URL\""+(_vm._ssrClass(null,{ btnActive: !_vm.isNotUrl && _vm.isFocused}))+">","</button>",[_c('plus-icon',{style:({color: 'white'}),attrs:{"size":"2x"}})],1)],2)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderBar.vue?vue&type=template&id=7f9f0170&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeaderBarvue_type_script_lang_js_ = ({
  name: 'HeaderBar',
  props: ['form', 'reload'],

  data() {
    return {
      isFocused: false
    };
  },

  computed: {
    isNotUrl: function () {
      if (this.form.url.length >= 1) {
        return !this.form.url.match(this.pattern);
      }
    }
  },

  mounted() {//this.focusInput();
  },

  methods: {
    setFocus(focus) {
      this.isFocused = focus;
    },

    submit() {
      this.$bus.$emit('submit-brew');
    },

    async logout() {
      if (this.isAuthenticated) {
        await this.$auth.logout().then(() => {
          this.$router.push({
            path: '/account/login'
          });
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/HeaderBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderBarvue_type_script_lang_js_ = (HeaderBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/HeaderBar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "93a3eae0"
  
)

/* harmony default export */ var HeaderBar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7784a12a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{attrs:{"id":"geektube"}},[_c('header-bar',{ref:"shtn",attrs:{"form":_vm.form,"reload":function () { return _vm.$fetch(); }}}),_vm._ssrNode(" "),(_vm.urls.length < 1)?_vm._ssrNode("<div class=\"empty__urls\">","</div>",[_vm._ssrNode("<span>","</span>",[_c('coffee-icon',{attrs:{"size":"1x"}}),_vm._ssrNode(" Nothing here. Try brewing a URL or\n      <a href=\"/\">Refresh Brews.</a>")],2)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"gtprimary\" class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid disable-scrollbars\">","</div>",[_vm._l((_vm.urls),function(url,index){return _vm._ssrNode("<div class=\"grid__item\">","</div>",[(!url.isLoading)?_vm._ssrNode("<div class=\"url link__item\">","</div>",[_vm._ssrNode("<article class=\"title\"><div class=\"link__count\""+(_vm._ssrStyle(null,("border:3px solid #" + (_vm.parse(url.meta).colour) + "; color: #" + (_vm.parse(url.meta).colour) + ";"), null))+">"+_vm._ssrEscape("\n              "+_vm._s(_vm.parse(url.meta).clicks)+"\n            ")+"</div> <div class=\"link__info\"><h3>"+_vm._ssrEscape(_vm._s(url.slug))+"</h3> <p>"+_vm._ssrEscape(_vm._s(url.url))+"</p></div></article> "),_vm._ssrNode("<div class=\"link__actions\">","</div>",[_vm._ssrNode("<a href=\"/\" aria-label=\"Copy URL\""+(_vm._ssrAttr("disabled",_vm.copied == true))+" class=\"external\" style=\"background:none; border:none;\">","</a>",[_vm._ssrNode("<span class=\"external__icon\">","</span>",[_c('copy-icon',{attrs:{"size":"1x"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"/\" target=\"_blank\" aria-label=\"Go to URL\" class=\"external\">","</a>",[_vm._ssrNode("<span class=\"external__icon\">","</span>",[_c('external-link-icon',{attrs:{"size":"1x"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<a href=\"/\" target=\"_blank\" aria-label=\"Go to URL\" class=\"external\">","</a>",[_vm._ssrNode("<span class=\"external__icon\">","</span>",[_c('trash-icon',{attrs:{"size":"1x"}})],1)])],2)],2):_vm._e(),_vm._ssrNode(" "+((url.isLoading)?("<div class=\"isloading\">\n            Generating...\n        </div>"):"<!---->"))],2)}),_vm._ssrNode(" "+((!_vm.canScroll && _vm.page !== _vm.pageCount && _vm.urls.length > 10)?("<button aria-label=\"Get more Brews\" class=\"btn__load\">Get more brews</button>"):"<!---->"))],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7784a12a&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
var lib_vue_loader_options_pagesvue_type_script_lang_js_ = __webpack_require__(33);

// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d78d5d18"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map