import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCountriesList, fetchSelectedLocation } from "./Actions/FetchCountriesAction";
import StandardDropdown from "./Components/StandardDropDown/StandardDropDown";
import CustomDropDown from './Components/CustomDropDown/CustomDropDown';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      addBtn: false,
    };
  }
  
  handleFilter = (e) => {
    e.preventDefault();
    const { count } = this.state;
    if (count > 0 && count <= 59) {
      this.props.countriesList(count);      
    }
  };

  itemSelected = (selectedCountry) => {    
   if(selectedCountry){
     this.props.selectedCountry(selectedCountry);
   }  
  };

  render() {
    const { countriesListInfo = [], selectedLocation : {location} } = this.props;
    
    const { addBtn } = this.state;
    return (
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <h1>Smart Drop Down</h1>
        </Row>
        <Row className="justify-content-md-center">
          <h2>Features to Select</h2>
        </Row>
        <Row className="justify-content-md-center">
          <form onSubmit={this.handleFilter}>
            <Row>
              <label>
                Number of Countries to Populate:{" "}
                <input
                  className="mr-3"
                  type="text"
                  onChange={(e) => {
                    this.setState({ count: e.target.value });
                  }}
                />
              </label>
              <div>Please Enter Valid Number: Range 1-59</div>
            </Row>
            <Row>
              <label>
                ADD/Select Option:{" "}
                <input
                  className="mr-3"
                  type="checkbox"
                  defaultChecked={this.state.addBtn}
                  onChange={(e) => {
                    this.setState({ addBtn: !this.state.addBtn });
                  }}
                />
              </label>
            </Row>
            <Row>
              <Button type="submit" value="Submit">
                Apply Filter
              </Button>
            </Row>
          </form>
        </Row>
        {!addBtn && (
          <div>
            <Row className="justify-content-md-center mt-5">
              <h2>Standard Drop Down</h2>
            </Row>
            <Row className="justify-content-md-center mt-5">
              <StandardDropdown
                list={countriesListInfo}
                itemSelected={this.itemSelected}
              />
            </Row>
          </div>
        )} 

        {addBtn && countriesListInfo && countriesListInfo.length > 0 && 
          <div>
          <Row className="justify-content-md-center mt-5">
            <h2>Custom DropDown with Create/Select Option</h2>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <CustomDropDown 
              list={countriesListInfo}
              itemSelected={this.itemSelected}
            />
          </Row>
        </div>
        }
        <Row>
          Selected Location : {location}
        </Row>       
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  countriesListInfo: state.result,
  selectedLocation: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    countriesList: (limit) => {
      dispatch(fetchCountriesList(limit));
    },

    selectedCountry: (selectedLocation) => {
      dispatch(fetchSelectedLocation(selectedLocation));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
