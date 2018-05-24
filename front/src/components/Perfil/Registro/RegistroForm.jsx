import React, {Component} from 'react';
import { Form, Button,Input, Label, Modal, Image } from 'semantic-ui-react';
import {addRegistro} from "../../../services/Registros";
import {withRouter} from 'react-router-dom';
import Registros from './Registros';

//this.props
class RegistroForm extends Component{

    state = {
        user: {},
        registro: {},
        cantidades: []
    };

    handleChange = (e) => {
        const {registro} = this.state;
        const field = e.target.name;
        registro[field] = e.target.value;
        this.setState({registro});
        //console.log("formulario front",registro)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.cantidades.push(parseInt(this.state.registro.quantity))
        console.log("Se agrego esta cantidad al array", this.state.cantidades)
        //console.log("info del registro desde el front", this.state.registro)
        addRegistro(this.state.registro)
        .then(registro=>{
            this.props.history.push('/perfil/registros');
            window.location.reload();
            return;
        })
    };

    render(){
        return(
            <Modal  size="small" dimmer='blurring' trigger={this.props.trigger}>
                <Modal.Content image>
                <Image wrapped size='medium' src='https://res.cloudinary.com/alinardz/image/upload/v1527697663/juguito.gif' />
                <Modal.Description style={{"width":"45%"}}>

                     <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Categoría</label>
                        <input type="text" name="category" id="" placeholder='categoría' onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Descripción</label>
                        <input type="text" name="description" id="" placeholder='descripción' onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                      <Input labelPosition='right'type="number" name="quantity" onChange={this.handleChange}  placeholder='cantidad'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                    </Form.Field>

                    <Form.Field>
                        <label>Fecha</label>
                        <input type="date" name="date" onChange={this.handleChange}/>
                    </Form.Field>
                    
                    <Form.Group widths='equal'>
                        <Button className='inicia' inverted color='blue' htmlType="submit">Agregar</Button>
                    </Form.Group>
                </Form>

                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default withRouter(RegistroForm);