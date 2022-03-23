document.getElementById('localStorageButton').addEventListener('click', () => {
    localStorage.setItem('myLocalStorageKey', 'myLocalStorageValue');
    console.log(localStorage.getItem('myLocalStorageKey'));
});

document.getElementById('sessionStorageButton').addEventListener('click', () => {
    sessionStorage.setItem('mySessionStorageKey', 'mySessionStorageValue');
    console.log(sessionStorage.getItem('mySessionStorageKey'));
});