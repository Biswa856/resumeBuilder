export const finalizeAction = (document)=>{
    return {
        type: "DOCUMENT_STYLE_CHANGE",
        payload: document
    };
}