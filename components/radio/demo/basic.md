---
order: 0
title: 基本
---

Radio

---

````jsx
import { Radio } from 'antm';

let Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      checked: null,
      r: 'a',
      s: 'e'
    };
  },
  handleChange(e) {
    this.setState({
      r: e.target.value
    });
  },
  handleChange2(e) {
    this.setState({
      s: e.target.value
    });
  },
  render() {
    return (
      <div>
        <div style={{ position: 'relative' }}>
          <span style={{ borderWidth: '1px', borderColor: 'red', borderStyle: 'solid' }}>
            <Radio
              value = "e"
              checked = {this.state.s === 'e'}
              onChange={this.handleChange2}
            />
          </span>
          <span style={{ borderWidth: '1px', borderColor: 'red', borderStyle: 'solid' }}>
            <Radio
              value = "f"
              checked = {this.state.s === 'f'}
              onChange={this.handleChange2}
            />
          </span>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Test />, mountNode);
````