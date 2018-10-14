/* tslint:disable: no-unused-expression no-console*/

import React, {Component} from 'react';
import './App.css';

import CardList from './components/CardList';
import Company, { ICompany } from './utils/Company';
import Team from './utils/Team';
import { ITeam } from './utils/Team';

interface IState {
  company: ICompany,
  renderedTeam: ITeam
}

class App extends Component<{}, IState>{
  constructor(props: any) {
    super(props);
    const company = createCompany();
    this.state = {
      company,
      renderedTeam: company.search(['CEO'])
    }
  }

  public setRender = (team: ITeam) => team.name && this.setState({renderedTeam: team});

  public render() {
    console.log(this.state.renderedTeam)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.company.companyName}</h1>
        </header>
        <div className="container">
          <CardList displayNewTeam={this.setRender} root={this.state.renderedTeam }/>
        </div>
      </div>
    );
  }
}



function createCompany() {
  // TODO read json from a file so that backups could be saved
  
  const tree =  new Company('Not A Shell Company');
  
  // CEO NODE
  const ceo = new Team('CEO');
  tree.addTeam(ceo, ['CEO']);

  // Top Level Organization
  const supplyChain = new Team('Supply Chain Management');
  const engineering = new Team('Engineering');
  const production = new Team("Production");
  const quality = new Team('Quality');
  const office = new Team('Office');


  tree.addTeam(engineering, ['CEO']);
  tree.addTeam(supplyChain, ['CEO']);
  tree.addTeam(production, ['CEO']);
  tree.addTeam(quality, ['CEO']);
  tree.addTeam(office, ['CEO']);

  // Engineering
  const newProd = new Team('New Production');
  const industrialEng = new Team('Industrial Engineering');
  
  tree.addTeam(newProd, ['CEO','Engineering']);
  tree.addTeam(industrialEng, ['CEO','Engineering']);

  // Supply Chain Management
  const purchasing = new Team('Purchasing');
  const planning = new Team('Planning');
  const warehouse = new Team('Warehouse');
  const customer = new Team('Customer');

  tree.addTeam(purchasing, ['CEO', 'Supply Chain Management']);
  tree.addTeam(planning, ['CEO', 'Supply Chain Management']);
  tree.addTeam(warehouse, ['CEO', 'Supply Chain Management']);
  tree.addTeam(customer, ['CEO', 'Supply Chain Management']);

  // Production
  const workshop1 = new Team('Workshop1');
  const workshop2 = new Team('Workshop2');
  const maintenance = new Team('Maintenance');

  tree.addTeam(workshop1, ['CEO', 'Production']);
  tree.addTeam(workshop2, ['CEO', 'Production']);
  tree.addTeam(maintenance, ['CEO', 'Production']);
  
  // Quality
  const qualityControl = new Team('Quality Control');
  const calibration = new Team('Calibration');
  const qualityEngineering = new Team('Quality Engineering');

  tree.addTeam(qualityControl, ['CEO', 'Quality']);
  tree.addTeam(calibration, ['CEO', 'Quality']);
  tree.addTeam(qualityEngineering, ['CEO', 'Quality']);

  // Office
  const officeManager = new Team('Office Manager');
  const jrOfficeManager = new Team('Office Manager Lite');
  const jrOfficeManagersSon = new Team('Office Manager Lite Baby Edition');

  tree.addTeam(officeManager, ['CEO', 'Office']);
  tree.addTeam(jrOfficeManager, ['CEO', 'Office', 'Office Manager']);
  tree.addTeam(jrOfficeManagersSon, ['CEO', 'Office', 'Office Manager', 'Office Manager Lite']);
 
  tree.addMemberToTeam(['CEO'], {name: 'Mr. CEO', id: 2, team: 'CEO'});
  tree.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 5, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 7, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 8, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 9, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 11, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 23, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 443, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Engineering'], {name: 'Dummy', id: 4334, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], {name: 'Dummy', id: 2, team: 'CEO'});
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], {name: 'Dummy', id: 3, team: 'CEO'});
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], {name: 'Dummy', id: 4, team: 'CEO'});
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], {name: 'Dummy', id: 5, team: 'CEO'});
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], {name: 'Dummy', id: 6, team: 'CEO'});
  tree.addMemberToTeam(['CEO', 'Production'], {name: 'Dummy', id: 5, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production'], {name: 'Dummy', id: 4, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production'], {name: 'Dummy', id: 342, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production'], {name: 'Dummy', id: 436, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production'], {name: 'Dummy', id: 43265, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production'], {name: 'Dummy', id: 543, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production'], {name: 'Dummy', id: 52462, team: 'Engineering'});
  tree.addMemberToTeam(['CEO'], {name: 'Mr. CEO', id: 2, team: 'CEO'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 5, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 23, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 523, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 551, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 32155, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 255, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 215, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 455, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 45235, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 5423, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Dummy', id: 425, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop1'], {name: 'Dummy', id: 325, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop2'], {name: 'Dummy', id: 325, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop2'], {name: 'Dummy', id: 25, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop2'], {name: 'Dummy', id: 325, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop2'], {name: 'Dummy', id: 235, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop1'], {name: 'Dummy', id: 25, team: 'Engineering'});
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop1'], {name: 'Dummy', id: 325, team: 'Engineering'});
  console.log(tree.getRoot());
  return tree;
}
export default App;
