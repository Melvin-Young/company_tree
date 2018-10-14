/* tslint:disable no-unused-expression jsx-no-lambda */

import React, { Component } from 'react';
import ConfigurableButton from '../buttons/ConfigurableButton';
import { ITeam } from '../utils/Team';
import { IStaff } from '../utils/Team';

interface IProps {
  team: ITeam,
  setHeader: (team: ITeam) => void,
  triggerShowStaff: () => void,
  triggerShowTeams: () => void
}
interface IState {
  team: ITeam
}
class HeaderCard extends Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      team: props.team
    }
  }

  public render() {
    const { setHeader, triggerShowStaff, triggerShowTeams, team } = this.props;
    const staff = team.getStaff();
    const staffContainer: any[] = [];

    // Displays immediate staff members belonging to team currently rendered in header. 
    staff.size && staff.forEach((staffMember: IStaff) => {
      staffContainer.push(<li key={staffMember.id}> {staffMember.name} </li>)
    });

    return (
      <div className='card header-card'>
        <div onClick={ () => setHeader(team.getParent()) }>
          <img src={require('./../images/brainstorming.jpg')} alt="Avatar" className="card-picture" />
          <h2> {team.name} Team</h2>
          <div className="team-member-list">
              <ul> {staffContainer} </ul>
          </div>
        </div>
          <div className="button-container">
            {/* Displays both immediate and nested staff members as staff cards in body */}
            <ConfigurableButton buttonText="Show Staff" onClickFunc={() => triggerShowStaff()}/>
            <ConfigurableButton buttonText="Show Teams" onClickFunc={() => triggerShowTeams()}/>
          </div>
      </div>
    )
  }
}

export default HeaderCard;