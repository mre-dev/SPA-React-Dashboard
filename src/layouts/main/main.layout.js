import { Sidebar, Footer, Header } from 'layouts';
import React from 'react';
import Styles from './main.module.css';

export const Main = (props) => {
    return (
        <div>
            <div className={Styles.container}>
                <Sidebar/>
                <div className={Styles.contentMainBox}>
                    <Header/>
                    <div className={Styles.contentMain}>
                        {props.children}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
