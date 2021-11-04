import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ResidentItem from '../ResidentItem';

import './style.scss';

export default function ResidentsSection() {
    return (
        <section className="residentsSection">
            <div className="residentsSection__header">
                <h2 className="residentsSection__title">ул.Пвфоврыфо, д.3, кв.2</h2>
                <div className="residentsSection__menu">
                    <PersonAddIcon className="residentsSection__icon" />
                </div>
            </div>
            <div className="residentsSection__list">
                <ResidentItem />
                <ResidentItem />
                <ResidentItem />
                <ResidentItem />
            </div>
        </section>
    )
}