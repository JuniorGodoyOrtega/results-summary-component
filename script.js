const jsonUrl = "./data.json";

const colorsBackground = {
  Reaction: "hsl(0, 100%, 90%)",
  Memory: "hsl(39, 100%, 85%)",
  Verbal: "hsl(166, 100%, 85%)",
  Visual: "hsl(234, 85%, 90%)"
};

const colorsText = {
  Reaction: "hsl(0, 100%, 67%)",
  Memory: "hsl(39, 100%, 56%)",
  Verbal: "hsl(166, 100%, 37%)",
  Visual: "hsl(234, 85%, 45%)"
};

const summaryContainer = document.getElementById("summary-container");

fetch(jsonUrl).then((response) => response.json());
fetch(jsonUrl)
  .then((response) => response.json())
  .then((data) => {
    renderSummary(data);
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));

  function renderSummary(data) {
    data.forEach((item) => {
      const summaryItem = document.createElement('div');
      summaryItem.className = 'summary-item';
      summaryItem.style.backgroundColor = colorsBackground[item.category];
  
      const icon = document.createElement('img');
      icon.src = item.icon;
      icon.alt = `${item.category.toLowerCase()}-icon`;
      icon.className = 'summary-icon';
  
      const label = document.createElement('span');
      label.className = `${item.category.toLowerCase()}-label`;
      label.textContent = item.category;
  
      const score = document.createElement('span');
      score.className = 'score';
      score.textContent = ` ${item.score} / 100`;
  
      summaryItem.appendChild(icon);
      summaryItem.appendChild(label);
      summaryItem.appendChild(score);
  
      summaryContainer.appendChild(summaryItem);
    });
  }
