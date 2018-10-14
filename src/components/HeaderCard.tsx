/* tslint:disable no-unused-expression no-console jsx-no-lambda */

import React, { Component } from 'react';
import ConfigurableButton from '../buttons/ConfigurableButton';
import { ITeam } from '../utils/Team';
import { IStaff } from '../utils/Team';

interface IProps {
  team: ITeam,
  displayNewTeam: (team: ITeam) => void,
  showStaff: () => void,
  showTeams: () => void
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
    const { displayNewTeam, showStaff, showTeams, team } = this.props;
    const staff = team.getStaff();
    const staffContainer: any[] = [];
    staff.size && staff.forEach((staffMember: IStaff) => {
      staffContainer.push(<li key={staffMember.id}> {staffMember.name} </li>)
    });

    return (
      <div className='card header-card'>
        <div onClick={ () => displayNewTeam(team.getParent()) }>
          <img src={require('./../images/brainstorming.jpg')} alt="Avatar" className="card-picture" />
          <h2> {team.name} Team</h2>
          <div className="team-member-list">
              <ul> {staffContainer} </ul>
          </div>
        </div>
          <div className="button-container">
            <ConfigurableButton buttonText="Show Staff" onClickFunc={() => showStaff()}/>
            <ConfigurableButton buttonText="Show Teams" onClickFunc={() => showTeams()}/>
          </div>
      </div>
    )
  }
}

export default HeaderCard;