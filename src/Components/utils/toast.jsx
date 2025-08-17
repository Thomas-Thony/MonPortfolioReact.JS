import React, { useState } from 'react';

function ToastExample({message}) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div>
      {/*<button className="Bouton" onClick={handleClick}>Essayez moi !</button>*/}

      {showToast && (
        <div className='toast-container'>
          {message}
        </div>
      )}
    </div>
  );
}


export default ToastExample;