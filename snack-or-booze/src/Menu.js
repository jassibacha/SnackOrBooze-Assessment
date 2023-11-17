import React from 'react';
import { Link } from 'react-router-dom';
import {
    capitalizeFirstLetter,
    capitalizeFirstLetterAndRemoveLast,
} from './utils/utils';
import MenuForm from './MenuForm';
import './Menu.css';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

/**
 * Renders a menu component with a list of items.
 */
function Menu({ items, type, onAddItem }) {
    return (
        <>
            <section className="col-md-4">
                <Card>
                    <CardBody>
                        <CardTitle className="font-weight-bold text-center">
                            {capitalizeFirstLetter(type)} Menu
                        </CardTitle>
                        <CardText>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </CardText>
                        <ListGroup>
                            {items.map((item) => (
                                <Link to={`/${type}/${item.id}`} key={item.id}>
                                    <ListGroupItem>{item.name}</ListGroupItem>
                                </Link>
                            ))}
                        </ListGroup>
                    </CardBody>
                </Card>
            </section>
            <section className="col-md-8">
                <Card>
                    <CardTitle className="font-weight-bold text-center">
                        Add New {capitalizeFirstLetterAndRemoveLast(type)}
                    </CardTitle>
                    <CardBody>
                        <MenuForm type={type} onAddItem={onAddItem} />
                    </CardBody>
                </Card>
            </section>
        </>
    );
}

export default Menu;
