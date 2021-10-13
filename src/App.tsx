import HeaderTitle from './components/HeaderTitle';
import { Global, css } from '@emotion/react';
import Card from './components/Card';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Global 
        styles={css`
          body{
            font-family: 'Manrope', sans-serif;
            background-color: #eaeefb;
          }
        `}
      />


      <HeaderTitle />
      <Card />


        

    </div>
  );
}

export default App;
