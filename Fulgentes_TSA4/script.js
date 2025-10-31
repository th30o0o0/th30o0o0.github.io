// Array to store users
let users = [];

// Function to add a new user
function addUser(user) {
  users.push(user);
  updateTable();
}

// Function to update the table dynamically
function updateTable() {
  const tbody = document.querySelector("#userTable tbody");
  tbody.innerHTML = ""; // clear previous data

  users.forEach((user) => {
    const row = document.createElement("tr");
    for (let key in user) {
      const cell = document.createElement("td");
      cell.textContent = user[key];
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  });
}

// Function to show error messages
function showError(id, show) {
  const error = document.getElementById(id);
  error.style.display = show ? "block" : "none";
}

// Save Button 
document.getElementById("saveBtn").addEventListener("click", function() {
  const idNumber = document.getElementById("idNumber").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const middleName = document.getElementById("middleName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;

  // Validation
  let valid = true;
  showError("idError", idNumber === "");
  showError("firstError", firstName === "");
  showError("lastError", lastName === "");
  showError("genderError", gender === "");
  showError("birthError", birthday === "");

  if (idNumber === "" || firstName === "" || lastName === "" || gender === "" || birthday === "") {
    valid = false;
  }

  // Stop if validation fails
  if (!valid) return; 

  // Create user object
  const newUser = { idNumber, firstName, middleName, lastName, gender, birthday };
  addUser(newUser);

  // Clear form fields and hide errors
  document.getElementById("signupForm").reset();
  document.querySelectorAll(".error").forEach(e => e.style.display = "none");
});

// Show Summary Button
document.getElementById("showSummary").addEventListener("click", () => {
  const totalUsers = users.length;
  if (totalUsers === 0) {
    alert("No users registered yet.");
  } else {
    alert(`Total users registered: ${totalUsers}`);
  }
});

// Clear Table Button
document.getElementById("clearTable").addEventListener("click", () => {
  if (users.length === 0) {
    alert("There are no records to clear.");
    return;
  }

  const confirmClear = confirm("Are you sure you want to clear all records?");
  if (confirmClear) {
    users = [];
    updateTable();
    alert("All records have been cleared.");
  }
});