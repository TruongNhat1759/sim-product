import React from 'react';
import ListMenu from '../Json/Menu.json';
import SideBar from '../../component/SideBar';
const Menu = (menuName) => {
    let listMenu = ListMenu[menuName];
    return <SideBar menu={listMenu}></SideBar>
}
export default ({children}) => (
    <main id="main">
        <div className="container">
            <div className="row">
                <div className="main-left col-2">
                    {Menu('category')}
                    {Menu('category-price')}
                    {Menu('category-product')}
                </div>
                <div className="main-content col-8">
                    {children}
                </div>
                <div className="main-right col-2">
                    {Menu('category-number')}
                    {Menu('category-news')}
                </div>
            </div>
        </div>
    </main>
);