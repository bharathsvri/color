const Content = ({color,setColor,toggle,setToggle,hash,setHash}) => {
    return(
        <div className="colorChange">
            <section className="box" style={{backgroundColor: color,color:toggle}}>
                <p>{color}</p>
            </section>
            <input
                className = "search" 
                type = "text" 
                placeholder="color"
                onChange={e => {
                    setColor(e.target.value) 
                }}
            />
            <button className="btn" onClick={() => {toggle === "black" ? setToggle("white") : setToggle("black")}}>Toggle</button>
        </div>
    )
}

export default Content;