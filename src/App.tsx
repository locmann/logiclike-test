import {useGetCourses} from "./hooks/useGetCourses.ts";
import Tags from "./components/Tags/Tags.tsx";
import MainScreen from "./components/MainScreen/MainScreen.tsx";

import styles from './App.module.scss'
import {extractThemes} from "./services/extractThemes.ts";
import AppContextProvider from "./components/AppContextProvider/AppContextProvider.tsx";
function App() {


  const data = useGetCourses()
  const filterThemes = extractThemes(data)

  return (
    <main className={styles.wrapper}>
      <AppContextProvider courses={data} themes={filterThemes}>
        <Tags />
        <MainScreen />
      </AppContextProvider>
    </main>
  )
}

export default App
