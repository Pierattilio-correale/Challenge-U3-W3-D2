import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import ArticleApiResponse from "../Types";

const spaceURL = "https://api.spaceflightnewsapi.net/v4/articles";

const ArticlesComponent = function () {
  const [article, setArticle] = useState<ArticleApiResponse | null>(null);
  const [isloading, setIsloading] = useState(true);
  const [iserror, setIserror] = useState<string | null>(null);

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
        setArticle(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log("Errore", err);
        setIserror(err.message);
        setIsloading(false);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container>
      <Row>
        {isloading && (
          <Col xs={12} className="text-center my-4">
            <Spinner animation="border" variant="primary" />
          </Col>
        )}

        {iserror && (
          <Col xs={12} className="my-4">
            <Alert variant="danger">
              Errore nel caricamento degli articoli
            </Alert>
          </Col>
        )}

        {!isloading &&
          !iserror &&
          article?.results.map((articles) => (
            <Col
              key={articles.id}
              xs={12}
              md={8}
              lg={6}
              xl={4}
              className="mb-4"
            >
              <SingleArticle article={articles} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ArticlesComponent;
