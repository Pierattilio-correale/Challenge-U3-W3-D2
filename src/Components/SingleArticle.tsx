import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Article } from "../Types";

interface SingleArticleProps {
  article: Article;
}

const SingleArticle = function (props: SingleArticleProps) {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body className="bg-dark text-white">
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>{props.article.summary}</Card.Text>
          <Card.Text>
            Data di pubblicazione : {props.article.published_at}
          </Card.Text>

          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/ArticleDetails/" + props.article.id);
            }}
          >
            Vai all'articolo
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleArticle;
