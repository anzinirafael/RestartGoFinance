import 'styled-components';
import theme from './theme';
//Atravéz da declaração abaixo, conseguimos inserir no padrão do styled o thema criado
declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType{}
};