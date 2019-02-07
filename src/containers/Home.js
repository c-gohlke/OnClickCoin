import React, { Component } from 'react';
import Dropdown from '../components/Dropdown'


class Home extends Component {
  constructor(){
    super()
      this.state = {
          location: [
              {
                  id: 0,
                  title: "NYC",
                  key: 'location'

              },
              {
                  id: 1,
                  title: "BER",
                  key: 'location'

              },
              {
                id: 2,
                title: "MUN",
                key: 'location'
              }
          ]

      }
  }

    toggleSelected(id, key){
        let temp = this.state[key]
        temp[id].selected = !temp[id].selected
        this.setState({
            [key]: temp
        })
    }


  render() {
    return (

      <div className="OnClickCoin">
        Welcome to OnClickCoin!
          <Dropdown
              title="Click to select chain"
              list={this.state.location}
              toggleItem={this.toggleSelected}/>
      </div>

    );
  }
}

export default Home;
