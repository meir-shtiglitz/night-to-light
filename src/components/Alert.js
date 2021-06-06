import React, {Component} from "react";
import Swal from 'sweetalert2';

class Alert extends Component {
    constructor(props){
        super(props);
        this.state = {
            alert: false
        }
    }
    Instructions = () => {
        this.setState({alert: true});
        setTimeout(()=> this.setState({alert: false}),1000);
       
    }

    make_alert = () => {
        const html = this.props.html;
        const title = this.props.title;
        const icon = this.props.icon;
        Swal.fire({
            title: title,
            html: html,
            icon: icon,
            confirmButtonText: 'אישור'
        })
    }
    render() { 
        this.state.alert && this.make_alert();
        return ( 
            <button onClick={this.Instructions} className="btn btn-warning text-end">הוראות המשחק</button>
         );
    }
}
 
export default Alert;
