import { toyService } from "../../services/toy.service";
import { SET_TOYS } from "../redcuers/toy.reducer";
import { store } from "../store"


export function loadToys() {

    return toyService.query()
        .then(toys => {
            console.log("toys:", toys)
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            console.log('toy action -> Cannot load toys', err)
            throw err
        })
}