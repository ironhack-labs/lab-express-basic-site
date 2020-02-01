let dataGifs = {
    js: ["gifs"],
    gifs: [{
            link: "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif",
            keywords: ["code", "master", "focus", "tryhard", "zone", "cat"]
        },
        {
            link: "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif",
            keywords: ["code", "lost", "noob", "cat"]
        },
        {
            link: "https://media.giphy.com/media/zOvBKUUEERdNm/source.gif",
            keywords: ["code", "monkey", "wtf", "help", "angry"]
        },
        {
            link: "https://media.giphy.com/media/dlMIwDQAxXn1K/source.gif",
            keywords: ["code", "angry", "mad", "furious"]
        },
        {
            link: "https://media.giphy.com/media/vzO0Vc8b2VBLi/source.gif",
            keywords: ["code", "dog", "tired", "chill"]
        },
        {
            link: "https://media.giphy.com/media/ZIH0Slo6J6PQY/giphy.gif",
            keywords: ["code", "angry", "mad", "furious"]
        },
        {
            link: "https://media.giphy.com/media/12BYUePgtn7sis/giphy.gif",
            keywords: ["code", "yay", "happy", "dancing", "dance"]
        },
        {
            link: "https://media.giphy.com/media/gG6OcTSRWaSis/source.gif",
            keywords: ["code", "bug", "unexpected"]
        },
        {
            link: "https://media.giphy.com/media/wh9Ftb014GmKQ/source.gif",
            keywords: ["code", "css", "why", "help"]
        },
        {
            link: "https://media.giphy.com/media/Oq0tvN9qoXVgk/giphy.gif",
            keywords: ["code", "test", "client"]
        },
        {
            link: "https://media.giphy.com/media/akFPzLYDHTEUU/source.gif",
            keywords: ["code", "what", "help", "lost"]
        },
        {
            link: "https://media.giphy.com/media/WbEqInnv5XvQk/source.gif",
            keywords: ["code", "wrong", "error", "bad"]
        },
        {
            link: "https://media.giphy.com/media/11fDMHAzihB8D6/source.gif",
            keywords: ["code", "reproduce", "bug", "tesr"]
        },
        {
            link: "https://media.giphy.com/media/ta5eOL0Wvhh4s/source.gif",
            keywords: ["code", "mad", "trash", "furious"]
        }
    ]
};

const source = document.getElementById("search_gif");
const btnGO = document.getElementById("search_button");
const target = document.getElementById("gifs_list");
const targetClose = document.getElementById("popup_close");
let searchValue;

source.oninput = function () {
    searchValue = source.value;
    let newArr = [];
    let resetArr = [];
    let freshArr = [];
    if (searchValue !== "") {
        freshArr = [...dataGifs.gifs];
        freshArr.forEach(element => {
            element.keywords.forEach(keyword => {
                if (keyword.startsWith(searchValue) && newArr.indexOf(element) === -1) {
                    newArr.push(element)
                }
            })
        });
        target.innerHTML = ``;
        newArr.forEach(element => {
            target.innerHTML += `<div class="gif"><img src="${element.link}"/></div>`;
        });
        popupClick()
    } else {
        target.innerHTML = ``;
        resetArr = [...dataGifs.gifs];
        resetArr.forEach(element => {
            target.innerHTML += `<div class="gif"><img src="${element.link}"/></div>`;
        });
        popupClick()
    }
};


const targetBody = document.querySelector('body');
const targetPopup = document.getElementById("popup");
const targetPopupContent = document.getElementById("popup_content");
const targetLayout = document.getElementById('layout');
const targetCopy = document.getElementById('copy_link');
const targetSave = document.getElementById('save_gif');

function hideThis(target) {
    target.classList.add('hide')
    target.classList.remove('show')
}

function showThis(target) {
    target.classList.add('show')
    target.classList.remove('hide')
}

function popupClick() {
    let newTarget = target.querySelectorAll(".gif");
    newTarget.forEach(element => {
        element.onmouseenter = function () {
            element.onclick = function () {
                showThis(targetLayout)
                showThis(targetPopup)
                targetBody.classList.add('nooverflow');
                targetPopupContent.innerHTML = `<img src="${element.querySelector('img').src}">`
            };
        };
    });
}
popupClick()

targetClose.onclick = function () {
    targetBody.classList.remove('nooverflow');
    hideThis(targetLayout);
    hideThis(targetPopup);
}
targetCopy.onclick = function () {
    let targetImgLink = targetPopupContent.querySelector('img').src;
    targetPopup.querySelector('#popup_actions').innerHTML += `<input type="text" value="${targetImgLink}"><p class="green">Link copied !</p>`;
    targetPopup.querySelector('#popup_actions input').select();
    document.execCommand("copy");
}