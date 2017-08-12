var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');
accountingCollection.load()


$("#do").click(showmodal)

function showmodal() {
  $("#myModal").modal("show")
}



$("#spending").click(function() {
  var occasion
  if ($("#dining").prop("checked")) {
    occasion = "dining"
  } else if ($("#apparel").prop("checked")) {
    occasion= "apparel"
  } else if ($("#residential").prop("checked")) {
    occasion= "residential"
  } else if ($("#transportation").prop("checked")) {
    occasion= "transportation"
  } else if ($("#education").prop("checked")) {
    occasion= "education"
  } else if ($("#entertainment").prop("checked")) {
    occasion= "entertainment"
  } else {
    occasion = " "
  }
  var newSpending = {
    date: $("#date").val(),
    EvenT: $("#EvenT").val(),
    ammount: $("#ammount").val(),
    spendingType: occasion
  }
  $("#date").val("");
  $("#EvenT").val("");
  $("#ammount").val("");
  $("#dining").prop("checked", false);
  $("#apparel").prop("checked", false);
  $("#residential").prop("checked", false);
  $("#transportation").prop("checked", false);
  $("#education").prop("checked", false);
  $("#entertainment").prop("checked", false);
  accountingCollection.insert(newSpending);
  accountingCollection.save();
  alert("記帳成功 請OK")
  // console.log(accountingCollection)

})



$("#income").click(function() {
  var newIncome = {
    date: $("#date").val(),
    EvenT: $("#EvenT").val(),
    ammount: $("#ammount").val(),
    spendingType: $("#TypE").val(),
  }
})
