const findMic = () => {
    let res = null;
    let btn = document.querySelectorAll("[data-tooltip]");

    for (let i = 0; i < btn.length; i++) {
        let element = btn[i];
        let tt = element.dataset.tooltip
        if (tt && (tt.toLowerCase().includes('ctrl + d') || tt.toLowerCase().includes('⌘ + d'))) {
            res = element;
            // console.log(res)
        }
    }
    return res;
}

const findChatBar = () => {
    let chatInput = document.querySelectorAll('textarea')[0];
    return chatInput;
}

const findCam = () => {
    let res = null;
    let btn = document.querySelectorAll("[data-tooltip]");

    for (let i = 0; i < btn.length; i++) {
        let element = btn[i];
        let tt = element.dataset.tooltip
        if (tt && (tt.toLowerCase().includes('ctrl + e') || tt.toLowerCase().includes('⌘ + e'))) {
            res = element;
            // console.log(res)
        }
    }
    return res;
}

const findChatIcon = () => {
    let res = document.getElementsByClassName('uArJ5e UQuaGc kCyAyd QU4Gid foXzLb M9Bg4d')[0]
    return res;
}