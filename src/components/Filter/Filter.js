const Filter = ({ filter, onChange }) => {
  return (
    <>
      <h4>Find contact by name</h4>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
        placeholder="Enter name for Search"
      />
    </>
  );
};

export default Filter;
