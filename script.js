function pageAnime(){
    Shery.imageEffect("#back", { style: 5, config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -1, "range": [-1, 1] }, "aspect": { "value": 1.9884817712594076 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.03, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }, gooey: true });
}

pageAnime();


let elems = document.querySelectorAll(".elem")
elems.forEach(function (elem) {
    let h1s = elem.querySelectorAll("h1")
    let index = 0
    let animate = false

    document.querySelector("#main").addEventListener("click", function () {
        if(!animate){
            animate = true
            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" })
                    animate = false
                }
            })
    
            index === h1s.length - 1 ? index = 0 : index++;
    
            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            })
        }
    })
})


