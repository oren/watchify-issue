document.addEventListener('load', function() {
  var $$ = document.querySelectorAll.bind(document);

  unwrapImages();

  function unwrapImages () {
    var divs = $$('#defered-images img[data-src]');
    // borrowing forEach from Array since divs is not an array
    [].forEach.call(divs, unwrap);
  }

  function unwrap (img) {
    console.log('img', img);
    img.src = img.getAttribute('data-src');
    img.removeAttribute('data-src');
  }
});

