import React from 'react';
import {
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupButtonDropdown,
  ButtonDropdown,
  ToastBody,
  ToastHeader,
  Toast,
  Fade,
  Alert,
  Card,
  CardTitle,
  Col,
  Row,
  TabPane, CardHeader, CardBody, Progress,
} from 'reactstrap';
import {
  getAllScenariosByName,
  getFrameworkObjects,
  getFile,
  getSharp,
  getFrameWork,
  postScenarioData,
} from '../../services/API/FetchServerData';

class Structure extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputField: '',
    };
    this.toggleSplit = this.toggleSplit.bind(this);
    this.toggledropdown = this.toggledropdown.bind(this);
    this.downLoadFramework = this.downLoadFramework.bind(this);
    this.renderSomething = this.renderSomething.bind(this);
    this.getSharpPageObjectModel = this.getSharpPageObjectModel.bind(this);
    this.getJsonPageObjectModel = this.getJsonPageObjectModel.bind(this);
    this.getJsonPageObjectModel1 = this.getJsonPageObjectModel1.bind(this);
    this.getJavaPageObjectModel = this.getJavaPageObjectModel.bind(this);
    this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: '',
      generatePage: 'Page Name',
      frameworkData: '',
      fadeIn: false,
      frameworkObjSharp: '',
      jsonObjSharp: '',
      frameworkData1: '',
      frameworkObjJava: '',
    };
  }

  toggledropdown(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  handleChange(event) {
    this.setState({
      generatePage: event.target.value,
    });
  }


  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen,
    });
  }

  async downLoadFramework() {
    try {
      let data = await getAllScenariosByName(this.props.url,this.state.generatePage, 'false');
      console.log(data);
      this.setState({
        frameworkData: data,
      });

      this.setState({
        visible: false,
      });
    } catch (e) {
      console.log(e);
    }
    try {
      let data = await postScenarioData(this.state.url,this.state.generatePage, 'false');
      console.log('postScenarioData' + data);
      this.setState({
        frameworkData1: data,
      });
    } catch (e) {
      console.log(e);
    }
    try {
      let data = await getFrameworkObjects(this.props.url,'getSharp', this.state.generatePage, 'false');
      console.log(data);
      this.setState({
        frameworkObjSharp: data,
      });
    } catch (e) {
      console.log(e);
    }

    try {
      let data = await getFrameworkObjects(this.props.url,'getJava', this.state.generatePage, 'false');
      console.log(data);
      this.setState({
        frameworkObjJava: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getSharpPageObjectModel() {
    try {
      const file = new Blob([document.getElementById('sharpObject').value], {type: 'text/plain'});
      let a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.setAttribute('download', this.state.generatePage + '.cs');
      a.click();
      return a;
    } catch (e) {
      console.log(e);
    }
  }

  async getJavaPageObjectModel() {
    try {
      const file = new Blob([document.getElementById('javaObject').value], {type: 'text/plain'});
      let a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.setAttribute('download', this.state.generatePage + '.java');
      a.click();
      return a;
    } catch (e) {
      console.log(e);
    }
  }

  async getJsonPageObjectModel() {
    try {
      const file = new Blob([document.getElementById('jsonObject').value], {type: 'text/plain'});
      let a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.setAttribute('download', this.state.generatePage + '.json');
      a.click();
      return a;
    } catch (e) {
      console.log(e);
    }
  }

  async getJsonPageObjectModel1() {
    try {
      const file = new Blob([document.getElementById('jsonObject1').value], {type: 'text/plain'});
      let a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.setAttribute('download', this.state.generatePage + '.json');
      a.click();
      return a;
    } catch (e) {
      console.log(e);
    }
  }

  renderSomething() {
    if (this.state.frameworkData) {
      this.state.fadeIn = true;
      return this.state.frameworkData.map((item, i) => {
        if (item.navname !== '') {
          return (
            <Toast key={i}>
              <ToastHeader style={{backgroundColor: '#FA8072'}}>
                {item.navname}
              </ToastHeader>
            </Toast>
          );
        }
        if (item.navname == '') {
          return (
            <Toast key={i}>
              <ToastBody>
                Name: {item.fieldname}
                <br/>
                Type: {item.type}
              </ToastBody>
            </Toast>
          );
        }
      });
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="6">
            <br/>
            <Card>
              <CardHeader tag="h5">Pages</CardHeader>
              <CardBody body style={{backgroundColor: 'Light'}}>
                <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen}
                                          toggle={this.toggleSplit}>
                  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledropdown}>
                    <DropdownToggle caret>
                    </DropdownToggle>
                    <DropdownMenu min-width="100px" label={'test'}>
                      {this.props.datasets.map(e => {
                        return <DropdownItem key={e.id}
                                             dataset={e.pagename}
                                             value={e.pagename}
                                             onClick={this.handleChange}
                        >{e.pagename}
                        </DropdownItem>;
                      })}
                    </DropdownMenu>
                    <Button outline type="submit" onClick={this.downLoadFramework}>Generate</Button>
                    <br/>
                  </ButtonDropdown>
                </InputGroupButtonDropdown>
                <div>
                  <div className="p-3 bg-docs-transparent-grid my-2 rounded">
                    <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                      <Alert color="light">
                        {this.state.generatePage}
                      </Alert>
                    </Fade>
                    {this.renderSomething()}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <br/>
            <Card>
              <CardHeader tag="h5">Target Frames</CardHeader>
              <CardBody body style={{backgroundColor: 'Light'}}>
                <p>JSON Page Object Model type 1</p>
                <Input type="textarea" name="text" id="jsonObject" value={JSON.stringify(this.state.frameworkData)}/>
                <Button onClick={this.getJsonPageObjectModel} download>Download</Button>
                <br/>
                <br/>
                <p>JSON Page Object Model type 2</p>
                <Input type="textarea" name="text" id="jsonObject1" value={JSON.stringify(this.state.frameworkData1)}/>
                <Button onClick={this.getJsonPageObjectModel1} download>Download</Button>
                <br/>
                <p>C# Page Object Model</p>
                <Input type="textarea" name="text" id="sharpObject" value={this.state.frameworkObjSharp}/>
                <Button onClick={this.getSharpPageObjectModel} download>Download</Button>
                <br/>
                <p>Java Page Object Model</p>
                <Input type="textarea" name="text" id="javaObject" value={this.state.frameworkObjJava}/>
                <Button onClick={this.getJavaPageObjectModel} download>Download</Button>
                <br/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export {Structure};
