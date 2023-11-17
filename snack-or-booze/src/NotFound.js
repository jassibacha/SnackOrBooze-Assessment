import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function NotFound() {
    return (
        <div>
            <section className="col-md-8">
                <Card>
                    <CardTitle className="font-weight-bold text-center">
                        Page Not Found
                    </CardTitle>
                    <CardBody>
                        Sorry, the page you are looking for does not exist.
                    </CardBody>
                </Card>
            </section>
        </div>
    );
}

export default NotFound;
