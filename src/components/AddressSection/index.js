import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress } from '@mui/material';
import DataSelect from '../DataSelect';
import './style.scss';
import { selectCurrentStreet, selectStreets, selectStreetsError, selectStreetsLoading } from "../../store/streets/selectors";
import { getStreets } from "../../store/streets/actions";
import { FLATS_URL, HOUSES_URL, STREET_URL } from "../../utils/constants";
import { useCallback, useEffect, useState } from "react";
import { getHouses } from "../../store/houses/actions";
import { selectHouses } from "../../store/houses/selectors";
import { selectFlats } from "../../store/flats/selectors";
import { getFlats } from "../../store/flats/actions";

export default function AddressSection({ onSetAddress }) {
    const dispatch = useDispatch();

    //создание переменной статуса загрузки
    const loading = useSelector(selectStreetsLoading);

    //создание переменной ошибки
    const error = useSelector(selectStreetsError);

    //список улиц
    const streets = useSelector(selectStreets);
    //список домов
    const houses = useSelector(selectHouses);
    //список квартир
    const flats = useSelector(selectFlats);

    //поле ввода номера дома неактивно пока не выбирем улицу
    const [isDisableHouseSelect, setIsDisableHouseSelect] = useState(true);
    //поле ввода номера квартиры неактивно пока не выбирем номер дома
    const [isDisableFlatSelect, setIsDisableFlatSelect] = useState(true);
    //кнопка неактивна пока не выбирем номер квартиры
    const [isDisableButton, setIsDisableButton] = useState(true);

    const [idCurrentStreet, setIdCurrentStreet] = useState(0);
    const [idCurrentHouse, setIdCurrentHouse] = useState({});
    const [idCurrentFlat, setIdCurrentFlat] = useState({});

    //повторная загрузка списка улиц
    const reload = () => {
        dispatch(getStreets(STREET_URL));
    }

    useEffect(() => {
        reload();
    }, []);

    /**
     * Функция получения списка домов по id улицы
     */
    const handleSetStreet = useCallback(
        (id) => {
            setIsDisableHouseSelect(false);
            setIsDisableFlatSelect(true);
            dispatch(getHouses(`${HOUSES_URL + id}`));
            setIdCurrentStreet(id);
        }, []
    );

    /**
     * Функция получения списка квартир по id дома
     */
    const handleSetHouse = useCallback(
        (id) => {
            setIsDisableFlatSelect(false);
            dispatch(getFlats(`${FLATS_URL + id}`));
            setIdCurrentHouse(id);
        }, []
    );

    const handleSetFlat = useCallback(
        (id) => {
            setIsDisableButton(false);
            setIdCurrentFlat(id);
        }, []
    );

    const handleSetAddress = () => {
        let curStr = streets.find(item => item.id === idCurrentStreet);
        let curHouse = houses.find(item => item.id === idCurrentHouse);
        let curFlat = flats.find(item => item.id === idCurrentFlat);
        onSetAddress(curStr, curHouse, curFlat);
    };

    return (
        <section className="addressSection">
            <h2>Выберите адрес</h2>
            <form>
                {loading ? (
                    <>
                        <CircularProgress />
                    </>
                ) : (
                    <>
                        {error ? (
                            <>
                                <h4>Ошибка получения данных: {error}</h4>
                                <Button
                                    variant="contained"
                                    onClick={reload}
                                >
                                    Обновить
                                </Button>
                            </>
                        ) : (
                            <>
                                <DataSelect
                                    label='Улица'
                                    list={streets}
                                    isEnable={false}
                                    handleChange={handleSetStreet}
                                />
                                <DataSelect
                                    label='Дом'
                                    list={houses}
                                    isEnable={isDisableHouseSelect}
                                    handleChange={handleSetHouse}
                                />
                                <DataSelect
                                    label='Квартира'
                                    list={flats}
                                    isEnable={isDisableFlatSelect}
                                    handleChange={handleSetFlat}
                                />
                                <Button
                                    variant="contained"
                                    disabled={isDisableButton}
                                    onClick={handleSetAddress}
                                >
                                    Выбрать
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={reload}
                                    className="addressSection__reloadButton"
                                >
                                    Отменить
                                </Button>
                            </>
                        )}
                    </>
                )
                }
            </form>

        </section>
    )
}