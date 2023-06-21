import PropTypes from 'prop-types';
import { getRandomHexColor } from 'generalFunction/randomColor';
import css from './Statistic.module.css';

export const Statistics = ({title, datas}) => { return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
        <ul className={css.statList}>
            <li key={datas[0].id} className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}}>
                <span className={css.label}>{datas[0].label}</span>
                <span className={css.percentage}>{datas[0].percentage}%</span>
            </li>
            <li key={datas[1].id} className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}}>
                <span className={css.label}>{datas[1].label}</span>
                <span className={css.label}>{datas[1].percentage}%</span>
            </li>
            <li key={datas[2].id} className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}}>
                <span className={css.label}>{datas[2].label}</span>
                <span className={css.percentage}>{datas[2].percentage}%</span>
            </li>
            <li key={datas[3].id} className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}}>
                <span className={css.label}>{datas[3].label}</span>
                <span className={css.percentage}>{datas[3].percentage}%</span>
            </li>
            <li key={datas[4].id} className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}}>
                <span className={css.label}>{datas[4].label}</span>
                <span className={css.percentage}>{datas[4].percentage}%</span>
            </li>
        </ul>
    </section>
)};

Statistics.propTypes = {
    title: PropTypes.string,
    datas: PropTypes.array.isRequired,
}