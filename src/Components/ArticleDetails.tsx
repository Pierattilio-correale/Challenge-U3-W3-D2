import { useEffect, useState } from "react";
import { Article } from "../Types";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card } from "react-bootstrap";

type Params = {
  MyID: string;
};

const ArticleDetails = function () {
  const params = useParams<Params>();
  const spaceURL = "https://api.spaceflightnewsapi.net/v4/articles/";

  const [article, setArticle] = useState<Article | null>(null);
  const getArticles = () => {
    fetch(spaceURL + params.MyID)
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
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={8}>
            <Card>
              <Card.Img variant="top" src={article?.image_url} />
              <Card.Body className="bg-dark text-white">
                <Card.Title>Autore {article?.authors[0].name}</Card.Title>
                <Card.Title> {article?.title}</Card.Title>
                <Card.Text>{article?.summary}</Card.Text>
                <Card.Text>
                  Data di pubblicazione : {article?.published_at}
                </Card.Text>
                {article?.authors?.[0]?.socials && (
                  <Card.Text>
                    Social:
                    {article.authors[0].socials.bluesky && (
                      <li>
                        Bluesky:{" "}
                        <a
                          className=" text-decoration-none"
                          href={article.authors[0].socials.bluesky}
                        >
                          {" "}
                          {article.authors[0].socials.bluesky}
                        </a>
                      </li>
                    )}
                    {article.authors[0].socials.instagram && (
                      <li>
                        Instagram:{" "}
                        <a
                          className=" text-decoration-none"
                          href={article.authors[0].socials.instagram}
                        >
                          {article.authors[0].socials.instagram}
                        </a>
                      </li>
                    )}
                    {article.authors[0].socials.linkedin && (
                      <li>
                        LinkedIn:{" "}
                        <a
                          className=" text-decoration-none"
                          href={article.authors[0].socials.linkedin}
                        >
                          {article.authors[0].socials.linkedin}
                        </a>
                      </li>
                    )}
                    {article.authors[0].socials.mastodon && (
                      <li>
                        Mastodon:{" "}
                        <a
                          className=" text-decoration-none"
                          href={article.authors[0].socials.mastodon}
                        >
                          {article.authors[0].socials.mastodon}
                        </a>
                      </li>
                    )}
                    {article.authors[0].socials.x && (
                      <li>
                        X:{" "}
                        <a
                          className=" text-decoration-none"
                          href={article.authors[0].socials.x}
                        >
                          {article.authors[0].socials.x}
                        </a>{" "}
                      </li>
                    )}
                    {article.authors[0].socials.youtube && (
                      <li>
                        YouTube:{" "}
                        <a
                          className=" text-decoration-none"
                          href={article.authors[0].socials.youtube}
                        >
                          {article.authors[0].socials.youtube}
                        </a>
                      </li>
                    )}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ArticleDetails;
