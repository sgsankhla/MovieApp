import React, { Component } from 'react';
import Header from '../../common/Header/Header';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Confirmation.css';
import FormControl from '@material-ui/core/FormControl';
class Confirmation extends Component{

    render(){
        return(
            <div> 
                <Header /> 
                <br /><br />
                <div className="confirmShow">
                <Card className="cardStyle">
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            CONFIRMATION:
                        </Typography><br />
                        <FormControl  className="formControl">
                            <Typography>
                                <span ><b>Movie Name:  {this.props.movieName}</b></span>
                            </Typography>
                        </FormControl>
                        <br/><br/>
                        <FormControl  className="formControl">
                            <Typography>
                                <span ><b>Location:  {this.props.location}</b></span>
                            </Typography>
                        </FormControl>
                        <br/><br/>
                        <FormControl  className="formControl">
                            <Typography>
                                <span ><b>Show Date:  {this.props.showDate}</b></span>
                            </Typography>
                        </FormControl>
                        <br/><br/>
                        <FormControl  className="formControl">
                            <Typography>
                                <span ><b>Tickets:  {this.props.tickets}</b></span>
                            </Typography>
                        </FormControl>
                        <br/><br/>
                        <FormControl  className="formControl">
                            <Typography>
                                <span ><b>Total Price:  Rs.{this.props.unitPrice * this.props.tickets}</b></span>
                            </Typography>
                        </FormControl>
                        

                    </CardContent>
                </Card>
                </div>
            </div>
        )
    }
}

export default Confirmation;