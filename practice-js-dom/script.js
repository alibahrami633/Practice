// Create your HTML Page via DOM Methods here!
var bodyTag = document.querySelector("body");
var h1Tag1 = document.createElement("h1");
var h2Tag1 = document.createElement("h2");
var divTag = document.createElement("div");
var imgTag = document.createElement("img");

bodyTag.appendChild(divTag);

divTag.appendChild(h1Tag1);
h1Tag1.innerText = "I am H1";
h1Tag1.style.textAlign = "center";

divTag.appendChild(h2Tag1);
h2Tag1.innerText = "I am H2";
h2Tag1.style.textAlign = "center";

bodyTag.appendChild(divTag);

divTag.appendChild(imgTag);
imgTag.style.width = "100%";
imgTag.style.margin = "50%";