const jsonUrl = "./data.json";

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
  
      const icon = document.createElement('img');
      icon.src = item.icon;
      icon.alt = `${item.category} icon`;
      icon.className = 'summary-icon';
  
      const label = document.createElement('span');
      label.className = 'label';
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
