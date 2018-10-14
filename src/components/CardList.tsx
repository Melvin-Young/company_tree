/* tslint:disable: no-unused-expression jsx-no-lambda*/

import React, { Component} from 'react';
import { ITeam } from '../utils/Team';

import Card from './Card';

interface IProps {
  root: ITeam,
  displayNewTeam: (team: ITeam) => void
}

interface IState {
  root: ITeam
}
class CardList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      root: props.root
    }
  }

  public componentDidUpdate(prevProps: IProps): void {
    this.props !== prevProps && this.setState({root: this.props.root});
  }

  public render() {
    const { displayNewTeam, root } = this.props;
    const cardList: any[] = [];
  
    this.state.root.getChildren().forEach((childTeam: ITeam) => {
      return cardList.push( 
        <Card
          key={childTeam.name}
          displayNewTeam={displayNewTeam}
          teamDisplayedOnClick={childTeam}
          team={childTeam}/>
        )
    });
    return (
      <section>
        <div className="card-container-banner">
          <Card
            key={root.name}
            displayNewTeam={displayNewTeam}
            teamDisplayedOnClick={root.getParent()}
            team={root}/>
        </div>
        <hr/>
        <div className="card-container">
          { cardList }
        </div>
      </section>
    )
  }
}
export default CardList;