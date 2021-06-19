import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default class fyp extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: "" };
    this.SearchRecord();
    setTimeout(this.SearchRecord, 4000);
  }
  SearchRecord = () => {
    var SearchAPIURL = "localhost/fyp/temp.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application.json",
    };

    var Data = {};

    fetch(SearchAPIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({ temp: response[0].Temperature });
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };
  render() {
    return (
      <View style={styles.ViewStyle}>
        <TextInput style={styles.txt} value={this.state.temp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    padding: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    borderBottomWidth: 1,
    borderBottomColor: "red",
    marginBottom: 20,
  },
});
