// import the data from data.js
const tableData = data;

// Referemce the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");


    // forEach is same as for loop, but works only with arrays
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // to find the <tbody> tag within the HTML and add a table row ("tr")
        // Append a row to the table body
        let row = tbody.append("tr");
    // using Object.values, we're telling JavaScript to reference one object 
    //  from the array of UFO sightings
    // We want the values to go into the dataRow.
    //11.5.2. forEach((val) to specify that we want one object per row.
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}