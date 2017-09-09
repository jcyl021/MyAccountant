var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');
accountingCollection.load()

function insertingString(color, date, EvenT, ammount, spendingType) {
  return "<tr class=" + color + "><td>" + date + "</td><td>" + EvenT + "</td><td>" + ammount + "</td><td>" + spendingType + "</td></tr>"
}

$("#submitsearch").click(function() {
  $("#historydisplay").find("tr").remove();
  if ($("#thismonth").prop("checked")) {
    var date = new Date()
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1;
    if (month < 10) {
      month = "0" + month
    }
    var dateString = year + "-" + month + "-" + "01";
    var dateString2 = year + "-" + month + "-" + "31";
    console.log(dateString)
    console.log(dateString2)
    var accountings = accountingCollection.find({
      date: {
        $gte: dateString,
        $lte: dateString2
      }
    }, {
      $orderBy: {
        date: -1
      },
    });
    for (i = 0; i < accountings.length; i++) {
      var colornumber = i % 5;
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
      $("#historydisplay").append(insertingString(clr, accountings[i].date, accountings[i].EvenT, accountings[i].ammount, accountings[i].spendingType))
    };
    var diningcost = 0;
    var apparelcost = 0;
    var residentialcost = 0;
    var transportationcost = 0;
    var educationcost = 0;
    var entertainmentcost = 0;
    for (i = 0; i < accountings.length; i++) {
      // console.log(accountings[i].spendingType)
      if (accountings[i].spendingType == "Entertainment") {
        entertainmentcost += accountings[i].ammount / 1;
        $("#ecd").text(entertainmentcost);
      } else if (accountings[i].spendingType == "Dining") {
        diningcost += accountings[i].ammount / 1;
        $("#dcd").text(diningcost);
      } else if (accountings[i].spendingType == "Apparel") {
        apparelcost += accountings[i].ammount / 1;
        $("#acd").text(apparelcost);
      } else if (accountings[i].spendingType == "Residential") {
        residentialcost += accountings[i].ammount / 1;
        $("#rcd").text(residentialcost);
      } else if (accountings[i].spendingType == "Transportation") {
        transportationcost += accountings[i].ammount / 1;
        $("#tcd").text(transportationcost);
      } else if (accountings[i].spendingType == "Education") {
        educationcost += accountings[i].ammount / 1;
        $("#educd").text(educationcost);
      };
    };
    var total = entertainmentcost + diningcost + apparelcost + residentialcost + transportationcost + educationcost;
    var ecp = Math.round(entertainmentcost / total * 100) + "%";
    var dcp = Math.round(diningcost / total * 100) + "%";
    var acp = Math.round(apparelcost / total * 100) + "%";
    var rcp = Math.round(residentialcost / total * 100) + "%";
    var tcp = Math.round(transportationcost / total * 100) + "%";
    var educp = Math.round(educationcost / total * 100) + "%";
    $("#ecp").text(ecp);
    $("#dcp").text(dcp);
    $("#acp").text(acp);
    $("#rcp").text(rcp);
    $("#tcp").text(tcp);
    $("#educp").text(educp);
    $("#total").text(total)

  } else if ($("#specific").prop("checked")) {
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();
    var accountings = accountingCollection.find({
      date: {
        $gte: startTime,
        $lte: endTime
      }
    }, {
      $orderBy: {
        date: -1
      },
    });
    for (i = 0; i < accountings.length; i++) {
      var colornumber = i % 5;
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
      $("#historydisplay").append(insertingString(clr, accountings[i].date, accountings[i].EvenT, accountings[i].ammount, accountings[i].spendingType));
      var diningcost = 0;
      var apparelcost = 0;
      var residentialcost = 0;
      var transportationcost = 0;
      var educationcost = 0;
      var entertainmentcost = 0;
      for (i = 0; i < accountings.length; i++) {
        // console.log(accountings[i].spendingType)
        if (accountings[i].spendingType == "Entertainment") {
          entertainmentcost += accountings[i].ammount / 1;
          $("#ecd").text(entertainmentcost);
        } else if (accountings[i].spendingType == "Dining") {
          diningcost += accountings[i].ammount / 1;
          $("#dcd").text(diningcost);
        } else if (accountings[i].spendingType == "Apparel") {
          apparelcost += accountings[i].ammount / 1;
          $("#acd").text(apparelcost);
        } else if (accountings[i].spendingType == "Residential") {
          residentialcost += accountings[i].ammount / 1;
          $("#rcd").text(residentialcost);
        } else if (accountings[i].spendingType == "Transportation") {
          transportationcost += accountings[i].ammount / 1;
          $("#tcd").text(transportationcost);
        } else if (accountings[i].spendingType == "Education") {
          educationcost += accountings[i].ammount / 1;
          $("#educd").text(educationcost);
        };
      };
      var total = entertainmentcost + diningcost + apparelcost + residentialcost + transportationcost + educationcost;
      var ecp = Math.round(entertainmentcost / total * 100) + "%";
      var dcp = Math.round(diningcost / total * 100);
      var acp = Math.round(apparelcost / total * 100) + "%";
      var rcp = Math.round(residentialcost / total * 100) + "%";
      var tcp = Math.round(transportationcost / total * 100) + "%";
      var educp = Math.round(educationcost / total * 100) + "%";
      $("#ecp").text(ecp);
      $("#dcp").text(dcp);
      $("#acp").text(acp);
      $("#rcp").text(rcp);
      $("#tcp").text(tcp);
      $("#educp").text(educp);
      $("#total").text(total)
    }
  }
})
