import React, { Component } from "react"


var FontAwesome = require('react-fontawesome');

//React.render(<FontAwesome name='rocket' />, document.body);

class Dropdown extends  Component {

    constructor(props){
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title,

        }
    }


    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    handleClickOutside(){
        this.setState({
            listOpen: false
        })
    }

    toggleSelected(id, key){
        let temp = this.state[key]
        temp[id].selected = !temp[id].selected
        this.setState({
            [key]: temp
        })
    }


    render(){
        const{list} = this.props
        const{listOpen, headerTitle} = this.state
        return(
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen
                            ? <FontAwesome name="angle-up" size="2x"/>
                            : <FontAwesome name="angle-down" size="2x"/>
                    }
                </div>
                {listOpen && <ul className="dd-list">
                    {list.map((item) => (
                        //<li className="dd-list-item" key={item.id} >{item.title}</li>
                        <li className="dd-list-item" key={item.title} onClick={() => this.toggleSelected(item.id, item.key)}>{item.title} {item.selected && <FontAwesome name="check"/>}</li>
                    ))}
                </ul>}
            </div>
        )
    }

}

export default Dropdown

