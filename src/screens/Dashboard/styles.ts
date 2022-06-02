import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {Feather} from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
//Criação de componentes individuais com estilização em CSS in Js
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme}) => theme.colors.primary};
`;

export const UserContainer = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    margin-bottom: ${RFValue(24)}px;
    padding-left: ${RFValue(24)}px;
    padding-right: ${RFValue(24)}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const UserInfo = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserImage = styled.Image`
    height: ${RFValue(48)}px;
    width: ${RFValue(48)}px;
    border-radius: ${RFValue(10)}px;
    margin-right: ${RFValue(18)}px;
`;

export const SectionText = styled.View`
    display: flex;
`;

export const Hello = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(20)}px;
`;

export const UserName = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(20)}px;
`;

export const Button = styled.TouchableOpacity`

`;

export const IconPower = styled(Feather)`
    font-size: ${(RFValue(24))}px;
    color: ${({theme}) => theme.colors.secondary};
`;

export const HighLightCards = styled.ScrollView`    
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1%;
    padding: ${RFValue(24)}px ${RFValue(16)}px;
    margin-top: ${RFPercentage(10)}px;
`;


export const Title =  styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.regular};
    margin-bottom: ${RFValue(16)}px;
`;

export const TransactionsList = styled.FlatList``