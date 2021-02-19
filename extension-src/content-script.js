console.log('hi I\'m google meet extension')

document.body.addEventListener('click', () => {
    removeFocus()
    //console.log('click');
})

// Buttons
let micBtn, chatBar, videoBtn;

const addKeyPressEvent = () => {
    document.addEventListener('keydown', (e) => {
        micBtn = findMic()
        if (e.key == ' ' && isMicOff() && !isChatOnFocus()) {
            micBtn.click()
        }
    });

    document.addEventListener('keyup', (e) => {
        micBtn = findMic()
        if (e.key == ' ' && !isMicOff() && !isChatOnFocus()) {
            micBtn.click()
        }
    });
}
const removeFocus = () => {
    let focusBtn = document.activeElement
    focusBtn.blur()
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
const isChatOnFocus = () => {
    chatBar = findChatBar();
    if (document.activeElement == chatBar) {
        return true;
    }
    return false;
}

addKeyPressEvent()

