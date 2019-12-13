import React from 'react';
import {
  Alert,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroupButtonDropdown, ButtonDropdown,
} from 'reactstrap';

class HandleFramework extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: '',
    };
    this.setFramework = this.setFramework.bind(this);
    this.changeFrameworkValue = this.changeFrameworkValue.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.setFramework = this.setFramework.bind(this);
    this.select = this.select.bind(this);
    this.toggledropdown = this.toggledropdown.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.downLoadFramework = this.downLoadFramework.bind(this);
    this.state = {
      dropDownValue: 'Select action',
      splitButtonOpen: false,
      dropdownOpen: false,
      datasetname: null,
      generatePage: 'Page Name',
    };
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      name: event.target.innerText,
    });
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

  changeValue(e) {
    this.setState({dropDownValue: e.currentTarget.textContent});
    let value = e.currentTarget.getAttribute('dataset');
    this.setState({
      datasetname: value,
    });
  }


  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen,
    });
  }

  setFramework(value) {
    const target = event.target;

    this.setState({
      pagename: target.value,
    });
  }

  changeFrameworkValue(e) {
    this.setState({dropDownValue: e.currentTarget.textContent});
    let framevalue = e.currentTarget.getAttribute('framevalue');

    this.setState({
      pagename: framevalue,
    });
  }

  submitHandler(evt) {
    evt.preventDefault();

    this.props.handlerFrameworkFromParant(this.state.pagename);

    this.setState({
      pagename: '',
    });
  }

  async downLoadFramework() {
    // try {
    //   let data = await getFrameWork();
    //   console.log(data);
    //   this.setState({
    //     frameworkData: data,
    //   });
    //
    //   this.setState({
    //     visible: false,
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
  }

  render() {
    return (
      <div>
        {/*<InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>*/}
        {/*  <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggledropdown}>*/}
        {/*    <DropdownToggle caret>*/}
        {/*      {this.state.generatePage}*/}
        {/*    </DropdownToggle>*/}
        {/*    <DropdownMenu min-width="100px" label={'test'}>*/}
        {/*      {this.props.datasets.map(e => {*/}
        {/*        return <DropdownItem key={e.id}*/}
        {/*                             dataset={e.pagename}*/}
        {/*                             value={e.pagename}*/}
        {/*                             onClick={this.handleChange}*/}
        {/*        >{e.pagename}*/}
        {/*        </DropdownItem>;*/}
        {/*      })}*/}
        {/*    </DropdownMenu>*/}
        {/*    <Button outline type="submit" onClick={this.downLoadFramework}>Generate</Button>*/}
        {/*  </ButtonDropdown>*/}
        {/*</InputGroupButtonDropdown>*/}
      </div>);
  }
}

export {HandleFramework};
