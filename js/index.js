const panelBtn = document.getElementById("panel-btn");
const panel = document.getElementById("panel");

function hamburguerMenu(panelBtn, panel) {
    panelBtn.addEventListener("click", () => {
        panel.classList.toggle("is-active");
        panelBtn.classList.toggle("is-active");
    });

    document.addEventListener("click", (e) => {
        if (e.target.matches(".panel__section")) {
            panel.classList.remove("is-active");
            panelBtn.classList.remove("is-active");
        }
    });
}

hamburguerMenu(panelBtn, panel);
