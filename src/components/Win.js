import React, {Component} from "react";

class Win extends Component {
    
    render() { 
        return ( 
            <div className="winner">
                <h1 className="text-center">כל הכבוד</h1>
                <div style={{width:'100%',height:0,paddingBottom:'100%', position:'relative'}}>
                    <iframe title="won" src="https://giphy.com/embed/l0Iyn7lXkxJvgyurK" width="100%" height="100%" style={{position:"absolute"}} frameBorder="0" class="giphy-embed" allowFullScreen>
                    </iframe>
                </div>
            </div>
         );
    }
}
 
export default Win;