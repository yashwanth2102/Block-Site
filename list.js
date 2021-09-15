"use strict";

// append blocked urls to ul in html file
window.onload = function() {
    chrome.storage.sync.get(["urls"], function(result) {
        result["urls"].sort();
        let ul = document.getElementById("lists");
        for (let i = 0; i < result["urls"].length; i++) {
            if (result["urls"][i] !== "*://ajay.com/*") {
                
                let li = document.createElement("li");
                let url = result["urls"][i];
                let domain=(new URL(url));
                domain = domain.hostname.replace('www.','');
                li.appendChild(document.createTextNode(domain));
                ul.appendChild(li);
                let remove=document.createElement("button")
                remove.classList.add("buttoncss")
                remove.onclick=function(){removeSite(result["urls"][i])};
                remove.innerHTML="Remove"
                ul.appendChild(remove)
              

            }     
        }
      })
}


function removeSite(url)
{
    chrome.storage.sync.get(["urls"],function(result){
        let index = result["urls"].indexOf(url)
        if (index !== -1) {
            result["urls"].splice(index, 1)
            chrome.storage.sync.set({urls: result["urls"]}, function() {
                chrome.tabs.reload()
            })
        }
    })
}
