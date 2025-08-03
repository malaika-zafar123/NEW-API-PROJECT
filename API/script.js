
fetch('card.js')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("card");

    data.forEach(post => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${post.img}" alt="${post.title}" class="card-img" />
        <div class="card-content">
          <h3 >${post.title}</h3>
          <p>${post.content.substring(0, 100)}...</p>
        </div>
      `;

      card.querySelector(".card-img").addEventListener("click", () => {
        localStorage.setItem("selectedCard", JSON.stringify(post));
        window.location.href = "post.html";
      });

      container.appendChild(card);
    });
  });

  // function showModal(){
  //   const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  //   modal.show();
  // }

  function showModal() {
    const modalElement = document.getElementById('exampleModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
