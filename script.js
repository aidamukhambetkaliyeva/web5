const userProfile = {
  name: "Aida",
  birthYear: 2008,
  isDeveloper: true,
  hobbies: ["reading", "music"]
};

function showProfile() {
  const age = new Date().getFullYear() - userProfile.birthYear;
  const months = age * 12;
  const count = userProfile.hobbies.length;

  document.getElementById("info").textContent =
    "Name: " + userProfile.name +
    ", Age: " + age +
    ", Months: " + months +
    ", Hobbies: " + count;

  console.log("Age:", age);
  console.log("Months:", months);
  console.log("Hobbies:", count);
}

showProfile();

document.getElementById("saveBtn").addEventListener("click", function () {
  userProfile.name = document.getElementById("username").value;
  userProfile.birthYear = Number(document.getElementById("birthYear").value);
  showProfile();
});

const list = document.getElementById("list");

document.getElementById("addBtn").addEventListener("click", function () {
  const text = document.getElementById("newItem").value;
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
});

document.getElementById("removeBtn").addEventListener("click", function () {
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});