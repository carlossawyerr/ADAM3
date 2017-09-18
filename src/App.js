import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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

import {orderBy} from 'lodash';

import {
  connectSearchBox,
  connectRefinementList,
  connectHits,
} from 'react-instantsearch/connectors';



const Hit=({hit}) =>

  <div className = "hit">

    <div className = "hit-image">
      <img src = {hit.IMAGE}/>
    </div>
    <div className = "hit-content">
      <div className = "hit-name">
        <img src = {hit.assortment_class}/>
      </div>
      <div className = "hit-it">
        <img src = {hit.it_checkmark_url}/>
      </div>
      <div className = "hit-price">
        <strong>Brand:</strong> {hit.Brand}
      </div>
      <div className = "hit-price">
        <strong>PID:</strong> {hit.PID}
      </div>
      <div className = "hit-price">
        <strong>COLOR:</strong> {hit.COLOR}
      </div>
      <div className = "hit-price">
        <strong>AUR:</strong> {hit.AUR}
      </div>
      <div className = "hit-price">
        <strong>FC:</strong> {hit.ticketed_retail}
      </div>
      <div className = "hit-price">
        <strong>Depth Units: </strong>{hit.Buy_Quantities}
      </div>
      <div className = "hit-recommended">
        <strong>{hit.Recommended}</strong>
      </div>

    </div>
  </div>


const Sidebar = () =>
  <div id="left-column">
    <h5>Year</h5>
      <RefinementList attributeName = "Year"/>
    <h5>Season</h5>
      <RefinementList attributeName = "Season Name"
        transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
    <span><h5>Receipt Month (On the floor)</h5></span>
      <RefinementList attributeName= "Month"
      transformItems={items => orderBy(items, ['label'], ['asc'])}/>

    <h5>FOB</h5>
      <RefinementList attributeName = "GMM"
      transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
    <h5>Div</h5>
      <RefinementList attributeName = "DIV"
      transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
    <h5>Departments</h5>
      <RefinementList attributeName = "DEPT"
      transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
      <h5>Brand</h5>
        <RefinementList attributeName = "Brand"
        transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
    <h5>Product</h5>
      <RefinementList attributeName = "PRODUCT_TYPE_NAME"
      transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
    <h5>Item Type</h5>
      <RefinementList attributeName = "assortment_class_name"
      transformItems={items => orderBy(items, ['label', 'count'], ['desc', 'asc'])}/>
    <h5>Lifestyle</h5>
      <RefinementList attributeName = "Lifestyle"
      transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
    <h5>Store Clusters</h5>
      <RefinementList attributeName = "Stores"
      transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
    <h5>Store Number</h5>
        <RefinementList attributeName = "Stores_2"
        transformItems={items => orderBy(items, ['label', 'count'], ['asc', 'desc'])}/>
  </div>

const Content  = () =>
  <div id ="right-column">
    <div className="slogan">Conceptual Assortment Planning Tool</div>
    <div>

      <Stats/>
      <SortBy
        defaultRefinement="Alfani"
        items = {[
        {value: 'Alfani', label:'Highest Recommended Depth'}
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
          apiKey="efbad3c0cb07be75c7a7fb5423c7d045"
          appId="DTZFN27JAW"
          indexName="Alfani">
        <header id="header">
        <img alt="instant-search-logo" src="https://image.ibb.co/hccoZQ/Macys_Logo.jpg"/>
        
          <SearchBox translations = {{placeholder:"Search"}}/>
        </header>
        <main>
        <div>
          <Sidebar/>
          <Content contentmsg={this.hitComponent}/>

        </div>
        </main>
        </InstantSearch>
      );
  }
}

export default App
