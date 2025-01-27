let div = document.querySelector('div');
let appName = document.createElement('div');
appName.innerHTML = "<b>Browser Name: </b>" + navigator.vendor;

let appVersion = document.createElement('div');
appVersion.innerHTML = `<b>Browser Version :</b> ${navigator.appVersion}`;

let screenRes = document.createElement('div');
screenRes.innerHTML = `<b>Screen Resolution is :</b> ${window.screen.width}x ${window.screen.height}`


div.appendChild(appName);
div.appendChild(appVersion);
div.appendChild(screenRes);



function newTab() {
  let openPopup = document.getElementById('openPop');
  openPopup.addEventListener('click', (e) => {
    e.preventDefault();
    let newWindow = window.open("", "_blank", "width=400,height=300");

    let para = document.createElement('p');
    para.textContent = "Hello from the popup!";
    newWindow.document.body.appendChild(para);

    let btn = document.createElement('button');
    btn.textContent = `Close Popup`
    newWindow.document.body.appendChild(btn);

    let close = () => {
      btn.addEventListener('click', (e) => {
        newWindow.close();
      })
    }

    close();

    if (close) {
      let opened = document.querySelector('h2');
      opened.textContent = "PopUP Opened"
    }

  });
}

newTab();


let online = document.getElementById('online');
online.addEventListener('click', (e) => {
  e.preventDefault();
  alert("You are Online")
})






