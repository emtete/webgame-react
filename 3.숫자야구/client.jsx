const React = require("react");
const ReactDom = require("react-dom");
const NumberBaseball = require("./NumberBaseball");
const { hot } = require("react-hot-loader/root");

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector("#root"));
