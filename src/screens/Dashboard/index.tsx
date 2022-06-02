//Importação do React
import React from 'react';
import { Cards } from '../../components/Cards';
//Importação dos componentes criados dentro da folha de estilo
import { 
    Container,
    Header,
    UserContainer,
    UserInfo,
    UserImage,
    SectionText,
    Hello,
    UserName,
    Button,
    IconPower,
    HighLightCards
}from './styles';
//Exportação da página de dashboard
export function Dashboard(){
    //Retorno da função, será rederizado dentro da página
    return(
        //Componente Container para o agrupamento de componentes
        //Componente Header para cabeçalho
        <Container>
            <Header> 
                <UserContainer>
                    <UserInfo>
                        <UserImage source={{ uri: 'https://avatars.githubusercontent.com/u/93722124?v=4' }} />
                        <SectionText>
                            <Hello>Olá,</Hello>
                            <UserName>Rafael Anzini</UserName>
                        </SectionText>
                    </UserInfo>
                    <Button onPress={() => {}}>
                            <IconPower name="power" />
                    </Button>
                </UserContainer>
            </Header> 
            <HighLightCards
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 24, paddingRight: 24 }}
            >
                <Cards
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <Cards
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />
                <Cards
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril"
                />
            </HighLightCards>
        </Container>
    );
};