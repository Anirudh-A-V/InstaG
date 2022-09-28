import React from 'react';
import Title from './comps/Title';
import Form from './comps/Form';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {

  const [selectedImg, setSelectedImg] = React.useState(null);

  return (
    <div className="App">
      <Title/>
      <Form />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg}/>}
    </div>
  );
}

export default App;
