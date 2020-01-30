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
}

const source = document.getElementById('search_gif');
const btnGO = document.getElementById('search_button')
const target = document.getElementById('gifs_list')
const targetPopup = document.getElementById('popup')
let searchValue;

source.oninput = function () {
    searchValue = source.value;
    if (searchValue !== "") {
        let freshArray = [...dataGifs.gifs]
        let newArr = []
        freshArray.forEach(element => {
            // element.keywords.forEach(keyword => {
            //     if (keyword.includes(searchValue)) {
            //         let index = newArr.findIndex(x => x.keywords.includes(searchValue))
            //         console.log(index)
            //         if (index === -1) newArr.push(element)
            //     }
            // })
            if (element.keywords.includes(searchValue)) newArr.push(element)
        })
        target.innerHTML = ``;
        newArr.forEach(element => {
            target.innerHTML += `<div class="gif"><img src="${element.link}"/></div>`
        })
    } else {
        let resetArr = [...dataGifs.gifs]
        resetArr.forEach(element => {
            target.innerHTML += `<div class="gif"><img src="${element.link}"/></div>`
        })
    }
}

let newTarget = target.querySelectorAll('.gif');

newTarget.forEach(element => {
    element.onmouseenter = function () {
        element.onclick = function () {
            targetPopup.innerHTML = element
            // Actually creating a popup
        }
    }
})