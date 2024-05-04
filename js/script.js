let createBtn = document.querySelector('.append_click');

createBtn.addEventListener('click', function () {
  let input = document.querySelector('#inputli');

  let ulList = document.querySelector('.ul_box');

  let inputvalue = input.value.trim();

  if (inputvalue !== '') {
    // create box [<
    let liList = document.createElement('li');

    let lidiv = document.createElement('div');

    let lispan = document.createElement('p');
    lispan.textContent = inputvalue;

    let imgdiv = document.createElement('div');

    let done_btn = document.createElement('button');

    let Image = document.createElement('Img');

    let imgdivR = document.createElement('div');

    let remove_btn = document.createElement('button');

    let Image_2 = document.createElement('Img');

    // create box >]

    // append li list [<

    ulList.appendChild(liList);

    liList.classList.add('li_style');

    // append li list >]

    //append span in li list [<

    lidiv.appendChild(lispan);

    liList.appendChild(lidiv);

    lidiv.classList.add('span_size');

    //append span in li list >]

    //append li list done_btn [<

    liList.appendChild(done_btn);

    Image.src = './img/default_arrow.svg';

    done_btn.appendChild(imgdiv);

    imgdiv.appendChild(Image);

    done_btn.classList.add('done_btn');

    done_btn.addEventListener('click', function () {
      let pelemetn = liList.firstElementChild.querySelector('p');

      pelemetn.classList.toggle('li_style_done');
    });

    //append li list done_btn >]

    //append li list remove_btn [<

    liList.appendChild(remove_btn);

    Image_2.src = './img/TrashSimple.svg';

    remove_btn.appendChild(imgdivR);

    imgdivR.appendChild(Image_2);

    remove_btn.classList.add('remove_btn');

    remove_btn.addEventListener('click', function (event) {
      let li = event.currentTarget.parentElement;
      console.log(li);

      li.remove();
    });

    //append li list remove_btn >]
  }

  input.value = '';
});

// default_arrow.svg
