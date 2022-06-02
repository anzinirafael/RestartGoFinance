import styled, {css} from 'styled-components/native'
import {Feather} from '@expo/vector-icons';
import { RFValue} from 'react-native-responsive-fontsize';

interface TypeProps{
    type: 'up' | 'down' | 'total',
}

export const Container = styled.View<TypeProps>`
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    background-color: ${({theme, type}) => type === 'total' ?
    theme.colors.secondary : theme.colors.shape};
    margin-right: ${({type}) => type === 'total' ? 0 : 16}px;
    padding: ${RFValue(20)}px ${RFValue(24)}px;
    border-radius: ${RFValue(5)}px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between; 
`

export const TitleTransactions = styled.Text<TypeProps>`
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.title};
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`

export const IconTransacions = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    color: ${({theme}) => theme.colors.title};
    ${({type}) => type === 'up' && css`color: ${({theme}) => theme.colors.sucess}`}
    ${({type}) => type === 'down' && css`color: ${({theme}) => theme.colors.attetion}`}
    ${({type}) => type === 'total' && css`color: ${({theme}) => theme.colors.shape}`}
`

export const Footer = styled.View``

export const TransactionsValues = styled.Text<TypeProps>`
    color: ${({theme, type}) => type == 'total' ? theme.colors.shape :
    theme.colors.title};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(32)}px;
    margin-bottom: 0;
    margin-top: ${RFValue(20)}px;
`

export const Date = styled.Text<TypeProps>`
    color: ${({theme, type}) => type === 'total' ? theme.colors.shape:
theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    margin-top: 0;
`