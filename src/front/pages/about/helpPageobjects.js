import React from 'react';
import {
  Button,
  UncontrolledPopover, PopoverHeader, PopoverBody,
} from 'reactstrap';
import addPrd from './addproduct.png';
import inputFields from './inputfields.png';

class HelpPageobjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: null,
    };
    this.renderPopoverGoTo = this.renderPopoverGoTo.bind(this);
    this.renderPopoverActions = this.renderPopoverActions.bind(this);
  }
  async componentDidMount() {

  }

  renderPopoverGoTo = (props) => {
    let headerText = null;
    let bodyText = null;
    if(typeof props!=='undefined') {
      if (props === 'A') {
        headerText = 'Target subpages';
        bodyText = 'Most websites have menu bars. The items in the menu bar are called pages. When we arrive on a page we have\n' +
          '            on most websites the possibility to add remove or modify items. In case of the image we can add products. In this setup we call those items nav items. In this box we enter this label name and the Xpath or Selector. Chrome supports different tools to find selectors. When you are finshed you can save it and switch to the action box';
        return (
          <div>
            <br/>
            <Button id='idHelpGoTo' className="float-right" size="sm" outline color="secondary">Help</Button>
            {' '}
            <UncontrolledPopover trigger="focus" placement="left" target='idHelpGoTo'>
              <PopoverHeader>{headerText}</PopoverHeader>
              <PopoverBody>{bodyText}</PopoverBody>
              <img width="100%" height="100px" src={addPrd} alt="Logo"/>
            </UncontrolledPopover>
          </div>
        );
      }
    }
  };

  renderPopoverActions = (props) => {
    let headerText = null;
    let bodyText = null;
    if(typeof props!=='undefined') {
      if (props === 'B') {
        headerText = 'Target objects';
        bodyText = 'A page contains input fields, button etc. We call those items page objects.'
        return (
          <div>
            <br/>
            <Button id='idHelpAction' className="float-right" size="sm" outline color="secondary">Help</Button>
            {' '}
            <UncontrolledPopover trigger="focus" placement="left" target='idHelpAction'>
              <PopoverHeader>{headerText}</PopoverHeader>
              <PopoverBody>{bodyText}</PopoverBody>
              <img width="100%" height="100px" src={inputFields} alt="Logo"/>
            </UncontrolledPopover>
          </div>
        );
      }
    }
  };

  render() {
    return (
      <div>
        {this.renderPopoverGoTo(this.props.name)}
        {this.renderPopoverActions(this.props.name)}
      </div>
    );
  }
}

export default HelpPageobjects;
