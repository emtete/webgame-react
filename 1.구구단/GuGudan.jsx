const React = require("react");

const GuGudan = () => {
  const [result, setResult] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const inputRef = React.useRef();

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (first * second == value) {
      setResult(true);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult(false);
      setValue("");
      inputRef.current.focus();
    }
  };

  return (
    <React.Fragment>
      <div>
        {first} 곱하기 {second}는??
      </div>
      <form onSubmit={onSubmit}>
        <input
          type='number'
          onChange={onChangeInput}
          ref={inputRef}
          value={value}
        />
        <button>클릭!</button>
      </form>
      <div>{result ? "정답" : "땡"}</div>
    </React.Fragment>
  );
};

module.exports = GuGudan;
