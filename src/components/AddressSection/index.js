import { useDispatch, useSelector } from "react-redux";
import { Button, CircularProgress } from '@mui/material';
import DataSelect from '../DataSelect';
import './style.scss';
import { selectStreets, selectStreetsError, selectStreetsLoading } from "../../store/streets/selectors";
import { getStreets } from "../../store/streets/actions";
import { HOUSES_URL, STREET_URL } from "../../utils/constants";
import { useCallback, useEffect, useState } from "react";
import { getHouses } from "../../store/houses/actions";
import { selectHouses } from "../../store/houses/selectors";

export default function AddressSection() {
    const dispatch = useDispatch();

    //создание переменной статуса загрузки
    const loading = useSelector(selectStreetsLoading);

    //создание переменной ошибки
    const error = useSelector(selectStreetsError);

    //список улиц
    const streets = useSelector(selectStreets);

    const houses = useSelector(selectHouses);

    //поле ввода номера дома неактивно пока не выбирем улицу
    const [isDisableHouseSelect, setIsDisableHouseSelect] = useState(true);

    //повторная загрузка списка улиц
    const reload = () => {
        dispatch(getStreets(STREET_URL));
    }

    /**
     * Функция получения id выбранной улицы
     * и получение списка домов
     */
    const handleSetStreet = useCallback(
        (id) => {
            setIsDisableHouseSelect(false);
            dispatch(getHouses(`${HOUSES_URL + id}`));
        }, []
    )


    useEffect(() => {
        reload();
    }, []);

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
                                    list={[]}
                                    isEnable={isDisableHouseSelect}
                                />
                                <DataSelect
                                    label='Квартира'
                                    list={[]}
                                    isEnable={true}
                                />
                                <Button variant="contained">Выбрать</Button>
                            </>
                        )}
                    </>
                )
                }
            </form>

        </section>
    )
}