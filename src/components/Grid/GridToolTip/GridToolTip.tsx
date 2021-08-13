import * as React from "react";

const QGridToolTip = (props: any) => {
  console.log("tooltip props ", props);
  React.useEffect(() => {
    console.log("tier data", props.data)
  })
  return (
    <>
     <div className="Q-grid-cell__tooltip--innercontent">
        <span className="Q-grid-cell__tooltip--innercontent__druglabel">
            {props.data.drugLabel}
        </span>
      </div>
      <div className="Q-grid-cell__tooltip--innerdata">
        {props.tooltipMock1.map((e: any, i: number) => (
          <div key={i + ""} className="Q-grid-cell__tooltip--innerdata-block">
            <span className="Q-grid-cell__tooltip--innerdata-block__label">
              {e.label}
            </span>
            <span className="Q-grid-cell__tooltip--innerdata-block__labelvalue">
              {e.labelValue}
            </span>
          </div>
        ))}
        <br />
        {props.tooltipMock2.map((e: any, i: number) => (
          <div key={i + ""} className="Q-grid-cell__tooltip--innerdata-block">
            <span className="Q-grid-cell__tooltip--innerdata-block__label">
              {e.label}
            </span>
            <span className="Q-grid-cell__tooltip--innerdata-block__labelvalue">
              {e.labelValue}
            </span>
          </div>
        ))}
        <br />
        {props.tooltipMock3.map((e: any, i: number) => (
          <div key={i + ""} className="Q-grid-cell__tooltip--innerdata-block">
            <span className="Q-grid-cell__tooltip--innerdata-block__label">
              {e.label}
            </span>
            <span className="Q-grid-cell__tooltip--innerdata-block__labelvalue">
              {e.labelValue}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default QGridToolTip;
