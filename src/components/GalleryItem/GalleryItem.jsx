import {useState} from 'react';

function handleGalleryItem({item, updateItem}) {
  
    let [state, setState] = useState(false)

    const likeItem = () => {
        updateItem(item.id)
    }

    const showDesc = () => {
        console.log('picture clicked')
        setState(true)
    }
  
    console.log(state);
    return (
    <>
      <div key={item.id}>
        {state ? `${item.description}`: <img onClick = {showDesc} src={item.path} />}
        <button onClick={likeItem}>love it!</button>
        <p>This item has {item.likes} likes</p>
      </div>
    </>
  );
}

export default handleGalleryItem;
