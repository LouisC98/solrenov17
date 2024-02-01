(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.js */ "./assets/navbar.js");
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectCategory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectCategory.js */ "./assets/selectCategory.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)



// start the Stimulus application
// import './bootstrap';

/***/ }),

/***/ "./assets/navbar.js":
/*!**************************!*\
  !*** ./assets/navbar.js ***!
  \**************************/
/***/ (() => {

var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
var appContent = document.querySelector('.app-content');
burger.addEventListener('click', function () {
  console.log('click');
  menu.classList.toggle('hidden');
});
appContent.addEventListener('click', function () {
  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
});

/***/ }),

/***/ "./assets/selectCategory.js":
/*!**********************************!*\
  !*** ./assets/selectCategory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");


(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
  compilerOptions: {
    delimiters: ["${", "}$"]
  },
  data: function data() {
    return {
      categories: null,
      photos: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/galerie/all').then(function (res) {
      _this.photos = JSON.parse(res.data);
    });
    axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/categories').then(function (res) {
      _this.categories = JSON.parse(res.data);
    });
  },
  methods: {
    searchByCategory: function searchByCategory(categoryId) {
      var _this2 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/galerie/".concat(categoryId)).then(function (res) {
        _this2.photos = JSON.parse(res.data);
      });
    },
    findAll: function findAll() {
      var _this3 = this;
      axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/galerie/all').then(function (res) {
        _this3.photos = JSON.parse(res.data);
      });
    }
  }
}).mount('#selectCategory');

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vue_dist_vue_esm-bundler_js-node_modules_axios_lib_axios_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQzJCO0FBQ047QUFDTztBQUM1QjtBQUNBOzs7Ozs7Ozs7O0FDWkEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDNUMsSUFBTUUsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFHekRGLE1BQU0sQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDbkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUNwQkosSUFBSSxDQUFDSyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUZMLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFFdkMsSUFBSSxDQUFDRixJQUFJLENBQUNLLFNBQVMsQ0FBQ0UsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ3BDUCxJQUFJLENBQUNLLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNoQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNmOEI7QUFDTjtBQUUxQkMsOENBQVMsQ0FBQztFQUNORSxlQUFlLEVBQUU7SUFDYkMsVUFBVSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUk7RUFDM0IsQ0FBQztFQUNEQyxJQUFJLFdBQUFBLEtBQUEsRUFBRztJQUNILE9BQU87TUFDSEMsVUFBVSxFQUFFLElBQUk7TUFDaEJDLE1BQU0sRUFBRTtJQUNaLENBQUM7RUFDTCxDQUFDO0VBQ0RDLE9BQU8sV0FBQUEsUUFBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUNOUCw2Q0FBSyxDQUFDUSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQ3hCQyxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFLO01BQ1hILEtBQUksQ0FBQ0YsTUFBTSxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDUCxJQUFJLENBQUM7SUFDdEMsQ0FBQyxDQUFDO0lBQ0ZILDZDQUFLLENBQUNRLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FDdkJDLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7TUFDWEgsS0FBSSxDQUFDSCxVQUFVLEdBQUdPLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUNQLElBQUksQ0FBQztJQUMxQyxDQUFDLENBQUM7RUFDTixDQUFDO0VBQ0RVLE9BQU8sRUFBRTtJQUNMQyxnQkFBZ0IsV0FBQUEsaUJBQUNDLFVBQVUsRUFBRTtNQUFBLElBQUFDLE1BQUE7TUFDekJoQiw2Q0FBSyxDQUFDUSxHQUFHLGFBQUFTLE1BQUEsQ0FBYUYsVUFBVSxDQUFFLENBQUMsQ0FDbENOLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7UUFDWE0sTUFBSSxDQUFDWCxNQUFNLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUNQLElBQUksQ0FBQztNQUN0QyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0RlLE9BQU8sV0FBQUEsUUFBQSxFQUFHO01BQUEsSUFBQUMsTUFBQTtNQUNObkIsNkNBQUssQ0FBQ1EsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUN4QkMsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBSztRQUNmUyxNQUFJLENBQUNkLE1BQU0sR0FBR00sSUFBSSxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDO01BQ2xDLENBQUMsQ0FBQztJQUNOO0VBQ0o7QUFDSixDQUFDLENBQUMsQ0FBQ2lCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDckMzQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VsZWN0Q2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz9lOGI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9uYXZiYXIuanMnO1xyXG5pbXBvcnQgJy4vc2VsZWN0Q2F0ZWdvcnkuanMnXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG4vLyBpbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuIiwiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuY29uc3QgYXBwQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGVudCcpO1xyXG5cclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcclxufSk7XHJcblxyXG5hcHBDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgIGlmICghbWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jcmVhdGVBcHAoe1xyXG4gICAgY29tcGlsZXJPcHRpb25zOiB7XHJcbiAgICAgICAgZGVsaW1pdGVyczogW1wiJHtcIiwgXCJ9JFwiXVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogbnVsbCxcclxuICAgICAgICAgICAgcGhvdG9zOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZ2FsZXJpZS9hbGwnKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5waG90b3MgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2NhdGVnb3JpZXMnKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuICAgICAgICB9KTsgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNlYXJjaEJ5Q2F0ZWdvcnkoY2F0ZWdvcnlJZCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9nYWxlcmllLyR7Y2F0ZWdvcnlJZH1gKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBob3RvcyA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5kQWxsKCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9nYWxlcmllL2FsbCcpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5waG90b3MgPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pLm1vdW50KCcjc2VsZWN0Q2F0ZWdvcnknKSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJidXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYXBwQ29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJhZGQiLCJjcmVhdGVBcHAiLCJheGlvcyIsImNvbXBpbGVyT3B0aW9ucyIsImRlbGltaXRlcnMiLCJkYXRhIiwiY2F0ZWdvcmllcyIsInBob3RvcyIsIm1vdW50ZWQiLCJfdGhpcyIsImdldCIsInRoZW4iLCJyZXMiLCJKU09OIiwicGFyc2UiLCJtZXRob2RzIiwic2VhcmNoQnlDYXRlZ29yeSIsImNhdGVnb3J5SWQiLCJfdGhpczIiLCJjb25jYXQiLCJmaW5kQWxsIiwiX3RoaXMzIiwibW91bnQiXSwic291cmNlUm9vdCI6IiJ9