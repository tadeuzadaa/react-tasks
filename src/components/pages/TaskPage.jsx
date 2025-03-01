import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"
import './TaskPage.css'

function TaskPage() {
    const [serachParams] = useSearchParams();

    const title = serachParams.get("title")
    const description = serachParams.get("description")

    const navigate = useNavigate()
    const onBackClick = () => {
        navigate(-1)
    }

    return <div>
            <div className="headerDetails">
            <button onClick={onBackClick}>
                    <ChevronLeftIcon />
                </button>
                <h1>Detalhes da Tarefa</h1>
            </div>
                <div className="taskDetails">
                    <h2>{title}</h2>
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
}
export default TaskPage

