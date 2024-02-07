import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import  Home from '../../screens/Home/Home'
import  Confirmation from '../../screens/Confirmation/Confirmation'
import ReactDOM from 'react-dom';
import Header from '../../common/Header/Header';
import Typography from '@material-ui/core/Typography';
import './BookShow.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import FormHelperText from '@material-ui/core/FormHelperText';
class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            theatre: "",
            language: "",
            showDate: "",
            tickets: 0,
            unitPrice: 500,
            availableTickets: 20,
            reqLocation: "dispNone",
            reqTheatre: "dispNone",
            reqLanguage: "dispNone",
            reqShowDate: "dispNone",
            reqTickets: "dispNone"
        }
    }
    backToHomeHandler = event =>{
        ReactDOM.render( <div>
            <Home />
          </div> ,
            document.getElementById('root'));
    }
    locationChangeHandler = event => {
        this.setState({ location: event.target.value });
    }

  bookShowButtonHadler = ()=>{
    this.state.location === "" ? this.setState({ reqLocation: "dispBlock" }) : this.setState({ reqLocation: "dispNone" });
    this.state.theatre === "" ? this.setState({ reqTheatre: "dispBlock" }) : this.setState({ reqTheatre: "dispNone" });
    this.state.language === "" ? this.setState({ reqLanguage: "dispBlock" }) : this.setState({ reqLanguage: "dispNone" });
    this.state.showDate === "" ? this.setState({ reqShowDate: "dispBlock" }) : this.setState({ reqShowDate: "dispNone" });
    this.state.tickets === 0 ? this.setState({ reqTickets: "dispBlock" }) : this.setState({ reqTickets: "dispNone" });

    if ((this.state.location === "") || (this.state.language === "") || (this.state.showDate === "") || (this.state.tickets === 0)) { return; }
    ReactDOM.render( <div>
        <Confirmation movieName={this.props.movieName} location={this.state.location} language={this.state.language} showDate={this.state.showDate} tickets={this.state.tickets} unitPrice={this.state.unitPrice}/>
      </div> ,
        document.getElementById('root'));
  }

    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }

    showDateChangeHandler = event => {
        this.setState({ showDate: event.target.value });
    }

    ticketsChangeHandler = event => {
        this.setState({ tickets: event.target.value.split(",") });
    }



    render() {
        return (
            <div>
                <Header />
                <div className="bookShow">
                    
                        <Button className="back" variant="contained" color="primary" onClick={this.backToHomeHandler}> Back</Button>
                    <br /><br />
                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqLocation}>
                                    <span className="red">Required</span>
                                </FormHelperText>                 
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}
                                >
                                    {language.map(lang => (
                                        <MenuItem key={"lang" + lang.id} value={lang.language}>
                                            {lang.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqLanguage}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showDate">Choose Show Date:</InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showDateChangeHandler}
                                >
                                    {showDate.map(sd => (
                                        <MenuItem key={"showDate" + sd.id} value={sd.showDate}>
                                            {sd.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqShowDate}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets">Tickets: ( {this.state.availableTickets} available )</InputLabel>
                                <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler} />
                                <FormHelperText className={this.state.reqTickets}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Typography>
                                Unit Price Rs. {this.state.unitPrice}
                            </Typography>
                            <Typography>
                                Total Price Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.bookShowButtonHadler}>
                            BOOK SHOW
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow;