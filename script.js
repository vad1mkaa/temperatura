document.addEventListener('DomContentLoaded', () => {
    const dateE2 = document.getElementById("date");
    const minE2 = document.getElementById("min");
    const maxE2 = document.getElementById("max");

    const tbody = document.querySelector("tbody");
    const avg_summary = document.getElementById("avgAll");
    const add_btn = document.querySelector("btn");

    if (!dateE2 || !minE2 || !maxE2 || !tbody || !avg_summary || !add_btn) {
        console.warn("Trūkst obligatais elements. ");
        return;
        
    }
})
