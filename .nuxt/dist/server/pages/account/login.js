exports.ids = [2];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/login.vue?vue&type=template&id=987d0cfa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<form id=\"login\"><fieldset><legend><a href=\"/\" aria-label=\"Return Home\"><img src=\"/csk.svg\" width=\"100%\" height=\"100%\" alt=\"csk.li\"></a></legend> <div class=\"field-group\"><label for=\"email\">Email</label> <input id=\"email\" type=\"email\" placeholder=\"Email address\""+(_vm._ssrAttr("value",(_vm.form.email)))+"></div> <div class=\"field-group\"><label for=\"password\">Password</label> <input id=\"password\" autocomplete=\"current-password\" type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.form.password)))+"></div> <button type=\"submit\" aria-label=\"Login\">Login</button> <a href=\"/account/register\" aria-label=\"Go to Register\" style=\"padding: 1rem;\">Don't have an account? Register now.</a></fieldset></form>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/account/login.vue?vue&type=template&id=987d0cfa&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Notify.vue?vue&type=template&id=056b38fe&
var Notifyvue_type_template_id_056b38fe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-notify",class:{danger: _vm.isError, success: !_vm.isError}},[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.message)+"\n"))])}
var Notifyvue_type_template_id_056b38fe_staticRenderFns = []


// CONCATENATED MODULE: ./components/Notify.vue?vue&type=template&id=056b38fe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notify.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Notifyvue_type_script_lang_js_ = ({
  name: 'Notification',
  props: ['message', 'isError']
});
// CONCATENATED MODULE: ./components/Notify.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Notifyvue_type_script_lang_js_ = (Notifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Notify.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Notifyvue_type_script_lang_js_,
  Notifyvue_type_template_id_056b38fe_render,
  Notifyvue_type_template_id_056b38fe_staticRenderFns,
  false,
  null,
  null,
  "353999ef"
  
)

/* harmony default export */ var Notify = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/account/login.vue?vue&type=script&lang=js&
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

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'guest',
  name: 'login',
  layout: 'primary',
  components: {
    Notify: Notify
  },

  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: this.form
        });
        this.$toasted.success('Logged In, welcome.', {
          theme: "outline",
          position: "bottom-center",
          duration: 5000
        });
      } catch (err) {
        console.log(err);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/account/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var account_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/account/login.vue





/* normalize component */

var login_component = Object(componentNormalizer["a" /* default */])(
  account_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ade6f5ae"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (login_component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map