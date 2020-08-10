const React = require("react");
const { useState } = React;

const createNumber = () => {
  const first = String(Math.ceil(Math.random() * 9));
  const second = String(Math.ceil(Math.random() * 9));
  const third = String(Math.ceil(Math.random() * 9));

  return first + second + third;
};

const NumberBaseball = () => {
  const [number, setNumber] = useState(createNumber());
  const [result, setResult] = useState(false);
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [value, setValue] = useState();

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const nChar = number.split("");
    const vChar = value.split("");
    let sstrike = 0;
    let sball = 0;
    let done = [];
    // debugger;
    for (let i = 0; i < 3; i++) {
      if (nChar[i] == vChar[i]) {
        sstrike++;
      } else if (vChar.includes(i)) {
        sball++;
      }
    }

    if (sstrike === 0 && sball === 0) {
      setResult(false);
    } else {
      setStrike(sstrike);
      setBall(sball);
      setResult(true);
    }
  };

  return (
    <>
      <div>{number}</div>
      <form onSubmit={onSubmitForm}>
        <input type='number' value={value} onChange={onChangeInput} />
        <button>제출!</button>
      </form>
      <div>{result ? strike + "스트라이크, " + ball + "볼" : "아웃!"}</div>
    </>
  );
};

module.exports = NumberBaseball;
