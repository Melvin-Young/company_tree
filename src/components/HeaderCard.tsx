/* tslint:disable no-unused-expression jsx-no-lambda */

import React, { Component } from 'react';
import { ITeam } from '../utils/Team';

interface IProps {
  team: ITeam,
  displayNewTeam: (team: ITeam) => void,
  teamDisplayedOnClick: ITeam
}
interface IState {
  showStaff: boolean,
  team: ITeam
}
class HeaderCard extends Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      showStaff: false,
      team: props.team
    }
  }

  public render() {
    const { displayNewTeam, team, teamDisplayedOnClick } = this.props;
    const childTeams = team.getChildren();
    const childTeamContainer: any[] = [];
    childTeams.size && childTeams.forEach((childTeam: ITeam) => {
      childTeamContainer.push(<li key={childTeam.name}> {childTeam.name} </li>)
      childTeamContainer.push(<li key={childTeam.name}> {childTeam.name} </li>)
      childTeamContainer.push(<li key={childTeam.name}> {childTeam.name} </li>)
    })

    return (
      <div className='card' onClick={ () => displayNewTeam(teamDisplayedOnClick) }>
        <img src={require('./../images/brainstorming.jpg')} alt="Avatar" className="card-picture" />
        <h2> {team.name} Team</h2>
        <div className="team-member-list">
            <ul> {childTeamContainer} </ul>
        </div>
      </div>
    )
  }
}

export default HeaderCard;