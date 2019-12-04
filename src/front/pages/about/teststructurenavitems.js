import React from 'react';
import {
  InputGroup,
  ButtonDropdown,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from 'reactstrap';

class Teststructurenavitems extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.toggledropdown = this.toggledropdown.bind(this);
    this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      navObject: '',
      dropdownpageobjects:'Navigation Label',
    };
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    this.props.handlerFromParent({
      [name]: value,
    });
  }

  componentDidMount() {
    this.setState({
      inputFieldPageName: 'Navigation Name',
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen,
    });
  }

  toggledropdown(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  render() {
    return (
      <div>
          <InputGroup style={{width: '100%'}}>
            <InputGroupButtonDropdown min-width="100%" addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
              <br/>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledropdown}>
                <DropdownToggle split outline>
                </DropdownToggle>
                <DropdownMenu min-width="100%" label={'test'}>
                  {this.props.navItems && this.props.navItems.map(e => {
                    return <DropdownItem key={e.id}
                                         navitems={e.navname}
                                         value={e.navname}
                                         name="dropdownpageobjects"
                                         onClick={this.handleChange}
                    >{e.navname}
                    </DropdownItem>;
                  })}
                </DropdownMenu>
              </ButtonDropdown>
            </InputGroupButtonDropdown>
            <br/>
            <Input addonType="append" value={this.state.dropdownpageobjects}>{this.state.dropdownpageobjects}</Input>
          </InputGroup>
      </div>);
  }
}

export { Teststructurenavitems };
