import 'style.scss';

export function fileLoaderInit() {
  const BYTES_IN_MB = 1048576;

  const form = document.getElementById('uploadForm');
  const fileInput = document.getElementById('uploadForm_File') as HTMLInputElement;
  const sizeText = document.getElementById('uploadForm_Size');
  const statusText = document.getElementById('uploadForm_Status');
  const progressBar = document.getElementById('progressBar') as HTMLInputElement;

  fileInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file.size > 5 * BYTES_IN_MB) {
      alert('Принимается файл до 5 МБ');
      this.value = null;
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fileToUpload = fileInput.files[0];
    const formSent = new FormData();
    const xhr = new XMLHttpRequest();

    if (fileInput.files.length > 0) {
      formSent.append('uploadForm_File', fileToUpload);

      // собираем запрос и подписываемся на событие progress
      xhr.upload.addEventListener('progress', progressHandler, false);
      xhr.addEventListener('load', loadHandler, false);
      xhr.open('POST', 'upload_processing.php');
      xhr.send(formSent);
    } else {
      alert('Сначала выберите файл');
    }
    return false;
  });

  function progressHandler(event: ProgressEvent) {
    // считаем размер загруженного и процент от полного размера
    const loadedMb = (event.loaded / BYTES_IN_MB).toFixed(1);
    const totalSizeMb = (event.total / BYTES_IN_MB).toFixed(1);
    const percentLoaded = Math.round((event.loaded / event.total) * 100);

    progressBar.value = String(percentLoaded);
    sizeText.textContent = `${loadedMb} из ${totalSizeMb} МБ`;
    statusText.textContent = `Загружено ${percentLoaded}% | `;
  }

  function loadHandler(event: ProgressEvent<XMLHttpRequest>) {
    const target = event.target;
     if (target.status != 200) {
       // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
       alert(`Ошибка ${target.status}: ${target.statusText}`); // Например, 404: Not Found
     } else {
       statusText.textContent = event.target.responseText;
       progressBar.value = String(0);
     }
    
    
  }
}
