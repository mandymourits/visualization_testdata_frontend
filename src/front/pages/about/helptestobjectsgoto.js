import React from 'react';
import {
  Button,
  UncontrolledPopover, PopoverHeader, PopoverBody,
} from 'reactstrap';
import addPrd from './inputfields.png';

class Helptestobjectsgoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: null,
    };
    this.renderPopoverGoTo = this.renderPopoverGoTo.bind(this);
  }

  renderPopoverGoTo = () => {
    let headerText = null;
    let bodyText = null;
        headerText = 'Target subpages';
        bodyText = 'Under construction\n' +
          '            ';
        return (
          <div>
            <br/>
            <Button id='idHelpGoToTest' className="float-right" size="sm" outline color="secondary">Help</Button>
            {' '}
            <UncontrolledPopover trigger="focus" placement="left" target='idHelpGoToTest'>
              <PopoverHeader>{headerText}</PopoverHeader>
              <PopoverBody>{bodyText}</PopoverBody>
              <img width="100%" height="100px" src={addPrd} alt="Logo"/>
            </UncontrolledPopover>
          </div>
        );
  };

  render() {
    return (
      <div>
        {this.renderPopoverGoTo()}
      </div>
    );
  }
}

export default Helptestobjectsgoto;
