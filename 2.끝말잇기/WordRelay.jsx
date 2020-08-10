const React = require("react");

const WordRelay = () => {
  const [before, setBefore] = React.useState("시작");
  const [result, setResult] = React.useState(true);
  const [value, setValue] = React.useState();
  const inputRef = React.useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const beforeChar = before.split("")[before.length - 1];
    const valueChar = value.split("")[0];

    if (beforeChar === valueChar) {
      setResult(true);
      setBefore(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult(false);
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{before}</div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          ref={inputRef}
          onChange={onChangeInput}
          value={value}
        />
        <button>제출!</button>
      </form>
      <div>{result ? "정답!" : "땡!"}</div>
    </>
  );
};

module.exports = WordRelay;
