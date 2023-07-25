import React,{Component} from 'react';
import './Add.css'

class ValidatingForm extends Component{

    constructor(props){
        super(props);
        this.state={
            sno:'',
            playerName:'',
            age:'',
            playerType:'',
            priceInCrs:'',
            team:''
        };
    }
    
    handleSnoChange=(event)=>{
        this.setState({sno:event.target.value})
    };
    handlePlayerNameChange=(event)=>{
        this.setState({playerName:event.target.value})
    };
    handleAgeChange=(event)=>{
        this.setState({age:event.target.value})
    };
    handlePlayerTypeChange=(event)=>{
        this.setState({playerType:event.target.value})
    };
    handlePriceChange=(event)=>{
        this.setState({priceInCrs:event.target.value})
    };
    handleTeamChange=(event)=>{
        this.setState({team:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sno: this.state.sno,
            playerName: this.state.playerName,
            age: this.state.age,
            playerType: this.state.playerType,
            priceInCrs: this.state.priceInCrs,
            team: this.state.team
        };
        
    }

    render(){
    return ( 
        <div className='pro2'><center><br></br>
        <div className='container2'>
            
        <form onSubmit={this.handleSubmit}>
            <h1>POST - AddDetails</h1>
            
            

            <div className='row2'>
                <label>Name : </label><br></br>
                <input className='in2' type="text" id='playerName' placeholder='  Enter your Name...' value={this.state.playerName}
                    onChange={this.handlePlayerNameChange}/>
            </div>

            <div className='row2'>
                <label>Mail Id : </label><br></br>
                <input className='in2' type="email" id='email' placeholder='  Enter your Mail Id...' value={this.state.playerName}
                    onChange={this.handlePlayerNameChange}/>
            </div>

            <div className='row2'>
                <label>Mobile No : </label><br></br>
                <input className='in2' type="tel" id='mobile' placeholder='  Enter your Mobile No...' value={this.state.playerName}
                    onChange={this.handlePlayerNameChange}/>
            </div>

            <div className='row2'>
                <label>Hotel Name : </label><br></br>
                <input className='in2' type="drop" id='name' placeholder='  Enter Hotel Name...' value={this.state.playerType}
                    onChange={this.handlePlayerTypeChange}/>
            </div>
            

            <div className='row2'>
                <label>Price In Crores : </label><br></br>
                <input className='in2' type="number" id='priceInCrs' placeholder='  Enter the Price of the Player...' value={this.state.priceInCrs}
                    onChange={this.handlePriceChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}<br></br>

            <div className='row2'>
                <label>Team : </label><br></br>
                <input className='in2' type="text" id='Team' placeholder='  Enter the Team of the Player...' value={this.state.team}
                    onChange={this.handleTeamChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}<br></br>
            <br></br>

            <div className='row2'>
                <button className='primary2'>Create</button>
            </div>

            {/* <div>
                <Link to="/Showdata">
                <button className='btn btn-primary'>Show Details</button>
                </Link>
            </div> */}
        </form>
        </div></center><br></br><br></br>
        </div>
     );
    }
}

export default ValidatingForm