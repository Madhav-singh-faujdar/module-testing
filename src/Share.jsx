import React from 'react';

const ShareButton = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Social viens ',
          text: 'Find out your best influancer',
          url: 'https://beta.socialveins.com/setting',
        });
      } else {
        // Fallback for browsers that do not support Web Share API
        const shareableLink = 'https://beta.socialveins.com';

        // You can customize the fallback method based on your requirements
        // For example, opening a new window or copying to clipboard
        const fallbackMethod = window.open ? openWindowFallback : copyToClipboardFallback;

        fallbackMethod(shareableLink);
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  const openWindowFallback = (link) => {
    // Open a new window or tab with the shareable link
    window.open(link, '_blank');
  };

  const copyToClipboardFallback = (link) => {
    // Fallback to copying the link to the clipboard
    navigator.clipboard.writeText(link)
      .then(() => alert('Link copied to clipboard'))
      .catch((err) => console.error('Error copying to clipboard:', err));
  };

  return (
    <button onClick={handleShare}>
      Share Link
    </button>
  );
};

export default ShareButton;
