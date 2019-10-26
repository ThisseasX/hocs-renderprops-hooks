import { Component } from 'react';

class MouseTracker extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }

  eventListener = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  cancel = () => {
    window.removeEventListener('mousemove', this.eventListener);
    window.removeEventListener('click', this.cancel);
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.eventListener);
    window.addEventListener('click', this.cancel);
  }

  componentWillUnmount() {
    this.cancel();
  }

  render() {
    return this.props.render(this.state);
  }
}

export default MouseTracker;
