'use client';

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { ProjectStat } from '@/data/projects';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface ProjectStatsProps {
  projectStats: ProjectStat[];
}

export function ProjectStats({ projectStats }: ProjectStatsProps) {
  const [mounted, setMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  const labels = projectStats.map(stat => stat.label);
  const values = projectStats.map(stat => stat.value);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Project Stats',
        data: values,
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 2,
      },
    ],
  };
  
  const options: ChartOptions<'radar'> = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#9ca3af',
          font: {
            size: 10,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-48">
      <Radar data={data} options={options} />
    </div>
  );
}
