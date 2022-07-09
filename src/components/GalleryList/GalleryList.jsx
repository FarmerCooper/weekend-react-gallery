// import GalleryItem from '../GalleryItem/GalleryItem';

function handleGalleryList({ galleryList }) {
  return (
    <>
        {galleryList.map((item) => (
          <div key={item.id}>
            <img src = {item.path} />
          </div>  
        ))}
    </>
  );
}

export default handleGalleryList;