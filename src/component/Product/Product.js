import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        const datas = this.props.data;
        const showData = datas.map((data, index) => 
            <tr key={index}>
                <td className="stt">{index + 1}</td>
                <td className="sim-number"><Link to={"/info/"+data.simNumber} className={data.promotion ? 'promotion' : null}>{data.simNumber}</Link></td>
                <td>{data.price}</td>
                <td className={data.category}></td>
                <td className="product">{data.product}</td>
                <td><button>Mua sim</button></td>
            </tr>
        ); 
        return (
            <div className="product-tbl">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Số sim</th>
                            <th>Giá tiền</th>
                            <th>Nhà mạng</th>
                            <th>Loại sim</th>
                            <th>Giỏ hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product;