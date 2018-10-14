/* tslint:disable: no-unused-expression jsx-no-lambda*/

import React, { Component} from 'react';
import { ICompany } from '../utils/Company';
import { ITeam } from '../utils/Team';
import { IStaff } from '../utils/Team';
import HeaderCard from './HeaderCard';
import StaffCard from './StaffCard';
import TeamCard from './TeamCard';

interface IProps {
  company: ICompany,
  renderTarget: ITeam,
  setHeader: (team: ITeam) => void
}

interface IState {
  renderTarget: ITeam,
  showStaff: boolean
}
class CardList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      renderTarget: props.renderTarget,
      showStaff: false
    }
  }

  // Updates state whenever a card is clicked and new props for the team to render are passed down
  public componentDidUpdate(prevProps: IProps): void {
    this.props !== prevProps && this.setState({renderTarget: this.props.renderTarget});
  }

  // Show Staff and Show Teams toggle whether Team Cards or Staff Cards will be rendered in body of component
  public showStaff = () => {
    this.setState({showStaff: true});
  }

  public showTeams = () => {
    this.setState({showStaff: false});
  }

  public render() {
    const { setHeader, company } = this.props;
    const teamList: JSX.Element[] = [];
    const staffList: JSX.Element[] = [];
    
    this.state.renderTarget.getChildren().forEach((childTeam: ITeam) => {
      return teamList.push( 
        <TeamCard
          company={company}
          key={childTeam.name}
          setHeader={setHeader}
          team={childTeam}/>
        );
    });

    // Nested Staff is all staff assigned to a team or assigned to one of its sub teams
    this.state.renderTarget.getNestedStaff().forEach((staffMember: IStaff) => {
      return staffList.push(<StaffCard key={staffMember.id} staff={staffMember}/>);
    });

    return (
      <section>
        <div className="card-container-banner">
          <HeaderCard
            key={this.state.renderTarget.name}
            setHeader={setHeader}
            triggerShowTeams = {this.showTeams}
            triggerShowStaff = {this.showStaff}
            team={this.state.renderTarget}/>
        </div>
        <hr/>
        <div className="card-container">
          { this.state.showStaff ? staffList : teamList }
        </div>
      </section>
    );
  }
}
export default CardList;