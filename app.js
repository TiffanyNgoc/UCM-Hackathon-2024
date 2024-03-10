// app.js
const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const startCallBtn = document.getElementById('start-call-btn');
const endCallBtn = document.getElementById('end-call-btn');

let localStream;
let remoteStream;
let rtcPeerConnection;

const startCall = async () => {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;

        const configuration = {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' } // STUN server for NAT traversal
            ]
        };
        rtcPeerConnection = new RTCPeerConnection(configuration);
        rtcPeerConnection.addEventListener('icecandidate', handleIceCandidate);
        rtcPeerConnection.addEventListener('track', handleTrack);

        localStream.getTracks().forEach(track => rtcPeerConnection.addTrack(track, localStream));

        const offer = await rtcPeerConnection.createOffer();
        await rtcPeerConnection.setLocalDescription(offer);

        // Send offer to server (not implemented in this example)
    } catch (error) {
        console.error('Error starting call:', error);
    }
};

const endCall = () => {
    rtcPeerConnection.close();
    localStream.getTracks().forEach(track => track.stop());
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
};

const handleIceCandidate = event => {
    if (event.candidate) {
        // Send ICE candidate to other peer (not implemented in this example)
    }
};

const handleTrack = event => {
    remoteStream = event.streams[0];
    remoteVideo.srcObject = remoteStream;
};

startCallBtn.addEventListener('click', startCall);
endCallBtn.addEventListener('click', endCall);
