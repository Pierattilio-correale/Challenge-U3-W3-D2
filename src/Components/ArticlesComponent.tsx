import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import ArticleApiResponse from "../Types";
const spaceURL = "https://api.spaceflightnewsapi.net/v4/articles";

const ArticlesComponent = function () {
  const [article, setArticle] = useState<ArticleApiResponse | null>(null);
  const getArticles = () => {
    fetch(spaceURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel trovare gli articoli spaziali");
        }
      })
      .then((data) => {
        console.log(data);
        setArticle(data);
      })
      .catch((err) => {
        console.log("Errore", err);
      });
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      <Container>
        <Row>
          {article?.results.map((articles) => {
            return (
              <Col key={articles.id} md={4} className="mb-4">
                <SingleArticle article={articles} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default ArticlesComponent;
