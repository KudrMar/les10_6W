import { useState } from 'react';
import ClockItem from './ClockItem';
import InputForm from './InputForm';

export default function WatchList() {
   const [clocks, setClocks] = useState([]);

  const handleSbmit = (addClocks) => {
    setClocks((prevClocks) => ([...prevClocks, addClocks]));
  };

  const handleClose = (id) => {
    setClocks((prevClocks) => (prevClocks.filter((item) => item.id !== id)));
  };

  return (
    <>
      <InputForm onFormSubmit={handleSbmit} /> 
      <div className='clockList'>
        {clocks.map((item) => (
          <ClockItem key={item.id} clocksSetup={item} onClose={handleClose} />
        ))}
      </div>
    </>
  );
}