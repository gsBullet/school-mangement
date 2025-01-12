import React, { useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale, // Import CategoryScale
    LinearScale,
    BarElement, // Import BarElement
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import axios from 'axios';

// Register required Chart.js components
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale, // Import CategoryScale
    BarElement, // Import BarElement
    Title,
    Tooltip,
    Legend,
);

const Analytics: React.FC = () => {
    interface ChartData {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
        }[];
    }
    const [chartData, setChartData] = React.useState<ChartData>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    '/api/v1/account-logs/get-seven-day-inc-exp',
                );
                const data = response.data.data;
                const income = data.income; // Extract the income data
                const expense = data.expense; // Extract the expense data

                // Combine unique labels (days) from both income and expense objects
                const labels = Array.from(
                    new Set([...Object.keys(income), ...Object.keys(expense)]),
                );

                // Create income and expense data arrays aligned with labels
                const incomeData = labels.map((label) => income[label] || 0); // Use 0 if the day is missing in the income object
                const expenseData = labels.map((label) => expense[label] || 0); // Use 0 if the day is missing in the expense object

                // Update the chartData st
                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Income',
                            data: incomeData,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                        {
                            label: 'Expenses',
                            data: expenseData,
                            backgroundColor: 'rgba(209, 82, 36, 0.2)',
                            borderColor: 'rgb(209, 65, 46)',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: 'rgba(75, 192, 192, 1)', // Legend text color
                },
            },
            title: {
                display: true,
                text: 'Bar Chart Example',
                color: 'rgba(75, 192, 192, 1)', // Title text color
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: 'rgba(75, 192, 192, 1)', // X-axis labels color
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'rgba(75, 192, 192, 1)', // Y-axis labels color
                },
            },
        },
    };

    return (
        <div className="container">
            <h1>Analytics</h1>
            <div className="row">
                <div className="col-6 m-auto">
                    <div className="card w-100">
                        <div className="card-header p-0">
                            <h4 className="text-center mt-2 ">Line Chart</h4>
                        </div>
                        <div className="card-body">
                            <Line data={chartData} options={lineOptions} />
                        </div>
                    </div>
                </div>
                <div className="col-6 m-auto">
                    <div className="card w-100">
                        <div className="card-header p-0">
                            <h4 className="text-center mt-2">Bar Chart</h4>
                        </div>
                        <div className="card-body">
                            <Bar data={chartData} options={lineOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
