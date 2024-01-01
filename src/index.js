const gnb = document.querySelector(".gnb");
const loginBtn = document.querySelector(".login");

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  userData();
}

async function userData() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const userDataObj = await response.json();
    console.log(userDataObj);
    loginBtn.classList.add("hide");
    makeElement(userDataObj);
  } catch {
    console.log("error");
  }
}

function makeElement(userDataObj) {
  const a = document.createElement("a");
  a.classList.add("user-profile");
  const imgDiv = document.createElement("img");
  imgDiv.src = userDataObj.profileImageSource;
  const span = document.createElement("span");
  span.innerText = userDataObj.email;
  a.appendChild(imgDiv);
  a.appendChild(span);
  gnb.appendChild(a);
}
