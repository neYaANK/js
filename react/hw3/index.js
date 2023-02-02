class CustomButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isPressed: false }
    }
    toggle = () => {
        this.setState({ isPressed: !this.state.isPressed })
    }

    render() {
        return React.createElement('button', { onClick: this.toggle, style: { background: this.state.isPressed ? 'green' : 'red' } }, 'Press me')
    }
}

const reactElement = React.createElement(CustomButton);
ReactDOM.render(reactElement, document.getElementById("root"));