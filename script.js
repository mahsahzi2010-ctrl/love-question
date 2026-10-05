let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");

yesButton.onclick = function() {

    document.getElementById("question").innerText = "واقعااا؟ 🥹🎀";

    yesButton.style.display = "none";
    noButton.style.display = "none";

    for (let i = 0; i < 20; i++) {

        let heart = document.createElement("div");

        heart.innerText = "♥";

heart.style.position = "fixed";
heart.style.left = Math.random() * 90 + "%";
heart.style.top = Math.random() * 90 + "%";
heart.style.fontSize = Math.random() * 30 + 20 + "px";
heart.style.animationDuration = Math.random() * 2 + 2 + "s";
heart.style.color = "hotpink";
heart.style.zIndex = "9999";

        document.getElementById("hearts").appendChild(heart);
    }
};


noButton.onmouseover = function() {

    noButton.style.position = "absolute";

    noButton.style.left = Math.random() * 80 + "%";
    noButton.style.top = Math.random() * 80 + "%";

};