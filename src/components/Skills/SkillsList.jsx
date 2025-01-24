

function SkillsList({src,skill}) {
  return (
    <span>
      <img src={src} alt='Checkmark icon'/>
      <p style={{fontSize:'22px',fontFamily:'Roboto Mono, monospace'}}>{skill}</p>
    </span>
  )
}

export default SkillsList;
