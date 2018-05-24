import React from 'react';
import { Card, Image, Button, Progress, Table, Icon} from 'semantic-ui-react';
import RegistroForm from './RegistroForm';

export const Registro =(props)=> {
        return(
          <Table.Row>

              <Table.Cell>
                  {props.category}
                </Table.Cell>
                <Table.Cell>{props.date}</Table.Cell>
                <Table.Cell>{props.description}</Table.Cell>
                <Table.Cell>${props.quantity}.00</Table.Cell>
                <Table.Cell collapsing><Button circular basic size="mini" color='blue' icon='trash' onClick={()=>props.delete(props._id)}/></Table.Cell>
          </Table.Row>
        )
}
