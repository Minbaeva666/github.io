let changePhoto = document.querySelector("img");
let count = 0;
changePhoto.onclick = () => {
    if (count % 2 === 0) {
        changePhoto.setAttribute("src", "imgs/2nd.jpg");
    }
    else {
        changePhoto.setAttribute ("src", "imgs/1stph.jpg");
    }
    count++;
};

