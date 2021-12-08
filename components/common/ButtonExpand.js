import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ButtonExpand ({ expanded, onclick }) {
    return (
        <button
            type="button"
            onClick={ () => onclick( ! expanded ) }
            className={`buttonExpand ${ expanded ? 'expanded' : '' }`}
            title="Expand / Collapse"
        >
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
    )
}