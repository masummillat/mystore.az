import React from 'react';
import Link from 'next/link';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

import { featured } from '../../constants/data';

export const MenuItem = ({ category }) => {
    return (
        <li className="dropdown-item">
            <Link href={`/category/${category.id}`}>
                <a>
                    <img src={category.img} alt={category.title} />
                    {category.title}
                </a>
            </Link>
            <div className="megadrop">
                <div className="row">
                    {category.sub &&
                    category.sub.map(s => (
                        <div key={s.id} className="col-3">
                            <Link href={`/category/${category.id}/${s.id}`}>
                                <a>
                                    <p style={{fontWeight: 600}}>{s.title}</p>
                                </a>
                            </Link>
                            <ul>
                                {s.sub.map(ss => (
                                    <li key={ss.id}>
                                        <Link href={`/category/${category.id}/${s.id}/${ss.id}`}>
                                            <a>{ss.title}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
};
const MegaMenu = () => {
    return (
        <div>
            <OverlayTrigger
                rootClose
                trigger="click"
                key={'bottom-start'}
                placement={'bottom-start'}
                overlay={
                    <Popover id={`popover-positioned-${'bottom-start'}`}>
                        <Popover.Content>
                            <div>
                                <ul className="menu">
                                    {featured.map(category => (
                                        <MenuItem category={category} key={category.name} />
                                    ))}
                                </ul>
                            </div>
                        </Popover.Content>
                    </Popover>
                }>
                <Button variant="secondary">Popover</Button>
            </OverlayTrigger>
            <style global jsx>{`
                .popover-body {
                    padding: 0 !important;
                }
            `}</style>
        </div>
    );
};

export default MegaMenu;
