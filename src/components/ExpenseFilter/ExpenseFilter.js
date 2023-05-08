import styled from "styled-components";

const ExpenseFilterDiv = styled.div`
  color: white;
  padding: 0 0.5rem;
`;

const ExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }

  & select:nth-of-type(1) {
    padding: 0.5rem 0;
    text-align: center;
  }
`;

const SelectControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;

  @media (min-width: 580px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const ExpenseFilter = (props) => {
  const yearSelectedHandler = (event) => {
    props.onGetYear(event.target.value);
  };

  const sortedHandler = (event) => {
    props.onSortedOption(event.target.value);
  };

  return (
    <ExpenseFilterDiv>
      <ExpenseFilterControl>
        <label>Filter by year</label>
        <SelectControl>
          <select value={props.sorted} onChange={sortedHandler}>
            <option value="Newest">Newest</option>
            <option value="Latest">Latest</option>
            <option value="High">Amount: High to Low</option>
            <option value="Low">Amount: Low to High</option>
          </select>

          <select value={props.yearSelected} onChange={yearSelectedHandler}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="0000">All Year</option>
          </select>
        </SelectControl>
      </ExpenseFilterControl>
    </ExpenseFilterDiv>
  );
};

export default ExpenseFilter;
