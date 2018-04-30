import React, {Component} from 'react';

/*function Calorie({calories, onAdd, onBurn}) {
   return (
       <div>
          <h1>this is your calorie comsumption, {calories}</h1>
       </div>
   )
}*/

class Calorie extends Component {
    state = {
        input: 0
    };

    handleCalorieInput = (e) => {
        const value = e.target.value;
        console.log('handling calori input from user', value);
        this.setState({input: +value});
    };

    render() {
        return (
            <div>
                <h1>this is your calorie comsumption, {this.props.calories}</h1>
                <input type="number"
                       value={this.state.input}
                       onChange={(e) => this.handleCalorieInput(e)}
                />
                <button onClick={() => this.props.onGained(this.state.input)}>gained</button>
                <button onClick={() => this.props.onBurn(this.state.input)}>Burnt</button>
            </div>
        )
    }
}

export default Calorie