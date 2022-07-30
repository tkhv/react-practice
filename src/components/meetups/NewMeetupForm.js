import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  const titleRef = useRef();
  const imgRef = useRef();
  const addrRef = useRef();
  const descRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const input = {
      title: titleRef.current.value,
      img: imgRef.current.value,
      addr: addrRef.current.value,
      desc: descRef.current.value,
    };
    console.log(input);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imgRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addrRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" required rows="5" ref={descRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
