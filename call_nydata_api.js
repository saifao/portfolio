(async () => {
  var needle = require("needle");
  var fs = require("fs");
  var { Parser } = require("json2csv");

  const endpointUrl =
    "https://data.ny.gov/resource/jshw-gkgu.json?$where=accident_date between '2022-01-01T00:00:00' and '2022-12-31T23:45:00'&$limit=50000&$offset=250000";

  try {
    const res = await needle("get", endpointUrl);

    //console.log(res.body);

    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(res.body);
    fs.writeFileSync("workers_comp_claims2022_6.csv", csv);
    console.log("CSV file has been created.");
  } catch (e) {
    console.log(e);
  }
})();
