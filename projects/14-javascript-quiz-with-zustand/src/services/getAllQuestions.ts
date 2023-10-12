export async function getAllQuestions(limit: number) {
    const response = await fetch('http://localhost:5173/data.json')
    const json = await response.json()

    const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

    return questions
}