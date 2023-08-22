import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart, removeToCart } from "../Service/Actions/action";

const mapStateToProps = (state) => ({
  data: state.cardItems.cardData
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;