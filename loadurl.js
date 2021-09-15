"use strict";

window.onload=function()
{
    let sitename=document.getElementById("sitename")
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let domain=(new URL(url));
        domain = domain.hostname.replace('www.','');
        sitename.innerHTML=domain;
       
    });
}

