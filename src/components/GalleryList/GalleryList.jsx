import GalleryItem from '../GalleryItem/GalleryItem';

function handleGalleryList({ galleryList }) {
  return (
    <>
        {galleryList.map((item) => (
          < GalleryItem
            key = {item.id}
            item = {item}
          />
        ))}
    </>
  );
}

export default handleGalleryList;