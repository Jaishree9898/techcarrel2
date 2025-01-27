let addPhoto = document.getElementById('addPhotoButton');

addPhoto.addEventListener('click', (e) => {

  let gallery = document.getElementById('gallery');
  let photoInput = document.getElementById('photoURL');
  let photoURL = photoInput.value;


  let span = document.createElement('span');
  let createSpan = gallery.appendChild(span);

  createSpan.innerHTML = `<img src='${photoURL}'>`;
  createSpan.classList.add("photo")


  photoInput.value = "";


  let btn1 = document.createElement('button');
  let btn2 = document.createElement('button');

  btn1.innerText = 'Enlarge';
  btn2.innerText = 'Delete';

  createSpan.appendChild(btn1);
  createSpan.appendChild(btn2);


  btn1.addEventListener('click', (e) => {
    createSpan.classList.add("enlarge");
  })

  let image = createSpan.querySelector('img');
  image.addEventListener('dblclick', (e) => {
    createSpan.classList.remove("enlarge");
  });

  btn2.addEventListener('click', (e) => {
    createSpan.remove();
  })




});
