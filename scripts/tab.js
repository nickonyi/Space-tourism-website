const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;
tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach(tab => {
    tab.addEventListener("click", changeTabPanel);
});

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