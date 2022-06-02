//Importação da página de dashboard da aplicação
import { Dashboard } from "./src/screens/Dashboard";
//Importação do app loading para aguardar o carregamento da página
import AppLoading from "expo-app-loading";
//Importação da conteneirização do tema global criado
import {ThemeProvider} from 'styled-components';
//Importação do tema criado para passagem de parametro na conteinerização provider
import theme from './src/global/styles/theme';
//Importação da font poppins junto com o use fonts para carregamento de font
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

//Exportação da função App responsável pela renderização do App
export default function App() {
  //Utilização do Hook useFonts utilizando seu primeiro parametro para o carregamento das fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  //Enquanto a constante fontsLoaded não tiver todo o seu carregamento não será renderizado o app
  if(!fontsLoaded){
    //Utilização do app loading para aguardar o carregamento do app
    return <AppLoading/>
  }
  //Retorno da função App, será renderizado em tela 
  return (
    //Renderização theme provider com o parametro de thema sendo passado o que foi criado
    //Renderização da página de dashboard
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}


