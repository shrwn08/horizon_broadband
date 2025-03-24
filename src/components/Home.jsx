const Home = ({setName, name, handleSubmit}) =>{

    return (<div className="home">
                <form className="input-container" onSubmit={handleSubmit}>
                    <input className="input-box" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <button className="submit-btn">Submit</button>
                </form>
    </div>)
}

export default Home