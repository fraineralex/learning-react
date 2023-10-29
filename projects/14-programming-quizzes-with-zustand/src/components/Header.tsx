import { useQuestionsStore } from "../store/questions"
import { quizzes } from "../types"
import SplitQuizLanguage from "./SplitQuizLanguage"

export const Header:React.FC = () => {
    const quiz = useQuestionsStore(state => state.quiz)
    const setQuiz = useQuestionsStore(state => state.setQuiz)
    const resetGame = useQuestionsStore(state => state.reset)
  
    const handleChangeQuiz = (quiz: quizzes) => {
      setQuiz(quiz)
      resetGame()
    }
    
    return (
        <header style={{ display: 'flex', alignItems: 'flex-start' }}>
        <SplitQuizLanguage changeQuiz={handleChangeQuiz} selectedQuiz={quiz} />
      </header>
    )
}