

function FreeGameCard(props){
    return (
        <div className="item-container">
            <img alt="freegame" width="100px" height="100px" src={props.thumbnail} />
            <div className="card">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>{props.instructions}</p>
                <p>{props.open_giveaway_url}</p>
                <p>{props.platforms}</p>
             </div>
        </div>
       
    )
}

export default FreeGameCard;