import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component{
    render(){
        return (
            <header>
                <button>Mathilde</button>
                <button>Martine</button>
                <button>Claude</button>
            </header>
        );
    }
}

class Middle extends React.Component{
    render(){
        return (
            
                <div className = "container">
                    <center><img src = "Photomat.png"></img></center>
                    <div className = "prenom">
                        Mathilde
                    </div>
                    <div className = "nom">
                        Buono
                    </div>
                    <div className = "naissance">
                        17 novembre 1999
                    </div>
                    <div className="bouton"><button>Change style </button>
                    </div>
                  
                </div>
            

        );
    }
}

class Footer extends React.Component{
    render(){
        return(
            <div className = "footer">
                <p>blablablabla</p>
                <div className="boutonbis">
                    <button> 👍 C'est super</button>
                </div>

            </div>
        )
    }
}

class Site extends React.Component{
    render() {
        return (
            <div>
            <Header />
            <Middle />
            <Footer/>
            
            </div>
        );
    }
}
  
ReactDOM.render(
    <Site />,
    document.getElementById('root')
  );