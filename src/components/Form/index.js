import { useCallback, useEffect, useState } from "react";
import { FormsContainer, TituloForms, Forms, TituloInput, Input, FormGroup, FormConfig, Button} from "./styles";
import axios from "axios";

function Form() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [gravadora, setGravadora] = useState('');
    const [ano, setAno] = useState('');
 
    async function handlePost(event){
        event.preventDefault();
        if (titulo == ''|| autor == '' || gravadora == '' || ano =='') {
            return
        }
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title: titulo,
            author: autor,
            record: gravadora,
            year: ano
        });
        console.log(res)
    }

    return(
        <>
            <FormsContainer>
                <Forms>
                    <TituloForms>Musicas</TituloForms>
                    <FormConfig>
                        <FormGroup>
                            <TituloInput>Titulo:</TituloInput>
                            <Input onChange={ e => setTitulo(e.target.value)} type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <TituloInput>Nome Autor:</TituloInput>
                            <Input onChange={ e => setAutor(e.target.value)} type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <TituloInput>Nome Gravadora:</TituloInput>
                            <Input onChange={ e => setGravadora(e.target.value)} type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <TituloInput>Ano Lançamento:</TituloInput>
                            <Input onChange={ e => setAno(e.target.value)} type="date"/>
                        </FormGroup>
                        <Button onClick={handlePost}> Enviar</Button>
                    </FormConfig>
                </Forms>
            </FormsContainer>
        </>
    )
}

export default Form