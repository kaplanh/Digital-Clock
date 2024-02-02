# Digital-Clock
[Click Me!](https://kaplanh.github.io/Digital-Clock/)

![digital clock](https://github.com/kaplanh/Digital-Watch/assets/101884444/77bf2e3d-5cfc-45ef-b340-1691785c7925)

## Description

The project aims to create a Digital-Clock using JS and Css.

## Problem Statement

- Your company has recently started on a project that aims to create a Digital-Clock. So you and your colleagues have started to work on the project.

## Project Skeleton 

```
Digital-Clock (folder)
|
|----readme.md                        
|----index.html
|----style.css
|----app.js
``` 


### At the end of the project, the following topics are to be covered;

- HTML  
- CSS
  - outline, outline-offset
  - box-shadow
  - 
   ~~~
   main {
  margin: 10px;
  border: 10px solid red;
  border-radius: 5px;
  outline: 10px solid red;
  outline-offset: 30px;
  box-shadow: 5px 5px 15px white, -5px 5px 15px white, 5px -5px 15px white,
    -5px -5px 15px white;
  }
   ~~~ 

  
- JS
  - DOM Manipulations     
  - DOM Selectors
  -  Date() object
     -  getHours()
     -  getMinutes()
     -  getSeconds()
  - setInterval()
     ```
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
    
    ```
  

### At the end of the project, developers will be able to;

- improve coding skills within HTML, CSS and JS 

- use git commands (push, pull, commit, add etc.) and Github as a Version Control System.


## Notes

- You can use HTML, CSS and JS to complete this project.



<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>




