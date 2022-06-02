//Importação do React
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Cards } from '../../components/Cards';
import { CardsList, DataProps } from '../../components/CardsList';
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
    HighLightCards,
    Transactions,
    Title,
}from './styles';

export interface DataIdProps extends DataProps{
    id: string;
}
//Exportação da página de dashboard
export function Dashboard(){
    const data: DataIdProps[] = [{
        id: '1',
        title:"Desenvolvimento de site",
        amount:"12.000,00",
        category:{icon: 'dollar-sign', name: 'Vendas'},
        date : "13/04/2020",
        type: "positive"
    },
    {
        id: '2',
        title:"Hamburgueria Pizzy",
        amount:"59,00",
        category:{icon: 'coffee', name: 'Alimentação'},
        date : "10/04/2020",
        type: "negative"
    },
    {
        id: '3',
        title:"Aluguel do apartamento",
        amount:"1.200,00",
        category:{icon: 'shopping-bag', name: 'Casa'},
        date : "10/04/2020",
        type: "negative"
    }]
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
            <Transactions>
                <Title>Transações</Title>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <CardsList data={item} /> }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: getBottomSpace()}}
                />
            </Transactions>
        </Container>
    );
};