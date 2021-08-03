import {
  addArticle,
  editArticle,
  removeArticle,
  setArticles,
} from "../../actions/articles";
import articles from "../fixtures/articles";

test("should setup remove article action object", () => {
  const action = removeArticle({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_ARTICLE",
    id: "123abc",
  });
});

test("should setup edit article action object", () => {
  const action = editArticle("123abc", { title: "New title value" });
  expect(action).toEqual({
    type: "EDIT_ARTICLE",
    id: "123abc",
    updates: {
      title: "New title value",
    },
  });
});

test("should setup add article action object with provided values", () => {
  const action = addArticle(articles[0]);
  expect(action).toEqual({
    type: "ADD_ARTICLE",
    article: articles[0],
  });
});

test('should setup set article action object with data', () => {
    const action = setArticles(articles);
    expect(action).toEqual({
      type: 'SET_ARTICLES',
      articles
    });
  });
