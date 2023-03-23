import Cards from './components/Tariffs/Tariffs';
import data from './data.json';
import { useState } from 'react';
import CSSModules from 'react-css-modules';
import style from './App.module.scss';


function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  return (
    <div styleName="App">
      {data.map((card) => 
        <Cards 
          name={card.name} 
          price={card.price} 
          speed={card.speed} 
          color={card.color}
          id={card.id}
          setCount={setCount}
          isBoolean = {card.id == count ? true : false}
          />
      )}
    </div>
  );
}

export default CSSModules(App, style)
