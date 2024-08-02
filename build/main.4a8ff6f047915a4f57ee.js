/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.demo-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-upload {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 80px 40px;
  background: rgba(234, 106, 230, 0.3176470588);
  border-radius: 20px;
}

.form-upload__label {
  display: flex;
  align-items: center;
}

.form-upload__title {
  max-width: 200px;
  margin-right: 55px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
}

.form-upload__input {
  font-size: 18px;
  font-weight: 300;
  font-family: inherit;
}

.form-upload__input::file-selector-button {
  min-width: 190px;
  margin-right: 30px;
  padding: 9px 15px;
  border: none;
  border-radius: 6px;
  font-weight: inherit;
  font-family: inherit;
  cursor: pointer;
}

#uploadForm_File {
  text-transform: lowercase;
  cursor: pointer;
}

#uploadForm_File,
.form-upload__submit,
progress,
.form-upload__container {
  width: 360px;
}

.form-upload__submit {
  display: block;
  margin-top: 25px;
  padding: 9px 15px;
  border: 2px solid transparent;
  border-radius: 6px;
  color: #000000;
  font-size: 18px;
  font-weight: 300;
  font-family: inherit;
  transition: background-color 0.2s linear;
}

.form-upload__submit:hover {
  background-color: #FFFFFF;
  cursor: pointer;
  transition: background-color 0.2s linear;
}

.form-upload__submit:focus-visible {
  border: 2px solid #ffffff;
  outline: none;
}

.form-upload__submit:focus {
  border: 2px solid #ffffff;
  outline: none;
}

.form-upload__submit_purple {
  background-color: #C56FFF;
}

progress {
  height: 10px;
  margin-top: 25px;
  border: none;
  border-radius: 50%;
  background-color: #609acc;
}

progress::-webkit-progress-bar {
  border: none;
  background-color: #609acc;
}

progress::-webkit-progress-value {
  background-color: #1c30c6;
}

progress::-moz-progress-bar {
  border: none;
  background-color: #1c30c6;
}

.form-upload__container {
  margin-top: 10px;
  font-size: 16px;
}

.form-upload__status:empty::before {
  content: "Не загружено";
}

.form-upload__status:empty + span {
  display: none;
}

* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

*::before,
*::after {
  display: inline-block;
}

html,
body {
  height: 100%;
  min-width: 320px;
}

body {
  color: #f46ee4;
  line-height: 1;
  font-family: "Poppins";
  font-size: toRem(16);
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea {
  font-family: "Poppins";
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  background-color: transparent;
}

input,
textarea {
  width: 100%;
}

label {
  display: inline-block;
}

button,
select,
option {
  cursor: pointer;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

summary {
  list-style: none !important;
}

summary::-webkit-details-marker {
  display: none;
}

._title {
  font-weight: 700;
  line-height: 120%;
  text-align: center;
}
@media (min-width: 79.375em) {
  ._title {
    font-size: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 79.375em) {
  @supports (font-size: clamp( 1.5rem , 1.1631578947rem  +  1.6842105263vw , 2.5rem )) {
    ._title {
      font-size: clamp( 1.5rem , 1.1631578947rem  +  1.6842105263vw , 2.5rem );
    }
  }
  @supports not (font-size: clamp( 1.5rem , 1.1631578947rem  +  1.6842105263vw , 2.5rem )) {
    ._title {
      font-size: calc(1.5rem + 1 * (100vw - 20rem) / 59.375);
    }
  }
}
@media (max-width: 20em) {
  ._title {
    font-size: 1.5rem;
  }
}

.lock body {
  overflow: hidden;
  touch-action: none;
  overscroll-behavior: none;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
@supports (overflow: clip) {
  .wrapper {
    overflow: clip;
  }
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}

[class*=__container] {
  max-width: 79.375rem;
  margin: 0 auto;
  padding: 0 0.9375rem;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/file-loader.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/common.scss","webpack://./src/scss/base/mixin.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,aAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ADGF;;ACDA;EACE,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,6CAAA;EACA,mBAAA;ADIF;;ACDA;EACE,aAAA;EACA,mBAAA;ADIF;;ACDA;EACE,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;ADIF;;ACDA;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;ADIF;;ACDA;EACE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EACA,eAAA;ADIF;;ACDA;EACE,yBAAA;EACA,eAAA;ADIF;;ACDA;;;;EAIE,YAAA;ADIF;;ACDA;EACE,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,wCAAA;ADIF;;ACDA;EACE,yBAAA;EACA,eAAA;EACA,wCAAA;ADIF;;ACDA;EACE,yBAAA;EACA,aAAA;ADIF;;ACDA;EACE,yBAAA;EACA,aAAA;ADIF;;ACDA;EACE,yBAAA;ADIF;;ACDA;EACE,YAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;ADIF;;ACDA;EACE,YAAA;EACA,yBAAA;ADIF;;ACDA;EACE,yBAAA;ADIF;;ACDA;EACE,YAAA;EACA,yBAAA;ADIF;;ACDA;EACE,gBAAA;EACA,eAAA;ADIF;;ACDA;EACE,uBAAA;ADIF;;ACDA;EACE,aAAA;ADIF;;AE/HA;EACE,YAAA;EACA,WAAA;EACA,WAAA;AFkIF;;AEhIA;;;EAGE,sBAAA;AFmIF;;AEjIA;;EAEE,qBAAA;AFoIF;;AE1HA;;EAEE,YAAA;EACA,gBAAA;AF6HF;;AE3HA;EACE,cFnBU;EEoBV,cAAA;EACA,sBFzBW;EE0BX,oBFzBS;EE2BT,0BAAA;EACA,2BAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;AF6HF;;AE3HA;;;EAGE,sBFrCW;EEsCX,kBAAA;EACA,oBAAA;EACA,cAAA;EACA,6BAAA;AF8HF;;AE3HA;;EAEE,WAAA;AF8HF;;AE3HA;EACE,qBAAA;AF8HF;;AE3HA;;;EAGE,eAAA;AF8HF;;AE5HA;EACE,qBAAA;EACA,cAAA;EACA,qBAAA;AF+HF;;AE7HA;EACE,gBAAA;AFgIF;;AE9HA;EACE,mBAAA;AFiIF;;AE/HA;;;;;;EAME,oBAAA;EACA,kBAAA;AFkIF;;AEhIA;EACE,2BAAA;AFmIF;;AEjIA;EACE,aAAA;AFoIF;;AG3NA;EAEE,gBAAA;EACA,iBAAA;EACA,kBAAA;AH6NF;AIrHE;ED5GF;IC6GG,iBAAA;EJwHD;AACF;AIrHC;EAEC;IDnHF;MCoHG,wEAhBc;IJuIb;EACF;EIrHA;IDvHF;MCwHG,sDAAA;IJwHC;EACF;AACF;AItHE;ED5HF;IC6HG,iBAAA;EJyHD;AACF;;AAjMC;EACC,gBAAA;EACA,kBAAA;EACA,yBAAA;AAoMF;AA7LA;EACC,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AA+LD;AA9LC;EALD;IAME,cAAA;EAiMA;AACF;AA/LC;EACC,cAAA;AAiMF;AA9LC;EACC,YAAA;AAgMF;;AAxLC;EAEE,oBAAA;EACA,cAAA;EAIC,oBAAA;AAuLJ","sourcesContent":["@use \"sass:math\";\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n@import 'file-loader';\n\n$fontFamily: \"Poppins\";\n$fontSize: toRem(16); // де 14(px) - розмір шрифту за замовчуванням з макету\n\n// Основные цвета\n$mainColor: #f46ee4; \n$accentColor: #dd20ab; \n$grayColor: #898989;\n$orangeColor: #E89F71;\n$darkGrayColor: #616161;\n$bgColor: #f9c9f4;\n\n// Адаптив ===============================================================================================================================================================================================================================================================================================\n\n// Минимальная ширина\n$minWidth: 320;\n// Ширина макета\n$maxWidth: 1440;\n// Ширина огр контейнера\n$maxWidthContainer: 1240;\n// ОБщий отступ у контейнера\n// (30 = по 15px слева и справа, 0 = немає відступу)\n$containerPadding: 30;\n\n// Ширина срабатывания первого брекпойнта\n$containerWidth: $maxWidthContainer + $containerPadding;\n\n// Брейк-поинт\n$pc: toEm($containerWidth); // ПК, ноутбуки,планшеты в горизонтальному положении\n$tablet: toEm(991.98); // Планшеты\n$mobile: toEm(767.98); // Телефоны L\n$mobileSmall: toEm(479.98); // Телефоны S\n\n// Тип адаптива:\n// 1 = отзывчивый (у контейнера нет брейкпойнтов),\n// 2 = по брейкпоинтам\n$responsiveType: 1;\n\n// Обнуленния, миксины, общие стили ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\n@import \"base/null\";\n@import \"base/mixin\";\n@import \"base/common\";\n\n//  tailwind ============================================================================================================================================================================================== =============================================================================================== ===========================================================================\n// @import \"libs/tailwind\";\n\n// Стили тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\nbody {\n\t// scrollbar-gutter: stable;\n\t// Скролл заблокирован\n\t.lock & {\n\t\toverflow: hidden;\n\t\ttouch-action: none;\n\t\toverscroll-behavior: none;\n\t}\n\t// Сайт загруженный\n\t.loaded & {\n\t}\n}\n// Оболчка ============================================================================================================================================================================================================================================================================================================================================================================================================================================\n.wrapper {\n\tmin-height: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: hidden;\n\t@supports (overflow: clip) {\n\t\toverflow: clip;\n\t}\n\t// Прижимаем footer\n\t> main {\n\t\tflex: 1 1 auto;\n\t}\n\t// Фикс для слайдерів\n\t> * {\n\t\tmin-width: 0;\n\t}\n}\n// Ограничивающий контейнер ======================================================================================================================================================================================================================\n\n\n@if ($responsiveType==1) {\n\t// Отзывчивый\n\t[class*=\"__container\"] {\n\t\t@if ($maxWidthContainer>0) {\n\t\t\tmax-width: toRem($containerWidth);\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t@if ($containerPadding>0) {\n\t\t\t@if ($maxWidthContainer>0) {\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\n\t\t\t} @else {\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\n\t\t\t}\n\t\t}\n\t}\n} @else {\n\t// Брейк-пинты\n\t[class*=\"__container\"] {\n\t\tmargin: 0 auto;\n\t\t@if ($maxWidthContainer>0) {\n\t\t\tmax-width: toRem($containerWidth);\n\t\t} @else {\n\t\t\t@if ($containerPadding>0) {\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\n\t\t\t}\n\t\t}\n\t\t@media (max-width: $pc) {\n\t\t\tmax-width: toRem(970);\n\t\t}\n\t\t@media (max-width: $tablet) {\n\t\t\tmax-width: toRem(750);\n\t\t}\n\t\t@media (max-width: $mobile) {\n\t\t\tmax-width: none;\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\n\t\t\t}\n\t\t}\n\t}\n}",".demo-wrapper {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-upload {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 80px 40px;\n  background: #ea6ae651;\n  border-radius: 20px;\n}\n\n.form-upload__label {\n  display: flex;\n  align-items: center;\n}\n\n.form-upload__title {\n  max-width: 200px;\n  margin-right: 55px;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1;\n}\n\n.form-upload__input {\n  font-size: 18px;\n  font-weight: 300;\n  font-family: inherit;\n}\n\n.form-upload__input::file-selector-button {\n  min-width: 190px;\n  margin-right: 30px;\n  padding: 9px 15px;\n  border: none;\n  border-radius: 6px;\n  font-weight: inherit;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n#uploadForm_File {\n  text-transform: lowercase;\n  cursor: pointer;\n}\n\n#uploadForm_File,\n.form-upload__submit,\nprogress,\n.form-upload__container {\n  width: 360px;\n}\n\n.form-upload__submit {\n  display: block;\n  margin-top: 25px;\n  padding: 9px 15px;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  color: #000000;\n  font-size: 18px;\n  font-weight: 300;\n  font-family: inherit;\n  transition: background-color 0.2s linear;\n}\n\n.form-upload__submit:hover {\n  background-color: #FFFFFF;\n  cursor: pointer;\n  transition: background-color 0.2s linear;\n}\n\n.form-upload__submit:focus-visible {\n  border: 2px solid #ffffff;\n  outline: none;\n}\n\n.form-upload__submit:focus {\n  border: 2px solid #ffffff;\n  outline: none;\n}\n\n.form-upload__submit_purple {\n  background-color: #C56FFF;\n}\n\nprogress {\n  height: 10px;\n  margin-top: 25px;\n  border: none;\n  border-radius: 50%;\n  background-color: #609acc;\n}\n\nprogress::-webkit-progress-bar {\n  border: none;\n  background-color: #609acc;\n}\n\nprogress::-webkit-progress-value {\n  background-color: #1c30c6;\n}\n\nprogress::-moz-progress-bar {\n  border: none;\n  background-color: #1c30c6;\n}\n\n.form-upload__container {\n  margin-top: 10px;\n  font-size: 16px;\n}\n\n.form-upload__status:empty::before {\n  content: \"Не загружено\";\n}\n\n.form-upload__status:empty + span {\n  display: none;\n}\n","* {\n  padding: 0px;\n  margin: 0px;\n  border: 0px;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n*::before,\n*::after {\n  display: inline-block;\n}\n:focus,\n:active {\n  // outline: none;\n}\na:focus,\na:active {\n  // outline: none;\n}\nhtml,\nbody {\n  height: 100%;\n  min-width: $minWidth + px;\n}\nbody {\n  color: $mainColor;\n  line-height: 1;\n  font-family: $fontFamily;\n  font-size: $fontSize;\n  //text-rendering: optimizeLegibility;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ninput,\nbutton,\ntextarea {\n  font-family: $fontFamily;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  background-color: transparent;\n}\n\ninput,\ntextarea {\n  width: 100%;\n}\n\nlabel {\n  display: inline-block;\n}\n\nbutton,\nselect,\noption {\n  cursor: pointer;\n}\na {\n  display: inline-block;\n  color: inherit;\n  text-decoration: none;\n}\nul li {\n  list-style: none;\n}\nimg {\n  vertical-align: top;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: inherit;\n  font-size: inherit;\n}\nsummary {\n  list-style: none !important;\n}\nsummary::-webkit-details-marker {\n  display: none;\n}\n","._title {\n  @include adaptiveValue(\"font-size\", 40, 24);\n  font-weight: 700;\n  line-height: 120%;\n  text-align: center;\n}","//Підключення шрифту\n@mixin font($font_name, $file_name, $weight, $style) {\n\t@font-face {\n\t\tfont-family: $font_name;\n\t\tfont-display: swap;\n\t\tsrc:\n\t\t\turl(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"),\n\t\t\turl(\"../fonts/#{$file_name}.woff\") format(\"woff\");\n\t\tfont-weight: #{$weight};\n\t\tfont-style: #{$style};\n\t}\n}\n//Percent\n@function percent($px, $from: 100) {\n\t$result: math.div($px, $from) * 100%;\n\t@return $result;\n}\n//REM\n@function toRem($px, $current: 16) {\n\t$result: math.div($px, $current) + rem;\n\t@return $result;\n}\n@function rem($px, $current: 16) {\n\t$result: math.div($px, $current) + rem;\n\t@return $result;\n}\n//EM\n@function toEm($px, $current: 16) {\n\t$result: math.div($px, $current) + em;\n\t@return $result;\n}\n@function em($px, $current: 16) {\n\t$result: math.div($px, $current) + em;\n\t@return $result;\n}\n\n//Currency\n@mixin currency($sym) {\n\t&::after {\n\t\tcontent: \"#{$sym}\";\n\t}\n}\n\n// Трикутник\n@mixin triangle($direction, $color, $size, $size2: $size) {\n\t@if $direction == left {\n\t\tborder: toRem($size2) solid transparent;\n\t\tborder-right: toRem($size) solid $color;\n\t}\n\t@if $direction == right {\n\t\tborder: toRem($size2) solid transparent;\n\t\tborder-left: toRem($size) solid $color;\n\t}\n\t@if $direction == top {\n\t\tborder: toRem($size2) solid transparent;\n\t\tborder-bottom: toRem($size) solid $color;\n\t}\n\t@if $direction == bottom {\n\t\tborder: toRem($size2) solid transparent;\n\t\tborder-top: toRem($size) solid $color;\n\t}\n}\n\n// Grids\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\n\tdisplay: grid;\n\tgap: $gap;\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\n}\n\n// Адаптивна властивість (clamp)\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\n\t@if ($startSize==0) {\n\t\t$startSize: 0.000001;\n\t}\n\t@if ($minSize==0) {\n\t\t$minSize: 0.000001;\n\t}\n\n\t// Для calc();\n\t$addSize: math.div($startSize - $minSize, 16);\n\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\n\t\t$widthFrom: $maxWidth;\n\t}\n\n\t// Брейк-поїнти в EM\n\t$widthFromMedia: toEm($widthFrom);\n\t$widthToMedia: toEm($widthTo);\n\n\t// Формула плаваючого значення\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\n\t$yIntersection: -$widthTo * $slope + $minSize;\n\t@if ($yIntersection==0) {\n\t\t$yIntersection: 0.000001;\n\t}\n\t$flyValue: #{toRem($yIntersection)}\" + \" #{$slope * 100}vw;\n\n\t// Отримання значення властивості\n\t$propertyValue: #{\"clamp(\" toRem($minSize) \",\" $flyValue \",\" toRem($startSize) \")\"};\n\t// Якщо негативні значення\n\t@if ($minSize > $startSize) {\n\t\t$propertyValue: #{\"clamp(\" toRem($startSize) \",\" $flyValue \",\" toRem($minSize) \")\"};\n\t}\n\n\t// Встановлюємо значення за замовчуванням\n\t@if $keepSize != 1 and $keepSize != 3 {\n\t\t@media (min-width: $widthFromMedia) {\n\t\t\t#{$property}: toRem($startSize);\n\t\t}\n\t}\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\n\t\t// Якщо підтримується clamp();\n\t\t@supports (#{$property}: $propertyValue) {\n\t\t\t#{$property}: $propertyValue;\n\t\t}\n\t\t// Якщо не підтримується clamp();\n\t\t@supports not (#{$property}: $propertyValue) {\n\t\t\t#{$property}: calc(#{toRem($minSize)} + #{$addSize} * (100vw - #{toRem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\n\t\t}\n\t}\n\t@if $keepSize != 1 and $keepSize != 2 {\n\t\t@media (max-width: $widthToMedia) {\n\t\t\t#{$property}: toRem($minSize);\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/load-file.ts":
/*!*****************************!*\
  !*** ./src/js/load-file.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fileLoaderInit: () => (/* binding */ fileLoaderInit)
/* harmony export */ });
function fileLoaderInit() {
    var BYTES_IN_MB = 1048576;
    var form = document.getElementById('uploadForm');
    var fileInput = document.getElementById('uploadForm_File');
    var sizeText = document.getElementById('uploadForm_Size');
    var statusText = document.getElementById('uploadForm_Status');
    var progressBar = document.getElementById('progressBar');
    fileInput.addEventListener('change', function () {
        var file = this.files[0];
        if (file.size > 5 * BYTES_IN_MB) {
            alert('Принимается файл до 5 МБ');
            this.value = null;
        }
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var fileToUpload = fileInput.files[0];
        var formSent = new FormData();
        var xhr = new XMLHttpRequest();
        if (fileInput.files.length > 0) {
            formSent.append('uploadForm_File', fileToUpload);
            xhr.upload.addEventListener('progress', progressHandler, false);
            xhr.addEventListener('load', loadHandler, false);
            xhr.open('POST', 'upload_processing.php');
            xhr.send(formSent);
        }
        else {
            alert('Сначала выберите файл');
        }
        return false;
    });
    function progressHandler(event) {
        var loadedMb = (event.loaded / BYTES_IN_MB).toFixed(1);
        var totalSizeMb = (event.total / BYTES_IN_MB).toFixed(1);
        var percentLoaded = Math.round((event.loaded / event.total) * 100);
        progressBar.value = String(percentLoaded);
        sizeText.textContent = "".concat(loadedMb, " \u0438\u0437 ").concat(totalSizeMb, " \u041C\u0411");
        statusText.textContent = "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E ".concat(percentLoaded, "% | ");
    }
    function loadHandler(event) {
        var target = event.target;
        if (target.status != 200) {
            alert("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(target.status, ": ").concat(target.statusText));
        }
        else {
            statusText.textContent = event.target.responseText;
            progressBar.value = String(0);
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scss_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scss/style */ "./src/scss/style.scss");
/* harmony import */ var _js_load_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/load-file */ "./src/js/load-file.ts");


document.addEventListener('DOMContentLoaded', function () {
    (0,_js_load_file__WEBPACK_IMPORTED_MODULE_1__.fileLoaderInit)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YThmZjZmMDQ3OTE1YTRmNTdlZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHVIQUF1SCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUMzTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwUEFBMFAsTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sUUFBUSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFFBQVEsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyw2Q0FBNkMsZ0ZBQWdGLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLDBCQUEwQiw2QkFBNkIs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O1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQzRCO0FBQ2hEO0FBQ0EsSUFBSSw2REFBYztBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz8yZTRkIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvLi9zcmMvanMvbG9hZC1maWxlLnRzIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWNvbmZpZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1jb25maWcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stY29uZmlnLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4uZGVtby13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm0tdXBsb2FkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiA4MHB4IDQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM0LCAxMDYsIDIzMCwgMC4zMTc2NDcwNTg4KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmZvcm0tdXBsb2FkX19sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLXVwbG9hZF9fdGl0bGUge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5mb3JtLXVwbG9hZF9faW5wdXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4uZm9ybS11cGxvYWRfX2lucHV0OjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTkwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3VwbG9hZEZvcm1fRmlsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3VwbG9hZEZvcm1fRmlsZSxcbi5mb3JtLXVwbG9hZF9fc3VibWl0LFxucHJvZ3Jlc3MsXG4uZm9ybS11cGxvYWRfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAzNjBweDtcbn1cblxuLmZvcm0tdXBsb2FkX19zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyO1xufVxuXG4uZm9ybS11cGxvYWRfX3N1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcbn1cblxuLmZvcm0tdXBsb2FkX19zdWJtaXQ6Zm9jdXMtdmlzaWJsZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLXVwbG9hZF9fc3VibWl0OmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0tdXBsb2FkX19zdWJtaXRfcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M1NkZGRjtcbn1cblxucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5YWNjO1xufVxuXG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDlhY2M7XG59XG5cbnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzBjNjtcbn1cblxucHJvZ3Jlc3M6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzMGM2O1xufVxuXG4uZm9ybS11cGxvYWRfX2NvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcm0tdXBsb2FkX19zdGF0dXM6ZW1wdHk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi0J3QtSDQt9Cw0LPRgNGD0LbQtdC90L5cIjtcbn1cblxuLmZvcm0tdXBsb2FkX19zdGF0dXM6ZW1wdHkgKyBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogI2Y0NmVlNDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiB0b1JlbSgxNik7XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYnV0dG9uLFxuc2VsZWN0LFxub3B0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbnN1bW1hcnkge1xuICBsaXN0LXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbnN1bW1hcnk6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3OS4zNzVlbSkge1xuICAuX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3OS4zNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMTYzMTU3ODk0N3JlbSAgKyAgMS42ODQyMTA1MjYzdncgLCAyLjVyZW0gKSkge1xuICAgIC5fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4xNjMxNTc4OTQ3cmVtICArICAxLjY4NDIxMDUyNjN2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjE2MzE1Nzg5NDdyZW0gICsgIDEuNjg0MjEwNTI2M3Z3ICwgMi41cmVtICkpIHtcbiAgICAuX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAxICogKDEwMHZ3IC0gMjByZW0pIC8gNTkuMzc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi5sb2NrIGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG59XG4ud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5Ac3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XG4gIC53cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgfVxufVxuLndyYXBwZXIgPiBtYWluIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ud3JhcHBlciA+ICoge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA3OS4zNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZpbGUtbG9hZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL2NvbW1vbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBREdGOztBQ0RBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QURJRjs7QUNEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRElGOztBQ0RBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURJRjs7QUNEQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FESUY7O0FDREE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRElGOztBQ0RBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FESUY7O0FDREE7Ozs7RUFJRSxZQUFBO0FESUY7O0FDREE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBRElGOztBQ0RBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7QURJRjs7QUNEQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRElGOztBQ0RBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FESUY7O0FDREE7RUFDRSx5QkFBQTtBRElGOztBQ0RBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURJRjs7QUNEQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBRElGOztBQ0RBO0VBQ0UseUJBQUE7QURJRjs7QUNEQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBRElGOztBQ0RBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FESUY7O0FDREE7RUFDRSx1QkFBQTtBRElGOztBQ0RBO0VBQ0UsYUFBQTtBRElGOztBRS9IQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRmtJRjs7QUVoSUE7OztFQUdFLHNCQUFBO0FGbUlGOztBRWpJQTs7RUFFRSxxQkFBQTtBRm9JRjs7QUUxSEE7O0VBRUUsWUFBQTtFQUNBLGdCQUFBO0FGNkhGOztBRTNIQTtFQUNFLGNGbkJVO0VFb0JWLGNBQUE7RUFDQSxzQkZ6Qlc7RUUwQlgsb0JGekJTO0VFMkJULDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUY2SEY7O0FFM0hBOzs7RUFHRSxzQkZyQ1c7RUVzQ1gsa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBRjhIRjs7QUUzSEE7O0VBRUUsV0FBQTtBRjhIRjs7QUUzSEE7RUFDRSxxQkFBQTtBRjhIRjs7QUUzSEE7OztFQUdFLGVBQUE7QUY4SEY7O0FFNUhBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUYrSEY7O0FFN0hBO0VBQ0UsZ0JBQUE7QUZnSUY7O0FFOUhBO0VBQ0UsbUJBQUE7QUZpSUY7O0FFL0hBOzs7Ozs7RUFNRSxvQkFBQTtFQUNBLGtCQUFBO0FGa0lGOztBRWhJQTtFQUNFLDJCQUFBO0FGbUlGOztBRWpJQTtFQUNFLGFBQUE7QUZvSUY7O0FHM05BO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FINk5GO0FJckhFO0VENUdGO0lDNkdHLGlCQUFBO0VKd0hEO0FBQ0Y7QUlySEM7RUFFQztJRG5IRjtNQ29IRyx3RUFoQmM7SUp1SWI7RUFDRjtFSXJIQTtJRHZIRjtNQ3dIRyxzREFBQTtJSndIQztFQUNGO0FBQ0Y7QUl0SEU7RUQ1SEY7SUM2SEcsaUJBQUE7RUp5SEQ7QUFDRjs7QUFqTUM7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFvTUY7QUE3TEE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBK0xEO0FBOUxDO0VBTEQ7SUFNRSxjQUFBO0VBaU1BO0FBQ0Y7QUEvTEM7RUFDQyxjQUFBO0FBaU1GO0FBOUxDO0VBQ0MsWUFBQTtBQWdNRjs7QUF4TEM7RUFFRSxvQkFBQTtFQUNBLGNBQUE7RUFJQyxvQkFBQTtBQXVMSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbkBpbXBvcnQgJ2ZpbGUtbG9hZGVyJztcXG5cXG4kZm9udEZhbWlseTogXFxcIlBvcHBpbnNcXFwiO1xcbiRmb250U2l6ZTogdG9SZW0oMTYpOyAvLyDQtNC1IDE0KHB4KSAtINGA0L7Qt9C80ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDQtyDQvNCw0LrQtdGC0YNcXG5cXG4vLyDQntGB0L3QvtCy0L3Ri9C1INGG0LLQtdGC0LBcXG4kbWFpbkNvbG9yOiAjZjQ2ZWU0OyBcXG4kYWNjZW50Q29sb3I6ICNkZDIwYWI7IFxcbiRncmF5Q29sb3I6ICM4OTg5ODk7XFxuJG9yYW5nZUNvbG9yOiAjRTg5RjcxO1xcbiRkYXJrR3JheUNvbG9yOiAjNjE2MTYxO1xcbiRiZ0NvbG9yOiAjZjljOWY0O1xcblxcbi8vINCQ0LTQsNC/0YLQuNCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFxuLy8g0JzQuNC90LjQvNCw0LvRjNC90LDRjyDRiNC40YDQuNC90LBcXG4kbWluV2lkdGg6IDMyMDtcXG4vLyDQqNC40YDQuNC90LAg0LzQsNC60LXRgtCwXFxuJG1heFdpZHRoOiAxNDQwO1xcbi8vINCo0LjRgNC40L3QsCDQvtCz0YAg0LrQvtC90YLQtdC50L3QtdGA0LBcXG4kbWF4V2lkdGhDb250YWluZXI6IDEyNDA7XFxuLy8g0J7QkdGJ0LjQuSDQvtGC0YHRgtGD0L8g0YMg0LrQvtC90YLQtdC50L3QtdGA0LBcXG4vLyAoMzAgPSDQv9C+IDE1cHgg0YHQu9C10LLQsCDQuCDRgdC/0YDQsNCy0LAsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcblxcbi8vINCo0LjRgNC40L3QsCDRgdGA0LDQsdCw0YLRi9Cy0LDQvdC40Y8g0L/QtdGA0LLQvtCz0L4g0LHRgNC10LrQv9C+0LnQvdGC0LBcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcblxcbi8vINCR0YDQtdC50Lot0L/QvtC40L3RglxcbiRwYzogdG9FbSgkY29udGFpbmVyV2lkdGgpOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LNC/0LvQsNC90YjQtdGC0Ysg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90LjQuFxcbiR0YWJsZXQ6IHRvRW0oOTkxLjk4KTsgLy8g0J/Qu9Cw0L3RiNC10YLRi1xcbiRtb2JpbGU6IHRvRW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3RiyBMXFxuJG1vYmlsZVNtYWxsOiB0b0VtKDQ3OS45OCk7IC8vINCi0LXQu9C10YTQvtC90YsgU1xcblxcbi8vINCi0LjQvyDQsNC00LDQv9GC0LjQstCwOlxcbi8vIDEgPSDQvtGC0LfRi9Cy0YfQuNCy0YvQuSAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdGCINCx0YDQtdC50LrQv9C+0LnQvdGC0L7QsiksXFxuLy8gMiA9INC/0L4g0LHRgNC10LnQutC/0L7QuNC90YLQsNC8XFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcblxcbi8vINCe0LHQvdGD0LvQtdC90L3QuNGPLCDQvNC40LrRgdC40L3Riywg0L7QsdGJ0LjQtSDRgdGC0LjQu9C4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5cXFwiO1xcbkBpbXBvcnQgXFxcImJhc2UvY29tbW9uXFxcIjtcXG5cXG4vLyAgdGFpbHdpbmQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBAaW1wb3J0IFxcXCJsaWJzL3RhaWx3aW5kXFxcIjtcXG5cXG4vLyDQodGC0LjQu9C4INGC0LXQs9CwIEJPRFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5ib2R5IHtcXG5cXHQvLyBzY3JvbGxiYXItZ3V0dGVyOiBzdGFibGU7XFxuXFx0Ly8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC40YDQvtCy0LDQvVxcblxcdC5sb2NrICYge1xcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0XFx0dG91Y2gtYWN0aW9uOiBub25lO1xcblxcdFxcdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XFxuXFx0fVxcblxcdC8vINCh0LDQudGCINC30LDQs9GA0YPQttC10L3QvdGL0LlcXG5cXHQubG9hZGVkICYge1xcblxcdH1cXG59XFxuLy8g0J7QsdC+0LvRh9C60LAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4ud3JhcHBlciB7XFxuXFx0bWluLWhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxuXFx0fVxcblxcdC8vINCf0YDQuNC20LjQvNCw0LXQvCBmb290ZXJcXG5cXHQ+IG1haW4ge1xcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcblxcdH1cXG5cXHQvLyDQpNC40LrRgSDQtNC70Y8g0YHQu9Cw0LnQtNC10YDRltCyXFxuXFx0PiAqIHtcXG5cXHRcXHRtaW4td2lkdGg6IDA7XFxuXFx0fVxcbn1cXG4vLyDQntCz0YDQsNC90LjRh9C40LLQsNGO0YnQuNC5INC60L7QvdGC0LXQudC90LXRgCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFxuXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXG5cXHQvLyDQntGC0LfRi9Cy0YfQuNCy0YvQuVxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKCRjb250YWluZXJXaWR0aCk7XFxuXFx0XFx0XFx0bWFyZ2luOiAwIGF1dG87XFxuXFx0XFx0fVxcblxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcblxcdFxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxuXFx0XFx0XFx0fSBAZWxzZSB7XFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn0gQGVsc2Uge1xcblxcdC8vINCR0YDQtdC50Lot0L/QuNC90YLRi1xcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKCRjb250YWluZXJXaWR0aCk7XFxuXFx0XFx0fSBAZWxzZSB7XFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCB0b1JlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oOTcwKTtcXG5cXHRcXHR9XFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKDc1MCk7XFxuXFx0XFx0fVxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxuXFx0XFx0XFx0bWF4LXdpZHRoOiBub25lO1xcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVwiLFwiLmRlbW8td3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvcm0tdXBsb2FkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogODBweCA0MHB4O1xcbiAgYmFja2dyb3VuZDogI2VhNmFlNjUxO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmZvcm0tdXBsb2FkX19sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tdXBsb2FkX190aXRsZSB7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uZm9ybS11cGxvYWRfX2lucHV0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLmZvcm0tdXBsb2FkX19pbnB1dDo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xcbiAgbWluLXdpZHRoOiAxOTBweDtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDlweCAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3VwbG9hZEZvcm1fRmlsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdXBsb2FkRm9ybV9GaWxlLFxcbi5mb3JtLXVwbG9hZF9fc3VibWl0LFxcbnByb2dyZXNzLFxcbi5mb3JtLXVwbG9hZF9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzNjBweDtcXG59XFxuXFxuLmZvcm0tdXBsb2FkX19zdWJtaXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgcGFkZGluZzogOXB4IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLmZvcm0tdXBsb2FkX19zdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5mb3JtLXVwbG9hZF9fc3VibWl0OmZvY3VzLXZpc2libGUge1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtLXVwbG9hZF9fc3VibWl0OmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybS11cGxvYWRfX3N1Ym1pdF9wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M1NkZGRjtcXG59XFxuXFxucHJvZ3Jlc3Mge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDlhY2M7XFxufVxcblxcbnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA5YWNjO1xcbn1cXG5cXG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzMGM2O1xcbn1cXG5cXG5wcm9ncmVzczo6LW1vei1wcm9ncmVzcy1iYXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMzBjNjtcXG59XFxuXFxuLmZvcm0tdXBsb2FkX19jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmZvcm0tdXBsb2FkX19zdGF0dXM6ZW1wdHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi0J3QtSDQt9Cw0LPRgNGD0LbQtdC90L5cXFwiO1xcbn1cXG5cXG4uZm9ybS11cGxvYWRfX3N0YXR1czplbXB0eSArIHNwYW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCIqIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbjpmb2N1cyxcXG46YWN0aXZlIHtcXG4gIC8vIG91dGxpbmU6IG5vbmU7XFxufVxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcbiAgLy8gb3V0bGluZTogbm9uZTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxufVxcbmJvZHkge1xcbiAgY29sb3I6ICRtYWluQ29sb3I7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xcbiAgLy90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmJ1dHRvbixcXG5zZWxlY3QsXFxub3B0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxudWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5zdW1tYXJ5IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixcIi5fdGl0bGUge1xcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgNDAsIDI0KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMTIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxuXFx0QGZvbnQtZmFjZSB7XFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcblxcdFxcdHNyYzpcXG5cXHRcXHRcXHR1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuXFx0XFx0XFx0dXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG5cXHRcXHRmb250LXdlaWdodDogI3skd2VpZ2h0fTtcXG5cXHRcXHRmb250LXN0eWxlOiAjeyRzdHlsZX07XFxuXFx0fVxcbn1cXG4vL1BlcmNlbnRcXG5AZnVuY3Rpb24gcGVyY2VudCgkcHgsICRmcm9tOiAxMDApIHtcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxuXFx0QHJldHVybiAkcmVzdWx0O1xcbn1cXG4vL1JFTVxcbkBmdW5jdGlvbiB0b1JlbSgkcHgsICRjdXJyZW50OiAxNikge1xcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgcmVtO1xcblxcdEByZXR1cm4gJHJlc3VsdDtcXG59XFxuQGZ1bmN0aW9uIHJlbSgkcHgsICRjdXJyZW50OiAxNikge1xcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgcmVtO1xcblxcdEByZXR1cm4gJHJlc3VsdDtcXG59XFxuLy9FTVxcbkBmdW5jdGlvbiB0b0VtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxufVxcbkBmdW5jdGlvbiBlbSgkcHgsICRjdXJyZW50OiAxNikge1xcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgZW07XFxuXFx0QHJldHVybiAkcmVzdWx0O1xcbn1cXG5cXG4vL0N1cnJlbmN5XFxuQG1peGluIGN1cnJlbmN5KCRzeW0pIHtcXG5cXHQmOjphZnRlciB7XFxuXFx0XFx0Y29udGVudDogXFxcIiN7JHN5bX1cXFwiO1xcblxcdH1cXG59XFxuXFxuLy8g0KLRgNC40LrRg9GC0L3QuNC6XFxuQG1peGluIHRyaWFuZ2xlKCRkaXJlY3Rpb24sICRjb2xvciwgJHNpemUsICRzaXplMjogJHNpemUpIHtcXG5cXHRAaWYgJGRpcmVjdGlvbiA9PSBsZWZ0IHtcXG5cXHRcXHRib3JkZXI6IHRvUmVtKCRzaXplMikgc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiB0b1JlbSgkc2l6ZSkgc29saWQgJGNvbG9yO1xcblxcdH1cXG5cXHRAaWYgJGRpcmVjdGlvbiA9PSByaWdodCB7XFxuXFx0XFx0Ym9yZGVyOiB0b1JlbSgkc2l6ZTIpIHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdFxcdGJvcmRlci1sZWZ0OiB0b1JlbSgkc2l6ZSkgc29saWQgJGNvbG9yO1xcblxcdH1cXG5cXHRAaWYgJGRpcmVjdGlvbiA9PSB0b3Age1xcblxcdFxcdGJvcmRlcjogdG9SZW0oJHNpemUyKSBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRcXHRib3JkZXItYm90dG9tOiB0b1JlbSgkc2l6ZSkgc29saWQgJGNvbG9yO1xcblxcdH1cXG5cXHRAaWYgJGRpcmVjdGlvbiA9PSBib3R0b20ge1xcblxcdFxcdGJvcmRlcjogdG9SZW0oJHNpemUyKSBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRcXHRib3JkZXItdG9wOiB0b1JlbSgkc2l6ZSkgc29saWQgJGNvbG9yO1xcblxcdH1cXG59XFxuXFxuLy8gR3JpZHNcXG5AbWl4aW4gZ3JpZENhcmRzKCR0eXBlOiBmaXQsICRtaW46IDI4MHB4LCAkbWF4OiAxZnIsICRnYXA6IDMwcHgpIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdhcDogJGdhcDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLSN7JHR5cGV9LCBtaW5tYXgoJG1pbiwgJG1heCkpO1xcbn1cXG5cXG4vLyDQkNC00LDQv9GC0LjQstC90LAg0LLQu9Cw0YHRgtC40LLRltGB0YLRjCAoY2xhbXApXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJGtlZXBTaXplOiAwLCAkd2lkdGhGcm9tOiAkY29udGFpbmVyV2lkdGgsICR3aWR0aFRvOiAkbWluV2lkdGgpIHtcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXG5cXHR9XFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXG5cXHR9XFxuXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxuXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxuXFx0fVxcblxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4INCyIEVNXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiB0b0VtKCR3aWR0aEZyb20pO1xcblxcdCR3aWR0aFRvTWVkaWE6IHRvRW0oJHdpZHRoVG8pO1xcblxcblxcdC8vINCk0L7RgNC80YPQu9CwINC/0LvQsNCy0LDRjtGH0L7Qs9C+INC30L3QsNGH0LXQvdC90Y9cXG5cXHQvLyDQmNGB0YLQvtGH0L3QuNC6OiBodHRwczovL2Nzcy10cmlja3MuY29tL2xpbmVhcmx5LXNjYWxlLWZvbnQtc2l6ZS13aXRoLWNzcy1jbGFtcC1iYXNlZC1vbi10aGUtdmlld3BvcnQvXFxuXFx0JHNsb3BlOiBtYXRoLmRpdigoJHN0YXJ0U2l6ZSAtICRtaW5TaXplKSwgKCR3aWR0aEZyb20gLSAkd2lkdGhUbykpO1xcblxcdCR5SW50ZXJzZWN0aW9uOiAtJHdpZHRoVG8gKiAkc2xvcGUgKyAkbWluU2l6ZTtcXG5cXHRAaWYgKCR5SW50ZXJzZWN0aW9uPT0wKSB7XFxuXFx0XFx0JHlJbnRlcnNlY3Rpb246IDAuMDAwMDAxO1xcblxcdH1cXG5cXHQkZmx5VmFsdWU6ICN7dG9SZW0oJHlJbnRlcnNlY3Rpb24pfVxcXCIgKyBcXFwiICN7JHNsb3BlICogMTAwfXZ3O1xcblxcblxcdC8vINCe0YLRgNC40LzQsNC90L3RjyDQt9C90LDRh9C10L3QvdGPINCy0LvQsNGB0YLQuNCy0L7RgdGC0ZZcXG5cXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiB0b1JlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgdG9SZW0oJHN0YXJ0U2l6ZSkgXFxcIilcXFwifTtcXG5cXHQvLyDQr9C60YnQviDQvdC10LPQsNGC0LjQstC90ZYg0LfQvdCw0YfQtdC90L3Rj1xcblxcdEBpZiAoJG1pblNpemUgPiAkc3RhcnRTaXplKSB7XFxuXFx0XFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgdG9SZW0oJHN0YXJ0U2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgdG9SZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxuXFx0fVxcblxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiB0b1JlbSgkc3RhcnRTaXplKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdC8vINCQ0LTQsNC/0YLRg9GU0LzQviDRgNC+0LfQvNGW0YAg0YMg0L/RgNC+0LzRltC20LrRgyDQvNGW0LYg0LfQsNC30L3QsNGH0LXQvdC40LzQuCDRiNC40YDQuNC90LDQvNC4INCyJ9GO0L/QvtGA0YLRg1xcblxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhUb01lZGlhKSBhbmQgKG1heC13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXG5cXHRcXHRAc3VwcG9ydHMgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlO1xcblxcdFxcdH1cXG5cXHRcXHQvLyDQr9C60YnQviDQvdC1INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxuXFx0XFx0QHN1cHBvcnRzIG5vdCAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogY2FsYygje3RvUmVtKCRtaW5TaXplKX0gKyAjeyRhZGRTaXplfSAqICgxMDB2dyAtICN7dG9SZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiB0b1JlbSgkbWluU2l6ZSk7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZmlsZUxvYWRlckluaXQoKSB7XG4gICAgdmFyIEJZVEVTX0lOX01CID0gMTA0ODU3NjtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWRGb3JtJyk7XG4gICAgdmFyIGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWRGb3JtX0ZpbGUnKTtcbiAgICB2YXIgc2l6ZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkRm9ybV9TaXplJyk7XG4gICAgdmFyIHN0YXR1c1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkRm9ybV9TdGF0dXMnKTtcbiAgICB2YXIgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NCYXInKTtcbiAgICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZXNbMF07XG4gICAgICAgIGlmIChmaWxlLnNpemUgPiA1ICogQllURVNfSU5fTUIpIHtcbiAgICAgICAgICAgIGFsZXJ0KCfQn9GA0LjQvdC40LzQsNC10YLRgdGPINGE0LDQudC7INC00L4gNSDQnNCRJyk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBmaWxlVG9VcGxvYWQgPSBmaWxlSW5wdXQuZmlsZXNbMF07XG4gICAgICAgIHZhciBmb3JtU2VudCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGlmIChmaWxlSW5wdXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9ybVNlbnQuYXBwZW5kKCd1cGxvYWRGb3JtX0ZpbGUnLCBmaWxlVG9VcGxvYWQpO1xuICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIHByb2dyZXNzSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsb2FkSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCAndXBsb2FkX3Byb2Nlc3NpbmcucGhwJyk7XG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtU2VudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgn0KHQvdCw0YfQsNC70LAg0LLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBwcm9ncmVzc0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdmFyIGxvYWRlZE1iID0gKGV2ZW50LmxvYWRlZCAvIEJZVEVTX0lOX01CKS50b0ZpeGVkKDEpO1xuICAgICAgICB2YXIgdG90YWxTaXplTWIgPSAoZXZlbnQudG90YWwgLyBCWVRFU19JTl9NQikudG9GaXhlZCgxKTtcbiAgICAgICAgdmFyIHBlcmNlbnRMb2FkZWQgPSBNYXRoLnJvdW5kKChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDApO1xuICAgICAgICBwcm9ncmVzc0Jhci52YWx1ZSA9IFN0cmluZyhwZXJjZW50TG9hZGVkKTtcbiAgICAgICAgc2l6ZVRleHQudGV4dENvbnRlbnQgPSBcIlwiLmNvbmNhdChsb2FkZWRNYiwgXCIgXFx1MDQzOFxcdTA0MzcgXCIpLmNvbmNhdCh0b3RhbFNpemVNYiwgXCIgXFx1MDQxQ1xcdTA0MTFcIik7XG4gICAgICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzNlxcdTA0MzVcXHUwNDNEXFx1MDQzRSBcIi5jb25jYXQocGVyY2VudExvYWRlZCwgXCIlIHwgXCIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkSGFuZGxlcihldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0LnN0YXR1cyAhPSAyMDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiXFx1MDQxRVxcdTA0NDhcXHUwNDM4XFx1MDQzMVxcdTA0M0FcXHUwNDMwIFwiLmNvbmNhdCh0YXJnZXQuc3RhdHVzLCBcIjogXCIpLmNvbmNhdCh0YXJnZXQuc3RhdHVzVGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICBwcm9ncmVzc0Jhci52YWx1ZSA9IFN0cmluZygwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnc2Nzcy9zdHlsZSc7XG5pbXBvcnQgeyBmaWxlTG9hZGVySW5pdCB9IGZyb20gJy4vanMvbG9hZC1maWxlJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZmlsZUxvYWRlckluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9