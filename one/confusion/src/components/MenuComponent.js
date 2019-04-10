import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props){
        super(props);


        this.state = {
            dishes: [
                {
                    id : 1,
                    name :'Vanilla',
                    image :'assets/images/vadonut.png',
                    category : 'appetizer',
                    label :'New',
                    price :'1.0',
                    description :'--------'
                },
                {
                    id : 2,
                    name :'uthappizza',
                    image :'assets/images/uthappizza.png',
                    category : 'appetizer',
                    label :'Hot',
                    price :'1.0',
                    description :'--------'
                },
                {
                    id : 3,
                    name :'zucchipakoda',
                    image :'assets/images/zucchipakoda.png',
                    category : 'appetizer',
                    label :'Medium',
                    price :'1.0',
                    description :'--------'
                }
            ]
        }
        
    }

    render(){

        const menu = this.state.dishes.map(
            (dish)=>{
                return(
                    <div key ={dish.id} className="col-12 mt-5">
                        <Media tag = "li">
                            <Media left middle>
                                <Media object src ={dish.image} alt ={dish.name} />
                            </Media> 
                            <Media body className="ml-5">
                                <Media heading>{dish.name}</Media>
                                <p>{dish.description}</p>
                            </Media>
                        </Media>
                    </div>
                );
            }    
        );

        return(           

            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }

}

export default Menu;