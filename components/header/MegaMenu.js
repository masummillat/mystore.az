import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

import { featured } from '../../constants/data';

export const MenuItem = ({ category }) => {
    return (
        <li className="dropdown-item">
            <a>
                <img src={category.img} alt={category.title} />
                {category.title}
            </a>
            <div className="megadrop">
                {category.sub &&
                    category.sub.map(s => (
                        <div key={s.id} className="col">
                            <h3>{s.title}</h3>
                            <ul>
                                {s.sub.map(ss => (
                                    <li key={ss.id}>
                                        <a href="#">{ss.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
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
