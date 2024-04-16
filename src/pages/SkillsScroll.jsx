const SkillsScroll = ({name,avatar,level}) => {
  return (
    <li className="skillsScroll-item">
        <div className="content-card">
            <figure className="skillsScroll-avatar-box">
                <img src={avatar} alt="" width="60"/>
            </figure>
            <h4 className="h4 skillsScroll-item-title">{name}</h4>
            <div className="skillsScroll-text">
                <p>{level}</p>
            </div>
        </div>
    </li>
  )
}

export default SkillsScroll