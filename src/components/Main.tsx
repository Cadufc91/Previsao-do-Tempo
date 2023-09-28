import { 
  Stack, 
  Input, 
  InputGroup, 
  InputRightElement, 
  Button, 
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,  
} from '@chakra-ui/react';
import { useState } from 'react';

interface IWeather {
  current?: {
    temp_c?: number,
    text?: string,
    condition?: {
      icon?: string;
      text?: string,
    };
  }
  location?: {
    country?: string,
    name?: string,
  }
}

function Main () {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState<IWeather | ''>('');
  const [validateSearch, setValidateSearch] = useState(true);

  const url = `http://api.weatherapi.com/v1/current.json?key=5033e00a09254142af9162014232709&q=${input}&lang=pt`;


  async function handleSearch() {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setSearch(data);
      setInput('');
      setValidateSearch(true);
    } catch {
      setValidateSearch(false);
      setInput('');
    }
  }

  function handleClean() {
    setInput('');
    setSearch('');
  }

  return (
    <>
      <Stack
        width="50%"
        maxWidth="50rem"
        pt="2rem"
        px="2rem"
        alignItems={'center'}
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
        {!validateSearch && <Text color='tomato'>Erro: Cidade inválida.</Text>}

        {search && (
          <Card
            alignItems='center'
            width='35%'
            mt='30px'
            borderRadius='10px'
          >
            <CardHeader
              display='flex'
              flexDirection='column'
              alignItems='center'
              p='1rem'
            >
              {search.location && search.location.name !== undefined && (
                <Heading>{search.location.name}</Heading>
              )}
              {search.location && search.location.country !== undefined && (
                <Text>{search.location.country}</Text>
              )}
            </CardHeader>
            <CardBody
              display='flex'
              flexDirection='column'
              alignItems='center'
              p='1rem'
            >
              {search.current && search.current.condition && search.current.condition.icon !== undefined && (
                <Image 
                  src={search.current.condition.icon} 
                  alt='Tempo' 
                  boxSize='90px'
                />
              )}
              <CardFooter
                display='flex'
                flexDirection='column'
                alignItems='center'
                p='1rem'
              >
                {search.current && search.current.condition && search.current.condition.text !== undefined && (
                  <Text>
                    {search.current.condition.text}
                  </Text>
                )}
                {search.current && search.current.temp_c !== undefined && (
                  <Text>
                    Temperature: {search.current.temp_c} °C
                  </Text>
                )}
                <Button onClick={handleClean} h='2rem' size='sm' mt='10px'>Limpar</Button>
              </CardFooter>
            </CardBody>
          </Card>
        )}
        
      </Stack>
    </>
  )
}

export default Main;
