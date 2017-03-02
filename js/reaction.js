var Showmore = React.createClass({
   render:function(){
       return (
           <div> 
               <div id="about">
               <img id="selfimg" src="img/arran.jpg"/>
               <div id="desc"><b>Team Leader - Aaran</b>
               <br/>
               Arran is also a project manager to keep the project on track and assist in icon, logo designing and some function developing.</div>
                </div>
               <div id="about2">
               <img id="selfimg" src="img/yan.jpg"/>
               <div id="desc"><b>Lead Developer - Yan</b>
               <br/>
               Yan is a full stack developer to develop front-end(HTML, CSS, jQuery, JavaScript) and back-end database(PHP, AJAX, React).</div>
               </div>
               <div id="about3">
               <img id="selfimg" src="img/Grace.jpg"/>
               <div id="desc"><b>Lead Designer - Grace</b>
               <br/>
               Grace is in charge of designing the logo, icons, colors, fonts for the app and making mockups, wireframes, and styleguides.</div>
               </div>
           </div>
       );
   } 
});

var About = React.createClass({
   getInitialState: function () {
    return { childVisible: false };
  },
   render:function(){
       return (
           <div>
            <div>
                <p id="title"  onClick={this.onClick}>About</p>
            </div>
           {
          this.state.childVisible ? <Showmore /> : null
        }
           </div>
       );
   },
    onClick: function() {
    console.log("clicked");
        this.setState({childVisible: !this.state.childVisible});
  }
});


var Viewmore = React.createClass({
    getInitialState:function(){
      return(
          userImage:""
      )  
    },
    upload:function(e){
        var img = document.getElementById("uploadDiv").value;
        this.setState({
            userImage:img
        });
        console.log(userImage);
        var userpic = document.getElementById("userimg");
            userpic.src = userImage;
    },
    render:function(){
       return (
           <div id="general"> 
               <form>
               <fieldset>
                <label id="gen">Change Your image:</label>
                <input type="file" id="uploadDiv" accept="image/*"/>
                <button id="upload" onClick={this.upload} >Upload</button>
                <button id="reset">Reset</button>
              </fieldset>
              </form>
           </div>
       );
   } 
});

var General = React.createClass({
  getInitialState: function () {
    return { childVisible: false };
  },
   render:function(){
       return (
           <div>
            <div>
               <p id="title1"  onClick={this.moreInfo} >General</p>
            </div>
           {
          this.state.childVisible ? <Viewmore /> : null
        }
           </div>
       );
   },
    moreInfo: function() {
    this.setState({childVisible: !this.state.childVisible});
  }
});

var App = React.createClass({
   render:function(){
       return (
            <div id="show">
            <General />
            <About />
           </div>
       )
   } 
});


ReactDOM.render(
    <App />,
    document.getElementById("app")
);


