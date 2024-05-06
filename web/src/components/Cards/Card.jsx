import "./Card.css";

function Card({ imageSrc, title, text }) {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={imageSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
