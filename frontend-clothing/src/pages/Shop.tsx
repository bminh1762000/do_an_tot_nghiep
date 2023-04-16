import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "../redux/shop/shop.actions";

import CollectionsOverviewContainer from "../container/CollectionOverviewContainer";
import CollectionPageContainer from "../container/CollectionContainer";
import { selectCollections } from "../redux/shop/shop.selector";

const ShopPage = ({ match, fetchCollectionsStart, collections }) => {
  useEffect(() => {
    if (!collections) {
      fetchCollectionsStart();
    }
  }, [fetchCollectionsStart, collections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
