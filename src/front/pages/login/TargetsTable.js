import React from 'react';
import {
  Table,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter, DropdownMenu, DropdownItem, ButtonDropdown, InputGroupButtonDropdown, DropdownToggle, InputGroupText
} from 'reactstrap';
import {
  deleteScenario,
  getAllScenariosByName,
  editScenario,
  getById,
} from '../../services/API/Api';
import classnames from 'classnames';


class TargetsTable extends React.Component {
  constructor(props) {
    super(props);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
    this.removeRowOrPopUp = this.removeRowOrPopUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderPopUpEdit = this.renderPopUpEdit.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.togglePopupAndSave = this.togglePopupAndSave.bind(this);
    this.update = this.update.bind(this);
    this.updateFinshed = this.updateFinshed.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.toggledropdown = this.toggledropdown.bind(this);
    this.handleTypes = this.handleTypes.bind(this);
    this.state = {
      scenarios: [],
      type: '',
      seconds: 0,
      diagramUpdateFlag: false,
      dropdownOpen: false,
      splitButtonOpen:false,
      modal: false,
      setModal: false,
      data: '',
      shouldUpdateTable:false,
      types: [{id: 1, type: 'input(id)'}, {id: 2, type: 'input(class)'}, {
        id: 3,
        type: 'input(css)',
      }, {id: 4, type: 'input(name)'}, {id: 5, type: 'input(xpath)'}, {id: 6, type: 'button(id)'}, {
        id: 7,
        type: 'button(class)',
      }, {id: 8, type: 'button(css)'}, {id: 9, type: 'button(name)'}, {
        id: 10,
        type: 'button(xpath)',
      }, {id: 11, type: 'validateInput(id)'}, {id: 13, type: 'validateButton(id)'}, {
        id: 14,
        type: 'checkBox(id)',
      }, {id: 15, type: 'option(id)'}, {id: 16, type: 'input(column,row)'}, {
        id: 17,
        type: 'validate(column,row)',
      }, {id: 18, type: 'doubleClick(id)'}, {id: 19, type: 'dropDown(id)'}, {
        id: 20,
        type: 'datePicker(id)',
      }],
    };
  }

  inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
  };

  async componentDidUpdate() {
    if (this.props.shouldUpdateTable) {
      await this.update(true);
      await this.update(false);
    }
  }

  async handleTypes(event) {
    this.setState({
      type: event.target.value,
    });
  }

  async updateFinshed(evt) {
    evt.preventDefault();
    await this.props.updateTableFromParent(false);
  }

  async update(state) {
    if (state === true){
      if (this.props.dataset !== '') {
        let data = await getAllScenariosByName(this.props.dataset, false);
        this.setState({
          scenarios: data,
        });
        await this.props.updateTableFromParent(false);
      }
      else {
      }
    }
    return true;
  }

  async togglePopup(event) {
    console.log(event.target.value);
    this.setState({
      modal: !this.state.modal,
      id: event.target.value,
    });
    let scenario = await getById(event.target.value);
    this.setState({
      pagename: scenario.pagename,
      navname: scenario.navname,
      navnameselector: scenario.navnameselector,
      fieldname: scenario.fieldname,
      selector: scenario.selector,
      type: scenario.type,
      value: scenario.value,
    })
  }

  async togglePopupAndSave(event) {
    let data = {
      id: this.state.id,
      istest: 'false',
      pagename: this.state.pagename,
      navname: this.state.navname,
      navnameselector: this.state.navnameselector,
      fieldname: this.state.fieldname,
      selector: this.state.selector,
      type: this.state.type,
      value: this.state.value,
    };
    await editScenario(event.target.value, data);
    await this.update(true);
    this.setState({
      modal: false,
    });
  }

  async removeRowOrPopUp(event) {
      let data = await deleteScenario(event.target.value);
    await this.update(true);
  }

  toggledropdown(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }


  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  renderPopUpEdit(p) {
    return (
      <div>
        {/*<DropdownMenu size="sm">*/}
        {/*  <DropdownItem tag="a" href="/blah" active>Inactive</DropdownItem>*/}
        {/*  <DropdownItem tag="a" href="/blah" active>Waiting</DropdownItem>*/}
        {/*  <DropdownItem tag="a" href="/blah" active>Ready</DropdownItem>*/}
        {/*  <DropdownItem tag="a" href="/blah" active>Bug</DropdownItem>*/}
        {/*  <DropdownItem tag="a" href="/blah" active>Old Version</DropdownItem>*/}
        {/*</DropdownMenu>*/}
        <Button color="warning" size="sm" value={p.id} onClick={this.togglePopup}>Edit</Button>
        <Button size="sm" value={p.id} onClick={this.removeRowOrPopUp}>Remove</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.togglePopup} className={classnames}>
          <ModalHeader toggle={this.togglePopup}>Edit</ModalHeader>
          <ModalBody>
            <InputGroup style={{width: '100%'}}>
              <InputGroupAddon addonType="prepend">@ PageName</InputGroupAddon>
              <Input placeholder={this.state.pagename} value={this.state.pagename} name="pagename" type="input" onChange={this.handleInputChange}/>
            </InputGroup>
            <br/>
            <InputGroup style={{width: '100%'}}>
              <InputGroupAddon addonType="prepend">@ SubPageName</InputGroupAddon>
              <Input placeholder={this.state.navname} value={this.state.navname} name="navname" type="input" onChange={this.handleInputChange}/>
            </InputGroup>
            <br/>
            <InputGroup style={{width: '100%'}}>
              <InputGroupAddon addonType="prepend">@ SubPageSelector</InputGroupAddon>
              <Input placeholder={this.state.navnameselector} value={this.state.navnameselector} name="navnameselector" type="input"
                     onChange={this.handleInputChange}/>
            </InputGroup>
            <br/>
            <InputGroup style={{width: '100%'}}>
              <InputGroupAddon addonType="prepend">@ FieldName</InputGroupAddon>
              <Input placeholder={this.state.fieldname} name="fieldname" value={this.state.fieldname} type="input" onChange={this.handleInputChange}/>
            </InputGroup>
            <br/>
            <InputGroup style={{width: '100%'}}>
              <InputGroupAddon addonType="prepend">@ Selector</InputGroupAddon>
              <Input placeholder={this.state.selector} name="selector" value={this.state.selector} type="input" onChange={this.handleInputChange}/>
            </InputGroup>
            <br/>
            <InputGroup style={{width: '100%'}}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input addon type="input" aria-label="type" value={this.state.type}/>
                  <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen}
                                            toggle={this.toggleSplit}>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledropdown}>
                      <DropdownToggle caret>
                        Choose Type
                      </DropdownToggle>
                      <DropdownMenu>
                        {this.state.types.map(e => {
                          return <DropdownItem key={e.id}
                                               dataset={e.type}
                                               value={e.type}
                                               onClick={this.handleTypes}
                          >{e.type}
                          </DropdownItem>;
                        })}
                      </DropdownMenu>
                    </ButtonDropdown>
                  </InputGroupButtonDropdown>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br/>
            <InputGroup style={{width: '100%'}}>
              <InputGroupAddon addonType="prepend">@ Value</InputGroupAddon>
              <Input placeholder={this.state.value} name="value" value={this.state.value} type="input" onChange={this.handleInputChange}/>
            </InputGroup>
            <br/>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" value={p.id} onClick={this.togglePopupAndSave}>Save</Button>{' '}
            <Button color="secondary" onClick={this.togglePopup}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>);
  }

  render() {
    return (
      <Table striped>
        <thead>
        <tr value={this.state.keyword}
            onChange={(event) => this.handleInputChange(event)}>
          {this.props.columns.map(function (p, index) {
            return (
              <th key={index}>{p}</th>
            );
          })}
        </tr>
        </thead>
        <tbody>
        {this.state.scenarios.map(function (p, index) {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{p.pagename}</td>
              <td>{p.navname}</td>
              <td>{p.navnameselector}</td>
              <td>{p.fieldname}</td>
              <td>{p.selector}</td>
              <td>{p.type}</td>
              <td>{p.value}</td>
              <td>{this.renderPopUpEdit(p)}</td>
            </tr>
          );
        }.bind(this))}
        </tbody>
      </Table>
    );
  }
}

export default TargetsTable;
