function handleGalleryItem({item}) {
  return (
    <>
      <div key={item.id}>
        <img src={item.path} />
        <button>love it!</button>
      </div>
    </>
  );
}

export default handleGalleryItem;
