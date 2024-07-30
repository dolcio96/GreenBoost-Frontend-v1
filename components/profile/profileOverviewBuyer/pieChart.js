// Import necessary libraries
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

// Pie chart component
const PieChart = ( {chartOpts} ) => {
    if (!chartOpts) {
        console.error("chartOpts is undefined");
        return null; // Render nothing or a fallback UI
    }
 
    const labels = chartOpts.labels
    const series = chartOpts.series
    const colors= ["#588157", "#A3B18A","#EBF0EA","#344E41"];

    if (labels.length === 0 || series.length === 0) {
        console.error("Labels or series are empty");
        return <p>No data available</p>; // Render a fallback UI
    }

    const chartOptions = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: labels,
        colors: colors,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <ApexCharts
            options={chartOptions}
            series={series}
            type="pie"
            width="380"
        />
    );
};

export default PieChart;
