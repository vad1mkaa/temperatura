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


    let records = readRecordsFromTable(tbody);

    add_btn.addEventListener("click", async (e) =>{

        const date = (dateE2.value || "").trim();
        const min = parseFloat(minE2.value);
        const max = parseFloat(maxE2.value);

        const err = validateInput(date, min, max);
        if (err) {
            alert(err);
            return;
        }
       
        const newRecord = {date, min, max};
    });


    //Palīgfunkcijas
    function validateInput (date, min, max) {
        if (!date) return "Lūdzu ievadi datumu.";
        if (Number.isNaN(min)) return "Lūdzu ievadi minimālo temperatūru.";
        if (Number.isNaN(max)) return "Lūdzu ievadi maksimālo temperatūru.";
        if (min > max) return "Minimālo temperatūra nevar būt lielāka par maksimālo.";
        return null;
    }


    function readRecordsFromTable(tbodyE2) {
        const rows =Array.from(tbodyE2.querySelectorAll("tr"));

        const out = [];
        for (const row of rows) {
            const tds = row.querySelectorAll("td");
            if (tds.length < 3) continue;
            const date = (tds[0].textContent || "").trim();
            const min = parseFloat((tds[1].textContent || "").replace(",","."));
            const max = parseFloat((tds[2].textContent || "").replace(",","."));

            if (!date || Number.isNaN(min) || Number.isNaN(max)) continue;
            out.push({date, min, max});
        }
        return out;
    }
})
