import PropTypes from "prop-types";

const Card = (props) => {
  const CardThumbnail = props.CardThumbnail;
  const CardTitle = props.CardTitle;
  const CardDescription = props.CardDescription;

  return (
    <div className="flex flex-wrap relative card w-96 bg-base-100 shadow-xl image-full p-0 my-2 hover:scale-110 duration-300 mb-[5vh]">
      <figure>
        <img src={CardThumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{CardTitle}</h2>
        <p>{CardDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  CardThumbnail: PropTypes.string.isRequired,
  CardTitle: PropTypes.string.isRequired,
  CardDescription: PropTypes.string.isRequired,
};

// ** USAGE :
{
  /* <Card
CardTitle="Shoes"
CardThumbnail="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
CardDescription="This is a Description"
/> */
}

export default Card;
