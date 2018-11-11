/* tslint:disable: no-unused-expression*/

import React, { Component } from 'react';
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

  public setHeader = (team: ITeam) => team.name && this.setState({ renderedTeam: team });

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.company.companyName}</h1>
        </header>
        <div className="container">
          <CardList company={this.state.company} setHeader={this.setHeader} renderTarget={this.state.renderedTeam} />
        </div>
      </div>
    );
  }
}

function createCompany() {
  // TODO read json from a file so that backups could be saved

  const tree = new Company('Not A Shell Company');

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

  tree.addTeam(newProd, ['CEO', 'Engineering']);
  tree.addTeam(industrialEng, ['CEO', 'Engineering']);

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

  tree.addMemberToTeam(['CEO'], { name: 'Mr. CEO', id: 2, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Engineering'], { name: 'Karen', id: 5, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Engineering'], { name: 'Richard', id: 7, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Engineering'], { name: 'Sandra', id: 8, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Engineering'], { name: 'Dirk', id: 9, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Engineering'], { name: 'Ashley', id: 11, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Engineering'], { name: 'Lando', id: 23, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Engineering'], { name: 'R2D2', id: 443, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Engineering'], { name: 'Legolas', id: 4334, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], { name: 'Aragorn', id: 2, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], { name: 'Cersei', id: 3, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], { name: 'Tyrion', id: 4, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], { name: 'Bale', id: 5, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Supply Chain Management'], { name: 'Josh Dobbs', id: 6, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production'], { name: 'John Kelly', id: 5, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production'], { name: 'James', id: 4, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production'], { name: 'Zlattan', id: 342, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production'], { name: 'Tiger', id: 436, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production'], { name: 'Tree', id: 43265, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production'], { name: 'Tony', id: 543, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production'], { name: 'Amber', id: 52462, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO'], { name: 'Mr. CEO', id: 2, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Sheree', id: 5, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Katelyn', id: 23, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Cameron', id: 523, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Blaine', id: 551, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'D Arte', id: 32155, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Gerald', id: 255, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Gigi', id: 215, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Niel', id: 455, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Mark', id: 45235, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Kerner', id: 5423, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], { name: 'Sam', id: 425, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop1'], { name: 'Anthony', id: 325, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop2'], { name: 'Lea', id: 325, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop2'], { name: 'Mary', id: 25, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop2'], { name: 'Lauryn', id: 325, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop2'], { name: 'Andre', id: 235, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop1'], { name: 'Keith', id: 25, team: ['CEO', 'Engineering'] });
  tree.addMemberToTeam(['CEO', 'Production', 'Workshop1'], { name: 'Ezhane', id: 325, team: ['CEO', 'Engineering'] });
  return tree;
}
export default App;
