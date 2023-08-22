import { connect } from "react-redux";
import Value from "../components/Value";

const mapStateToProps = (state) => ({
  data: state.cardItems.cardData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Value);
