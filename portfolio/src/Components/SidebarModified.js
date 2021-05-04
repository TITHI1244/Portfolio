const Sidebar = ({index, description, imageRef}) => {
  return (
    <div id={`box-${index}`}>
      <p>
        {description} 👇
      </p>
      <a href={imageRef} target="_blank" rel="noreferrer">
        Click
      </a>
    </div>
  )
}

export default Sidebar;