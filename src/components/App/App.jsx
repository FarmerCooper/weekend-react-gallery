import {useState, useEffect} from 'react';
import "./App.css";
import axios from 'axios';

import GalleryList from '../GalleryList/GalleryList';

function App() {

  //Will hold the array of objects
  let [galleryList, setGalleryList] = useState([]);

  // runs when the component is first put on the DOM
  useEffect(() => {
    getGalleryList();
  }, [])

  const getGalleryList = () => {
    axios
      .get('/gallery')
      .then((response) => {
        console.log('This is what we get', response.data)
        // array of inventory objects saved to state array
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert(`Could not get gallery list: ${error}`);
        console.log('This is the error: ', error);
      })
  }

  const updateItem = (id) => {
    axios
      .put(`gallery/like/${id}`)
      .then(response => getGalleryList())
      .catch((error) => {
        console.log('Error in PUTting item', error);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <div>
        <GalleryList 
        galleryList = {galleryList}
        updateItem = {updateItem}
        />
      </div>
    </div>
  );
}

export default App;
