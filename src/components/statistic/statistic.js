import PropTypes from 'prop-types';

export const Statistics = ({title, datas}) => { return (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            <li key={datas[0].id} className="item">
                <span className="label">{datas[0].label}</span>
                <span className="percentage">{datas[0].percentage}%</span>
            </li>
            <li key={datas[1].id} className="item">
                <span className="label">{datas[1].label}</span>
                <span className="percentage">{datas[1].percentage}%</span>
            </li>
            <li key={datas[2].id} className="item">
                <span className="label">{datas[2].label}</span>
                <span className="percentage">{datas[2].percentage}%</span>
            </li>
            <li key={datas[3].id} className="item">
                <span className="label">{datas[3].label}</span>
                <span className="percentage">{datas[3].percentage}%</span>
            </li>
        </ul>
    </section>
)};

Statistics.propTypes = {
    title: PropTypes.string,
    datas: PropTypes.array.isRequired,
}