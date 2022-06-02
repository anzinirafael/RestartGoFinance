import {
    Container,
    Header,
    TitleTransactions,
    IconTransacions,
    Footer,
    TransactionsValues,
    Date
} from './style';

interface PropsCard {
    type: 'up' | 'down' | 'total',
    title: string,
    amount: string,
    lastTransaction: string,
}

const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign"
}

export function Cards({type, title, amount, lastTransaction} : PropsCard){
    return(
        <Container type={type}>
            <Header>
                <TitleTransactions type={type}>{title}</TitleTransactions>
                <IconTransacions name={icon[type]} type={type}/>
            </Header>
            <Footer>
                <TransactionsValues type={type}>{amount}</TransactionsValues>
                <Date type={type}>Última entrada dia {lastTransaction}</Date>
            </Footer>
        </Container>
    );
};