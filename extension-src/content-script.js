console.log('hi I\'m google meet extension')

// Buttons
let micBtn, chatBar, videoBtn;
let key = 18;
const addKeyPressEvent = () => {
    document.addEventListener('keydown', (e) => {

        micBtn = findMic()
        if (e.keyCode == key && isMicOff()) {
            micBtn.click()
        }
    });

    document.addEventListener('keyup', (e) => {
        micBtn = findMic()
        if (e.keyCode == key && !isMicOff()) {
            micBtn.click()
        }
    });
}


const isMicOff = () => {
    if (micBtn.dataset.isMuted == 'false') {
        return false
    }
    return true;
}
const isCamOff = () => {
    videoBtn = findCam()
    if (videoBtn.dataset.isMuted == 'false') {
        return false;
    }
    return true;
}

addKeyPressEvent()

