// Wait for the page to load
console.log("hello");
document.addEventListener('DOMContentLoaded', function() {
    // Check if chart element exists
    const chartCanvas = document.getElementById('trendsChart');
    
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        
        // Create the chart
        const trendsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
                datasets: [{
                    label: 'Today',
                    data: [120, 190, 300, 500, 200, 300, 450],
                    borderColor: '#3751FF',
                    backgroundColor: 'rgba(55, 81, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Yesterday',
                    data: [80, 150, 280, 400, 180, 250, 380],
                    borderColor: '#DFE0EB',
                    backgroundColor: 'transparent',
                    tension: 0.4,
                    borderDash: [5, 5]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { 
                        display: false 
                    } 
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        grid: { 
                            color: 'rgba(0, 0, 0, 0.1)' 
                        } 
                    },
                    x: { 
                        grid: { 
                            display: false 
                        } 
                    }
                }
            }
        });
    }
});