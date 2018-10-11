import React, {Component} from 'react';
import './App.css';

import logo from './logo.svg';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;


// function createTree() {
//   // This would be better if it read json from a file so that backups could be saved
  
//   // CEO ROOT NODE
//   let ceo = new TreeNode('CEO');
//   let tree =  new Tree(ceo);
  

//   let supplyChain = new TreeNode('Supply Chain Management');
//   let engineering = new TreeNode('Engineering');
//   let production = new TreeNode("Production");
//   let quality = new TreeNode('Quality');
//   let office = new TreeNode('Office');


//   tree.addTeam(engineering, ['CEO']);
//   tree.addTeam(supplyChain, ['CEO']);
//   tree.addTeam(production, ['CEO']);
//   tree.addTeam(quality, ['CEO']);
//   tree.addTeam(office, ['CEO']);

//   // Engineering
//   let newProd = new TreeNode('New Production');
//   let industrialEng = new TreeNode('Industrial Engineering');
  
//   tree.addTeam(newProd, ['CEO','Engineering']);
//   tree.addTeam(industrialEng, ['CEO','Engineering']);

//   // Supply Chain Management
//   let purchasing = new TreeNode('Purchasing');
//   let planning = new TreeNode('Planning');
//   let warehouse = new TreeNode('Warehouse');
//   let customer = new TreeNode('Customer');

//   tree.addTeam(purchasing, ['CEO', 'Supply Chain Management']);
//   tree.addTeam(planning, ['CEO', 'Supply Chain Management']);
//   tree.addTeam(warehouse, ['CEO', 'Supply Chain Management']);
//   tree.addTeam(customer, ['CEO', 'Supply Chain Management']);

//   // Production
//   let workshop1 = new TreeNode('Workshop1');
//   let workshop2 = new TreeNode('Workshop2');
//   let maintenance = new TreeNode('Maintenance');

//   tree.addTeam(workshop1, ['CEO', 'Production']);
//   tree.addTeam(workshop2, ['CEO', 'Production']);
//   tree.addTeam(maintenance, ['CEO', 'Production']);
  
//   //Quality
//   let qualityControl = new TreeNode('Quality Control');
//   let calibration = new TreeNode('Calibration');
//   let qualityEngineering = new TreeNode('Quality Engineering');

//   tree.addTeam(qualityControl, ['CEO', 'Quality']);
//   tree.addTeam(calibration, ['CEO', 'Quality']);
//   tree.addTeam(qualityEngineering, ['CEO', 'Quality']);

//   // Office
//   let officeManager = new TreeNode('Office Manager');
//   let jrOfficeManager = new TreeNode('Office Manager Lite');
//   let jrOfficeManagersSon = new TreeNode('Office Manager Lite Baby Edition');

//   tree.addTeam(officeManager, ['CEO', 'Office']);
//   tree.addTeam(jrOfficeManager, ['CEO', 'Office', 'Office Manager']);
//   tree.addTeam(jrOfficeManagersSon, ['CEO', 'Office', 'Office Manager', 'Office Manager Lite']);

//   console.log(tree.root)
// }

