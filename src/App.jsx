import {Layout,AuthContextProvider} from './Common/JSX_Paths'

function App() {
  return (
    <>
        <AuthContextProvider>
        <Layout/>
        </AuthContextProvider>
    </>
  );
}

export default App;
