
const viewer = new Viewer(document.getElementById('image'), {
  inline: true,
  viewed() {
    viewer.zoomTo(1);
  },
});

const gallery = new Viewer(document.querySelector('.masonry-gallery'));
