// React 
// ReactDOM;

// class Heading extends React.Component{
//     render(){//возвращает react-элемент
//         console.log(this.props);//props нельзя изменить!!!!!
//        return React.createElement(
//             'h1',
//             {
//                 title:this.props.titleProp,
//                 className: this.props.classProp
//             },
//             'Hello World'
//         );
//     }
// }
// const reactElement = React.createElement(Heading,{titleProp:'123',classProp:'selectHeading'})
// const root = document.getElementById("root");
// ReactDOM.render(reactElement, root);

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {counter: 0};
//     }
//     increment=()=>{
//         this.setState({counter:this.state.counter+1});
//         console.log("+");
//     }
//     decrement=()=>{
//         this.setState({counter:this.state.counter-1});
//         console.log("-");
//     }
//     render(){//это метод срабатывает всякий раз, когда изменился state
//         return React.createElement(
//             'div',
//             null,
//             React.createElement('h1',{className:'heading'},this.state.counter),
//             React.createElement('button',{onClick:this.increment},'+'),
//             React.createElement('button',{onClick:this.decrement},'-'),
//         );
//     }
// }

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