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

    var token = "%2B4zYIQaMOwznykNJmuRoST9HG0qWUAhP%2B5paBZbiXZmTsRXRq5gjC3oxnvJkdgCJjpOlmrLN6Bw7xT7Sp5IC0VHxfI1vXXkvZGfS7qz2i0rrIGR%2BEPQvXpTvDWFoZlxbNPHpoh4R%2Ft2aCMI4soEsRW6JyKSiqw9cn6oL9R0PvSd%2FGvOZeUoBn6qwsAcEEd%2Bh%2FEFh703hQQfNK8dznjEKfRVMgSx6zLUJXleRQpCUIWqgRwLRSJO3Qfjp3AIRNrS0M5Wb%2BkIm%2BjzeXBygFlHjxpSPbZw%2F7csiAQy0DeRTf58ty0dMu%2BbYNgWl8uvNvJqXfVHWzv7z1GWd0r7xmypLvG3arFUqEA8gy%2FdS5EWFvbxiF7qVEfgTMxTHHCxZwL%2BRGACp2u1qmd%2FGBw9MC2YpJuB2WTQSasMZSaLIOjcKd5v%2BaI95bGGG4oXplUX0nTMHV8g2yOdyxrPiFZpTOigR9qFg4tzO7zBgmyx6paGIRA3o2wGfGYQ3%2BnzBoKMChRku6tteQEVX11FA3uT2DT7ok39gYeQ9Uk0A2DquU4QKwIoY9gmpC3%2FILaY%2FP8u43yvi2FU2nYaiFOw6Yn4%2FbvsIItKdF2Tv3Zj3OF1Po2fZTnyEB5GV%2F76cHbw%2B1G51nAdp%2FveOYRcxeWa0sd6q5JAAWRu66IZpLS8KO0Z48wQvJ9zwPJHgdxA%2B20yBKRKqHhuCtWdqxGCm0lg%2BdyfaQc8pefsnUsWLFKt1%2Fhtlig%2B6wYTZ1xKttFAcIvoiMNwJrlnlMpsMT5VfgywWPE0EpdDSMY1TMgRf0nOI91JX4msfHu5ZhkqBOLoTeSfyY%2FhMz016EEOpCILwlSY%2BP2V6Vsg%2F8YM%2FTZEOVuDHmROA1%2FhBXBqD4hGvrT7vEv3GAp7Dj2XKepDp7w%2FPGtCJB1AQweFlBcrguPWjk0x2jcrIW3NgCKzBujUq9d46st%2BAO5tw2K4fqWq6w2E2Dc2Uqk8HXyZDhwoEqz%2B%2BHLanhEHINnamnio%3D";
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