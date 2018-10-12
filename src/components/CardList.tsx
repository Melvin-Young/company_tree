import React, { Component} from 'react';
import { ITeam } from '../utils/Team';

import TeamCard from './TeamCard';

interface IProps {
  root: ITeam
}

class CardList extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }
  public render() {
    const root: ITeam = this.props.root;
    const cardList: any[] = [];
  
    root.getChildren().forEach((childTeam: ITeam) => {
       return cardList.push( <TeamCard childTeam={childTeam}/>)
    });
    return (
      <section>
        <div className="card-header">
          <h1 className="root-team-header">{root.name}</h1>
          <hr/>
        </div>
        <div className="class-list">
          { cardList }
        </div>
      </section>
    )
  }
}
export default CardList;