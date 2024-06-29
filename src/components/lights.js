import React, { Component } from "react";
import LightCube from "./light_cube";
import Alert from "./Alert";
import Level from "./Level";
import Win from "./Win";
import { rand } from "../utils";

class Lights extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cubes_on: [],
            cubesPressed: [],
            numRows: 5,
            countForFindMode: 0,
            isFindMode: false,
         }
         this.change = this.change.bind(this);
    }

    componentDidMount(){
        const numRows = parseInt(this.state.numRows);
        const timesToShuffel = 30;
        let newCubsOn = []
        const cubesPressed = []
        for(let ind = 0; ind < numRows*numRows; ind++){
            newCubsOn.push(ind)
        }
        for(let ind = 0; ind < timesToShuffel; ind++ ){
            const cubeToPress = rand(0, (numRows*numRows)-1);
            newCubsOn = this.change(cubeToPress, newCubsOn)
            cubesPressed.push(cubeToPress)
        }
        this.setState({cubes_on: newCubsOn, cubesPressed});
    }

    level = async(level) => {
        await this.setState({numRows: level});
        this.componentDidMount();
    }

    handleChange(ind, addToPressed){
        const {cubesPressed, cubes_on} = this.state;
        const newCubsOn = this.change(ind, cubes_on)
        if(addToPressed){
            cubesPressed.push(ind)
        } else{
            cubesPressed.pop()
        }
        console.log('cubesPressed', cubesPressed)
        this.setState({cubes_on: newCubsOn, cubesPressed});
    }

    change(ind, cubes_on){
        const numRows = parseInt(this.state.numRows);
        var nums_change = [ind,  (ind+1) % numRows !== 0 && ind+1, ind % numRows !== 0 && ind-1, ind+numRows < (numRows*numRows) && ind+numRows, ind-numRows >= 0 && ind-numRows];
        nums_change = nums_change.filter(num => num !== false);
        var new_cubes_on = [...cubes_on];
        nums_change.map(num => new_cubes_on.includes(num) ? new_cubes_on.splice(new_cubes_on.indexOf(num), 1) : new_cubes_on.push(num));
        return new_cubes_on
    }

    create_cube(ind){
        const {cubesPressed, isFindMode} = this.state
        const isNextToSolution = isFindMode && cubesPressed[cubesPressed.length-1] === ind
        return <LightCube numRows={this.state.numRows} key={ind} click={()=>this.handleChange(ind, !isNextToSolution)} class={`cube ${this.state.cubes_on.includes(ind) && 'on'} ${isNextToSolution && 'next'}`} index={ind} />
    }

    isFinished(){
        const {numRows} = this.state;
        return this.state.cubes_on.length === numRows*numRows
    }

    addToFindMode(){
        let val = this.state.countForFindMode;
        const newVal = (this.state.isFindMode) ? --val : ++val
        this.setState({countForFindMode: newVal, isFindMode: newVal === 7})
    }

    isFindActive(){
        return this.state.isFindMode
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
                <h2 onClick={() => this.addToFindMode()} className="title">משחק האורות</h2>
                <Alert html="<p>מטרת המשחק: שכל הקוביות בלוח יהיו על הצד הצהוב<br/><br/>כל לחיצה על קוביה משנה את הצבעים: של הקוביה עצמה, של הקוביות מעליה ומתחתיה ושל הקוביות לימינה ולשמאלה<br/>.שים לב בכל משחק ניתן להגיע לפתרון<br/>!בהצלחה</p></p>" title="הוראות המשחק" />
                <div><Level change={this.level} /></div>
            </div>
                <div className={`all_cubes ${this.isFinished() && 'disabled'}`}>
                    {this.isFinished() && <Win />}
                    {all_cubes}
                </div>
            </>
         );
    }
}
 
export default Lights;