let China_total = [571,1975,14380,42638,75465,80026, 80860,81589, 82367,82874,82954, 83017,83046]
let China_date = ['1/23','1/25','2/1','2/10','2/20','3/1','3/15','4/1','4/16','5/1','5/18','6/1','6/10']
let China_death = [25,56,30, 1016, 2236, 2912, 3213, 3318, 3342, 4633, 4634, 4634, 4634 ]
let America_total = [0,0,0,15,75,3621,221086 ,684930, 1134616, 1560268, 1874440, 2066401]

function plotTotalColumn() {
	Highcharts.chart("LineChart_total", {
		chart: {type: 'line'},
		title: {text: 'China COVID-19 Total Cases from 2020/1/23 to 2020/6/10'},
		xAxis: {
			title: { text: "Date" },
			categories: China_date
		},
		yAxis: {
			title: {
				text: 'Number of people'
			},
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		series: [{
			name: 'China',
			data: China_total
		}]
	});
}

function plotFirstDeath() {
	Highcharts.chart("BarChart_death", {
		chart: {type: 'bar'},
        title: {text: 'Country Death Cases in February'},
        subtitle: {text: 'Top 8 Countries'},
		xAxis: {
			title: { text: "country" },
			categories: ['China','Iran','Italy','South Korea','D.Princess','Japan','France','Philippines']
		},
		yAxis: {
			title: {
				text: 'Number of people'
			},
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		series: [{
			name: 'February',
			data: [2850,50,25,23,10,9,4,1]
		}]
	});
}

function plotSecondDeath() {
	Highcharts.chart("BarChart_death_2", {
		chart: {type: 'bar'},
        title: {text: 'Country Death Cases in March'},
        subtitle: {text: 'Top 8 Countries'},
		xAxis: {
			title: { text: "country" },
			categories: ['Italy','Spain','China','France','Iran','USA','UK','Netherlands']
		},
		yAxis: {
			title: {
				text: 'Number of people'
			},
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		series: [{
			name: 'March',
			data: [11250,7200,3300,3100,2800,2400,1500,900]
		}]
	});
}

function plotThirdDeath() {
	Highcharts.chart("BarChart_death_3", {
		chart: {type: 'bar'},
        title: {text: 'Country Death Cases in April'},
        subtitle: {text: 'Top 8 Countries'},
		xAxis: {
			title: { text: "country" },
			categories: ['USA','Italy','UK','Spain','France','Belgium','Germany','Iran']
		},
		yAxis: {
			title: {
				text: 'Number of people'
			},
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		series: [{
			name: 'April',
			data: [52000,28100,26100,24800,24100,7200,6350,6250]
		}]
	});
}

function plotFourthDeath() {
	Highcharts.chart("BarChart_death_4", {
		chart: {type: 'bar'},
        title: {text: 'Country Death Cases in May'},
        subtitle: {text: 'Top 8 Countries'},
		xAxis: {
			title: { text: "country" },
			categories: ['USA','UK','Italy','Spain','France','Brazil','Belgium','Mexico']
		},
		yAxis: {
			title: {
				text: 'Number of people'
			},
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		series: [{
			name: 'May',
			data: [100110,38400,32500,29050,28950,26150,8533,8420]
		}]
	});
}
function plotCurrentDeath() {
	Highcharts.chart("BarChart_death_5", {
		chart: {type: 'bar'},
        title: {text: 'Country Death Cases in June'},
        subtitle: {text: 'Top 8 Countries'},
		xAxis: {
			title: { text: "country" },
			categories: ['USA','UK','Brazil','Italy','France','Spain','Mexico','Belgium']
		},
		yAxis: {
			title: {
				text: 'Number of people'
			},
		},
		legend: {
			align: 'right',
			x: -30,
			verticalAlign: 'top',
			y: 25,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || 'white',
			borderColor: '#CCC',
			borderWidth: 1,
			shadow: false
		},
		series: [{
			name: 'June',
			data: [115130,41128,39797,34114,29319,27136,15357,9629]
		}]
	});
}

function plotThirdPie() {
	Highcharts.chart('PieChart_3', {
		chart: {
			plotBackgroundColor: null,
        	plotBorderWidth: null,
        	plotShadow: false,
        	type: 'pie',	
		},
        title: {text: 'China Recovery rate vs Death Rate'},
        subtitle: {text: 'Up to 3/30'},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				}
			}
		},
		series: [{
			name: '',
			data: [
				{   name: 'Recovery Rate',
					y: 95.84,
					color: "#DC143C"
				},
				{   name: 'Death Rate',
					y: 4.16,
					color: "lightblue"
				}
			]
		}]
	});
}

function plotSecondPie() {
	Highcharts.chart('PieChart_2', {
		chart: {
			plotBackgroundColor: null,
        	plotBorderWidth: null,
        	plotShadow: false,
        	type: 'pie',	
		},
        title: {text: 'China Recovery rate vs Death Rate'},
        subtitle: {text: 'Up to 2/30'},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				}
			}
		},
		series: [{
			name: '',
			data: [
				{   name: 'Recovery Rate',
					y: 82.97,
					color: "#DC143C"
				},
				{   name: 'Death Rate',
					y: 17.03,
					color: "lightblue"
				}
			]
		}]
		
    });
}

    
    function plotPie() {
        Highcharts.chart('PieChart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',	
            },
            title: {text: 'China Recovery rate vs Death Rate'},
            subtitle: {text: 'Up to 2/15'},
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    }
                }
            },
            series: [{
                name: '',
                data: [
                    {   name: 'Recovery Rate',
                        y: 56.82,
                        color: "#DC143C"
                    },
                    {   name: 'Death Rate',
                        y: 43.18,
                        color: "lightblue"
                    }
                ]
            }],
            
        });
    }

function init() {
    plotTotalColumn();
    plotFirstDeath();
    plotSecondDeath();
    plotThirdDeath();
    plotFourthDeath();
    plotCurrentDeath();
    plotPie();
    plotSecondPie();
    plotThirdPie();

}

document.addEventListener('DOMContentLoaded', init, false);
