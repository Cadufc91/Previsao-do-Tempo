import { Stack, StackProps, Input, InputGroup, InputRightElement, Button, Text  } from '@chakra-ui/react';
import { useState } from 'react';

function Main () {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [validateSearch, setValidateSearch] = useState(true);

  const url = `http://api.weatherapi.com/v1/forecast.json?key=5033e00a09254142af9162014232709&q=${input}&lang=pt`;


  async function handleSearch() {
    try{
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setSearch(data);
      setInput('');
      setValidateSearch(true);
    } catch {
      setValidateSearch(false);
      setInput('');
    }
  }

  return (
    <>
      <Stack
        spacing="2rem"
        width="50%"
        maxWidth="50rem"
        mt="-45vh"
        pt="8rem"
        px="1rem"
      >
        <InputGroup>
          <Input 
            placeholder='Buscar cidade' 
            variant='filled' 
            type='text'  
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <InputRightElement width='5rem'>
            <Button
              h='1.75rem'
              size='sm'
              onClick={handleSearch}
            >Buscar</Button>
          </InputRightElement>
        </InputGroup>
        {!validateSearch && <Text>Erro: Cidade inválida.</Text>}

        
      </Stack>
    </>
  )
}

export default Main;