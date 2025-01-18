import PropTypes from 'prop-types'

export default function ContactLink(props) {
  const {icon,title,href} = props
  return (
    <ul>
        <a className='pt-4 text-white hover:text-my-grey'href={href} target='_blank' rel='noopener noreferrer'>
            <div className='mr-3 text-my-yellow  inline'>
              <i className={icon}></i>
            </div>
            
            <p className='inline lg:text-lg text-md  font-normal text-center '>
                {title}
            </p>
        </a>
    </ul>

    
  )
} 

ContactLink.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.number.isRequired,
};