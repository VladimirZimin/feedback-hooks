import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  margin-bottom: 15px;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  font-size: 20px;
  color: #ff6669;
`;

const Value = styled.p`
  font-weight: bold;
  color: #003357;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const StatisticInfo = ({ statistics, onCountTotal, onCountTotalPercent }) => {
  const statisticsList = Object.entries(statistics);

  return (
    <Wrapper>
      <List>
        {statisticsList.map(([key, value]) => {
          return (
            <Item key={nanoid()}>
              <Value>{key}</Value>: {value}
            </Item>
          );
        })}
      </List>

      <Value>Total: {onCountTotal}</Value>
      <Value>
        Positive feedback:{" "}
        {onCountTotalPercent === 0 ? "0" : onCountTotalPercent}%
      </Value>
    </Wrapper>
  );
};

export default StatisticInfo;
