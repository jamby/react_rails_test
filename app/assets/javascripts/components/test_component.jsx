import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class TestComponent extends React.Component {
  render() {
    console.log(window.time);
    return (
      <div>
        Hello again!
      </div>
    );
  }
}

module.exports = TestComponent;
export default TestComponent;
