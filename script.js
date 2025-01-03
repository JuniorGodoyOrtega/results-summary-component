const jsonUrl = "./data.json";

const colorsBackground = {
  Reaction: "hsla(0, 100%, 67%, 0.1)",
  Memory: "hsla(39, 100%, 56%, 0.1)",
  Verbal: "hsla(166, 100%, 37%, 0.1)",
  Visual: "hsla(234, 85%, 45%, 0.1)"
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
  
      const scoreNumber = document.createElement('span');
      scoreNumber.className = 'score-number';
      scoreNumber.textContent = item.score;
  
      const scoreText = document.createElement('span');
      scoreText.className = 'score-text';
      scoreText.textContent = ' / 100';
  
      score.appendChild(scoreNumber);
      score.appendChild(scoreText);
  
      summaryItem.appendChild(icon);
      summaryItem.appendChild(label);
      summaryItem.appendChild(score);
  
      summaryContainer.appendChild(summaryItem);
    });
  }  
