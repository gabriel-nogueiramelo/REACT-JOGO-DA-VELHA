function Icon ({ iconName, size, Link }) {
  return (
    <a href={Link} target="_blank">
        <img src={`/icons/${iconName}.svg`} wigth={size} />
    </a>
  )
}

Icon.defaultProps = {
  size: '30px'
}

export default Icon