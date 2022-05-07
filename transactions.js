var $ = function (id) {
    return document.getElementById(id);
}

var form = $("form");
var transDisplay = $("transDisplay");
var balanceDisplay = $("balanceDisplay");

class Transactions {
    constructor (date, description, type, amount) {
        this.date = date;
        this.description = description;
        this.type = type;
        this.amount = amount;
    }

    getTransactions() {
        for (let id of values) {
            var index = values.indexOf(id) + 1;

            transDisplay.innerHTML += ("<br>Transaction #" + index + "&emsp;Date: " + id.date + "&emsp;Description: "
            + id.desc + "<br>&emsp;Type: " + id.type + "&emsp;Amount: $" + id.amount.toFixed(2) + "<br>");
        }
        transDisplay.insertAdjacentHTML("afterbegin", "<h2>Transaction History</h2>")
    }
    getBalance() {
        var creditTotal = values
        .filter(credit => credit.type == "Credit")
        .map(cost => cost.amount)
        .reduce((accumulator, total) => accumulator + total, 0);

        var debitTotal = values
        .filter(credit => credit.type == "Debit")
        .map(cost => cost.amount)
        .reduce((accumulator, total) => accumulator + total, 0);

        var balance = parseFloat(creditTotal - debitTotal);
        this.balance = balance;
        balanceDisplay.innerHTML = ("<br><h3>Your balance is: $" + this.balance.toFixed(2) + "</h2><br>");
        return this.balance;
    }

    setWithdraw() {
        var withdraw = parseFloat($("withdraw").value);
        if (withdraw <= 0) {
            $("error1").innerHTML = "Please enter a number higher than 0.";
            return;
        } else if  (withdraw > this.balance) {
            $("error1").innerHTML = "Amount is higher than balance";
            return;
        } else {
            $("error1").innerHTML = "";

            var today = new Date().toDateString();

            var newBalance = this.newBalance - withdraw;
            this.balance = newBalance;

            values.push({date: today, description: "N/A", type: "Withdrawl", amount: withdraw});
            balanceDisplay.innerHTML = ("<h3>Your new balance is $" + newBalance.toFixed(2) + "</h3>");

            if(transDisplay) {
                transDisplay.innerHTML = "";
                this.getTransactions();
            }
        }
    }

    setDeposit() {
        var deposit = parseFloat($("deposit").value);
        if (deposit <= 0) {
            $("error2").innerHTML = "Please enter a number higher than 0";
            return;
        } else {
            $("error2").innerHTML = "";

            var today = new Date().tolocaleDateString();

            var newBalance = this.balance + deposit;
            this.balance = newBalance;

            values.push({date: today, description: "N/A", type: "Deposit", amount: deposit});
            balanceDisplay.innerHTML = ("<h3>Your new balance is $" + newBalance.toFixed(2) + "</h3");

            if(transDisplay) {
                transDisplay.innerHTML = "";
                this.getTransactions();
            }
        }
    }
}



window.onload = function() {

    fetch('http://localhost:3000/transactions')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        values = data;

        transactions.getTransactions();
        transactions.getBalance();
    })
    .catch(err => console.log(err));

    var transactions = new Transactions;

    var withdrawBtn = $("withdrawBtn");

    withdrawBtn.addEventListener("click", function() {
        transactions.setWithdraw();
    })

    var depostBtn = $("depositbtn");
    depostBtn.addEventListener("click", function() {
        transactions.setDeposit();
    });
}
