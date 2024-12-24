function show(type) {
      var images = document.querySelectorAll(".images img");
          for (var i = 0; i < images.length; i++) {
            if (type === 'all') {
        images[i].style.display = 'block';
      } 

            else if (type === 'cartoons') {
        if (images[i].id === 'CART') {
          images[i].style.display = 'block';
        }

         else {
          images[i].style.display = 'none';
        }
      }
       
            else if (type === 'movies') {
        if (images[i].id === 'MOV') {
          images[i].style.display = 'block';
        } else {
          images[i].style.display = 'none';
        }
      }
    }
  }
  