import { PureComponent } from "react";
import { withRouter } from "react-router-dom";

//routr로 경로 이동시 이동한 페이지의 top으로 이동
class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);
  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  };
  render = () => this.props.children;
}
export default withRouter(ScrollIntoView);
 