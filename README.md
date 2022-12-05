# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./assets/screenshots/nickonyi.github.io_Space-tourism-website_index.html(iPad%20Mini)%20(1).png)
![](./assets/screenshots/nickonyi.github.io_Space-tourism-website_destination.html(iPad%20Mini).png)
![](./assets/screenshots/nickonyi.github.io_Space-tourism-website_crew.html(iPad%20Mini).png)
![](./assets/screenshots/nickonyi.github.io_Space-tourism-website_technology.html(iPad%20Mini).png)





**

### Links

- Solution URL: [Add solution URL here](https://github.com/nickonyi/Space-tourism-website.git)
- Live Site URL: [Add live site URL here](https://nickonyi.github.io/Space-tourism-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow




### What I learned

With this project, I learned about how to change different contents and Images from the same page using tablist and tabpanel without having the need to link extra files to the page. There is nothing wrong with linking pages but using this method improves my Js skills greatly.



```html
<div class="circle-indicators flex-c" role="tablist" aria-label="crew member list">
            <button tabindex="0" role="tab" data-image="space-image" aria-controls="space-tab" aria-selected="true"><span class="sr-only">The commander</span>1</button>
            <button tabindex="-1" role="tab" data-image="port-image" aria-controls="port-tab" aria-selected="false"><span class="sr-only">The mission specialist</span>2</button>
            <button tabindex="-1" role="tab" data-image="capsule-image" aria-controls="capsule-tab" aria-selected="false"><span class="sr-only">The pilot</span>3</button>
        </div>
        <picture id="space-image">
            <img src="./assets/technology/image-launch-vehicle-landscape.jpg " alt="launch vehicle ">
        </picture>
        <picture id="port-image" hidden>
            <img src="./assets/technology/image-spaceport-landscape.jpg " alt="Space port ">
        </picture>
        <picture id="capsule-image" hidden>
            <img src="./assets/technology/image-space-capsule-landscape.jpg" alt="Space capsule ">
        </picture>
        <!--Space vehicle-->
        <article class="tech-details flow" id="space-tab" role="tabpanel" tabindex="0">
            <header class="flow flow-space--small">
                <h2 class="fs-600 ff-serif uppercase">The terminology...</h2>
                <p class="fs-700 uppercase ff-serif"> Launch vehicle</p>
            </header>
            <p> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                it's quite an awe-inspiring sight on the launch pad!</p>
        </article>
        <!--Space port vehicle-->
        <article hidden class="tech-details flow" id="port-tab" role="tabpanel" tabindex="0">
            <header class="flow flow-space--small">
                <h2 class="fs-600 ff-serif uppercase">The terminology...</h2>
                <p class="fs-700 uppercase ff-serif"> Spaceport</p>
            </header>
            <p> A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s
                rotation for launch.</p>
        </article>
        <!--Space capsule vehicle-->
        <article hidden class="tech-details flow" id="capsule-tab" role="tabpanel" tabindex="0">
            <header class="flow flow-space--small">
                <h2 class="fs-600 ff-serif uppercase">The terminology...</h2>
                <p class="fs-700 uppercase ff-serif"> Space capsule</p>
            </header>
            <p> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.</p>
        </article>
```

```js
cconst tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const pics = document.querySelectorAll('picture');

let tabFocus = 0;
tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach(tab => {
    tab.addEventListener("click", changeTabPanel);

});
pics.forEach(pic => pic.a)

function changeTabFocus(e) {
    const keyDownLeft = 37;
    const keyDownRight = 39;


    if (e.keyCode == keyDownLeft || e.keyCode == keyDownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        if (e.keyCode == keyDownRight) {
            tabFocus++;
            if (tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        }


        if (e.keyCode === keyDownLeft) {
            tabFocus--;
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }
        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }
}

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    const targetContainer = targetTab.parentNode;
    const mainContainer = targetContainer.parentNode;

    targetContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", true);
    targetTab.setAttribute("aria-selected", true);

    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);

    hideContent(mainContainer, 'picture');
    showContent(mainContainer, [`#${targetImage}`]);
    // mainContainer
    //     .querySelectorAll('[role="tabpanel"]')
    //     .forEach((panel) => panel.setAttribute("hidden", true));
    // mainContainer
    //     .querySelector([`#${targetPanel}`])
    //     .removeAttribute('hidden');

    // mainContainer
    //     .querySelectorAll('picture')
    //     .forEach(pic => pic.setAttribute("hidden", true));
    // mainContainer
    //     .querySelector([`#${targetImage}`])
    //     .removeAttribute('hidden');


}

function hideContent(parent, content) {
    parent.querySelectorAll(content)
        .forEach(item => item
            .setAttribute("hidden", true));
}

function showContent(parent, img) {
    parent
        .querySelector(img)
        .removeAttribute('hidden');
}
```


### Continued development

I want know to continue getting better in Js and improve my level of proficiency when it comes to web development.



### Useful resources

- [Scrimba resource 1](https://scrimba.com/learn/spacetravel/) - This resource provided me with a wonderful instructor known as Kevin Powell who did a great job by showing good practices and tips to build more responsive websites.




## Author

- Website - [Nick Onyi](https://nickonyi.github.io/Space-tourism-website/)
- Frontend Mentor - [@nickonyi](https://www.frontendmentor.io/profile/nickonyi)
- Twitter - [@NickDrew30](https://twitter.com/NickDrew30)



## Acknowledgments

This project was completed successfully with the help of Kevin Powell in conjunction with Scrimba. I feel like my dev skills are on the next level due to the fact Kevin Powell- an excellent teacher by the way exposed me to new development skills I had not encountered before. Through him challenging me and not entirely holding my hand all the way, giving me a push where needed, I was able to complete this wonderful project. This has been an exciting journey and I can’t wait to get even better further along my development journey.


