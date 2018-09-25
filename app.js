

function changeName() {
    const msgEl = document.querySelector("#welcomeMessage");
    const inputEl = document.querySelector('input[name="name"]');
    msgEl.textContent = inputEl.value === '' ? 'Hello!':`Hello, ${inputEl.value}!`;
}