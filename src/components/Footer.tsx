import React, { ReactFragment } from 'react';
import { Link } from 'react-router-dom';
import URL from '../util/URL';

export interface Properties {}
export interface State {}

export function getFooter() {
    const elements: ReactFragment[] = [];
    let i = 0;
    for(let element in URL.own.forFooter) {
        i += 1;
        
        //@ts-ignore
        let _url: string = URL.own.forFooter[element] || "/";
        
        elements.push(
            <span className={`${i !== 1 ? "cx-cmp-footer-space-between" : ""}`} id="cx-cmp-footer-element" key={`${element}`}>
                <Link id="cx-cmp-footer-ref" to={`${_url}`}>
                    <i id="cx-cmp-footer-text">{element.slice(0, 1).toUpperCase() + element.slice(1, element.length)}</i>
                </Link>
            </span>
        );
    }

    return elements;
}

export default function Footer() {
    const elements = getFooter();
    return (
        <React.Fragment>
            <div id="cx-cmp-footer">
                <div id="cx-cmp-footer-content">
                    {elements.map((element: ReactFragment) => element)}
                </div>
            </div>
        </React.Fragment>
    );
}