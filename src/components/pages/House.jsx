import { useParams, Link } from 'react-router-dom'

export default function House(props) {
    // in House.js
    let { id } = useParams()
    const houseData = props.data.find(house => house.id.toString() === id)
    const members = houseData.people
    const memberLinks = members.map(member => {
        return <li key={member.id}>
            <Link to={`/houses/${houseData.id}/members/${member.id}`}>{member.name}</Link>
            <button
                onClick={() => props.onFav(member)}
            >
                Favorite
            </button>
        </li>
    })
    const favMembers = props.favs.map(member => {
        return <li key={member.id}>
            <Link to={`/houses/${houseData.id}/members/${member.id}`}>{member.name}</Link>
            <button
                onClick={() => props.onFav(member)}
            >
                Remove
            </button>
        </li>
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <h3>All</h3>
            <ul className="list">
                {memberLinks}
            </ul>
            <h3>Favorites</h3>
            <ul className="list">
                {favMembers}
            </ul>
        </div>
    )
}
