import React from 'react';
import {OverlayTrigger, Popover, Button} from 'react-bootstrap';
import { categories } from '../../constants/data';


export const MenuItem = ({category}) => {
  console.log(category)
  return (
    <li className="dropdown-item"><a>{category.name}</a>
      <div className="megadrop">
        <div className="col">
          <h3>Title</h3>
          <ul>
            <li><a href="#">Sub-menu 1</a>
            </li>
            <li><a href="#">Sub-menu 2</a>
            </li>
            <li><a href="#">Sub-menu 3</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Title</h3>
          <ul>
            <li><a href="#">Sub-menu 1</a>
            </li>
            <li><a href="#">Sub-menu 2</a>
            </li>
            <li><a href="#">Sub-menu 3</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Title</h3>
          <ul>
            <li><a href="#">Sub-menu 1</a>
            </li>
            <li><a href="#">Sub-menu 2</a>
            </li>
            <li><a href="#">Sub-menu 3</a>
            </li>
          </ul>
        </div>

      </div>

    </li>
  );
}
const MegaMenu = () => {

  return(
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
                {categories.map((category)=><MenuItem category={category} key={category.name}/>)}
              </ul>
            </div>
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="secondary">Popover</Button>
    </OverlayTrigger>
      <style global jsx>{`
        .popover-body {
          padding: 0 !important;
        }
      `}</style>
    </div>
  )
}

export default MegaMenu;