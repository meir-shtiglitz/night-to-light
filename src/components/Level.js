import React, {Component} from "react";

class Level extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <select className="btn btn-warning mt-1" onChange={(e) => this.props.change(e.target.value)}>
                <option value={5}>קל</option>
                <option value={6}>בינוני</option>
                <option value={7}>קשה</option>
            </select>
         );
    }
}
 
export default Level;