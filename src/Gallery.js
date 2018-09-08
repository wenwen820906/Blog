import React,{Component} from 'react';
import './Gallery.css';



const photo = [
  {
    image: "https://i.imgur.com/NiTBLbu.png",
  },
  {
    image: "https://i.imgur.com/qEfuCk3.jpg",
  },
  {
    image: "https://i.imgur.com/cZFiatX.png",
  },
  {
    image: "https://i.imgur.com/jeqhX4N.jpg",
  },
  {
    image: "https://i.imgur.com/Z1bBfDr.png",
  },
  {
    image: "https://i.imgur.com/nQ5eSEs.jpg",
  },
  {
    image: "https://i.imgur.com/VpfID7w.jpg",
  },
  {
    image: "https://i.imgur.com/P4o0Jzr.jpg",
  },
  {
    image: "https://i.imgur.com/sJ6CnVz.jpg",
  },
  {
    image: "https://i.imgur.com/M1spJUb.jpg",
  },
  {
    image: "https://i.imgur.com/qCNVrKF.jpg",
  },
  {
    image: "https://i.imgur.com/eyYUJVh.jpg",
  },
  {
    image: "https://i.imgur.com/ScnkBSl.jpg",
  },
  {
    image: "https://i.imgur.com/925zlUA.jpg",
  },
  {
    image: "https://i.imgur.com/qhdFlDF.png",
  },
  {
    image: "https://i.imgur.com/jFRxQJG.jpg",
  },
  {
    image: "https://i.imgur.com/WMjObAR.png",
  },
  {
    image: "https://i.imgur.com/8oZ3zeo.jpg",
  },
];
class Gallerys extends Component {
  constructor(props){
    super(props);
    this.state={
      open:null
    };
  }
  handleOnClick=(e,id)=>{
    let open = id;
    if (id === this.state.open) {
      open = null;
    }

    this.setState({ open })
    
  }
  render(){
  
    const photos=photo.map((img,id) => {
      return(
        <div onClick={(e) => this.handleOnClick(e, id)} className={id === this.state.open ? 'pic open' : 'pic'} key={id}>
          <img alt={img.image} src={img.image} />
        </div>
      )
    })

    return(
      <div>
        <div id={this.state.open !== null ? 'overlay': null}></div>
          <div id='gallery'>
           {photos}
          </div>
      </div>   
      )
    

  }
 
}
  

export default Gallerys;