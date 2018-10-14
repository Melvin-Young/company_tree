/* tslint:disable no-unused-expression jsx-no-lambda */

import React from "react";
import { IStaff } from "../utils/Team";

interface IProps {
  staff: IStaff;
}

const StaffCard = (props: IProps) => (
  <div className="card">
    <img
      src={require("./../images/profile.png")}
      alt="Avatar"
      className="staff-picture"
    />
    <h2> {props.staff.name}</h2>
  </div>
);

export default StaffCard;