import "./animalImages.styles.css"
function animalImages({number}){
    return(
        <img
          src={require(`/public/TestImages/${number}.jpg`)}
          alt={`Img ${number}`}
          className="Img"
        />
    )
}
export default animalImages;