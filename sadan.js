const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const closeBtn = document.querySelector(".close-btn");

function openModal(title, description, techList) {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalTech.innerHTML = "";

  techList.forEach(tech => {
    const li = document.createElement("li");
    li.textContent = "• " + tech;
    modalTech.appendChild(li);
  });

  modal.style.display = "flex";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
