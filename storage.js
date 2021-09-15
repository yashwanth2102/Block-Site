"use strict";

let block = document.getElementById("block")

block.onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
        let url = tabs[0].url
        let domain=(new URL(url));
        //domain = domain.hostname.replace('www.','');
        chrome.storage.sync.get(["urls"], function(result) {
                result["urls"].push(url)
                chrome.storage.sync.set({urls: result["urls"]}, function() {
                    chrome.tabs.reload()
                })
            
        })
    })
}

