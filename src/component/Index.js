import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Index extends Component {
    render() {
        return (
            <nav id="gnavi">
                <ul>
                    <li><Link to="/">Trang Chủ</Link></li>
                    <li><Link to="/new">Sim mới</Link></li>
                    <li><Link to="/vip">Sim số đẹp</Link></li>
                    <li><Link to="/buy">Thanh toán</Link></li>
                    <li><Link to="/contact">Liên hệ</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Index;