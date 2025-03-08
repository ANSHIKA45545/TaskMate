import { useEffect, useState } from "react";


export const TaskInput =({tasklist, setTasklist,task, setTask}) =>{
  const [mode, setMode] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather =(city)=> {
    if(city){
      setLoading(true);
      const apiKey="014ea21ffe58241638be80a224fd81bb";

      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        if(data && data.main && data.weather){
          setWeather(data);
        }else{
          setWeather(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching weather :",error);
        setLoading(false);
      });
    }else{
        setWeather(null);
      }
  };

  useEffect(() => {
    if(task.name && city){
      fetchWeather(city);
    }
  },[task.name,city]);

  const handleSubmit =(e) => {
    e.preventDefault();

    if(!mode){
      alert("Please select a difficulty level!");
      return;
    }

    if(task.id){
      const date= new Date();
      const updateTaskList= tasklist.map((todo) => (
        todo.id === task.id ? {id: task.id, name:task.name, time: `${date.toLocaleDateString()}` ,
        mode :mode, city:city , weather: weather} : todo
      ));
      setTasklist(updateTaskList);
      setTask({});
      setMode("");
      setCity("");
    }else{
      const date = new Date();
      const newTask = {
        id: date.getTime(), 
        name:e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}}`,mode:mode, city:city,weather:weather
      }
      setTasklist([...tasklist, newTask]);
      setTask({});
      setMode("");
      setCity("");
      setWeather(null);
      setLoading(false);
    }
    
  }


  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <div className="">
        <input type="text" name="task" value={task.name || ""} placeholder="Add Task" autoComplete="off" 
        maxLength="35"
        onChange={e => setTask({...task, name:e.target.value})}/>
        
        <input type="text" value={city} placeholder="Enter city" autoComplete="off" 
        maxLength="35"
        onChange={e => setCity(e.target.value)}/>
        </div>

        {loading ? (
          <p>Loading weather data...</p>
        ) : weather ? (
          <p>Weather in {city}:  {weather.main.temp}°C</p>
        ) : (
          <p>No weather data available</p>
        )}

        <div className="mode-buttons">
          <button type="button" className={`mode-button easy ${mode === "easy" ? "selected" : ""}`}
          onClick={() => setMode("easy")}>Easy</button>
          
          <button type="button" className={`mode-button intermediate ${mode === "intermediate" ? "selected" : ""}`}
          onClick={() => setMode("intermediate")}>Intermediate</button>
          
          <button type="button" className={`mode-button hard ${mode === "difficult" ? "selected" : ""}`}
          onClick={() => setMode("hard")}>Hard</button>
        </div>

        <button type="submit" className="submit">{task.id ? "Update" : "Add"}</button>
      </form>

    </section>
  );
    
}