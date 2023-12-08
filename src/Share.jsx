import React from 'react';

const ShareButton = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Xplo events',
          text: 'Find out your best events',
          url: 'https://www.xplolive.com/',
          
        });
      } else {
        alert('Web Share API not supported in your browser');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <button onClick={handleShare}>
      Share Link
    </button>
  );
};

export default ShareButton;
