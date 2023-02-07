import { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true, socials: {
                facebook: '',
                instagram: '',
            }
        };
    }
    showSmile = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        const { name, avatar, married, socials } = this.props;
        const { isVisible } = this.state;
        const smile = married ? ':-)' : ':-(';

        console.log(married);

        const getSocials = socials => {
            console.log(socials)
            let content = [];
            let counter = 0;
            for (let item of Object.keys(socials)) {
                content.push(<li key={counter}><a href={socials[item]}>{socials[item]}</a></li>)
                counter++
            }
            return content;
        }

        return (
            <article>
                <button onClick={this.showSmile}>{isVisible ? "выключить" : "включить"}</button>
                <h2>{name || "no name"} {isVisible && smile}</h2>
                <img src={avatar} />
                <ul>
                    {getSocials(socials)}
                </ul>
            </article>
        )
    }
}

export default User;