// Expose globally your audio_context, the recorder instance and audio_stream
var audio_context;
var recorder;
var audio_stream;
var chunks = [];
var websocket;
var textContent = '';
/**
 * Patch the APIs for every browser that supports them and check
 * if getUserMedia is supported on the browser. 
 * 
 */
function Initialize() {
    try {
        // Monkeypatch for AudioContext, getUserMedia and URL
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
        window.URL = window.URL || window.webkitURL;

        // Store the instance of AudioContext globally
        audio_context = new AudioContext;
        console.log('Audio context is ready !');
        console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
    } catch (e) {
        alert('No web audio support in this browser!');
    }
}


function getWss(callback) {
    if (websocket && websocket.readyState == 1) {
        return callback();
    }

    var token = "fGu0QHA85AG5ZRSUE8yj%2FInsWa3qyOdSsf6KKl1Gn2OwvcD%2B2YMXF7iL6C8ZabTZe%2FxUTm6ohE%2F7s4qy4uT6EWSxneDgxUT%2FSlpQ7v0JboVKz%2BxuUSiyTn6dkR77AaEATpMpisx05Z1pE35tSBoDnOz%2Brd8g07uVHQF8LmJ%2BhPB3Xcd8KXA7G1VUnHVLZ%2BSGHp58cK%2BwwvIws4SYWSJfbGsKLKLm7fhjyFrRXdg9bitaG4WKckDpVOKfMos03HNK2S%2B%2FeGFHoG%2F%2FXTl2nE8uNfvMTdp%2FeSqnsbSQKThpLGHbpMi7F5XLppx9bY3NOtunCddY3i06PMwMupYa4k5CGuCAms2o9MLqLPVaTSApSEB1bPZnMfmMLQpo%2BMT5shEHZ99pdJ7zIWHzsPkEquGas0Eh7%2Bv0DegahfwJTSzzJFPz%2F8UXvHRa%2BTPPbEBuwBWf77w7uo0DOlVl1oQnHfb%2BSLHoXw7%2B8apn2lZWCIxh08vUOS16JrXAdtqSyWyaKtukyHDeOKiDfaD9hC%2FKsRGbfk0Oat4PEMAziJw58vO28aIHpwxljkUamMssO1AFAc2r3Om9lg7MfbmOhubeXtPybmwjUIXpcsksyg%2BM0wh%2BJeRLNeIRRknwmUh%2FKd0Yh4%2Bxm95NbyoQVUkqRuM7yCFsafECqauR9rBpRHGj1FgAbi0hqSOHxamehFohRx4%2F2N9eEPRd1mQzjNwWm3zHeISqrNyEmfKt6sKtNPDFstoKakp7CBVYYz%2Fv%2FqLk9o3MKss1mGOpogdhReworLUAtW0F0W8I%2BAfs8I1H1KV75AfWsN1%2B8n4%2BCJYdZyqpRGkklhnyrWK1CnT9WJAn8wNLMHot%2BYAZDy%2FGUx964MsYpXiEE3GnWvkh4KEVamVPuVV%2FbqhLu5XbZRZ1w%2BtRu2y4ethxEz5BuSZ6pV6qNwW28pcWWt9el83%2FfXEU4rflotBDqH899Ki4%2Bp3ycwLGxAqz6e0yygZ1WrsCG4hHlwjc60s3NCk%3D";
    var wsURI = 'wss://stream.watsonplatform.net/speech-to-text/api/v1/recognize'
  + '?watson-token=' + token
  + '&model=en-US_BroadbandModel';
          websocket=new WebSocket(wsURI);
         
    websocket.onopen = function (evt) { onOpen(evt) };
    websocket.onclose = function (evt) { onClose(evt) };
    websocket.onmessage = function (evt) { onMessage(evt) };
    websocket.onerror = function (evt) { onError(evt) };
    function onOpen(evt) {

        var message = {
            'action': 'start',
            'content-type': 'audio/webm;rate=128000',
            'inactivity_timeout': -1
        };
        websocket.send(JSON.stringify(message)
        );
        console.log("demo Open");
        callback();
    }
    function onMessage(evt) {
        console.log(evt.data);
        console.log("websocket onMessage");
        if(evt.data.includes("results") ){

            jslist = JSON.parse( evt.data).results
           for(var i = 0 ; i < jslist.length ; i++){
               alternatives=jslist[i]['alternatives']
               if(alternatives != null){
                   for(var j = 0 ; j < alternatives.length;j++){
                       transcript = alternatives[j]['transcript']
                       textContent =textContent+ transcript+" . "

                   }
               }
           }

        }

    }
    function onClose(evt) {
        var message = {
            'action': 'stop'
        };
        websocket.send(JSON.stringify(message));
        console.log("websocket close");
        console.log(evt.data);
    }

    function sent(data) {
        console.log(data);
        websocket.send(data);
    }
}


function startRecording() {
    speech2text=[]
    navigator.getUserMedia({ audio: true,video:false}, function (stream) {
        audio_stream = stream;        
        recorder = new MediaRecorder(stream,{
            mimeType:'audio/webm',
            audioBitsPerSecond:128000
        });
        recorder.onstart = function() {
            console.log('recording start');
        };
        recorder.start();
        
    }, function (e) {
        console.error('No live audio input: ' + e);
    });
     getWss(function () {
            var message = {
                'action': 'start',
                'content-type': 'audio/webm;rate=128000',
                'inactivity_timeout': -1
            };
            websocket.send(JSON.stringify(message))
        });
    return websocket;
}

function stopRecording() {
    console.log('Stopped recording.');

    // Stop the getUserMedia Audio Stream !
    audio_stream.getAudioTracks()[0].stop();

    recorder.addEventListener('dataavailable',function(e){
        chunks.push(e.data);            
        var blob = new Blob(chunks, { 'type' : 'audio/webm' });
        getWss(function () {
            var audio = document.getElementById("audio");
            var a = websocket.send(blob);
        });
        stopBlob=new Blob([], { 'type' : 'audio/webm' });
        //websocket.send(stopBlob);

        var message = {
            'action': 'stop'
        };
        websocket.send(JSON.stringify(message));
    }, false);
    recorder.stop();
    //alert(JSON.stringify(textContent))
    return textContent;
}

// Initialize everything once the window loads
window.onload = function () {
    // Prepare and check if requirements are filled
    Initialize();
};