window.onload = function () {

  var total_cost_order = 0;
  var total_cost_single = 0;
  function process(m) {

    var pass_type = document.getElementById("choice_of_ticket").value;
    var adult_tickets = document.getElementById("ad_ticket").value;
    var duration = document.querySelector(
      '#duration input[type="radio"]:checked'
    ).value;
    var annualpass = document.getElementById("annualpass").value;
    var foodtoken = document.getElementById("foodtoken").value;

    var ad_tkt_price;
    var child_tkt_price;
    var total_tkt_price = 0;
    var duration_cost = 0;
    var total_cost;
    var annualpass_cost = 0;
    var foodtoken_cost = 0;

    // if (annualpass.checked) {	// check if annualpass checked
    //     annualpass = "yes";
    // } else {
    //     annualpass = "no";
    // }

    // if (foodtoken.checked) {	// check if foodtoken checked
    //     foodtoken = "yes";
    // } else {
    //     foodtoken = "no";
    // }

    var total_child_price = 0;
    if (pass_type == "local_pass") {
      // set passtype prices - if local

      var child_tickets_10 = document.getElementById("ch_ticket_10").value;
      var child_tickets_6 = document.getElementById("ch_ticket_6").value;

      ad_tkt_price = eval(adult_tickets) * 2500;
      child_tkt_price_10 = eval(child_tickets_10) * 1000;
      child_tkt_price_6 = eval(child_tickets_6) * 500;

      if (duration == "halfday") {
        // Duration cost
        duration_cost =
          eval(adult_tickets) + eval(child_tickets_10) + eval(child_tickets_6);
        duration_cost = duration_cost * 250;
      } else if (duration == "fullday") {
        // Duration cost
        duration_cost =
          eval(adult_tickets) + eval(child_tickets_10) + eval(child_tickets_6);
        duration_cost = duration_cost * 500;
      }
      total_child_price = child_tkt_price_6 + child_tkt_price_10;
      total_tkt_price =
        ad_tkt_price + child_tkt_price_10 + child_tkt_price_6 + duration_cost;
    } else {
      // if foreigner

      var child_tickets = document.getElementById("ch_ticket").value;

      ad_tkt_price = eval(adult_tickets) * 5000;
      child_tkt_price = eval(child_tickets) * 2500;

      if (duration == "3hours") {
        // Duration cost
        duration_cost = eval(adult_tickets) + eval(child_tickets);
        duration_cost = duration_cost * 1000;
      } else if (duration == "halfday") {
        // Duration cost
        duration_cost = eval(adult_tickets) + eval(child_tickets);
        duration_cost = duration_cost * 500;
      } else if (duration == "fullday") {
        // Duration cost
        duration_cost = eval(adult_tickets) + eval(child_tickets);
        duration_cost = duration_cost * 1000;
      }
      total_child_price = child_tkt_price;
      total_tkt_price = ad_tkt_price + child_tkt_price + duration_cost;
    } // set passtype prices

    annualpass_cost = eval(annualpass) * 5000;

    foodtoken_cost = eval(foodtoken) * 500;

    console.log(total_tkt_price, annualpass_cost, foodtoken_cost)
    total_cost = total_tkt_price + annualpass_cost + foodtoken_cost; // Final total

    total_cost_single = total_cost


    if (total_tkt_price === 0) {
      // Stop running the function if num of tickets is zero
      alert("Please add the number of tickets you need");
      p3.innerText = total_cost;
      p1.innerText = 0;

    } else {
      // set the values
      var current_order = document.getElementById("p1").innerText;
      var current_order_cost = document.getElementById("p3").innerText;



      p1.innerText = 1; //current order
      p3.innerText = total_cost; //current order cost


      // console.log(total_cost, current_order_cost)
    }

    m.preventDefault();
  }

  localPassBinding();

  document.getElementById("3days").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("halfday").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("fullday").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("annualpass").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("foodtoken").addEventListener(
    "change",
    function (e) {
      process(e);
    },
    false
  );

  document.getElementById("add_order").addEventListener(
    "click",
    function (e) {
      document.getElementById("p1").innerText = 0;
      document.getElementById("p3").innerText = 0;


      var overall_order = document.getElementById("p2").innerText;
      var current_order_cost = document.getElementById("p3").innerText;
      total_cost_order = total_cost_order + total_cost_single


      document.getElementById("p2").innerText = eval(overall_order) + 1; //overall order
      document.getElementById("p4").innerText = eval(current_order_cost) + total_cost_order; //overall order cost

      document.getElementById("choice_of_ticket").value = "local_pass";
      document.getElementById("ad_ticket").value = 0;
      document.getElementsByClassName("#numtickets input").value = 0;
      document.getElementById("3days").checked = true;
      document.getElementById("annualpass").value = 0;
      document.getElementById("foodtoken").value = 0;






      e.preventDefault();
    },
    false
  );

  // place order onclick
  document.getElementById("place_order").addEventListener(
    "click",
    function (e) {
      document.getElementById("p1").innerText = 0;
      document.getElementById("p2").innerText = 0;
      document.getElementById("p3").innerText = 0;
      document.getElementById("p4").innerText = 0;

      total_cost_order = 0;
      total_cost_single = 0;
      document.getElementById("choice_of_ticket").value = "local_pass";
      document.getElementById("ad_ticket").value = 0;
      document.getElementsByClassName("#numtickets input").value = 0;
      document.getElementById("3days").checked = true;
      document.getElementById("annualpass").value = 0;
      document.getElementById("foodtoken").value = 0;

      var train_name = document.getElementById("train_name").innerText;

      document.getElementById("choice_of_ticket").value = "local_pass";

      alert(
        "Thank you for choosing to travel with " +
        train_name +
        " . We look forward to hosting you."
      );

      var dropdowns =
        '<label for="ad_ticket"> No. Of Tickets(Adult)</label> <input type="number" id="ad_ticket" name="ad_ticket" style="width: 120px; height: 22px;" min="0" max="200" value="0"> <label for="ch_ticket_10"> No. Of Tickets(Child - Below 15 yYrs)</label> <input type="number" id="ch_ticket_10" name="ch_ticket_10" style="width: 120px; height: 22px;" min="0" max="200" value="0"> <label for="ch_ticket_6"> No. Of Tickets(Child - Below 6 Yrs)</label> <input type="number" id="ch_ticket_6" name="ch_ticket_6" style="width: 120px; height: 22px;" min="0" max="200" value="0">';
      document.getElementById("numtickets").innerHTML = dropdowns;

      localPassBinding();
      e.preventDefault();
    },
    false
  );

  // Child pass dropdown display

  document.getElementById("choice_of_ticket").onchange = function () {
    var val = document.getElementById("choice_of_ticket").value;

    if (val == "local_pass") {
      var dropdowns =
        '<label for="ad_ticket"> No. Of Tickets(Adult)</label> <input type="number" id="ad_ticket" name="ad_ticket" style="width: 120px; height: 22px;" min="0" max="200" value="0"> <label for="ch_ticket_10"> No. Of Tickets(Child - Below 15 yYrs)</label> <input type="number" id="ch_ticket_10" name="ch_ticket_10" style="width: 120px; height: 22px;" min="0" max="200" value="0"> <label for="ch_ticket_6"> No. Of Tickets(Child - Below 6 Yrs)</label> <input type="number" id="ch_ticket_6" name="ch_ticket_6" style="width: 120px; height: 22px;" min="0" max="200" value="0">';
      document.getElementById("numtickets").innerHTML = dropdowns;

      localPassBinding();
    } else {
      var dropdowns =
        '<label for="ad_ticket"> No. Of Tickets(Adult)</label> <input type="number" id="ad_ticket" name="ad_ticket" style="width: 120px; height: 22px;" min="0" max="200" value="0"> <label for="ch_ticket"> No. Of Tickets(Child)</label> <input type="number" id="ch_ticket" name="ch_ticket" style="width: 120px; height: 22px;" min="0" max="200" value="0">';

      document.getElementById("numtickets").innerHTML = dropdowns;

      foreignPassBinding();
    }
  };

  function localPassBinding() {
    document.getElementById("ad_ticket").addEventListener(
      "change",
      function (a) {
        process(a);
      },
      false
    );
    // Add to cart onclick

    document.getElementById("ch_ticket_10").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );

    document.getElementById("ch_ticket_6").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );
  }
  function foreignPassBinding() {
    document.getElementById("ad_ticket").addEventListener(
      "change",
      function (a) {
        process(a);
      },
      false
    );
    // Add to cart onclick

    document.getElementById("ch_ticket").addEventListener(
      "change",
      function (e) {
        process(e);
      },
      false
    );
  }




  var inputs = [document.getElementById("name"), document.getElementById("num"), document.getElementById("email"),
  document.getElementById("exp"), document.getElementById("cvc")];

  var error;

  for (var i = 0; i < inputs.length; i++) {
    var submit = document.getElementById("sub").addEventListener("click", btn_sub)

    function btn_sub(e) {
      if (inputs[i].value == "") {
        error = "please enter all fields"
        alert(error)
      }
      else {
        alert("thank you")
      }




    }

  }

  /////// Donation///////



  document.getElementById("sub").addEventListener("click", btnclick)

  function btnclick(e) {

    var getSelectedValue = document.querySelector('input[name="amount"]:checked');
    if (getSelectedValue != null) {
      var name = document.getElementById("name").value
      var num = document.getElementById("num").value
      var email = document.getElementById("email").value
      var exp = document.getElementById("exp").value
      var cvc = document.getElementById("cvc").value

      if (name == "") {
        alert("Enter a name")
      }

      if (num == "") {
        alert("Enter card number")
      }

      if (email == "") {
        alert("Enter email")
      }

      if (exp == "") {
        alert("Enter expiry number")
      }

      if (cvc == "") {
        alert("Enter cvc number")

      }
      alert("Thank you for your donation")


    }
    else {
      alert("No amount has been selected");





    }
    var radio = document.querySelector('input[type=radio][name=amount]:checked');
    radio.checked = false;



    document.getElementById("name").value = "";
    document.getElementById("num").value = "";
    document.getElementById("email").value = "";
    document.getElementById("exp").value = "";
    document.getElementById("cvc").value = "";







    e.preventDefault()


  }




};



















