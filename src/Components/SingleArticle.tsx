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
      <Card className="h-100">
        <Card.Img variant="top" src={props.article.image_url} />
        <Card.Body className="bg-dark text-white d-flex flex-column">
          <Card.Title>{props.article.title}</Card.Title>
          <Card.Text>{props.article.summary}</Card.Text>
          <Card.Text>
            Data di pubblicazione : {props.article.published_at}
          </Card.Text>
          <div className="mt-auto">
            <Button
              variant="outline-primary"
              onClick={() => navigate("/ArticleDetails/" + props.article.id)}
            >
              Vai all'articolo
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleArticle;
