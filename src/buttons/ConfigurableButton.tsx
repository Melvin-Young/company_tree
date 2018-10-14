/* tslint:disable no-unused-expression jsx-no-lambda */

import React from "react";

interface IProps {
  buttonText: string,
  onClickFunc: () => void,
}

const ConfigurableButton = (props: IProps) => (
  <div>
    <button className="button" onClick={() => props.onClickFunc()}> { props.buttonText } </button>
  </div>
);

export default ConfigurableButton;