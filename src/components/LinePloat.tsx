import * as d3 from 'd3';
import React from 'react';

// 데이터 타입 정의, 여기서는 간단하게 number 배열로 가정합니다.
type DataArray = number[];

interface LinePlotProps {
    data: DataArray;
    width?: number;
    height?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

const LinePlot: React.FC<LinePlotProps> = ({
    data,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20,
}) => {
    // D3 스케일 함수 설정
    const x = d3
        .scaleLinear()
        .domain([0, data.length - 1])
        .range([marginLeft, width - marginRight]);

    const y = d3
        .scaleLinear()
        .domain(d3.extent(data) as [number, number])
        .range([height - marginBottom, marginTop]);

    // D3 라인 생성기
    const line = d3
        .line<number>()
        .x((d, i) => x(i) ?? 0)
        .y((d) => y(d) ?? 0);

    // SVG 요소와 내부 요소 반환
    return (
        <svg width={width} height={height}>
            <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data) ?? ''} />
            <g fill="white" stroke="currentColor" strokeWidth="1.5">
                {data.map((d, i) => (
                    <circle key={i} cx={x(i)} cy={y(d)} r="2.5" />
                ))}
            </g>
        </svg>
    );
};

export default LinePlot;
