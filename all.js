document.addEventListener("DOMContentLoaded", function() {
  let formContainer = document.getElementById("form-container");

  for (let i = 0; i < 20; i++) {
    let form = document.createElement("form");

    let nameInput = document.createElement("input");
    nameInput.id = "Name" + i;
    nameInput.classList.add("Item");
    nameInput.placeholder = "Name";
    nameInput.type = "text";
    form.appendChild(nameInput);

    let amountInput = document.createElement("input");
    amountInput.id = "Amount" + i;
    amountInput.classList.add("Item");
    amountInput.placeholder = "Amount";
    amountInput.type = "number";
    form.appendChild(amountInput);

    let paidCheckbox = document.createElement("input");
    paidCheckbox.id = "Paid" + i;
    paidCheckbox.classList.add("Item");
    paidCheckbox.type = "checkbox";
    form.appendChild(paidCheckbox);

    // Create a Save button
    let saveButton = document.createElement("button");
    saveButton.id="button"
    saveButton.textContent = "Save";
    saveButton.type = "button"; // Prevent form submission on clicking Save
    form.appendChild(saveButton);

    formContainer.appendChild(form);

    // Event listener for the Save button
    saveButton.addEventListener("click", function() {
      let name = document.getElementById("Name" + i).value;
      let amount = document.getElementById("Amount" + i).value;
      let paid = document.getElementById("Paid" + i).checked;

      if (isNaN(amount) || amount === "") {
        alert("Please enter a valid amount.");
        return;
      }

      let user = {
        name: name,
        amount: amount,
        paid: paid
      };

      localStorage.setItem("user" + i, JSON.stringify(user));
      alert("Data saved successfully for form " + (i + 1));
    });
  }

  // Retrieve saved data from local storage
  for (let i = 0; i < 20; i++) {
    let savedUser = JSON.parse(localStorage.getItem("user" + i));

    if (savedUser) {
      document.getElementById("Name" + i).value = savedUser.name;
      document.getElementById("Amount" + i).value = savedUser.amount;
      document.getElementById("Paid" + i).checked = savedUser.paid;
    }
  }
});
