import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsDirectoryFetching } from "../redux/directory/directory.selector";
import Directory from "../components/Directory";
import { selectDirectorySections } from "../redux/directory/directory.selector";
import WithSpinner from "../components/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsDirectoryFetching,
  sections: selectDirectorySections,
});

const DirectoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Directory);

export default DirectoryContainer;
