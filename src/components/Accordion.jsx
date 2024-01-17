import PropTypes from "prop-types";

const Accordion = (props) => {
  const question = props.question;
  const answer = props.answer;

  return (
    <div className="my-4">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">{question}</div>
        <div className="collapse-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

// ** USAGE :
{
  /* <Accordion answer="This is the answer" question="This is the question" />; */
}

export default Accordion;
