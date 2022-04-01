import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Label } from 'reactstrap';

const AddUser = () => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Add User</Label>
                    <input type ="text" placeholder='Add user'></input>
                </FormGroup>
            </Form>
        </div>
    );
};

export default AddUser;