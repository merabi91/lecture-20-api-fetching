// const api_url = `https://api.github.com/user/${input.value}`

// const main = document.getElementById("main")
// const form = document.getElementById("form")
// const search = document.getElementById("search")

// getGitHub(api_url)

// async function getGitHub(url) {
//     const res = await fetch(url)
//     const data = await res.json()
    
//     console.log(data)
// }

const input = document.querySelector("input");
const btn = document.querySelector(".searchbtn");

btn.addEventListener("click", function() {
    const url = `https://api.github.com/user/${input.value}`;
    async function getUrl() {
        const response = await fetch(url);
        const data = await response.json();
    }
    getUrl();
});

const toggleColorButtons = document.querySelectorAll();
toggleColorButtons.forEach((btn) => {
    btn.addEventListener("click", toggle);
});