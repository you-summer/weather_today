import "./TodayImportantItem.css";

const TodayImportantItem = ({ text, data, icon, unit }) => {
  return (
    <div className="TodayImportantItem">
      <div className="todayImportantItem_title">{text}</div>
      <div className="todayImportantItem_content">
        <img className="img" src={icon} />
        <div className="text">
          {data}
          {unit}
        </div>
      </div>
    </div>
  );
};

export default TodayImportantItem;
