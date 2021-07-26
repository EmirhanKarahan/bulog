import { addArticle, editArticle, removeArticle, setArticles } from "../../actions/articles"

test("should setup remove article action object", ()=>{
    const action = removeArticle({id:"123abc"});
    expect(action).toEqual({
        type:"REMOVE_ARTICLE",
        id: "123abc"
    })
})