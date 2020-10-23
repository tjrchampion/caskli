exports.ids = [1];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/_id.vue?vue&type=template&id=5603de87&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_id.vue?vue&type=template&id=5603de87&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_id.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData({
    params,
    error,
    $axios,
    redirect
  }) {
    try {
      const {
        data
      } = await $axios.$get(`/api/${params.id}`);
      let url = data[0].url;
      redirect(url);
    } catch (e) {
      error({
        message: 'URL not found',
        statusCode: 404
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "551520dc"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map