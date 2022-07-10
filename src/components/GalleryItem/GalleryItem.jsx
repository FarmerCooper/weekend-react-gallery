function handleGalleryItem({item, updateItem}) {
  
    const likeItem = () => {
        updateItem(item.id)
    }
  
    return (
    <>
      <div key={item.id}>
        <img src={item.path} />
        <button onClick={likeItem}>love it!</button>
        <p>This item has {item.likes} likes</p>
      </div>
    </>
  );
}

export default handleGalleryItem;
