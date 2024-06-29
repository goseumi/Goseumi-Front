import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const s = {
  content: styled.div`
    width: 90%;
    height: 180px;
    margin: 10px auto;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
  `,
};

const GradeGraph = () => {
  const data = {
    labels: [
      ['1학년', '1학기'],
      ['1학년', '2학기'],
      ['2학년', '1학기'],
      ['2학년', '2학기'],
      ['3학년', '1학기'],
      ['3학년', '2학기'],
    ],
    datasets: [
      {
        type: 'line',
        label: '전체',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'blue',
        borderWidth: 2,
        data: [6.5, 3.0, 3.2, 4.2, 2.2, 2.8],
      },
      {
        type: 'line',
        label: '국영수',
        backgroundColor: 'rgb(255, 99, 132)',
        data: [1, 2, 3, 4, 5, 6],
        borderColor: 'red',
        borderWidth: 2,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    spanGaps: true,
    maxBarThickness: 30,
    grouped: true,
    interaction: {
      mode: 'index',
    },

    plugins: {
      legend: {
        position: 'top', // 범례 위치를 상단으로 설정
        align: 'end', // 범례를 오른쪽 정렬
        labels: {
          usePointStyle: true,
          font: {
            family: "'Noto Sans KR', 'serif'",
            lineHeight: 1,
            size: 10,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(124, 35, 35, 0.4)',
        padding: 10,
        bodySpacing: 5,
        bodyFont: {
          font: {
            family: "'Noto Sans KR', sans-serif",
          },
        },
        usePointStyle: true,
        filter: (item) => item.parsed.y !== null,
        callbacks: {
          title: (context) => context[0].label,
          label: (context) => {
            let label = context.dataset.label + '' || '';

            return context.parsed.y !== null ? label + ': ' + context.parsed.y + '배' : null;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: true,
          tickLength: 4,
          color: '#E2E2E230',
        },
        axis: 'x',
        position: 'bottom',
        ticks: {
          padding: 10,
          font: {
            size: 10,
          },
        },
      },
      y: {
        type: 'linear',
        reverse: true,
        grid: {
          color: '#E2E2E230',
        },
        afterDataLimits: (scale) => {
          scale.max = scale.max * 1;
          scale.min = scale.min * 0.1;
        },
        axis: 'y',
        display: true,
        position: 'left',
        min: 1,
        max: 9,
        ticks: {
          padding: 8,
          stepSize: 2,
          font: {
            size: 12,
            family: "'Noto Sans KR', sans-serif",
          },
        },
      },
    },
    elements: {
      point: {
        radius: 3, // 도형의 크기를 줄임
      },
    },
  };
  return (
    <s.content>
      {/* <Line type="line" data={data} options={options} style={{ width: '100%', height: '150px' }} /> */}
      <Line type="line" data={data} options={options} />
    </s.content>
  );
};

export default GradeGraph;
