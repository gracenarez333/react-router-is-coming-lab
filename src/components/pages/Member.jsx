import { useParams } from 'react-router-dom'

export default function Member(props) {
    // in Member.js
    let { houseId, memberId } = useParams()
    const house = props.data.find(house => house.id.toString() === houseId)
    const member = house.people.find(member => member.id.toString() === memberId)
    return (
        <div className="page">
            <div className="header">
                <a href={`https://awoiaf.westeros.org/index.php/${member.wikiSuffix}`}>{member.name}</a>
            </div>
            <div className="desc">
                {member.description}
            </div>
        </div>
    )
}
