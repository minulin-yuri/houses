import { Button } from '@mui/material';
import DataSelect from '../DataSelect';
import './style.scss';

export default function AddressSection() {
    return (
        <section className="addressSection">
            <h2>Выберите адрес</h2>
            <form>
                <DataSelect
                    label='Улица'
                />
                <DataSelect
                    label='Дом'
                />
                <DataSelect
                    label='Квартира'
                />
                <Button variant="contained">Выбрать</Button>
            </form>
        </section>
    )
}