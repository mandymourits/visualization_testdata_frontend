import React from 'react';
import {
  Table,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  ModalFooter,
} from 'reactstrap';
import {getAllScenariosByName, deleteScenario, getById, editScenario} from '../../services/API/Api';
import classnames from "classnames";


class TargetsInputTable extends React.Component {
  constructor(props) {
    super(props);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelectCustomerRequest = this.onSelectCustomerRequest.bind(this);
    this.renderPopUpEdit = this.renderPopUpEdit.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.togglePopupAndSave = this.togglePopupAndSave.bind(this);
    this.updateFinshed = this.updateFinshed.bind(this);
    this.update = this.update.bind(this);
    this.removeRowOrPopUp = this.removeRowOrPopUp.bind(this);

    this.state = {
      scenarios: [],
      seconds: 0,
      diagramUpdateFlag: false,
      removeButton: 'test',
      tapped: false,
      shouldUpdateTable:false,
    };
  }

  inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    console.log(updatedKeyword);
  };


  handleInputChange(event) {
    const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    console.log(name);
  }

  async togglePopup(event) {
    this.setState({
      modal: !this.state.modal,
    });
    let scenario = await getById(this.props.url, event.target.value);
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

  async componentDidUpdate() {
    if (this.props.shouldUpdateTable) {
      await this.update(true);
      await this.update(false);
    }
  }

  async updateFinshed(evt) {
    evt.preventDefault();
    await this.props.updateTableFromParent(false);
  }

  async update(state) {
    if (state === true){
      if (this.props.dataset !== '') {
        let data = await getAllScenariosByName(this.props.url, this.props.dataset, true);
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
    this.setState({
      modal: !this.state.modal,
      id: event.target.value,
    });
    let scenario = await getById(this.props.url,event.target.value);
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
      istest: 'true',
      pagename: this.state.pagename,
      navname: this.state.navname,
      navnameselector: this.state.navnameselector,
      fieldname: this.state.fieldname,
      selector: this.state.selector,
      type: this.state.type,
      value: this.state.value,
    };
    console.log(data);
    await editScenario(this.props.url, event.target.value, data);
    await this.update(true);
    this.setState({
      modal: false,
    });
  }

  async removeRowOrPopUp(event) {
    let data = await deleteScenario(this.props.url,event.target.value);
    await this.update(true);
  }

  renderPopUpEdit(p) {
    return (
      <div>
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

  onSelectCustomerRequest(event) {
    console.log(event);
    let data = deleteScenario(this.props.url, event.target.value);
  }
  render() {
    return (
      <Table striped>
        <thead>
        <tr value={this.state.keyword}
            onChange={(event)=>this.handleInputChange(event)}>
          {this.props.columns.map(function(p, index) {
            return (
              <th key={index}>{p}</th>
            );
          })}
        </tr>
        </thead>
        <tbody>
        {this.state.scenarios.map(function(p, index) {
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{p.navname}</td>
              <td>{p.fieldname}</td>
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

export default TargetsInputTable;
