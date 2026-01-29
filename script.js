var sum = 0;
var count = 0;

function addRow() {

    var dateInput = document.getElementById("date");
    var minInput = document.getElementById("min");
    var maxInput = document.getElementById("max");

    var date = dateInput.value;
    var min = minInput.value;
    var max = maxInput.value;

{
        alert("Aizpildi visus laukumus");
        return;
    }

    min = Number(min);
    max = Number(max);

    var avg = (min + max) / 2;

    var table = document.getElementById("table");
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = date;
    cell2.innerHTML = min;
    cell3.innerHTML = max;
    cell4.innerHTML = avg.toFixed(2);

    sum = sum + avg;
    count = count + 1;

    var avgAll = sum / count;
    document.getElementById("avgAll").innerHTML = avgAll.toFixed(2);
}