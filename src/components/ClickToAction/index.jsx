export default function index(props) {
  return (
    <div className={props.clickWrap}>
        <div className={props.clickText}>{props.text}</div>
        <img src={props.image} alt="arrow"
          className={props.clickImage}
        />
    </div>
  )
}
