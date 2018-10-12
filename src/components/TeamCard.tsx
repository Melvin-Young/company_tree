import React, { Component } from 'react';
import { ITeam } from '../utils/Team';

interface IProps {
  childTeam: ITeam
}

class Card extends Component<IProps, {}> {
  public render() {
    const teamName = this.props.childTeam.name;
    const subTeams = this.props.childTeam.getChildren();
    const subTeamArray: any[] = [];
    if(subTeams.size) {
      subTeams.forEach((subTeam: ITeam) => {
        return subTeamArray.push(<li> {subTeam.name} </li>)
      })
    }
    return (
      <div className='team-card'>
        <h2> {teamName} </h2>
        <ul> {subTeamArray} </ul>
      </div>
    )
  }
}

export default Card;