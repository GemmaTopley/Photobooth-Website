
//camera access

//testing code directly from
//https://web.dev/articles/getusermedia-intro
//edit for needs later just checking camera

if (!navigator.mediaDevices?.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
  } else {
    // List cameras and microphones.
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        let audioSource = null;
        let videoSource = null;
  
        devices.forEach((device) => {
          if (device.kind === "audioinput") {
            audioSource = device.deviceId;
          } else if (device.kind === "videoinput") {
            videoSource = device.deviceId;
          }
        });
        sourceSelected(audioSource, videoSource);
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }
  
  async function sourceSelected(audioSource, videoSource) {
    const constraints = {
      audio: { deviceId: audioSource },
      video: { deviceId: videoSource },
    };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
  }