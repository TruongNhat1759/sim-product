import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        const Items = this.props.menu.content;
        const renderItem = Items.map((Item) => 
            <li key={Item}><a href="#" title={Item}>{Item}</a></li>
        );
        return (
            <nav className="sidebar">
                <p className="sidebar-title">{this.props.menu.title}</p>
                <ul>{renderItem}</ul>
                {
                    (this.props.menu.contact)?(<div className="sidebar-contact">
                        asdf
                    </div>):null
                }
            </nav>
        );
    }
}

export default SideBar;