import { Moment } from "../types/moment";

export function createMoment() {
    const moments = JSON.parse(localStorage.getItem("moments") as string);

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
    } else {
        moments.push({
            name: "Untitled Moment",
            text: "",
            createdDate: Date.now(),
        });
        localStorage.setItem("moments", JSON.stringify(moments));
    }
    return moments.length - 1;
}
