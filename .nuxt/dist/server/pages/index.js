exports.ids = [2];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_append_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _api_append_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_api_append_http__WEBPACK_IMPORTED_MODULE_2__);
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
  components: {
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["PlusIcon"],
    ExternalLinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ExternalLinkIcon"],
    CopyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CopyIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LinkIcon"],
    CoffeeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CoffeeIcon"]
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
    };
  },

  mounted() {
    this.focusInput();
  },

  filters: {
    moment: function (date) {
      return moment__WEBPACK_IMPORTED_MODULE_1___default()(date).format('Do MMMM YYYY');
    }
  },
  computed: {
    isNotUrl: function () {
      if (this.form.url.length >= 1) {
        return !this.form.url.match(this.pattern);
      }
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
        console.log(err);
      }
    },

    async submit() {
      if (this.form.url == '') {
        return;
      }

      if (this.form.slug.length > 12) {
        this.$toasted.error('Brew name can\'t be more than 12 characters', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
        return;
      }

      this.disabled = !this.disabled;
      let host = new URL(_api_append_http__WEBPACK_IMPORTED_MODULE_2___default()(this.form.url)).host;
      let banned = this.banned.find(o => o.parent_domain === host);
      let short = this.short.find(o => o === host);

      if (short) {
        this.disabled = !this.disabled;
        this.$toasted.error('We can\'t brew an already shortened URL', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
        return;
      }

      if (banned) {
        this.disabled = !this.disabled;
        this.$toasted.error('We don\'t brew dirty links...', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
        return;
      }

      let slugExists = this.urls.find(o => o.slug === this.form.slug);

      if (slugExists) {
        this.disabled = !this.disabled;
        this.$toasted.error('This brew name has been used', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
        return;
      }

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
      await this.$axios.post('/api', this.form).then(response => {
        this.$store.dispatch('clearLoader');
        this.$store.dispatch('setUrl', response.data);
        this.form.slug = '';
        this.form.url = '';
        this.disabled = !this.disabled;
        this.$toasted.success(response.data.message, {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
      }).catch(error => {
        this.disabled = !this.disabled;
        setTimeout(() => {
          this.$store.dispatch('clearLoader');
        }, 2000);
        this.$toasted.error(error.response.data.message, {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
      });
    },

    setFocus(focus) {
      this.isFocused = focus;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)["URL"]))

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gt.5b4f721.svg";

/***/ }),

/***/ 28:
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=61308aa4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"geektube"}},[_vm._ssrNode("<form id=\"shtn\">","</form>",[_vm._ssrNode("<div class=\"gt-logo\"><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt=\"geektu.be\"></div> <div><input type=\"text\" id=\"slug\" name=\"slug\" placeholder=\"Give your brew a name (Can be left empty)\""+(_vm._ssrAttr("value",(_vm.form.slug)))+" class=\"input\"></div> <div"+(_vm._ssrClass(null,{ invalid: _vm.isNotUrl && _vm.isFocused}))+"><input id=\"url\" name=\"url\" placeholder=\"Brew yourself a short URL\""+(_vm._ssrAttr("value",(_vm.form.url)))+" class=\"input\"></div> "),_vm._ssrNode("<button type=\"submit\""+(_vm._ssrAttr("disabled",_vm.disabled == true))+(_vm._ssrClass(null,{ btnActive: !_vm.isNotUrl && _vm.isFocused}))+">","</button>",[_c('plus-icon',{style:({color: 'white'}),attrs:{"size":"3x"}})],1)],2),_vm._ssrNode(" "),(_vm.urls.length < 1)?_vm._ssrNode("<div class=\"empty__urls\">","</div>",[_vm._ssrNode("<span>","</span>",[_c('coffee-icon',{attrs:{"size":"1x"}}),_vm._ssrNode(" Nothing here. Try brewing a URL.\n    ")],2)]):_vm._e(),_vm._ssrNode(" "),(_vm.urls.length > 0)?_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid\">","</div>",_vm._l((_vm.urls),function(url,index){return _vm._ssrNode("<div class=\"grid__item\">","</div>",[(!url.isLoading)?_vm._ssrNode("<div class=\"url link__item\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",("/thumbs/" + (_vm.parse(url.meta).file))))+" title class=\"responsive-img\"> "),_vm._ssrNode("<article class=\"title\">","</article>",[_vm._ssrNode("<div class=\"link__info\"><h4>"+_vm._ssrEscape(_vm._s(url.slug))+"</h4></div> "),_vm._ssrNode("<div class=\"link__actions\">","</div>",[_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.copied == true))+" class=\"external\" style=\"background:none; border:none;\">","</button>",[_vm._ssrNode("<span class=\"external__icon\">","</span>",[_c('copy-icon',{attrs:{"size":"1x"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<a target=\"_blank\""+(_vm._ssrAttr("href",("/" + (url.slug))))+" class=\"external\">","</a>",[_vm._ssrNode("<span class=\"external__icon\">","</span>",[_c('external-link-icon',{attrs:{"size":"1x"}})],1)])],2)],2)],2):_vm._e(),_vm._ssrNode(" "+((url.isLoading)?("<div class=\"isloading\">\n            Generating...\n        </div>"):"<!---->"))],2)}),0)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=61308aa4&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
var lib_vue_loader_options_pagesvue_type_script_lang_js_ = __webpack_require__(26);

// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

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