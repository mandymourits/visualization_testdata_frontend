import React from 'react';
import {
  Alert,
  InputGroup,
  InputGroupAddon,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupButtonDropdown, Col,
} from 'reactstrap';

class TestStructurePageObjects extends React.Component {
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
      inputDropDownPageObjects: '',
      dropDownPageObjects: '',
      pageObjectValue:'',
      dropDownFieldObjects:'Select',
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
    this.props.handlerFromParant({
      [name]: value,
    });
  }


  componentDidMount() {
    this.setState({
      inputDropDownPageObjects: 'Field Label',
    });
    console.log(this.props);
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
            <br/>
            <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledropdown}>
                <DropdownToggle split outline>
                </DropdownToggle>
                <DropdownMenu min-width="100%" label={'test'}>
                  {this.props.pageObjectsNames.map(e => {
                    return <DropdownItem key={e.id}
                                         navItems={e.fieldname}
                                         value={e.fieldname}
                                         name="dropDownFieldObjects"
                                         onClick={this.handleChange}
                    >{e.fieldname}
                    </DropdownItem>;
                  })}
                </DropdownMenu>
              </ButtonDropdown>
            </InputGroupButtonDropdown>
            <Input addonType="append" value={this.state.dropDownFieldObjects}name="dropDownFieldObjects" onChange={this.handleChange}></Input>
          </InputGroup>
        <br/>
        <InputGroup style={{width: '100%'}}>
          <InputGroupAddon addonType="prepend">@ Value</InputGroupAddon>
          <Input placeholder="value" name="pageObjectValue" type="input" onChange={this.handleChange}/>
        </InputGroup>
      </div>);
  }
}

export { TestStructurePageObjects };
