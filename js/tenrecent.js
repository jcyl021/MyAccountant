var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');
accountingCollection.load()


function insertingString(color, date, EvenT, ammount, spendingType) {
  return "<tr class="+color+"><td>" + date + "</td><td>" + EvenT + "</td><td>" + ammount + "</td><td>" + spendingType + "</td></tr>"
}


setTimeout(function() {
  var accountings = accountingCollection.find({}, {
    $orderBy: {
      date: -1
    },
    $limit: 10
  });
  for (i = 0; i < accountings.length; i++) {
    var colornumber=i%5;
    if (colornumber == 0) {
      var clr = "active"
    } else if (colornumber == 1) {
      var clr = "success"
    } else if (colornumber == 2) {
      var clr = "info"
    } else if (colornumber == 3) {
      var clr = "warning"
    } else if (colornumber == 4) {
      var clr = "danger"
    }
    $("#appendie").append(insertingString(clr, accountings[i].date, accountings[i].EvenT, accountings[i].ammount, accountings[i].spendingType))
  }
}, 500)
