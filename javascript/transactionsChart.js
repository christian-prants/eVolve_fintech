const data = {
  labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  datasets: [{
    label: 'Debitado',
    data: [-184.0, -121.0, -67.0, -9.0, -124.0, -3.0, -90.0, -100.87, -345.32, -12.0, -11.0, -546.98],
    fill: false,
    backgroundColor: ['#F55D3E'],
    borderColor: ['#F55D3E'],
    borderWidth: 1,
    tension: 0.2
  },
  {
    label: 'Creditado',
    data: [244.0, 21.0, 347.0, 14.0, 322.0, 12.0, 230.0, 600.87, 345.32, 52.0, 31.0, 546.98],
    fill: false,
    backgroundColor: ['#8AF17E'],
    borderColor: ['#8AF17E'],
    borderWidth: 1,
    tension: 0.2
  }]    
};

const config = {
  type: 'line',
  data,
  options: {
      responsive: true,
      plugins: {
      title: {
          display: true,
          text: 'transações por mês'
      },
      },
      interaction: {
      mode: 'index',
      intersect: true
      },
      scales: {
      /*x: {
          display: true,
          title: {
              display: true,
              text: 'mês'
          }
      },
      y: {
          display: true,
          title: {
              display: true,
              text: 'valores'
          }
      }*/
    }
  }   
};

const transactionsChart = new Chart(
  document.getElementById('transactionsChart'),
  config
);