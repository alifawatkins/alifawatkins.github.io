

function FreeGameCard(props){
    return (
        <div className="item-container">
            <img alt="freegame" width="100px" height="100px" src={props.thumbnail} />
            <div className="card">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>{props.instructions}</p>
                <p>{props.platforms}</p>
                <p>{props.open_giveaway_url}</p>
             </div>
        </div>
       
    )
}

export default FreeGameCard;