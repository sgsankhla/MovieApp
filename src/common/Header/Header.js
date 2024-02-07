import React,{Component} from 'react';
import './Header.css'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import BookShow from '../../screens/Bookshow/BookShow'
class Header extends Component{
    bookShowHandler(movieId){
       
        ReactDOM.render(<div><BookShow movieName={this.props.movieName} /></div>,
          document.getElementById('root'));
        }
    render(){
        return(<div className="app-header">
                 {(this.props.showBooking)?<div className ="bookshow-button"><Button variant="contained" color="primary"  onClick={()=> this.bookShowHandler(this.props.movieId)}>Book Show</Button></div>:""}
        </div>)
    }

}
export default Header