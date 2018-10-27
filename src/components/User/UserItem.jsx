import React, { Component } from "react";

class UserItem extends Component {
    onSelectMessager = () => {
        this.props.onSelectMessager(this.props.user);
    };
    render() {
        const { user } = this.props;
        const imageSize = 40;
        return (
            <tr>
                <td>
                    <div
                        style={{ margin: -10 }}
                        onClick={this.onSelectMessager}
                    >
                        <img
                            style={{
                                width: imageSize,
                                height: imageSize,
                                marginRight: 10
                            }}
                            className="img-fluid rounded-circle shadow float-left"
                            alt=""
                            src="../assets/img/brand/default-avatar.png"
                        />
                        <div
                            className="d-flex align-items-center black-text"
                            style={{ height: imageSize }}
                        >
                            <small>{user.username}</small>
                            <hr />
                            <div
                                style={{
                                    width: 7,
                                    height: 7,
                                    backgroundColor: "#42B72A",
                                    borderRadius: "100%"
                                }}
                            />
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default UserItem;
