import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupButtonDropdown,
  InputGroupText,
} from 'reactstrap';

class TargetsMain extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.toggledropdown = this.toggledropdown.bind(this);
    this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      inputField: '',
    };
  }

  componentDidMount() {
    this.setState({
      inputField: 'page',
    });
  }

  submitHandler(evt) {
    evt.preventDefault();
    this.setState({
      inputField: evt.target.value,
    });
    this.props.handlerFromParant(evt.target.value);
    this.props.handlerFromParant1('2');
    this.props.handlerFromParent2(true);
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
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen}
                                            toggle={this.toggleSplit}>


              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledropdown}>
                <DropdownToggle caret width="300px">
                  Choose Page
                </DropdownToggle >
                <DropdownMenu min-width="300px" max-width="300px" label={'test'}>
                  {this.props.datasets.map(e => {
                    return <DropdownItem key={e.id}
                                         dataset={e.pagename}
                                         value={e.pagename}
                                         onClick={this.submitHandler}
                    >{e.pagename}
                    </DropdownItem>;
                  })}
                </DropdownMenu>
              </ButtonDropdown>
              <Input addon type="input" aria-label="type" value={this.state.inputField}/>
            </InputGroupButtonDropdown>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
      </div>);
  }
}

export { TargetsMain };
