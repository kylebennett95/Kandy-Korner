import { useEffect, useState } from "react";

export const DataList = () => {
    const [locations, findLocations] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationArray) => {
              findLocations(locationArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    return <>
        <h2>List of Tickets</h2>

        <article className="locations">
            {
                locations.map(
                    (location) => {
                        return <section className="locations">
                            <header>{location.address}</header>
                            <footer>Square Footage: {location.sqFootage}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>





}