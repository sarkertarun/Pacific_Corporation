
const List = ({text,href,className}) => {
    return (
      <li><a className={`${className} font-openSans inline-block `} href={href}>{text}</a></li>
    )
  }

export default List