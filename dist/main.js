(()=>{document.querySelector("#add").addEventListener("click",(function(){e()}));const e=()=>{const e=document.createElement("div");e.classList.add("note-input");const c=document.createElement("input");c.setAttribute("id","task"),e.appendChild(c);const d=document.createElement("button");d.setAttribute("id","cancel"),d.innerText="Cancel",e.appendChild(d);const o=document.createElement("button");o.setAttribute("id","create"),o.innerText="Create",e.appendChild(o),document.body.append(e),d.addEventListener("click",(function(){t()})),o.addEventListener("click",(function(){n()}))},t=()=>{const e=document.querySelector(".note-input");e&&document.body.removeChild(e)},n=()=>{const e=document.querySelector("#list"),n=document.createElement("li"),c=document.querySelector("#task"),d=document.createElement("button");if(d.innerText="remove",d.type="button",d.classList.add("remove"),""===c.value)alert("Add text");else{const o=document.createElement("h3");o.innerText=c.value,n.appendChild(d),n.appendChild(o),e.prepend(n),t()}d.addEventListener("click",(function(){n&&e.removeChild(n)}))}})();