import { Bar } from "react-chartjs-2";



export const QStackedBarChart = ({data}) => {
	return (
		<div className="Q-stacked-bar-chart-root" style={{height:'100%'}}>
			 <Bar
        // pointStyle="star"
        data={{
          labels: data.labels,
          responsive: true,
          offset: true,
          datasets: [
            {
              label: "Mobile",
              pointStyle: "rectRounded",
              backgroundColor: "#6ED3FF",
              barThickness: 40,
              categoryPercentage: 1,
              data: data.previousDate.dataSet //From API
            },
            {
              label: "Desktop",
              backgroundColor: "#1497FF",
              barThickness: 40,
              categoryPercentage: 1,
              pointStyle: "triangle",
              data: data.currentDate.dataSet //From API
            }
          ]
        }}
        height={220}
        options={{
          offsetGridLines: true,
          drawTicks: true,
          layout: {
            padding: {
              top: 30,
              right: 40,
              bottom: 40
            }
          },
          legend: {
            display: true,
            position: "right",
            align: "start",
            labels: {
              usePointStyle: true
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
                ticks: {
                  padding: 5
                },
                gridLines: {
                  display: false
                }
              }
            ],
            yAxes: [
              {
                stacked: false,
                gridLines: {
                  drawBorder: false
                },
                ticks: {
                  beginAtZero: true,
                  maxTicksLimit: 6,
                  padding: 20,
                  callback(n) {
                    if (n < 1e3) return n;
                    if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
                  }
                }
              }
            ]
          }
        }}
      />
			
		</div>
	)
}

