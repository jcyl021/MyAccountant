var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting');
accountingCollection.load()


$("#do").click(showmodal)

function showmodal() {
  $("#myModal").modal("show")
}



$("#spending").click(function() {
  if ($("#date").val() != "" && $("#EvenT").val() != "" && $("#ammount").val() != "") {
    var occasion
    if ($("#dining").prop("checked")) {
      occasion = "食"
    } else if ($("#apparel").prop("checked")) {
      occasion = "衣"
    } else if ($("#residential").prop("checked")) {
      occasion = "住"
    } else if ($("#transportation").prop("checked")) {
      occasion = "行"
    } else if ($("#education").prop("checked")) {
      occasion = "育"
    } else if ($("#entertainment").prop("checked")) {
      occasion = "樂"
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
  } else{
    alert("必須輸入記帳內容")
  }
})



$("#income").click(function() {
  var newIncome = {
    date: $("#date").val(),
    EvenT: $("#EvenT").val(),
    ammount: $("#ammount").val(),
    spendingType: $("#TypE").val(),
  }
})
