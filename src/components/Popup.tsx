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
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <h2>Oops! Something's not working...</h2>
            <p>We're sorry, but it seems that something isn't working correctly. Please try again later.</p>
            <button onClick={closePopup} style={buttonStyle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const popupStyle: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
};

const popupContentStyle: React.CSSProperties = {
  textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default Popup;
