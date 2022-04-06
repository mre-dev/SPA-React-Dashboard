import { Navigation } from 'components';
import { PATHS } from 'configs/routes.config';
import React from 'react';
import Styles from './notFound.module.css';

export const NotFoundPage = (props) => {
    return (
        <div className={Styles.notFound}>
            <p>Page Not Found</p>
            <Navigation link={PATHS.HOME} text="Go to Home" internal/>
        </div>
    );
};
