var ClassesForm = React.createClass({
    render:function(){
        return (
            <div id='classes'>
            
                <h3 id='classTitle'>My Classes</h3>
            
                <div id='addDiv'>
                <h5>Class Name</h5>
                    <input id='className' type='text' placeholder='Ex: MDIA 3190' />
                <h5>Class Grade</h5>
                <input id='classGrade' type='number' min='0' max='100' placeholder='%' />
                <br />
                <br />
                <button id='exit' onClick={this.props.ExitBut}>Exit</button>
                <button id='addClass' onClick={this.props.addClass}>Add</button>
                </div>
            </div>
        )
    }
});

var ReportCard = React.createClass({
   render:function(){
       var self = this;
       var divWrap = this.props.reportcard.map(function(obj, index){
           var nbind = {
                index:index,
               deleteID:obj.id,

           }; 
        return (
        <div id='reportcard'>
            <table id='reportcard1'>
                <tr>
                    <td id='tdBut'><button className='delBut' id={obj.id} onClick={self.props.deleteBut.bind(self, nbind)}>X</button>{obj.name}</td>
                    <td>{obj.grade}</td>
                </tr>
            </table>
           </div>
            
       )
    });
       return (
        <div id='reportcard2'>
           {divWrap}
           </div>
       )
   } 
});

var Average = React.createClass({
   render:function(){
       var self = this;
       var avgAverage = self.props.myAverage;
           
    console.log(avgAverage);
       return (
            <div id='average'>
                <div id='avgText'>Average:    {avgAverage}</div>
           </div>
       )
   } 
});


var App = React.createClass ({
    getInitialState:function(){
        var self = this;
         $.ajax({
            url:"gradecalculator.php",
            type:"post",
            data:{
                type:'view'
            },
             dataType:"JSON",
            success:function(resp){
                console.log(resp);
            self.setState({
                classes:resp
            });
       }
         });
        return {
            classes:[],
            newAvg:""
        };
        
        
    },
    addClass:function(stuff){
        var newClass = document.getElementById('className').value;
        var newGrade = document.getElementById('classGrade').value;
        var addDiv = document.getElementById('addDiv');
        var delBut =document.getElementById('delBut');
        var self = this;
        
        $.ajax({
            url:"gradecalculator.php",
            type:"post",
            data:{
                type:"add",
                name:newClass,
                grade:newGrade
            },
            dataType:"JSON",
            success:function(resp){
           console.log(resp);
            var obj = {
                name:newClass,
                grade:newGrade,
                id:resp
            
                    };
                    
                    var myList= self.state.classes;
                    myList.push(obj);
                    self.setState({
                        classes:myList
                        });
                    console.log(myList);
 
      
        
       
        
        var sum = 0;
        var arrLength = self.state.classes.length
        for(var i=0; i< arrLength;i++){
            sum += parseInt (self.state.classes[i].grade);
        }
        var gradeAverage = (sum/arrLength).toFixed(1);
        
        self.state.newAvg = gradeAverage;
        self.setState({
            newAvg:gradeAverage
        })
        
        
        document.getElementById('className').value = "";
        document.getElementById('classGrade').value = "";
        
        console.log(gradeAverage);
        
        addDiv.style.display = "none";
       

       }
   });
        
                   
        
    },
    InputDiv:function(){
        var addDiv = document.getElementById('addDiv');
        addDiv.style.display = 'inline';

    },
    ExitBut:function(){
      var addDiv = document.getElementById('addDiv');
        addDiv.style.display = "none";
    },
    dltBut:function(myobj){
        var Arr = this.state.classes;
        Arr.splice(myobj.index,1);
        
        console.log(myobj);
         var sum = 0;
        var arrLength = this.state.classes.length
        for(var i=0; i< arrLength;i++){
            sum += parseInt (this.state.classes[i].grade);
        }
        var gradeAverage = (sum/arrLength).toFixed(1);
        
        this.state.newAvg = gradeAverage;
        this.setState({
            classes:Arr,
        });
        
        $.ajax({
            url:"gradecalculator.php",
            type:"post",
            data:{
                type:"delete",
                classID:myobj.deleteID
            },
            success:function(resp){
           console.log(resp);
       }
   });
        
        console.log(myobj.index);
        

        
        //console.log("test");
    },
   
    render: function(){
        
        return(
        <div id ='display1'>
            <ClassesForm addClass={this.addClass} ExitBut = {this.ExitBut} />
            <table id='tableTitle'>
            <tr>
                <th>Class</th>
                <th>Grade</th>
            </tr>
            </table>
            <ReportCard reportcard={this.state.classes} deleteBut={this.dltBut}/>
            <Average myAverage={this.state.newAvg}/>
            <img src="img/plus.png" alt="plus sign" id="add" onClick={this.InputDiv}/>
        </div>
        )
            
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('calculator')
);