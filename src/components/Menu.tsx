import React, { Component } from 'react';
import Images from '../assets/images/Images';
import { UserStruct } from '../Types';

export interface Properties {
    user: UserStruct
    userFetched: boolean
}

export interface State {}

export default class Menu extends Component<Properties, State> {
    public render() {
        return (
            <React.Fragment>
                <div className="cx-cmp-menu">
                    <div id="cx-cmp-menu-content">
                        <div id="cx-cmp-menu-brand-leftside" className="cx-cmp-menu-mod">
                            <img id="cx-cmp-menu-brand-logo" src={`${Images.main.logo._}`} alt="brand logo" />
                        </div>
                        <div id="cx-cmp-menu-center" className="cx-cmp-menu-mod">

                        </div>
                        <div id="cx-cmp-menu-options-rightside" className="cx-cmp-menu-mod">
                            <div id="cx-cmp-menu-button-group">
                                {!this.props.userFetched &&
                                    <React.Fragment>
                                        <div className="cx-cmp-menu-button-container inline-this">
                                            <button id="cx-cmp-menu-button" className="button is-primary cx-loading-opacity cx-loading-radius"></button>
                                        </div>
                                        <div className="cx-cmp-menu-button-container inline-this">
                                            <button id="cx-cmp-menu-button" className="button is-primary cx-loading-opacity cx-loading-radius"></button>
                                        </div>
                                    </React.Fragment>
                                }

                                {this.props.userFetched &&
                                    <React.Fragment>
                                        {!this.props.user &&
                                            <React.Fragment>
                                                <div className="cx-cmp-menu-button-container inline-this">
                                                    <button id="cx-cmp-menu-button" className="button is-primary cx-cmp-menu-button-radius">Sign In</button>
                                                </div>
                                                <div className="cx-cmp-menu-button-container inline-this">
                                                    <button id="cx-cmp-menu-button" className="button is-primary cx-cmp-menu-button-radius">Sign Up</button>
                                                </div>
                                            </React.Fragment>
                                        }

                                        {this.props.user && this.props.user.id &&
                                            <React.Fragment>
                                                <div className="cx-cmp-menu-button-container">
                                                    <button id="cx-cmp-menu-button" className="button is-primary cx-cmp-menu-button-radius button-size-yQvWM"><i className="fas fa-user"></i></button>
                                                </div>
                                            </React.Fragment>
                                        }
                                    </React.Fragment>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}