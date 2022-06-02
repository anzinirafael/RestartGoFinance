import {
    Container,
    Header,
    Title,
    Amount,
    Footer,
    TypeTransaction,
    IconTransaction,
    CategoryTransaction,
    DateTransaction,
} from './styles';

interface Category{
    icon: string;
    name: string;
};

export interface DataProps{
    type: 'positive' | 'negative';
    category: Category;
    amount:  string;
    date: string;
    title: string;
};

interface Props{
    data: DataProps;
}    


export function CardsList({data} : Props){
    return(
        <Container>
            <Header>
                <Title>{data.title}</Title>
                <Amount type={data.type}>{data.type === 'negative' ? '- ' + 'R$' + data.amount : 'R$' + data.amount}</Amount>
            </Header>
            <Footer>
                <TypeTransaction>
                    <IconTransaction name={data.category.icon}/>
                    <CategoryTransaction>{data.category.name}</CategoryTransaction>
                </TypeTransaction>
                <DateTransaction>{data.date}</DateTransaction>
            </Footer>
        </Container>
    );
};