function ShowTime(){

    const time =  new Date()
    // console.log(date.toString())
    let showDate = time.toLocaleDateString()
    let showTime = time.toLocaleTimeString()

    return (
        <div>
            <p className="lead">This is the current time: {showDate} - {showTime}</p>
        </div>
    );
}

export default ShowTime;