import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          img={meetup.image}
          title={meetup.title}
          address={meetup.address}
          desc={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

/* Spread children are not supported in React.
    <ul>
      <MeetupItem meetup={props.item} />
    </ul> */
