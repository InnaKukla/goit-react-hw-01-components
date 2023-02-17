import PropTypes from 'prop-types'
import { StatisticsSection, StatisticsTitle, StatList } from "./Statistics.styled"

export const Statistics =({title , stats}) => {
    return (
        <StatisticsSection>
            <StatisticsTitle>{title}</StatisticsTitle>

            <StatList>
                {stats.map(item => 
                <li className="item" key={item.id}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}</span>
                </li>)}
            </StatList>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    avatar: PropTypes.string,
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
}