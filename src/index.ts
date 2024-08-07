import 'scss/style'
import { fileLoaderInit } from './js/load-file'
import { dropdownMenuInit } from './js/dropdown'
import { menuInit } from './js/menu'

document.addEventListener('DOMContentLoaded', function () {
  fileLoaderInit()
  dropdownMenuInit()
  menuInit()
})