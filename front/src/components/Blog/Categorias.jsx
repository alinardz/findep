import React, {Component} from 'react';
import {Label} from 'semantic-ui-react';

const categorias=(props)=>(
     <div>
        <h2>Categorías</h2>
            <Label as='a' color='red' size="massive">{props.name}</Label>
    </div>
)





export default categorias;