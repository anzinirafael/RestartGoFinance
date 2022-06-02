import {
    Container,
    Header,
    TitleTransactions,
    IconTransactions,
    Footer,
    TransactionsValues,
    Date
} from './styles';

interface PropsCard {
    type: 'up' | 'down' | 'total',
    title: string,
    amount: string,
    lastTransaction: string,
};

const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign"
};

export function Cards({type, title, amount, lastTransaction} : PropsCard){
    return(
        <Container type={type}>
            <Header>
                <TitleTransactions type={type}>{title}</TitleTransactions>
                <IconTransactions name={icon[type]} type={type}/>
            </Header>
            <Footer>
                <TransactionsValues type={type}>{amount}</TransactionsValues>
                <Date type={type}>{lastTransaction}</Date>
            </Footer>
        </Container>
    );
};