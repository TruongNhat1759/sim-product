import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            
            <footer id="footer">

                {/* <p onClick={this.scroll()}>asdf</p> */}
                <div className="footer01">
                    <div className="container">
                        footer
                    </div>
                </div>
                <p className="copyright">Copyright &copy; GROUP CODE 4.0 All Rights Reserved.</p>
            </footer>
        );
    }
}

export default Footer;