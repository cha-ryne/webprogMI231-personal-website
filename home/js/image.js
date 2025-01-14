new Vue({
    el: '#app',
    components: {
      VueGallerySlideshow
    },
    methods: {
      onClick(i) {
        this.index = i;
        this.showSlideshow = true;
      },
      closeSlideshow() {
        this.showSlideshow = false; // Hide the slideshow
      }
    },
    data: {
      images: [
        'https://preguides.com/images/3WEFh1H1DbUzbxDBYBRF1652927083.jpg',
        'https://preguides.com/images/3WEFh1H1DbUzbxDBYBRF1652927083.jpg',
        'https://preguides.com/images/3WEFh1H1DbUzbxDBYBRF1652927083.jpg',
        'https://preguides.com/images/3WEFh1H1DbUzbxDBYBRF1652927083.jpg',
        'https://preguides.com/images/3WEFh1H1DbUzbxDBYBRF1652927083.jpg',
        'https://placekitten.com/806/800',
        'https://placekitten.com/807/800',
        'https://placekitten.com/808/800',
        'https://placekitten.com/809/800',
        'https://placekitten.com/810/800',
      ],
      index: 0,
      showSlideshow: false
    }
  })