import React, { Fragment, useEffect, useState } from 'react';
import Styles from './sidebar.module.css';
import MainLogo from 'assets/images/logos/logo.png';
import { Navigation } from 'components';
import { PATHS } from 'configs/routes.config';
import { CgMenuGridR, FaRegWindowClose } from 'assets/images/icons';

export const Sidebar = (props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState(false);

    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
    }, []);

    useEffect(() => {
        setMenuIcon(false);
        if(width <= 768) {
            setIsMenuOpen(false);
        } else {
            setIsMenuOpen(true);
        }
    }, [width]);

    return (
        <Fragment>

            <div className={Styles.openMenuIcon}>
                {
                    menuIcon ?
                        <FaRegWindowClose onClick={(e) => {
                            e.preventDefault();
                            setMenuIcon(false);
                            setIsMenuOpen(false);
                        }} style={{color: 'var(--second-color)'}}/>
                        :
                        <CgMenuGridR onClick={(e) => {
                            e.preventDefault();
                            setMenuIcon(true);
                            setIsMenuOpen(true);
                        }} />
                }
            </div>

            {
                isMenuOpen ?
                <section className={Styles.sidebar}>
                    <div className={Styles.sidebarHaeder}>
                        <img src={MainLogo} alt="Dashboard Logo"/>
                        <h2>React Dashboard</h2>
                    </div>
                    <div className={Styles.sidebarBody}>
                        <nav>
                            <ul>
                                <li><Navigation link={PATHS.USERS} text="Users" internal bordered/></li>
                                <li><Navigation link={PATHS.ABOUT_US} text="About Us" internal bordered/></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={Styles.sidebarFooter}>
                        <p>
                            <span>&copy; </span>
                            <span>2022 </span>
                            <span>React Dashboard</span>
                            <br/>
                            <span>All Rights Reserved</span>
                        </p>
                    </div>
                </section>
                :
                null
            }

        </Fragment>
    );
}
