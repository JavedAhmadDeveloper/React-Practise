import "./styles.css";
import moment from "moment";

export default function Momentcomp() {
  const time = moment().format("MMM D, YYYY [at] hh.mm A");
  return (
    <div>
      <h1> Time is: </h1>
      <p> {time}</p>
    </div>
  );
}
