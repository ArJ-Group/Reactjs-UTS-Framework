import React from "react";
import Card from './Card'
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

  export default function Categories() {
    let {path, url} = useRouteMatch();
    return(
        <div>
            <h2>Category</h2>

            <div className='home__section'>

                    <Card
                        src="https://i0.wp.com/www.maxmanroe.com/vid/wp-content/uploads/2018/09/Pengertian-Komputer.jpg?im_w=720"
                        title="Elektronik"
                        description="Beli Perlengkapan Elektronik Yang Murah dan Lengkap"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Fashion "
                        description="Beli Kebutuhan Fashion mu disini dengan harga terjangkau"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                        title="Furniture"
                        description="Beli Perlengkapan Rumah Yang murah dan Lengkap"
                    />
                </div>
 
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a category.</h3>
                </Route>
                <Route path={`${path}/:categoryId`}>
                    <Category />
                </Route>
            </Switch>
        </div>
    );
}

function Category() {
    let { categoryId } = useParams();

    return (
        <div>
            <h3>{categoryId}</h3>
            <img src="http://placeimg.com/100/100/tech" alt="category"></img>
        </div>
    );
}