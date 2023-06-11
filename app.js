
const currentTime = () => {
  const h1 = document.querySelector("h1");
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = 'AM';
    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
      hh -= 12;
      session = 'PM';
    }

    hh = hh < 10 ? "0" + hh : hh; //? hh=hh<10?`0${hh}` : hh
    mm = mm < 10? "0" + mm : mm; //? mm=mm<10?`0${mm}` : mm
    ss = ss < 10 ? "0" + ss : ss; //? ss=ss<10?`0${ss}` : ss
    
    let time = hh + ":" + mm + ":" + ss + " " + session;//? let time = `${hh}:${mm}:${ss} ${session}`
    h1.innerText = time;
}
currentTime();
setInterval(currentTime, 1000);