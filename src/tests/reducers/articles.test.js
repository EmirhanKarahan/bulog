import articlesReducer from "../../reducers/articles";
import articles from "../fixtures/articles";

test("should set default state", () => {
  const state = articlesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove article by id", () => {
  const action = {
    type: "REMOVE_ARTICLE",
    id: articles[0].id,
  };
  const state = articlesReducer(articles, action);
  expect(state).toEqual([articles[1], articles[2]]);
});

test("should not remove articles if id not found", () => {
  const action = {
    type: "REMOVE_ARTICLE",
    id: -1,
  };
  const state = articlesReducer(articles, action);
  expect(state).toEqual(articles);
});

test("should add an article", () => {
  const article = {
    id: "test-id",
    title: "test",
    subtitle: "test",
    content: "test",
    imageUrl: "https://google.com",
    date: 12124124,
    author: "Emirhan K",
  };
  const action = {
      type: "ADD_ARTICLE",
      article
  }
  const state = articlesReducer(articles, action);
  expect(state).toEqual([...articles, article])
});

test("should edit an article", ()=>{
    const title = "New test title"
    const action = {
        type:"EDIT_ARTICLE",
        id:articles[1].id,
        updates:{title}
    }
    const state = articlesReducer(articles, action)
    expect(state[1].title).toBe(title)
})

test("should not edit an article if article not found", ()=>{
    const title = "New test title"
    const action = {
        type:"EDIT_ARTICE",
        id:-1,
        updates:{title}
    }
    const state = articlesReducer(articles, action)
    expect(state).toEqual(articles)
})
