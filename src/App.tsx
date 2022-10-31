import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const generateArray = (items: number) => [...Array.from(Array(items).keys())];

const App = () => {
  return (
    <div>
      <h1><span>Lazy Loading Images</span> 🖼️</h1>

      <div className="container-images">
        {
          generateArray(20).map(i => (
            <LazyLoadImage
              key={i}
              src={`https://picsum.photos/id/${i}/700`}
              alt={`Image Alt-${i}`}
              className="img-lazy"
              width={1200} height={600}
              effect='blur'
            />
          ))
        }
      </div>
    </div>
  )
}
export default App