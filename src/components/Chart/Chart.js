import styled from "styled-components";
import ChartBar from "./ChartBar";

const StyleDiv = styled.div`
  background-color: #f8dfff;
  height: 10rem;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 1rem;
`;

const Chart = (props) => {
  const totalMaximum = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <StyleDiv>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </StyleDiv>
  );
};

export default Chart;
