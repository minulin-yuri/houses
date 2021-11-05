import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useEffect, useState } from 'react';
import ResidentItem from '../ResidentItem';

import './style.scss';

export default function ResidentsSection({ curAddress }) {

    const [currentAddressTitle, setCurrentAddressTitle] = useState('');

    console.log('curadr');
    console.log(curAddress);

    useEffect(() => {
        if (curAddress.street && curAddress.house && curAddress.flat) {
            setCurrentAddressTitle(`ул.${curAddress.street.name}, д.${curAddress.house.name}, кв.${curAddress.flat.name}`);
        }
    }, [curAddress]);

    return (
        <section className="residentsSection">
            {
                currentAddressTitle ? (
                    <>
                        <div className="residentsSection__header">
                            <h2 className="residentsSection__title">{currentAddressTitle}</h2>
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
                    </>
                ) : (
                    <>
                        <h2 className="residentsSection__title">Выберите адрес</h2>
                    </>
                )
            }
        </section >
    )
}