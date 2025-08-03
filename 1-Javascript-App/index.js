const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeature = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  const list = document.createElement("ul");
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
  tabContent.innerHTML = ""; // clear existing content
  tabContent.append(list);
}

function highlightButton(btn) {
  // Clear all existing styling / highlights
  [btnWhyReact, btnCoreFeature, btnResources].forEach(button => {
    if (button) {
      button.classList.remove("active");
      button.setAttribute("aria-selected", "false");
    }
  });
  btn.classList.add("active"); // set new style / highlight
  btn.setAttribute("aria-selected", "true");
}

function handleClick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);
  if (btnId === "btn-why-react") {
    displayContent(content[0]);
  } else if (btnId === "btn-core-features") {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
  }
}

if (tabContent) {
  displayContent(content[0]); // initially show this content
}

if (btnWhyReact) btnWhyReact.addEventListener("click", handleClick);
if (btnCoreFeature) btnCoreFeature.addEventListener("click", handleClick);
if (btnResources) btnResources.addEventListener("click", handleClick);
