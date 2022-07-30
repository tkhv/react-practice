import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.img} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.desc}</p>
        </div>
        <div className={classes.actions}>
          <button>TO FAV</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

// return <li key={props.meetup.id}>{...props.meetup}</li>;
// Spread children are not supported in React.
