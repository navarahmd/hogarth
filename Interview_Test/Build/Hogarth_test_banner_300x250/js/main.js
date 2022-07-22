"use strict";

// JavaScript Document


// new
var tl = gsap.timeline({ onComplete: showRefreshbutton });


// copy 
var copyFrame01 = document.getElementById("copy-frame01");
var copyFrame02 = document.getElementById("copy-frame02");
var copyFrame03 = document.getElementById("copy-frame03");
var copyFrame04 = document.getElementById("copy-frame04");
var copyFrame05 = document.getElementById("copy-frame05");

var ctaCopy = document.getElementById("cta-copy");
var ctaCircle = document.getElementById("cta-circle");
var ctaArrow = document.getElementById("cta-arrow");

// banner timings
var _fadeOutSpeed = 0.3;
var _fadeInSpeed = 1;



function startAd() {

    buildTimeline();
}

// $(document).ready(function() {
//     $('#btn').click(function() {

//         buildTimeline();
//     });
// });

/*
 * Function builds banners timeline
 */
function buildTimeline() {
    console.log("buildTimeline");

    tl.addLabel("frame01", 0)

    // show frame content
    .to([copyFrame01], { duration: _fadeInSpeed, alpha: 1, ease: "none" }, "frame01+=" + _fadeOutSpeed);


    tl.addLabel("frame02", 1.5)

    // remove prev frame content
    .to([copyFrame01], { duration: _fadeOutSpeed, alpha: 0, ease: "none" }, "frame02")

    // show frame content
    .to([copyFrame02], { duration: _fadeInSpeed, alpha: 1, ease: "none" }, "frame02+=" + _fadeOutSpeed);

    tl.addLabel("frame03", 3)

    // remove prev frame content
    .to([copyFrame02], { duration: _fadeOutSpeed, alpha: 0, ease: "none" }, "frame03")

    // show frame content
    .to([copyFrame03], { duration: _fadeInSpeed, alpha: 1, ease: "none" }, "frame03+=" + _fadeOutSpeed);


    tl.addLabel("frame04", 4.5)

    // remove prev frame content
    .to([copyFrame03], { duration: _fadeOutSpeed, alpha: 0, ease: "none" }, "frame04")

    // show frame content
    .to([copyFrame04], { duration: _fadeInSpeed, alpha: 1, ease: "none" }, "frame04+=" + _fadeOutSpeed);


    tl.addLabel("frame05", 6)

    // remove prev frame content
    .to([copyFrame04], { duration: _fadeOutSpeed, alpha: 0, ease: "none" }, "frame05")

    // show frame content
    .to([copyFrame05], { duration: _fadeInSpeed, alpha: 1, ease: "none" }, "frame05+=" + _fadeOutSpeed)
        .to([ctaCopy, ctaCircle, ctaArrow], { duration: _fadeInSpeed, alpha: 1, ease: "none" }, "frame05+=" + _fadeOutSpeed);




}


function buildTimeline1() {
    var t2 = new TimelineMax();
    t2.to("#btn", 1, { rotation: 360 });
    tl.restart();
}

function showRefreshbutton() {

    document.getElementById("btn").style.display = "block";
}
