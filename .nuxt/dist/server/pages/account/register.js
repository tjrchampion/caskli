exports.ids = [3];
exports.modules = {

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/register.vue?vue&type=template&id=d893efc4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<form id=\"login\">","</form>",[_vm._ssrNode("<fieldset>","</fieldset>",[_vm._ssrNode("<legend><a href=\"/\" aria-label=\"Return Home\"><img src=\"/csk.svg\" width=\"100%\" height=\"100%\" alt=\"csk.li\"></a></legend> <div class=\"field-group\"><label for=\"fullname\">Full Name</label> <input type=\"text\" id=\"fullname\" placeholder=\"Full name\""+(_vm._ssrAttr("value",(_vm.form.fullname)))+"></div> <div class=\"field-group\"><label for=\"email\">Email</label> <input type=\"text\" id=\"email\" placeholder=\"Email address\""+(_vm._ssrAttr("value",(_vm.form.email)))+"></div> <div class=\"field-group\"><label for=\"password\">Password</label> <input type=\"password\" id=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.form.password)))+"></div> "),_vm._ssrNode("<button type=\"submit\" aria-label=\"Register\">","</button>",[_c('key-icon',{attrs:{"size":"1x"}}),_vm._ssrNode(" Register")],2),_vm._ssrNode(" <a href=\"/account/login\" aria-label=\"Login\" style=\"padding: 1rem;\">Already have an account? Login now.</a>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/register.vue?vue&type=template&id=d893efc4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/register.vue?vue&type=script&lang=js&
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
/* harmony default export */ var registervue_type_script_lang_js_ = ({
  middleware: 'guest',
  name: 'Register',
  layout: 'primary',

  data() {
    return {
      form: {
        email: '',
        fullname: '',
        password: ''
      }
    };
  },

  methods: {
    async submit() {
      try {
        let response = await this.$axios.post('/api/account/register', this.form);
        this.$toasted.success(response.data.message, {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
        this.$router.push({
          path: '/account/login'
        });
      } catch (err) {
        this.$toasted.error(err.response.data.errors, {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/account/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/account/register.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  account_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "264d1713"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map