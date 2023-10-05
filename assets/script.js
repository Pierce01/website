window.addEventListener('DOMContentLoaded', enableSwitch())

let last = 0;
const messages = [ "a Developer", "a Traveler", "an Explorer", "an Adventurer", "a Creator", "a Coder", "an Innovator" ];

function enableSwitch() {
    setInterval(async () => {
        const element = document.getElementsByClassName('js-text')[0];
        element.classList.toggle('fade');
        await wait();

        last = last > messages.length - 2 ? 0 : last + 1
        element.textContent = messages[last];
        element.classList.toggle('fade');
    }, 4000)
};

function wait() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(); }, 1000);
    })
}