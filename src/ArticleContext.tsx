import { createContext } from "react";
import { Article } from "./Article";
import { mockArticles } from "./product-data";

export const ArticleContext = createContext<Array<Article>>(mockArticles);
