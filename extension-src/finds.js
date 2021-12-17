const findMic = () => {
    let res = null;
    let btn = document.querySelectorAll("[aria-label]");

    for (let i = 0; i < btn.length; i++) {
        let element = btn[i];
        let tt = element.attributes["aria-label"]
        if (tt && (tt.nodeValue.toLocaleLowerCase().includes('ctrl + d') || tt.nodeValue.toLocaleLowerCase().includes('⌘ + d'))) {
            res = element;
        }
    }
    if (res == null) {
        res = document.querySelectorAll("button.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.uaILN.JxICCe.CdgDHf.FTMc0c.N2RpBe.jY9Dbb")[0]
    }
    // console.log(res)
    return res;
}


const findCam = () => {
    let res = null;
    let btn = document.querySelectorAll("[aria-label]");

    for (let i = 0; i < btn.length; i++) {
        let element = btn[i];
        let tt = element.attributes["aria-label"]
        if (tt && (tt.nodeValue.toLocaleLowerCase().includes('ctrl + e') || tt.nodeValue.toLocaleLowerCase().includes('⌘ + e'))) {
            res = element;
        }
    }
    // console.log(res)
    return res;
}