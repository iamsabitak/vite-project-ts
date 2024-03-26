import React, { useState } from 'react';

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={openPopup}>Open Popup</button>
      {isOpen && (
        <div>
          <div >
            <h2>Oops! Something's not working...</h2>
            <p>We're sorry, but it seems that something isn't working correctly. Please try again later.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}


export default Popup;
