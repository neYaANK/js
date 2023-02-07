import { Component } from "react";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: true };
  }
  showSmile = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }
  render() {
    const { user: { id, name, avatar, married, isSelected }, userSelector } = this.props;
    const { isVisible } = this.state;
    const smile = married ? ':-)' : ':-(';

    const styles = { border: isSelected ? "solid red 5px" : undefined }

    return (
      <article style={styles}>
        <button onClick={this.showSmile}>{isVisible ? "выключить" : "включить"}</button>
        <button onClick={() => userSelector(id)}>select</button>
        <h2>{name || "no name"} {isVisible && smile}</h2>
        <img src={avatar} />
      </article>
    )
  }
}

export default UserCard;