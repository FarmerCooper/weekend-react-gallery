import GalleryItem from '../GalleryItem/GalleryItem';

function handleGalleryList({ galleryList, updateItem }) {
  return (
    <>
        {galleryList.map((item) => (
          < GalleryItem
            key = {item.id}
            item = {item}
            updateItem = {updateItem}
          />
        ))}
    </>
  );
}

export default handleGalleryList;