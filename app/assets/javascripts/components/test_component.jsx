import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class TestComponent extends React.Component {
  render() {
    return (
      <div>
        Hello again!
      </div>
    );
  }
}

module.exports = TestComponent;
