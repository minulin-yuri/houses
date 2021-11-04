import { Box } from '@mui/system';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './style.scss';

export default function ResidentItem() {
    return (
        <Box className="residentsSection__item person">
            <div className="person__contacts">
                <h3 className="person__title">Иванов Иван Иванович</h3>
                <div className="person__data">
                    <PhoneIcon />
                    <span>+7(914) 534-52-50</span>
                </div>
                <div className="person__data">
                    <EmailIcon />
                    <span>email@email.com</span>
                </div>
            </div>
            <div className="person__actions">
                <EditIcon />
                <DeleteIcon />
            </div>
        </Box>
    )
}