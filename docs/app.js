async function main() {
  async function hanldeCC(event) {
    event.preventDefault();

    // loading...
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    document.querySelector("#box").appendChild(spinner);

    const url = "http://127.0.0.1:3000";
    // const url = "https://gossamer-mercury-wildebeest.glitch.me";

    const formData = new FormData((form = document.querySelector("#ccForm")));

    const text = formData.get("text");

    // header content 꼭넣기
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    spinner.remove();

    const json = await response.json();

    const { image, desc } = json;

    const box = document.querySelector("#box");
    box.innerHTML = "";
    const imageTag = document.createElement("img");
    imageTag.classList.add("img-fluid");
    imageTag.src = image; // image - link
    const descTag = document.createElement("p");
    descTag.textContent = desc;
    box.appendChild(imageTag);
    box.appendChild(descTag);

    // document.querySelector("#box").textContent = JSON.stringify(json);
  }
  //   document.querySelector("#ccBtn").addEventListener("click", hanldeCC);
  document.querySelector("#ccForm").addEventListener("submit", hanldeCC);
}

document.addEventListener("DOMContentLoaded", main);
