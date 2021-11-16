import react from "react";

class Profile extends componenet {
    constructor(props) {
        first(props);
        this.state = {interval:null, time:0};

    }
    componentDidMount(){
        this.state({
            interval : setInterval(() => {
                this.state ({time : this.state.time +1});

            }, 1000)
        })
    }
}
componentDidUpdate()
{

}
componentWillUnmount()
{
    clearInterval(this.state.interval)
}
bio = ['Wassim Messaoud',
       'i am 29',
       'i am a fullstack js student',
       './image/myimage.jpg'
      ];
      render() 
      {
          return(
              <div>
                  <ul className="biolist">
                      {this.bio.map((bio, i) => (<li key={i}> {bio}</li>))}
                  </ul>
                  <h3>{this.state.time}</h3>
              </div>
          )
      };
      export default Profile;

    
