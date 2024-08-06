import 'scss/style'
import { fileLoaderInit } from './js/load-file'
import { dropdownMenuInit } from './js/dropdown'

document.addEventListener('DOMContentLoaded', function () {
  fileLoaderInit()
  dropdownMenuInit()
})