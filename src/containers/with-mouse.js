import React from 'react';

const withMouse = Component =>
  class MouseHOC extends React.Component {
    constructor() {
      super();
      this.state = {
        x: 0,
        y: 0,
      };
    }

    startTracking = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };

    stopTracking = () => {
      window.removeEventListener('mousemove', this.startTracking);
      window.removeEventListener('click', this.stopTracking);
    };

    componentDidMount() {
      window.addEventListener('mousemove', this.startTracking);
      window.addEventListener('click', this.stopTracking);
    }

    componentWillUnmount() {
      this.stopTracking();
    }

    render() {
      return <Component {...this.state} />;
    }
  };

export default withMouse;
