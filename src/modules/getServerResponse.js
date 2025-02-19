import { output } from "../utils/output.js";


export function getServerResponse(resolve) {
    debugger;
    setTimeout(activateResolve, 5000);

    function activateResolve() {
        const response = {
            message: "Successfully processed.",
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
    }

}