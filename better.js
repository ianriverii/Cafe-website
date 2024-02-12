function toggleSection() {
    let section = document.getElementById("toggleSection");
    section.classList.toggle("visible");

    let footer = document.getElementById("footer");
    footer.style.height = (section.classList.contains("visible")) ? "100px" : "10px";

    let button = document.getElementById("heartButton");
    button.classList.toggle("moved", section.classList.contains("visible"));
}