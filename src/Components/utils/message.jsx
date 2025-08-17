import React, { useEffect, useState } from "react";
import "../styles/message.css";

const Message= ({ message, type = "info", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Délai supplémentaire pour l'animation de sortie
      setTimeout(() => {
        onClose();
      }, 300);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${type} ${!isVisible ? 'slide-out' : ''}`}>
      {message}
    </div>
  );
};

export default Message;