function Card(props) {
  return (
    <div
      className="card border border-black m-4 w-48"
      name={props.name}
      onClick={props.handleClick}
    >
      <img name={props.name} src={props.src} alt={props.name} />
    </div>
  );
}

export default Card;
