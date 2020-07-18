import React, { Component } from 'react';
import Product from '../../component/Product/Product';
import Data from '../Json/Data.json';
import Search from '../../component/Search/Search';
class Home extends Component {
    render() {
        return (
            <>
                {/* <Search></Search> */}
                <Product data={Data}></Product>
            </>
        );
    }
}

export default Home;