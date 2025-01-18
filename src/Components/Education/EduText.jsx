import PropTypes from "prop-types"

export default function EduText(props) {
    const {p} = props
  return (
    <div>

        <p className='text-my-grey text-sm lg:text-lg'>
            {p}
        </p>

    </div>
  )
}

EduText.propTypes = {
  p: PropTypes.string.isRequired
}
