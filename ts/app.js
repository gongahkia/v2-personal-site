// fua
    // eventually target migration of all these features to script.js on my new website

"use strict";

const theButton = document.getElementById("infinityButton");
theButton === null || theButton === void 0 ? void 0 : theButton.addEventListener("click", pressTheButton);
function pressTheButton() {

    // get document id of each and every elment and assign it to a const in format of 
    // const myNamePara = document.getElementById("my-name");

    const myNamePara = document.getElementById("my-name");
    const myDescPara = document.getElementById("my-description");
    const myCredNamePara = document.getElementById("my-credits-name");
    const myCredGithubPara = document.getElementById("my-credits-github");
    const myCredResumePara = document.getElementById("my-credits-resume");
    const myCredJapOnePara = document.getElementById("my-japanese-is-bad");
    const myCredJapTwoPara = document.getElementById("my-japanese-is-good");

    if (myNamePara && myDescPara && myCredNamePara && myCredGithubPara && myCredResumePara) {
        // console.log("yummy");
        const currentNameText = myNamePara.innerText;
        const altNameText = myNamePara.getAttribute("data-alt-text") || "";
        myNamePara.innerText = altNameText;
        myNamePara.setAttribute("data-alt-text", currentNameText);
        const currentDescText = myDescPara.innerText;
        const altDescText = myDescPara.getAttribute("data-alt-text") || "";
        myDescPara.innerText = altDescText;
        myDescPara.setAttribute("data-alt-text", currentDescText);
        const currentCreditsNameText = myCredNamePara.innerText;
        const altCreditsNameText = myCredNamePara.getAttribute("data-alt-text") || "";
        myCredNamePara.innerText = altCreditsNameText;
        myCredNamePara.setAttribute("data-alt-text", currentCreditsNameText);
        const currentCreditsGithubText = myCredGithubPara.innerText;
        const altCreditsGithubText = myCredGithubPara.getAttribute("data-alt-text") || "";
        myCredGithubPara.innerText = altCreditsGithubText;
        myCredGithubPara.setAttribute("data-alt-text", currentCreditsGithubText);
        const currentCreditsResumeText = myCredResumePara.innerText;
        const altCreditsResumeText = myCredResumePara.getAttribute("data-alt-text") || "";
        myCredResumePara.innerText = altCreditsResumeText;
        myCredResumePara.setAttribute("data-alt-text", currentCreditsResumeText);
        const currentJapOneText = myCredJapOnePara.innerText;
        const altJapOneText = myCredJapOnePara.getAttribute("data-alt-text") || "";
        myCredJapOnePara.innerText = altJapOneText;
        myCredJapOnePara.setAttribute("data-alt-text", currentJapOneText);
        const currentJapTwoText = myCredJapTwoPara.innerText;
        const altJapTwoText = myCredJapTwoPara.getAttribute("data-alt-text") || "";
        myCredJapTwoPara.innerText = altJapTwoText;
        myCredJapTwoPara.setAttribute("data-alt-text", currentJapTwoText);
    }

    // these HTML elements will change when the button is pressed if the color is detected
    const mainFella = document.getElementById("mainBody");
    const currentMode = mainFella === null || mainFella === void 0 ? void 0 : mainFella.getAttributeNode("class");
    const githubPic = document.getElementById("githubImg");
    const linkedinPic = document.getElementById("linkedinImg");
    const wordpressPic = document.getElementById("wordpressImg");
    const gmailPic = document.getElementById("gmailImg");
    const infinityPic = document.getElementById("infinityButton");

    // randomised color
    const randomColor = rngHexColor();

    // ! asserts that a variable is non-nullable and is defined
    // the class "rotated" must be added to the element everytime it is to be played
    console.log(randomColor, checkHexDarkness(randomColor), currentMode);
    mainFella.style.backgroundColor = randomColor; 

    infinityPic.classList.add('rotated');
    if (checkHexDarkness(randomColor)) { // if relatively darker
        mainFella.removeAttribute("class");
        githubPic.setAttribute("style", "filter:invert(1);");
        linkedinPic.setAttribute("style", "filter:invert(1);");
        wordpressPic.setAttribute("style", "filter:invert(1);");
        gmailPic.setAttribute("style", "filter:invert(1);");
        infinityPic.setAttribute("style", "filter:invert(1);");
    }
    else { // if relatively light
        mainFella.removeAttribute("class");
        githubPic.removeAttribute("style");
        linkedinPic.removeAttribute("style");
        wordpressPic.removeAttribute("style");
        gmailPic.removeAttribute("style");
        infinityPic.removeAttribute("style");
    }

    // setTimeout() ensures the animation has cleared its entire cycle first before removing it
    setTimeout(() => {
        infinityPic.classList.remove('rotated');
    }, 750);

}

// --- helper functions ---

function rngHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function checkHexDarkness(hexColor, threshold = 0.5) {
    const sanitizedHexColor = hexColor.replace(/^#/, '');
    const red = parseInt(sanitizedHexColor.substring(0, 2), 16);
    const green = parseInt(sanitizedHexColor.substring(2, 4), 16);
    const blue = parseInt(sanitizedHexColor.substring(4, 6), 16);
    // calculate luminance
    const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
    return luminance < threshold;
}