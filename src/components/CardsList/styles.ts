import styled, {css} from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
    type: 'positive' | 'negative';
};

export const Container = styled.View`
    width: 100%;
    padding: ${RFValue(18)}px ${RFValue(24)}px;
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: ${RFValue(5)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const Header = styled.View`
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`;

export const Amount = styled.Text<TypeProps>`
    color: ${({theme, type}) => type === 'positive' ? theme.colors.success : theme.colors.attention};
    font-size: ${RFValue(20)};
    font-family: ${({theme}) => theme.fonts.regular};
    padding-bottom: ${RFValue(20)}px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TypeTransaction = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const IconTransaction = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
    margin-right: ${RFValue(12)}px;
`;

export const CategoryTransaction = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const DateTransaction = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.regular};
`;