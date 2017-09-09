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
      occasion = "Dining"
    } else if ($("#apparel").prop("checked")) {
      occasion = "Apparel"
    } else if ($("#residential").prop("checked")) {
      occasion = "Residential"
    } else if ($("#transportation").prop("checked")) {
      occasion = "Transportation"
    } else if ($("#education").prop("checked")) {
      occasion = "Education"
    } else if ($("#entertainment").prop("checked")) {
      occasion = "Entertainment"
    } else {
      occasion = " "
    }
    console.log(occasion)
    var newSpending = {
      date: $("#date").val(),
      EvenT: $("#EvenT").val(),
      ammount: $("#ammount").val(),
      spendingType: occasion
      type: "spending"
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
  } else {
    alert("必須輸入記帳內容")
  }
})



$("#income").click(function() {
if ($("#date").val() != "" && $("#EvenT").val() != "" && $("#ammount").val() != "") {
  var occasion
  if ($("#dining").prop("checked")) {
    occasion = "Dining"
  } else if ($("#apparel").prop("checked")) {
    occasion = "Apparel"
  } else if ($("#residential").prop("checked")) {
    occasion = "Residential"
  } else if ($("#transportation").prop("checked")) {
    occasion = "Transportation"
  } else if ($("#education").prop("checked")) {
    occasion = "Education"
  } else if ($("#entertainment").prop("checked")) {
    occasion = "Entertainment"
  } else {
    occasion = " "
  }
  var newIncome = {
    date: $("#date").val(),
    EvenT: $("#EvenT").val(),
    ammount: $("#ammount").val(),
    spendingType: $("#TypE").val(),
    type: "income"
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
  accountingCollection.insert(newIncome);
  accountingCollection.save();
  alert("記帳成功 請OK")
  // console.log(accountingCollection)
} else {
  alert("必須輸入記帳內容")
}
})
})
}
