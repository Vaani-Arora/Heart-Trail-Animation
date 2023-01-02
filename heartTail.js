const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    const spanEl = document.createElement("span");

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100; //*100 so that it can be between 0 and 100
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl); //appending child in body element

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
})