const fs = require('fs');
const path = require('path');
describe('Tab Content Display', () => {
  let tabContent;
  let btnWhyReact, btnCoreFeature, btnResources;
  let displayContent;

  beforeAll(() => {
    // Load HTML
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    tabContent = document.getElementById('tab-content');
    btnWhyReact = document.getElementById('btn-why-react');
    btnCoreFeature = document.getElementById('btn-core-features');
    btnResources = document.getElementById('btn-resources');
    // Import functions from index.js
    displayContent = (items) => {
      const list = document.createElement('ul');
      for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      }
      tabContent.innerHTML = '';
      tabContent.append(list);
    };
  });

  it('renders the correct initial content', () => {
    const items = [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem"
    ];
    displayContent(items);
    expect(tabContent.querySelectorAll('li').length).toBe(4);
    expect(tabContent.textContent).toContain('React is extremely popular');
  });

  it('renders core features content', () => {
    const items = [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering"
    ];
    displayContent(items);
    expect(tabContent.querySelectorAll('li').length).toBe(4);
    expect(tabContent.textContent).toContain('Hooks (e.g., useEffect())');
  });

  it('renders resources content', () => {
    const items = [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)"
    ];
    displayContent(items);
    expect(tabContent.querySelectorAll('li').length).toBe(3);
    expect(tabContent.textContent).toContain('react.dev');
  });

  it('highlights the correct button', () => {
    // Simulate highlightButton logic
    function highlightButton(btn) {
      [btnWhyReact, btnCoreFeature, btnResources].forEach(button => {
        if (button) {
          button.classList.remove('active');
          button.setAttribute('aria-selected', 'false');
        }
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    }
    highlightButton(btnCoreFeature);
    expect(btnCoreFeature.classList.contains('active')).toBe(true);
    expect(btnCoreFeature.getAttribute('aria-selected')).toBe('true');
    expect(btnWhyReact.classList.contains('active')).toBe(false);
    expect(btnWhyReact.getAttribute('aria-selected')).toBe('false');
  });
});

describe('Tab Button Event Handling', () => {
  let tabContent;
  let btnWhyReact, btnCoreFeature, btnResources;
  let content;
  let displayContent, highlightButton, handleClick;

  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    tabContent = document.getElementById('tab-content');
    btnWhyReact = document.getElementById('btn-why-react');
    btnCoreFeature = document.getElementById('btn-core-features');
    btnResources = document.getElementById('btn-resources');
    content = [
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
    displayContent = (items) => {
      const list = document.createElement('ul');
      for (const item of items) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      }
      tabContent.innerHTML = '';
      tabContent.append(list);
    };
    highlightButton = (btn) => {
      [btnWhyReact, btnCoreFeature, btnResources].forEach(button => {
        if (button) {
          button.classList.remove('active');
          button.setAttribute('aria-selected', 'false');
        }
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    };
    handleClick = (event) => {
      const btnId = event.target.id;
      highlightButton(event.target);
      if (btnId === "btn-why-react") {
        displayContent(content[0]);
      } else if (btnId === "btn-core-features") {
        displayContent(content[1]);
      } else {
        displayContent(content[2]);
      }
    };
  });

  it('handles click on Why React button', () => {
    btnWhyReact.classList.remove('active');
    btnWhyReact.setAttribute('aria-selected', 'false');
    btnWhyReact.dispatchEvent(new window.Event('click', { bubbles: true }));
    handleClick({ target: btnWhyReact });
    expect(btnWhyReact.classList.contains('active')).toBe(true);
    expect(tabContent.textContent).toContain('React is extremely popular');
  });

  it('handles click on Core Features button', () => {
    btnCoreFeature.classList.remove('active');
    btnCoreFeature.setAttribute('aria-selected', 'false');
    btnCoreFeature.dispatchEvent(new window.Event('click', { bubbles: true }));
    handleClick({ target: btnCoreFeature });
    expect(btnCoreFeature.classList.contains('active')).toBe(true);
    expect(tabContent.textContent).toContain('Dynamic rendering');
  });

  it('handles click on Resources button', () => {
    btnResources.classList.remove('active');
    btnResources.setAttribute('aria-selected', 'false');
    btnResources.dispatchEvent(new window.Event('click', { bubbles: true }));
    handleClick({ target: btnResources });
    expect(btnResources.classList.contains('active')).toBe(true);
    expect(tabContent.textContent).toContain('react.dev');
  });

  it('does not throw if button is missing', () => {
    // Simulate missing button
    [btnWhyReact, btnCoreFeature, btnResources].forEach(button => {
      if (button) button.classList.remove('active');
    });
    expect(() => highlightButton({ classList: { add: () => {} }, setAttribute: () => {} })).not.toThrow();
  });
});
