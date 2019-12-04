import React from 'react';
import { Table, Button } from 'reactstrap';
import {deleteScenario, getAllScenariosByName} from '../../services/API/FetchServerData';
import { Doughnut } from 'react-chartjs-2';


class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
    this.onSelectCustomerRequest = this.onSelectCustomerRequest.bind(this);
    this.handleInputChange =this.handleInputChange.bind(this);

    this.state = {
      scenarios: [],
      seconds: 0,
      diagramUpdateFlag: false,
    };
  }

  inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    // May be call for search result
  }

  componentDidMount() {
  }

  async shouldComponentUpdate() {
    if (this.props.dataset !== '') {
      let data = await getAllScenariosByName(this.props.dataset,false);
      this.setState({
        scenarios: data,
      });
    }
    return true;
  }

  onSelectCustomerRequest(event) {
    console.log(event);
    let data = deleteScenario(event.target.value);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(name);
  }

  render() {
    return (
      <Doughnut data={this.state.scenarios} />
    );
  }
}

export default Charts;
