import moment from "moment";
const footer = () => {
  return (
    <footer className="col-xs-12 text-center my-0 py-2">
      © {moment().format("YYYY")} Arizona Onstage Productions
    </footer>
  );
};
export default footer;
