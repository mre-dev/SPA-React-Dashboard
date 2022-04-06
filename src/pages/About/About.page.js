import { Button } from 'components';
import { Main } from 'layouts';
import React from 'react';
import Styles from './aboutPage.module.css';

export const AboutPage = (props) => {
    return (
        <Main>
            <div className={Styles.aboutPage}>
                <h2>About Page</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur,
                    nisi nisl aliquam eros, eget tincidunt nisl nunc eu
                    lectus. Sed euismod, urna eu tincidunt consectetur,
                    nisi nisl aliquam eros, eget tincidunt nisl nunc eu
                </p>

                <div>
                    <Button type="primary" text='Primary' size='small'/>
                    <Button type="success" text='Success' size='small'/>
                    <Button type='secondary' text='Secondary' size='small'/>
                    <Button type='danger' text='danger' size='small'/>
                    <Button type='warning' text='warning' size='small'/>
                    <Button type='info' text='info' size='small'/>
                    <Button type='light' text='light' size='small'/>
                    <Button type='dark' text='dark' size='small'/>
                </div>
            </div>
        </Main>
    );
};
