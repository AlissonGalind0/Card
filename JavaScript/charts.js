Highcharts.ganttChart('container', {

  title: {
      text: 'Macro atividades automatizadas Meta(2023-2025)'
  },

  yAxis: {
      uniqueNames: true
  },

  navigator: {
      enabled: true,
      liveRedraw: true,
      series: {
          type: 'gantt',
          pointPlacement: 0.5,
          pointPadding: 0.25,
          accessibility: {
              enabled: true
          }
      },
      yAxis: {
          min: 0,
          max: 3,
          reversed: true,
          categories: []
      }
  },

  scrollbar: {
      enabled: true
  },

  rangeSelector: {
      enabled: true,
      selected: 0
  },

  accessibility: {
      point: {
          descriptionFormat: '{yCategory}. ' +
              '{#if completed}Task {(multiply completed.amount 100):.1f}% completed. {/if}' +
              'Start {x:%Y-%m-%d}, end {x2:%Y-%m-%d}.'
      },
      series: {
          descriptionFormat: '{name}'
      }
  },

  lang: {
      accessibility: {
          axis: {
              xAxisDescriptionPlural: 'The chart has a two-part X axis showing time in both week numbers and days.',
              yAxisDescriptionPlural: 'The chart has one Y axis showing task categories.'
          }
      }
  },

  series: [{
      name: 'Macro Atividades',
      data: [{
          start: Date.UTC(2023, 1, 1),
          end: Date.UTC(2025, 1, 1),
          completed: {
              amount: 0.57
          },
          name: 'DIGEST'
      }, {
          start: Date.UTC(2023, 1, 1),
          end: Date.UTC(2025, 1, 1),
          completed: {
              amount: 0.64
          },
          name: 'DCSC'
      }, {
          start: Date.UTC(2023, 1, 1),
          end: Date.UTC(2025, 1, 1),
          completed: {
              amount: 0.81
          },
          name: 'DSSI'
      }, {
          start: Date.UTC(2023, 1, 1),
          end: Date.UTC(2025, 1, 1),
          completed: {
              amount: 0.58
          },
          name: 'DIRET'
      }, {
          start: Date.UTC(2023, 1, 1),
          end: Date.UTC(2025, 1, 1),
          completed: {
              amount: 0.24,
              fill: '#fa0'
          },
          name: 'DMKT'
      }]
  }]
});


 var options = {
          series: [{
          data: makeData()
        }],
          chart: {
          id: 'barYear',
          height: 20,
          width: '100%',
          type: 'bar',
          events: {
            dataPointSelection: function (e, chart, opts) {
              var quarterChartEl = document.querySelector("#chart-quarter");
              var yearChartEl = document.querySelector("#chart-year");
        
              if (opts.selectedDataPoints[0].length === 1) {
                if (quarterChartEl.classList.contains("active")) {
                  updateQuarterChart(chart, 'barQuarter')
                } else {
                  yearChartEl.classList.add("chart-quarter-activated")
                  quarterChartEl.classList.add("active");
                  updateQuarterChart(chart, 'barQuarter')
                }
              } else {
                updateQuarterChart(chart, 'barQuarter')
              }
        
              if (opts.selectedDataPoints[0].length === 0) {
                yearChartEl.classList.remove("chart-quarter-activated")
                quarterChartEl.classList.remove("active");
              }
        
            },
            updated:  function (chart) {
              updateQuarterChart(chart, 'barQuarter')
            }
          }
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            barHeight: '75%',
            dataLabels: {
              position: 'bottom'
            }
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex]
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        
        colors: colors,
        
        states: {
          normal: {
            filter: {
              type: 'desaturate'
            }
          },
          active: {
            allowMultipleDataPointsSelection: true,
            filter: {
              type: 'darken',
              value: 1
            }
          }
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (val, opts) {
                return opts.w.globals.labels[opts.dataPointIndex]
              }
            }
          }
        },
        title: {
          text: 'Yearly Results',
          offsetX: 15
        },
        subtitle: {
          text: '(Click on bar to see details)',
          offsetX: 15
        },
        yaxis: {
          labels: {
            show: false
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart-year"), options);
        chart.render();
      
        var optionsQuarter = {
          series: [{
          data: []
        }],
          chart: {
          id: 'barQuarter',
          height: 400,
          width: '100%',
          type: 'bar',
          stacked: true
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            horizontal: true
          }
        },
        legend: {
          show: false
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            }
          },
          xaxis: {
            lines: {
              show: true,
            }
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
          text: 'Quarterly Results',
          offsetX: 10
        },
        tooltip: {
          x: {
            formatter: function (val, opts) {
              return opts.w.globals.seriesNames[opts.seriesIndex]
            }
          },
          y: {
            title: {
              formatter: function (val, opts) {
                return opts.w.globals.labels[opts.dataPointIndex]
              }
            }
          }
        }
        };

        var chartQuarter = new ApexCharts(document.querySelector("#chart-quarter"), optionsQuarter);
        chartQuarter.render();
      
      
        chart.addEventListener('dataPointSelection', function (e, chart, opts) {
        var quarterChartEl = document.querySelector("#chart-quarter");
        var yearChartEl = document.querySelector("#chart-year");
      
        if (opts.selectedDataPoints[0].length === 1) {
          if(quarterChartEl.classList.contains("active")) {
            updateQuarterChart(chart, 'barQuarter')
          }
          else {
            yearChartEl.classList.add("chart-quarter-activated")
            quarterChartEl.classList.add("active");
            updateQuarterChart(chart, 'barQuarter')
          }
        } else {
            updateQuarterChart(chart, 'barQuarter')
        }
      
        if (opts.selectedDataPoints[0].length === 0) {
          yearChartEl.classList.remove("chart-quarter-activated")
          quarterChartEl.classList.remove("active");
        }
      
      })
      
      chart.addEventListener('updated', function (chart) {
        updateQuarterChart(chart, 'barQuarter')
      })
      
      document.querySelector("#model").addEventListener("change", function (e) {
        chart.updateSeries([{
          data: makeData()
        }])
      })



      var options = {
        series: [{
        data: makeData()
      }],
        chart: {
        id: 'barYear',
        height: 300,
        width: '100%',
        type: 'bar',
        events: {
          dataPointSelection: function (e, chart, opts) {
            var quarterChartEl = document.querySelector("#chart-quarter");
            var yearChartEl = document.querySelector("#chart-year");
      
            if (opts.selectedDataPoints[0].length === 1) {
              if (quarterChartEl.classList.contains("active")) {
                updateQuarterChart(chart, 'barQuarter')
              } else {
                yearChartEl.classList.add("chart-quarter-activated")
                quarterChartEl.classList.add("active");
                updateQuarterChart(chart, 'barQuarter')
              }
            } else {
              updateQuarterChart(chart, 'barQuarter')
            }
      
            if (opts.selectedDataPoints[0].length === 0) {
              yearChartEl.classList.remove("chart-quarter-activated")
              quarterChartEl.classList.remove("active");
            }
      
          },
          updated:  function (chart) {
            updateQuarterChart(chart, 'barQuarter')
          }
        }
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: '75%',
          dataLabels: {
            position: 'bottom'
          }
        }
      },
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff']
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex]
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      
      colors: colors,
      
      states: {
        normal: {
          filter: {
            type: 'desaturate'
          }
        },
        active: {
          allowMultipleDataPointsSelection: true,
          filter: {
            type: 'darken',
            value: 1
          }
        }
      },
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (val, opts) {
              return opts.w.globals.labels[opts.dataPointIndex]
            }
          }
        }
      },
      title: {
        text: 'Yearly Results',
        offsetX: 15
      },
      subtitle: {
        text: '(Click on bar to see details)',
        offsetX: 15
      },
      yaxis: {
        labels: {
          show: false
        }
      }
      };

      var chart = new ApexCharts(document.querySelector("#chart-year"), options);
      chart.render();
    
      var optionsQuarter = {
        series: [{
        data: []
      }],
        chart: {
        id: 'barQuarter',
        height: 400,
        width: '100%',
        type: 'bar',
        stacked: true
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          horizontal: false
        }
      },
      legend: {
        show: false
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          }
        },
        xaxis: {
          lines: {
            show: true,
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: 'Quarterly Results',
        offsetX: 10
      },
      tooltip: {
        x: {
          formatter: function (val, opts) {
            return opts.w.globals.seriesNames[opts.seriesIndex]
          }
        },
        y: {
          title: {
            formatter: function (val, opts) {
              return opts.w.globals.labels[opts.dataPointIndex]
            }
          }
        }
      }
      };

      var chartQuarter = new ApexCharts(document.querySelector("#chart-quarter"), optionsQuarter);
      chartQuarter.render();
    
    
      chart.addEventListener('dataPointSelection', function (e, chart, opts) {
      var quarterChartEl = document.querySelector("#chart-quarter");
      var yearChartEl = document.querySelector("#chart-year");
    
      if (opts.selectedDataPoints[0].length === 1) {
        if(quarterChartEl.classList.contains("active")) {
          updateQuarterChart(chart, 'barQuarter')
        }
        else {
          yearChartEl.classList.add("chart-quarter-activated")
          quarterChartEl.classList.add("active");
          updateQuarterChart(chart, 'barQuarter')
        }
      } else {
          updateQuarterChart(chart, 'barQuarter')
      }
    
      if (opts.selectedDataPoints[0].length === 0) {
        yearChartEl.classList.remove("chart-quarter-activated")
        quarterChartEl.classList.remove("active");
      }
    
    })
    
    chart.addEventListener('updated', function (chart) {
      updateQuarterChart(chart, 'barQuarter')
    })
    
    document.querySelector("#model").addEventListener("change", function (e) {
      chart.updateSeries([{
        data: makeData()
      }])
    })



      












