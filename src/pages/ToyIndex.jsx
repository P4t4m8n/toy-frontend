import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToyList } from '../cmps/ToyList'
import { loadToys } from "../store/actions/toy.actions"


export function ToyIndex() {

    const toys = useSelector(storeState => storeState.toyMoudle.toys)

    useEffect(() => {
        loadToys()
            .catch((err) => {
                console.log('err:', err)
            })
    })



    return (
        <section className="toys-index">
            <main className="toys">
                <ToyList toys={toys} />

            </main>
        </section>
    )
}