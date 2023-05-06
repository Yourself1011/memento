import { Moment } from "../types/moment";

export function createMoment() {
    const moments = JSON.parse(localStorage.getItem("moments") as string);

    if (!moments) {
        localStorage.setItem(
            "moments",
            JSON.stringify([
                {
                    name: `Untitled Moment 0`,
                    text: "",
                    createdDate: new Date().toJSON().slice(0,10).replace(/-/g,'/')
                },
            ] as Moment[])
        );
    } else {
        moments.push({
            name: `Untitled Moment ${moments.length}`,
            text: "",
            createdDate: new Date().toJSON().slice(0,10).replace(/-/g,'/')
        });
        localStorage.setItem("moments", JSON.stringify(moments));
    }
    return moments.length - 1;
}
