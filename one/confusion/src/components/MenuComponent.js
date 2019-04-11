import React, { Component } from 'react';


import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



class Menu extends Component {

    constructor(props){
        super(props);


        this.state = {
            selectedDish : null
        }
        
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish}); 
    }
    // to change state setState() is only recommended (DONT USE this.state.)
    // update from null to dish as click is happened
    // function need to get called onClick event
    // event needs to pass function as event handler 
    // e.g. 
    // onClick={ () => {this.onDishSelect(dish)} }

    renderDish(dish){
    if(dish != null){  {/* click is hapended so, dish is not null then render below div */}
            return(
                <Card>
                    <CardImg width="100%" src ={dish.image} alt ={dish.name} /> 
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{ {/* click is not hapended yet so, dish is null then render empty div only */}
            return(
                <div></div>
            );
        }
    }


    render(){

        const menu = this.props.dishes.map(
            (dish)=>{
                return(
                    <div key ={dish.id} className="col-12 col-md-5 m-1"> {/* // [col-12]->1 card below other on 1 row(small screen) [col-md-5]->5 cards on 1 row(large screen) 1 unit margin */}
                        <Card onClick={ () => {this.onDishSelect(dish)} }>
                            <CardImg width="100%" src ={dish.image} alt ={dish.name} />     
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            }    
        );

        return(           

            <div className="container">
                <div className="row">                
                    {menu}                  
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }

}

export default Menu;