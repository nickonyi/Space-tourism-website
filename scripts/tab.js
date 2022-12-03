const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
const pics = document.querySelectorAll('picture');

let tabFocus = 0;
tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach(tab => {
    tab.addEventListener("click", changeTabPanel);
    tab.addEventListener('click', changePic);
});
pics.forEach(pic => pic.a)

function changeTabFocus(e) {
    const keyDownLeft = 37;
    const keyDownRight = 39;


    if (e.keyCode == keyDownLeft || e.keyCode == keyDownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }


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

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetContainer = targetTab.parentNode;
    const mainContainer = targetContainer.parentNode;

    mainContainer.querySelectorAll('[role="tabpanel"]').forEach(tabpanel => tabpanel.setAttribute("hidden", true));
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    console.log(mainContainer);
}

function changePic(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetContainer = targetTab.parentNode;
    const mainContainer = targetContainer.parentNode;

    mainContainer.querySelectorAll('picture').forEach(pic => pic.setAttribute('hidden', true));


}