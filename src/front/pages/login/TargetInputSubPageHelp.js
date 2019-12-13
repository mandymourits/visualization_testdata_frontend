import React from 'react';
import {
  Button,
  UncontrolledPopover, PopoverHeader, PopoverBody,
} from 'reactstrap';
import addPrd from './addproduct.png';

class TargetInputSubPageHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderPopoverGoTo = this.renderPopoverGoTo.bind(this);
  }

  renderPopoverGoTo = () => {
    let headerText = null;
    let bodyText = null;
        headerText = 'Target object variables';
        bodyText = 'Most webpages exists of a menu bars. The items in the menu bar are called pages. When we arrive on a page we have\n' +
          '            on most websites the possibility to add remove or modify items. In case of the image we can add products. In this setup we call those items nav items. In this box we enter this label name and the Xpath or Selector. Chrome supports different tools to find selectors. When you are finshed you can save it and switch to the action box';
        return (
          <div>
            <br/>
            <Button id='idHelpGoToTestActions' className="float-right" size="sm" outline color="secondary">Help</Button>
            {' '}
            <UncontrolledPopover trigger="focus" placement="left" target='idHelpGoToTestActions'>
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

export default TargetInputSubPageHelp;
