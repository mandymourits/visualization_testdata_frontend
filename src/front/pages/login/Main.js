import React from 'react';
import FileReader from 'filereader';
import fs from 'fs';
import TargetsSubPageHelp from './TargetsSubPageHelp';
import TargetInputSubPageHelp from './TargetInputSubPageHelp';
import TargetsInputSubpageHelp from './TargetsInputSubpageHelp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJira } from '@fortawesome/free-brands-svg-icons';

import { jira, faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy } from '@fortawesome/free-solid-svg-icons';
import {
  getUniqueNames,
  getNavItems, getFieldNames, postScenarioData2, autoFill, autoFillPageObjects,
} from '../../services/API/Api';
import {
  Alert,
  InputGroup,
  InputGroupAddon,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  Row,
  CardBody,
  InputGroupText,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupButtonDropdown,
  CardHeader,
} from 'reactstrap';
import Table from './TargetsTable';
import TableTests from './TargetsInputTable';
import { TargetsMain } from './TargetsMain';
import { CreateCucumberFile } from './CreateCucumberFile';
import { TargetInputSubPages } from './TargetInputSubPages';
import { TargetObjects } from './TargetObjects';
import classnames from 'classnames';
import { HandleFramework } from './HeaderBar';
import TargetsMainHelp from './TargetsMainHelp';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggledropdown = this.toggledropdown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitPageObjectModel = this.handleSubmitPageObjectModel.bind(this);
    this.select = this.select.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.toggleInputDropDown = this.toggleInputDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.updateDropdown = this.updateDropdown.bind(this);
    this.setFramework = this.setFramework.bind(this);
    this.changeFrameworkValue = this.changeFrameworkValue.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleTypes = this.handleTypes.bind(this);
    this.getNavList = this.getNavList.bind(this);
    this.getFieldList = this.getFieldList.bind(this);
    this.renderActionTest = this.renderActionTest.bind(this);
    this.renderGoToTest = this.renderGoToTest.bind(this);
    this.handleNavItems = this.handleNavItems.bind(this);
    this.handlePageItems = this.handlePageItems.bind(this);
    this.handleSubmitTest = this.handleSubmitTest.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.renderSomething = this.renderSomething.bind(this);
    this.renderGoTo = this.renderGoTo.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.toggleActiveCard = this.toggleActiveCard.bind(this);
    this.toggleActiveCardTest = this.toggleActiveCardTest.bind(this);
    this.handleNavTest = this.handleNavTest.bind(this);
    this.toggleActiveCardTest = this.toggleActiveCardTest.bind(this);
    this.handleNav = this.handleNav.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
    this.clean = this.clean.bind(this);
    this.handleTabFromChild = this.handleTabFromChild.bind(this);
    this.toggleSecondCard = this.toggleSecondCard.bind(this);
    this.toggleSecondCardTest = this.toggleSecondCardTest.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.updateTableFromChild = this.updateTableFromChild.bind(this);
    this.autoFillObjects = this.autoFillObjects.bind(this);
    this.autoFillPageObjects = this.autoFillPageObjects.bind(this);
    this.update = this.update.bind(this);
    this.toggleDropdownTools = this.toggleDropdownTools.bind(this);
    this.toggleSplitTools = this.toggleSplitTools.bind(this);
    this.toggleSplitAccessTypes = this.toggleSplitAccessTypes.bind(this);
    this.toggledropdownAccessType = this.toggledropdownAccessType.bind(this);
    this.handleTypesGenerationProcess = this.handleTypesGenerationProcess.bind(this);
    this.state = {
      url: 'http://81.169.211.171:9009/',
      activeTab: '1',
      dropdownOpen: false,
      imageURL: '',
      selectedFile: null,
      property: null,
      value: '',
      name: 'Framework',
      visible: false,
      actions: [],
      dropDownValue: 'Select action',
      dataset: '',
      inputdropdownOpen: false,
      splitButtonOpen: false,
      pagename: 'unKnown',
      framework: [],
      submittedFramework: null,
      columns: [],
      columnstests: [],
      initialArray: 1,
      frameworkdata: [],
      navnameselector: '',
      navname: '',
      page: '',
      selector: '',
      type: null,
      webElementTypes: [{ id: 1, typeName: 'id' }, { id: 2, typeName: 'css' },
      ],
      types: [{ id: 1, typeName: 'input(id)' }, { id: 2, typeName: 'input(class)' }, {
        id: 3,
        typeName: 'input(css)',
      }, { id: 4, typeName: 'input(name)' }, { id: 5, typeName: 'input(xpath)' }, { id: 6, typeName: 'button(id)' }, {
        id: 7,
        typeName: 'button(class)',
      }, { id: 8, typeName: 'button(css)' }, { id: 9, typeName: 'button(name)' }, {
        id: 10,
        typeName: 'button(xpath)',
      }, { id: 11, typeName: 'validateInput(id)' }, { id: 13, typeName: 'validateButton(id)' }, {
        id: 14,
        typeName: 'checkBox(id)',
      }, { id: 15, typeName: 'option(id)' }, { id: 16, typeName: 'input(column,row)' }, {
        id: 17,
        typeName: 'validate(column,row)',
      }, { id: 18, typeName: 'doubleClick(id)' }, { id: 19, typeName: 'dropDown(id)' }, {
        id: 20,
        typeName: 'datePicker(id)',
      }],
      typeName: 'Choose type',
      objectname: '',
      datasetname: '',
      navItems: [],
      pageObjectsNames: [],
      pageObjectValue: '',
      istest: '',
      selectedPage: 'false',
      renderSomething: 'false',
      leftCard: 'true',
      leftCardTest: 'true',
      popoverOpen: true,
      shouldUpdateTable: false,
      selectors1: '',
      selectors2: '',
      selectors3: '',
      accessType: '',
      prePage: '',
      dropdownOpenTools: false,
      splitButtonOpenTools: false,
      toolSelectedPage: '',
      splitButtonOpenAccessTypes: false,
      dropdownOpenAccessType: false,
      generateUrl: 'unKnown',
      typeNameSelectors: '',
    };
  }

  async handleData(data) {
    this.setState({
      pagename: data,
      selectedPage: 'true',
    });
  }

  async updateTableFromChild(data) {
    this.setState({
      shouldUpdateTable: data,
    });
  }

  async handleTabFromChild(data) {
    await this.initializeColumns();
    await this.updateDropdown();
    await this.getNavList();
    await this.getFieldList();
    this.setState({
      activeTab: data,
    });
  }

  updateTable() {
    this.setState({
      shouldUpdateTable: true,
    });
  }

  handleNavItems(data) {
    console.log(data);
    this.setState(data);
  }

  handlePageItems(data) {
    console.log(data);
    this.setState(data);
  }

  handleChangeValue = e => this.setState({ pagename: e.target.value });
  setFramework = e => this.setState({ pagename: e.target });

  onDismiss() {
    this.setState({ visible: false });
  }

  handleInputChange(event) {
    console.log(event.target.value);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      name: event.target.innerText,
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggledropdown(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggledropdownAccessType(event) {
    this.setState({
      dropdownOpenAccessType: !this.state.dropdownOpenAccessType,
    });
  }

  toggleDropdownTools(event) {
    this.setState({
      dropdownOpenTools: !this.state.dropdownOpenTools,
    });
  }

  toggleInputDropDown() {
    this.setState({
      inputDropdownOpen: !this.state.inputDropdownOpen,
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen,
    });
  }

  toggleSplitAccessTypes() {
    this.setState({
      splitButtonOpenAccessTypes: !this.state.splitButtonOpenAccessTypes,
    });
  }

  toggleSplitTools() {
    this.setState({
      splitButtonOpenTools: !this.state.splitButtonOpenTools,
    });
  }

  toggleActiveCard(e) {
    this.clean();
    if (e.target.value === 'false') {
      this.setState({
        leftCard: 'true',
      });
    }
    if (e.target.value === 'true') {
      this.setState({
        leftCard: 'false',
      });
    }
  }

  toggleSecondCard(e) {
    this.clean();
    this.setState({
      leftCard: 'false',
    });
  }

  toggleSecondCardTest(e) {
    this.clean();
    this.setState({
      leftCardTest: 'false',
    });
  }

  toggleActiveCardTest(e) {
    this.clean();
    if (e.target.value === 'false') {
      this.setState({
        leftCardTest: 'true',
      });
    }
    if (e.target.value === 'true') {
      this.setState({
        leftCardTest: 'false',
      });
    }
  }

  togglePopover(e) {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  changeValue(e) {
    this.setState({ dropDownValue: e.currentTarget.textContent });
    const value = e.currentTarget.getAttribute('pagename');

    this.setState({
      pagename: value,
    });
  }

  changeFrameworkValue(e) {
    this.setState({ dropDownValue: e.currentTarget.textContent });
    const framevalue = e.currentTarget.getAttribute('framevalue');

    this.setState({
      pagename: framevalue,
    });
  }

  async componentDidMount() {
    await this.updateDropdown();
    await this.getNavList();
    await this.getFieldList();
    await this.initializeColumns();
  }

  initializeColumns() {
    this.setState({
      // columns: ['#', 'Page', 'SubPage', 'SubPage Selector', 'Field Label', 'Field Name Selector', 'Type', 'Value'],
      columns: ['#', 'Page', 'SubPage', 'SubPage Selector'],
      columnstests: ['#', 'SubPage', 'Field Label', 'Value'],
    });
  }

  async updateDropdown() {
    console.log(this.state.url);
    const dataSetCollection = await getUniqueNames(this.state.url);
    this.setState({
      actions: dataSetCollection,
    });
  }

  async getNavList() {
    if (this.state.pagename !== '') {
      const dataSetCollection = await getNavItems(this.state.url, this.state.pagename, 'false');
      this.setState({
        navItems: dataSetCollection,
      });
    }
  }

  async getFieldList() {
    if (this.state.pagename !== '' && this.state.pagename !== null) {
      const dataSetCollection = await getFieldNames(this.state.url, this.state.pagename, 'false');
      this.setState({
        pageObjectsNames: dataSetCollection,
      });
    }
  }

  async handleTypes(event) {
    this.setState({
      typeName: event.target.value,
    });
  }

  async handleTypesGenerationProcess(event) {
    this.setState({
      typeNameSelectors: event.target.value,
    });
  }

  async handleSubmitTest() {
    event.preventDefault();
    await this.handleNavTest(this.state.leftCardTest);
    this.setState({
      visible: true,
    });
    try {
      let data = await postScenarioData2(this.state.url,
        {
          istest: 'true',
          pagename: this.state.pagename,
          navname: this.state.dropdownpageobjects,
          navnameselector: '',
          fieldname: this.state.dropDownFieldObjects,
          selector: '',
          type: '',
          value: this.state.pageObjectValue,
        });
      console.log(data);
      this.setState({
        scenarios: data,
      });

      this.setState({
        visible: false,
      });
      await this.initializeColumns();
      await this.updateTable();
      await this.toggleSecondCardTest();
    } catch (e) {
    }
  }

  async handleNav() {
    if (this.state.leftCard === 'true') {
      this.setState({
        objectname: '',
        objectselector: '',
        typeName: '',
        objectvalue: '',
      });
    } else {
      this.setState({
        navname: '',
        navnameselector: '',
      });
    }
  }

  async handleNavTest(leftCard) {
    if (leftCard === 'true') {
      this.setState({
        inputDropDownPageObjects: '',
        pageObjectValue: '',
      });
    } else {
      this.setState({
        dropDownPageObjects: '',
      });
    }
  }

  async clean() {
    this.setState({
      objectname: '',
      dropdownpageobjects: '',
      inputDropDownPageObjects: '',
      pageObjectValue: '',
      objectselector: '',
      typeName: '',
      objectvalue: '',
      navname: '',
      navnameselector: '',
    });
  }

  async handleSubmitPageObjectModel(event) {
    event.preventDefault();
    await this.handleNav();
    this.setState({
      visible: true,
    });
    try {
      let data = await postScenarioData2(this.state.url,
        {
          istest: 'false',
          pagename: this.state.pagename,
          navname: this.state.navname,
          navnameselector: this.state.navnameselector,
          fieldname: this.state.objectname,
          selector: this.state.objectselector,
          type: this.state.typeName,
          value: this.state.objectvalue,
        });
      this.setState({
        scenarios: data,
        visible: false,
      });
      await this.updateDropdown();
      await this.getNavList();
      await this.getFieldList();
      await this.initializeColumns();
      await this.toggleSecondCard();
      await this.updateTable();
    } catch (e) {
    }
  }

  async update(event) {
    this.state.url = event.target.value;
    await this.updateDropdown();
    await this.getNavList();
    await this.getFieldList();
    await this.initializeColumns();
    await this.toggleSecondCard();
    await this.updateTable();
  }

  async autoFillObjects(event) {
    event.preventDefault();
    try {
      let data = await autoFill(this.state.url, this.state.pagename);
      await this.updateTable();
    } catch (e) {
    }
  }

  async autoFillPageObjects(event) {
    let data =
      {
        istest: 'false',
        pagename: this.state.pagename,
        url: this.state.generateUrl,
        selectors: this.state.selectors1 + '___' + this.state.selectors2 + '___' + this.state.selectors3,
        accessTypes: this.state.typeNameSelectors,
        pages: this.state.toolSelectedPage,
      };
    console.log(data);

    event.preventDefault();
    try {
      console.log('was here');
      let data = await autoFillPageObjects(this.state.url,
        {
          istest: 'false',
          pagename: this.state.pagename,
          url: this.state.generateUrl,
          selectors: this.state.selectors1 + '___' + this.state.selectors2 + '___' + this.state.selectors3,
          accessTypes: this.state.typeNameSelectors,
        });
      await this.updateTable();
      await this.updateDropdown();
      await this.getNavList();
      await this.getFieldList();
    } catch (e) {
    }
  }

  async uploadFile(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    await fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
    };
    fileReader.onerror = (error) => {
    };
  }

  renderSomething() {
    if (this.state.renderSomething !== 'false') {
      return (
        <Input placeholder='Page name' name="pagename" type="input"
               onChange={this.handleInputChange}/>
      );
    }
    this.state.toolSelectedPage = this.state.pagename;
  }

  renderGoTo() {
    if (this.state.leftCard === 'true') {
      return (
        <div>
          <Row>
            <Col xs="4">
              <br/>
              <Card>
                <CardHeader color="link" icon="info" tag="h5">Create Path to Page
                  <Button className="float-right" type="switch" size="sm" name="leftCard" outline color="secondary"
                          value={this.state.leftCard} onClick={this.toggleActiveCard}>Switch</Button>
                </CardHeader>
                <CardBody style={{ backgroundColor: 'Light' }}>
                  <br/>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">@ Label&nbsp;&nbsp;&nbsp;&nbsp;</InputGroupAddon>
                    <Input placeholder="Example: addProduct" name="navname"
                           type="input"
                           value={this.state.navname || ''}
                           onChange={this.handleInputChange}/>
                  </InputGroup>
                  <br/>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">@ Selector</InputGroupAddon>
                    <Input placeholder="Example: element[attribute='selector']" name="navnameselector"
                           type="input"
                           value={this.state.navnameselector || ''}
                           onChange={this.handleInputChange}/>
                  </InputGroup>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <TargetsSubPageHelp name='A'/>
                  <Button className="btn btn-default" type="submit"
                          onClick={this.handleSubmitPageObjectModel}>Save</Button>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <br/>
              <Card>
                <CardHeader color="link" icon="info" tag="h5">Submitted values</CardHeader>
                <Table url={this.state.url} dataset={this.state.pagename} columns={this.state.columns}
                       updateTableFromParent={this.updateTableFromChild}
                       shouldUpdateTable={this.state.shouldUpdateTable}/>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }

  renderAction() {
    if (this.state.leftCard !== 'true') {
      return (
        <div>
          <Row>
            <Col xs="4">
              <br/>
              <Card>
                <CardHeader color="link" icon="info" tag="h5">Target objects
                  <Button className="float-right" type="switch" size="sm" name="leftCard" outline color="secondary"
                          value={this.state.leftCard} onClick={this.toggleActiveCard}>Switch</Button>
                </CardHeader>
                <CardBody style={{ backgroundColor: 'Light' }}>
                  <form onSubmit={this.handleSubmitPageObjectModel}>
                    <InputGroup style={{ width: '100%' }}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <Input addon type="input" aria-label="type" value={this.state.typeName}/>
                          <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen}
                                                    toggle={this.toggleSplit}>
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledropdown}>
                              <DropdownToggle caret>
                                Choose Type
                              </DropdownToggle>
                              <DropdownMenu>
                                {this.state.types.map(e => {
                                  return <DropdownItem key={e.id}
                                                       dataset={e.typeName}
                                                       value={e.typeName}
                                                       onClick={this.handleTypes}
                                  >{e.typeName}
                                  </DropdownItem>;
                                })}
                              </DropdownMenu>
                            </ButtonDropdown>
                          </InputGroupButtonDropdown>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <br/>
                    <InputGroup style={{ width: '100%' }}>
                      <InputGroupAddon addonType="prepend">@
                        Field&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroupAddon>
                      <Input placeholder="Example: Product Name" name="objectname" type="input"
                             value={this.state.objectname}
                             onChange={this.handleInputChange}/>
                    </InputGroup>
                    <br/>
                    <InputGroup style={{ width: '100%' }}>
                      <InputGroupAddon addonType="prepend">@
                        Selector&nbsp;&nbsp;&nbsp;&nbsp;</InputGroupAddon>
                      <Input placeholder="Example #button1" name="objectselector" type="input"
                             value={this.state.objectselector}
                             onChange={this.handleInputChange}/>
                    </InputGroup>
                    <br/>
                    <InputGroup style={{ width: '100%' }}>
                      <InputGroupAddon addonType="prepend">@
                        Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroupAddon>
                      <Input
                        placeholder="Don't use if not necessary, target will be overridden by the target object variables."
                        name="objectvalue"
                        type="input"
                        value={this.state.objectvalue}
                        onChange={this.handleInputChange}/>
                    </InputGroup>
                  </form>
                  <TargetsSubPageHelp name='B'/>
                </CardBody>
              </Card>
            </Col>
            <Col xs="6">
              <br/>
              <Card>
                <CardHeader color="link" icon="info" tag="h5">Submitted values</CardHeader>
                <Table url={this.state.url} dataset={this.state.pagename} columns={this.state.columns}
                       updateTableFromParent={this.updateTableFromChild}
                       shouldUpdateTable={this.state.shouldUpdateTable}/>
              </Card>
            </Col>
          </Row>
        </div>);
    }
  }

  renderGoToTest(prop) {
    if (this.state.leftCardTest === 'true') {
      return (
        <div>
          <Row>
            <Col sm="4">
              <br/>
              <Card>
                <CardHeader color="link" icon="info" tag="h5">Create Path to Page
                  <Button className="float-right" type="switch" size="sm" name="leftCardTest" outline color="secondary"
                          value={this.state.leftCardTest} onClick={this.toggleActiveCardTest}>Switch</Button>
                </CardHeader>
                <CardBody style={{ backgroundColor: 'Light' }}>
                  <TargetInputSubPages url={this.state.url} navItems={this.state.navItems}
                                       handlerFromParent={this.handleNavItems}/>
                  <TargetInputSubPageHelp/>
                  <Button className="btn btn-default" color="warning" type="submit"
                          onClick={this.autoFillObjects}>Autofill</Button>{' '}
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <br/>
              <Card>
                <CardHeader color="link" icon="info" tag="h5">Submitted Values
                </CardHeader>
                <TableTests url={this.state.url} dataset={this.state.pagename} columns={this.state.columnstests}
                            updateTableFromParent={this.updateTableFromChild}
                            shouldUpdateTable={this.state.shouldUpdateTable}/>
              </Card>
            </Col>
          </Row>
        </div>);
    }
  }

  renderActionTest(prop) {
    if (this.state.leftCardTest !== 'true') {
      return (
        <div>
          <Row>
            <Col sm="4">
              <br/>
              <Card>
                <CardHeader color="link" icon="info" tag="h5">Target object variables
                  <Button className="float-right" type="switch" size="sm" name="leftCardTest" outline color="secondary"
                          value={this.state.leftCardTest} onClick={this.toggleActiveCardTest}>Switch</Button>
                </CardHeader>
                <CardBody style={{ backgroundColor: 'Light' }}>
                  <InputGroup style={{ width: '100%' }}>
                  </InputGroup>
                  <InputGroup style={{ width: '100%', padding: '10px' }}>
                    <TargetObjects url={this.state.url}
                                   pageObjectsNames={this.state.pageObjectsNames}
                                   handlerFromParant={this.handlePageItems}/>
                  </InputGroup>
                  <TargetsInputSubpageHelp/>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <br/>
              <Card>
                <CardHeader color="link" icon="info" tag="h5">Target subpage
                </CardHeader>
                <TableTests url={this.state.url} dataset={this.state.pagename} columns={this.state.columnstests}
                            updateTableFromParent={this.updateTableFromChild}
                            shouldUpdateTable={this.state.shouldUpdateTable}/>
              </Card>
            </Col></Row></div>);
    }
  }

  render() {
    return (
      <div>
        <HandleFramework url={this.state.url}
                         datasets={this.state.actions}
                         handlerFromParant={this.handleData} name="pagename"/>
        <br/>
        <div>
          <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss} fade={true}>
            Well done! You added property {this.state.property} with
            value {this.state.value} to {this.state.name}
          </Alert>
        </div>
        <Card>
          <CardHeader body inverse color="warning" tag="h5">Global Settings <FontAwesomeIcon icon={faJira} className="mr-lg-n1" size="2x" pull="right"/></CardHeader>
          <CardBody style={{ backgroundColor: 'Dark' }}>
            <br/>
            <TargetsMain url={this.state.url}
                         datasets={this.state.actions}
                         handlerFromParant={this.handleData} handlerFromParant1={this.handleTabFromChild}
                         name="pagename" handlerFromParent2={this.updateTable}/>
            <br/>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Button className="btn btn-default" name="renderSomething" value="true"
                          onClick={this.handleInputChange}
                          type="submit">Add</Button>
                  {this.renderSomething()}
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <br/>
            <TargetsMainHelp name='E'/>
          </CardBody>
        </Card>
        <br/>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }} disabled={!this.state.selectedPage}>Target
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '4',
              })
              }
              onClick={() => {
                this.toggle('4');
              }
              }
            >Target Input
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === '5',
              })
              }
              onClick={() => {
                this.toggle('5');
              }
              }
            >Cucumber
            </NavLink>
          </NavItem>
        </Nav>
        <br/>
        <br/>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            {this.renderGoTo()}
            {this.renderAction()}
            <br/>
            <br/>
            <br/>
          </TabPane>
          <br/>
          <TabPane
            tabId="4">
            {this.renderGoToTest('C')}
            {this.renderActionTest('D')}
          </TabPane>
          <TabPane tabId="3">
          </TabPane>
          <TabPane tabId="5">
            <CreateCucumberFile url={this.state.url} datasets={this.state.actions}
                                handlerFromParant={this.handleData} name="pagename"/>
          </TabPane>
        </TabContent>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Main;
