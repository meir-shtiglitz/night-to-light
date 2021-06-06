import React, { Component } from "react";
import LightCube from "./light_cube";
import Alert from "./Alert";
import Level from "./Level";
import Win from "./Win";

class Lights extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cubes_on: [],
            numRows: 5
         }
         this.change = this.change.bind(this);
    }

    componentDidMount(){
        const numRows = parseInt(this.state.numRows);
        const rand = (min, max) => {
            return Math.floor(Math.random() * ((max - min) +1) + min);
        }
        const numCubesToLight = rand(numRows, numRows*2)
        let randomLightCubs = [];
        for(let light = 0; light < numCubesToLight; light++ ){
            let cubeToPush = rand(0, (numRows*numRows)-1);
            console.log(cubeToPush);
            if(!randomLightCubs.includes(cubeToPush)) randomLightCubs.push(cubeToPush);
        }
        this.setState({cubes_on: randomLightCubs});
    }

    level = async(level) => {
        await this.setState({numRows: level});
        this.componentDidMount();
    }

    change(ind){
        const numRows = parseInt(this.state.numRows);
        var nums_change = [ind,  (ind+1) % numRows !== 0 && ind+1, ind % numRows !== 0 && ind-1, ind+numRows < (numRows*numRows) && ind+numRows, ind-numRows >= 0 && ind-numRows];
        nums_change = nums_change.filter(num => num !== false);
        var new_cubes_on = [...this.state.cubes_on];
        nums_change.map(num => new_cubes_on.includes(num) ? new_cubes_on.splice(new_cubes_on.indexOf(num), 1) : new_cubes_on.push(num));
        this.setState({cubes_on: new_cubes_on});
    }

    create_cube(ind){
        return <LightCube numRows={this.state.numRows} key={ind} click={()=>this.change(ind)} class={`cube ${this.state.cubes_on.includes(ind) && 'on'}`} index={ind} />
    }



    render() { 
        const {numRows} = this.state;
        var all_cubes = [];
        let indexCube = 0;
        for(let row = 0; row < numRows; row++){
            var all_column = [];
            for(let column = 0; column < numRows; column++){
                all_column.push ( this.create_cube(indexCube) );
                indexCube++;
            }
            all_cubes.push(<div key={`row${row}`} className="row_cubes">{all_column}</div>)
        }
       
        return ( 
            <>
            <div className="text-center">
                <h2 className="title">משחק האורות</h2>
                <Alert html="<p>מטרת המשחק: שכל הקוביות בלוח יהיו על הצד הצהוב<br/><br/>כל לחיצה על קוביה משנה את הצבעים: של הקוביה עצמה, של הקוביות מעליה ומתחתיה ושל הקוביות לימינה ולשמאלה<br/><p>בהצלחה</p></p>" title="הוראות המשחק" />
                <div><Level change={this.level} /></div>
            </div>
                <div className={`all_cubes ${this.state.cubes_on.length === numRows*numRows && 'disabled'}`}>
                    {this.state.cubes_on.length === (numRows*numRows) && <Win />}
                    {all_cubes}
                </div>
            </>
         );
    }
}
 
export default Lights;