import { prettyDOM } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const basic = '#ffffff';

const profils = [
    {
      nom: 'Buono',
      prenom: 'Mathilde',
      naissance: '17/11/1999',
      photo: 'Photomat.jpg',
      lastpubli: 'Nadal a remporté son 13eme Roland Garros #goat !!!'
    

    },
    {
        nom: 'Diallo',
        prenom:'Nivine',
        naissance:'20/04/1999',
        photo:'Photoniv.jpg',
        lastpubli: 'Utilisez le soin garnier ultra doux si vous avez les cheveux bouclés !'

      },
      {
        nom:'Jego-Ragas',
        prenom: 'Tiffanie',
        naissance: '15/06/1999',
        photo:'Phototiff.jpg',
        lastpubli: 'Je suis amoureuse de Harry Style, son nouvel album est incroyable !'

      }
    ];


class Middle extends React.Component{
    constructor(props){
        super(props)
        this.state = {prof:profils[0], color:basic}
        this.changeColor = this.changeColor.bind(this);

    }
    ActualiserProfiles = (props) => {
        this.setState({prof:props})
        console.log (this.state.prof)
    }

    /// Code provenant du site pour changement de couleur: https://codepen.io/GloriaDing/pen/WzYKLJ?editors=0010&fbclid=IwAR0nYH17OG4HCDjk7ADHiGL7laAH37VLsz4XleUCqRvb8X6C0B7TqJUuHuI
    changeColor(props) {

        const letters = '0123456789ABCDEF';
        let newColor = '#';
        for (let i = 0; i < 6; i++) {
          newColor += letters[Math.floor(Math.random() * 16)];
        }
    
        this.setState({ color: newColor });
      }
    render(){
        return (

        <>
            <header>
                <button onClick = {()=>this.ActualiserProfiles(profils[0])}>Mathilde</button>
                <button onClick = {()=>this.ActualiserProfiles(profils[1])}>Nivine</button>
                <button onClick = {()=>this.ActualiserProfiles(profils[2])}>Tiffanie</button>

            </header>
            
                <div className = "container" style = {{background:this.state.color}}>
                    <center><img src = {this.state.prof.photo}></img></center>
                    <div className = "prenom">
                        {this.state.prof.prenom}
                    </div>
                    <div className = "nom">
                        {this.state.prof.nom}
                    </div>
                    <div className = "naissance">
                        {this.state.prof.naissance}
                    </div>
                    
                    <div className="bouton"><button onClick = {this.changeColor}> Change style </button>
                    </div>

                    <div className = "footer">
                        <div className = 'lastpubli'>
                            {this.state.prof.lastpubli}
                         </div>
                        <div className="boutonbis">
                             <button> 👍 C'est super !</button>
                        </div>

                    </div>
                  
                </div>
            
        </>
        );
    }
}



class Site extends React.Component{
    render() {
        return (
            <div>
          
            <Middle />
            
            
            </div>
        );
    }
}
  
ReactDOM.render(
    <Site />,
    document.getElementById('root')
  );