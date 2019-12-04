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
  getCucumberTest,
} from '../../services/API/FetchServerData';

class StructureTest extends React.Component {
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
    this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      generatePage: 'Page Name',
      frameworkData: null,
      fadeIn: false,
      frameworkObjSharp: '',
      jsonObjSharp: '',
      frameworkData1: '',
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
      let data = await getCucumberTest(this.props.url,'createCucumberTest', this.state.generatePage, 'true');
      console.log(data);
      this.setState({
        frameworkObjSharp: data,
      });

      this.setState({
        visible: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async getSharpPageObjectModel() {
    try {
      const file = new Blob([document.getElementById('feature').value], {type: 'text/plain'});
      let a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.setAttribute('download', this.state.generatePage + '.feature');
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
        return (
          <Toast key={i}>
            <ToastHeader>
              {item.navname}
            </ToastHeader>
            <ToastBody>
              Name: {item.fieldname}
              <br/>
              Type: {item.type}
            </ToastBody>
          </Toast>
        );
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
              <CardBody style={{backgroundColor: 'Light'}}>
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
              <CardHeader tag="h5">Results</CardHeader>
              <CardBody style={{backgroundColor: 'Light'}}>
              <Input type="textarea" rows="30"  name="text" id="feature" value={this.state.frameworkObjSharp}/>
              <Button onClick={this.getSharpPageObjectModel} download>Download</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export {StructureTest};
