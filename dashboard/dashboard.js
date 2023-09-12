val1 = 25,
val2 = 35,
val3 = 45,
val4 = 55,
val5 = 65,

window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: true
    },
  },
  stroke: {
    width: 1
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};

var spark1 = {
  chart: {
    id: 'spark1',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [val1, val2, val3, val4, val5]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 1
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: true,
      show: true,
          format: 'dd MMM',
          formatter: undefined,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark2 = {
  chart: {
    id: 'spark2',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [12, 14, 2, 47, 32]
  }],
  stroke: {
    curve: 'smooth'
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  markers: {
    size: 0
  },
  colors: ['#fff'],
  tooltip: {
    x: {
      show: true
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark3 = {
  chart: {
    id: 'spark3',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [47, 45, 74, 32, 56]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: true,
      
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

var spark4 = {
  chart: {
    id: 'spark4',
    group: 'sparks',
    type: 'line',
    height: 80,
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 2,
      opacity: 0.2,
    }
  },
  series: [{
    data: [15, 75, 47, 65, 14]
  }],
  stroke: {
    curve: 'smooth'
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 20,
      bottom: 10,
      left: 110
    }
  },
  colors: ['#fff'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    x: {
      show: true,
    },
    y: {
      title: {
        formatter: function formatter(val) {
          return '';
        }
      }
    }
  }
}

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();
new ApexCharts(document.querySelector("#spark4"), spark4).render();


var optionsLine = {
  chart: {
    height: 328,
    type: 'line',
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  //colors: ["#3F51B5", '#2196F3'],
  series: [{
      name: "Automatizados",
      data: [0, 241, 441]
    },
    {
      name: "Manuais",
      data: [0, 62, 0]
    },
    {
      name: "Totais",
      data: [0, 441]
    }
  ],
  title: {
    text: 'Macro Atividades',
    size: '15px',
    align: 'left',
    offsetY: 1,
    offsetX: 20
  },
  subtitle: {
    text: 'Estatística',
    offsetY: 55,
    offsetX: 20
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
    }
  },
  grid: {
    show: true,
    padding: {
      bottom: 0
    }
  },
  labels: ['2023', '2024','2025',],
  xaxis: {
    tooltip: {
      enabled: false
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    offsetY: -20
  }
}

var chartLine = new ApexCharts(document.querySelector('#line-adwords'), optionsLine);
chartLine.render();

var optionsCircle4 = {
  chart: {
    type: 'radialBar',
    height: 350,
    width: 380,
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: '48%',
        background: 'transparent',

      },
      track: {
        show: false,
      },
      startAngle: -180,
      endAngle: 180

    },
  },
  stroke: {
    lineCap: 'round'
  },
  series: [58, 14.98, 100],
  labels: ['AUTO', 'MANU', 'TOTAL'],
  legend: {
    show: true,
    floating: true,
    position: 'right',
    offsetX: -30,
    offsetY: 250
  },

  title: {
    text: 'Macro Processos Automatizados',
    size: '15px',
    align: 'left',
    offsetY: 5,
    offsetX: -5,
},
}

var chartCircle4 = new ApexCharts(document.querySelector('#radialBarBottom'), optionsCircle4);
chartCircle4.render();


var optionsBar = {
  chart: {
    height: 380,
    type: 'bar',
    stacked: true,
  },
  plotOptions: {
    bar: {
      columnWidth: '30%',
      horizontal: true,
    },
  },
  series: [{
    name: 'DIGEST',
    data: [5, 0, 24]
  },
  
  {
    name: 'DCSC',
    data: [5, 0, 18]
  }  
  , {
    name: 'DSSI',
    data: [1, 1, 5]
  }, {
    name: 'DIRET',
    data: [7, 0, 10]
  },
  {
    name: 'DMKT',
    data: [0, 0, 8]
  }

],
  title: {
  text: 'Processos com documentos x Processos com Docs Digitais',
  size: '15px',
  align: 'left',
  offsetY: 1,
  offsetX: 2
},
  xaxis: {
    categories: ['DOC IDENTIFICADO', 'DOC DIGITAL', 'TOTAL DE PROCESSOS',],
  },
  fill: {
    opacity: 1
  },

}

var chartBar = new ApexCharts(
  document.querySelector("#barchart"),
  optionsBar
);

chartBar.render();

var optionsArea = {
  chart: {
    height: 380,
    type: 'area',
    stacked: false,
  },
  stroke: {
    curve: 'straight'
  },
  series: [{
      name: "Digest",
      data: [0, 5, 18]
    },
    {
      name: "Diret",
      data: [0, 7, 10]
    },
    {
      name: "DSSI",
      data: [0, 1, 5]
    },
    {
      name: "DCSC",
      data: [0, 5, 18]
    },
    {
      name: "DMKT",
      data: [0, 0, 8]
    }
  ],
    title: {
    text: 'Processos com documentação por Diretoria',
    size: '15px',
    align: 'left',
    offsetY: 1,
    offsetX: 2
  },
  xaxis: {
    categories: ['01/01/2023', '15/07/2023', 'Total Mapeado'],
  },
  tooltip: {
    followCursor: true
  },
  fill: {
    opacity: 1,
  },

}

var chartArea = new ApexCharts(
  document.querySelector("#areachart"),
  optionsArea
);

chartArea.render();