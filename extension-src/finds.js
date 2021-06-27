const findMic = () => {
    let res = null;
    let btn = document.querySelectorAll("[data-tooltip]");

    for (let i = 0; i < btn.length; i++) {
        let element = btn[i];
        let tt = element.dataset.tooltip
        if (tt && (tt.toLowerCase().includes('ctrl + d') || tt.toLowerCase().includes('⌘ + d'))) {
            res = element;
            // console.log(res)
        } else {
            res = document.querySelectorAll(".qIiG8c")[0]
        }
    }
    return res;
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