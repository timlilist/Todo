import DayCard from "./DayCard";
import Header from "./Header";
import {Link} from "react-router-dom";

export default function WeeklyTodos() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (  
        <> 
            <Header headerText={'Weekly Todos'} />
            <div className="days">
            {
            days.map((day, index) => (
                <Link className="dayLink" key={index} to={`/day/${day}`}>
                    <DayCard day={day} />
                </Link>
            ))
                
                }

            </div>
        </> 
        
    )
}