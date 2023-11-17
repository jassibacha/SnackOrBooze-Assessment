import React, { useState } from 'react';
import { capitalizeFirstLetterAndRemoveLast } from './utils/utils';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

function MenuForm({ type, onAddItem }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        recipe: '',
        serve: '',
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // Generate an ID from the name
        const generatedId = formData.name.toLowerCase().replace(/\s+/g, '-');

        const newItem = {
            ...formData,
            id: generatedId,
        };

        try {
            // Add item and assign type
            await onAddItem(newItem);
            // Clear form, show success message, etc.
            setFormData({ name: '', description: '', recipe: '', serve: '' });
        } catch (error) {
            console.error('Error adding item:', error);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="name" sm={3}>
                    Name:
                </Label>
                <Col sm={9}>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="description" sm={3}>
                    Description:
                </Label>
                <Col sm={9}>
                    <Input
                        type="text"
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="recipe" sm={3}>
                    Recipe:
                </Label>
                <Col sm={9}>
                    <Input
                        type="text"
                        name="recipe"
                        id="recipe"
                        value={formData.recipe}
                        onChange={handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="serve" sm={3}>
                    Serve:
                </Label>
                <Col sm={9}>
                    <Input
                        type="text"
                        name="serve"
                        id="serve"
                        value={formData.serve}
                        onChange={handleInputChange}
                    />
                </Col>
            </FormGroup>
            <Button type="submit">
                Add {capitalizeFirstLetterAndRemoveLast(type)}
            </Button>
        </Form>
    );
}

export default MenuForm;
