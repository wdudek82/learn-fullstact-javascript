import React from 'react';
import Header from './Header';


class App extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         test: 42,
         pageHeader: 'Naming Contests'
      };
   }

   componentDidMount(){
      console.log('did mount');
      // debugger;
   }

   componentWillUnmount(){
      console.log('did unmount');
      // debugger;
   }

   render(){
      return (
         <div className="App">
            <Header message={this.state.pageHeader} />
            <p>{this.props.headerMessage}</p>
            <div>
               {this.state.test}
            </div>
         </div>
      );
   }
}

App.propTypes = {
   headerMessage: React.PropTypes.string.isRequired
};

App.defaultProps = {
   headerMessage: 'Hello!'
};

export default App;