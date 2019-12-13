import React from 'react';
import {
  Button,
  UncontrolledPopover, PopoverHeader, PopoverBody,
} from 'reactstrap';
import addPrd from './addproduct.png';

class TargetsMainHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderPopoverGoTo = this.renderPopoverGoTo.bind(this);
  }

  renderPopoverGoTo = (props) => {
    let headerText = null;
    let bodyText = null;
    if(typeof props!=='undefined') {
        headerText = 'Global Settings';
        bodyText = 'Most websites have menu bars. The items in the menu bar are called pages. \n' +
          '            This block is for choosing or creating new pages. Click on submit to fill the page';
        return (
          <div>
            <br/>
            <Button id='idPage' className="float-right" size="sm" outline color="secondary">Help</Button>
            {' '}
            <UncontrolledPopover trigger="focus" placement="left" target='idPage'>
              <PopoverHeader>{headerText}</PopoverHeader>
              <PopoverBody>{bodyText}</PopoverBody>
              <img width="100%" height="100px" src={addPrd} alt="Logo"/>
            </UncontrolledPopover>
          </div>
        );
    }
  };

  render() {
    return (
      <div>
        {this.renderPopoverGoTo(this.props.name)}
      </div>
    );
  }
}

export default TargetsMainHelp;
