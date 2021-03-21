// ==UserScript==
// @name         Play in Scratch 2.0 | @JuegOStrower
// @namespace    https://juegostrower.tk/scratch2/
// @homepage     https://juegostrower.tk
// @version      1.0
// @description  Play any Scratch project with the Scratch 2.0 Player!
// @author       JuegOStrower
// @include      https://scratch.mit.edu/projects/*
// @exclude      https://scratch.mit.edu/projects/*/*/
// @grant        none
// @icon         https://www.juegostrower.tk/favicon.png
// @icon64       https://www.juegostrower.tk/favicon.png
// @supportURL   https://github.com/JuegOStrower/scratch2/issues
// ==/UserScript==

//THIS SCRIPT WAS DEVELOPED BY @JUEGOSTROWER AND IT IS UNDER THE MIT LICENCE. IF YOU ARE GOING TO COPY IT YOU MUST GIVE CREDIT, THIS IS NOT COPYLEFT (AS SCRATCH)
try {
    var checkExist = setInterval(function() {
       if (document.getElementsByClassName("flex-row action-buttons")[0]) {
           document.getElementsByClassName("flex-row action-buttons")[0].innerHTML+='<button id="juegostrower-scratch2" class="button action-button" title="By @JuegOStrower">Scratch 2.0</button>';
           document.getElementById("juegostrower-scratch2").addEventListener("click", changePlayer);
            clearInterval(checkExist);
        }
    }, 100);
} catch(e) {
    alert("Open in Scratch 2.0 found an unxpected error adding the button. Please comment on the @JuegOStrower (the developer, aka me) profile to help to fix the problem.");
    console.log(e);
}

function changePlayer(){
    try {
        if(!document.getElementById("juegostrower-scratch2-player")){
            var object = document.createElement('object');
            object.innerHTML= '<div id="juegostrower-scratch2-player"><object class="guiPlayer" style="width: 482px;margin: auto;height: 401px;display:block" data="//cdn.scratch.mit.edu/scratchr2/static/__f3d308221474a0b7409d8752452b362b__/Scratch.swf" type="application/x-shockwave-flash"><param name="allowscriptaccess" value="always"><param name="allowfullscreen" value="true"><param name="wmode" value="direct"><param name="menu" value="false"><param name="flashvars" value="autostart=false&amp;urlOverrides=%7B%22sitePrefix%22%3A%22https%3A%2F%2Fscratch.mit.edu%2F%22%2C%22siteCdnPrefix%22%3A%22http%3A%2F%2Fcdn.scratch.mit.edu%2F%22%2C%22assetPrefix%22%3A%22http%3A%2F%2Fassets.scratch.mit.edu%2F%22%2C%22assetCdnPrefix%22%3A%22http%3A%2F%2Fcdn.assets.scratch.mit.edu%2F%22%2C%22projectPrefix%22%3A%22http%3A%2F%2Fprojects.scratch.mit.edu%2F%22%2C%22projectCdnPrefix%22%3A%22http%3A%2F%2Fcdn.projects.scratch.mit.edu%2F%22%2C%22internalAPI%22%3A%22internalapi%2F%22%2C%22siteAPI%22%3A%22site-api%2F%22%2C%22staticFiles%22%3A%22scratchr2%2Fstatic%2F%22%7D&amp;inIE=false&amp;project_id='+window.location.href.replace(/\D/g,'').substring(0,15)+'&amp;project_title=By%JuegOStrower&amp;project_notes=&amp;project_credits=&amp;project_creator=JuegOStrower&amp;project_modifiedDate=2018-1-10%2002%3A05%3A20&amp;project_isPublished=false&amp;project_comments_allowed=true"></object></div>';
            document.getElementsByClassName("guiPlayer")[0].appendChild(object.firstChild);
            document.getElementsByClassName("flex-row project-notes")[0].innerHTML+='<div style="padding-top: 8px;">Scratch 2.0 Player By <a href="/users/JuegOStrower/">@JuegOStrower</a></div>';
            window.addEventListener("keyup", function (event) {if(document.getElementsByClassName("stage-wrapper_stage-wrapper_2bejr box_box_2jjDp")[0].style.display){event.stopPropagation();}}, true);
        }
        if(document.getElementsByClassName("stage-wrapper_stage-wrapper_2bejr box_box_2jjDp")[0].style.display){
            document.getElementById("juegostrower-scratch2").innerText = "Scratch 2.0";
            document.getElementsByClassName("stage-wrapper_stage-wrapper_2bejr box_box_2jjDp")[0].style.removeProperty("display");
            document.getElementById("juegostrower-scratch2-player").style="position: absolute !important;top: -9999px !important;left: -9999px !important;";
        } else {
            document.getElementById("juegostrower-scratch2").innerText = "Scratch 3.0";
            document.getElementsByClassName("stage-wrapper_stage-wrapper_2bejr box_box_2jjDp")[0].style.display="none";
            document.getElementById("juegostrower-scratch2-player").removeAttribute("style");
        }
    } catch(e) {
        alert("Open in Scratch 2.0 found an unxpected error changing the player. Please comment on the @JuegOStrower (the developer, aka me) profile to help to fix the problem.");
        console.log(e);
    }
}
