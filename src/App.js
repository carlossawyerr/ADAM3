import React, {Component} from 'react';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
  RangeInput,
  RefinementList,
  PriceRanges,
  Menu

} from 'react-instantsearch/dom';

import {
  connectSearchBox,
  connectRefinementList,
  connectHits,
} from 'react-instantsearch/connectors';

const Hit=({hit}) =>
  <div className = "hit">
    <div className = "hit-image">
      <img src = {hit.Image}/>
    </div>
    <div className = "hit-content">
      <div className = "hit-name">
        <Highlight attributeName = "Brand.name" hit={hit}/>
      </div>
      <div className = "hit-price">
        ${hit.Price}
      </div>
      <div className = "hit-description">
        <Highlight attributeName = "Name" hit={hit}/>
      </div>
      <div className = "hit-description">
        <Highlight attributeName = "Description" hit={hit}/>
      </div>
      <div className = "hit-description">
        <Highlight attributeName = "Brand.name" hit={hit}/>
      </div>
    </div>
  </div>

const Sidebar = () =>
  <div id="left-column" >
    <h5>Category</h5>
      <RefinementList attributeName = "Category"/>
    <h5>Brand</h5>
      <RefinementList attributeName = "Brand.name"/>
    <h5>Color</h5>
      <RefinementList attributeName = "Color"/>
    <h5>Price</h5>
      <RangeInput attributeName = "Price"/>
  </div>

const Content  = () =>
  <div id ="right-column">
    <div>
      <Stats/>
      <SortBy
        defaultRefinement="Macys3"
        items = {[
        {value: 'Macys3', label:'Lowest Price'}


        ]}
      />

    </div>
    <Hits hitComponent = {Hit}/>
    <div id = "pagination" >
      <Pagination showlast/>
    </div>
  </div>

class App extends Component {
  render(){
    return(
        <InstantSearch
        apiKey="7e62c5ec4629b1a87c1b39941c59d945"
        appId="EWPB15349S"
        indexName="Macys3">
        <header id="header">
     <img alt="instant-search-logo" src="macys.png"/>
          <SearchBox translations = {{placeholder:"Search"}}/>
        </header>
        <main>
        <div>
          <Sidebar/>
          <Content/>
        </div>
        </main>
        </InstantSearch>
      );
  }
}


export default App
