import '../../sass/components/_button.scss'
interface LinkBtnProps {
  className: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({className}) => {

  return (
      <a   className={className} target='blank' href="https://www.instagram.com/focus.photolab/?utm_source=ig_web_button_share_sheet">      
      Сторінка студії
    </a>
  )
}

export default LinkBtn