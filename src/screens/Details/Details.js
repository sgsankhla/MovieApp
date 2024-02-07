import React,{Component} from 'react';
import Header from '../../common/Header/Header'
import moviesData from '../../common/moviesData';
import { Typography } from '@material-ui/core';
import './Details.css'
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import  Home from '../../screens/Home/Home'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import YouTube from 'react-youtube';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class Details extends Component{
    constructor()
    {
        super();
        this.state={
            movie:{
                title:"",
                genres: [],
                trailer_url: "",
                artists: []
            },
            starIcons: [
                {
                   id: 1,
                   stateId: "star1",
                   color: "black"
                },
                {
                   id: 2,
                   stateId: "star2",
                   color: "black"
                },
                {
                   id: 3,
                   stateId: "star3",
                   color: "black"
                },
                {
                   id: 4,
                   stateId: "star4",
                   color: "black"
                },
                {
                   id: 5,
                   stateId: "star5",
                   color: "black"
                }
             ]
        }
    }
    componentDidMount()
    {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) =>{
            return mov.id === this.props.movieId
        })[0];
        this.setState({currentState});
        console.log(this.state);
    }
    backToHomeHandler()
    {
        ReactDOM.render(<div>
            <Home />
          </div>
            ,
            document.getElementById('root'));
    }
    artistClickHandler = (url) => {
        window.location = url;
    }
    starClickHandler =(id) =>{
        let starIconList=[];
        for(let star of this.state.starIcons)
        {
            let starNode=star;
            if(star.id<=id)
            {
                starNode.color="yellow";
            }
            else
            {
                starNode.color="black";
            }
            starIconList.push(starNode);
        }
        this.setState(starIconList);
    }
    render()
    {
        let movie=this.state.movie;
        
        const opts={
            height:'300',
            width:'700',
            playerVars:{
                autoplay:1
            }
        }
        return(
            <div className="details">
                <Header showBooking="true" movieName={this.state.movie.title}/>
                <Button className="back" variant="contained" color="primary" onClick={this.backToHomeHandler}> Back</Button><br/><br />
                <div className="flex-containerDetails"> 
                    <div className="leftDetails">
                        <img src={movie.poster_url} alt={movie.title}/>
                    </div>
                    <div className="middleDetails">
                        <div>
                                <Typography variant="headline" component="h2">{movie.title} </Typography>
                        </div>
                        <br />
                        <div>
                                <Typography>
                                    <span className="bold">Genres: </span> {movie.genres.join(',')}
                                </Typography>
                        </div>
                        <div>
                                <Typography><span className="bold">Duration:</span> {movie.duration} </Typography>
                        </div>
                        <div>
                                <Typography><span className="bold">Release Date:</span> {new Date(movie.release_date).toDateString()} </Typography>
                        </div>
                        <div>
                                <Typography><span className="bold"> Rating:</span> {movie.critics_rating}  </Typography>
                        </div>
                        <div className="marginTop16">
                                <Typography><span className="bold">Plot:</span> <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline} </Typography>
                        </div>
                        <div className="trailerContainer">
                                <Typography>
                                    <span className="bold">Trailer:</span>
                                </Typography>
                                <YouTube
                                videoId={movie.trailer_url.split("?v=")[1]}
                                opts={opts}
                                onReady={this._onReady}
                            />    
                        </div>
                    </div>
                        <div className="rightDetails">
                             <Typography>
                                 <span className="bold">Rate this movie:</span>
                                 </Typography>
                                 {this.state.starIcons.map(star=>(
                                     <StarBorderIcon  onClick={()=>this.starClickHandler(star.id)} className={star.color} key={star.id}/>
                                 ))}
                             
                            
                                <div className="marginBottom16 "><Typography>
                                    <span className="bold">Artists:</span>
                                    </Typography></div>
                                    <GridList cols={3}>
                                        {movie.artists.map(artist=>(
                                            <GridListTile onClick={()=>this.artistClickHandler(artist.wiki_url)} key={artist.id}>
                                                <img src={artist.profile_url} alt={artist.first_name+artist.last_name}/>
                                                <GridListTileBar title={artist.first_name+artist.last_name}/>
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                
                            </div>
                        
                </div>
            </div>
        )
    }
}
export default Details;