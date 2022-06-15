import { Link } from 'react-router-dom'

export default function Houses(props) {
    // in Houses.js
    const houseLinks = props.data.map(house => {
        return <li key={house.id}>
            <Link to={`/houses/${house.id}`}>{house.name}</Link>
            <button
                onClick={() => props.onFav(house)}
            >
                Favorite
            </button>
        </li>
    })
    const favHouses = props.favs.map(house => {
        return <li key={house.id}>
            <Link to={`/houses/${house.id}`}>{house.name}</Link>
            <button
                onClick={() => props.onFav(house)}
            >
                Remove
            </button>
        </li>
    })
    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <h3>All</h3>
            <ul className="list">
                {houseLinks}
            </ul>
            <h3>Favorites</h3>
            <ul className="list">
                {favHouses}
            </ul>
        </div>
    )
}
