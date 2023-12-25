

export function ToyList({ toys }) {

    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <li className="toy" key={toy._id}>
                    <header>Name: {toy.name}</header>
                    <p>Price: {toy.price}</p>
                    <p>Labels: {toy.labels.toString()}</p>
                    <p>InStock: {toy.inStock}</p>
                </li>)}
        </ul>
    )
}