import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function InputForm(props) {
    const [form, setForm] = useState({ name: '', timeZone: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.name !== '' && form.timeZone !== '') {
            const setClocks = {
                id: uuidv4(),
                name: form.name,
                timeZone: form.timeZone
            };

            props.onFormSubmit(setClocks);
            setForm({ name: '', timeZone: '' });
        }
    };

    return (
        <form>
            <label>Название
                <input name='name' onChange={handleChange} value={form.name} />
            </label>
            <label>Временная зона
                <input name='timeZone' type='number' onChange={handleChange} value={form.timeZone} />
            </label>
            <input type='button' onClick={handleSubmit} value='Добавить' />
        </form>
    );
}
