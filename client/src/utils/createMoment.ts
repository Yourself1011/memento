import { Moment } from "../types/moment";

export function createMoment() {
    const moments = localStorage.getItem("moments");

    if (!moments) {
        localStorage.setItem(
            "moments",
            JSON.stringify([
                {
                    name: "Untitled Moment",
                    text: "",
                    createdDate: Date.now(),
                },
            ] as Moment[])
        );
    }
}
