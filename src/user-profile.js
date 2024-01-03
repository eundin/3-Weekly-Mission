const gnb = document.querySelector(".gnb");
const loginBtn = document.querySelector(".login");
const headerUserImg = document.querySelector(".header-user-img");
const headerUserName = document.querySelector(".header-user-name");
const headerUserFolder = document.querySelector(".header-user-folder");
const sectionImgs = document.querySelectorAll(".section-img");
const sectionImgsLink = document.querySelectorAll(".section-img-link");

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  userData();
  userFolderData();
}

async function userData() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const userDataObj = await response.json();
    loginBtn.classList.add("hide");
    makeElement(userDataObj);
  } catch {
    console.log("error");
  }
}

async function userFolderData() {
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const userDataObj = await response.json();
    console.log(userDataObj);
    makeHeaderUserData(userDataObj);
    showImgs(userDataObj);
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
  headerUserImg.src = userDataObj.profileImageSource;
  headerUserName.innerText = `@${userDataObj.name}`;
}

function makeHeaderUserData(userFolderData) {
  headerUserFolder.innerText = userFolderData.folder.name;
}

function showImgs(userFolderData) {
  const folderLinks = userFolderData.folder.links;
  console.log(folderLinks);
  folderLinks.forEach((element, i) => {
    sectionImgs[i].src = element.imageSource;
    sectionImgsLink[i].href = element.url;
  });
}
