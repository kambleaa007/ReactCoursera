import React from 'react';
    

import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';

    function RenderDish({dish}){
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src ={dish.image} alt ={dish.name} /> 
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )        
    }

    function RenderComments({comments}){
        const showComments = comments.map((comment)=>{
            return(
                <div key={comment.id}>
                    <div>{comment.comment}</div>
                    <div>
                        {'-- ' + comment.author + ', ' + comment.date}
                    </div>
                </div>
            );
        })   
        return (
            <div className='container'>
                <h3>Comments</h3>
                <ul className="list-unstyled">
                    {showComments}
                </ul>
            </div>
        );     
    }


    const DishDetail = (props) => {
        
        if(props.dish == null){
            return(<div></div>)
        }              

        return(   
            <div class="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>                 
            <div className='row'>      
                <RenderDish dish={props.dish} />
                <RenderComments comments = {props.comments} />
            </div>
            </div>
        );
    }



export default DishDetail;