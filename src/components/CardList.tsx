/* tslint:disable: no-unused-expression jsx-no-lambda*/

import React, { Component} from 'react';
import { ITeam } from '../utils/Team';

import { IStaff } from '../utils/Team';
import Card from './Card';
import HeaderCard from './HeaderCard';
import StaffCard from './StaffCard';

interface IProps {
  root: ITeam,
  displayNewTeam: (team: ITeam) => void
}

interface IState {
  root: ITeam,
  showStaff: boolean
}
class CardList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      root: props.root,
      showStaff: true
    }
  }

  public componentDidUpdate(prevProps: IProps): void {
    this.props !== prevProps && this.setState({root: this.props.root});
  }

  public showStaff() {
    this.setState({showStaff: true});
  }

  public showTeams() {
    this.setState({showStaff: false})
  }

  public render() {
    const { displayNewTeam, root } = this.props;
    const teamList: JSX.Element[] = [];
    const staffList: JSX.Element[] = [];
    
    this.state.root.getChildren().forEach((childTeam: ITeam) => {
      return teamList.push( 
        <Card
          key={childTeam.name}
          displayNewTeam={displayNewTeam}
          teamDisplayedOnClick={childTeam}
          team={childTeam}/>
        )
    });

    this.state.root.getNestedStaff().forEach((staffMember: IStaff) => {
      return staffList.push( 
        <StaffCard
          key={staffMember.name}
          staff={staffMember}/>
        )
    });

    return (
      <section>
        <div className="card-container-banner">
          <HeaderCard
            key={root.name}
            displayNewTeam={displayNewTeam}
            teamDisplayedOnClick={root.getParent()}
            team={root}/>
        </div>
        <hr/>
        <div className="card-container">
          {this.state.showStaff ? staffList : teamList }
        </div>
      </section>
    )
  }
}
export default CardList;