import React from 'react';
import './LinkList.scss';
const LinkList = (props: any ) => {
    const linkMarkup = props.options.map((link: any) => (
        <li key={link.id} className="link-list-item">
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-list-item-url"
            >{link.text}</a>
        </li>
    ));
    return <ul className="link-list">{linkMarkup}</ul>;
}

export default LinkList;