export default function index(props) {
  return (
    <div>
        <p>{props.text}</p>
        <img src={props.image} alt="arrow"/>
    </div>
  )
}
