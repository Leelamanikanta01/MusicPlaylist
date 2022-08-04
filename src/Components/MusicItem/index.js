import './index.css'

const MusicItem = props => {
  const {musicDetails, deleteItem} = props
  const {name, genre, imageUrl, duration} = musicDetails

  const onDelete () => {
    deleteItem(id)

  }

  return (
    <li className="list-container">
      <img src={imageUrl} className="icon" alt={name} />
      <div className="name-genre-container">
        <p className="name">{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button type="button" onClick={onDelete} className="button">
          Button
        </button>
      </div>
    </li>
  )
}

export default MusicItem
