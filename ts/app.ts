const theButton = document.getElementById("toggleButton");
theButton?.addEventListener("click", pressTheButton);


function pressTheButton() {
    const mainFella = document.getElementById("mainBody");
    const currentMode = mainFella?.getAttributeNode("class")!;
    const githubPic = document.getElementById("githubImg")!;
    const linkedinPic = document.getElementById("linkedinImg")!;
    const wordpressPic = document.getElementById("wordpressImg")!;
    const jekyllPic = document.getElementById("jekyllImg")!;
    const gmailPic = document.getElementById("gmailImg")!;
    const theImageThisTime = document.getElementById("toggleButton")!;
    if (currentMode.nodeValue == "lightMode") {
        mainFella?.removeAttribute("class");
        mainFella?.setAttribute("class", "darkMode");
        githubPic?.setAttribute("style", "filter:invert(1);");
        linkedinPic?.setAttribute("style", "filter:invert(1);");
        wordpressPic?.setAttribute("style", "filter:invert(1);");
        jekyllPic?.setAttribute("style", "filter:invert(1);");
        gmailPic?.setAttribute("style", "filter:invert(1);");
        theImageThisTime.setAttribute("src", "assets/moon.svg");
    } else if (currentMode.nodeValue == "darkMode") {
        mainFella?.removeAttribute("class");
        mainFella?.setAttribute("class", "lightMode");
        githubPic.removeAttribute("style");
        linkedinPic.removeAttribute("style");
        wordpressPic.removeAttribute("style");
        jekyllPic.removeAttribute("style");
        gmailPic.removeAttribute("style");
        theImageThisTime.setAttribute("src", "assets/sun.svg");
    }
    console.log(currentMode);
}


