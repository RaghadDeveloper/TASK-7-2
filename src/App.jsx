import React, { useState , useEffect} from 'react';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [isVisible,setVisibility] = useState(false)
  const [pop, setPop] = useState(false)
  const [background1, setBackground1] = useState(false)
  const [background2, setBackground2] = useState(false)
  const [background3, setBackground3] = useState(false)
  

  // const increase = () => {
  //   if (count < 10) {
  //     setCount(count + 1);
  //   }
  //   else if(count < 100) {
  //     setCount(count+10);
  //   }
  //   else if(count < 1000) {
  //     setCount(count+100);
  //   }
  // }

  // const decrease = () => {
  //   if (count > 100) {
  //     setCount(count - 100);
  //   }
  //   else if (count > 10) {
  //     setCount(count-10);
  //   }
  //   else if (count > 0) {
  //     setCount(count - 1);
  //   }
  // }

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);  // Update state when the window is loaded
    };

    // Add event listener for the load event
    window.addEventListener('load', handleLoad);

    // Cleanup: remove event listener when the component unmounts
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    // Show alert when isLoaded is true
    if (isLoaded) {
      alert('Window loaded!');
    }
  }, [isLoaded]);  // This effect runs when `isLoaded` state changes


  const updateValue = (action) => {
    switch (action) {
      case 'increase':
        if (count < 10) {
          if(count == 9){
            setPop(true)
            setBackground1(true)
          }
          setCount(count + 1);
        }
        else if(count <100) {
          setPop(false)
          if(count == 90){
            setPop(true)
            setBackground1(false)
            setBackground2(true)
          }
          setCount(count+10);
        }
        else if(count <1000) {
          setPop(false)
          if(count == 900){
            setPop(true)
            setVisibility(true)
            setBackground2(false)
            setBackground3(true)
          }
          setCount(count+100);
        }
        break;

      case 'decrease':
        if (count > 100) {
          if(count==200){
            setPop(true)
            setBackground3(false)
            setBackground2(true)
          }else{
            setPop(false)
          }
          setCount(count - 100);
        }
        else if (count >10){
          if(count == 20){
            setPop(true);
            setBackground2(false)
            setBackground1(true)
          }else{
            setPop(false)
          }
          setCount(count-10);
        }
        else if (count>0){
          if(count == 1){
            setVisibility(false)
            setBackground1(false)
          }
          setPop(false)
          setCount(count - 1);
        }
        
        break;
      default:
        break;
    }
  };

  let heroClass = 'hero';
  if (background1) {
    heroClass += ' bg1';
  } else if (background2) {
    heroClass += ' bg2';
  } else if (background3) {
    heroClass += ' bg3';
  }
  
  return (
    // <div className= {count>100?'hero bg1' : count>10 ? 'hero bg2' :'hero bg3'}>
    <div className= {heroClass}>
      <p className='result'>Count: {count}</p>
      <div className='buttons'>
        <button onClick={() => updateValue('increase')}>Increase</button>
        {isVisible && <button onClick={() => updateValue('decrease')}>decrease</button>}
      </div>
      {
        pop && 
        <div className='pop'>
          <p>count = {count}</p>
        </div>
      }
    

    </div>
  );
};

export default App;