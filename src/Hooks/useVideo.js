import React from 'react'

export default (videoElemId) => {
  React.useEffect(() => {
    const video = document.getElementById(videoElemId);

    (async function() {
      if (navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true })
          video.srcObject = stream;
        } catch {
          console.log("Something went wrong!");
        };
      }
    })()
  }, [videoElemId])
}
