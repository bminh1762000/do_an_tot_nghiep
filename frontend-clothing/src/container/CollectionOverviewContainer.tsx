import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import {
  selectIsCollectionFetching,
  selectCollectionsForPreview,
} from "../redux/shop/shop.selector";
import WithSpinner from "../components/WithSpinner";
import CollectionsOverview from "../components/CollectionOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsForPreview,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
