function contactLoad() {
  const content = document.getElementById("content");
  const contactInfoBox = document.createElement("div");
  content.appendChild(contactInfoBox);

  const address = document.createElement("div");
  address.textContent = "Fake Street at Fake Cross, 0123456";
  const manager = document.createElement("div");
  manager.textContent = "Manager, and Chef, and Owner";
  const contact = document.createElement("div");
  contact.textContent = "01012345678";

  contactInfoBox.appendChild(address);
  contactInfoBox.appendChild(manager);
  contactInfoBox.appendChild(contact);
}

export default contactLoad;
